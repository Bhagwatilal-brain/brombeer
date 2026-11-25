import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Check, Lock, Sparkles, FileText, ArrowRight, Play, Clock, Zap } from 'lucide-react';

export const GovernmentWorkflowVisual: React.FC = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verified, setVerified] = useState(true);

  const handleSimulate = () => {
    setIsVerifying(true);
    setVerified(false);
    setTimeout(() => {
      setIsVerifying(false);
      setVerified(true);
    }, 1100);
  };

  return (
    <div className="space-y-5 select-none">
      {/* Visual Storyline: The Sovereign Verification Journey */}
      <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#141026] via-[#1A1432] to-[#110E20] border border-[#352A56] shadow-xl overflow-hidden text-white">
        {/* Ambient Violet Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[200px] bg-violet-600/25 rounded-full blur-[80px] pointer-events-none" />

        {/* Story Header Strip */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-white font-bold">
              THE SOVEREIGN CIVIC JOURNEY
            </span>
          </div>

          <button
            onClick={handleSimulate}
            disabled={isVerifying}
            className="group px-3 py-1 rounded-full bg-violet-500/25 hover:bg-violet-500/40 border border-violet-400/40 text-[11px] font-mono text-violet-200 transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 shadow-sm"
          >
            <Play className={`w-3 h-3 text-violet-300 ${isVerifying ? 'animate-spin' : 'group-hover:translate-x-0.5 transition-transform'}`} />
            <span>{isVerifying ? 'Verifying...' : 'Simulate Casework'}</span>
          </button>
        </div>

        {/* 3-Act Visual Story Graphics (Pure Visual Metaphor) */}
        <div className="relative z-10 grid grid-cols-3 gap-2 sm:gap-4 items-center py-2">
          {/* Act 1: Citizen Ingestion */}
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-2xl bg-white/10 border border-white/20 p-2 shadow-lg flex flex-col justify-between backdrop-blur-md">
              <div className="flex items-center justify-between">
                <FileText className="w-4 h-4 text-violet-300" />
                <span className="w-2 h-2 rounded-full bg-violet-400" />
              </div>
              <div className="space-y-1 my-auto">
                <div className="w-full h-1 rounded bg-white/50" />
                <div className="w-4/5 h-1 rounded bg-white/30" />
                <div className="w-3/5 h-1 rounded bg-white/30" />
              </div>
              <span className="text-[9px] font-mono text-white/80 bg-white/10 rounded px-1 py-0.5">
                APPLICATION
              </span>
            </div>
            <span className="text-xs font-mono font-bold text-white/90">01. CITIZEN</span>
          </div>

          {/* Act 2: Sovereign Enclave & Laser Cross-Ref */}
          <div className="flex flex-col items-center justify-center relative">
            {/* Animated Laser Stream */}
            <div className="w-full h-[3px] bg-violet-950 rounded-full relative overflow-hidden my-2">
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
                className="w-1/2 h-full bg-gradient-to-r from-transparent via-violet-300 to-transparent shadow-[0_0_8px_#A78BFA]"
              />
            </div>

            {/* Glowing Sovereign Vault Core */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 border-2 border-violet-300/60 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.6)]">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-2xl border border-dashed border-white/40"
              />
              <Shield className="w-7 h-7 text-white drop-shadow" />
            </div>
            <span className="text-xs font-mono font-bold text-violet-300 mt-2">
              02. ENCLAVE
            </span>
          </div>

          {/* Act 3: Holographic Audited Seal */}
          <div className="flex flex-col items-center text-center space-y-2">
            <motion.div
              animate={verified ? { scale: [0.95, 1.05, 1], opacity: 1 } : { opacity: 0.4 }}
              transition={{ duration: 0.3 }}
              className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-2xl bg-emerald-950/40 border-2 border-emerald-400/60 p-2 shadow-[0_0_25px_rgba(52,211,153,0.3)] flex flex-col items-center justify-center backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/25 border border-emerald-400 flex items-center justify-center text-emerald-300 mb-1">
                <Check className="w-6 h-6 stroke-[3]" />
              </div>
              <span className="text-[9px] font-mono font-bold text-emerald-300 tracking-wider">
                AUDITED
              </span>
            </motion.div>
            <span className="text-xs font-mono font-bold text-emerald-400">
              03. SIGNED
            </span>
          </div>
        </div>

        {/* Narrative Velocity Comparison Bar: From 4 Days to Instant */}
        <div className="relative z-10 mt-4 p-3 rounded-xl bg-white/5 border border-white/10 space-y-2 font-mono">
          <div className="flex items-center justify-between text-xs">
            <span className="text-white/70">The Transformation:</span>
            <span className="text-emerald-400 font-bold">140ms Sovereign Resolution</span>
          </div>

          {/* Before: Manual */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-white/50">
              <span>Legacy Bureaucracy</span>
              <span>4.5 Days</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="w-[88%] h-full bg-white/30 rounded-full" />
            </div>
          </div>

          {/* After: Brombeer AI */}
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-white font-semibold">
              <span className="text-violet-300">Brombeer Sovereign AI</span>
              <span className="text-emerald-400 font-bold">1.2 Seconds (-72% Backlog)</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="w-[18%] h-full bg-gradient-to-r from-violet-400 to-emerald-400 rounded-full shadow-[0_0_10px_#34D399]" />
            </div>
          </div>
        </div>
      </div>

      {/* Visual Metric Pillars (Bold & Punchy) */}
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2F5] shadow-xs flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-violet-100 border border-violet-200 flex items-center justify-center text-violet-primary font-bold text-sm font-mono flex-shrink-0">
            -72%
          </div>
          <div>
            <div className="text-xs font-bold text-[#111014]">Backlog Slashed</div>
            <div className="text-[10px] text-[#666371]">Casework turnaround</div>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white border border-[#E8E2F5] shadow-xs flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm font-mono flex-shrink-0">
            0 B
          </div>
          <div>
            <div className="text-xs font-bold text-[#111014]">Cloud Leakage</div>
            <div className="text-[10px] text-[#666371]">100% sovereign perimeter</div>
          </div>
        </div>
      </div>
    </div>
  );
};
