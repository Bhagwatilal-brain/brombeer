import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Lock, ShieldCheck, Activity, Eye, EyeOff, FileText, Sparkles } from 'lucide-react';

export const HealthcareExtractionVisual: React.FC = () => {
  const [masked, setMasked] = useState(true);

  return (
    <div className="space-y-4 select-none">
      {/* 1. Main Graphic Scene: Medical Chart Scanner & Heartbeat Wave */}
      <div className="relative p-5 rounded-2xl bg-gradient-to-b from-[#161226] via-[#1C1632] to-[#141024] border border-[#342A52] shadow-xl overflow-hidden text-white font-mono">
        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-4 h-4 text-rose-500 animate-pulse" />
            <span className="text-xs uppercase tracking-wider text-white font-bold">
              CLINICAL EHR SCANNER
            </span>
          </div>

          <button
            onClick={() => setMasked(!masked)}
            className="px-2.5 py-1 rounded-full bg-violet-500/20 hover:bg-violet-500/35 border border-violet-400/40 text-[10.5px] text-violet-200 transition-colors cursor-pointer flex items-center gap-1 active:scale-95"
          >
            {masked ? <EyeOff className="w-3 h-3 text-violet-300" /> : <Eye className="w-3 h-3 text-rose-400" />}
            <span>{masked ? 'Safe Harbor Mask' : 'Raw PHI'}</span>
          </button>
        </div>

        {/* Illustrated Medical Chart with Laser Beam */}
        <div className="relative z-10 p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2.5 overflow-hidden backdrop-blur-md">
          {/* Animated Laser Scanning Beam */}
          <motion.div
            animate={{ y: ['-20%', '120%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rose-500 to-transparent pointer-events-none shadow-[0_0_10px_#F43F5E]"
          />

          {/* Record Title & Tags */}
          <div className="flex items-center justify-between text-[11px] text-white/70">
            <span className="flex items-center gap-1.5 font-bold text-white">
              <FileText className="w-3.5 h-3.5 text-violet-400" />
              PATIENT CHART #9921
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
              FHIR R4
            </span>
          </div>

          {/* Graphical Redacted Identity Tag */}
          <div className="flex items-center gap-2 py-1">
            <span className="text-[11px] text-white/60">Subject:</span>
            {masked ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-violet-600/30 border border-violet-400/60 text-violet-200 text-xs font-bold shadow-[0_0_12px_rgba(139,92,246,0.3)]">
                <Lock className="w-3 h-3 text-violet-300" />
                [REDACTED_PID_902]
              </span>
            ) : (
              <span className="px-2 py-1 rounded-md bg-rose-500/20 border border-rose-500/50 text-rose-300 text-xs font-bold underline">
                Sarah Jenkins (DOB: 1984)
              </span>
            )}
          </div>

          {/* Visual Clinical Badges */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px]">
            <span className="px-2 py-0.5 rounded bg-white/10 text-white/80 border border-white/15">
              SNOMED-CT 38666
            </span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ICD-10 Mapped
            </span>
            <span className="px-2 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
              HIPAA Verified
            </span>
          </div>
        </div>

        {/* Live Looping Animated ECG Heartbeat Line */}
        <div className="relative z-10 mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-rose-400 text-xs font-bold">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>Telemetry:</span>
          </div>

          <div className="flex-1 h-6 overflow-hidden">
            <svg viewBox="0 0 160 24" className="w-full h-full stroke-rose-400 fill-none">
              <path
                d="M 0 12 L 25 12 L 32 4 L 40 20 L 48 8 L 56 16 L 64 12 L 100 12 L 107 4 L 115 20 L 123 8 L 131 16 L 138 12 L 160 12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
            78 BPM · STABLE
          </span>
        </div>
      </div>

      {/* 2. Visual Metric Indicators */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2F5] shadow-xs flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 font-bold text-sm font-mono flex-shrink-0">
            -65%
          </div>
          <div>
            <div className="text-xs font-bold text-[#111014]">Admin Burden</div>
            <div className="text-[10px] text-[#666371]">Automated charting</div>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2F5] shadow-xs flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm font-mono flex-shrink-0">
            100%
          </div>
          <div>
            <div className="text-xs font-bold text-[#111014]">Physician Gate</div>
            <div className="text-[10px] text-[#666371]">Clinical oversight</div>
          </div>
        </div>
      </div>
    </div>
  );
};
