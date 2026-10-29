import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Cpu, Bot, CheckCircle2, ShieldAlert, Sparkles, ArrowRight, Activity, Terminal } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

interface PipelineStage {
  id: string;
  step: string;
  name: string;
  tagline: string;
  icon: any;
  status: string;
  telemetry: string;
  description: string;
  badges: string[];
}

export const NeuralPipeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1);

  const stages: PipelineStage[] = [
    {
      id: 'ingestion',
      step: '01',
      name: 'Enterprise Data Mesh',
      tagline: 'Multi-Modal Ingestion & Indexing',
      icon: Database,
      status: 'Active Feed • 4.8 TB Indexed',
      telemetry: 'Zero unauthorized leakage • Role-filtered vectors',
      description: 'Ingests heterogeneous data streams across ERP systems, technical wikis, document PDFs, and secure APIs, applying user-level access partitioning before embedding.',
      badges: ['Hybrid BM25 + Dense Vectors', 'SAML/OAuth Role Tagging', 'Data Minimization'],
    },
    {
      id: 'cognitive',
      step: '02',
      name: 'Brombeer Cognitive Core',
      tagline: 'RAG Reasoning & Agentic Routing',
      icon: Cpu,
      status: 'Real-Time Inference • 38ms',
      telemetry: 'Factual verification gate • Deterministic policy check',
      description: 'Our proprietary multi-agent orchestrator evaluates intent, retrieves verified context passages, calibrates model confidence, and executes strict anti-hallucination guardrails.',
      badges: ['Self-Reranking Passages', 'Guardrail Sanitization', 'Model-Agnostic LLMs'],
    },
    {
      id: 'execution',
      step: '03',
      name: 'Autonomous Action & Governance',
      tagline: 'Audited Execution & Human Approval',
      icon: Bot,
      status: '100% Audit Logged',
      telemetry: 'Human-in-the-loop triggers on consequential actions',
      description: 'Executes approved API transactions into downstream business workflows, drafts documents with clickable source citations, and routes edge cases to managerial review.',
      badges: ['One-Click Human Approval', 'Immutable Audit Trails', 'ERP & CRM Writeback'],
    },
  ];

  return (
    <div className="w-full space-y-8">
      {/* Interactive Stage Selectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stages.map((stg, idx) => {
          const Icon = stg.icon;
          const isActive = activeStage === idx;

          return (
            <button
              key={stg.id}
              onClick={() => setActiveStage(idx)}
              className={`text-left p-6 rounded-3xl transition-all duration-300 border relative overflow-hidden group ${
                isActive
                  ? 'bg-white border-violet-primary/50 shadow-xl shadow-violet-primary/10 ring-1 ring-violet-primary/30'
                  : 'bg-white/60 border-white/90 hover:bg-white hover:border-violet-light/50'
              }`}
            >
              {/* Subtle top indicator beam */}
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-primary via-violet-light to-violet-deep" />
              )}

              <div className="flex items-center justify-between mb-4">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${
                    isActive
                      ? 'bg-violet-primary text-white'
                      : 'bg-surface-lavender text-text-secondary group-hover:bg-violet-light/20'
                  }`}
                >
                  {stg.step}
                </span>
                <span className="text-[11px] font-mono text-text-secondary flex items-center gap-1.5">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-emerald-500 animate-pulse' : 'bg-border-subtle'
                    }`}
                  />
                  STAGE {idx + 1}
                </span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-violet-primary' : 'text-text-secondary'}`} />
                  <h4 className="font-semibold text-base text-text-primary tracking-tight">
                    {stg.name}
                  </h4>
                </div>
                <p className="text-xs text-text-secondary font-medium">{stg.tagline}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Visual Live Pipeline Simulation Box */}
      <SpotlightCard className="p-8 sm:p-10 bg-white/85 border border-white/95 rounded-[2.5rem] shadow-2xl shadow-violet-primary/5 relative overflow-hidden">
        {/* Soft Ambient Refraction Background */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-violet-light/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Narrative Detail */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-surface-lavender text-violet-primary font-mono text-xs font-semibold border border-violet-light/40">
                ACTIVE PIPELINE NODE: {stages[activeStage].step}
              </span>
              <span className="text-xs text-text-secondary flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-emerald-500" />
                {stages[activeStage].status}
              </span>
            </div>

            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-text-primary tracking-tight leading-tight">
              {stages[activeStage].name}
            </h3>

            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              {stages[activeStage].description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {stages[activeStage].badges.map((badge, bIdx) => (
                <span
                  key={bIdx}
                  className="px-3 py-1.5 rounded-xl bg-surface-lavender/60 text-text-primary text-xs font-medium border border-white flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-primary" />
                  {badge}
                </span>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF9FF] border border-border-subtle/50 text-xs text-text-secondary flex items-center justify-between">
              <span className="font-mono text-violet-deep">{stages[activeStage].telemetry}</span>
              <span className="text-violet-primary font-semibold text-[11px] uppercase tracking-wider">
                Audited
              </span>
            </div>
          </div>

          {/* Right Architecture Topology Graphic */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#111014] to-[#1E1730] p-6 sm:p-7 rounded-3xl text-white shadow-xl relative overflow-hidden">
            {/* Ambient terminal glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-primary/30 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-white/60">
              <span className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-violet-light" />
                live_topology.sh
              </span>
              <span className="text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                100% ONLINE
              </span>
            </div>

            <div className="space-y-4 pt-4 text-xs font-mono">
              <div className={`p-3 rounded-xl transition-all duration-300 ${activeStage === 0 ? 'bg-violet-primary/20 border border-violet-primary/40 ring-1 ring-violet-primary/40' : 'bg-white/5 border border-white/10'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-violet-light font-semibold">1. DATA_FABRIC_INGESTION</span>
                  {activeStage === 0 && <span className="text-[10px] bg-violet-primary px-2 py-0.5 rounded text-white font-bold">CURRENT</span>}
                </div>
                <div className="text-white/60 text-[11px] mt-1">→ Chunking 1,420 Enterprise Schemas</div>
                <div className="text-emerald-400 text-[11px]">✓ Embeddings synced (1536 dim)</div>
              </div>

              <div className={`p-3 rounded-xl transition-all duration-300 ${activeStage === 1 ? 'bg-violet-primary/20 border border-violet-primary/40 ring-1 ring-violet-primary/40' : 'bg-white/5 border border-white/10'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">2. BROMBEER_CORE</span>
                  {activeStage === 1 && <span className="text-[10px] bg-violet-primary px-2 py-0.5 rounded text-white font-bold">CURRENT</span>}
                </div>
                <div className="text-violet-light text-[11px] mt-1">→ RAG Re-ranking + Cross-Attention</div>
                <div className="text-white/80 text-[11px]">→ Grounding accuracy: 99.8%</div>
              </div>

              <div className={`p-3 rounded-xl transition-all duration-300 ${activeStage === 2 ? 'bg-violet-primary/20 border border-violet-primary/40 ring-1 ring-violet-primary/40' : 'bg-white/5 border border-white/10'}`}>
                <div className="flex items-center justify-between">
                  <span className="text-white/80 font-semibold">3. DETERMINISTIC_EXECUTION</span>
                  {activeStage === 2 && <span className="text-[10px] bg-violet-primary px-2 py-0.5 rounded text-white font-bold">CURRENT</span>}
                </div>
                <div className="text-white/60 text-[11px] mt-1">→ Human Approval Gate passed</div>
                <div className="text-emerald-400 text-[11px]">✓ State writeback confirmed</div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-[11px] text-white/50 border-t border-white/10 mt-4">
              <span>Latency: 38ms</span>
              <span>Abu Dhabi Node</span>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </div>
  );
};