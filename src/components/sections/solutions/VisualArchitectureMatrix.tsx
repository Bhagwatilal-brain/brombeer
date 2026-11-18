import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Shield, Zap, Lock, Cpu, Database, Eye } from 'lucide-react';
import { Container } from '../../layout/Container';

interface ComparisonRow {
  dimension: string;
  traditional: string;
  brombeer: string;
  icon: React.ComponentType<{ className?: string }>;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  {
    dimension: 'Data Privacy & Sovereignty',
    traditional: 'Prompts sent to third-party endpoints; risk of model training on enterprise IP.',
    brombeer: 'Zero Customer Data Retained. Deployed exclusively in authorized VPC & UAE sovereign tenancy.',
    icon: Lock,
  },
  {
    dimension: 'Output Verification & Accuracy',
    traditional: 'Probabilistic generation without source verification; hallucinations go unchecked.',
    brombeer: 'Anti-Hallucination verification gates mathematically match every claim to source passages.',
    icon: Shield,
  },
  {
    dimension: 'Autonomous Action Governance',
    traditional: 'Black-box tool calls executed without authorization trails or human rollback.',
    brombeer: 'Strict Human-in-the-Loop oversight; high-consequence operations require explicit signoff.',
    icon: Cpu,
  },
  {
    dimension: 'Enterprise Stack Integration',
    traditional: 'Isolated web chatbots disconnected from real-time ERP and data warehouses.',
    brombeer: 'Native direct connectors for Snowflake, Databricks, BigQuery, SAP, and Salesforce.',
    icon: Database,
  },
];

export const VisualArchitectureMatrix: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FAF8FE] to-white relative overflow-hidden border-t border-[#EDE8F6]">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold text-violet-primary uppercase tracking-widest block mb-2">
            ARCHITECTURAL COMPARISON
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold text-[#111014] tracking-tight">
            How Brombeer AI Differs from Generic AI Platforms.
          </h2>
          <p className="text-sm sm:text-base font-dm text-[#666371] mt-3">
            Designed for enterprise compliance, high-precision grounding, and production reliability.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="rounded-[2.25rem] bg-white border border-[#E8E2F4] shadow-xl shadow-violet-primary/5 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 bg-[#FAF9FF] border-b border-[#E8E2F4] text-xs font-mono font-bold">
            <div className="md:col-span-4 text-[#8E869E] uppercase tracking-wider">
              CRITICAL DIMENSION
            </div>
            <div className="hidden md:block md:col-span-4 text-[#8E869E] uppercase tracking-wider">
              GENERIC SAAS / CHATBOTS
            </div>
            <div className="hidden md:block md:col-span-4 text-violet-primary uppercase tracking-wider">
              BROMBEER ENTERPRISE ARCHITECTURE
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#F0EBF8]">
            {COMPARISON_ROWS.map((row, idx) => {
              const Icon = row.icon;
              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 p-6 sm:p-7 gap-4 md:gap-6 items-center hover:bg-[#FAF9FF]/60 transition-colors"
                >
                  {/* Dimension Name */}
                  <div className="md:col-span-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#EDE7FB] text-violet-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-sans font-bold text-base text-[#111014] tracking-tight">
                      {row.dimension}
                    </span>
                  </div>

                  {/* Generic AI */}
                  <div className="md:col-span-4 p-3.5 rounded-xl bg-red-50/40 border border-red-200/50 text-xs font-dm text-[#666371] flex items-start gap-2.5">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>

                  {/* Brombeer AI */}
                  <div className="md:col-span-4 p-3.5 rounded-xl bg-[#FAF9FF] border border-violet-primary/25 text-xs font-dm text-[#181126] font-medium flex items-start gap-2.5 shadow-xs">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{row.brombeer}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

