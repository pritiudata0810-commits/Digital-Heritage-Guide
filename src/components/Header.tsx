import { Headphones, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { SupportedLanguage, TRANSLATIONS } from '../data/translations';

interface HeaderProps {
  onStartTour: () => void;
  activeLanguage: SupportedLanguage;
  onSelectLanguage: (lang: SupportedLanguage) => void;
}

export function Header({ onStartTour, activeLanguage, onSelectLanguage }: HeaderProps) {
  const t = TRANSLATIONS[activeLanguage];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/92 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Single text element wordmark */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-lg sm:text-xl font-bold tracking-wider text-stone-900 hover:text-amber-700 transition-colors whitespace-nowrap shrink-0"
        >
          {t.brandTitle}
        </motion.a>

        {/* Zone 2: Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
          >
            {t.navHome}
          </a>
          <a
            href="#cave-levels"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('cave-levels')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
          >
            {t.navCaveLevels}
          </a>
          <a
            href="#architecture"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0"
          >
            {t.navArchitecture}
          </a>
        </nav>

        {/* Zone 3: Language Selector & Tour CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Top-side Language Section: English (by default), Hindi, Marathi */}
          <div className="flex items-center bg-stone-100 border border-stone-200 rounded-lg p-1 text-xs">
            <div className="hidden sm:flex items-center text-stone-500 pl-1.5 pr-1">
              <Globe className="w-3.5 h-3.5" />
            </div>
            <button
              onClick={() => onSelectLanguage('en')}
              className={`px-2 sm:px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeLanguage === 'en'
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="English (Default)"
            >
              English
            </button>
            <button
              onClick={() => onSelectLanguage('hi')}
              className={`px-2 sm:px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeLanguage === 'hi'
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="हिन्दी"
            >
              हिन्दी
            </button>
            <button
              onClick={() => onSelectLanguage('mr')}
              className={`px-2 sm:px-2.5 py-1 rounded-md text-xs font-medium transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeLanguage === 'mr'
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
              title="मराठी"
            >
              मराठी
            </button>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={onStartTour}
            className="hidden xs:flex items-center gap-1.5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer"
          >
            <Headphones className="w-3.5 h-3.5" />
            <span>{t.btnAudioTour}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
