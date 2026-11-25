import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, FileText, Lock, Sparkles, Cpu, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const EnterpriseKnowledgeVisual: React.FC = () => {
  const [activeSilo, setActiveSilo] = useState(0);

  const silos = [
    { name: 'Legal MSAs', icon: '📄', tag: 'Page 42 § 14.2', color: 'from-violet-500 to-indigo-600' },
    { name: 'SharePoint', icon: '📑', tag: 'Enclave Doc', color: 'from-teal-500 to-emerald-600' },
    { name: 'Salesforce', icon: '📊', tag: 'Opp #9012', color: 'from-blue-500 to-cyan-600' },
    { name: 'ERP Ledger', icon: '📈', tag: 'Row 8820', color: 'from-amber-500 to-orange-600' },
  ];

  return (
    <div className="space-y-4 select-none">
      {/* 1. Main Graphic Scene: Multi-Silo Neural Constellation Illustration */}
      <div className="relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#141026] via-[#1B1533] to-[#120E22] border border-[#332A54] shadow-xl overflow-hidden text-white font-mono">
        {/* Ambient Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[200px] bg-violet-600/25 rounded-full blur-[80px] pointer-events-none" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-xs uppercase tracking-wider text-white font-bold">
              MULTI-SILO NEURAL CONVERGENCE
            </span>
          </div>

          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" />
            SAML RBAC AUDITED
          </span>
        </div>

        {/* Illustrated Constellation Network */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {silos.map((s, idx) => {
            const isSelected = activeSilo === idx;
            return (
              <div
                key={s.name}
                onClick={() => setActiveSilo(idx)}
                className={`p-3 rounded-xl border flex flex-col items-center text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-violet-600/30 border-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.4)] scale-102'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 opacity-70'
                }`}
              >
                <div className="text-2xl mb-1">{s.icon}</div>
                <div className="text-xs font-bold text-white tracking-wide">{s.name}</div>
                <div className="text-[9.5px] text-violet-300 mt-0.5">{s.tag}</div>
              </div>
            );
          })}
        </div>

        {/* Central Illustrated Neural Core & Verified Citation Beam */}
        <div className="relative z-10 p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-3 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 border border-violet-300/50 flex items-center justify-center text-white shadow-lg flex-shrink-0">
              <Sparkles className="w-5 h-5 text-violet-200" />
            </div>
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Deterministic Grounded Citation Active</span>
              </div>
              <div className="text-[10.5px] text-white/60">
                Source: {silos[activeSilo].name} · Verified Against Sovereign Knowledge Index
              </div>
            </div>
          </div>

          <span className="text-[10px] text-violet-300 font-bold bg-violet-950/60 px-2.5 py-1 rounded-md border border-violet-400/40">
            0% Hallucination
          </span>
        </div>

        {/* Bottom Guarantee */}
        <div className="relative z-10 mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
          <span className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-violet-400" />
            Zero Training on Customer Data
          </span>
          <span className="text-emerald-400 font-bold">SOC2 / ISO 27001 Ready</span>
        </div>
      </div>
    </div>
  );
};
