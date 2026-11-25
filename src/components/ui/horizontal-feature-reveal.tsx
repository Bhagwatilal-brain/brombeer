
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, ArrowRight, Anchor, Navigation, ShieldCheck, Cpu } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface HorizontalPanel {
  id: string;
  badge: string;
  title: string;
  description: string;
  statValue: string;
  statLabel: string;
  tags: string[];
  image: string;
  accent?: string;
}

export interface HorizontalFeatureRevealProps {
  panels: HorizontalPanel[];
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  focusTitle?: string;
  focusText?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export const HorizontalFeatureReveal: React.FC<HorizontalFeatureRevealProps> = ({
  panels,
  eyebrow = "MARITIME LOGISTICS & SUPPLY CHAIN",
  heading = "Improve Visibility Across the Supply Chain.",
  subheading = "Logistics operations depend on accurate information, coordinated workflows, inventory visibility, and timely decisions. AI can help organizations identify patterns and process information more efficiently.",
  focusTitle,
  focusText,
  ctaText,
  ctaHref,
  className = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth + 80);

      const tween = gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${track.scrollWidth - window.innerWidth + 500}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (progressBarRef.current) {
            progressBarRef.current.style.transform = `scaleX(${self.progress})`;
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, [panels]);

  return (
    <div
      ref={sectionRef}
      className={`relative w-full h-screen min-h-[600px] max-h-[100dvh] bg-[#0E0D14] text-white overflow-hidden flex flex-col justify-between pt-[96px] pb-5 sm:pt-[104px] sm:pb-7 lg:pt-[110px] lg:pb-8 ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-violet-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header Row */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-violet-300 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span className="font-mono uppercase text-[11px] tracking-wider">{eyebrow}</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-sans font-extrabold text-white tracking-tight leading-tight max-w-3xl">
            {heading.includes("Supply Chain") ? (
              <>
                {heading.split("Supply Chain")[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-violet-300">
                  Supply Chain{heading.split("Supply Chain")[1]}
                </span>
              </>
            ) : (
              heading
            )}
          </h2>
          {subheading && (
            <p className="text-slate-300 text-xs sm:text-sm font-dm leading-relaxed mt-1.5 max-w-3xl line-clamp-2 sm:line-clamp-none">
              {subheading}
            </p>
          )}
        </div>
      </div>

      {/* Horizontal Scrolling Track */}
      <div className="relative z-10 w-full overflow-visible my-auto py-2 sm:py-3">
        <div
          ref={trackRef}
          className="flex items-center gap-5 sm:gap-7 px-6 sm:px-12 will-change-transform w-max"
        >
          {/* Introductory Focus & Strategy Card */}
          <div className="w-[320px] sm:w-[360px] lg:w-[380px] h-[340px] sm:h-[365px] rounded-[24px] bg-gradient-to-br from-[#1C1A29] to-[#12111A] border border-violet-500/30 p-5 sm:p-6 flex flex-col justify-between flex-shrink-0 backdrop-blur-md shadow-[0_20px_50px_-15px_rgba(118,80,232,0.25)]">
            <div>
              <div className="w-10 h-10 rounded-xl bg-violet-600/30 border border-violet-400/30 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5 text-violet-300" />
              </div>
              <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-violet-400">
                OUR FOCUS
              </span>
              <h3 className="font-sans font-bold text-lg sm:text-xl text-white mt-1.5 leading-snug">
                {focusTitle || "System Connectivity & Metric Definition"}
              </h3>
              <p className="font-dm text-xs sm:text-[13px] text-slate-300 mt-2.5 leading-relaxed line-clamp-4">
                {focusText || "We connect AI capabilities to existing business systems and define relevant measures such as forecast error, processing time, exception rates, and inventory accuracy."}
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2.5">
              {ctaText && (
                <a
                  href={ctaHref || "/contact"}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-violet-primary to-violet-deep text-white font-sans font-bold text-xs shadow-md shadow-violet-500/25 hover:opacity-95 transition-all group"
                >
                  <span>{ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              )}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{panels.length} CONNECTED WORKFLOWS</span>
                <span className="text-emerald-400">● LIVE RUNTIME</span>
              </div>
            </div>
          </div>

          {/* Feature Runway Cards */}
          {panels.map((panel) => (
            <div
              key={panel.id}
              className="w-[320px] sm:w-[360px] lg:w-[380px] h-[340px] sm:h-[365px] rounded-[24px] bg-[#14131E] border border-white/12 overflow-hidden flex flex-col justify-between flex-shrink-0 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] relative group hover:border-violet-500/40 transition-colors duration-300"
            >
              {/* Top Image Banner */}
              <div className="h-[165px] sm:h-[185px] w-full relative overflow-hidden flex-shrink-0">
                <img
                  src={panel.image}
                  alt={panel.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#14131E] via-[#14131E]/40 to-transparent" />
              </div>

              {/* Bottom Card Content */}
              <div className="p-5 sm:p-6 pb-6 sm:pb-7 flex-1 flex flex-col justify-end">
                <h4 className="font-sans font-bold text-base sm:text-lg text-white tracking-tight leading-snug">
                  {panel.title}
                </h4>
                <p className="font-dm text-xs sm:text-[13px] text-slate-300 mt-2 leading-relaxed">
                  {panel.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

