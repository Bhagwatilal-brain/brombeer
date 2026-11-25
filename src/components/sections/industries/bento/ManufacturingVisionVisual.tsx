import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Factory, Scan, CheckCircle2, AlertTriangle, Cpu, Crosshair } from 'lucide-react';

export const ManufacturingVisionVisual: React.FC = () => {
  const [defect, setDefect] = useState(false);

  return (
    <div className="space-y-4 select-none">
      {/* 1. High-Tech Computer Vision Reticle Graphic Scene */}
      <div className="relative p-5 rounded-2xl bg-[#090812] border border-[#262038] shadow-2xl overflow-hidden text-white font-mono">
        {/* Top Camera Line HUD */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${defect ? 'bg-rose-500 animate-ping' : 'bg-emerald-400 animate-pulse'}`} />
            <span className="text-xs uppercase tracking-wider text-white font-bold">
              EDGE RETICLE · 60 FPS
            </span>
          </div>

          <button
            onClick={() => setDefect(!defect)}
            className={`px-2.5 py-1 rounded-full text-[10.5px] border transition-all cursor-pointer active:scale-95 ${
              defect
                ? 'bg-rose-500/25 border-rose-400 text-rose-200'
                : 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
            }`}
          >
            {defect ? 'Clear Defect' : 'Inject Micro-Defect'}
          </button>
        </div>

        {/* Viewfinder Graphic Window with Crosshairs */}
        <div className="relative z-10 p-4 rounded-xl bg-black/60 border border-white/10 flex flex-col items-center justify-center min-h-[120px] overflow-hidden">
          {/* Subtle Grid Reticle */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #10B981 1px, transparent 1px), linear-gradient(to bottom, #10B981 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          {/* Animated Component (Gear/Die) */}
          <div className="relative w-16 h-16 rounded-2xl border border-white/30 flex items-center justify-center mb-2 bg-white/5">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
              className="w-12 h-12 rounded-xl border border-dashed border-white/40 flex items-center justify-center"
            >
              <Crosshair className="w-6 h-6 text-emerald-400" />
            </motion.div>
          </div>

          {/* Laser Corner Reticle Target Box */}
          <div
            className={`w-[85%] max-w-[260px] p-2 rounded-lg border flex items-center justify-between text-xs transition-colors duration-300 ${
              defect
                ? 'border-rose-500 bg-rose-950/40 shadow-[0_0_15px_rgba(244,63,94,0.4)] text-rose-200'
                : 'border-emerald-400 bg-emerald-950/30 shadow-[0_0_15px_rgba(52,211,153,0.3)] text-emerald-200'
            }`}
          >
            <div className="flex items-center gap-1.5 font-bold">
              {defect ? (
                <>
                  <AlertTriangle className="w-4 h-4 text-rose-400 animate-bounce" />
                  <span>BURR: +0.042mm</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>TOLERANCE PASS</span>
                </>
              )}
            </div>
            <span className="text-[10px] opacity-75 font-mono">11.4ms Edge</span>
          </div>
        </div>

        {/* Bottom Hardware Tag */}
        <div className="relative z-10 mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
          <span className="flex items-center gap-1.5 text-emerald-300">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            TensorRT GPU Accelerated
          </span>
          <span className="text-white/80 font-bold">Zero Cloud Stream</span>
        </div>
      </div>

      {/* 2. Visual Metric Indicators */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2F5] shadow-xs flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm font-mono flex-shrink-0">
            -38%
          </div>
          <div>
            <div className="text-xs font-bold text-[#111014]">Scrap Cut</div>
            <div className="text-[10px] text-[#666371]">Factory waste reduction</div>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2F5] shadow-xs flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-violet-100 border border-violet-200 flex items-center justify-center text-violet-primary font-bold text-sm font-mono flex-shrink-0">
            &lt;12ms
          </div>
          <div>
            <div className="text-xs font-bold text-[#111014]">Latency</div>
            <div className="text-[10px] text-[#666371]">Real-time edge FPS</div>
          </div>
        </div>
      </div>
    </div>
  );
};
