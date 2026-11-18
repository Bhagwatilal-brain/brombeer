import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../layout/Container';
import { WHY_BROMBEER_PILLARS } from '../../data/siteContent';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';
import { EmotionalMetrics } from '../minimal/EmotionalMetrics';
import { clamp, toTransform } from '../ui/tilt-stack-scroll';

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/** Same TiltStackScroll physics, with receding stacked layers peeking along the bottom edge. */
function bottomStackPose(p: number, i: number, reduced: boolean) {
  const enter = i === 0 ? 1 : clamp(p - (i - 1), 0, 1);
  const depth = clamp(p - i, 0, 3);
  if (reduced) {
    return {
      y: 0,
      scale: 1,
      rx: 0,
      rz: 0,
      shade: Math.min(depth, 1) * 0.5,
      opacity: enter >= 1 ? 1 : enter,
    };
  }
  const e = easeOut(enter);
  return {
    y: (1 - e) * 130 + depth * 3.8,
    scale: (1 - depth * 0.07) * (0.9 + 0.1 * e),
    rx: (1 - e) * 22 + depth * 7,
    rz: (1 - e) * (i % 2 ? 5 : -5),
    shade: Math.min(depth, 2) * 0.34,
    opacity: depth > 2.6 ? clamp((3 - depth) / 0.4, 0, 1) : 1,
  };
}

export const WhyBrombeerSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const shadeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const n = WHY_BROMBEER_PILLARS.length;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced = mq.matches;
    let p = 0;

    const paint = () => {
      for (let i = 0; i < n; i++) {
        const el = cardRefs.current[i];
        if (!el) continue;
        const q = bottomStackPose(p, i, reduced);
        el.style.transform = toTransform(q);
        el.style.opacity = String(q.opacity);
        const sh = shadeRefs.current[i];
        if (sh) {
          // Soft royal-violet tint scaled cleanly for light cards
          sh.style.opacity = String((q.shade * 0.42).toFixed(4));
        }
      }
    };

    const trigger = ScrollTrigger.create({
      trigger: trackRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        p = self.progress * Math.max(n - 1, 0);
        paint();
      },
      snap:
        !reduced && n > 1
          ? {
              snapTo: 1 / (n - 1),
              duration: { min: 0.25, max: 0.7 },
              delay: 0.08,
              ease: 'power2.inOut',
            }
          : undefined,
    });
    paint();

    // Entrance: first card lands gently from a tilt when entering the section
    const ctx = gsap.context(() => {
      if (reduced || !cardRefs.current[0]) return;
      gsap.from(cardRefs.current[0], {
        yPercent: 18,
        rotateX: 18,
        scale: 0.92,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out',
        clearProps: 'rotateX',
        scrollTrigger: {
          trigger: trackRef.current,
          start: 'top 75%',
          once: true,
        },
        onComplete: paint,
      });
    });

    const onReducedChange = () => {
      reduced = mq.matches;
      paint();
    };
    mq.addEventListener('change', onReducedChange);

    return () => {
      mq.removeEventListener('change', onReducedChange);
      trigger.kill();
      ctx.revert();
    };
  }, [n]);

  return (
    <section id="why-brombeer" className="bg-[#FCFCFF] relative overflow-x-clip">
      {/* ==================== DESKTOP TILT-STACK SCROLL DECK ==================== */}
      <div
        ref={trackRef}
        className="hidden lg:block relative w-full"
        style={{ height: `calc(100svh * ${Math.max(n, 1)})` }}
      >
        <div className="sticky top-0 h-[100svh] flex flex-col justify-center overflow-hidden pt-16 pb-6">
          <Container size="wide">
            {/* Header Area Centered */}
            <div className="relative z-30 w-full text-center mb-5 xl:mb-6">
              <ScrollTextReveal
                align="center"
                eyebrow="WHY BROMBEER AI?"
                eyebrowClassName="text-[11px] sm:text-xs font-mono tracking-[0.24em] text-[#8E7EB8] font-semibold"
                title="More Than AI Technology. A Partner in Practical Transformation."
                highlightWords={['Practical', 'Transformation.']}
                titleClassName="text-3xl sm:text-4xl lg:text-[32px] xl:text-[40px] 2xl:text-[44px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.16] sm:leading-[1.2] mb-2"
                description="Successful AI implementation requires more than access to a model. It requires an understanding of the business, dependable engineering, reliable data, thoughtful integration, and clear accountability."
                descriptionClassName="text-[#665D82] text-[13.5px] xl:text-[15px] leading-relaxed max-w-3xl lg:max-w-4xl mx-auto font-light pt-0.5"
                maxWidth="max-w-5xl xl:max-w-6xl mx-auto"
              />
            </div>

            {/* 3D Tilt-Stack Card Deck */}
            <div className="relative z-10 pt-2 pb-12">
              <div className="relative w-full h-[355px] xl:h-[395px] 2xl:h-[420px]">
                {WHY_BROMBEER_PILLARS.map((pillar, i) => (
                  <article
                    key={pillar.number}
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    style={{
                      zIndex: i + 1,
                      transformOrigin: '50% 100%',
                      backfaceVisibility: 'hidden',
                    }}
                    className="absolute inset-0 will-change-transform rounded-[26px] border border-[#DFD8F5] border-b-[3px] border-b-[#CEC3F2] bg-gradient-to-br from-white via-[#FDFCFF] to-[#F6F2FF] px-10 xl:px-14 py-7 xl:py-9 overflow-hidden"
                  >
                    {/* Crisp Top-Edge 3D Bevel Light Line */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-10 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#9581EF]/55 to-transparent"
                    />

                    {/* Clean Split Content: Left (Number + Heading + Subtext below), Right (Image) */}
                    <div className="relative z-10 grid grid-cols-12 gap-9 xl:gap-14 items-center h-full">
                      {/* LEFT COLUMN */}
                      <div className="col-span-6 flex items-start gap-6">
                        <span className="font-sans font-bold text-4xl xl:text-[42px] text-[#9581EF] leading-none pt-1 shrink-0 tabular-nums select-none">
                          {pillar.number}
                        </span>

                        <div className="flex flex-col">
                          <h3 className="font-sans text-[28px] xl:text-[34px] text-[#7650E8] font-bold tracking-tight leading-[1.18] mb-4">
                            {pillar.title}
                          </h3>
                          <p className="text-[15px] xl:text-[16.5px] font-dm leading-relaxed text-[#665D82] font-normal max-w-xl">
                            {pillar.description}
                          </p>
                        </div>
                      </div>

                      {/* RIGHT COLUMN: Image */}
                      <div className="col-span-6">
                        <div className="relative aspect-[16/9] w-full rounded-xl xl:rounded-2xl overflow-hidden border border-[#E1DFEF] bg-[#F8F6FF] shadow-[0_18px_42px_-16px_rgba(118,80,232,0.2)]">
                          <img
                            src={pillar.image}
                            alt={pillar.title}
                            draggable={false}
                            className="w-full h-full object-cover"
                            loading={i < 2 ? 'eager' : 'lazy'}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Depth Shade Overlay when Card Tips Back Underneath */}
                    <div
                      ref={(el) => {
                        shadeRefs.current[i] = el;
                      }}
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 z-20 bg-[#2E1A6B] opacity-0 rounded-[26px]"
                    />
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* ==================== MOBILE / TABLET STICKY STACKING CARDS ==================== */}
      <div className="lg:hidden py-12 sm:py-16">
        <Container>
          <div className="w-full text-center mb-10">
            <ScrollTextReveal
              align="center"
              eyebrow="WHY BROMBEER AI?"
              eyebrowClassName="text-[11px] sm:text-xs font-mono tracking-[0.24em] text-[#8E7EB8] font-semibold"
              title="More Than AI Technology. A Partner in Practical Transformation."
              highlightWords={['Practical', 'Transformation.']}
              titleClassName="text-3xl sm:text-4xl font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.2] mb-3.5"
              description="Successful AI implementation requires more than access to a model. It requires an understanding of the business, dependable engineering, reliable data, thoughtful integration, and clear accountability."
              descriptionClassName="text-[#665D82] text-[14.5px] sm:text-[16px] leading-relaxed max-w-3xl mx-auto font-light pt-1"
              maxWidth="max-w-5xl mx-auto"
            />
          </div>

          <div className="space-y-6 pb-6">
            {WHY_BROMBEER_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.number}
                className="sticky rounded-2xl border border-[#DFD8F5] border-b-[3px] border-b-[#CEC3F2] bg-gradient-to-br from-white via-[#FDFCFF] to-[#F6F2FF] p-5 sm:p-7"
                style={{
                  top: `${88 + idx * 14}px`,
                  zIndex: idx + 1,
                }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <span className="font-sans font-bold text-2xl sm:text-3xl text-[#9581EF] leading-none pt-0.5 shrink-0">
                    {pillar.number}
                  </span>
                  <div>
                    <h3 className="font-sans text-xl sm:text-2xl text-[#7650E8] font-bold tracking-tight mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-dm leading-relaxed text-[#665D82]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#E1DFEF] bg-[#F8F6FF]">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Emotional Metrics Ribbon (Full Screen Width with Top & Bottom Whitespace) */}
      <div className="py-16 sm:py-24 lg:py-28 relative z-10 w-full">
        <EmotionalMetrics />
      </div>
    </section>
  );
};
