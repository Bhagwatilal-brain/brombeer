import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface GsapTextEffectProps {
  words: string;
  className?: string;
  highlightWords?: string[];
  delay?: number;
}

export const GsapTextEffect: React.FC<GsapTextEffectProps> = ({
  words,
  className,
  highlightWords = ['Forward.', 'Businesses'],
  delay = 0.2,
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const wrappersRef = useRef<(HTMLSpanElement | null)[]>([]);
  const sweepRef = useRef<gsap.core.Tween | null>(null);
  const prefersReduced = useReducedMotion();

  const wordsArray = words.split(' ');

  useEffect(() => {
    if (prefersReduced) return;

    const elements = wordsRef.current.filter(Boolean);
    const wrappers = wrappersRef.current.filter(Boolean);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay });

      // Step 1: Cinematic Slide-Up with Staggered Overflow Reveal
      tl.fromTo(
        elements,
        {
          y: '120%',
          opacity: 0,
          rotateX: -25,
          filter: 'blur(8px)',
        },
        {
          y: '0%',
          opacity: 1,
          rotateX: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          ease: 'power3.out',
          stagger: 0.08,
          onComplete: () => {
            // Unclip overflow once animation finishes so descenders/ascenders are never cut
            wrappers.forEach((w) => {
              if (w) w.style.overflow = 'visible';
            });
          },
        }
      );

      // Step 2: Iridescent Light Sweep passing across the headline
      tl.fromTo(
        elements,
        {
          backgroundPosition: '160% 0%',
        },
        {
          backgroundPosition: '-60% 0%',
          duration: 1.8,
          ease: 'power2.inOut',
          stagger: 0.04,
        },
        '-=0.4'
      );
    }, containerRef);

    return () => ctx.revert();
  }, [words, delay, prefersReduced]);

  const handleMouseEnter = () => {
    if (prefersReduced) return;
    const elements = wordsRef.current.filter(Boolean);
    if (!elements.length) return;

    sweepRef.current?.kill();
    sweepRef.current = gsap.fromTo(
      elements,
      { backgroundPosition: '160% 0%' },
      {
        backgroundPosition: '-60% 0%',
        duration: 1.4,
        ease: 'power2.inOut',
        stagger: 0.03,
      }
    );
  };

  return (
    <h1
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={cn(
        'font-outfit font-extrabold tracking-[-0.025em] leading-[1.14] text-text-primary select-none cursor-default',
        className
      )}
      aria-label={words}
    >
      {wordsArray.map((word, index) => {
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === word.toLowerCase()
        );

        return (
          <span
            key={`${word}-${index}`}
            ref={(el) => {
              wrappersRef.current[index] = el;
            }}
            className="inline-block overflow-hidden py-3 px-1.5 -my-3 -mx-1.5 align-baseline mr-[0.24em] last:mr-0"
          >
            <span
              ref={(el) => {
                wordsRef.current[index] = el;
              }}
              className={cn(
                'inline-block will-change-transform will-change-[filter] pt-1 pb-3 px-1',
                isHighlighted
                  ? 'bg-gradient-to-r from-violet-deep via-violet-primary to-[#9E7EFF] bg-clip-text text-transparent drop-shadow-sm'
                  : 'bg-[linear-gradient(110deg,#15131C_0%,#15131C_35%,#7650E8_50%,#C8B8FA_55%,#15131C_70%,#15131C_100%)] bg-[length:260%_100%] bg-clip-text text-transparent'
              )}
              style={
                prefersReduced
                  ? undefined
                  : {
                      backgroundPosition: '160% 0%',
                    }
              }
            >
              {word}
            </span>
          </span>
        );
      })}
    </h1>
  );
};
