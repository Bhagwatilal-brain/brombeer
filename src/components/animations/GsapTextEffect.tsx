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
      const tl = gsap.timeline({ delay });

      // Step 1: Smooth 3D slide-up entrance without overflow clipping
      tl.fromTo(
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
          ease: 'power3.out',
          stagger: 0.06,
        }
      );

      // Step 2: Iridescent Light Sweep passing across the highlighted gradient words
      const highlighted = elements.filter(
        (el) => el?.dataset.highlighted === 'true'
      );
      if (highlighted.length > 0) {
        tl.fromTo(
          highlighted,
          {
            backgroundPosition: '160% 0%',
          },
          {
            backgroundPosition: '-60% 0%',
            duration: 1.6,
            ease: 'power2.inOut',
            stagger: 0.05,
          },
          '-=0.3'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [lines, words, delay, prefersReduced]);

  const handleMouseEnter = () => {
    if (prefersReduced) return;
    const highlighted = wordsRef.current.filter(
      (el) => el?.dataset.highlighted === 'true'
    );
    if (!highlighted.length) return;

    sweepRef.current?.kill();
    sweepRef.current = gsap.fromTo(
      highlighted,
      { backgroundPosition: '160% 0%' },
      {
        backgroundPosition: '-60% 0%',
        duration: 1.4,
        ease: 'power2.inOut',
        stagger: 0.04,
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
                      ? 'bg-gradient-to-r from-violet-deep via-violet-primary to-[#9E7EFF] bg-[length:200%_100%] bg-clip-text text-transparent drop-shadow-sm pb-[0.06em]'
                      : 'text-text-primary'
                  )}
                  style={
                    isHighlighted && !prefersReduced
                      ? { backgroundPosition: '160% 0%' }
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
