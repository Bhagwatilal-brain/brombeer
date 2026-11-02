import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Search, 
  CheckCircle2, 
  Sparkles, 
  Bot, 
  TrendingUp, 
  Crosshair, 
  Zap, 
  Cpu, 
  Database,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

// 1. Enterprise Knowledge Assistant Visual
export const KnowledgeAssistantVisual: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="h-[142px] w-full rounded-2xl bg-gradient-to-br from-[#F5EFFE] via-[#FAF7FD] to-[#EFE7FC] border border-[#7650E8]/14 p-3.5 flex flex-col justify-between relative overflow-hidden select-none">
      {/* Background ambient radial glow */}
      <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-[#7650E8]/10 blur-xl pointer-events-none" />

      {/* Top Search Query Bar */}
      <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-white/90 border border-[#7650E8]/18 shadow-sm backdrop-blur-sm">
        <Search className="w-3.5 h-3.5 text-[#7650E8] flex-shrink-0" />
        <span className="text-[11px] font-mono text-[#2D264B] font-medium truncate">
          Query: &ldquo;SOC-2 Type II audit report SLA&rdquo;
        </span>
        <motion.span
          animate={prefersReduced ? {} : { opacity: [1, 0, 1] }}
          transition={{ duration: 0.9, repeat: Infinity }}
          className="inline-block w-1.5 h-3 bg-[#7650E8] ml-auto flex-shrink-0 rounded-sm"
        />
      </div>

      {/* Center & Bottom: Verified Grounded Answer Card */}
      <div className="relative flex items-center justify-between gap-2 pt-1">
        {/* Document Source Pill */}
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#EFE7FA] border border-[#7650E8]/20 shadow-xs">
          <FileText className="w-3.5 h-3.5 text-[#7650E8]" />
          <span className="text-[10px] font-medium text-[#463B6E]">Security_Policy.pdf</span>
        </div>

        {/* Dynamic Match Score */}
        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-300/40 text-emerald-700 text-[9.5px] font-semibold">
          <Check className="w-2.5 h-2.5" />
          <span>99.4% Grounded</span>
        </div>
      </div>

      {/* Answer Snippet */}
      <div className="px-2.5 py-1.5 rounded-xl bg-white/80 border border-[#7650E8]/12 text-[10.5px] text-[#554C75] leading-snug font-dm flex items-center justify-between">
        <span className="truncate">Answer extracted from verified internal source.</span>
        <span className="text-[9.5px] text-[#7650E8] font-semibold ml-2 flex-shrink-0">3 citations</span>
      </div>
    </div>
  );
};

// 2. Intelligent Document Processing Visual
export const DocumentProcessingVisual: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="h-[142px] w-full rounded-2xl bg-gradient-to-br from-[#F5EFFE] via-[#FAF7FD] to-[#EFE7FC] border border-[#7650E8]/14 p-3.5 relative overflow-hidden select-none flex flex-col justify-between">
      {/* Laser Scanning Beam Animation */}
      {!prefersReduced && (
        <motion.div
          animate={{
            top: ['4px', '134px', '4px'],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent shadow-[0_0_8px_#7650E8] pointer-events-none z-20"
        />
      )}

      {/* Document Header */}
      <div className="flex items-center justify-between border-b border-[#7650E8]/12 pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-[#7650E8]" />
          <span className="text-[10.5px] font-mono font-semibold text-[#2D264B]">TAX_INVOICE_#9841.PDF</span>
        </div>
        <span className="text-[9.5px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
          OCR EXTRACTED
        </span>
      </div>

      {/* Form Fields Extraction Grid */}
      <div className="grid grid-cols-2 gap-2 my-auto">
        <div className="p-2 rounded-xl bg-white/90 border border-[#7650E8]/16 shadow-xs">
          <span className="text-[9px] uppercase tracking-wider text-[#796F96] block font-mono">Invoice Total</span>
          <span className="text-[11.5px] font-bold text-[#1E1142]">$148,500.00</span>
        </div>
        <div className="p-2 rounded-xl bg-white/90 border border-[#7650E8]/16 shadow-xs">
          <span className="text-[9px] uppercase tracking-wider text-[#796F96] block font-mono">Tax ID Match</span>
          <span className="text-[11.5px] font-bold text-[#1E1142]">AE-784-2910</span>
        </div>
      </div>

      {/* Bottom Extraction Status */}
      <div className="flex items-center justify-between text-[10px] text-[#635787] pt-1">
        <span className="flex items-center gap-1">
          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
          <span>Entity validation passed</span>
        </span>
        <span className="font-mono text-[9px] text-[#7650E8] font-semibold">12 fields mapped</span>
      </div>
    </div>
  );
};

// 3. AI-Powered Service Assistant Visual
export const ServiceAssistantVisual: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="h-[142px] w-full rounded-2xl bg-gradient-to-br from-[#F5EFFE] via-[#FAF7FD] to-[#EFE7FC] border border-[#7650E8]/14 p-3 relative overflow-hidden select-none flex flex-col justify-between">
      {/* User Inbound Query Bubble */}
      <div className="flex items-start gap-2 max-w-[85%]">
        <div className="w-5 h-5 rounded-full bg-[#E5DCF8] flex items-center justify-center flex-shrink-0 text-[10px] font-bold text-[#6442D1]">
          U
        </div>
        <div className="px-2.5 py-1.5 rounded-2xl rounded-tl-sm bg-white/95 border border-[#7650E8]/14 shadow-xs text-[10.5px] text-[#342A56] leading-snug">
          &ldquo;Expedite priority clearance for container #C-902?&rdquo;
        </div>
      </div>

      {/* AI Assistant Outbound Response Bubble with Reasoning Badge */}
      <div className="flex items-start gap-2 max-w-[90%] self-end flex-row-reverse">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#7650E8] to-[#9E7BFF] flex items-center justify-center flex-shrink-0 text-white shadow-xs">
          <Bot className="w-3 h-3" />
        </div>
        <div className="px-2.5 py-1.5 rounded-2xl rounded-tr-sm bg-[#7650E8] text-white shadow-xs text-[10.5px] leading-snug">
          <span>Priority waiver approved. Customs clearance auto-routed.</span>
        </div>
      </div>

      {/* Live SLA & Latency Ribbon */}
      <div className="flex items-center justify-between px-2.5 py-1 rounded-xl bg-white/70 border border-[#7650E8]/10 text-[9.5px]">
        <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Resolved in 0.4s</span>
        </div>
        <span className="text-[#6442D1] font-mono font-medium">Auto-Executed via API</span>
      </div>
    </div>
  );
};

// 4. Predictive Inventory Intelligence Visual
export const InventoryIntelligenceVisual: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="h-[142px] w-full rounded-2xl bg-gradient-to-br from-[#F5EFFE] via-[#FAF7FD] to-[#EFE7FC] border border-[#7650E8]/14 p-3 relative overflow-hidden select-none flex flex-col justify-between">
      {/* Top Forecast Metrics */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="w-3.5 h-3.5 text-[#7650E8]" />
          <span className="text-[10.5px] font-semibold text-[#1E1142]">Q4 Demand Model</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[#EAE2FB] text-[#6442D1] font-mono text-[9px] font-semibold border border-[#7650E8]/20">
          +38.5% PEAK FORECAST
        </span>
      </div>

      {/* Animated SVG Predictive Chart Curve */}
      <div className="relative h-14 w-full flex items-center">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 240 60" fill="none">
          <defs>
            <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7650E8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#7650E8" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Shaded Area under Curve */}
          <path
            d="M 0 50 Q 50 48, 90 32 T 170 18 T 240 8 L 240 60 L 0 60 Z"
            fill="url(#curveGradient)"
          />

          {/* Historical Solid Line */}
          <path
            d="M 0 50 Q 50 48, 90 32 T 170 18"
            stroke="#7650E8"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Projected Dotted Curve with Animation */}
          <path
            d="M 170 18 T 240 8"
            stroke="#9E7BFF"
            strokeWidth="2.2"
            strokeDasharray="3 3"
            strokeLinecap="round"
          />

          {/* Pulse Node at Transition Point */}
          <circle cx="170" cy="18" r="4" fill="#7650E8" />
          <circle cx="170" cy="18" r="8" stroke="#7650E8" strokeWidth="1" opacity="0.4" className="animate-ping" />
        </svg>

        {/* Floating Tooltip Target */}
        <div className="absolute right-2 top-0 px-2 py-0.5 rounded-md bg-[#1E1142] text-white text-[9px] font-mono shadow-md">
          Reorder: Nov 14
        </div>
      </div>

      {/* Bottom Confidence Level */}
      <div className="flex items-center justify-between text-[10px] text-[#635787] border-t border-[#7650E8]/10 pt-1">
        <span>Stockout risk: &lt; 0.05%</span>
        <span className="font-mono text-[#7650E8] font-semibold text-[9px]">98.7% Accuracy</span>
      </div>
    </div>
  );
};

// 5. Visual Quality Assessment Visual
export const QualityAssessmentVisual: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="h-[142px] w-full rounded-2xl bg-gradient-to-br from-[#F5EFFE] via-[#FAF7FD] to-[#EFE7FC] border border-[#7650E8]/14 p-3 relative overflow-hidden select-none flex flex-col justify-between">
      {/* Viewfinder Target Reticle Frame */}
      <div className="relative flex-1 rounded-xl bg-[#1E1142]/[0.03] border border-[#7650E8]/20 flex items-center justify-center p-2">
        {/* Reticle Corner Brackets */}
        <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#7650E8]" />
        <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#7650E8]" />
        <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#7650E8]" />
        <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#7650E8]" />

        {/* Center Optical Crosshair */}
        <Crosshair className="w-5 h-5 text-[#7650E8]/60 absolute pointer-events-none" />

        {/* Inspected Specimen Box */}
        <div className="w-[75%] h-[75%] rounded-lg border-2 border-emerald-500/80 bg-emerald-50/30 flex items-center justify-between px-2.5">
          <span className="text-[10px] font-mono text-emerald-700 font-semibold">TOLERANCE ±0.01mm</span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white font-mono text-[9px] font-bold shadow-xs">
            PASS
          </span>
        </div>

        {/* Scanning Sweep Effect */}
        {!prefersReduced && (
          <motion.div
            animate={{
              left: ['6px', '95%', '6px'],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1 bottom-1 w-[2px] bg-gradient-to-b from-transparent via-[#7650E8] to-transparent shadow-[0_0_6px_#7650E8] pointer-events-none"
          />
        )}
      </div>

      {/* Telemetry Bar */}
      <div className="flex items-center justify-between text-[10px] text-[#635787] pt-1.5 px-0.5">
        <span className="font-mono text-[9px] text-[#2D264B]">Edge Vision v4.2</span>
        <span className="font-mono text-[9px] text-emerald-600 font-semibold">0 Defects Detected</span>
      </div>
    </div>
  );
};

// 6. Workflow Intelligence Visual
export const WorkflowIntelligenceVisual: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <div className="h-[142px] w-full rounded-2xl bg-gradient-to-br from-[#F5EFFE] via-[#FAF7FD] to-[#EFE7FC] border border-[#7650E8]/14 p-3 relative overflow-hidden select-none flex flex-col justify-between">
      {/* Header Pipeline Tag */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <Zap className="w-3.5 h-3.5 text-[#7650E8]" />
          <span className="text-[10.5px] font-semibold text-[#1E1142]">Autonomous Orchestration</span>
        </div>
        <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-mono text-[9px] font-semibold border border-emerald-200">
          LIVE PIPELINE
        </span>
      </div>

      {/* 3 Step Interactive Connected Flow Nodes */}
      <div className="relative flex items-center justify-between px-2 my-auto">
        {/* Connection Conduit Line */}
        <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-[#7650E8]/20 z-0" />
        {!prefersReduced && (
          <motion.div
            animate={{
              left: ['24px', '88%', '24px'],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute top-1/2 -translate-y-1/2 w-3 h-[3px] bg-[#7650E8] rounded-full shadow-[0_0_8px_#7650E8] z-0"
          />
        )}

        {/* Node 1: Ingest Trigger */}
        <div className="relative z-10 flex flex-col items-center gap-1">
          <div className="w-8 h-8 rounded-xl bg-white border border-[#7650E8]/25 shadow-xs flex items-center justify-center text-[#7650E8]">
            <Database className="w-4 h-4" />
          </div>
          <span className="text-[9px] font-mono text-[#524675] font-medium">Trigger</span>
        </div>

        {/* Node 2: Cognitive Reasoning */}
        <div className="relative z-10 flex flex-col items-center gap-1">
          <div className="w-8 h-8 rounded-xl bg-[#7650E8] text-white shadow-md shadow-[#7650E8]/25 flex items-center justify-center">
            <Cpu className="w-4 h-4 animate-spin-slow" />
          </div>
          <span className="text-[9px] font-mono text-[#7650E8] font-bold">Rule Check</span>
        </div>

        {/* Node 3: Execution Writeback */}
        <div className="relative z-10 flex flex-col items-center gap-1">
          <div className="w-8 h-8 rounded-xl bg-white border border-emerald-500/40 shadow-xs flex items-center justify-center text-emerald-600">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span className="text-[9px] font-mono text-emerald-700 font-medium">Writeback</span>
        </div>
      </div>

      {/* Telemetry Bar */}
      <div className="flex items-center justify-between text-[10px] text-[#635787] border-t border-[#7650E8]/10 pt-1">
        <span>3-step flow</span>
        <span className="font-mono text-[#7650E8] font-semibold text-[9px]">100% Policy Compliant</span>
      </div>
    </div>
  );
};
