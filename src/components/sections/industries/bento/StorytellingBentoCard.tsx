import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Shield, Lock, AlertCircle, ArrowUpRight } from 'lucide-react';
import { Button } from '../../../ui/Button';

export interface StoryBeat {
  phase: string;
  badge: string;
  title: string;
  narrative: string;
  metricValue: string;
  metricLabel: string;
  metricColor: string;
  visualComponent: React.ReactNode;
}

export interface StorytellingCardProps {
  id: string;
  sectorName: string;
  sectorCategory: string;
  artworkSrc: string;
  colSpanClass: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  accentGradient: string;
  ctaText: string;
  ctaHref: string;
  beats: [StoryBeat, StoryBeat, StoryBeat]; // 0: Challenge, 1: AI Solution, 2: Real Impact
}

export const StorytellingBentoCard: React.FC<StorytellingCardProps> = ({
  id,
  sectorName,
  sectorCategory,
  artworkSrc,
  colSpanClass,
  icon: Icon,
  accentColor,
  accentGradient,
  ctaText,
  ctaHref,
  beats,
}) => {
  const [activeBeat, setActiveBeat] = useState<number>(0);
  const current = beats[activeBeat];

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`${colSpanClass} scroll-mt-24`}
    >
      <div className="group relative rounded-[2.25rem] bg-white border border-[#E8E2F5] hover:border-violet-primary/40 shadow-[0_12px_45px_-15px_rgba(118,80,232,0.08)] hover:shadow-2xl hover:shadow-violet-primary/14 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
        {/* Top Accent Gradient Line on Hover */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: accentGradient }}
        />

        {/* 1. Header Artwork Banner */}
        <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-[#F6F2FC]">
          <img
            src={artworkSrc}
            alt={sectorName}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />

          {/* Overlaid Category Pill Badges */}
          <div className="absolute top-5 left-5 right-5 flex flex-wrap items-center justify-between gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E5DEFA] text-xs font-bold text-[#111014] shadow-sm">
              <Icon className="w-3.5 h-3.5 text-violet-primary" />
              <span>{sectorName}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E5DEFA] text-[11px] font-mono text-[#666371] font-medium shadow-2xs">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
              <span>{sectorCategory}</span>
            </div>
          </div>
        </div>

        {/* 2. Interactive Story Body */}
        <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
          <div className="space-y-5">
            {/* 3-Step Story Scrubber (The Story Arc) */}
            <div className="p-1 rounded-2xl bg-[#F4F0FD] border border-[#E6DEF7] grid grid-cols-3 gap-1">
              {beats.map((beat, idx) => {
                const isActive = activeBeat === idx;
                return (
                  <button
                    key={beat.phase}
                    onClick={() => setActiveBeat(idx)}
                    className={`py-2 px-2 sm:px-3 rounded-xl text-center transition-all duration-200 cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 ${
                      isActive
                        ? 'bg-white text-[#111014] font-bold shadow-sm border border-[#E0D5F7]'
                        : 'text-[#666371] hover:text-[#111014] font-medium'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                        isActive
                          ? 'bg-violet-primary text-white'
                          : 'bg-[#E7DEFA] text-[#666371]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-dm leading-none">{beat.phase}</span>
                  </button>
                );
              })}
            </div>

            {/* Narrative Story Line: One Clear Story Headline & Brief Context */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBeat}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="space-y-1.5 min-h-[64px]"
              >
                <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold tracking-wider uppercase text-violet-primary">
                  <span>{current.badge}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-[#111014] tracking-tight leading-snug">
                  {current.title}
                </h3>
                <p className="text-xs sm:text-sm font-dm text-[#666371] leading-relaxed">
                  {current.narrative}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Visual Center Stage: The Graphic Metaphor for this Story Beat */}
            <div className="pt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBeat}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  {current.visualComponent}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* 3. Card Footer: Headline Metric + Action Button */}
          <div className="pt-5 border-t border-[#F0EAFB] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div
                className={`text-2xl sm:text-3xl font-sans font-extrabold tracking-tight ${current.metricColor}`}
              >
                {current.metricValue}
              </div>
              <div className="text-xs font-dm text-[#666371] leading-tight">
                {current.metricLabel}
              </div>
            </div>

            <Button
              asLink
              href={ctaHref}
              variant="secondary"
              size="sm"
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              className="border-violet-primary/20 hover:border-violet-primary hover:bg-[#FAF8FE]"
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
