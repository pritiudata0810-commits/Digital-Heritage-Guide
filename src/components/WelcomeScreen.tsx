import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Compass } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const projectLetters = "ANVESHAN".split("");
  const line1 = "Welcome to Your Digital Guide";
  const line2 = "Discover more. Learn more. Experience more.";

  const [displayedLine1, setDisplayedLine1] = useState('');
  const [displayedLine2, setDisplayedLine2] = useState('');
  const [isTypingLine1, setIsTypingLine1] = useState(true);
  const [isTypingLine2, setIsTypingLine2] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const completedRef = useRef(false);

  const handleFinish = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete();
  };

  useEffect(() => {
    // Slower, contemplative total duration: 8.2 seconds (8200 ms)
    const TOTAL_DURATION_MS = 8200;

    // Line 1 typing starts at 400ms at a relaxed 70ms per character
    let charIndex1 = 0;
    let interval1: ReturnType<typeof setInterval>;
    const startTimeout1 = setTimeout(() => {
      interval1 = setInterval(() => {
        charIndex1++;
        setDisplayedLine1(line1.slice(0, charIndex1));
        if (charIndex1 >= line1.length) {
          clearInterval(interval1);
          setIsTypingLine1(false);
        }
      }, 70);
    }, 400);

    // Line 2 typing starts at 3150ms at a steady 60ms per character
    let charIndex2 = 0;
    let interval2: ReturnType<typeof setInterval>;
    const startTimeout2 = setTimeout(() => {
      setIsTypingLine2(true);
      interval2 = setInterval(() => {
        charIndex2++;
        setDisplayedLine2(line2.slice(0, charIndex2));
        if (charIndex2 >= line2.length) {
          clearInterval(interval2);
          setIsTypingLine2(false);
          setIsCompleted(true);
        }
      }, 60);
    }, 3150);

    // Master completion timer: 8.2 seconds (8200 ms)
    const masterTimer = setTimeout(() => {
      handleFinish();
    }, TOTAL_DURATION_MS);

    return () => {
      clearTimeout(startTimeout1);
      clearTimeout(startTimeout2);
      if (interval1) clearInterval(interval1);
      if (interval2) clearInterval(interval2);
      clearTimeout(masterTimer);
    };
  }, [line1, line2]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-50 h-dvh bg-[#FBF9F5] text-stone-900 flex flex-col justify-between p-4 sm:p-10 lg:p-12 font-sans select-none overflow-hidden"
      >
        {/* Ambient progress indicator along top synced to slower duration */}
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 8.2, ease: 'linear' }}
          className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-amber-700 via-amber-500 to-amber-400 z-50 pointer-events-none"
        />

        {/* Soft ambient warm paper glow and subtle architectural dot texture */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(600px,100vw)] h-[min(600px,100vw)] bg-amber-400/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#d6d0c4_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        </div>

        {/* Top bar with subtle branding & Skip button */}
        <div className="relative z-10 flex items-center justify-between gap-2 pt-1">
          <div className="flex items-center gap-1.5 sm:gap-2 text-stone-700 font-mono text-[11px] sm:text-xs min-w-0">
            <Compass className="w-4 h-4 text-amber-700 shrink-0" />
            <span className="tracking-wider sm:tracking-widest uppercase font-semibold truncate">
              Anveshan · Pataleshwar
            </span>
          </div>

          <button
            onClick={handleFinish}
            className="min-h-[40px] px-3 sm:px-3.5 py-1.5 text-xs font-mono text-stone-600 hover:text-stone-950 rounded-lg border border-stone-300 hover:border-stone-400 bg-white/85 backdrop-blur transition-all cursor-pointer shadow-2xs whitespace-nowrap shrink-0"
          >
            Skip Intro →
          </button>
        </div>

        {/* Center: Animated Brand Title + Typing Animation Block */}
        <div className="relative z-10 max-w-3xl mx-auto w-full text-center space-y-4 sm:space-y-5 my-auto px-2">
          {/* Staggered letter-by-letter reveal for Anveshan */}
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-0.5 sm:gap-2 overflow-hidden">
              {projectLetters.map((letter, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 18, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-[0.15em] sm:tracking-[0.22em] text-amber-800"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="h-[1px] w-36 sm:w-48 mx-auto bg-gradient-to-r from-transparent via-amber-600/60 to-transparent"
            />
          </div>

          {/* Heading Line: "Welcome to Your Digital Guide" */}
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-serif font-bold text-stone-900 tracking-tight leading-[1.2] min-h-[2.4em] sm:min-h-[1.3em]">
            <span>{displayedLine1}</span>
            {isTypingLine1 && (
              <span className="inline-block w-[2.5px] sm:w-[3px] h-[0.95em] ml-1 bg-amber-600 align-middle animate-pulse" />
            )}
          </h1>

          {/* Tagline Line: "Discover more. Learn more. Experience more." */}
          <div className="min-h-[3em] sm:min-h-[2em]">
            <p className="text-base sm:text-2xl font-reading text-amber-800 font-medium tracking-wide">
              <span>{displayedLine2}</span>
              {isTypingLine2 && (
                <span className="inline-block w-[2px] sm:w-[2.5px] h-[0.9em] ml-1 bg-amber-700 align-middle animate-pulse" />
              )}
            </p>
          </div>

          {/* Call to action appears once completed */}
          <div className="pt-2 sm:pt-4 min-h-[56px] flex items-center justify-center">
            {isCompleted && (
              <motion.button
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={handleFinish}
                className="inline-flex items-center justify-center gap-3 min-h-[46px] px-7 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm transition-all shadow-lg shadow-amber-600/20 cursor-pointer group"
              >
                <span>Enter Sanctuary</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            )}
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="relative z-10 flex items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-stone-500">
          <span className="truncate">Archaeological Survey of India</span>
          <span className="text-stone-600 shrink-0">Shivajinagar, Pune</span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
