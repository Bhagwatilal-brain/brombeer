import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container } from '../../layout/Container';
import { ScrollTextReveal } from '../../animations/ScrollTextReveal';
import { clamp, toTransform, Pose } from '../../ui/tilt-stack-scroll';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../../ui/Button';
import { USE_CASES } from '../../../data/useCases';

interface StackCardData {
  number: string;
  title: string;
  kicker: string;
  headline: string;
  description: string;
  benefits: string[];
  image: string;
}

const STACK_CASES: StackCardData[] = [
  {
    number: '05',
    title: USE_CASES[4].title,
    kicker: 'COMPUTER VISION · REAL-TIME EDGE',
    headline: USE_CASES[4].headline,
    description: USE_CASES[4].solution,
    benefits: [
      'Sub-millisecond defect detection at assembly line speed',
      'Objective, consistent 24/7 visual defect classification',
      'Continuous historical visual archive for warranty audit',
    ],
    image: '/images/use-cases/stack-quality-inspection.jpg',
  },
  {
    number: '06',
    title: USE_CASES[5].title,
    kicker: 'ORCHESTRATION · HUMAN-IN-THE-LOOP',
    headline: USE_CASES[5].headline,
    description: USE_CASES[5].solution,
    benefits: [
      'Up to 60% acceleration in multi-system casework turnaround',
      'Standardized handling of routine steps with audit logging',
      'Zero loss of human approval control over consequential decisions',
    ],
    image: '/images/use-cases/stack-workflow-orchestration.jpg',
  },
  {
    number: '07',
    title: USE_CASES[6].title,
    kicker: 'CLIENT-SIDE COMPUTER VISION · PRE-SUBMISSION QC',
    headline: USE_CASES[6].headline,
    description: USE_CASES[6].solution,
    benefits: [
      'Over 90% reduction in rejected submissions and re-request cycles',
      'Interactive visual prompts guiding users before upload',
      'Consistent, pre-validated high-resolution imagery for ERP ingest',
    ],
    image: '/images/use-cases/stack-image-validation.jpg',
  },
  {
    number: '08',
    title: USE_CASES[7].title,
    kicker: 'GEOMETRIC AI · CALIBRATED REFERENCE',
    headline: USE_CASES[7].headline,
    description: USE_CASES[7].solution,
    benefits: [
      'Standardized measurement results independent of manual variance',
      'Accelerated sizing and outfitting across large workforces',
      'Fewer costly returns, re-tailoring cycles, and sizing errors',
    ],
    image: '/images/use-cases/stack-measurement-sizing.jpg',
  },
];

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

/** Same TiltStackScroll physics with stacked layers peeking along the bottom edge */
function bottomStackPose(p: number, i: number, reduced: boolean): Pose {
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
    y: (1 - e) * 125 + depth * 3.6,
    scale: (1 - depth * 0.065) * (0.91 + 0.09 * e),
    rx: (1 - e) * 20 + depth * 6.5,
    rz: (1 - e) * (i % 2 ? 4.5 : -4.5),
    shade: Math.min(depth, 2) * 0.32,
    opacity: depth > 2.6 ? clamp((3 - depth) / 0.4, 0, 1) : 1,
  };
}

export const UseCaseScrollStackSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const shadeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const n = STACK_CASES.length;

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
          sh.style.opacity = String((q.shade * 0.4).toFixed(4));
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

    // First card subtle entrance animation
    const ctx = gsap.context(() => {
      if (reduced || !cardRefs.current[0]) return;
      gsap.from(cardRefs.current[0], {
        yPercent: 16,
        rotateX: 16,
        scale: 0.93,
        opacity: 0,
        duration: 1.1,
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
    <section id="specialized-use-cases" className="bg-[#FAF8FE]/70 relative overflow-x-clip py-6 lg:py-0">
      {/* ==================== DESKTOP TILT-STACK SCROLL DECK ==================== */}
      <div
        ref={trackRef}
        className="hidden lg:block relative w-full"
        style={{ height: `calc(100svh * ${Math.max(n, 1)})` }}
      >
        <div className="sticky top-0 h-[100svh] flex flex-col justify-center overflow-hidden pt-14 pb-6">
          <Container size="wide">
            {/* Header Area Centered Above Stack */}
            <div className="relative z-30 w-full text-center mb-5 xl:mb-6">
              <ScrollTextReveal
                align="center"
                eyebrow="SPECIALIZED AI CAPABILITIES"
                eyebrowClassName="text-[11px] sm:text-xs font-mono tracking-[0.24em] text-[#8E7EB8] font-semibold"
                title="Precision Systems for High-Impact Operations"
                highlightWords={['High-Impact', 'Operations']}
                titleClassName="text-3xl sm:text-4xl lg:text-[34px] xl:text-[42px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.15] mb-2"
                description="From real-time computer vision at the assembly line to multi-system workflow orchestration, our solutions are built for deterministic reliability and auditable governance."
                descriptionClassName="text-[#665D82] text-[13.5px] xl:text-[15px] leading-relaxed max-w-3xl lg:max-w-4xl mx-auto font-light pt-0.5 font-dm"
                maxWidth="max-w-5xl xl:max-w-6xl mx-auto"
              />
            </div>

            {/* 3D Tilt-Stack Card Deck */}
            <div className="relative z-10 pt-1 pb-10">
              <div className="relative w-full h-[375px] xl:h-[415px] 2xl:h-[435px]">
                {STACK_CASES.map((item, i) => (
                  <article
                    key={item.number}
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    style={{
                      zIndex: i + 1,
                      transformOrigin: '50% 100%',
                      backfaceVisibility: 'hidden',
                    }}
                    className="absolute inset-0 will-change-transform rounded-[26px] border border-[#DFD8F5] border-b-[3px] border-b-[#CEC3F2] bg-gradient-to-br from-white via-[#FDFCFF] to-[#F6F2FF] px-8 sm:px-12 xl:px-14 py-6 xl:py-8 overflow-hidden shadow-[0_20px_50px_-20px_rgba(118,80,232,0.14)]"
                  >
                    {/* Crisp Top-Edge 3D Bevel Light Line */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-10 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#9581EF]/55 to-transparent"
                    />

                    {/* Split Content: Left (Details) + Right (Image) */}
                    <div className="relative z-10 grid grid-cols-12 gap-8 xl:gap-12 items-center h-full">
                      {/* LEFT COLUMN */}
                      <div className="col-span-6 flex flex-col justify-center">
                        {/* Title */}
                        <h3 className="font-sans text-[24px] xl:text-[30px] text-[#111014] font-bold tracking-tight leading-[1.18] mb-1.5">
                          {item.title}
                        </h3>

                        {/* Headline */}
                        <p className="text-[14px] xl:text-[15.5px] font-sans font-semibold text-[#7650E8] mb-2.5">
                          {item.headline}
                        </p>

                        {/* Description */}
                        <p className="text-[12.5px] xl:text-[14px] font-dm leading-relaxed text-[#665D82] font-normal mb-3.5">
                          {item.description}
                        </p>

                        {/* Key benefits list */}
                        <div className="space-y-1 mb-4">
                          {item.benefits.map((benefit, bIdx) => (
                            <div key={bIdx} className="flex items-start gap-2 text-[12px] xl:text-[13px] text-[#413959] font-dm">
                              <CheckCircle2 className="w-3.5 h-3.5 text-violet-primary flex-shrink-0 mt-0.5" />
                              <span className="leading-tight">{benefit}</span>
                            </div>
                          ))}
                        </div>

                        {/* Discuss Button */}
                        <div>
                          <Button
                            asLink
                            href="/contact"
                            variant="secondary"
                            size="sm"
                            textRoll
                            icon={<ArrowRight className="w-3.5 h-3.5" />}
                            className="border-border-subtle hover:border-violet-primary hover:text-violet-primary font-medium shadow-xs hover:shadow-sm"
                          >
                            Discuss This Use Case
                          </Button>
                        </div>
                      </div>

                      {/* RIGHT COLUMN: Image */}
                      <div className="col-span-6">
                        <div className="relative aspect-[16/9] w-full rounded-xl xl:rounded-2xl overflow-hidden border border-[#E1DFEF] bg-[#F8F6FF] shadow-[0_18px_42px_-16px_rgba(118,80,232,0.2)]">
                          <img
                            src={item.image}
                            alt={item.title}
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
      <div className="lg:hidden py-10 sm:py-14">
        <Container>
          <div className="w-full text-center mb-8">
            <ScrollTextReveal
              align="center"
              eyebrow="SPECIALIZED AI CAPABILITIES"
              eyebrowClassName="text-[11px] sm:text-xs font-mono tracking-[0.24em] text-[#8E7EB8] font-semibold"
              title="Precision Systems for High-Impact Operations"
              highlightWords={['High-Impact', 'Operations']}
              titleClassName="text-3xl sm:text-4xl font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.2] mb-3"
              description="From real-time computer vision at the assembly line to multi-system workflow orchestration, our solutions deliver deterministic reliability."
              descriptionClassName="text-[#665D82] text-[14px] sm:text-[15.5px] leading-relaxed max-w-3xl mx-auto font-light font-dm"
              maxWidth="max-w-5xl mx-auto"
            />
          </div>

          <div className="space-y-6 pb-6">
            {STACK_CASES.map((item, idx) => (
              <div
                key={item.number}
                className="sticky rounded-2xl border border-[#DFD8F5] border-b-[3px] border-b-[#CEC3F2] bg-gradient-to-br from-white via-[#FDFCFF] to-[#F6F2FF] p-5 sm:p-7 shadow-lg"
                style={{
                  top: `${84 + idx * 14}px`,
                  zIndex: idx + 1,
                }}
              >
                <div className="mb-4">
                  <h3 className="font-sans text-xl sm:text-2xl text-[#111014] font-bold tracking-tight mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#7650E8] mb-2 font-sans">
                    {item.headline}
                  </p>
                  <p className="text-xs sm:text-[13px] font-dm leading-relaxed text-[#665D82] mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#E1DFEF] mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-1 mb-4">
                  {item.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-[#413959] font-dm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-primary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asLink
                  href="/contact"
                  variant="secondary"
                  size="sm"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="w-full justify-center text-xs"
                >
                  Discuss This Use Case
                </Button>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};
