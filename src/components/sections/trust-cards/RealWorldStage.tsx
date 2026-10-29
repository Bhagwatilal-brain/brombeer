import React from 'react';

interface FeatureChip {
  id: string;
  line1: string;
  line2?: string;
  animationClass: string;
  delay?: string;
  singleLine?: boolean;
}

const COLUMN_1_CHIPS: FeatureChip[] = [
  {
    id: 'c1',
    line1: 'Business-first AI strategy',
    animationClass: 'animate-float-1',
    singleLine: true,
  },
  {
    id: 'c2',
    line1: 'Integration with existing systems',
    animationClass: 'animate-float-2',
    delay: '0.8s',
    singleLine: true,
  },
  {
    id: 'c3',
    line1: 'Human oversight and responsible',
    line2: 'AI practices',
    animationClass: 'animate-float-3',
    delay: '1.6s',
  },
];

const COLUMN_2_CHIPS: FeatureChip[] = [
  {
    id: 'c4',
    line1: 'Solutions tailored to your',
    line2: 'workflows',
    animationClass: 'animate-float-4',
    delay: '0.4s',
  },
  {
    id: 'c5',
    line1: 'Security-conscious',
    line2: 'implementation',
    animationClass: 'animate-float-5',
    delay: '1.2s',
  },
  {
    id: 'c6',
    line1: 'Continuous improvement and',
    line2: 'optimization',
    animationClass: 'animate-float-6',
    delay: '2.0s',
  },
];

// Glowing Purple Starburst Node Icon
const GlowingStarNode: React.FC = () => (
  <span className="relative flex-shrink-0 w-3.5 h-3.5 flex items-center justify-center mr-2.5 select-none">
    {/* Soft ambient breathing aura */}
    <span className="absolute w-4 h-4 rounded-full bg-[#7650E8]/25 blur-[1.5px] animate-glow-pulse" />

    {/* Secondary soft halo ring */}
    <span className="absolute w-2.5 h-2.5 rounded-full bg-[#8B5CF6]/40 blur-[0.5px]" />

    {/* Sparkle 4-point cross rays */}
    <svg
      className="absolute inset-0 w-full h-full text-[#7650E8] opacity-80"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M7 1v12M1 7h12" />
    </svg>

    {/* Core solid vibrant violet dot */}
    <span className="relative w-1.5 h-1.5 rounded-full bg-[#7650E8] shadow-[0_0_6px_#7650E8]" />
  </span>
);

export const RealWorldStage: React.FC = () => {
  return (
    <div className="real-world-stage relative w-full max-w-[560px] rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-[#FAF7FE] via-[#F4EFFC] to-[#EFE8FA] border border-[#6853A5]/18 shadow-[0_20px_50px_-15px_rgba(118,80,232,0.09),0_2px_6px_rgba(0,0,0,0.02)] overflow-hidden px-4 sm:px-6 pt-8 sm:pt-9 pb-9 sm:pb-10 flex flex-col justify-center min-h-[390px] sm:min-h-[410px]">

      {/* Background Constellation Network (Matching Reference Image) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 560 410"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="stage-star-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7650E8" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#7650E8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7650E8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Faint Connecting Network Lines */}
        <g stroke="rgba(118, 80, 232, 0.15)" strokeWidth="1" strokeLinecap="round">
          {/* Top celestial polygon trail */}
          <polyline points="65,75 140,48 260,35 385,50 465,38 525,70" />

          {/* Mid network connections */}
          <line x1="65" y1="75" x2="55" y2="120" />
          <line x1="140" y1="48" x2="150" y2="160" />
          <line x1="385" y1="50" x2="405" y2="105" />
          <line x1="405" y1="105" x2="515" y2="140" />

          {/* Lower constellation trail */}
          <polyline points="85,320 170,365 290,345 425,370 505,325" />

          {/* Vertical trailing diagonals extending down */}
          <line x1="85" y1="320" x2="70" y2="380" strokeDasharray="3 3" />
          <line x1="170" y1="365" x2="155" y2="400" strokeDasharray="3 3" />
          <line x1="425" y1="370" x2="440" y2="400" strokeDasharray="3 3" />
          <line x1="505" y1="325" x2="520" y2="380" strokeDasharray="3 3" />
          <line x1="150" y1="160" x2="85" y2="320" />
        </g>

        {/* Constellation Star Nodes */}
        {/* Top Nodes */}
        <g>
          <circle cx="65" cy="75" r="5" fill="url(#stage-star-glow)" />
          <circle cx="65" cy="75" r="2" fill="#7650E8" />
        </g>
        <g>
          <circle cx="140" cy="48" r="5.5" fill="url(#stage-star-glow)" />
          <circle cx="140" cy="48" r="2.5" fill="#7650E8" />
        </g>
        <g>
          <circle cx="260" cy="35" r="4.5" fill="url(#stage-star-glow)" />
          <circle cx="260" cy="35" r="2" fill="#7650E8" />
        </g>
        <g>
          <circle cx="385" cy="50" r="5.5" fill="url(#stage-star-glow)" />
          <circle cx="385" cy="50" r="2.5" fill="#7650E8" />
        </g>
        <g>
          <circle cx="465" cy="38" r="6" fill="url(#stage-star-glow)" />
          <circle cx="465" cy="38" r="2.5" fill="#7650E8" />
        </g>
        <g>
          <circle cx="525" cy="70" r="5" fill="url(#stage-star-glow)" />
          <circle cx="525" cy="70" r="2" fill="#7650E8" />
        </g>

        {/* Mid Nodes */}
        <g>
          <circle cx="55" cy="120" r="4.5" fill="url(#stage-star-glow)" />
          <circle cx="55" cy="120" r="2" fill="#7650E8" />
        </g>
        <g>
          <circle cx="405" cy="105" r="5" fill="url(#stage-star-glow)" />
          <circle cx="405" cy="105" r="2" fill="#7650E8" />
        </g>
        <g>
          <circle cx="515" cy="140" r="4.5" fill="url(#stage-star-glow)" />
          <circle cx="515" cy="140" r="2" fill="#7650E8" />
        </g>
        <g>
          <circle cx="150" cy="160" r="4.5" fill="url(#stage-star-glow)" />
          <circle cx="150" cy="160" r="2" fill="#7650E8" />
        </g>

        {/* Lower Trailing Nodes */}
        <g>
          <circle cx="85" cy="320" r="5.5" fill="url(#stage-star-glow)" />
          <circle cx="85" cy="320" r="2.5" fill="#7650E8" />
        </g>
        <g>
          <circle cx="170" cy="365" r="5" fill="url(#stage-star-glow)" />
          <circle cx="170" cy="365" r="2" fill="#7650E8" />
        </g>
        <g>
          <circle cx="290" cy="345" r="6" fill="url(#stage-star-glow)" />
          <circle cx="290" cy="345" r="2.5" fill="#7650E8" />
        </g>
        <g>
          <circle cx="425" cy="370" r="5.5" fill="url(#stage-star-glow)" />
          <circle cx="425" cy="370" r="2" fill="#7650E8" />
        </g>
        <g>
          <circle cx="505" cy="325" r="5" fill="url(#stage-star-glow)" />
          <circle cx="505" cy="325" r="2" fill="#7650E8" />
        </g>
      </svg>

      {/* 6 Floating & Breathing Feature Chips (2 Columns with vertical stagger) */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 items-start">

        {/* Column 1 (Starts at top) */}
        <div className="flex flex-col gap-3 sm:gap-3.5">
          {COLUMN_1_CHIPS.map((chip) => (
            <div
              key={chip.id}
              style={{ animationDelay: chip.delay }}
              className={`chip-floating ${chip.animationClass} group flex items-center px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-[16px] sm:rounded-[18px] bg-white/95 backdrop-blur-sm border border-white/90 shadow-[0_4px_16px_-4px_rgba(75,45,168,0.06),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_28px_-6px_rgba(118,80,232,0.18)] hover:border-[#7650E8]/35 transition-all duration-300 select-none cursor-default`}
            >
              <GlowingStarNode />
              <div className="text-[12px] sm:text-[12.5px] font-medium text-[#1A1724] tracking-tight leading-snug">
                <div className={chip.singleLine ? 'whitespace-nowrap' : undefined}>
                  {chip.line1}
                </div>
                {chip.line2 && <div>{chip.line2}</div>}
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 (Staggered vertically downwards, matching reference image) */}
        <div className="flex flex-col gap-3 sm:gap-3.5 sm:translate-y-4">
          {COLUMN_2_CHIPS.map((chip) => (
            <div
              key={chip.id}
              style={{ animationDelay: chip.delay }}
              className={`chip-floating ${chip.animationClass} group flex items-center px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-[16px] sm:rounded-[18px] bg-white/95 backdrop-blur-sm border border-white/90 shadow-[0_4px_16px_-4px_rgba(75,45,168,0.06),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_28px_-6px_rgba(118,80,232,0.18)] hover:border-[#7650E8]/35 transition-all duration-300 select-none cursor-default`}
            >
              <GlowingStarNode />
              <div className="text-[12px] sm:text-[12.5px] font-medium text-[#1A1724] tracking-tight leading-snug">
                <div>{chip.line1}</div>
                {chip.line2 && <div>{chip.line2}</div>}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Embedded CSS for Floating, Breathing, and Glowing Node Animations */}
      <style>{`
        @keyframes chip-float-1 {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-5px) scale(1.01);
          }
        }
        @keyframes chip-float-2 {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-6px) scale(1.008);
          }
        }
        @keyframes chip-float-3 {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-4.5px) scale(1.012);
          }
        }
        @keyframes chip-float-4 {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-5.5px) scale(1.01);
          }
        }
        @keyframes chip-float-5 {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-4.5px) scale(1.012);
          }
        }
        @keyframes chip-float-6 {
          0%, 100% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(-6px) scale(1.01);
          }
        }
        @keyframes star-glow-pulse {
          0%, 100% {
            opacity: 0.55;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .animate-float-1 {
          animation: chip-float-1 5.8s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: chip-float-2 6.5s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: chip-float-3 6.0s ease-in-out infinite;
        }
        .animate-float-4 {
          animation: chip-float-4 6.2s ease-in-out infinite;
        }
        .animate-float-5 {
          animation: chip-float-5 6.8s ease-in-out infinite;
        }
        .animate-float-6 {
          animation: chip-float-6 6.3s ease-in-out infinite;
        }
        .animate-glow-pulse {
          animation: star-glow-pulse 3.6s ease-in-out infinite;
        }

        @media (hover: hover) {
          .chip-floating:hover {
            animation-play-state: paused;
            transform: translateY(-6px) scale(1.02);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .chip-floating,
          .animate-glow-pulse {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};
