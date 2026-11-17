/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { PATALESHWAR_PARTS, HeritagePart } from './data/pataleshwarData';
import { TRANSLATIONS } from './data/translations';
import { useHeritageAudio } from './utils/audioEngine';
import { Header } from './components/Header';
import { RoadmapView } from './components/RoadmapView';
import { DetailModal } from './components/DetailModal';
import { TourMode } from './components/TourMode';
import { PersistentPlayer } from './components/PersistentPlayer';
import { AudioVisualizer } from './components/AudioVisualizer';
import { WelcomeScreen } from './components/WelcomeScreen';
import {
  Headphones,
  ChevronDown,
  Hammer,
  Columns,
  Layers
} from 'lucide-react';

export default function App() {
  const [selectedPartForModal, setSelectedPartForModal] = useState<HeritagePart | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  // Audio Engine Hook
  const {
    currentPart,
    isPlaying,
    currentTime,
    duration,
    volume,
    narratorVoiceEnabled,
    activeLanguage,
    setVolume,
    setNarratorVoiceEnabled,
    setActiveLanguage,
    startAudio,
    stopAudio,
    pauseAudio,
    resumeAudio,
    seekTo
  } = useHeritageAudio();

  const t = TRANSLATIONS[activeLanguage];

  // Modal helpers
  const handleOpenDetail = (part: HeritagePart) => {
    setSelectedPartForModal(part);
    setIsModalOpen(true);
  };

  const handleCloseDetail = () => {
    setIsModalOpen(false);
  };

  const handleNavigateModal = (direction: 'next' | 'prev') => {
    if (!selectedPartForModal) return;
    const currentIndex = PATALESHWAR_PARTS.findIndex(p => p.id === selectedPartForModal.id);
    if (direction === 'next' && currentIndex < PATALESHWAR_PARTS.length - 1) {
      const nextPart = PATALESHWAR_PARTS[currentIndex + 1];
      setSelectedPartForModal(nextPart);
      if (isPlaying) startAudio(nextPart);
    } else if (direction === 'prev' && currentIndex > 0) {
      const prevPart = PATALESHWAR_PARTS[currentIndex - 1];
      setSelectedPartForModal(prevPart);
      if (isPlaying) startAudio(prevPart);
    }
  };

  const handleStartTour = () => {
    setIsTourOpen(true);
    if (!isPlaying) {
      startAudio(PATALESHWAR_PARTS[0]);
    }
  };

  const nowPlayingTitle = currentPart
    ? activeLanguage === 'hi'
      ? currentPart.hindiTitle
      : activeLanguage === 'mr'
      ? currentPart.marathiTitle
      : currentPart.title
    : '';

  const headlineChars = Array.from(t.heroHeadline);

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col font-sans selection:bg-amber-200/70 selection:text-stone-950">
      {/* Intro Welcome Screen with typing animation before website opens */}
      {showWelcome && (
        <WelcomeScreen onComplete={() => setShowWelcome(false)} />
      )}

      {/* 1. Header Navigation with Top-side Language Selector (English default, Hindi, Marathi) */}
      <Header
        onStartTour={handleStartTour}
        activeLanguage={activeLanguage}
        onSelectLanguage={setActiveLanguage}
      />

      <main className="flex-1">
        {/* 2. Main Home Page / Hero Section */}
        <section id="home" className="relative pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-24 border-b border-stone-200 bg-[#FBF9F5] overflow-hidden">
          {/* Subtle animated ambient sandstone radial glow */}
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.35, 0.55, 0.35], scale: [0.98, 1.03, 0.98] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[min(720px,100vw)] h-[320px] sm:h-[360px] bg-amber-300/20 rounded-full blur-[110px]"
          />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] sm:text-xs font-mono text-stone-600"
            >
              <span className="text-stone-900 font-semibold">{t.heroMonument}</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="text-amber-700 font-semibold">{t.heroEpoch}</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>{t.heroDynasty}</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>{t.heroLocation}</span>
            </motion.div>

            {/* Animated Main Project Title: "Anveshan": Your Digital Heritage Guide */}
            <div className="space-y-3">
              <h1 className="tracking-tight leading-[1.1]">
                {activeLanguage === 'en' ? (
                  <span
                    className="inline-flex flex-wrap items-center justify-center text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-wider text-stone-900"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {headlineChars.map((char, idx) => (
                      <motion.span
                        key={`en-${idx}`}
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: idx * 0.045,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="inline-block bg-gradient-to-b from-stone-950 via-stone-800 to-amber-900 bg-clip-text text-transparent"
                      >
                        {char === ' ' ? '\u00A0' : char}
                      </motion.span>
                    ))}
                  </span>
                ) : (
                  <motion.span
                    key={activeLanguage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-block text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide bg-gradient-to-b from-stone-950 via-stone-800 to-amber-900 bg-clip-text text-transparent"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {t.heroHeadline}
                  </motion.span>
                )}

                {/* Expanding heritage divider + animated tagline */}
                <div className="mt-2.5 sm:mt-3 flex items-center justify-center gap-3 sm:gap-4 px-2">
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="hidden sm:block h-[1px] w-14 bg-gradient-to-r from-transparent to-amber-600/70 origin-right"
                  />
                  <motion.span
                    key={`sub-${activeLanguage}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg sm:text-2xl lg:text-3xl font-serif font-semibold text-amber-700 tracking-wide"
                  >
                    {t.heroHeadlineSub}
                  </motion.span>
                  <motion.span
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="hidden sm:block h-[1px] w-14 bg-gradient-to-l from-transparent to-amber-600/70 origin-left"
                  />
                </div>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-stone-600 font-reading text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto"
            >
              {t.heroDescription}
            </motion.p>

            {/* Touch-friendly Action Buttons (full-width on narrow mobile, side-by-side on sm+) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2 max-w-sm sm:max-w-none mx-auto"
            >
              <button
                onClick={handleStartTour}
                className="flex items-center justify-center gap-2 min-h-[46px] py-3 px-6 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm transition-colors shadow-sm cursor-pointer whitespace-nowrap"
              >
                <Headphones className="w-4 h-4 shrink-0" />
                <span>{t.btnStartTour}</span>
              </button>

              <a
                href="#cave-levels"
                className="flex items-center justify-center gap-2 min-h-[46px] py-3 px-6 rounded-xl bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 font-medium text-sm transition-colors shadow-2xs whitespace-nowrap"
              >
                <span>{t.btnViewLevels}</span>
                <ChevronDown className="w-4 h-4 shrink-0" />
              </a>
            </motion.div>

            {/* Live Audio indicator when active */}
            {currentPart && isPlaying && (
              <div className="flex sm:inline-flex items-center justify-between gap-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-left w-full sm:w-auto max-w-md mx-auto">
                <div className="flex items-center gap-2 min-w-0">
                  <AudioVisualizer isPlaying={true} barCount={8} height={14} color="#b45309" />
                  <span className="font-serif font-bold text-amber-900 truncate">
                    {t.nowPlaying}: {nowPlayingTitle}
                  </span>
                </div>
                <button
                  onClick={stopAudio}
                  className="min-h-[34px] px-3 py-1 rounded bg-white text-stone-700 hover:text-stone-950 border border-stone-300 shrink-0 font-mono text-[11px] cursor-pointer whitespace-nowrap"
                >
                  {t.btnStopAudio}
                </button>
              </div>
            )}

            {/* Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-4 pt-8 sm:pt-10 border-t border-stone-200 text-xs sm:text-sm text-center">
              <div className="space-y-1">
                <span className="text-stone-500 font-mono text-[11px] uppercase tracking-wider block">
                  {t.metricEpochLabel}
                </span>
                <p className="font-serif font-bold text-stone-900">{t.metricEpochVal}</p>
                <p className="text-stone-600 text-xs">{t.metricEpochSub}</p>
              </div>
              <div className="space-y-1">
                <span className="text-stone-500 font-mono text-[11px] uppercase tracking-wider block">
                  {t.metricBedrockLabel}
                </span>
                <p className="font-serif font-bold text-stone-900">{t.metricBedrockVal}</p>
                <p className="text-stone-600 text-xs">{t.metricBedrockSub}</p>
              </div>
              <div className="space-y-1">
                <span className="text-stone-500 font-mono text-[11px] uppercase tracking-wider block">
                  {t.metricDepthLabel}
                </span>
                <p className="font-serif font-bold text-stone-900">{t.metricDepthVal}</p>
                <p className="text-stone-600 text-xs">{t.metricDepthSub}</p>
              </div>
              <div className="space-y-1">
                <span className="text-stone-500 font-mono text-[11px] uppercase tracking-wider block">
                  {t.metricLevelsLabel}
                </span>
                <p className="font-serif font-bold text-stone-900">{t.metricLevelsVal}</p>
                <p className="text-stone-600 text-xs">{t.metricLevelsSub}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Cave Levels / Roadmap Section */}
        <section id="cave-levels" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 border-b border-stone-200 pb-5 mb-6 sm:mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold">
                {t.roadmapBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
                {t.roadmapTitle}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 max-w-lg">
              {t.roadmapSubtitle}
            </p>
          </div>

          {/* Interactive Roadmap View displaying only Title, Subtitle, and Image */}
          <RoadmapView
            parts={PATALESHWAR_PARTS}
            activeLanguage={activeLanguage}
            onOpenDetail={handleOpenDetail}
            currentPlayingPartId={currentPart?.id}
            isPlaying={isPlaying}
          />
        </section>

        {/* 4. Architecture Section */}
        <section id="architecture" className="py-12 sm:py-16 border-t border-stone-200 bg-[#F3EFE6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold">
                {t.archBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
                {t.archTitle}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                {t.archSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {/* Feature 1: Top-down carving */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                  {t.arch1Title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-reading">
                  {t.arch1Desc}
                </p>
              </div>

              {/* Feature 2: Stone Columns & Mandapa */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center">
                  <Columns className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                  {t.arch2Title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-reading">
                  {t.arch2Desc}
                </p>
              </div>

              {/* Feature 3: Ancient Tool Marks */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center">
                  <Hammer className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900">
                  {t.arch3Title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-reading">
                  {t.arch3Desc}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer with extra bottom space when persistent audio bar is open */}
      <footer
        className={`border-t border-stone-200 bg-[#EFECE3] px-4 py-8 text-center text-xs text-stone-600 space-y-2 ${
          currentPart ? 'pb-24 sm:pb-24' : ''
        }`}
      >
        <p className="font-medium text-stone-700">{t.footerTitle}</p>
        <p className="text-stone-500">
          {t.footerAsi}
        </p>
      </footer>

      {/* Detail Inspection Modal */}
      <DetailModal
        part={selectedPartForModal}
        isOpen={isModalOpen}
        onClose={handleCloseDetail}
        isPlaying={isPlaying && currentPart?.id === selectedPartForModal?.id}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        narratorVoiceEnabled={narratorVoiceEnabled}
        activeLanguage={activeLanguage}
        onStartAudio={startAudio}
        onStopAudio={stopAudio}
        onSeek={seekTo}
        onVolumeChange={setVolume}
        onToggleNarrator={() => setNarratorVoiceEnabled(!narratorVoiceEnabled)}
        onToggleLanguage={setActiveLanguage}
        onNavigatePart={handleNavigateModal}
      />

      {/* Guided Tour Mode Walkthrough */}
      {isTourOpen && (
        <TourMode
          onClose={() => setIsTourOpen(false)}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          volume={volume}
          narratorVoiceEnabled={narratorVoiceEnabled}
          activeLanguage={activeLanguage}
          onStartAudio={startAudio}
          onStopAudio={stopAudio}
          onSeek={seekTo}
          onToggleNarrator={() => setNarratorVoiceEnabled(!narratorVoiceEnabled)}
          onToggleLanguage={setActiveLanguage}
        />
      )}

      {/* Persistent Bottom Audio Player Bar */}
      <PersistentPlayer
        currentPart={currentPart}
        isPlaying={isPlaying}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        narratorVoiceEnabled={narratorVoiceEnabled}
        activeLanguage={activeLanguage}
        onPlayPart={startAudio}
        onPause={pauseAudio}
        onResume={resumeAudio}
        onStop={stopAudio}
        onSeek={seekTo}
        onVolumeChange={setVolume}
        onToggleNarrator={() => setNarratorVoiceEnabled(!narratorVoiceEnabled)}
        onToggleLanguage={setActiveLanguage}
        onOpenDetail={handleOpenDetail}
      />
    </div>
  );
}
