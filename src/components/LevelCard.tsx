import { useState, useEffect } from 'react';
import { HeritagePart } from '../data/pataleshwarData';
import { ArrowUpRight } from 'lucide-react';
import { AudioVisualizer } from './AudioVisualizer';
import { SupportedLanguage, TRANSLATIONS } from '../data/translations';
import { motion } from 'motion/react';

interface LevelCardProps {
  part: HeritagePart;
  index: number;
  isPlaying: boolean;
  currentTime?: number;
  activeLanguage?: SupportedLanguage;
  onOpenDetail: (part: HeritagePart) => void;
}

export function LevelCard({
  part,
  index,
  isPlaying,
  activeLanguage = 'en',
  onOpenDetail,
}: LevelCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(part.image);

  useEffect(() => {
    setImgSrc(part.image);
    setImageLoaded(false);
  }, [part.image]);

  const t = TRANSLATIONS[activeLanguage];

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      onClick={() => onOpenDetail(part)}
      className={`group relative flex flex-col bg-white border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 shadow-xs hover:shadow-xl hover:shadow-stone-900/10 hover:-translate-y-1 ${
        isPlaying
          ? 'border-amber-600 ring-2 ring-amber-500/20'
          : 'border-stone-200 hover:border-amber-500/80'
      }`}
    >
      {/* 1. Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-stone-100 animate-pulse flex items-center justify-center">
            <span className="text-xs text-stone-500 font-mono">Loading...</span>
          </div>
        )}

        <img
          src={imgSrc}
          alt={`${displayTitle} - ${displaySubtitle}`}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setImgSrc('/src/assets/images/pataleshwar_monolithic_entrance_1792473839143.jpg');
            setImageLoaded(true);
          }}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Subtle Contrast Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/35 via-transparent to-stone-900/15" />

        {/* Part Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-md bg-white/92 backdrop-blur-md text-amber-800 font-mono text-xs font-semibold border border-stone-200/80 shadow-xs">
            Part {part.partNumber < 10 ? `0${part.partNumber}` : part.partNumber}
          </span>
        </div>

        {/* Audio Active Overlay Badge */}
        {isPlaying && (
          <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-md bg-amber-600 text-white font-medium text-xs shadow-md">
            <AudioVisualizer isPlaying={true} barCount={6} height={12} color="#ffffff" />
            <span className="font-mono text-[11px] font-bold">{t.nowPlaying}</span>
          </div>
        )}

        {/* Hover hint affordance */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-white/95 text-amber-700 p-1.5 rounded-lg border border-stone-200 shadow-xs">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      {/* 2. Title & 3. Subtitle Only */}
      <div className="p-5 sm:p-6 space-y-1.5 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 group-hover:text-amber-700 transition-colors leading-snug">
            {displayTitle}
          </h3>
          <p className="text-sm font-medium text-stone-600 mt-1 leading-relaxed">
            {displaySubtitle}
          </p>
        </div>

        <div className="pt-3 flex items-center gap-1.5 text-xs text-amber-700 font-medium group-hover:text-amber-800 transition-colors">
          <span>{t.clickToOpen}</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.div>
  );
}
