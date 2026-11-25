import React, { useState, useEffect, useRef } from 'react';
import { DesktopNavigation } from '../navigation/DesktopNavigation';
import { MobileNavigation } from '../navigation/MobileNavigation';

interface HeaderProps {
  currentPath?: string;
}

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));

// Smooth cubic ease-in-out curve for scroll mapping
const smoothstep = (t: number) => t * t * (3 - 2 * t);

export const Header: React.FC<HeaderProps> = ({ currentPath = '/' }) => {
  const [isCompact, setIsCompact] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let currentP = 0;
    let targetP = 0;
    let currentFooterP = 0;
    let targetFooterP = 0;
    let lastTime = 0;
    let rafId = 0;
    let compactFlag = false;

    const computeTargets = () => {
      const scrollY = window.scrollY;
      // Smoothly transition from 0 -> 1 over the first 190px of scroll
      const rawTopP = clamp01(scrollY / 190);
      const topP = smoothstep(rawTopP);

      let footerRelease = 0;
      const footerEl = document.querySelector('[data-site-footer]');
      if (footerEl && topP > 0.001) {
        const rect = footerEl.getBoundingClientRect();
        const distFromBottom =
          document.documentElement.scrollHeight - (scrollY + window.innerHeight);

        const byTop = smoothstep(clamp01((340 - rect.top) / 240));
        const byBottom =
          rect.top < window.innerHeight
            ? smoothstep(clamp01((320 - distFromBottom) / 270))
            : 0;

        footerRelease = Math.max(byTop, byBottom);
      }

      targetFooterP = topP * footerRelease;
      targetP = topP * (1 - footerRelease);
    };

    const applyStyles = (p: number, fp: number) => {
      const header = headerRef.current;
      const pill = pillRef.current;
      if (!header || !pill) return;

      const vw = window.innerWidth;
      const isLg = vw >= 1024;
      const isMd = vw >= 768;

      const expandedW = Math.min(1380, vw);
      const compactW = isLg
        ? Math.min(900, vw - 48)
        : isMd
          ? Math.min(820, vw - 48)
          : vw - 32;
      const width = expandedW + (compactW - expandedW) * p;

      const basePadX = isLg ? 32 : isMd ? 24 : 16;
      const compactPadL = isLg ? 24 : isMd ? 20 : 18;
      const compactPadR = isLg ? 12 : isMd ? 10 : 14;
      const padL = basePadX + (compactPadL - basePadX) * p;
      const padR = basePadX + (compactPadR - basePadX) * p;
      const padY = 8 - 2 * p; // 8px -> 6px

      // Expose normalized progress to child components (zero React re-renders!)
      header.style.setProperty('--nav-p', p.toFixed(4));
      header.style.setProperty('--footer-p', fp.toFixed(4));

      // Seamless full-width crisp white strip when expanded at footer
      header.style.backgroundColor = `rgba(255, 255, 255, ${(fp * 0.96).toFixed(4)})`;
      header.style.backdropFilter = fp > 0.01 ? `blur(${(fp * 18).toFixed(1)}px)` : 'none';
      header.style.borderBottomColor = `rgba(104, 83, 165, ${(fp * 0.1).toFixed(4)})`;
      header.style.boxShadow =
        fp > 0.01
          ? `0 4px 24px -8px rgba(30, 17, 66, ${(fp * 0.08).toFixed(4)})`
          : 'none';

      // Continuous pill geometry & glass elevation
      pill.style.maxWidth = `${width.toFixed(2)}px`;
      pill.style.paddingLeft = `${padL.toFixed(2)}px`;
      pill.style.paddingRight = `${padR.toFixed(2)}px`;
      pill.style.paddingTop = `${padY.toFixed(2)}px`;
      pill.style.paddingBottom = `${padY.toFixed(2)}px`;
      pill.style.borderRadius = `${(p * 36).toFixed(2)}px`;
      pill.style.transform = `translate3d(0, ${(p * 10).toFixed(2)}px, 0)`;
      pill.style.backgroundColor = `rgba(255, 255, 255, ${(p * 0.95).toFixed(4)})`;
      pill.style.backdropFilter = p > 0.01 ? `blur(${(p * 20).toFixed(1)}px)` : 'none';
      pill.style.borderColor = `rgba(104, 83, 165, ${(p * 0.16).toFixed(4)})`;
      pill.style.boxShadow =
        p > 0.01
          ? `0 ${(p * 12).toFixed(2)}px ${(p * 36).toFixed(2)}px -8px rgba(30, 17, 66, ${(p * 0.14).toFixed(4)}), 0 2px ${(p * 10).toFixed(2)}px rgba(118, 80, 232, ${(p * 0.08).toFixed(4)})`
          : 'none';

      const nextCompactFlag = p > 0.5;
      if (nextCompactFlag !== compactFlag) {
        compactFlag = nextCompactFlag;
        setIsCompact(nextCompactFlag);
      }
    };

    const tick = (now: number) => {
      rafId = 0;
      const dt = lastTime ? Math.min(0.05, (now - lastTime) / 1000) : 1 / 60;
      lastTime = now;

      if (prefersReducedMotion) {
        currentP = targetP;
        currentFooterP = targetFooterP;
      } else {
        // Frame-rate independent exponential damping — liquid butter inertia
        const alpha = 1 - Math.exp(-8.5 * dt);
        currentP += (targetP - currentP) * alpha;
        currentFooterP += (targetFooterP - currentFooterP) * alpha;
      }

      const settled =
        Math.abs(targetP - currentP) < 0.0008 &&
        Math.abs(targetFooterP - currentFooterP) < 0.0008;

      if (settled) {
        currentP = targetP;
        currentFooterP = targetFooterP;
        applyStyles(currentP, currentFooterP);
        lastTime = 0;
        return;
      }

      applyStyles(currentP, currentFooterP);
      rafId = window.requestAnimationFrame(tick);
    };

    const schedule = () => {
      computeTargets();
      if (!rafId) {
        lastTime = 0;
        rafId = window.requestAnimationFrame(tick);
      }
    };

    // Apply immediate initial position without starting animation from 0 on reload mid-page
    computeTargets();
    currentP = targetP;
    currentFooterP = targetFooterP;
    applyStyles(currentP, currentFooterP);

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [currentPath]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full h-[84px] flex items-center justify-center pointer-events-none border-b border-transparent"
    >
      <div
        ref={pillRef}
        className="pointer-events-auto w-full mx-auto border border-transparent will-change-[transform,max-width,border-radius]"
      >
        <DesktopNavigation currentPath={currentPath} scrolled={isCompact} />
        <MobileNavigation currentPath={currentPath} scrolled={isCompact} />
      </div>
    </header>
  );
};
