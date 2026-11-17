import { useState } from 'react';
import { HeritagePart, PATALESHWAR_PARTS } from '../data/pataleshwarData';
import { Play, Square, ChevronLeft, ChevronRight, X, Mic } from 'lucide-react';
import { AudioVisualizer } from './AudioVisualizer';
import { SupportedLanguage, TRANSLATIONS } from '../data/translations';
import { motion, AnimatePresence } from 'motion/react';
import fallbackEntranceImg from '../assets/images/pataleshwar_monolithic_entrance_1792473839143.jpg';

interface TourModeProps {
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
  onToggleNarrator: () => void;
  onToggleLanguage: (lang: SupportedLanguage) => void;
}

const toDevanagariDigits = (val: string) =>
  val.replace(/\d/g, (d) => '०१२३४५६७८९'[Number(d)]);

export function TourMode({
  onClose,
  isPlaying,
  currentTime,
  duration,
  volume: _volume,
  narratorVoiceEnabled,
  activeLanguage,
  onStartAudio,
  onStopAudio,
  onSeek,
  onToggleNarrator,
  onToggleLanguage
}: TourModeProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentPart = PATALESHWAR_PARTS[currentStepIndex];
  const t = TRANSLATIONS[activeLanguage];

  const handleNext = () => {
    if (currentStepIndex < PATALESHWAR_PARTS.length - 1) {
      const nextIdx = currentStepIndex + 1;
      setCurrentStepIndex(nextIdx);
      if (isPlaying) {
        onStartAudio(PATALESHWAR_PARTS[nextIdx]);
      }
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      const prevIdx = currentStepIndex - 1;
      setCurrentStepIndex(prevIdx);
      if (isPlaying) {
        onStartAudio(PATALESHWAR_PARTS[prevIdx]);
      }
    }
  };

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

  const displayElevation = activeLanguage === 'hi'
    ? currentPart.hindiElevationMeters
    : activeLanguage === 'mr'
    ? currentPart.marathiElevationMeters
    : currentPart.elevationMeters;

  const displayOverview = activeLanguage === 'hi'
    ? currentPart.hindiOverview
    : activeLanguage === 'mr'
    ? currentPart.marathiOverview
    : currentPart.overview;

  const displayFeatures = activeLanguage === 'hi'
    ? currentPart.hindiArchitecturalFeatures
    : activeLanguage === 'mr'
    ? currentPart.marathiArchitecturalFeatures
    : currentPart.architecturalFeatures;

  const displayTranscript = activeLanguage === 'hi'
    ? currentPart.hindiAudioTranscript
    : activeLanguage === 'mr'
    ? currentPart.marathiAudioTranscript
    : currentPart.audioTranscript;

  return (
    <div className="fixed inset-0 z-50 bg-[#FBF9F5] text-stone-900 flex flex-col overflow-hidden">
      {/* Top Walkthrough Navigation Bar */}
      <div className="min-h-14 sm:h-16 px-3 sm:px-6 py-2 border-b border-stone-200 bg-white flex items-center justify-between gap-2 sm:gap-4 shrink-0">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <span className="hidden sm:inline text-xs uppercase tracking-widest text-amber-700 font-semibold font-mono truncate">
            {t.guidedWalkthroughTitle}
          </span>
          <span className="hidden sm:inline text-stone-300">|</span>
          <span className="text-xs font-mono text-amber-800 sm:text-stone-600 font-semibold sm:font-normal bg-amber-50 sm:bg-transparent px-2 sm:px-0 py-1 sm:py-0 rounded border border-amber-200 sm:border-0 whitespace-nowrap">
            {t.stationWord} {formatNum(currentPart.partNumber)} {t.ofWord} {formatNum(PATALESHWAR_PARTS.length)}
          </span>
        </div>

        {/* Step indicator dots */}
        <div className="hidden md:flex items-center gap-1.5">
          {PATALESHWAR_PARTS.map((p, idx) => {
            const pTitle = activeLanguage === 'hi' ? p.hindiTitle : activeLanguage === 'mr' ? p.marathiTitle : p.title;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setCurrentStepIndex(idx);
                  if (isPlaying) onStartAudio(p);
                }}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  idx === currentStepIndex
                    ? 'w-7 bg-amber-600'
                    : idx < currentStepIndex
                    ? 'w-2 bg-stone-400'
                    : 'w-2 bg-stone-200'
                }`}
                title={pTitle}
              />
            );
          })}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* 3-Language selector in TourMode */}
          <div className="flex items-center bg-stone-100 border border-stone-200 rounded-lg p-0.5 text-[11px] sm:text-xs">
            <button
              onClick={() => onToggleLanguage('en')}
              className={`px-2 py-1 min-h-[30px] rounded font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeLanguage === 'en' ? 'bg-amber-600 text-white font-semibold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onToggleLanguage('hi')}
              className={`px-2 py-1 min-h-[30px] rounded font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeLanguage === 'hi' ? 'bg-amber-600 text-white font-semibold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              हिन्दी
            </button>
            <button
              onClick={() => onToggleLanguage('mr')}
              className={`px-2 py-1 min-h-[30px] rounded font-medium transition-colors cursor-pointer whitespace-nowrap ${
                activeLanguage === 'mr' ? 'bg-amber-600 text-white font-semibold' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              मराठी
            </button>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 min-h-[38px] text-xs font-medium rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer whitespace-nowrap"
            aria-label={t.exitTour}
          >
            <X className="w-4 h-4 shrink-0" />
            <span className="hidden xs:inline sm:inline">{t.exitTour}</span>
          </button>
        </div>
      </div>

      {/* Main Tour Canvas (unified vertical scroll on <lg, 12-col split on lg+) */}
      <div className="flex-1 flex flex-col lg:grid lg:grid-cols-12 overflow-y-auto lg:overflow-hidden overscroll-contain">
        {/* Left / Hero visual column */}
        <div className="lg:col-span-7 relative bg-stone-900 flex items-center justify-center overflow-hidden aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full shrink-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPart.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
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
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-stone-950/30" />

              {/* Monolithic Elevation Stamp */}
              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 z-10">
                <div className="bg-white/92 backdrop-blur-md border border-stone-200 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-mono text-stone-800 shadow-xs">
                  <span className="text-amber-700 font-semibold">{t.elevationLabel}:</span> {displayElevation}
                </div>
              </div>

              {/* Bottom overlay titles */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="text-[11px] sm:text-xs font-mono text-amber-300 mb-0.5 sm:mb-1">
                  {displayDepthLevel}
                </div>
                <h1 className="text-xl sm:text-3xl lg:text-4xl font-serif font-bold text-white drop-shadow-md leading-tight">
                  {displayTitle}
                </h1>
                <p className="text-stone-200 text-xs sm:text-base font-medium mt-0.5 sm:mt-1 drop-shadow">
                  {displaySubtitle}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Curatorial & Audio Guide Column */}
        <div className="lg:col-span-5 bg-[#FBF9F5] p-4 sm:p-6 lg:p-8 flex flex-col justify-between lg:overflow-y-auto border-t lg:border-t-0 lg:border-l border-stone-200 flex-1">
          <div className="space-y-5 sm:space-y-6">
            {/* Audio guide box */}
            <div className="p-3.5 sm:p-5 rounded-xl bg-white border border-stone-200 shadow-2xs space-y-3 sm:space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                  {isPlaying ? (
                    <button
                      onClick={onStopAudio}
                      className="flex items-center gap-2 min-h-[42px] py-2 px-3.5 sm:px-4 rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-colors text-xs font-semibold cursor-pointer"
                    >
                      <Square className="w-3.5 h-3.5 fill-current" />
                      <span>{t.btnStopAudio}</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => onStartAudio(currentPart)}
                      className="flex items-center gap-2 min-h-[42px] py-2 px-3.5 sm:px-4 rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition-colors text-xs font-semibold shadow-xs cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{t.startAudioShort} ({formatNum(currentPart.duration)})</span>
                    </button>
                  )}

                  <div className="text-xs font-mono text-stone-500 whitespace-nowrap">
                    <span className="text-amber-700 font-semibold">{formatTime(currentTime)}</span>
                    <span className="mx-1">/</span>
                    <span>{formatNum(currentPart.duration)}</span>
                  </div>
                </div>

                <button
                  onClick={onToggleNarrator}
                  className={`flex items-center gap-1.5 text-xs px-2.5 py-1.5 min-h-[36px] rounded-lg border transition-colors cursor-pointer whitespace-nowrap ${
                    narratorVoiceEnabled
                      ? 'bg-amber-50 text-amber-800 border-amber-200'
                      : 'text-stone-600 border-stone-200'
                  }`}
                >
                  <Mic className="w-3 h-3" />
                  <span>{t.voiceShortLabel}: {narratorVoiceEnabled ? t.voiceOn : t.voiceOff}</span>
                </button>
              </div>

              {/* Progress bar */}
              <div
                className="py-2 -my-1 cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const ratio = Math.max(0, Math.min(1, clickX / rect.width));
                  onSeek(ratio * currentPart.durationSec);
                }}
              >
                <div className="relative h-2 w-full bg-stone-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-600 rounded-full transition-all duration-150"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {isPlaying && (
                <div className="flex items-center justify-between text-[11px] text-stone-500">
                  <span>{t.audioGuidePlaying}</span>
                  <AudioVisualizer isPlaying={true} barCount={12} height={12} color="#b45309" />
                </div>
              )}
            </div>

            {/* Narrative Prose */}
            <div className="space-y-2.5 sm:space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-widest text-stone-500">
                {t.curatorialGuideNoteHeading}
              </h3>
              <p className="text-sm font-reading text-stone-700 leading-relaxed">
                {displayOverview}
              </p>
            </div>

            {/* Architectural Highlights */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold">
                {t.keyStructuralTraitsHeading}
              </h4>
              <ul className="text-xs sm:text-sm text-stone-700 space-y-1.5">
                {displayFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-700 font-mono mt-0.5 shrink-0">•</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Transcript Preview */}
            <div className="p-3.5 rounded-lg bg-[#F3EFE6] border border-stone-200 text-xs sm:text-sm text-stone-700 font-reading italic leading-relaxed">
              "{displayTranscript}"
            </div>
          </div>

          {/* Bottom Prev / Next Nav (sticky at bottom while scrolling on mobile) */}
          <div className="sticky bottom-0 lg:static -mx-4 sm:-mx-6 lg:mx-0 px-4 sm:px-6 lg:px-0 py-3 sm:py-4 lg:pb-0 lg:pt-6 mt-6 bg-[#FBF9F5]/95 backdrop-blur-sm border-t border-stone-200 flex items-center justify-between gap-2 z-10">
            <button
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className="flex items-center gap-1.5 min-h-[44px] py-2 px-3 text-xs font-medium rounded-lg bg-white border border-stone-300 text-stone-700 hover:bg-stone-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4 shrink-0" />
              <span className="truncate">{t.previousStation}</span>
            </button>

            <span className="text-xs font-mono text-stone-500 shrink-0">
              {formatNum(currentStepIndex + 1)} / {formatNum(PATALESHWAR_PARTS.length)}
            </span>

            <button
              onClick={handleNext}
              disabled={currentStepIndex === PATALESHWAR_PARTS.length - 1}
              className="flex items-center gap-1.5 min-h-[44px] py-2 px-3 text-xs font-medium rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
            >
              <span className="truncate">{t.nextStation}</span>
              <ChevronRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
