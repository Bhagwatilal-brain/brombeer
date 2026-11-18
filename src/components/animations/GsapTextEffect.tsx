import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface GsapTextEffectProps {
  words?: string;
  lines?: string[];
  className?: string;
  highlightWords?: string[];
  delay?: number;
}

export const GsapTextEffect: React.FC<GsapTextEffectProps> = ({
  words,
  lines,
  className,
  highlightWords = ['Forward.', 'Businesses', 'Moves'],
  delay = 0.2,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const sweepRef = useRef<gsap.core.Tween | null>(null);
  const prefersReduced = useReducedMotion();

  // Support either explicit lines array, newline-delimited string, or regular string
  const rawLines =
    lines && lines.length > 0
      ? lines
      : words
      ? words.split('\n')
      : ['Intelligence That', 'Moves Businesses', 'Forward.'];

  const parsedLines = rawLines.map((line) => line.trim().split(/\s+/).filter(Boolean));
  const fullText = rawLines.join(' ');

  useEffect(() => {
    if (prefersReduced) return;

    const elements = wordsRef.current.filter(Boolean);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      // Step 1: Smooth 3D slide-up entrance on page load (without any automatic color sweep)
      gsap.fromTo(
        elements,
        {
          y: 28,
          opacity: 0,
          rotateX: -15,
          filter: 'blur(5px)',
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          delay,
          ease: 'power3.out',
          stagger: 0.06,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [lines, words, delay, prefersReduced]);

  // Gentle, subtle sheen animation triggers ONLY on hover
  const handleMouseEnter = () => {
    if (prefersReduced) return;
    const highlighted = wordsRef.current.filter(
      (el) => el?.dataset.highlighted === 'true'
    );
    if (!highlighted.length) return;

    sweepRef.current?.kill();
    sweepRef.current = gsap.fromTo(
      highlighted,
      { backgroundPosition: '100% 0%' },
      {
        backgroundPosition: '-100% 0%',
        duration: 1.4,
        ease: 'power2.inOut',
        stagger: 0.05,
        onComplete: () => {
          gsap.set(highlighted, { backgroundPosition: '100% 0%' });
        },
      }
    );
  };

  let globalWordIndex = 0;

  return (
    <h1
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={cn(
        'font-sans font-extrabold tracking-[-0.03em] leading-[1.02] text-text-primary select-none cursor-default',
        className
      )}
      aria-label={fullText}
    >
      {parsedLines.map((lineWords, lineIndex) => (
        <span
          key={`line-${lineIndex}`}
          className="block leading-[1.02] overflow-visible"
        >
          {lineWords.map((word) => {
            const currentIndex = globalWordIndex++;
            const isHighlighted = highlightWords.some(
              (hw) => hw.toLowerCase() === word.toLowerCase()
            );

            return (
              <span
                key={`${word}-${currentIndex}`}
                className="inline-block mr-[0.24em] last:mr-0 overflow-visible align-baseline"
              >
                <span
                  ref={(el) => {
                    wordsRef.current[currentIndex] = el;
                  }}
                  data-highlighted={isHighlighted ? 'true' : 'false'}
                  className={cn(
                    'inline-block will-change-transform will-change-[filter]',
                    isHighlighted
                      ? 'text-transparent bg-clip-text drop-shadow-sm pb-[0.06em]'
                      : 'text-text-primary'
                  )}
                  style={
                    isHighlighted
                      ? {
                          backgroundImage:
                            'linear-gradient(110deg, #7650E8 0%, #7650E8 35%, #8E6DF5 44%, #A282F8 50%, #8E6DF5 56%, #7650E8 65%, #7650E8 100%)',
                          backgroundSize: '280% 100%',
                          backgroundPosition: '100% 0%',
                        }
                      : undefined
                  }
                >
                  {word}
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
};
