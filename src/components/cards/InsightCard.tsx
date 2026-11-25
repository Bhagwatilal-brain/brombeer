import React from 'react';
import { InsightArticle } from '../../types';
import {
  ArrowUpRight,
  Sparkles,
  Bot,
  Eye,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';

interface InsightCardProps {
  article: InsightArticle;
}

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'generative ai':
      return Sparkles;
    case 'intelligent automation':
      return Bot;
    case 'computer vision':
      return Eye;
    case 'responsible ai':
      return ShieldCheck;
    default:
      return BookOpen;
  }
};

const getHoverGradient = (category: string) => {
  switch (category.toLowerCase()) {
    case 'generative ai':
      return 'bg-gradient-to-tr from-[#6542E0] to-[#8E6DF8] shadow-lg shadow-[#7650E8]/35';
    case 'intelligent automation':
      return 'bg-gradient-to-tr from-[#7650E8] to-[#9E7DFF] shadow-lg shadow-[#7650E8]/35';
    case 'computer vision':
      return 'bg-gradient-to-tr from-[#5830D4] to-[#8460F6] shadow-lg shadow-[#7650E8]/35';
    case 'responsible ai':
      return 'bg-gradient-to-tr from-[#6F43EA] to-[#9773FF] shadow-lg shadow-[#7650E8]/35';
    default:
      return 'bg-gradient-to-tr from-[#7650E8] to-[#A688FF] shadow-lg shadow-[#7650E8]/35';
  }
};

export const InsightCard: React.FC<InsightCardProps> = ({ article }) => {
  const Icon = getCategoryIcon(article.category);
  const hoverGradient = getHoverGradient(article.category);

  return (
    <div className="group relative p-6 sm:p-7 rounded-[2rem] h-full flex flex-col justify-between bg-white border border-[#E9E4F5] shadow-[0_10px_35px_-12px_rgba(118,80,232,0.08),0_1px_3px_rgba(0,0,0,0.02)] hover:border-violet-primary/70 hover:ring-1 hover:ring-violet-primary/25 hover:shadow-[0_22px_55px_-10px_rgba(118,80,232,0.22),0_12px_24px_-6px_rgba(118,80,232,0.12)] hover:-translate-y-2 hover:scale-[1.01] transition-all duration-300 overflow-hidden min-h-[420px]">
      {/* Top-Right Soft Geometry Circle (renders behind top line at z-0) */}
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-[#EFEAFB]/50 group-hover:scale-125 transition-transform duration-500 pointer-events-none z-0" />

      {/* Bottom-Right Concentric Rings SVG that gently scales and rotates on hover (z-0) */}
      <svg
        className="absolute -right-6 -bottom-6 w-32 h-32 pointer-events-none select-none group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-0"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="85" cy="85" r="28" stroke="#111014" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
        <circle cx="85" cy="85" r="46" stroke="#111014" strokeWidth="1" opacity="0.18" />
        <circle cx="85" cy="85" r="64" stroke="#111014" strokeWidth="1" opacity="0.1" />
      </svg>

      {/* Top purple glowing line: radiates and pops on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-80 group-hover:opacity-100 group-hover:h-[4px] group-hover:shadow-[0_2px_14px_rgba(118,80,232,0.75)] transition-all duration-300 z-20 pointer-events-none" />

      <div className="space-y-3.5 relative z-10">
        {/* Header: Dual-State Circular Icon Badge + Pill Badge + Read Time */}
        <div className="flex items-center justify-between">
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            {/* 1. Initial State: Muted circular background with muted icon */}
            <div className="absolute inset-0 rounded-full bg-[#EDE8F5]/90 border border-[#D6CEE4] flex items-center justify-center shadow-xs transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
              <Icon className="w-5 h-5 text-[#8E869E] transition-colors duration-300" />
            </div>

            {/* 2. Hovered State: Violet gradient with crisp white icon */}
            <div className={`absolute inset-0 rounded-full ${hoverGradient} border-2 border-white/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
              <Icon className="w-5 h-5 text-white" />
            </div>
          </div>

          <div>
            <span className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-white text-[#7C7490] border border-[#D8D1E6] font-medium select-none shadow-xs transition-all duration-300 group-hover:border-violet-primary/40 group-hover:text-violet-primary group-hover:bg-[#FAF9FF]">
              {article.category}
            </span>
          </div>
        </div>

        {/* Title & Meta with smooth hover motion */}
        <div className="pt-0.5">
          <h3 className="text-base sm:text-[18px] font-sans font-bold text-[#111014] tracking-tight leading-[1.3] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#181126] line-clamp-3">
            {article.title}
          </h3>
          <p className="text-[11.5px] font-dm font-medium text-violet-primary mt-1">
            {article.author} · {article.date}
          </p>
        </div>

        {/* Excerpt */}
        <p className="text-xs font-dm text-text-secondary leading-relaxed font-normal line-clamp-3">
          {article.excerpt}
        </p>

        {/* Key Takeaway Box */}
        {article.keyTakeaway && (
          <div className="p-3 rounded-xl bg-[#FAF9FF] border border-[#E9E4F5] text-[11.5px] font-dm text-[#4D4761] space-y-1">
            <span className="font-semibold text-violet-primary text-[10px] font-mono uppercase tracking-wider block">
              Key Architecture Insight:
            </span>
            <p className="italic text-[#3E3852] leading-relaxed line-clamp-3">
              "{article.keyTakeaway}"
            </p>
          </div>
        )}
      </div>

      {/* Bottom Action Link with Shrunk Divider */}
      <div className="pt-2 mt-5 flex flex-col items-start relative z-10">
        <div className="w-20 sm:w-28 h-[1px] bg-[#ECE8F5] mb-3" />
        <div className="w-full flex items-center justify-between">
          <span className="text-xs sm:text-[12.5px] font-dm font-semibold text-violet-primary hover:text-violet-deep inline-flex items-center gap-1.5 group/link transition-colors cursor-pointer">
            <span>Read Article</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </span>
          <span className="text-[10px] font-mono text-[#8E869E] uppercase tracking-wider">
            Blueprint
          </span>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
