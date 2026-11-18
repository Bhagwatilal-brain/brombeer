import React from 'react';

interface CapabilitiesTickerProps {
  fadeColor?: string;
  className?: string;
}

interface TickerItem {
  id: string;
  name: string;
  icon: React.ReactNode;
}

// 8 Bespoke capabilities with increased icon size matching the reference aesthetic
const TICKER_ITEMS: TickerItem[] = [
  {
    id: 'predictive-analytics',
    name: 'Predictive Analytics',
    icon: (
      // Orbital Data Sphere with Planetary Ring (matching Orvexation in reference)
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 stroke-current fill-none transition-transform duration-200 group-hover:scale-110"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="6.5" />
        <path d="M3.5 13.5c2.2 3.8 9.5 5.2 16.5-2" />
        <path d="M4 10.5c3.5-3.5 12.5-3.5 16 3" strokeDasharray="1.5 2.5" />
      </svg>
    ),
  },
  {
    id: 'document-intelligence',
    name: 'Document Intelligence',
    icon: (
      // Smart Verified Document with Scan Beam
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 stroke-current fill-none transition-transform duration-200 group-hover:scale-110"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
        <circle cx="9" cy="9.5" r="0.8" className="fill-current" />
      </svg>
    ),
  },
  {
    id: 'generative-ai',
    name: 'Generative AI',
    icon: (
      // Multi-Point Crystalline Neural Star
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 stroke-current fill-none transition-transform duration-200 group-hover:scale-110"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.5l2.6 6.4 6.9 1.6-5.2 4.6 1.6 6.9-5.9-3.5-5.9 3.5 1.6-6.9-5.2-4.6 6.9-1.6z" />
      </svg>
    ),
  },
  {
    id: 'intelligent-automation',
    name: 'Intelligent Automation',
    icon: (
      // Overlapping Curved Loop Links (matching Zyphronix in reference)
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 stroke-current fill-none transition-transform duration-200 group-hover:scale-110"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="11" height="11" rx="3.5" />
        <rect x="10" y="9" width="11" height="11" rx="3.5" />
      </svg>
    ),
  },
  {
    id: 'computer-vision',
    name: 'Computer Vision',
    icon: (
      // Viewfinder Reticle Aperture
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 stroke-current fill-none transition-transform duration-200 group-hover:scale-110"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <circle cx="12" cy="12" r="3.5" />
        <circle cx="12" cy="12" r="1" className="fill-current" />
      </svg>
    ),
  },
  {
    id: 'autonomous-agents',
    name: 'Autonomous AI Agents',
    icon: (
      // Isometric 3D Wireframe Cube (matching Xentario in reference)
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 stroke-current fill-none transition-transform duration-200 group-hover:scale-110"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.5l8 4.6v9.8l-8 4.6-8-4.6V7.1z" />
        <path d="M12 2.5v9.8" />
        <path d="M12 12.3L20 7.1" />
        <path d="M12 12.3L4 7.1" />
        <circle cx="12" cy="12.3" r="1.5" className="fill-current" />
      </svg>
    ),
  },
  {
    id: 'sovereign-enclaves',
    name: 'Sovereign Enclaves',
    icon: (
      // Microchip with corner pins and diagonal core slash (matching Dovaryn in reference)
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 stroke-current fill-none transition-transform duration-200 group-hover:scale-110"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="5" width="14" height="14" rx="3.5" />
        <path d="M9 15l6-6" />
        <line x1="9" y1="1.5" x2="9" y2="5" />
        <line x1="15" y1="1.5" x2="15" y2="5" />
        <line x1="9" y1="19" x2="9" y2="22.5" />
        <line x1="15" y1="19" x2="15" y2="22.5" />
        <line x1="1.5" y1="9" x2="5" y2="9" />
        <line x1="1.5" y1="15" x2="5" y2="15" />
        <line x1="19" y1="9" x2="22.5" y2="9" />
        <line x1="19" y1="15" x2="22.5" y2="15" />
      </svg>
    ),
  },
  {
    id: 'neural-search',
    name: 'Neural Search & Retrieval',
    icon: (
      // Terminal screen with radar broadcast wave (matching QuantroX in reference)
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 stroke-current fill-none transition-transform duration-200 group-hover:scale-110"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="13" rx="3.5" />
        <path d="M7 13a3.5 3.5 0 0 1 3.5-3.5" />
        <path d="M7 9.5a7 7 0 0 1 7-7" />
        <circle cx="7" cy="13" r="0.8" className="fill-current" />
        <line x1="8" y1="20.5" x2="16" y2="20.5" />
        <line x1="12" y1="17" x2="12" y2="20.5" />
      </svg>
    ),
  },
];

export const CapabilitiesTicker: React.FC<CapabilitiesTickerProps> = ({
  fadeColor = 'from-white/80',
  className = '',
}) => {
  // Duplicate array multiple times to guarantee an unbroken, ultra-smooth infinite loop
  const tickerItems = [
    ...TICKER_ITEMS,
    ...TICKER_ITEMS,
    ...TICKER_ITEMS,
    ...TICKER_ITEMS,
  ];

  return (
    <div className={`w-full py-1.5 relative overflow-hidden select-none ${className}`}>
      {/* Soft gradient edge fade mask for seamless entrance/exit */}
      <div
        className={`absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r ${fadeColor} to-transparent z-10 pointer-events-none`}
      />
      <div
        className={`absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l ${fadeColor} to-transparent z-10 pointer-events-none`}
      />

      {/* Running Headline Ticker Track */}
      <div
        className="animate-ticker flex items-center"
        style={{ '--ticker-duration': '44s' } as React.CSSProperties}
      >
        {tickerItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex items-center flex-shrink-0 group cursor-default px-7 sm:px-10 transition-opacity duration-200"
          >
            <div className="flex items-center gap-3 sm:gap-3.5">
              {/* Stroke Icon (Prominent 28-32px size, theme violet, scale on hover) */}
              <span className="text-violet-primary/90 group-hover:text-violet-primary group-hover:scale-110 transition-all duration-200 flex items-center justify-center">
                {item.icon}
              </span>

              {/* Capability Text Label (Theme dark text, transitions to violet on hover) */}
              <span className="font-sans text-sm sm:text-[15px] font-semibold tracking-wide text-[#111014]/90 group-hover:text-violet-primary transition-colors duration-200 whitespace-nowrap">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
