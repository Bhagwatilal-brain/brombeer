import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Container } from '../layout/Container';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MetricItem {
  value: string;
  targetNum?: number;
  suffix?: string;
  label: string;
  desc: string;
}

const METRICS: MetricItem[] = [
  {
    value: '95%',
    targetNum: 95,
    suffix: '%',
    label: 'Factual Grounding',
    desc: 'Precise extraction from noisy documents',
  },
  {
    value: '38ms',
    targetNum: 38,
    suffix: 'ms',
    label: 'Thought Latency',
    desc: 'Real-time responsive intelligence',
  },
  {
    value: 'Zero',
    label: 'Data Leakage',
    desc: 'Absolute tenant & sovereign isolation',
  },
  {
    value: '100%',
    targetNum: 100,
    suffix: '%',
    label: 'Human Command',
    desc: 'Consequential decisions stay in your hands',
  },
];

export const EmotionalMetrics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const valueRefs = useRef<(HTMLDivElement | null)[]>([]);
  const labelRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) return;

    const section = sectionRef.current;
    if (!section) return;

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;

          const ctx = gsap.context(() => {
            METRICS.forEach((m, idx) => {
              const valEl = valueRefs.current[idx];
              const lblEl = labelRefs.current[idx];
              const dscEl = descRefs.current[idx];

              if (!valEl) return;

              const tl = gsap.timeline({
                delay: idx * 0.12,
              });

              // Slide-up with blur-to-focus entrance
              tl.fromTo(
                valEl,
                {
                  opacity: 0,
                  y: 40,
                  filter: 'blur(10px)',
                  scale: 0.9,
                },
                {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  scale: 1,
                  duration: 0.9,
                  ease: 'power3.out',
                }
              );

              // Numeric count-up if it's a numeric metric
              if (typeof m.targetNum === 'number') {
                const counter = { val: 0 };
                tl.to(
                  counter,
                  {
                    val: m.targetNum,
                    duration: 1.4,
                    ease: 'power2.out',
                    onUpdate: () => {
                      if (valEl) {
                        valEl.textContent = `${Math.round(counter.val)}${m.suffix || ''}`;
                      }
                    },
                  },
                  '-=0.7'
                );
              }

              // Subtle iridescent sweep across the metric value
              tl.fromTo(
                valEl,
                { backgroundPosition: '160% 0%' },
                {
                  backgroundPosition: '-60% 0%',
                  duration: 1.4,
                  ease: 'power2.inOut',
                },
                '-=0.8'
              );

              // Staggered reveal for label & description
              if (lblEl && dscEl) {
                tl.fromTo(
                  [lblEl, dscEl],
                  { opacity: 0, y: 16 },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: 'power2.out',
                  },
                  '-=0.8'
                );
              }
            });
          }, section);

          observer.unobserve(section);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [prefersReduced]);

  const handleCardMouseEnter = (index: number) => {
    if (prefersReduced) return;
    const valEl = valueRefs.current[index];
    if (!valEl) return;

    gsap.to(valEl, {
      scale: 1.07,
      y: -3,
      duration: 0.35,
      ease: 'power2.out',
    });

    gsap.fromTo(
      valEl,
      { backgroundPosition: '160% 0%' },
      {
        backgroundPosition: '-60% 0%',
        duration: 1.1,
        ease: 'power2.inOut',
      }
    );
  };

  const handleCardMouseLeave = (index: number) => {
    if (prefersReduced) return;
    const valEl = valueRefs.current[index];
    if (!valEl) return;

    gsap.to(valEl, {
      scale: 1,
      y: 0,
      duration: 0.45,
      ease: 'power3.out',
    });
  };

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-[#FAF9FF] relative overflow-hidden select-none">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center max-w-5xl mx-auto">
          {METRICS.map((m, idx) => (
            <div
              key={m.label}
              ref={(el) => {
                cardRefs.current[idx] = el;
              }}
              onMouseEnter={() => handleCardMouseEnter(idx)}
              onMouseLeave={() => handleCardMouseLeave(idx)}
              className="space-y-2.5 p-4 rounded-3xl transition-colors duration-300 hover:bg-white/60 cursor-default group"
            >
              {/* Animated GSAP Metric Value with Iridescent Sheen */}
              <div
                ref={(el) => {
                  valueRefs.current[idx] = el;
                }}
                className="font-outfit font-extrabold text-5xl sm:text-6xl text-transparent bg-clip-text bg-[linear-gradient(110deg,#28164D_0%,#28164D_35%,#7650E8_50%,#C8B8FA_56%,#7650E8_65%,#28164D_85%,#28164D_100%)] bg-[length:260%_100%] tracking-tight leading-none will-change-transform will-change-[filter] select-none"
                style={
                  prefersReduced
                    ? undefined
                    : {
                        backgroundPosition: '160% 0%',
                        opacity: 0,
                      }
                }
              >
                {m.value}
              </div>

              {/* Metric Label */}
              <h4
                ref={(el) => {
                  labelRefs.current[idx] = el;
                }}
                className="font-outfit text-sm font-semibold text-text-primary tracking-tight transition-colors group-hover:text-violet-primary"
                style={prefersReduced ? undefined : { opacity: 0 }}
              >
                {m.label}
              </h4>

              {/* Metric Description */}
              <p
                ref={(el) => {
                  descRefs.current[idx] = el;
                }}
                className="text-xs text-text-secondary/75 font-normal max-w-[185px] mx-auto leading-relaxed"
                style={prefersReduced ? undefined : { opacity: 0 }}
              >
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};