import React, { useState, useRef, useLayoutEffect } from 'react';
import { NAV_LINKS } from '../../data/navigation';
import { NavigationLink } from './NavigationLink';
import { TextRoll } from '../ui/text-roll';
import { ArrowRight } from 'lucide-react';

import brmLogo from '../../assets/images/brombeer-logo-brand.png';

interface DesktopNavigationProps {
  currentPath?: string;
  scrolled?: boolean;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  currentPath = '/',
  scrolled = false,
}) => {
  const [ctaHovered, setCtaHovered] = useState(false);
  const labelMeasureRef = useRef<HTMLSpanElement>(null);
  const [labelWidth, setLabelWidth] = useState(118);

  useLayoutEffect(() => {
    const measure = () => {
      if (labelMeasureRef.current) {
        const w = Math.ceil(labelMeasureRef.current.scrollWidth);
        if (w > 40) setLabelWidth(w);
      }
    };
    measure();
    if (document.fonts?.ready) {
      document.fonts.ready.then(measure);
    }
  }, []);

  return (
    <div className="hidden md:flex items-center justify-between w-full">
      {/* Brand Logo — continuous scroll-driven GPU scale */}
      <a href="/" className="flex items-center group select-none py-0.5 shrink-0">
        <span
          className="inline-flex items-center origin-left will-change-transform"
          style={{
            transform: 'scale(calc(1 - var(--nav-p, 0) * 0.2))',
          }}
        >
          <img
            src={brmLogo}
            alt="Brombeer AI - Brombeer IT Systems"
            className="h-11 md:h-[46px] lg:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </span>
      </a>

      {/* Navigation Links — continuously tightening gap */}
      <nav
        className="flex items-center"
        style={{
          gap: 'calc(28px - var(--nav-p, 0) * 8px)',
        }}
      >
        {NAV_LINKS.map((link) => (
          <NavigationLink
            key={link.href}
            label={link.label}
            href={link.href}
            isActive={currentPath === link.href}
          />
        ))}
      </nav>

      {/* Header Primary CTA — continuously morphs from pill to 38x38 violet circle */}
      <div className="flex items-center shrink-0">
        <a
          href="/contact"
          aria-label="Discuss an AI Project"
          title="Discuss an AI Project"
          onMouseEnter={() => setCtaHovered(true)}
          onMouseLeave={() => setCtaHovered(false)}
          className={`group relative overflow-hidden isolate inline-flex items-center justify-center rounded-full border font-medium text-xs h-[38px] focus:outline-none focus:ring-2 focus:ring-violet-primary/40 focus:ring-offset-2 active:scale-[0.96] select-none cursor-pointer transition-[border-color,box-shadow,transform] duration-300 ${scrolled
            ? 'border-violet-primary hover:border-[#5E3AD6] shadow-[0_4px_14px_rgba(118,80,232,0.28)] hover:shadow-[0_6px_18px_rgba(118,80,232,0.4)]'
            : 'border-[#6853A5]/20 hover:border-violet-primary shadow-sm hover:shadow-md hover:shadow-violet-primary/10'
            }`}
          style={{
            width: `calc(38px + (1 - var(--nav-p, 0)) * ${labelWidth + 18}px)`,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
          }}
        >
          {/* Continuous violet fill layer that blooms smoothly as text finishes dissolving */}
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-violet-primary group-hover:bg-[#5E3AD6] transition-colors duration-300 pointer-events-none"
            style={{
              opacity: 'clamp(0, calc((var(--nav-p, 0) - 0.22) * 1.32), 1)',
            }}
          />

          {/* Label dissolves cleanly before the pill narrows past the words (no clipped letters) */}
          <span
            className="relative z-10 inline-flex items-center overflow-hidden whitespace-nowrap leading-none text-[#111014] group-hover:text-violet-primary transition-colors duration-300"
            style={{
              width: `calc((1 - var(--nav-p, 0)) * ${labelWidth}px)`,
              marginRight: 'calc((1 - var(--nav-p, 0)) * 6px)',
              opacity: 'clamp(0, calc(1 - var(--nav-p, 0) * 2.9), 1)',
            }}
          >
            <span ref={labelMeasureRef} className="inline-flex items-center whitespace-nowrap">
              <TextRoll isHovered={ctaHovered}>Discuss an AI Project</TextRoll>
            </span>
          </span>

          {/* Arrow stays centered and transitions smoothly from dark to white in sync with the violet bloom */}
          <span
            className="relative z-10 inline-flex items-center justify-center leading-none shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 [&>svg]:block"
            style={{
              color:
                ctaHovered && !scrolled
                  ? '#7650E8'
                  : 'rgb(calc(17 + clamp(0, (var(--nav-p, 0) - 0.22) * 1.32, 1) * 238), calc(16 + clamp(0, (var(--nav-p, 0) - 0.22) * 1.32, 1) * 239), calc(20 + clamp(0, (var(--nav-p, 0) - 0.22) * 1.32, 1) * 235))',
            }}
          >
            <ArrowRight className="w-4 h-4" />
          </span>
        </a>
      </div>
    </div>
  );
};
