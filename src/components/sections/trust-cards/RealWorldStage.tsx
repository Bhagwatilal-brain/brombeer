import React from 'react';
import {
  TrendingUp,
  Puzzle,
  ShieldCheck,
  Rocket,
} from 'lucide-react';

interface StageCard {
  id: string;
  icon: React.ReactNode;
  line1: string;
  line2: string;
  delay: string;
}

const LEFT_CARDS: StageCard[] = [
  {
    id: 'c1',
    icon: <TrendingUp className="w-5 h-5 text-[#7650E8]" />,
    line1: 'Business-first',
    line2: 'AI strategy',
    delay: '0s',
  },
  {
    id: 'c2',
    icon: <Puzzle className="w-5 h-5 text-[#7650E8]" />,
    line1: 'Integration with',
    line2: 'existing systems',
    delay: '0.8s',
  },
  {
    id: 'c3',
    icon: <ShieldCheck className="w-5 h-5 text-[#7650E8]" />,
    line1: 'Human oversight and',
    line2: 'responsible AI practices',
    delay: '1.6s',
  },
];

const RIGHT_CARDS: StageCard[] = [
  {
    id: 'c4',
    icon: (
      <svg
        className="w-5 h-5 text-[#7650E8]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="2" width="8" height="6" rx="1.5" />
        <rect x="2" y="16" width="8" height="6" rx="1.5" />
        <rect x="14" y="16" width="8" height="6" rx="1.5" />
        <path d="M12 8v4M6 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    line1: 'Solutions tailored',
    line2: 'to your workflows',
    delay: '0.4s',
  },
  {
    id: 'c5',
    icon: (
      <svg
        className="w-5 h-5 text-[#7650E8]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <rect x="9.5" y="10" width="5" height="4" rx="1" fill="currentColor" fillOpacity="0.2" />
        <path d="M10.5 10V8.5a1.5 1.5 0 0 1 3 0V10" />
      </svg>
    ),
    line1: 'Security-conscious',
    line2: 'implementation',
    delay: '1.2s',
  },
  {
    id: 'c6',
    icon: <Rocket className="w-5 h-5 text-[#7650E8]" />,
    line1: 'Continuous improvement',
    line2: 'and optimization',
    delay: '2.0s',
  },
];

export const RealWorldStage: React.FC = () => {
  return (
    <div className="relative w-full max-w-[660px] mx-auto select-none">
      {/* 
        ========================================================================
        DESKTOP & TABLET NEURAL AI HUB (Screens >= 640px)
        Matches second reference image with pixel-perfect geometric alignment
        ========================================================================
      */}
      <div className="hidden sm:block relative w-full aspect-[640/440]">
        {/* Background Ambient SVG: Orbital Radar Rings, Traces, Pins, Node Dots & Floating Spheres */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 640 440"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            {/* Ambient Radial Core Glow */}
            <radialGradient id="hub-core-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#7650E8" stopOpacity="0.22" />
              <stop offset="45%" stopColor="#8B5CF6" stopOpacity="0.08" />
              <stop offset="75%" stopColor="#7650E8" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#7650E8" stopOpacity="0" />
            </radialGradient>

            {/* Glowing Connection Dot Gradient */}
            <radialGradient id="node-dot-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#9D74FF" stopOpacity="1" />
              <stop offset="60%" stopColor="#7650E8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#7650E8" stopOpacity="0" />
            </radialGradient>

            {/* 3D Glossy Violet Glass Sphere Gradient */}
            <radialGradient id="sphere-gradient" cx="35%" cy="30%" r="65%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#C4B5FD" />
              <stop offset="55%" stopColor="#7C3AED" />
              <stop offset="85%" stopColor="#4C1D95" />
              <stop offset="100%" stopColor="#2E1065" />
            </radialGradient>

            {/* Soft Shadow for Floating Spheres */}
            <filter id="sphere-shadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#6D28D9" floodOpacity="0.32" />
            </filter>

            {/* Glowing Filter for Connector Paths */}
            <filter id="trace-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Ambient Background Core Aura */}
          <circle cx="320" cy="220" r="180" fill="url(#hub-core-glow)" />

          {/* 2. Top-Right Dot Matrix Grid (Matches Reference Image) */}
          <g fill="#7650E8" opacity="0.22">
            {[0, 1, 2, 3, 4, 5].map((col) =>
              [0, 1, 2, 3].map((row) => (
                <circle
                  key={`dot-${col}-${row}`}
                  cx={560 + col * 13}
                  cy={24 + row * 13}
                  r="1.8"
                />
              ))
            )}
          </g>

          {/* 3. Concentric Orbital Radar Rings */}
          <g>
            {/* Outer dashed radar ring */}
            <circle
              cx="320"
              cy="220"
              r="218"
              stroke="#7650E8"
              strokeOpacity="0.22"
              strokeWidth="1"
              strokeDasharray="5 7"
            />
            {/* Orbital node dots on outer ring */}
            <circle cx="530" cy="160" r="2.5" fill="#7650E8" opacity="0.6" />
            <circle cx="110" cy="280" r="2.5" fill="#7650E8" opacity="0.6" />

            {/* Middle orbital ring with satellite node dots */}
            <circle
              cx="320"
              cy="220"
              r="150"
              stroke="#7650E8"
              strokeOpacity="0.2"
              strokeWidth="1"
            />
            <circle cx="426" cy="326" r="3" fill="#7650E8" opacity="0.75" />
            <circle cx="214" cy="326" r="3" fill="#7650E8" opacity="0.75" />
            <circle cx="214" cy="114" r="3" fill="#7650E8" opacity="0.75" />
            <circle cx="426" cy="114" r="3" fill="#7650E8" opacity="0.75" />

            {/* Inner orbital ring */}
            <circle
              cx="320"
              cy="220"
              r="92"
              stroke="#7650E8"
              strokeOpacity="0.25"
              strokeWidth="1"
            />
          </g>

          {/* 4. AI Chip Top & Bottom Vertical Pin Contacts */}
          <g stroke="#7650E8" strokeWidth="1.4" strokeOpacity="0.6" strokeLinecap="round">
            {/* Top Pins */}
            <line x1="298" y1="172" x2="298" y2="152" />
            <line x1="320" y1="172" x2="320" y2="144" />
            <line x1="342" y1="172" x2="342" y2="152" />
            <circle cx="298" cy="152" r="2" fill="#7650E8" />
            <circle cx="320" cy="144" r="2" fill="#7650E8" />
            <circle cx="342" cy="152" r="2" fill="#7650E8" />

            {/* Bottom Pins */}
            <line x1="298" y1="268" x2="298" y2="288" />
            <line x1="320" y1="268" x2="320" y2="296" />
            <line x1="342" y1="268" x2="342" y2="288" />
            <circle cx="298" cy="288" r="2" fill="#7650E8" />
            <circle cx="320" cy="296" r="2" fill="#7650E8" />
            <circle cx="342" cy="288" r="2" fill="#7650E8" />
          </g>

          {/* 5. Curved Circuit Traces Connecting Cards to the Central AI Chip */}
          <g filter="url(#trace-glow)">
            {/* Left 3 Connector Traces */}
            {/* Card 1 -> Top Left of Chip */}
            <path
              id="path-c1"
              d="M 225 75 C 265 75, 240 192, 272 192"
              stroke="#8B62F7"
              strokeWidth="1.6"
              strokeOpacity="0.8"
              fill="none"
              strokeLinecap="round"
            />
            {/* Card 2 -> Mid Left of Chip */}
            <path
              id="path-c2"
              d="M 225 220 L 272 220"
              stroke="#8B62F7"
              strokeWidth="1.6"
              strokeOpacity="0.8"
              fill="none"
              strokeLinecap="round"
            />
            {/* Card 3 -> Bot Left of Chip */}
            <path
              id="path-c3"
              d="M 225 365 C 265 365, 240 248, 272 248"
              stroke="#8B62F7"
              strokeWidth="1.6"
              strokeOpacity="0.8"
              fill="none"
              strokeLinecap="round"
            />

            {/* Right 3 Connector Traces */}
            {/* Card 4 -> Top Right of Chip */}
            <path
              id="path-c4"
              d="M 415 75 C 375 75, 400 192, 368 192"
              stroke="#8B62F7"
              strokeWidth="1.6"
              strokeOpacity="0.8"
              fill="none"
              strokeLinecap="round"
            />
            {/* Card 5 -> Mid Right of Chip */}
            <path
              id="path-c5"
              d="M 415 220 L 368 220"
              stroke="#8B62F7"
              strokeWidth="1.6"
              strokeOpacity="0.8"
              fill="none"
              strokeLinecap="round"
            />
            {/* Card 6 -> Bot Right of Chip */}
            <path
              id="path-c6"
              d="M 415 365 C 375 365, 400 248, 368 248"
              stroke="#8B62F7"
              strokeWidth="1.6"
              strokeOpacity="0.8"
              fill="none"
              strokeLinecap="round"
            />
          </g>

          {/* 6. Dynamic Energy Pulses Streaming Towards the AI Core */}
          <g>
            <circle r="2.8" fill="#FFFFFF">
              <animateMotion
                path="M 225 75 C 265 75, 240 192, 272 192"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="2.8" fill="#FFFFFF">
              <animateMotion
                path="M 225 220 L 272 220"
                dur="2.4s"
                repeatCount="indefinite"
                begin="0.6s"
              />
            </circle>
            <circle r="2.8" fill="#FFFFFF">
              <animateMotion
                path="M 225 365 C 265 365, 240 248, 272 248"
                dur="3.0s"
                repeatCount="indefinite"
                begin="1.2s"
              />
            </circle>
            <circle r="2.8" fill="#FFFFFF">
              <animateMotion
                path="M 415 75 C 375 75, 400 192, 368 192"
                dur="2.8s"
                repeatCount="indefinite"
                begin="0.4s"
              />
            </circle>
            <circle r="2.8" fill="#FFFFFF">
              <animateMotion
                path="M 415 220 L 368 220"
                dur="2.4s"
                repeatCount="indefinite"
                begin="1.0s"
              />
            </circle>
            <circle r="2.8" fill="#FFFFFF">
              <animateMotion
                path="M 415 365 C 375 365, 400 248, 368 248"
                dur="3.0s"
                repeatCount="indefinite"
                begin="1.6s"
              />
            </circle>
          </g>

          {/* 7. Connection Node Dots at Edge of Cards */}
          <g>
            {/* Left nodes */}
            <circle cx="225" cy="75" r="5" fill="#7650E8" fillOpacity="0.25" />
            <circle cx="225" cy="75" r="3" fill="#7650E8" />
            <circle cx="225" cy="220" r="5" fill="#7650E8" fillOpacity="0.25" />
            <circle cx="225" cy="220" r="3" fill="#7650E8" />
            <circle cx="225" cy="365" r="5" fill="#7650E8" fillOpacity="0.25" />
            <circle cx="225" cy="365" r="3" fill="#7650E8" />

            {/* Right nodes */}
            <circle cx="415" cy="75" r="5" fill="#7650E8" fillOpacity="0.25" />
            <circle cx="415" cy="75" r="3" fill="#7650E8" />
            <circle cx="415" cy="220" r="5" fill="#7650E8" fillOpacity="0.25" />
            <circle cx="415" cy="220" r="3" fill="#7650E8" />
            <circle cx="415" cy="365" r="5" fill="#7650E8" fillOpacity="0.25" />
            <circle cx="415" cy="365" r="3" fill="#7650E8" />
          </g>

          {/* 8. Floating 3D Glossy Violet Spheres (Matches Reference Image) */}
          <g>
            {/* Sphere 1: Floating top center */}
            <circle
              cx="326"
              cy="48"
              r="18"
              fill="url(#sphere-gradient)"
              filter="url(#sphere-shadow)"
              className="animate-stage-orb-top"
            />

            {/* Sphere 2: Floating bottom right */}
            <circle
              cx="578"
              cy="388"
              r="22"
              fill="url(#sphere-gradient)"
              filter="url(#sphere-shadow)"
              className="animate-stage-orb-bottom"
            />
          </g>
        </svg>

        {/* ==================== LEFT COLUMN CARDS ==================== */}
        <div
          className="absolute flex flex-col justify-between"
          style={{
            left: '2.34%',
            width: '32.81%',
            top: '9.09%',
            bottom: '9.09%',
          }}
        >
          {LEFT_CARDS.map((card) => (
            <div
              key={card.id}
              style={{ animationDelay: card.delay }}
              className="animate-stage-float group flex items-center gap-3 px-3.5 py-2.5 lg:px-4 lg:py-3 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#EBE4F8] shadow-[0_6px_20px_-4px_rgba(118,80,232,0.08),0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_-6px_rgba(118,80,232,0.2)] hover:border-[#7650E8]/40 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-[#F5F0FF] to-[#ECE3FE] border border-[#DDD0F8] flex items-center justify-center flex-shrink-0 text-[#7650E8] shadow-inner group-hover:scale-105 transition-transform">
                {card.icon}
              </div>
              <div className="text-[11.5px] lg:text-[12.5px] font-semibold text-[#181622] leading-[1.3] tracking-tight">
                <div>{card.line1}</div>
                <div className="text-[#363345] font-medium">{card.line2}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== CENTRAL 3D GLOWING AI CHIP ==================== */}
        <div
          className="absolute flex items-center justify-center pointer-events-auto"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative group cursor-pointer select-none">
            {/* Ambient Breathing Neon Halo */}
            <div className="absolute -inset-3 rounded-3xl bg-[#7650E8]/35 blur-xl animate-pulse" />

            {/* Outer Translucent Glass Bezel with Chamfer */}
            <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-[22px] lg:rounded-[26px] p-1.5 lg:p-2 bg-gradient-to-br from-white/70 via-[#9D7BF8]/25 to-[#6E42E5]/35 backdrop-blur-md border border-white/70 shadow-[0_12px_36px_rgba(118,80,232,0.4),inset_0_1.5px_2px_rgba(255,255,255,0.9)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              {/* Inner Glowing Chip Core */}
              <div className="relative w-full h-full rounded-[16px] lg:rounded-[20px] bg-gradient-to-br from-[#7D53F7] via-[#5F2EE6] to-[#3E11BA] shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),inset_0_-3px_6px_rgba(0,0,0,0.35)] flex items-center justify-center overflow-hidden">
                {/* 3D Glass Diagonal Glare Reflection */}
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/30 to-transparent rotate-45 pointer-events-none" />

                {/* Central AI Typography */}
                <span className="relative z-10 text-2xl lg:text-[28px] font-black text-white tracking-wider drop-shadow-[0_2px_5px_rgba(0,0,0,0.3)]">
                  AI
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== RIGHT COLUMN CARDS ==================== */}
        <div
          className="absolute flex flex-col justify-between"
          style={{
            left: '64.84%',
            width: '32.81%',
            top: '9.09%',
            bottom: '9.09%',
          }}
        >
          {RIGHT_CARDS.map((card) => (
            <div
              key={card.id}
              style={{ animationDelay: card.delay }}
              className="animate-stage-float group flex items-center gap-3 px-3.5 py-2.5 lg:px-4 lg:py-3 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#EBE4F8] shadow-[0_6px_20px_-4px_rgba(118,80,232,0.08),0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_-6px_rgba(118,80,232,0.2)] hover:border-[#7650E8]/40 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br from-[#F5F0FF] to-[#ECE3FE] border border-[#DDD0F8] flex items-center justify-center flex-shrink-0 text-[#7650E8] shadow-inner group-hover:scale-105 transition-transform">
                {card.icon}
              </div>
              <div className="text-[11.5px] lg:text-[12.5px] font-semibold text-[#181622] leading-[1.3] tracking-tight">
                <div>{card.line1}</div>
                <div className="text-[#363345] font-medium">{card.line2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 
        ========================================================================
        MOBILE NEURAL STAGE (< 640px)
        Clean, vertically stacked responsive presentation for mobile devices
        ========================================================================
      */}
      <div className="sm:hidden flex flex-col items-center gap-6 py-4">
        {/* Mobile AI Centerpiece */}
        <div className="relative flex items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute inset-0 rounded-full bg-[#7650E8]/25 blur-2xl animate-pulse" />

          {/* Radar Ring */}
          <div className="absolute w-36 h-36 rounded-full border border-dashed border-[#7650E8]/30 pointer-events-none" />

          {/* AI Chip */}
          <div className="relative w-20 h-20 rounded-2xl p-1.5 bg-gradient-to-br from-white/70 via-[#9D7BF8]/25 to-[#6E42E5]/35 backdrop-blur-md border border-white/70 shadow-[0_10px_28px_rgba(118,80,232,0.35)] flex items-center justify-center">
            <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-[#7D53F7] via-[#5F2EE6] to-[#3E11BA] shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] flex items-center justify-center">
              <span className="text-2xl font-black text-white tracking-wider">
                AI
              </span>
            </div>
          </div>
        </div>

        {/* 6 Connected Mobile Cards */}
        <div className="grid grid-cols-1 gap-2.5 w-full">
          {[...LEFT_CARDS, ...RIGHT_CARDS].map((card) => (
            <div
              key={card.id}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/95 border border-[#EBE4F8] shadow-sm"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#F5F0FF] to-[#ECE3FE] border border-[#DDD0F8] flex items-center justify-center flex-shrink-0 text-[#7650E8]">
                {card.icon}
              </div>
              <div className="text-[12px] font-semibold text-[#181622] leading-tight">
                <div>{card.line1}</div>
                <div className="text-[#363345] font-medium">{card.line2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Animations for Floating Cards & Ambient Spheres */}
      <style>{`
        @keyframes stage-float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        @keyframes orb-float-top {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(-3px, -5px) scale(1.03);
          }
        }
        @keyframes orb-float-bottom {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(4px, -6px) scale(1.04);
          }
        }

        .animate-stage-float {
          animation: stage-float 6s ease-in-out infinite;
        }
        .animate-stage-orb-top {
          animation: orb-float-top 7s ease-in-out infinite;
        }
        .animate-stage-orb-bottom {
          animation: orb-float-bottom 8.5s ease-in-out infinite;
        }

        @media (hover: hover) {
          .animate-stage-float:hover {
            animation-play-state: paused;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-stage-float,
          .animate-stage-orb-top,
          .animate-stage-orb-bottom {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};
