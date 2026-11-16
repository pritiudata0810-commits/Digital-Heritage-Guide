import { useEffect } from 'react';
import { HeritagePart, PATALESHWAR_PARTS } from '../data/pataleshwarData';
import { Play, Square, X, ChevronLeft, ChevronRight, Volume2, VolumeX, Mic, Compass } from 'lucide-react';
import { AudioVisualizer } from './AudioVisualizer';
import { SupportedLanguage, TRANSLATIONS } from '../data/translations';
import { motion, AnimatePresence } from 'motion/react';
import fallbackEntranceImg from '../assets/images/pataleshwar_monolithic_entrance_1792473839143.jpg';

interface DetailModalProps {
  part: HeritagePart | null;
  isOpen: boolean;
  onClose: () => void;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  narratorVoiceEnabled: boolean;
  activeLanguage: SupportedLanguage;
  onStartAudio: (part: HeritagePart) => void;
  onStopAudio: () => void;
  onSeek: (seconds: number) => void;
  onVolumeChange: (vol: number) => void;
  onToggleNarrator: () => void;
  onToggleLanguage: (lang: SupportedLanguage) => void;
  onNavigatePart: (direction: 'next' | 'prev') => void;
}

const toDevanagariDigits = (val: string) =>
  val.replace(/\d/g, (d) => '०१२३४५६७८९'[Number(d)]);

export function DetailModal({
  part,
  isOpen,
  onClose,
  isPlaying,
  currentTime,
  duration,
  volume,
  narratorVoiceEnabled,
  activeLanguage,
  onStartAudio,
  onStopAudio,
  onSeek,
  onVolumeChange,
  onToggleNarrator,
  onToggleLanguage,
  onNavigatePart
}: DetailModalProps) {
  // Handle keyboard shortcuts (Escape to close, Left/Right arrow to navigate)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigatePart('next');
      if (e.key === 'ArrowLeft') onNavigatePart('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigatePart]);

  if (!isOpen || !part) return null;

  const t = TRANSLATIONS[activeLanguage];
  const isCurrentActive = isPlaying;
  const progressPercent = duration > 0 ? Math.min(100, (currentTime / duration) * 100) : 0;

  const formatNum = (val: string | number) => {
    const str = String(val);
    return activeLanguage === 'en' ? str : toDevanagariDigits(str);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return formatNum(`${m}:${s < 10 ? '0' : ''}${s}`);
  };

  const displayTitle = activeLanguage === 'hi'
    ? part.hindiTitle
    : activeLanguage === 'mr'
    ? part.marathiTitle
    : part.title;

  const displaySubtitle = activeLanguage === 'hi'
    ? part.hindiSubtitle
    : activeLanguage === 'mr'
    ? part.marathiSubtitle
    : part.subtitle;

  const displayElevation = activeLanguage === 'hi'
    ? part.hindiElevationMeters
    : activeLanguage === 'mr'
    ? part.marathiElevationMeters
    : part.elevationMeters;

  const displayOverview = activeLanguage === 'hi'
    ? part.hindiOverview
    : activeLanguage === 'mr'
    ? part.marathiOverview
    : part.overview;

  const displayFeatures = activeLanguage === 'hi'
    ? part.hindiArchitecturalFeatures
    : activeLanguage === 'mr'
    ? part.marathiArchitecturalFeatures
    : part.architecturalFeatures;

  const displayInsights = activeLanguage === 'hi'
    ? part.hindiArchaeologicalInsights
    : activeLanguage === 'mr'
    ? part.marathiArchaeologicalInsights
    : part.archaeologicalInsights;

  const displayTranscript = activeLanguage === 'hi'
    ? part.hindiAudioTranscript
    : activeLanguage === 'mr'
    ? part.marathiAudioTranscript
    : part.audioTranscript;

  const partNumberLabel = formatNum(part.partNumber < 10 ? `0${part.partNumber}` : part.partNumber);
  const totalPartsLabel = formatNum(PATALESHWAR_PARTS.length);
  const durationLabel = formatNum(part.duration);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[#FBF9F5] border border-stone-200 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between gap-4 bg-white">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
                {t.partWord} {partNumberLabel} / {totalPartsLabel}
              </span>
              <span className="text-xs text-stone-500 font-mono hidden sm:inline">
                {t.elevationLabel}: {displayElevation}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Language toggle: English, Hindi, Marathi */}
              <div className="flex items-center bg-stone-100 border border-stone-200 rounded-lg p-0.5 text-xs">
                <button
                  onClick={() => onToggleLanguage('en')}
                  className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                    activeLanguage === 'en' ? 'bg-amber-600 text-white font-semibold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => onToggleLanguage('hi')}
                  className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                    activeLanguage === 'hi' ? 'bg-amber-600 text-white font-semibold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  हिन्दी
                </button>
                <button
                  onClick={() => onToggleLanguage('mr')}
                  className={`px-2.5 py-1 rounded font-medium transition-colors cursor-pointer ${
                    activeLanguage === 'mr' ? 'bg-amber-600 text-white font-semibold' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  मराठी
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
                aria-label={t.closeLabel}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto flex-1 p-6 space-y-6">
            {/* Visual Hero Image Container */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-stone-200 border border-stone-200 shadow-sm group">
              <img
                src={part.image}
                alt={displayTitle}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  if (img.dataset.fallbackApplied) return;
                  img.dataset.fallbackApplied = 'true';
                  img.src = fallbackEntranceImg;
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-white drop-shadow">
                    {displayTitle}
                  </h2>
                  <p className="text-sm sm:text-base text-amber-200 font-medium drop-shadow">
                    {displaySubtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Audio Guide Playback Console */}
            <div className="bg-white border border-stone-200 rounded-xl p-4 sm:p-5 space-y-4 shadow-2xs">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {isCurrentActive ? (
                    <button
                      onClick={onStopAudio}
                      className="flex items-center gap-2 py-2 px-4 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-colors font-medium text-xs sm:text-sm cursor-pointer"
                    >
                      <Square className="w-4 h-4 fill-current" />
                      {t.btnStopAudio}
                    </button>
                  ) : (
                    <button
                      onClick={() => onStartAudio(part)}
                      className="flex items-center gap-2 py-2 px-4 rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition-colors font-semibold text-xs sm:text-sm shadow-xs cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      {t.startAudioGuide} ({durationLabel})
                    </button>
                  )}

                  <div className="flex items-center gap-2 text-xs font-mono text-stone-500">
                    <span className="text-amber-700 font-semibold">{formatTime(currentTime)}</span>
                    <span>/</span>
                    <span>{durationLabel}</span>
                  </div>
                </div>

                {/* Right controls: Speech narrator & volume */}
                <div className="flex items-center gap-4">
                  {/* Spoken voice narrator toggle */}
                  <button
                    onClick={onToggleNarrator}
                    className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md border transition-colors cursor-pointer ${
                      narratorVoiceEnabled
                        ? 'bg-amber-50 text-amber-800 border-amber-200'
                        : 'bg-stone-100 text-stone-600 border-stone-200'
                    }`}
                  >
                    <Mic className="w-3.5 h-3.5" />
                    <span>{t.narratorVoiceLabel}: {narratorVoiceEnabled ? t.voiceOn : t.voiceOff}</span>
                  </button>

                  {/* Volume slider */}
                  <div className="hidden sm:flex items-center gap-2 text-stone-500">
                    {volume > 0 ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={volume}
                      onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
                      className="w-16 h-1.5 bg-stone-200 rounded-lg accent-amber-600 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Progress Scrubber */}
              <div className="space-y-1">
                <div
                  className="relative h-2 w-full bg-stone-200 rounded-full overflow-hidden cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickX = e.clientX - rect.left;
                    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                    onSeek(ratio * part.durationSec);
                  }}
                >
                  <div
                    className="h-full bg-amber-600 rounded-full transition-all duration-150"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-[11px] text-stone-500">
                  <span>{t.curatorialVoiceNarration}</span>
                  {isCurrentActive && <AudioVisualizer isPlaying={true} barCount={14} height={10} color="#b45309" />}
                </div>
              </div>

            </div>

            {/* Curatorial Essay Section */}
            <div className="space-y-4 text-stone-700">
              <h3 className="text-base font-serif font-bold text-stone-900 border-b border-stone-200 pb-2">
                {t.curatorialOverviewHeading}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed font-reading text-stone-700">
                {displayOverview}
              </p>
            </div>

            {/* Architectural Features Grid */}
            <div className="space-y-3">
              <h3 className="text-base font-serif font-bold text-stone-900 border-b border-stone-200 pb-2">
                {t.keyArchitecturalDetailsHeading}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {displayFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="p-3 bg-white border border-stone-200 rounded-lg text-xs sm:text-sm text-stone-700 flex items-start gap-2.5"
                  >
                    <span className="text-amber-700 font-mono font-semibold mt-0.5">
                      {formatNum(`0${i + 1}`)}.
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Archaeological Insights */}
            <div className="p-4 rounded-xl bg-[#F3EFE6] border border-stone-200 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-amber-800 font-semibold flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                {t.archaeologicalContextHeading}
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {displayInsights}
              </p>
            </div>

            {/* Audio Narration Transcript */}
            <div className="p-4 rounded-xl bg-white border border-stone-200 space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block">
                {t.officialTranscriptHeading}
              </span>
              <p className="text-xs sm:text-sm text-stone-700 italic font-reading leading-relaxed">
                "{displayTranscript}"
              </p>
            </div>
          </div>

          {/* Footer Navigation (Prev / Next Part) */}
          <div className="px-6 py-4 border-t border-stone-200 bg-white flex items-center justify-between">
            <button
              onClick={() => onNavigatePart('prev')}
              disabled={part.partNumber === 1}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-700 hover:text-stone-950 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>{t.previousLevel}</span>
            </button>

            <span className="text-xs font-mono text-stone-500">
              {formatNum(part.partNumber)} / {totalPartsLabel}
            </span>

            <button
              onClick={() => onNavigatePart('next')}
              disabled={part.partNumber === PATALESHWAR_PARTS.length}
              className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-700 hover:text-stone-950 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <span>{t.nextLevel}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
