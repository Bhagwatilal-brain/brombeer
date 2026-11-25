import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Radio, Cpu, ShieldAlert, Zap } from 'lucide-react';

export const DefenceAirGapVisual: React.FC = () => {
  const [pingActive, setPingActive] = useState(false);

  const triggerPing = () => {
    setPingActive(true);
    setTimeout(() => setPingActive(false), 2000);
  };

  return (
    <div className="space-y-4 select-none">
      {/* 1. Tactical Radar & Physical Air-Gap Boundary Graphic Scene */}
      <div className="relative p-5 sm:p-6 rounded-2xl bg-[#0B0914] border border-[#2B2342] shadow-2xl overflow-hidden text-white font-mono">
        {/* Subtle Radar Background Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <div className="w-64 h-64 rounded-full border border-violet-400" />
          <div className="absolute w-44 h-44 rounded-full border border-violet-400" />
          <div className="absolute w-24 h-24 rounded-full border border-violet-400" />
          <div className="absolute w-full h-[1px] bg-violet-400" />
          <div className="absolute h-full w-[1px] bg-violet-400" />
        </div>

        {/* Continuous Radar Sweep Beam */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-64 h-64 rounded-full relative animate-spin"
            style={{ animationDuration: '4s', animationTimingFunction: 'linear' }}
          >
            <div className="absolute top-1/2 left-1/2 w-32 h-[2px] bg-gradient-to-r from-violet-400 to-transparent origin-left shadow-[0_0_12px_#A78BFA]" />
          </div>
        </div>

        {/* Top Radar Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-ping" />
            <span className="text-xs uppercase tracking-wider text-white font-bold">
              DEFENCE AIR-GAP RADAR
            </span>
          </div>

          <button
            onClick={triggerPing}
            className="px-3 py-1 rounded-full bg-violet-500/20 hover:bg-violet-500/35 border border-violet-400/40 text-[11px] text-violet-200 transition-colors cursor-pointer flex items-center gap-1.5 active:scale-95"
          >
            <Radio className={`w-3.5 h-3.5 text-violet-300 ${pingActive ? 'animate-pulse' : ''}`} />
            <span>{pingActive ? 'Tracking...' : 'Sonar Sweep'}</span>
          </button>
        </div>

        {/* Illustrated Dual Enclaves & Physical Air-Gap Barrier */}
        <div className="relative z-10 my-2 space-y-2">
          {/* Internal Tactical Cluster Platform */}
          <div className="p-3 rounded-xl bg-[#151128] border border-violet-500/40 flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-600/30 border border-violet-400/50 flex items-center justify-center text-violet-300">
                <Cpu className="w-5 h-5 drop-shadow" />
              </div>
              <div>
                <div className="text-xs font-bold text-white tracking-wide">Tactical Edge Core</div>
                <div className="text-[10px] text-violet-300/80">Local Weights · Cryptographic Proof</div>
              </div>
            </div>

            <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold">
              99.4% READY
            </span>
          </div>

          {/* Glowing Animated Air-Gap Laser Barrier */}
          <div className="relative py-2 flex items-center justify-center">
            <div className="w-full h-[2.5px] bg-gradient-to-r from-transparent via-violet-400 to-transparent relative overflow-hidden shadow-[0_0_12px_#A78BFA]">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="w-1/3 h-full bg-white shadow-[0_0_10px_#FFFFFF]"
              />
            </div>
            <div className="absolute px-3 py-0.5 rounded-full bg-[#0D0B16] border border-violet-400/70 text-[9px] text-violet-200 tracking-widest font-bold flex items-center gap-1 shadow-md">
              <Lock className="w-2.5 h-2.5 text-violet-300" />
              <span>HARDWARE AIR-GAP BARRIER</span>
            </div>
          </div>

          {/* External Network: Blocked Exfiltration Graphic */}
          <div className="p-3 rounded-xl bg-[#120F1D] border border-rose-900/40 flex items-center justify-between text-white/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-950/40 border border-rose-500/40 flex items-center justify-center text-rose-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white/90 tracking-wide">Public Network Boundary</div>
                <div className="text-[10px] text-white/50">Zero Inbound / Outbound Leaks</div>
              </div>
            </div>

            <span className="px-2.5 py-1 rounded-md bg-rose-500/20 border border-rose-500/40 text-rose-300 text-[10px] font-bold">
              0 BYTES LEAKED
            </span>
          </div>
        </div>

        {/* Bottom Status Telemetry */}
        <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <Zap className="w-3.5 h-3.5" />
            100% On-Premise Execution
          </span>
          <span className="text-violet-300">&lt;280ms Deterministic</span>
        </div>
      </div>

      {/* 2. Visual Metric Indicators */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2F5] shadow-xs flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-violet-100 border border-violet-200 flex items-center justify-center text-violet-primary font-bold text-sm font-mono flex-shrink-0">
            100%
          </div>
          <div>
            <div className="text-xs font-bold text-[#111014]">On-Premises</div>
            <div className="text-[10px] text-[#666371]">Air-gapped edge</div>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2F5] shadow-xs flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm font-mono flex-shrink-0">
            99.4%
          </div>
          <div>
            <div className="text-xs font-bold text-[#111014]">Readiness</div>
            <div className="text-[10px] text-[#666371]">Fleet availability</div>
          </div>
        </div>
      </div>
    </div>
  );
};
