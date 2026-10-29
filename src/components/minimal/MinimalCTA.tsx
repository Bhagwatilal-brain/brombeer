import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Button } from '../ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { LiquidEffect } from '../animations/LiquidEffect';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const MinimalCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const accentRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const primaryWords = ["Let's", 'build', 'something'];
  const accentWords = ['meaningful', 'together.'];

  useEffect(() => {
    if (prefersReduced) return;

    const container = containerRef.current;
    if (!container) return;

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // 1. Eyebrow Reveal
            if (eyebrowRef.current) {
              tl.fromTo(
                eyebrowRef.current,
                { opacity: 0, y: 18, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power3.out' }
              );
            }

            // 2. Headline Words Overflow Slide-Up
            const validWords = wordsRef.current.filter(Boolean);
            if (validWords.length) {
              tl.fromTo(
                validWords,
                {
                  y: '125%',
                  opacity: 0,
                  rotateX: -30,
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
                },
                '-=0.3'
              );
            }

            // 3. Iridescent Light Sweep across accent phrase
            if (accentRef.current) {
              tl.fromTo(
                accentRef.current,
                { backgroundPosition: '160% 0%' },
                {
                  backgroundPosition: '-60% 0%',
                  duration: 1.6,
                  ease: 'power2.inOut',
                },
                '-=0.4'
              );
            }

            // 4. Description and Button Entrance
            if (descRef.current) {
              tl.fromTo(
                descRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
                '-=0.6'
              );
            }

            if (buttonRef.current) {
              tl.fromTo(
                buttonRef.current,
                { opacity: 0, y: 20, scale: 0.92 },
                { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: 'back.out(1.5)' },
                '-=0.5'
              );
            }
          }, container);

          observer.unobserve(container);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [prefersReduced]);

  const handleHeadlineHover = () => {
    if (prefersReduced || !accentRef.current) return;
    gsap.fromTo(
      accentRef.current,
      { backgroundPosition: '160% 0%' },
      {
        backgroundPosition: '-60% 0%',
        duration: 1.3,
        ease: 'power2.inOut',
      }
    );
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-background select-none">
      <div
        ref={containerRef}
        className="max-w-[1380px] mx-auto rounded-[2.5rem] md:rounded-[3.5rem] bg-gradient-to-b from-[#F5F2FD] via-[#ECE7FA] to-[#F2EEFC] border border-white/95 p-10 sm:p-16 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-violet-primary/10"
      >
        {/* Soft 21st.dev Liquid Waves Shader */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <LiquidEffect
            blur={18}
            waveOpacity={0.25}
            waveWidth={35}
            colors={['#7650E8', '#C8B8FA', '#9E7EFF', '#FFFFFF']}
            containerClassName="w-full h-full"
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          {/* Eyebrow */}
          <div>
            <span
              ref={eyebrowRef}
              className="eyebrow inline-flex items-center gap-2 text-xs tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-white/70 border border-white/90 shadow-sm backdrop-blur-md"
              style={prefersReduced ? undefined : { opacity: 0 }}
            >
              <Sparkles className="w-3.5 h-3.5 text-violet-primary animate-pulse" />
              <span>BEGIN THE CONVERSATION</span>
            </span>
          </div>

          {/* Headline with GSAP Cinematic Slide-Up */}
          <h2
            onMouseEnter={handleHeadlineHover}
            className="font-outfit font-extrabold text-4xl sm:text-6xl md:text-7xl text-text-primary tracking-[-0.035em] leading-[1.05] cursor-default"
          >
            {/* Primary line: "Let's build something" */}
            <span className="block">
              {primaryWords.map((word, idx) => (
                <span
                  key={`prim-${word}-${idx}`}
                  className="inline-block overflow-hidden py-1 align-top mr-[0.24em] last:mr-0"
                >
                  <span
                    ref={(el) => {
                      wordsRef.current[idx] = el;
                    }}
                    className="inline-block will-change-transform will-change-[filter]"
                    style={prefersReduced ? undefined : { opacity: 0 }}
                  >
                    {word}
                  </span>
                </span>
              ))}
            </span>

            {/* Accent line: "meaningful together." with Iridescent Sheen */}
            <span
              ref={accentRef}
              className="inline-block italic bg-[linear-gradient(110deg,#4B2DA8_0%,#7650E8_30%,#C8B8FA_50%,#9E7EFF_65%,#4B2DA8_85%,#4B2DA8_100%)] bg-[length:260%_100%] bg-clip-text text-transparent py-1 align-top"
              style={
                prefersReduced
                  ? undefined
                  : {
                      backgroundPosition: '160% 0%',
                    }
              }
            >
              {accentWords.map((word, idx) => {
                const totalIndex = primaryWords.length + idx;
                return (
                  <span
                    key={`acc-${word}-${idx}`}
                    className="inline-block overflow-hidden py-1 align-top mr-[0.24em] last:mr-0"
                  >
                    <span
                      ref={(el) => {
                        wordsRef.current[totalIndex] = el;
                      }}
                      className="inline-block will-change-transform will-change-[filter]"
                      style={prefersReduced ? undefined : { opacity: 0 }}
                    >
                      {word}
                    </span>
                  </span>
                );
              })}
            </span>
          </h2>

          {/* Supporting Copy */}
          <p
            ref={descRef}
            className="text-text-secondary/85 text-base sm:text-lg font-normal leading-relaxed max-w-lg mx-auto"
            style={prefersReduced ? undefined : { opacity: 0 }}
          >
            Start with a conversation. Explore what is possible when intelligence meets purpose.
          </p>

          {/* CTA Button */}
          <div
            ref={buttonRef}
            className="pt-2 flex justify-center"
            style={prefersReduced ? undefined : { opacity: 0 }}
          >
            <Button
              asLink
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              className="shadow-xl shadow-violet-primary/25 hover:shadow-violet-primary/40 hover:scale-105 transition-all text-base px-8 py-4 font-semibold"
            >
              Discuss an AI Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};