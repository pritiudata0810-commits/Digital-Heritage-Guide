import { useState } from 'react';
import { HeritagePart, PATALESHWAR_PARTS } from '../data/pataleshwarData';
import { Play, Square, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface InteractiveMapProps {
  onSelectPart: (part: HeritagePart) => void;
  onPlayPart: (part: HeritagePart) => void;
  onStopAudio: () => void;
  currentPart: HeritagePart | null;
  isPlaying: boolean;
}

export function InteractiveMap({
  onSelectPart,
  onPlayPart,
  onStopAudio,
  currentPart,
  isPlaying
}: InteractiveMapProps) {
  const [selectedPin, setSelectedPin] = useState<HeritagePart>(PATALESHWAR_PARTS[2]); // Default to Nandi Mandapa
  const [mapMode, setMapMode] = useState<'plan' | 'elevation'>('plan');

  return (
    <div id="site-map" className="w-full bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
      {/* Top Map Toolbar */}
      <div className="px-6 py-4 border-b border-stone-200 flex flex-wrap items-center justify-between gap-4 bg-[#FBF9F5]">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-semibold">
            Archaeological Survey of India · Site Plan
          </span>
          <h3 className="text-lg font-semibold text-stone-900 font-serif">
            Subterranean Monolithic Layout & Spatial Zones
          </h3>
        </div>

        {/* View mode toggle */}
        <div className="flex items-center gap-1 p-1 bg-stone-100 border border-stone-200 rounded-lg">
          <button
            onClick={() => setMapMode('plan')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              mapMode === 'plan' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Floor Plan (Top-Down)
          </button>
          <button
            onClick={() => setMapMode('elevation')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              mapMode === 'elevation' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Geological Depth Profile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* SVG Interactive Canvas */}
        <div className="lg:col-span-8 p-6 sm:p-8 bg-[#F3EFE6] flex flex-col items-center justify-center relative min-h-[440px]">
          {mapMode === 'plan' ? (
            <div className="relative w-full max-w-[620px] aspect-[4/3] border border-stone-200 rounded-xl bg-white p-4 shadow-xs">
              {/* SVG Architectural Floor Plan */}
              <svg
                viewBox="0 0 500 400"
                className="w-full h-full text-stone-600 select-none"
              >
                {/* Sunken quarry perimeter outline */}
                <rect
                  x="25"
                  y="20"
                  width="450"
                  height="360"
                  fill="#FBF9F5"
                  stroke="#D6D0C4"
                  strokeWidth="2"
                  rx="6"
                />

                {/* Outer quarry rock hatching / texture bands */}
                <path
                  d="M25,20 L55,20 M25,40 L65,40 M435,20 L475,20 M25,180 L45,180 M455,180 L475,180"
                  stroke="#E7E2D8"
                  strokeWidth="1.5"
                />

                {/* Subterranean Cave Chamber (Sabha Mandapa & Shrines) */}
                <path
                  d="M 90,30 L 410,30 L 410,180 L 90,180 Z"
                  fill="#EFECE3"
                  stroke="#A8A29E"
                  strokeWidth="2"
                />

                {/* Triple Sanctum niches at the top */}
                <rect x="130" y="32" width="60" height="40" fill="#E7E2D8" stroke="#78716C" strokeWidth="1.5" />
                <rect x="220" y="32" width="60" height="48" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
                <circle cx="250" cy="56" r="10" fill="#FDE68A" stroke="#B45309" strokeWidth="1.5" />
                <circle cx="250" cy="56" r="4" fill="#B45309" />
                <rect x="310" y="32" width="60" height="40" fill="#E7E2D8" stroke="#78716C" strokeWidth="1.5" />

                {/* Columns of the Sabha Mandapa (Grid of square pillars) */}
                {[120, 170, 220, 280, 330, 380].map((cx) =>
                  [95, 135, 175].map((cy) => (
                    <rect
                      key={`col-${cx}-${cy}`}
                      x={cx - 7}
                      y={cy - 7}
                      width="14"
                      height="14"
                      fill="#A8A29E"
                      stroke="#57534E"
                      strokeWidth="1"
                      rx="1"
                    />
                  ))
                )}

                {/* Cave Entrance Threshold line */}
                <line x1="90" y1="180" x2="410" y2="180" stroke="#78716C" strokeWidth="3" strokeDasharray="6 3" />
                <text x="250" y="195" textAnchor="middle" fill="#57534E" fontSize="10" fontFamily="sans-serif">
                  CAVE FACADE THRESHOLD
                </text>

                {/* Sunken Courtyard Area */}
                <rect x="60" y="210" width="380" height="150" fill="#F5F2EB" stroke="#D6D0C4" strokeWidth="1" />

                {/* Circular Nandi Mandapa in Courtyard */}
                <circle
                  cx="250"
                  cy="275"
                  r="45"
                  fill="#FEF3C7"
                  stroke="#D97706"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
                {/* 12 perimeter pillars of Nandi Mandapa */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const px = 250 + 38 * Math.cos(angle);
                  const py = 275 + 38 * Math.sin(angle);
                  return (
                    <circle
                      key={`nandi-col-${i}`}
                      cx={px}
                      cy={py}
                      r="4"
                      fill="#57534E"
                      stroke="#FFFFFF"
                      strokeWidth="1"
                    />
                  );
                })}
                {/* Nandi Stone Statue in Center */}
                <ellipse cx="250" cy="275" rx="12" ry="7" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />

                {/* Water Harvest Cistern in bottom-right corner */}
                <rect x="365" y="290" width="60" height="65" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
                <path d="M 365,305 L 425,305 M 365,320 L 425,320 M 365,335 L 425,335" stroke="#BAE6FD" strokeWidth="1" />
                <text x="395" y="350" textAnchor="middle" fill="#0369A1" fontSize="8" fontFamily="sans-serif">
                  CISTERN
                </text>

                {/* Unfinished Rock Face area (North-East wall) */}
                <path
                  d="M 410,60 Q 440,90 410,130"
                  stroke="#DC2626"
                  strokeWidth="2"
                  strokeDasharray="3 3"
                  fill="none"
                />

                {/* Entrance steps in bottom */}
                <g transform="translate(205, 360)">
                  {[0, 4, 8, 12, 16].map((stepY, idx) => (
                    <rect
                      key={`step-${idx}`}
                      x={idx * 3}
                      y={stepY}
                      width={90 - idx * 6}
                      height="3"
                      fill="#78716C"
                      stroke="#57534E"
                    />
                  ))}
                  <text x="45" y="-6" textAnchor="middle" fill="#57534E" fontSize="9" fontFamily="sans-serif">
                    ENTRANCE STEPS FROM JM ROAD
                  </text>
                </g>
              </svg>

              {/* Interactive Markers for all 10 Parts */}
              {PATALESHWAR_PARTS.map((part) => {
                const isCurrent = currentPart?.id === part.id && isPlaying;
                const isSelected = selectedPin.id === part.id;

                return (
                  <button
                    key={part.id}
                    onClick={() => setSelectedPin(part)}
                    style={{ left: `${part.coordinatesOnMap.x}%`, top: `${part.coordinatesOnMap.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 z-10 cursor-pointer"
                    aria-label={`${part.title}: ${part.coordinatesOnMap.label}`}
                  >
                    <div
                      className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full font-mono text-xs font-bold transition-all shadow-sm ${
                        isSelected
                          ? 'bg-amber-600 text-white ring-4 ring-amber-500/30 scale-110'
                          : isCurrent
                          ? 'bg-emerald-600 text-white ring-4 ring-emerald-500/30 animate-pulse'
                          : 'bg-white text-stone-800 border border-stone-400 hover:bg-stone-100 hover:border-amber-600'
                      }`}
                    >
                      {part.partNumber}
                    </div>

                    {/* Quick tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-30 pointer-events-none">
                      <div className="bg-stone-900 text-white text-xs px-2.5 py-1 rounded shadow-lg whitespace-nowrap">
                        <span className="text-amber-300 font-semibold">{part.title}</span>
                        <span className="text-stone-300 block text-[10px]">{part.coordinatesOnMap.label}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            /* Geological Elevation Cross-Section */
            <div className="w-full max-w-[620px] aspect-[4/3] border border-stone-200 rounded-xl bg-white p-6 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-xs font-mono text-stone-500">Vertical Rock Cut Profile (West-East)</span>
                <p className="text-xs text-stone-700 mt-1">
                  Excavated entirely out of horizontal Deccan volcanic flood basalt layers.
                </p>
              </div>

              {/* Cross-section graphic */}
              <div className="space-y-3 font-mono text-xs text-stone-700">
                <div className="flex items-center justify-between border-b border-stone-200 pb-1">
                  <span className="text-stone-800 font-semibold">0.0m — Modern Pune Surface Level (JM Road)</span>
                  <span className="text-stone-500">Street Grade</span>
                </div>
                <div className="h-10 bg-stone-50 border border-dashed border-amber-500/60 rounded px-3 flex items-center justify-between">
                  <span className="text-amber-800 font-medium">Part 1: Monolithic Descent Stairs</span>
                  <span className="text-stone-500 text-[11px]">-0.0m to -3.5m</span>
                </div>
                <div className="h-12 bg-stone-100 border border-stone-200 rounded px-3 flex items-center justify-between">
                  <span className="text-stone-800">Part 2 & 3: Sunken Courtyard & Circular Nandi Pavilion</span>
                  <span className="text-stone-500 text-[11px]">-5.0m to -5.8m</span>
                </div>
                <div className="h-14 bg-stone-50 border border-amber-200 rounded px-3 flex items-center justify-between">
                  <span className="text-stone-800">Part 4, 5, 6: Pillared Sabha Mandapa Assembly Hall</span>
                  <span className="text-stone-500 text-[11px]">-6.2m</span>
                </div>
                <div className="h-12 bg-amber-50 border border-amber-300 rounded px-3 flex items-center justify-between">
                  <span className="text-amber-900 font-semibold">Part 7 & 8: Sacred Shiva Linga & Triple Garbhagriha</span>
                  <span className="text-amber-800 text-[11px]">-7.2m (Deepest Sanctum)</span>
                </div>
                <div className="h-8 bg-sky-50 border border-sky-200 rounded px-3 flex items-center justify-between">
                  <span className="text-sky-900">Part 10: Subterranean Monsoon Catchment Cistern</span>
                  <span className="text-sky-700 text-[11px]">-7.5m Bedrock Base</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 text-xs text-stone-600 flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600 inline-block" />
              Selected Location
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block" />
              Now Playing
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white border border-stone-400 inline-block" />
              Available Level (1–10)
            </span>
          </div>
        </div>

        {/* Selected Part Detail Sidebar in Map */}
        <div className="lg:col-span-4 p-6 bg-white border-t lg:border-t-0 lg:border-l border-stone-200 flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPin.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="relative rounded-lg overflow-hidden aspect-video border border-stone-200 shadow-xs bg-stone-100">
                <img
                  src={selectedPin.image}
                  alt={selectedPin.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 text-[11px] font-mono text-stone-900 bg-white/90 px-2 py-0.5 rounded border border-stone-200">
                  Elevation: {selectedPin.elevationMeters}
                </span>
              </div>

              <div>
                <div className="text-xs text-stone-500 flex items-center gap-2">
                  <span>Part {selectedPin.partNumber}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedPin.depthLevel}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedPin.duration}</span>
                </div>
                <h4 className="text-base sm:text-lg font-serif font-bold text-stone-900 mt-1">
                  {selectedPin.title}
                </h4>
                <p className="text-xs text-amber-700 font-medium mt-0.5">{selectedPin.subtitle}</p>
                <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                  {selectedPin.overview}
                </p>
              </div>

              {/* Architectural bullet highlights */}
              <div className="border-t border-stone-200 pt-3">
                <span className="text-[11px] uppercase tracking-wider text-stone-500 font-mono block mb-1.5">
                  Architectural Highlights
                </span>
                <ul className="text-xs text-stone-700 space-y-1">
                  {selectedPin.architecturalFeatures.slice(0, 2).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-amber-700">·</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Action buttons for selected pin */}
          <div className="pt-4 border-t border-stone-200 space-y-2">
            <div className="flex items-center gap-2">
              {currentPart?.id === selectedPin.id && isPlaying ? (
                <button
                  onClick={onStopAudio}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium rounded-lg bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-colors cursor-pointer"
                >
                  <Square className="w-3.5 h-3.5 fill-current" />
                  Stop Audio
                </button>
              ) : (
                <button
                  onClick={() => onPlayPart(selectedPin)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition-colors shadow-xs cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Start Level Audio ({selectedPin.duration})
                </button>
              )}

              <button
                onClick={() => onSelectPart(selectedPin)}
                className="py-2 px-3 text-xs font-medium rounded-lg bg-stone-100 text-stone-800 border border-stone-200 hover:bg-stone-200 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                Inspect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
