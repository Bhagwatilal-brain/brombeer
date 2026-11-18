import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bot, Eye, TrendingUp, ArrowRight, ShieldCheck, Zap, Lock, Terminal, Cpu } from 'lucide-react';
import { Container } from '../../layout/Container';
import { Button } from '../../ui/Button';

interface CapabilityPill {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  telemetry: string;
  subtext: string;
  color: string;
  gradient: string;
}

const CAPABILITY_NODES: CapabilityPill[] = [
  {
    id: 'llm',
    name: 'Private LLMs & RAG',
    category: 'LANGUAGE INTELLIGENCE',
    icon: Sparkles,
    telemetry: '148 tok/s • 18ms latency',
    subtext: 'Factual grounding with anti-hallucination verification gates',
    color: '#7650E8',
    gradient: 'from-[#7650E8] to-[#9D7DFF]',
  },
  {
    id: 'agents',
    name: 'Autonomous Multi-Agents',
    category: 'WORKFLOW ORCHESTRATION',
    icon: Bot,
    telemetry: 'Multi-Tool Execution • Audit Logged',
    subtext: 'Coordinates complex ERP and database tasks with human oversight',
    color: '#3B82F6',
    gradient: 'from-[#2563EB] to-[#60A5FA]',
  },
  {
    id: 'vision',
    name: 'Computer Vision HUD',
    category: 'SPATIAL & VISUAL AI',
    icon: Eye,
    telemetry: '60 FPS Line Speed • ±0.01mm',
    subtext: 'Real-time industrial defect classification and object tracking',
    color: '#10B981',
    gradient: 'from-[#059669] to-[#34D399]',
  },
  {
    id: 'predictive',
    name: 'Predictive Horizon ML',
    category: 'TIME-SERIES FORECASTING',
    icon: TrendingUp,
    telemetry: 'Q4 Projections • Anomaly Beacons',
    subtext: 'Learns transaction curves to anticipate inventory demand shifts',
    color: '#F59E0B',
    gradient: 'from-[#D97706] to-[#FBBF24]',
  },
];

export const VisualHeroSection: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('llm');
  const activeNode = CAPABILITY_NODES.find((n) => n.id === activeNodeId) || CAPABILITY_NODES[0];
  const ActiveIcon = activeNode.icon;

  return (
    <section className="relative pt-6 sm:pt-8 lg:pt-10 pb-14 sm:pb-20 overflow-hidden">
      {/* Background Ambient Radial Glows */}
      <div className="absolute -top-24 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#E2D9F8]/40 via-[#EDE7FB]/20 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#FAF6FE]/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Razor-Sharp, Human Copywriting & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-violet-primary/20 shadow-xs text-xs font-semibold text-violet-primary">
              <span className="w-2 h-2 rounded-full bg-violet-primary animate-pulse" />
              <span>ENTERPRISE ARTIFICIAL INTELLIGENCE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-sans font-extrabold text-[#111014] tracking-[-0.035em] leading-[1.04]">
              Real-World AI.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary via-[#8A63F8] to-violet-deep">
                Engineered for Action.
              </span>
            </h1>

            <p className="text-base sm:text-lg font-dm text-[#555162] leading-relaxed max-w-xl">
              Private foundation models, autonomous agent pipelines, and high-speed computer vision — built around your data, governed with strict human oversight, and deployed within sovereign boundaries.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                asLink
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-xl shadow-violet-primary/25 hover:scale-[1.02] transition-transform"
              >
                Schedule Technical Review
              </Button>

              <Button
                asLink
                href="#studios"
                variant="secondary"
                size="lg"
                className="border-[#111014]/20 hover:border-violet-primary hover:bg-[#FAF9FF]"
              >
                Explore 4 Core Studios
              </Button>
            </div>

            {/* Live Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-dm text-[#666371]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Data Retention</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-violet-primary" />
                <span>Sub-350ms RAG Latency</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-blue-600" />
                <span>UAE Sovereign Ready</span>
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Neural Engine Visualizer */}
          <div className="lg:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-[2.25rem] bg-gradient-to-b from-white via-white to-[#F8F5FE] border border-violet-primary/25 shadow-[0_20px_50px_-15px_rgba(118,80,232,0.12)] overflow-hidden select-none">
              {/* Header Ticker */}
              <div className="flex items-center justify-between pb-4 border-b border-[#EFEBF6]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-[#111014] tracking-tight">
                    BROMBEER_AI_CORE // RUNTIME v3.4
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#EDE7FB] text-violet-primary font-bold">
                  LIVE CLUSTER
                </span>
              </div>

              {/* Interactive Core Display */}
              <div className="py-6 sm:py-8 flex flex-col items-center justify-center relative">
                {/* Central Crystalline Brain Orb with Radiating Pulses */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center my-2">
                  {/* Concentric Glowing Wave Rings */}
                  <span className="absolute inset-0 rounded-full bg-violet-primary/10 animate-ping opacity-40 pointer-events-none" />
                  <span className="absolute -inset-3 rounded-full border border-violet-primary/25 border-dashed pointer-events-none" />
                  <span className="absolute -inset-6 rounded-full border border-violet-primary/15 pointer-events-none" />

                  {/* Orb Center */}
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#6542DF] via-[#7650E8] to-[#9D7DFF] shadow-xl shadow-violet-primary/35 flex items-center justify-center text-white border-2 border-white/60 relative z-10">
                    <ActiveIcon className="w-10 h-10 transition-all duration-300 transform scale-100" />
                  </div>
                </div>

                {/* Dynamic Telemetry Banner */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNode.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="text-center mt-3 max-w-sm"
                  >
                    <span className="text-[10px] font-mono font-bold tracking-widest text-violet-primary uppercase block mb-1">
                      {activeNode.category}
                    </span>
                    <h3 className="text-lg font-sans font-extrabold text-[#111014] tracking-tight">
                      {activeNode.name}
                    </h3>
                    <div className="mt-1.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9FF] border border-violet-primary/20 text-xs font-mono font-semibold text-violet-primary">
                      <span>{activeNode.telemetry}</span>
                    </div>
                    <p className="text-xs font-dm text-[#666371] mt-2 leading-relaxed">
                      {activeNode.subtext}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* 4 Interactive Capability Nodes Switcher (Clickable Pills) */}
              <div className="pt-4 border-t border-[#EFEBF6] grid grid-cols-2 sm:grid-cols-4 gap-2">
                {CAPABILITY_NODES.map((node) => {
                  const isSelected = activeNodeId === node.id;
                  const Icon = node.icon;
                  return (
                    <button
                      key={node.id}
                      onClick={() => setActiveNodeId(node.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between group ${
                        isSelected
                          ? 'bg-[#F4EFFF] border-violet-primary shadow-xs'
                          : 'bg-white border-[#E8E2F4] hover:border-violet-primary/40 hover:bg-[#FAF9FF]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <Icon className={`w-4 h-4 ${isSelected ? 'text-violet-primary' : 'text-[#8E869E] group-hover:text-violet-primary'}`} />
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-violet-primary' : 'bg-transparent'}`} />
                      </div>
                      <span className={`text-[11px] font-dm font-bold leading-tight block ${isSelected ? 'text-[#111014]' : 'text-[#555162]'}`}>
                        {node.name.split(' ')[0]} {node.name.split(' ')[1] || ''}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

