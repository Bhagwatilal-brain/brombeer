"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles } from "lucide-react";
import { Container } from "../../layout/Container";
import { clamp, toTransform, Pose } from "../../ui/tilt-stack-scroll";

interface DefenceCardItem {
  number: string;
  title: string;
  kicker: string;
  description: string;
  image: string;
  alt: string;
}

const DEFENCE_CARDS: DefenceCardItem[] = [
  {
    number: "01",
    title: "Sub-80ms Target Identification at the Disconnected Tactical Edge",
    kicker: "TACTICAL AIR-GAP · ZERO EGRESS",
    description:
      "Deploy quantized multi-modal vision and RF transformers directly on field-grade ruggedized compute without internet connectivity, external API calls, or cloud telemetry.",
    image: "/images/defence/defence-tactical-edge.jpg",
    alt: "Tactical edge compute processor with real-time target identification telemetry",
  },
  {
    number: "02",
    title: "High-Density RF Electronic Warfare & Radar Signature De-Noising",
    kicker: "MULTI-DOMAIN SENSOR FUSION · 4.5 GHZ CORE",
    description:
      "Real-time pulse de-interleaving and waveform decomposition across contested spectrums, identifying low-RCS threats and agile frequency-hopping radar emitters in congested air corridors.",
    image: "/images/defence/defence-electronic-warfare.jpg",
    alt: "Electronic warfare RF sensor pod with holographic waveform decomposition",
  },
  {
    number: "03",
    title: "Autonomous Drone Swarm Mesh Coordination & Perimeter Intercept",
    kicker: "DISTRIBUTED MESH · GPS-DENIED",
    description:
      "Decentralized consensus algorithms enable autonomous aerial and ground swarms to self-balance reconnaissance vectors, share target state trees, and maintain formation under hostile electronic jamming.",
    image: "/images/defence/defence-swarm-coordination.jpg",
    alt: "Autonomous defense drone swarm in geometric formation with telemetry mesh",
  },
  {
    number: "04",
    title: "Cryptographic Command Chain & Instant Sensor-to-Shooter Routing",
    kicker: "POST-QUANTUM CRYPTO · C4ISR SYNC",
    description:
      "Zero-trust mutual identity verification routes tactical intelligence from frontline reconnaissance sensors directly to command centers with zero packet tamper risk and audited authority gates.",
    image: "/images/defence/defence-cryptographic-command.jpg",
    alt: "C4ISR tactical operations center with holographic command globe and zero-trust conduits",
  },
];

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

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
    y: (1 - e) * 115 + depth * 3.2,
    scale: (1 - depth * 0.06) * (0.93 + 0.07 * e),
    rx: (1 - e) * 16 + depth * 5.5,
    rz: (1 - e) * (i % 2 ? 3.5 : -3.5),
    shade: Math.min(depth, 2) * 0.32,
    opacity: depth > 2.6 ? clamp((3 - depth) / 0.4, 0, 1) : 1,
  };
}

export const IndustryScrollStackSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const stageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const shadeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const n = DEFENCE_CARDS.length;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
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
          sh.style.opacity = String((q.shade * 0.42).toFixed(4));
        }
      }
    };

    // GSAP Pinning: sets position:fixed on stageRef during scroll, unaffected by any parent overflow
    const trigger = ScrollTrigger.create({
      trigger: trackRef.current,
      start: "top 84px",
      end: "bottom bottom",
      pin: stageRef.current,
      pinSpacing: false,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        p = self.progress * Math.max(n - 1, 0);
        paint();
      },
      snap:
        !reduced && n > 1
          ? {
              snapTo: 1 / (n - 1),
              duration: { min: 0.25, max: 0.65 },
              delay: 0.08,
              ease: "power2.inOut",
            }
          : undefined,
    });
    paint();

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
      paint();
    }, 150);

    const onReducedChange = () => {
      reduced = mq.matches;
      paint();
    };
    mq.addEventListener("change", onReducedChange);

    return () => {
      clearTimeout(refreshTimer);
      mq.removeEventListener("change", onReducedChange);
      trigger.kill();
    };
  }, [n]);

  return (
    <section id="defence-scroll-stack" className="bg-[#FCFCFF] relative border-t border-slate-200/60">
      {/* ==================== DESKTOP PINNED SCROLL DECK ==================== */}
      <div
        ref={trackRef}
        className="hidden lg:block relative w-full"
        style={{ height: `calc(100vh + ${Math.max(n - 1, 1) * 85}vh)` }}
      >
        <div
          ref={stageRef}
          className="relative w-full h-[calc(100vh-84px)] min-h-[480px] flex flex-col justify-center overflow-hidden px-4 sm:px-6 py-2"
        >
          <Container size="wide">
            {/* Header Area Centered with Brombeer Brand Aesthetics */}
            <div className="relative z-30 w-full text-center mb-3 xl:mb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#6853A5]/20 shadow-xs text-xs font-semibold text-violet-primary mb-2">
                <Sparkles className="w-3.5 h-3.5 text-violet-primary" />
                <span className="font-mono uppercase text-[10.5px] tracking-wider">
                  2. DEFENCE & AEROSPACE
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl lg:text-[28px] xl:text-[34px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-tight text-center max-w-4xl mx-auto">
                Tactical Edge Inference Under.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary via-[#6366F1] to-violet-deep">
                  Extreme Electronic Jamming.
                </span>
              </h2>
              <p className="text-[#665D82] text-xs sm:text-[13px] font-dm leading-relaxed max-w-2xl mx-auto text-center mt-1 font-normal">
                Deploy mission-critical AI algorithms at the tactical air-gapped edge with zero cloud reliance and verified cryptographic integrity.
              </p>
            </div>

            {/* 3D Tilt-Stack Card Deck - Guaranteed complete visibility with ample margins */}
            <div className="relative z-10 max-w-5xl xl:max-w-6xl mx-auto w-full">
              <div className="relative w-full h-[280px] lg:h-[300px] xl:h-[325px]">
                {DEFENCE_CARDS.map((card, i) => (
                  <article
                    key={card.number}
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    style={{
                      zIndex: i + 1,
                      transformOrigin: "50% 100%",
                      backfaceVisibility: "hidden",
                    }}
                    className="absolute inset-0 will-change-transform rounded-[22px] xl:rounded-[26px] border border-[#DFD8F5] border-b-[3px] border-b-[#CEC3F2] bg-gradient-to-br from-white via-[#FDFCFF] to-[#F6F2FF] px-6 lg:px-9 xl:px-11 py-4 lg:py-5 xl:py-6 overflow-hidden shadow-[0_20px_50px_-20px_rgba(118,80,232,0.16),0_1px_0_rgba(255,255,255,0.9)_inset]"
                  >
                    {/* Top Bevel Highlight Line */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-8 xl:inset-x-12 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#9581EF]/55 to-transparent"
                    />

                    {/* Split Content: Left (Heading + Subtext), Right (16:9 Image) */}
                    <div className="relative z-10 grid grid-cols-12 gap-5 xl:gap-8 items-center h-full">
                      {/* LEFT COLUMN */}
                      <div className="col-span-6 flex flex-col justify-center">
                        <h3 className="font-sans text-[17px] sm:text-[19px] lg:text-[21px] xl:text-[23px] text-[#7650E8] font-bold tracking-tight leading-[1.22] mb-2">
                          {card.title}
                        </h3>
                        <p className="text-[12px] sm:text-[13px] xl:text-[14px] font-dm leading-relaxed text-[#665D82] font-normal">
                          {card.description}
                        </p>
                      </div>

                      {/* RIGHT COLUMN: Image */}
                      <div className="col-span-6">
                        <div className="relative aspect-[16/9] w-full max-h-[170px] lg:max-h-[185px] xl:max-h-[205px] rounded-xl xl:rounded-2xl overflow-hidden border border-[#E1DFEF] bg-[#F8F6FF] shadow-sm">
                          <img
                            src={card.image}
                            alt={card.alt || card.title}
                            draggable={false}
                            className="w-full h-full object-cover"
                            loading={i < 2 ? "eager" : "lazy"}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Depth Shade Overlay */}
                    <div
                      ref={(el) => {
                        shadeRefs.current[i] = el;
                      }}
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 z-20 bg-[#2E1A6B] opacity-0 rounded-[22px] xl:rounded-[26px]"
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
          <div className="w-full text-center mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#6853A5]/20 shadow-xs text-xs font-semibold text-violet-primary mb-3">
              <Sparkles className="w-3.5 h-3.5 text-violet-primary" />
              <span className="font-mono uppercase text-[10px] sm:text-[11px] tracking-wider">
                2. DEFENCE & AEROSPACE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#111014] tracking-tight leading-[1.2]">
              Tactical Edge Inference Under.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary via-[#6366F1] to-violet-deep">
                Extreme Electronic Jamming.
              </span>
            </h2>
            <p className="text-[#665D82] text-xs sm:text-sm font-dm leading-relaxed max-w-xl mx-auto mt-2">
              Deploy mission-critical AI algorithms at the tactical air-gapped edge with zero cloud reliance.
            </p>
          </div>

          <div className="space-y-6 pb-6">
            {DEFENCE_CARDS.map((card, idx) => (
              <div
                key={card.number}
                className="sticky rounded-2xl border border-[#DFD8F5] border-b-[3px] border-b-[#CEC3F2] bg-gradient-to-br from-white via-[#FDFCFF] to-[#F6F2FF] p-5 sm:p-7 shadow-sm"
                style={{
                  top: `${88 + idx * 14}px`,
                  zIndex: idx + 1,
                }}
              >
                <div className="mb-4">
                  <h3 className="font-sans text-lg sm:text-xl text-[#7650E8] font-bold tracking-tight mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-dm leading-relaxed text-[#665D82]">
                    {card.description}
                  </p>
                </div>

                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#E1DFEF] bg-[#F8F6FF]">
                  <img
                    src={card.image}
                    alt={card.alt || card.title}
                    draggable={false}
                    className="w-full h-full object-cover"
                    loading={idx < 2 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default IndustryScrollStackSection;