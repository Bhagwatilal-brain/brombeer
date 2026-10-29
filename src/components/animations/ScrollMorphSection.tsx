import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowUpRight, CheckCircle2, ArrowRight, Activity, Sparkles } from 'lucide-react';
import { USE_CASES } from '../../data/useCases';
import { Button } from '../ui/Button';

interface CaseMetrics {
  kpi1: string;
  label1: string;
  kpi2: string;
  label2: string;
  pipeline: [string, string, string];
}

const CASE_METRICS: Record<string, CaseMetrics> = {
  'knowledge-assistant': {
    kpi1: '75%',
    label1: 'Reduction in Search Time',
    kpi2: '100%',
    label2: 'Source Citation Grounded',
    pipeline: ['Secure Document Mesh', 'Hybrid BM25 + Vectors', 'Audited Synthesis'],
  },
  'document-processing': {
    kpi1: '80%',
    label1: 'Faster Document Turnaround',
    kpi2: '99.4%',
    label2: 'Key-Value Extraction Accuracy',
    pipeline: ['Multi-Page Ingestion', 'Field & Table Parsing', 'ERP Auto-Reconciliation'],
  },
  'customer-service': {
    kpi1: '60%',
    label1: 'First-Contact Self-Service',
    kpi2: '< 1.8s',
    label2: 'Instant Response Latency',
    pipeline: ['Intent Classification', 'Knowledge Grounding', 'Human Escalation Gate'],
  },
  'predictive-inventory': {
    kpi1: '35%',
    label1: 'Reduction in Stockouts',
    kpi2: '4.2x',
    label2: 'Faster Forecasting Cycle',
    pipeline: ['Telemetry Ingestion', 'Time-Series Modeling', 'Autonomous Reorder Alert'],
  },
  'visual-inspection': {
    kpi1: '99.8%',
    label1: 'Defect Catch Precision',
    kpi2: '< 15ms',
    label2: 'Edge Line-Speed Inference',
    pipeline: ['High-Speed Camera Feed', 'YOLO / Vision Backbone', 'Mechanical Diverter Trigger'],
  },
};

export const ScrollMorphSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = USE_CASES[activeIndex];
  const metrics = CASE_METRICS[activeCase.id] || CASE_METRICS['knowledge-assistant'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Step Navigation Sidebar */}
      <div className="lg:col-span-5 space-y-3">
        {USE_CASES.slice(0, 5).map((item, idx) => {
          const isActive = activeIndex === idx;
          return (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between group ${
                isActive
                  ? 'bg-white border-violet-primary/40 shadow-lg shadow-violet-primary/10 ring-1 ring-violet-primary/20'
                  : 'bg-white/50 border-white/80 hover:bg-white/80 hover:border-violet-light/50 text-text-secondary'
              }`}
            >
              <div className="flex items-center gap-3.5">
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                    isActive
                      ? 'bg-violet-primary text-white'
                      : 'bg-surface-lavender text-text-secondary group-hover:bg-violet-light/30'
                  }`}
                >
                  {item.number}
                </span>
                <div>
                  <h4 className={`text-sm sm:text-base font-semibold ${isActive ? 'text-text-primary' : 'text-text-secondary'}`}>
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-text-secondary/80 font-mono mt-0.5">
                    {CASE_METRICS[item.id]?.pipeline[0] || 'Enterprise AI'}
                  </p>
                </div>
              </div>
              <ChevronRight
                className={`w-4 h-4 transition-transform ${
                  isActive ? 'text-violet-primary translate-x-1' : 'text-text-secondary/40 group-hover:translate-x-0.5'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Morphing Visual Storytelling Panel */}
      <div className="lg:col-span-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white rounded-3xl p-7 md:p-9 border border-white/90 shadow-[0_20px_50px_rgba(118,80,232,0.08)] relative overflow-hidden"
          >
            {/* Soft Ambient Refraction */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-light/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Header Badges */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-surface-lavender text-violet-primary border border-violet-light/30">
                  Case Study {activeCase.number} • Production Ready
                </span>
                <span className="text-xs text-text-secondary font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Architecture
                </span>
              </div>

              {/* Headline & Punchy Synopsis */}
              <div>
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-text-primary leading-tight">
                  {activeCase.headline}
                </h3>
                <p className="text-text-secondary text-sm md:text-base mt-2.5 leading-relaxed font-dm font-normal">
                  {activeCase.solution}
                </p>
              </div>

              {/* Visual 3-Stage Workflow Ribbon */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9FF] border border-border-subtle/40 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8E7EB8] block font-semibold">
                  EXECUTION PIPELINE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {metrics.pipeline.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-border-subtle/30 shadow-xs">
                      <span className="w-5 h-5 rounded-full bg-surface-lavender text-violet-primary text-[11px] font-semibold flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-text-primary font-medium text-[11px] leading-tight">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2 Big Visual Impact Metrics */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-surface-lavender/30 border border-white">
                  <div className="font-sans text-3xl sm:text-4xl font-extrabold text-violet-primary">
                    {metrics.kpi1}
                  </div>
                  <div className="text-xs text-text-secondary mt-1 font-medium">
                    {metrics.label1}
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-surface-lavender/30 border border-white">
                  <div className="font-sans text-3xl sm:text-4xl font-extrabold text-violet-deep">
                    {metrics.kpi2}
                  </div>
                  <div className="text-xs text-text-secondary mt-1 font-medium">
                    {metrics.label2}
                  </div>
                </div>
              </div>

              {/* Action Button linking to Dedicated Page */}
              <div className="pt-2 flex items-center justify-between border-t border-border-subtle/30">
                <Button
                  asLink
                  href={`/use-cases#${activeCase.id}`}
                  variant="primary"
                  size="sm"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Read Full Architecture & Case Study
                </Button>
                <span className="text-xs text-text-secondary/70 font-mono hidden sm:inline">
                  SOC2 • UAE Sovereign
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};