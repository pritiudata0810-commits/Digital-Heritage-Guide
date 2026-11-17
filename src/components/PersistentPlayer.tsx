import { HeritagePart } from '../data/pataleshwarData';
import { Play, Pause, Square, Volume2, VolumeX, Maximize2, Mic } from 'lucide-react';
import { AudioVisualizer } from './AudioVisualizer';
import { SupportedLanguage, TRANSLATIONS } from '../data/translations';
import fallbackEntranceImg from '../assets/images/pataleshwar_monolithic_entrance_1792473839143.jpg';

interface PersistentPlayerProps {
  currentPart: HeritagePart | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  narratorVoiceEnabled: boolean;
  activeLanguage: SupportedLanguage;
  onPlayPart: (part: HeritagePart) => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  onSeek: (seconds: number) => void;
  onVolumeChange: (vol: number) => void;
  onToggleNarrator: () => void;
  onToggleLanguage: (lang: SupportedLanguage) => void;
  onOpenDetail: (part: HeritagePart) => void;
}

const toDevanagariDigits = (val: string) =>
  val.replace(/\d/g, (d) => '०१२३४५६७८९'[Number(d)]);

export function PersistentPlayer({
  currentPart,
  isPlaying,
  currentTime,
  duration,
  volume,
  narratorVoiceEnabled,
  activeLanguage,
  onPlayPart: _onPlayPart,
  onPause,
  onResume,
  onStop,
  onSeek,
  onVolumeChange,
  onToggleNarrator,
  onToggleLanguage,
  onOpenDetail
}: PersistentPlayerProps) {
  if (!currentPart) return null;

  const t = TRANSLATIONS[activeLanguage];
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
    ? currentPart.hindiTitle
    : activeLanguage === 'mr'
    ? currentPart.marathiTitle
    : currentPart.title;

  const displaySubtitle = activeLanguage === 'hi'
    ? currentPart.hindiSubtitle
    : activeLanguage === 'mr'
    ? currentPart.marathiSubtitle
    : currentPart.subtitle;

  const displayDepthLevel = activeLanguage === 'hi'
    ? currentPart.hindiDepthLevel
    : activeLanguage === 'mr'
    ? currentPart.marathiDepthLevel
    : currentPart.depthLevel;

  const cycleLanguage = () => {
    if (activeLanguage === 'en') onToggleLanguage('hi');
    else if (activeLanguage === 'hi') onToggleLanguage('mr');
    else onToggleLanguage('en');
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 shadow-lg transition-transform duration-300 pb-[env(safe-area-inset-bottom)]">
      {/* Top interactive progress scrubber */}
      <div
        className="h-2 sm:h-1.5 w-full bg-stone-200 cursor-pointer relative"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const ratio = Math.max(0, Math.min(1, clickX / rect.width));
          onSeek(ratio * duration);
        }}
      >
        <div
          className="h-full bg-amber-600 transition-all duration-150"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        {/* Left: Current Part Info */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1 sm:max-w-md">
          <div
            onClick={() => onOpenDetail(currentPart)}
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden shrink-0 border border-stone-200 cursor-pointer hidden sm:block bg-stone-100"
          >
            <img
              src={currentPart.image}
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
          </div>

          <div
            onClick={() => onOpenDetail(currentPart)}
            className="min-w-0 flex-1 cursor-pointer"
          >
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-stone-500 font-mono">
              <span className="text-amber-700 font-semibold shrink-0">{t.partWord} {formatNum(currentPart.partNumber)}</span>
              <span aria-hidden="true" className="hidden xs:inline">·</span>
              <span className="truncate hidden xs:inline">{displayDepthLevel}</span>
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-stone-900 truncate hover:text-amber-700 transition-colors font-serif">
              {displayTitle}
            </h4>
            <p className="text-[11px] text-stone-500 truncate hidden sm:block">
              {displaySubtitle}
            </p>
          </div>
        </div>

        {/* Center: Play / Pause / Stop + Waveform */}
        <div className="flex flex-col items-center gap-0.5 sm:gap-1 shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Play/Pause */}
            {isPlaying ? (
              <button
                onClick={onPause}
                className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-colors shadow-xs cursor-pointer shrink-0"
                aria-label="Pause audio"
              >
                <Pause className="w-4 h-4 fill-current" />
              </button>
            ) : (
              <button
                onClick={onResume}
                className="w-10 h-10 sm:w-9 sm:h-9 rounded-full bg-amber-600 text-white flex items-center justify-center hover:bg-amber-700 transition-colors shadow-xs cursor-pointer shrink-0"
                aria-label="Resume audio"
              >
                <Play className="w-4 h-4 fill-current ml-0.5" />
              </button>
            )}

            {/* Stop button */}
            <button
              onClick={onStop}
              className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-stone-100 text-stone-600 hover:text-stone-950 hover:bg-stone-200 flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label={t.btnStopAudio}
              title={t.btnStopAudio}
            >
              <Square className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] font-mono text-stone-500">
            <span>{formatTime(currentTime)}</span>
            <span className="hidden sm:flex">
              <AudioVisualizer isPlaying={isPlaying} barCount={8} height={10} color="#b45309" />
            </span>
            <span className="sm:hidden">/</span>
            <span>{formatNum(currentPart.duration)}</span>
          </div>
        </div>

        {/* Right: Audio Narration & Volume */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Spoken voice narrator button */}
          <button
            onClick={onToggleNarrator}
            title={narratorVoiceEnabled ? `${t.narratorVoiceLabel}: ${t.voiceOn}` : `${t.narratorVoiceLabel}: ${t.voiceOff}`}
            className={`hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs border transition-colors cursor-pointer ${
              narratorVoiceEnabled
                ? 'bg-amber-50 text-amber-800 border-amber-200'
                : 'text-stone-600 border-stone-200 hover:border-stone-300'
            }`}
          >
            <Mic className="w-3 h-3" />
            <span className="font-mono text-[11px]">{t.voiceShortLabel} {narratorVoiceEnabled ? t.voiceOn : t.voiceOff}</span>
          </button>

          {/* Language voice track selector */}
          <button
            onClick={cycleLanguage}
            className="px-2 sm:px-2.5 py-1.5 min-h-[36px] rounded-lg bg-stone-100 hover:bg-stone-200 text-amber-800 text-[11px] sm:text-xs font-mono border border-stone-200 font-semibold flex items-center gap-1 cursor-pointer whitespace-nowrap"
            title="Switch Language Voice Track (English / हिन्दी / मराठी)"
          >
            <span>{t.voiceTrackBtnLabel}</span>
          </button>

          {/* Volume control */}
          <div className="hidden lg:flex items-center gap-2 text-stone-500">
            {volume > 0 ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
              className="w-16 h-1 bg-stone-200 rounded accent-amber-600 cursor-pointer"
            />
          </div>

          {/* Open full inspection modal */}
          <button
            onClick={() => onOpenDetail(currentPart)}
            className="min-w-[38px] min-h-[38px] flex items-center justify-center rounded-lg text-stone-500 hover:text-stone-950 hover:bg-stone-100 transition-colors cursor-pointer shrink-0"
            title={t.clickToOpen}
            aria-label={t.clickToOpen}
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
