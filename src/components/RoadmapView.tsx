import { useState } from 'react';
import { HeritagePart } from '../data/pataleshwarData';
import { SupportedLanguage, TRANSLATIONS } from '../data/translations';
import { AudioVisualizer } from './AudioVisualizer';
import { LayoutGrid, GitCommit, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import fallbackEntranceImg from '../assets/images/pataleshwar_monolithic_entrance_1792473839143.jpg';

interface RoadmapViewProps {
  parts: HeritagePart[];
  activeLanguage: SupportedLanguage;
  onOpenDetail: (part: HeritagePart) => void;
  currentPlayingPartId?: number | null;
  isPlaying?: boolean;
}

const toDevanagariDigits = (val: string) =>
  val.replace(/\d/g, (d) => '०१२३४५६७८९'[Number(d)]);

export function RoadmapView({
  parts,
  activeLanguage,
  onOpenDetail,
  currentPlayingPartId,
  isPlaying = false,
}: RoadmapViewProps) {
  const [viewMode, setViewMode] = useState<'timeline' | 'grid'>('timeline');
  const t = TRANSLATIONS[activeLanguage];

  const getTitle = (part: HeritagePart) => {
    if (activeLanguage === 'hi') return part.hindiTitle;
    if (activeLanguage === 'mr') return part.marathiTitle;
    return part.title;
  };

  const getSubtitle = (part: HeritagePart) => {
    if (activeLanguage === 'hi') return part.hindiSubtitle;
    if (activeLanguage === 'mr') return part.marathiSubtitle;
    return part.subtitle;
  };

  const getElevation = (part: HeritagePart) => {
    if (activeLanguage === 'hi') return part.hindiElevationMeters;
    if (activeLanguage === 'mr') return part.marathiElevationMeters;
    return part.elevationMeters;
  };

  const formatNum = (num: number) => {
    const padded = num < 10 ? `0${num}` : `${num}`;
    return activeLanguage === 'en' ? padded : toDevanagariDigits(padded);
  };

  return (
    <div className="w-full space-y-8">
      {/* View Switcher Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div className="flex items-center gap-2 text-xs font-mono text-stone-600">
          <span>{t.roadmapStagesCount}</span>
          <span aria-hidden="true" className="text-stone-400">·</span>
          <span>{t.roadmapDepthSpan}</span>
        </div>

        {/* View mode toggle: Timeline Roadmap vs Grid */}
        <div className="inline-flex items-center bg-stone-100 border border-stone-200 rounded-xl p-1 text-xs self-start sm:self-auto">
          <button
            onClick={() => setViewMode('timeline')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              viewMode === 'timeline'
                ? 'bg-amber-600 text-white font-semibold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <GitCommit className="w-3.5 h-3.5" />
            <span>{t.roadmapViewPath}</span>
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer whitespace-nowrap shrink-0 ${
              viewMode === 'grid'
                ? 'bg-amber-600 text-white font-semibold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>{t.roadmapViewGrid}</span>
          </button>
        </div>
      </div>

      {/* TIMELINE ROADMAP VIEW */}
      {viewMode === 'timeline' && (
        <div className="relative py-6">
          {/* Continuous Vertical Timeline Spine (center on desktop, left on mobile) */}
          <div className="absolute top-8 bottom-8 left-6 md:left-1/2 -ml-[1.5px] w-[3px] bg-gradient-to-b from-amber-600 via-amber-500/50 to-stone-300 pointer-events-none rounded-full" />

          {/* List of 10 Roadmap Nodes */}
          <div className="space-y-12 sm:space-y-16">
            {parts.map((part, index) => {
              const isEven = index % 2 === 0;
              const isCurrentlyPlaying = isPlaying && currentPlayingPartId === part.id;
              const title = getTitle(part);
              const subtitle = getSubtitle(part);
              const partNumFormatted = formatNum(part.partNumber);
              const elevationShort = getElevation(part).split(' ')[0];

              return (
                <div
                  key={part.id}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Central Milestone Pin on Timeline */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all shadow-sm ${
                        isCurrentlyPlaying
                          ? 'bg-amber-600 text-white ring-4 ring-amber-500/25 scale-110'
                          : 'bg-white text-amber-700 border-2 border-amber-600/80 hover:border-amber-700 hover:scale-105'
                      }`}
                    >
                      {partNumFormatted}
                    </div>

                    {/* Depth label below pin on desktop */}
                    <span className="hidden md:block text-[10px] font-mono text-stone-500 mt-1 whitespace-nowrap bg-[#FBF9F5] px-1.5 rounded">
                      {elevationShort}
                    </span>
                  </div>

                  {/* Horizontal connecting arm (desktop) */}
                  <div
                    className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-amber-500/30 to-amber-600/60 w-12 ${
                      isEven ? 'left-[calc(50%-48px)]' : 'right-[calc(50%-48px)]'
                    }`}
                  />

                  {/* Card Container: Strictly shows Image, Title, Subtitle */}
                  <div
                    className={`w-full pl-16 md:pl-0 ${
                      isEven ? 'md:pr-16 md:w-1/2' : 'md:pl-16 md:w-1/2 md:ml-auto'
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      onClick={() => onOpenDetail(part)}
                      className={`group relative rounded-2xl bg-white border overflow-hidden cursor-pointer transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-stone-900/10 hover:-translate-y-1 ${
                        isCurrentlyPlaying
                          ? 'border-amber-600 ring-2 ring-amber-500/20'
                          : 'border-stone-200 hover:border-amber-500/80'
                      }`}
                    >
                      {/* 1. IMAGE */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                        <img
                          src={part.image}
                          alt={`${title} - ${subtitle}`}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                            const img = e.currentTarget as HTMLImageElement;
                            if (img.dataset.fallbackApplied) return;
                            img.dataset.fallbackApplied = 'true';
                            img.src = fallbackEntranceImg;
                          }}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        {/* Subtle ambient scrim */}
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/35 via-transparent to-stone-900/15" />

                        {/* Part Badge in top left corner of image */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="px-2.5 py-1 rounded-md bg-white/92 backdrop-blur-md text-amber-800 font-mono text-xs font-semibold border border-stone-200/80 shadow-xs">
                            {t.partWord} {partNumFormatted}
                          </span>
                        </div>

                        {/* Now Playing live wave on image if active */}
                        {isCurrentlyPlaying && (
                          <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-600 text-white font-medium text-xs shadow-md">
                            <AudioVisualizer isPlaying={true} barCount={6} height={12} color="#ffffff" />
                            <span className="font-mono text-[11px] font-bold">{t.nowPlaying}</span>
                          </div>
                        )}

                        {/* Hover hint affordance icon */}
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-amber-700 p-1.5 rounded-lg border border-stone-200 shadow-xs">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* 2. TITLE & 3. SUBTITLE ONLY */}
                      <div className="p-5 sm:p-6 space-y-1.5">
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 group-hover:text-amber-700 transition-colors leading-snug">
                          {title}
                        </h3>
                        <p className="text-sm font-medium text-stone-600 leading-relaxed">
                          {subtitle}
                        </p>

                        <div className="pt-2 flex items-center gap-1.5 text-xs text-amber-700 font-medium group-hover:text-amber-800 transition-colors">
                          <span>{t.clickToOpen}</span>
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ROADMAP GRID VIEW */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {parts.map((part, index) => {
            const isCurrentlyPlaying = isPlaying && currentPlayingPartId === part.id;
            const title = getTitle(part);
            const subtitle = getSubtitle(part);
            const partNumFormatted = formatNum(part.partNumber);

            return (
              <motion.div
                key={part.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: (index % 3) * 0.08 }}
                onClick={() => onOpenDetail(part)}
                className={`group relative rounded-2xl bg-white border overflow-hidden cursor-pointer transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-stone-900/10 hover:-translate-y-1 ${
                  isCurrentlyPlaying
                    ? 'border-amber-600 ring-2 ring-amber-500/20'
                    : 'border-stone-200 hover:border-amber-500/80'
                }`}
              >
                {/* 1. IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={part.image}
                    alt={`${title} - ${subtitle}`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      if (img.dataset.fallbackApplied) return;
                      img.dataset.fallbackApplied = 'true';
                      img.src = fallbackEntranceImg;
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/35 via-transparent to-stone-900/15" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-white/92 backdrop-blur-md text-amber-800 font-mono text-xs font-semibold border border-stone-200/80 shadow-xs">
                      {t.partWord} {partNumFormatted}
                    </span>
                  </div>

                  {isCurrentlyPlaying && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-600 text-white font-medium text-xs shadow-md">
                      <AudioVisualizer isPlaying={true} barCount={6} height={12} color="#ffffff" />
                      <span className="font-mono text-[11px] font-bold">{t.nowPlaying}</span>
                    </div>
                  )}

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-amber-700 p-1.5 rounded-lg border border-stone-200 shadow-xs">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* 2. TITLE & 3. SUBTITLE ONLY */}
                <div className="p-5 sm:p-6 space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 group-hover:text-amber-700 transition-colors leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm font-medium text-stone-600 leading-relaxed">
                    {subtitle}
                  </p>
                  <div className="pt-2 flex items-center gap-1.5 text-xs text-amber-700 font-medium group-hover:text-amber-800 transition-colors">
                    <span>{t.clickToOpen}</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
