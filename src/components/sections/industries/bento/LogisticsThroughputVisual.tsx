import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, CheckCircle2, ArrowRight, RotateCw, Ship, Zap } from 'lucide-react';

export const LogisticsThroughputVisual: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="space-y-4 select-none">
      {/* 1. Main Graphic Scene: Intermodal Port Corridor Route Illustration */}
      <div className="relative p-5 rounded-2xl bg-gradient-to-b from-[#181326] via-[#1E1733] to-[#141024] border border-[#352A54] shadow-xl overflow-hidden text-white font-mono">
        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5 mb-4">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-amber-400" />
            <span className="text-xs uppercase tracking-wider text-white font-bold">
              AUTONOMOUS PORT CORRIDOR
            </span>
          </div>

          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
            EDI LIVE
          </span>
        </div>

        {/* Illustrated 3-Node Corridor Route */}
        <div className="relative z-10 py-3">
          {/* Animated SVG Path connecting Port to Truck */}
          <div className="absolute top-[32px] left-[15%] right-[15%] h-[3px] bg-violet-950 rounded-full overflow-hidden">
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_8px_#FBBF24]"
            />
          </div>

          <div className="grid grid-cols-3 gap-2 relative">
            {/* Node 1: Vessel Berth */}
            <div
              onClick={() => setActiveStep(0)}
              className={`p-2.5 rounded-xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                activeStep === 0
                  ? 'bg-amber-500/20 border-amber-400 shadow-md'
                  : 'bg-white/5 border-white/10 opacity-70'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-300 mb-1">
                <Ship className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-white">Berth Ingest</span>
              <span className="text-[9px] text-white/50">0.2h</span>
            </div>

            {/* Node 2: AI Customs Gate */}
            <div
              onClick={() => setActiveStep(1)}
              className={`p-2.5 rounded-xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                activeStep === 1
                  ? 'bg-violet-600/30 border-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                  : 'bg-white/5 border-white/10 opacity-70'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-violet-500/30 flex items-center justify-center text-violet-300 mb-1">
                <Zap className="w-4 h-4 text-violet-300" />
              </div>
              <span className="text-[10px] font-bold text-white">Customs AI</span>
              <span className="text-[9px] text-emerald-300 font-bold">1.4h Gate</span>
            </div>

            {/* Node 3: Fleet Dispatch */}
            <div
              onClick={() => setActiveStep(2)}
              className={`p-2.5 rounded-xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                activeStep === 2
                  ? 'bg-emerald-500/20 border-emerald-400 shadow-md'
                  : 'bg-white/5 border-white/10 opacity-70'
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-300 mb-1">
                <Truck className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-bold text-white">Fleet Yard</span>
              <span className="text-[9px] text-white/50">Dispatched</span>
            </div>
          </div>
        </div>

        {/* Visual Speed Comparison Bars (Pure Infographic) */}
        <div className="relative z-10 mt-3 p-3 rounded-xl bg-white/5 border border-white/10 space-y-2">
          <div className="flex items-center justify-between text-[11px]">
            <span className="text-white/60">Clearance Speedup:</span>
            <span className="text-amber-300 font-bold">4.2x Faster</span>
          </div>

          {/* Bar 1: Manual */}
          <div className="space-y-1">
            <div className="flex justify-between text-[9.5px] text-white/50">
              <span>Manual Clearance</span>
              <span>8.2 Hours</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="w-[85%] h-full bg-white/30 rounded-full" />
            </div>
          </div>

          {/* Bar 2: AI */}
          <div className="space-y-1">
            <div className="flex justify-between text-[9.5px] text-white font-semibold">
              <span className="text-violet-300">Brombeer Autonomous Flow</span>
              <span className="text-emerald-400 font-bold">1.4 Hours</span>
            </div>
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="w-[22%] h-full bg-gradient-to-r from-violet-400 to-emerald-400 rounded-full shadow-[0_0_8px_#34D399]" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Visual Metric Indicators */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2F5] shadow-xs flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 font-bold text-sm font-mono flex-shrink-0">
            4.2x
          </div>
          <div>
            <div className="text-xs font-bold text-[#111014]">Speed Boost</div>
            <div className="text-[10px] text-[#666371]">Throughput rate</div>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2F5] shadow-xs flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm font-mono flex-shrink-0">
            98.6%
          </div>
          <div>
            <div className="text-xs font-bold text-[#111014]">Dwell Forecast</div>
            <div className="text-[10px] text-[#666371]">Yard prediction</div>
          </div>
        </div>
      </div>
    </div>
  );
};
