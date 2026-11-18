import React from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  ShieldCheck,
  Sparkles,
  Cpu,
  Database,
  Layers,
  GitBranch,
  Activity,
  Terminal,
  Zap,
} from 'lucide-react';

interface VisualProps {
  stepIndex: number;
}

const DotGrid: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div
    aria-hidden="true"
    className={`grid grid-cols-4 gap-1.5 opacity-35 pointer-events-none ${className}`}
  >
    {Array.from({ length: 16 }).map((_, idx) => (
      <span key={idx} className="w-1 h-1 rounded-full bg-[#7650E8]" />
    ))}
  </div>
);

/** 01 — Discover: Magnifying glass + concentric radar rings + Objectives/Workflows pills */
const DiscoverVisual: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#DFD6FF] via-[#EAE4FF] to-[#D4C7FF] p-6">
    {/* Concentric orbital circles */}
    <div className="absolute w-52 h-52 rounded-full border border-white/55 pointer-events-none" />
    <div className="absolute w-36 h-36 rounded-full border border-white/65 pointer-events-none" />
    <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#7650E8]/12 pointer-events-none" />

    <DotGrid className="absolute bottom-5 left-5" />

    {/* Floating heart/sparkle dot top-left */}
    <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-[#7650E8]">
      <Sparkles className="w-3.5 h-3.5" />
    </div>

    {/* Magnifying Glass Vector */}
    <motion.div
      whileHover={{ rotate: -6, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="relative -translate-x-10 flex items-center justify-center"
    >
      <svg width="116" height="116" viewBox="0 0 116 116" fill="none" aria-hidden="true">
        {/* Handle */}
        <path
          d="M74 74L100 100"
          stroke="#1B1333"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* Outer Dark Lens Ring */}
        <circle cx="48" cy="48" r="33" fill="#FFFFFF" stroke="#1B1333" strokeWidth="9" />
        {/* Inner Violet Ring */}
        <circle cx="48" cy="48" r="19" fill="#F4F0FF" stroke="#7650E8" strokeWidth="7" />
        {/* Lens Highlight Arc */}
        <path
          d="M39 40C42 37 47 36 52 38"
          stroke="#C8B8FA"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>

    {/* Right-side Floating Pills */}
    <div className="absolute top-5 right-6 px-3.5 py-1.5 rounded-full bg-[#1E1142] text-white text-[11px] font-semibold tracking-wide shadow-md rotate-[3deg]">
      Workflows
    </div>

    <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm rounded-full pl-2 pr-2.5 py-1.5 shadow-md border border-[#7650E8]/15">
      <div className="flex items-center gap-1">
        <span className="w-6 h-6 rounded-full bg-[#7650E8] text-white text-[9px] font-bold flex items-center justify-center">
          AI
        </span>
        <span className="w-6 h-6 rounded-full bg-[#9581EF] text-white text-[9px] font-bold flex items-center justify-center">
          DB
        </span>
        <span className="w-6 h-6 rounded-full bg-[#1E1142] text-white text-[9px] font-bold flex items-center justify-center">
          UX
        </span>
      </div>
      <span className="px-2 py-0.5 rounded-full bg-[#7650E8] text-white text-[10px] font-bold">
        +Audit
      </span>
    </div>

    <div className="absolute bottom-5 right-8 px-4 py-1.5 rounded-full bg-white text-[#1E1142] text-xs font-bold shadow-sm border border-[#7650E8]/15">
      Goals
    </div>
  </div>
);

/** 02 — Define: Tilted checklist card + Validated dark pill + mini roadmap tile */
const DefineVisual: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#EAE3FF] via-[#F3EEFF] to-[#DFD4FF] p-6">
    <DotGrid className="absolute top-5 left-6" />

    {/* Floating small note top-left */}
    <div className="absolute top-4 left-4 w-9 h-10 rounded-xl bg-[#D7C9FF] border border-white/70 p-2 flex flex-col gap-1 -rotate-6 shadow-xs">
      <span className="h-1 w-full rounded-full bg-[#7650E8]/55" />
      <span className="h-1 w-3/4 rounded-full bg-[#7650E8]/35" />
    </div>

    {/* Main Tilted White Checklist Card */}
    <motion.div
      whileHover={{ rotate: 0, y: -3 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="relative w-56 bg-white rounded-2xl p-4 shadow-[0_14px_32px_-12px_rgba(118,80,232,0.28)] border border-[#7650E8]/12 -rotate-2 space-y-3"
    >
      {[
        { checked: true, width: 'w-28' },
        { checked: true, width: 'w-24' },
        { checked: false, width: 'w-20' },
      ].map((row, idx) => (
        <div key={idx} className="flex items-center gap-2.5">
          <span
            className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 ${
              row.checked
                ? 'bg-[#7650E8] text-white'
                : 'border-2 border-[#D4C9F5] bg-[#FAF8FF]'
            }`}
          >
            {row.checked && <Check className="w-3 h-3 stroke-[3]" />}
          </span>
          <span
            className={`h-2.5 rounded-full ${row.width} ${
              row.checked ? 'bg-[#E6DFFF]' : 'bg-[#F0EBFF]'
            }`}
          />
        </div>
      ))}
    </motion.div>

    {/* Approved / Validated Dark Pill Top-Right */}
    <div className="absolute top-4 right-5 px-3.5 py-1.5 rounded-full bg-[#1B1333] text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-md rotate-[2deg]">
      <span className="w-2 h-2 rounded-full bg-[#A78BFA]" />
      Approved
    </div>

    {/* Bottom-Left Violet Stylus / Pencil Accent */}
    <svg
      width="54"
      height="54"
      viewBox="0 0 54 54"
      fill="none"
      className="absolute bottom-3 left-5 drop-shadow-sm"
      aria-hidden="true"
    >
      <path
        d="M12 42L16 28L36 8L46 18L26 38L12 42Z"
        fill="#7650E8"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M32 12L42 22" stroke="#C8B8FA" strokeWidth="3" strokeLinecap="round" />
      <path d="M12 42L18 40L14 36L12 42Z" fill="#1B1333" />
    </svg>

    {/* Bottom-Right Mini Scope Matrix Tile */}
    <div className="absolute bottom-4 right-5 w-20 bg-white rounded-xl overflow-hidden shadow-md border border-[#7650E8]/15 rotate-[4deg]">
      <div className="h-4 bg-[#7650E8] flex items-center justify-center gap-1.5">
        <span className="w-1 h-1 rounded-full bg-white/80" />
        <span className="w-1 h-1 rounded-full bg-white/80" />
        <span className="w-1 h-1 rounded-full bg-white/80" />
      </div>
      <div className="p-2 grid grid-cols-3 gap-1">
        {Array.from({ length: 6 }).map((_, idx) => (
          <span
            key={idx}
            className={`h-2.5 rounded-sm ${
              idx === 1 || idx === 4 ? 'bg-[#7650E8]/75' : 'bg-[#ECE6FF]'
            }`}
          />
        ))}
      </div>
    </div>
  </div>
);

/** 03 — Design: Fanned overlapping architecture cards + waveform + security pill */
const DesignVisual: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#DCD3FF] via-[#EAE4FF] to-[#D2C6FF] p-6">
    {/* Waveform bars top-left */}
    <div className="absolute top-5 left-5 flex items-center gap-1" aria-hidden="true">
      {[12, 22, 16, 28, 18, 24, 12].map((h, idx) => (
        <span
          key={idx}
          style={{ height: `${h}px` }}
          className="w-1 rounded-full bg-[#1B1333]"
        />
      ))}
    </div>

    {/* Top-Right Shield Badge */}
    <div className="absolute top-4 right-5 w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-[#7650E8]">
      <ShieldCheck className="w-4 h-4" />
    </div>

    {/* 3 Fanned Layered Cards */}
    <div className="relative flex items-center justify-center translate-y-1">
      <div className="w-24 h-28 rounded-2xl bg-white shadow-md border border-[#7650E8]/10 -rotate-12 -mr-7 flex flex-col justify-between p-3">
        <Layers className="w-4 h-4 text-[#9581EF]" />
        <div className="space-y-1.5">
          <span className="block h-1.5 w-12 rounded-full bg-[#ECE6FF]" />
          <span className="block h-1.5 w-8 rounded-full bg-[#F3EEFF]" />
        </div>
      </div>

      <div className="w-24 h-28 rounded-2xl bg-[#CFC2FF] shadow-md border border-white/60 -rotate-3 -mr-7 z-10 flex flex-col justify-between p-3">
        <Database className="w-4 h-4 text-[#5B35D5]" />
        <div className="space-y-1.5">
          <span className="block h-1.5 w-12 rounded-full bg-white/75" />
          <span className="block h-1.5 w-9 rounded-full bg-white/55" />
        </div>
      </div>

      <motion.div
        whileHover={{ rotate: 10, y: -4 }}
        transition={{ type: 'spring', stiffness: 260, damping: 18 }}
        className="relative w-26 h-28 min-w-[104px] rounded-2xl bg-[#7650E8] shadow-[0_14px_30px_-8px_rgba(118,80,232,0.5)] rotate-[7deg] z-20 flex flex-col items-center justify-center text-white"
      >
        <div className="absolute top-2.5 right-2.5 px-1.5 py-0.5 rounded-full bg-[#1B1333] text-[8px] font-mono tracking-wider">
          •••
        </div>
        <Cpu className="w-8 h-8 text-white" />
      </motion.div>
    </div>

    {/* Bottom-Left Pill */}
    <div className="absolute bottom-4 left-5 px-3.5 py-1.5 rounded-full bg-white text-[#1E1142] text-[11px] font-bold shadow-sm -rotate-2">
      Architecture
    </div>

    {/* Bottom-Right Pill */}
    <div className="absolute bottom-4 right-5 px-3.5 py-1.5 rounded-full bg-white text-[#1E1142] text-[11px] font-semibold flex items-center gap-1.5 shadow-sm">
      <ShieldCheck className="w-3.5 h-3.5 text-[#7650E8]" />
      Oversight Ready
    </div>
  </div>
);

/** 04 — Build: Sleek dark/white model build & validation console */
const BuildVisual: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#EAE3FF] via-[#F2EDFF] to-[#DDD2FF] p-6">
    <DotGrid className="absolute bottom-5 right-5" />

    {/* Main Build Terminal Card */}
    <motion.div
      whileHover={{ y: -3, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="relative w-64 rounded-2xl bg-[#1B1333] text-white p-4 shadow-[0_18px_36px_-14px_rgba(27,19,51,0.5)] border border-[#7650E8]/30"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#9581EF]" />
          <span className="w-2 h-2 rounded-full bg-[#C8B8FA]/60" />
          <span className="w-2 h-2 rounded-full bg-white/30" />
        </div>
        <Terminal className="w-3.5 h-3.5 text-[#C8B8FA]" />
      </div>

      {/* Stylized Code / Evaluation Lines */}
      <div className="space-y-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-10 rounded-full bg-[#9581EF]" />
          <span className="h-2 w-24 rounded-full bg-white/25" />
        </div>
        <div className="flex items-center gap-2 pl-3">
          <span className="h-2 w-16 rounded-full bg-[#C8B8FA]/80" />
          <span className="h-2 w-14 rounded-full bg-white/20" />
        </div>
        <div className="flex items-center gap-2 pl-3">
          <span className="h-2 w-20 rounded-full bg-[#7650E8]" />
          <span className="h-2 w-12 rounded-full bg-white/30" />
        </div>
        {/* Progress bar */}
        <div className="pt-1">
          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-[#7650E8] to-[#C8B8FA]" />
          </div>
        </div>
      </div>
    </motion.div>

    {/* Top-Right Floating Pill */}
    <div className="absolute top-4 right-5 px-3 py-1.5 rounded-full bg-[#7650E8] text-white text-[11px] font-bold shadow-md flex items-center gap-1">
      <Check className="w-3 h-3 stroke-[3]" />
      QA Passed
    </div>

    {/* Bottom-Left Floating White Pill */}
    <div className="absolute bottom-4 left-5 px-3.5 py-1.5 rounded-full bg-white text-[#1E1142] text-[11px] font-bold shadow-sm border border-[#7650E8]/15 flex items-center gap-1.5">
      <Zap className="w-3 h-3 text-[#7650E8]" />
      Validated Model
    </div>
  </div>
);

/** 05 — Integrate: Central AI node connected cleanly to ERP / CRM / API system pills */
const IntegrateVisual: React.FC = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#DFD8FF] via-[#ECE8FF] to-[#D6CEFF] p-6">
    {/* Connecting SVG Lines */}
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 380 220"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M54 52 C115 52, 130 110, 190 110"
        stroke="#7650E8"
        strokeOpacity="0.45"
        strokeWidth="2"
        strokeDasharray="4 5"
        strokeLinecap="round"
      />
      <path
        d="M54 168 C115 168, 130 110, 190 110"
        stroke="#7650E8"
        strokeOpacity="0.45"
        strokeWidth="2"
        strokeDasharray="4 5"
        strokeLinecap="round"
      />
      <path
        d="M326 52 C265 52, 250 110, 190 110"
        stroke="#7650E8"
        strokeOpacity="0.45"
        strokeWidth="2"
        strokeDasharray="4 5"
        strokeLinecap="round"
      />
      <path
        d="M326 168 C265 168, 250 110, 190 110"
        stroke="#7650E8"
        strokeOpacity="0.45"
        strokeWidth="2"
        strokeDasharray="4 5"
        strokeLinecap="round"
      />
    </svg>

    {/* Left Connected System Pills */}
    <div className="absolute left-6 top-8 px-3.5 py-2 rounded-xl bg-white text-[#1E1142] text-xs font-bold shadow-sm border border-[#7650E8]/15">
      ERP
    </div>
    <div className="absolute left-6 bottom-8 px-3.5 py-2 rounded-xl bg-white text-[#1E1142] text-xs font-bold shadow-sm border border-[#7650E8]/15">
      CRM
    </div>

    {/* Central Hub */}
    <motion.div
      whileHover={{ scale: 1.07 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7650E8] to-[#5633C7] text-white shadow-[0_14px_30px_-6px_rgba(118,80,232,0.55)] flex items-center justify-center ring-4 ring-white/80"
    >
      <GitBranch className="w-7 h-7" />
    </motion.div>

    {/* Right Connected System Pills */}
    <div className="absolute right-6 top-8 px-3.5 py-2 rounded-xl bg-white text-[#1E1142] text-xs font-bold shadow-sm border border-[#7650E8]/15">
      APIs
    </div>
    <div className="absolute right-6 bottom-8 px-3.5 py-2 rounded-xl bg-[#1B1333] text-white text-[11px] font-semibold shadow-md flex items-center gap-1.5">
      <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
      Live Sync
    </div>
  </div>
);

/** 06 — Improve: Rising rounded vertical bars + ROI pill + 95% progress ring */
const ImproveVisual: React.FC = () => (
  <div className="relative w-full h-full flex items-end justify-center overflow-hidden rounded-[24px] bg-gradient-to-br from-[#E4DCFF] via-[#EFEAFF] to-[#D9CEFF] px-7 pt-6 pb-0">
    {/* Rising Vertical Rounded Bars (matching reference card 4 geometry in brand palette) */}
    <div className="relative w-full flex items-end justify-between gap-3 h-full pt-8">
      <div className="flex-1 h-[48%] rounded-t-2xl bg-white shadow-xs" />
      <div className="flex-1 h-[66%] rounded-t-2xl bg-white shadow-xs" />
      <div className="flex-1 h-[82%] rounded-t-2xl bg-white shadow-xs" />
      <div className="flex-1 h-[96%] rounded-t-2xl bg-[#1B1333] shadow-md" />
      <div className="flex-1 h-[88%] rounded-t-2xl bg-[#7650E8] shadow-md" />
    </div>

    {/* Top-Left Growth Pill */}
    <div className="absolute top-4 left-5 px-3 py-1 rounded-full bg-white text-[#1E1142] text-[11px] font-bold shadow-sm -rotate-3">
      +120%
    </div>

    {/* Dark Floating Telemetry Pill */}
    <div className="absolute top-12 left-12 px-3 py-1.5 rounded-full bg-[#1B1333] text-white text-[11px] font-bold shadow-md flex items-center gap-1.5 -rotate-2">
      <Activity className="w-3 h-3 text-[#A78BFA]" />
      99.8%
    </div>

    {/* Bottom-Left Sparkle Circle */}
    <div className="absolute bottom-4 left-5 w-8 h-8 rounded-full bg-[#7650E8] text-white flex items-center justify-center shadow-md">
      <Sparkles className="w-3.5 h-3.5" />
    </div>

    {/* Top-Right Circular Progress Ring (95%) */}
    <div className="absolute top-4 right-5 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center">
      <svg className="w-12 h-12 -rotate-90" viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="22" cy="22" r="18" fill="none" stroke="#EAE4FF" strokeWidth="4" />
        <circle
          cx="22"
          cy="22"
          r="18"
          fill="none"
          stroke="#7650E8"
          strokeWidth="4"
          strokeDasharray="113"
          strokeDashoffset="14"
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-[11px] font-extrabold text-[#1E1142]">95%</span>
    </div>
  </div>
);

export const ApproachStepVisual: React.FC<VisualProps> = ({ stepIndex }) => {
  switch (stepIndex) {
    case 0:
      return <DiscoverVisual />;
    case 1:
      return <DefineVisual />;
    case 2:
      return <DesignVisual />;
    case 3:
      return <BuildVisual />;
    case 4:
      return <IntegrateVisual />;
    default:
      return <ImproveVisual />;
  }
};
