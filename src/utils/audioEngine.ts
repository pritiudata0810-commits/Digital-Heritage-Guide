import { useState, useEffect, useRef, useCallback } from 'react';
import { HeritagePart, getPartAudioUrl } from '../data/pataleshwarData';
import { SupportedLanguage } from '../data/translations';

export interface AudioState {
  currentPart: HeritagePart | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playbackRate: number;
  narratorVoiceEnabled: boolean;
  activeLanguage: SupportedLanguage;
}

// Background sound synthesizer - drone and synthetic noises disabled per user request
class CaveSoundSynthesizer {
  public init() {
    // No-op: background bee drone removed
  }

  public startCaveDrone(_volume = 0.25) {
    // Disabled: completely removed buzzing/drone sound ("bee song") per user request
  }

  public playTempleBell() {
    // Disabled: pure narration and audio playback
  }

  public stop() {
    // No-op
  }
}

export const caveSynthesizer = new CaveSoundSynthesizer();

export function useHeritageAudio() {
  const [currentPart, setCurrentPart] = useState<HeritagePart | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(120);
  const [volume, setVolume] = useState(0.85);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [narratorVoiceEnabled, setNarratorVoiceEnabled] = useState(true);
  const [activeLanguage, setActiveLanguageState] = useState<SupportedLanguage>('en');

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressTimerRef = useRef<number | null>(null);
  const currentPartRef = useRef<HeritagePart | null>(null);
  const activeLanguageRef = useRef<SupportedLanguage>('en');
  const isPlayingRef = useRef<boolean>(false);
  const isMp3PlayingRef = useRef<boolean>(false);

  // Keep refs in sync
  useEffect(() => {
    currentPartRef.current = currentPart;
  }, [currentPart]);

  useEffect(() => {
    activeLanguageRef.current = activeLanguage;
  }, [activeLanguage]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  // Clean stop
  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
    isMp3PlayingRef.current = false;
    setIsPlaying(false);
    setCurrentTime(0);
  }, []);

  // Helper to narrate using Web Speech API as fallback if MP3 not yet provided
  const playSpeechNarration = useCallback((part: HeritagePart, lang: SupportedLanguage) => {
    if (!narratorVoiceEnabled || !('speechSynthesis' in window)) return;
    if (isMp3PlayingRef.current) return;

    window.speechSynthesis.cancel();

    let narrationText = `${part.title}. ${part.subtitle}. ${part.audioTranscript}`;
    let langCode = 'en-US';

    if (lang === 'hi') {
      narrationText = `${part.hindiTitle}. ${part.hindiSubtitle}. ${part.hindiAudioTranscript || part.hindiOverview}`;
      langCode = 'hi-IN';
    } else if (lang === 'mr') {
      narrationText = `${part.marathiTitle}. ${part.marathiSubtitle}. ${part.marathiAudioTranscript || part.marathiOverview}`;
      langCode = 'mr-IN';
    }

    const utterance = new SpeechSynthesisUtterance(narrationText);
    utterance.rate = playbackRate * 0.95;
    utterance.pitch = 1.0;
    utterance.lang = langCode;

    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      let matchingVoice: SpeechSynthesisVoice | undefined;
      if (lang === 'hi') {
        matchingVoice = voices.find(v => v.lang.includes('hi'));
      } else if (lang === 'mr') {
        matchingVoice = voices.find(v => v.lang.includes('mr')) || voices.find(v => v.lang.includes('hi'));
      } else {
        matchingVoice = voices.find(v => v.lang.startsWith('en'));
      }
      if (matchingVoice) utterance.voice = matchingVoice;
    }

    utterance.onend = () => {
      if (!isMp3PlayingRef.current) {
        stopAudio();
      }
    };

    window.speechSynthesis.speak(utterance);
  }, [narratorVoiceEnabled, playbackRate, stopAudio]);

  // Initialize HTML Audio element
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'auto';
    audioRef.current = audio;

    const handleEnded = () => {
      isMp3PlayingRef.current = false;
      stopAudio();
    };

    const handlePlay = () => {
      isMp3PlayingRef.current = true;
      // When MP3 starts playing, cancel speech synthesis immediately to avoid overlapping audio
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };

    const handleError = () => {
      isMp3PlayingRef.current = false;
      // Graceful fallback: speech synthesis voice continues seamlessly if MP3 not yet added
      if (currentPartRef.current && isPlayingRef.current) {
        playSpeechNarration(currentPartRef.current, activeLanguageRef.current);
      }
    };

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration) && audio.duration > 0) {
        setDuration(Math.round(audio.duration));
      }
    };

    const handleTimeUpdate = () => {
      if (audio.currentTime !== undefined && !isNaN(audio.currentTime)) {
        setCurrentTime(Math.floor(audio.currentTime));
      }
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.pause();
      if (progressTimerRef.current) clearInterval(progressTimerRef.current);
      if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    };
  }, [stopAudio, playSpeechNarration]);

  // Sync volume with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Sync playback rate with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  // Play language-specific audio track for a given part
  const playLanguageTrack = useCallback((part: HeritagePart, lang: SupportedLanguage) => {
    const audioUrl = getPartAudioUrl(part, lang);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = audioUrl;
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.volume = volume;

      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            isMp3PlayingRef.current = true;
            if ('speechSynthesis' in window) {
              window.speechSynthesis.cancel();
            }
          })
          .catch(() => {
            isMp3PlayingRef.current = false;
            // Fallback to speech synthesis voice if mp3 file is not found or cannot autoplay
            playSpeechNarration(part, lang);
          });
      }
    } else {
      playSpeechNarration(part, lang);
    }
  }, [playbackRate, volume, playSpeechNarration]);

  // Start audio for a specific part
  const startAudio = useCallback((part: HeritagePart, langOverride?: SupportedLanguage) => {
    stopAudio();

    const langToUse = langOverride || activeLanguage;
    setCurrentPart(part);
    setDuration(part.durationSec);
    setCurrentTime(0);
    setIsPlaying(true);
    isPlayingRef.current = true;

    // Play language-specific mp3 without any background drone
    playLanguageTrack(part, langToUse);

    // Fallback progress interval in case HTMLAudio timeupdate doesn't fire (e.g. speech fallback)
    const interval = window.setInterval(() => {
      if (!isMp3PlayingRef.current) {
        setCurrentTime(prev => {
          const next = prev + 1;
          if (next >= part.durationSec) {
            stopAudio();
            return 0;
          }
          return next;
        });
      }
    }, 1000 / playbackRate);

    progressTimerRef.current = interval;
  }, [stopAudio, activeLanguage, playLanguageTrack, playbackRate]);

  // Language switcher that switches audio immediately if already playing
  const setActiveLanguage = useCallback((newLang: SupportedLanguage) => {
    setActiveLanguageState(newLang);
    activeLanguageRef.current = newLang;
    // Seamlessly switch the playing audio to the new language
    if (isPlayingRef.current && currentPartRef.current) {
      playLanguageTrack(currentPartRef.current, newLang);
    }
  }, [playLanguageTrack]);

  // Pause audio
  const pauseAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.pause();
    }
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
    setIsPlaying(false);
    isPlayingRef.current = false;
  }, []);

  // Resume audio
  const resumeAudio = useCallback(() => {
    if (!currentPart) return;
    setIsPlaying(true);
    isPlayingRef.current = true;

    if (audioRef.current && audioRef.current.src) {
      audioRef.current.play().catch(() => {});
    }
    if ('speechSynthesis' in window && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    const interval = window.setInterval(() => {
      if (!isMp3PlayingRef.current) {
        setCurrentTime(prev => {
          const next = prev + 1;
          if (next >= currentPart.durationSec) {
            stopAudio();
            return 0;
          }
          return next;
        });
      }
    }, 1000 / playbackRate);

    progressTimerRef.current = interval;
  }, [currentPart, playbackRate, stopAudio]);

  // Toggle play/pause for a given part
  const togglePlayPart = useCallback((part: HeritagePart) => {
    if (currentPart?.id === part.id && isPlaying) {
      pauseAudio();
    } else if (currentPart?.id === part.id && !isPlaying) {
      resumeAudio();
    } else {
      startAudio(part);
    }
  }, [currentPart, isPlaying, pauseAudio, resumeAudio, startAudio]);

  // Seek
  const seekTo = useCallback((targetSec: number) => {
    const clamped = Math.max(0, Math.min(targetSec, duration));
    setCurrentTime(clamped);
    if (audioRef.current) {
      audioRef.current.currentTime = clamped;
    }
  }, [duration]);

  return {
    currentPart,
    isPlaying,
    currentTime,
    duration,
    volume,
    playbackRate,
    narratorVoiceEnabled,
    activeLanguage,
    setVolume,
    setPlaybackRate,
    setNarratorVoiceEnabled,
    setActiveLanguage,
    startAudio,
    stopAudio,
    pauseAudio,
    resumeAudio,
    togglePlayPart,
    seekTo
  };
}
