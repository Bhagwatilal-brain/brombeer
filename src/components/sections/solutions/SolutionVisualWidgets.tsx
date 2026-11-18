import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Bot, Database, Eye, TrendingUp, FileText, Layout, Compass, CheckCircle2, ArrowRight, Shield, Zap, Search, Activity, Cpu } from 'lucide-react';

interface VisualWidgetProps {
  solutionId: string;
}

export const SolutionVisualWidget: React.FC<VisualWidgetProps> = ({ solutionId }) => {
  switch (solutionId) {
    case 'generative-ai':
      return (
        <div className="w-full h-full min-h-[290px] rounded-2xl bg-gradient-to-b from-[#FAF8FE] to-white border border-[#E9E3F5] p-5 flex flex-col justify-between shadow-xs select-none relative overflow-hidden group/visual">
          {/* Top subtle glow */}
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-violet-primary/10 blur-2xl pointer-events-none" />

          {/* Model Playground Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#F0EAF8]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono font-semibold text-[#111014]">
                Brombeer-Llama-70B
              </span>
              <span className="text-[9.5px] font-mono px-2 py-0.5 rounded-full bg-[#EDE7FB] text-violet-primary font-semibold">
                Private VPC
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#8E869E]">
              18ms Latency
            </span>
          </div>

          {/* Prompt & Generation Simulation */}
          <div className="space-y-3 my-auto py-2">
            <div className="p-3 rounded-xl bg-white border border-[#E8E2F4] shadow-xs">
              <span className="text-[10px] font-mono text-[#8E869E] uppercase tracking-wider block mb-1">
                Input Prompt
              </span>
              <p className="text-xs font-dm text-[#111014] font-medium leading-relaxed">
                "Extract compliance audit gaps from Q3 financial filings and cite clauses."
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#FAF9FF] border border-violet-primary/20 shadow-xs relative">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono font-semibold text-violet-primary flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Grounded Synthesis
                </span>
                <span className="text-[9.5px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/50">
                  99.6% Factual
                </span>
              </div>
              <p className="text-[11.5px] font-dm text-[#373344] leading-relaxed">
                Found 2 regulatory citations in <span className="font-semibold text-violet-primary">Audit_Q3_UAE.pdf (p.18)</span>. Tenant tenancy boundaries verified.
              </p>
            </div>
          </div>

          {/* Telemetry Footer */}
          <div className="pt-3 border-t border-[#F0EAF8] flex items-center justify-between text-[10px] font-mono text-[#8E869E]">
            <span className="flex items-center gap-1">
              <Activity className="w-3 h-3 text-violet-primary" /> 148 tok/sec
            </span>
            <span className="text-emerald-600 font-semibold">
              Zero Data Retention ✓
            </span>
          </div>
        </div>
      );

    case 'ai-agents':
      return (
        <div className="w-full h-full min-h-[290px] rounded-2xl bg-gradient-to-b from-[#FAF8FE] to-white border border-[#E9E3F5] p-5 flex flex-col justify-between shadow-xs select-none relative overflow-hidden group/visual">
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-[#F0EAF8]">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-violet-primary" />
              <span className="text-[11px] font-mono font-bold text-[#111014]">
                Multi-Agent Orchestrator
              </span>
            </div>
            <span className="text-[9.5px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/40">
              Active Pipeline
            </span>
          </div>

          {/* 3-Step Execution Sequence */}
          <div className="space-y-2.5 my-auto py-2">
            {/* Step 1 */}
            <div className="p-2.5 rounded-xl bg-white border border-[#E8E2F4] flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#EDE7FB] text-violet-primary text-[10px] font-bold flex items-center justify-center">
                  1
                </span>
                <span className="text-xs font-dm font-semibold text-[#111014]">
                  Inbound Ticket Ingestion
                </span>
              </div>
              <span className="text-[10px] font-mono text-emerald-600 font-semibold">
                Parsed ✓
              </span>
            </div>

            {/* Step 2 (Active Tool Calling) */}
            <div className="p-2.5 rounded-xl bg-[#FAF9FF] border border-violet-primary/30 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-violet-primary text-white text-[10px] font-bold flex items-center justify-center">
                  2
                </span>
                <div>
                  <span className="text-xs font-dm font-semibold text-[#111014] block">
                    ERP Query & Validation
                  </span>
                  <span className="text-[10px] font-mono text-[#8E869E]">
                    Tool: SAP_Inventory_Lookup
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono text-violet-primary font-bold">
                Retrieved
              </span>
            </div>

            {/* Step 3 (Human Gate) */}
            <div className="p-2.5 rounded-xl bg-white border border-[#E8E2F4] flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center">
                  3
                </span>
                <span className="text-xs font-dm font-semibold text-[#111014]">
                  Human Approval Gate
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">
                Approved
              </span>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-[#F0EAF8] flex items-center justify-between text-[10px] font-mono text-[#8E869E]">
            <span>Latency: 0.38s</span>
            <span className="text-violet-primary font-semibold">Audit Logged #9940</span>
          </div>
        </div>
      );

    case 'enterprise-knowledge':
      return (
        <div className="w-full h-full min-h-[290px] rounded-2xl bg-gradient-to-b from-[#FAF8FE] to-white border border-[#E9E3F5] p-5 flex flex-col justify-between shadow-xs select-none relative overflow-hidden group/visual">
          <div className="flex items-center justify-between pb-3 border-b border-[#F0EAF8]">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-violet-primary" />
              <span className="text-[11px] font-mono font-bold text-[#111014]">
                Enterprise Semantic Search
              </span>
            </div>
            <span className="text-[10px] font-mono text-violet-primary font-semibold">
              Hybrid Dense+Sparse
            </span>
          </div>

          <div className="space-y-2.5 my-auto py-2">
            {/* Search Query */}
            <div className="p-2.5 rounded-xl bg-white border border-[#E8E2F4] flex items-center gap-2 text-xs font-dm text-[#111014] shadow-xs">
              <Search className="w-3.5 h-3.5 text-violet-primary flex-shrink-0" />
              <span className="truncate">"What is our disaster recovery RTO policy in UAE?"</span>
            </div>

            {/* Vector Matches */}
            <div className="p-2.5 rounded-xl bg-[#FAF9FF] border border-violet-primary/25 space-y-1.5 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-violet-primary">
                  Rank #1 • 99.4% Cosine Match
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">
                  SOP-DR-2026.pdf
                </span>
              </div>
              <p className="text-[11px] font-dm text-[#373344] leading-relaxed">
                "Tier-1 enterprise database clusters maintain a maximum RTO of 15 minutes across local zones."
              </p>
            </div>

            {/* Rank 2 preview */}
            <div className="p-2 rounded-xl bg-white border border-[#E8E2F4] flex items-center justify-between text-[10px] font-mono text-[#8E869E]">
              <span>Rank #2 • 94.8% Match</span>
              <span>Cloud_Architecture.docx (p.42)</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#F0EAF8] flex items-center justify-between text-[10px] font-mono text-[#8E869E]">
            <span>Vector Dim: 1536</span>
            <span className="text-emerald-600 font-semibold">RBAC Filtered ✓</span>
          </div>
        </div>
      );

    case 'computer-vision':
      return (
        <div className="w-full h-full min-h-[290px] rounded-2xl bg-gradient-to-b from-[#111014] via-[#1A1822] to-[#111014] border border-[#2D2838] p-5 flex flex-col justify-between shadow-lg select-none relative overflow-hidden text-white group/visual">
          {/* Viewfinder Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[10.5px] font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-bold">EDGE_VISION_HUD_v4</span>
            </div>
            <span className="text-emerald-400 font-bold tracking-wider">60 FPS</span>
          </div>

          {/* Viewfinder Reticle Simulation */}
          <div className="relative my-auto py-3 flex items-center justify-center">
            {/* Corner Bracket Reticles */}
            <div className="w-48 h-28 border border-white/20 rounded-lg relative flex items-center justify-center bg-white/[0.02]">
              <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-emerald-400" />
              <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-emerald-400" />
              <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-emerald-400" />
              <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-emerald-400" />

              {/* Scanning Laser Sweep */}
              <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_8px_#34D399]" />

              {/* Center Status Tag */}
              <div className="p-2 rounded bg-black/60 backdrop-blur-md border border-emerald-400/40 text-center">
                <span className="text-[11px] font-mono text-emerald-400 font-bold block">
                  INSPECTION: PASS
                </span>
                <span className="text-[9px] font-mono text-white/70 block mt-0.5">
                  Tolerance: ±0.01mm
                </span>
              </div>
            </div>
          </div>

          {/* Telemetry Footer */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-white/70">
            <span>Defects: 0 Detected</span>
            <span className="text-emerald-400 font-bold">Confidence: 99.9%</span>
          </div>
        </div>
      );

    case 'predictive-analytics':
      return (
        <div className="w-full h-full min-h-[290px] rounded-2xl bg-gradient-to-b from-[#FAF8FE] to-white border border-[#E9E3F5] p-5 flex flex-col justify-between shadow-xs select-none relative overflow-hidden group/visual">
          <div className="flex items-center justify-between pb-3 border-b border-[#F0EAF8]">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-violet-primary" />
              <span className="text-[11px] font-mono font-bold text-[#111014]">
                Time-Series Demand Forecast
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-50 text-violet-primary font-bold">
              Q4 Projected
            </span>
          </div>

          {/* SVG Forecasting Wave Visual */}
          <div className="my-auto py-2 relative flex flex-col justify-center">
            <svg className="w-full h-24" viewBox="0 0 280 80" fill="none">
              {/* Shaded confidence interval corridor */}
              <path
                d="M 10 50 Q 70 60, 130 35 T 270 20 L 270 50 L 130 55 L 10 65 Z"
                fill="url(#forecast-corridor)"
                opacity="0.4"
              />
              {/* Historical Solid Line */}
              <path
                d="M 10 50 Q 70 60, 130 35"
                stroke="#7650E8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Future Forecast Dashed Line */}
              <path
                d="M 130 35 Q 190 15, 270 20"
                stroke="#10B981"
                strokeWidth="2.5"
                strokeDasharray="4 4"
                strokeLinecap="round"
              />
              {/* Inflection Waypoint Beacon */}
              <circle cx="130" cy="35" r="5" fill="#7650E8" />
              <circle cx="130" cy="35" r="9" stroke="#7650E8" strokeWidth="1.5" opacity="0.4" />
              <defs>
                <linearGradient id="forecast-corridor" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7650E8" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.25" />
                </linearGradient>
              </defs>
            </svg>

            {/* Dynamic Forecast Badge */}
            <div className="flex items-center justify-between px-2 pt-1 text-[10px] font-mono text-[#8E869E]">
              <span>Historical (Actual)</span>
              <span className="text-emerald-600 font-bold">+28.4% Peak Forecast</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#F0EAF8] flex items-center justify-between text-[10px] font-mono text-[#8E869E]">
            <span>Stockout Risk: &lt;0.05%</span>
            <span className="text-emerald-600 font-bold">Accuracy: 98.7%</span>
          </div>
        </div>
      );

    case 'document-intelligence':
      return (
        <div className="w-full h-full min-h-[290px] rounded-2xl bg-gradient-to-b from-[#FAF8FE] to-white border border-[#E9E3F5] p-5 flex flex-col justify-between shadow-xs select-none relative overflow-hidden group/visual">
          <div className="flex items-center justify-between pb-3 border-b border-[#F0EAF8]">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-violet-primary" />
              <span className="text-[11px] font-mono font-bold text-[#111014]">
                Multimodal OCR Extractor
              </span>
            </div>
            <span className="text-[9.5px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/40">
              Validated
            </span>
          </div>

          {/* Document Key-Value Pairs */}
          <div className="space-y-2 my-auto py-2">
            <div className="p-2.5 rounded-xl bg-white border border-[#E8E2F4] flex items-center justify-between text-xs font-mono shadow-xs">
              <span className="text-[#8E869E]">INVOICE_ID</span>
              <span className="font-bold text-[#111014]">INV-2026-9481</span>
            </div>

            <div className="p-2.5 rounded-xl bg-[#FAF9FF] border border-violet-primary/25 flex items-center justify-between text-xs font-mono shadow-xs">
              <span className="text-violet-primary font-semibold">TAX_MATCH</span>
              <span className="font-bold text-violet-primary">AE-784-2910 ✓</span>
            </div>

            <div className="p-2.5 rounded-xl bg-white border border-[#E8E2F4] flex items-center justify-between text-xs font-mono shadow-xs">
              <span className="text-[#8E869E]">TOTAL_LIABILITY</span>
              <span className="font-bold text-emerald-600">$148,500.00</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#F0EAF8] flex items-center justify-between text-[10px] font-mono text-[#8E869E]">
            <span>Confidence: 99.8%</span>
            <span className="text-violet-primary font-bold">12 Fields Mapped</span>
          </div>
        </div>
      );

    case 'ai-app-development':
      return (
        <div className="w-full h-full min-h-[290px] rounded-2xl bg-gradient-to-b from-[#FAF8FE] to-white border border-[#E9E3F5] p-5 flex flex-col justify-between shadow-xs select-none relative overflow-hidden group/visual">
          <div className="flex items-center justify-between pb-3 border-b border-[#F0EAF8]">
            <div className="flex items-center gap-2">
              <Layout className="w-4 h-4 text-violet-primary" />
              <span className="text-[11px] font-mono font-bold text-[#111014]">
                Full-Stack Architecture Stack
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-600 font-bold">
              Production Ready
            </span>
          </div>

          {/* 4 Architecture Layers */}
          <div className="space-y-1.5 my-auto py-2">
            <div className="p-2 rounded-lg bg-white border border-[#E8E2F4] flex items-center justify-between text-[11px] font-mono shadow-xs">
              <span className="text-[#8E869E]">01 Client UX</span>
              <span className="font-bold text-[#111014]">React / Next.js / Tailwind</span>
            </div>
            <div className="p-2 rounded-lg bg-[#FAF9FF] border border-violet-primary/20 flex items-center justify-between text-[11px] font-mono shadow-xs">
              <span className="text-violet-primary font-semibold">02 AI Gateway</span>
              <span className="font-bold text-violet-primary">FastAPI Microservices</span>
            </div>
            <div className="p-2 rounded-lg bg-white border border-[#E8E2F4] flex items-center justify-between text-[11px] font-mono shadow-xs">
              <span className="text-[#8E869E]">03 Guardrails</span>
              <span className="font-bold text-[#111014]">Semantic Rule Gates</span>
            </div>
            <div className="p-2 rounded-lg bg-white border border-[#E8E2F4] flex items-center justify-between text-[11px] font-mono shadow-xs">
              <span className="text-[#8E869E]">04 Data Tier</span>
              <span className="font-bold text-emerald-600">Sovereign Vector DB + SQL</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#F0EAF8] flex items-center justify-between text-[10px] font-mono text-[#8E869E]">
            <span>Uptime: 99.95% SLA</span>
            <span className="text-violet-primary font-bold">Cloud-Native</span>
          </div>
        </div>
      );

    case 'ai-consulting':
    default:
      return (
        <div className="w-full h-full min-h-[290px] rounded-2xl bg-gradient-to-b from-[#FAF8FE] to-white border border-[#E9E3F5] p-5 flex flex-col justify-between shadow-xs select-none relative overflow-hidden group/visual">
          <div className="flex items-center justify-between pb-3 border-b border-[#F0EAF8]">
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-violet-primary" />
              <span className="text-[11px] font-mono font-bold text-[#111014]">
                Feasibility & ROI Scorecard
              </span>
            </div>
            <span className="text-[9.5px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200/40">
              Assessed
            </span>
          </div>

          {/* 4 Dimension Progress Meters */}
          <div className="space-y-2.5 my-auto py-2">
            <div>
              <div className="flex items-center justify-between text-[10.5px] font-mono mb-1">
                <span className="text-[#666371]">Business Value & ROI</span>
                <span className="font-bold text-[#111014]">96%</span>
              </div>
              <div className="w-full h-1.5 bg-[#EDE8F6] rounded-full overflow-hidden">
                <div className="w-[96%] h-full bg-gradient-to-r from-violet-primary to-emerald-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-[10.5px] font-mono mb-1">
                <span className="text-[#666371]">Data Readiness</span>
                <span className="font-bold text-[#111014]">92%</span>
              </div>
              <div className="w-full h-1.5 bg-[#EDE8F6] rounded-full overflow-hidden">
                <div className="w-[92%] h-full bg-gradient-to-r from-violet-primary to-emerald-500 rounded-full" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-[10.5px] font-mono mb-1">
                <span className="text-[#666371]">Governance & Compliance</span>
                <span className="font-bold text-emerald-600">100%</span>
              </div>
              <div className="w-full h-1.5 bg-[#EDE8F6] rounded-full overflow-hidden">
                <div className="w-full h-full bg-emerald-500 rounded-full" />
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#F0EAF8] flex items-center justify-between text-[10px] font-mono text-[#8E869E]">
            <span>Payback: &lt;6 Months</span>
            <span className="text-emerald-600 font-bold">Deploy Feasible ✓</span>
          </div>
        </div>
      );
  }
};

