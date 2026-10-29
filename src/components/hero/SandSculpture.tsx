import React, { useEffect, useRef, useState } from 'react';
import { LiquidEngine } from '../ui/liquid-sculpture-hero';

export const SandSculpture: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [glReady, setGlReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let destroyed = false;
    let engine: LiquidEngine | null = null;

    // Dynamically create a fresh canvas on mount.
    // A released WebGL2 context (e.g. from React StrictMode cleanup) cannot be reused on the same element.
    const canvas = document.createElement('canvas');
    canvas.className = 'absolute inset-0 w-full h-full block pointer-events-auto transition-opacity duration-500';
    canvas.style.opacity = '0';
    container.appendChild(canvas);

    const onFail = (err?: unknown) => {
      console.warn('WebGL2 LiquidEngine fallback active:', err);
      if (!destroyed) setGlReady(false);
    };

    try {
      engine = new LiquidEngine(
        canvas,
        {
          interactive: true,
          strength: 1.3,
          radius: 200,
          density: 1.0,
          dotSize: 1.25,
          spread: 1.15,
          turbulence: 1.1,
          liquid: 1.3,
          streaks: true,
          restStyle: 'image',
          returnSpeed: 1.1,
          ambient: true,
          ambientIntensity: 0.85,
          speed: 1.0,
          intro: true,
          reducedMotion: false,
          bg: [0.961, 0.949, 0.992], // #F5F2FD — matching hero background
          imgBg: null, // Transparent WebP/PNG detected automatically via alpha
        },
        onFail
      );
    } catch (e) {
      onFail(e);
      canvas.remove();
      return;
    }

    let aspect = 2.5;

    const relayout = () => {
      if (!container || !engine || destroyed) return;
      const b = container.getBoundingClientRect();
      const cssW = Math.max(1, Math.round(b.width));
      const cssH = Math.max(1, Math.round(b.height));

      const rw = Math.round(cssW * 0.92);
      const rh = Math.round(rw / aspect);
      const rect = {
        x: Math.round((cssW - rw) / 2),
        y: Math.round((cssH - rh) / 2),
        w: rw,
        h: rh,
      };

      engine.resize(cssW, cssH, rect);
    };

    const img = new Image();
    img.src = '/images/sculpture/sculpture-transparent.webp';
    img.onload = () => {
      if (destroyed) return;
      aspect = img.naturalWidth / img.naturalHeight || 2.5;
      relayout();
      if (engine) {
        try {
          engine.onFirstFrame = () => {
            if (!destroyed) {
              setGlReady(true);
              canvas.style.opacity = '1';
            }
          };
          engine.setImage(img);
        } catch (err) {
          onFail(err);
        }
      }
    };
    img.onerror = (e) => {
      onFail(e);
    };

    const onMove = (e: PointerEvent) => {
      if (!engine || !container || destroyed) return;
      const b = container.getBoundingClientRect();
      engine.pointer('move', e.clientX - b.left, e.clientY - b.top, e.pointerType === 'touch');
    };

    const onDown = (e: PointerEvent) => {
      if (!engine || !container || destroyed) return;
      const b = container.getBoundingClientRect();
      engine.pointer('down', e.clientX - b.left, e.clientY - b.top, e.pointerType === 'touch');
    };

    const onUp = (e: PointerEvent) => {
      if (!engine || !container || destroyed) return;
      const b = container.getBoundingClientRect();
      engine.pointer('up', e.clientX - b.left, e.clientY - b.top, e.pointerType === 'touch');
    };

    const onLeave = (e: PointerEvent) => {
      if (!engine || !container || destroyed) return;
      const b = container.getBoundingClientRect();
      engine.pointer('leave', e.clientX - b.left, e.clientY - b.top, e.pointerType === 'touch');
    };

    // Attach pointer listeners to both the inner container and the broader hero area
    container.addEventListener('pointermove', onMove, { passive: true });
    container.addEventListener('pointerdown', onDown, { passive: true });
    container.addEventListener('pointerup', onUp, { passive: true });
    container.addEventListener('pointerleave', onLeave, { passive: true });

    // Also track pointermove in the parent container for seamless hero interactivity
    const parent = container.parentElement;
    if (parent) {
      parent.addEventListener('pointermove', onMove, { passive: true });
      parent.addEventListener('pointerdown', onDown, { passive: true });
    }

    const ro = new ResizeObserver(() => relayout());
    ro.observe(container);

    return () => {
      destroyed = true;
      ro.disconnect();
      container.removeEventListener('pointermove', onMove);
      container.removeEventListener('pointerdown', onDown);
      container.removeEventListener('pointerup', onUp);
      container.removeEventListener('pointerleave', onLeave);
      if (parent) {
        parent.removeEventListener('pointermove', onMove);
        parent.removeEventListener('pointerdown', onDown);
      }
      engine?.destroy();
      canvas.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none ${className}`}
    >
      {/* High-res authentic sculpture artwork (transparent fallback) */}
      <img
        src="/images/sculpture/sculpture-transparent.webp"
        alt="Brombeer AI Fluid Sculpture"
        draggable={false}
        className={`w-[92%] h-auto max-h-[92%] object-contain select-none pointer-events-none drop-shadow-[0_12px_32px_rgba(104,83,165,0.12)] transition-opacity duration-500 ${
          glReady ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  );
};
