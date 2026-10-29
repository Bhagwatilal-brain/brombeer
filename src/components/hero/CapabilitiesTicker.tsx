import React from 'react';
import { CAPABILITIES_TICKER } from '../../lib/constants';
import { Sparkles } from 'lucide-react';

export const CapabilitiesTicker: React.FC = () => {
  // Duplicate array multiple times to guarantee an unbroken infinite loop
  const tickerItems = [
    ...CAPABILITIES_TICKER,
    ...CAPABILITIES_TICKER,
    ...CAPABILITIES_TICKER,
    ...CAPABILITIES_TICKER,
  ];

  return (
    <div className="w-full py-2.5 sm:py-3.5 mt-2 relative overflow-hidden select-none">
      {/* Soft gradient edge fade mask for seamless entrance/exit */}
      <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Running Headline Ticker Track */}
      <div
        className="animate-ticker flex items-center"
        style={{ '--ticker-duration': '34s' } as React.CSSProperties}
      >
        {tickerItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center flex-shrink-0 group cursor-default"
          >
            <span className="font-sans text-xs sm:text-sm font-medium tracking-wide text-text-secondary/85 group-hover:text-violet-primary transition-colors duration-200 px-5 sm:px-7 whitespace-nowrap">
              {item}
            </span>

            {/* Glowing Accent Separator */}
            <span className="flex items-center justify-center text-violet-primary/30 group-hover:text-violet-primary/60 transition-colors">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-light/60 group-hover:bg-violet-primary/80 transition-colors inline-block" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};