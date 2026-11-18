import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bot, Eye, TrendingUp, FileText, CheckCircle2, ShieldCheck, Zap, Lock, ArrowRight, Activity, Terminal, RefreshCw, AlertCircle, Check } from 'lucide-react';
import { Container } from '../../layout/Container';
import { Button } from '../../ui/Button';

export const InteractiveStudiosSection: React.FC = () => {
  // Studio 1 State (RAG)
  const [selectedPromptIndex, setSelectedPromptIndex] = useState(0);

  // Studio 2 State (Agent Approval)
  const [agentApproved, setAgentApproved] = useState(false);

  // Studio 3 State (Vision vs Document)
  const [visionMode, setVisionMode] = useState<'vision' | 'ocr'>('vision');
  const [hasDefect, setHasDefect] = useState(false);

  // Studio 4 State (Predictive Scenario)
  const [forecastScenario, setForecastScenario] = useState<'baseline' | 'peak' | 'shock'>('peak');

  const RAG_PROMPTS = [
    {
      query: "Analyze UAE sovereign data residency clauses in Master Services Agreement.",
      docName: "MSA_Brombeer_2026.pdf",
      page: "Page 14, Clause 8.2",
      highlight: "All customer database clusters, vector embeddings, and telemetry must reside strictly within authorized UAE cloud availability zones without external egress.",
      score: "99.8% Grounded",
      latency: "14ms",
    },
    {
      query: "Cross-verify invoice #9481 tax ID against verified vendor directory.",
      docName: "Vendor_Directory_AE.xlsx",
      page: "Row 412, Approved",
      highlight: "Tax Registration AE-784-2910 matches Acme Global Logistics. Standard 30-day payment term validated against ERP purchase order PO-8820.",
      score: "100% Verified",
      latency: "12ms",
    },
    {
      query: "Summarize emergency disaster recovery failover RTO guidelines.",
      docName: "Disaster_Recovery_SOP.docx",
      page: "Section 4.1",
      highlight: "Tier-1 enterprise services maintain automatic sub-15 minute recovery point and multi-region read replica synchronization.",
      score: "99.4% Grounded",
      latency: "18ms",
    },
  ];

  return (
    <section id="studios" className="py-16 sm:py-24 relative overflow-hidden bg-background">
      <Container>
        {/* Section Header: Punchy, Visual, Human-Authored */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9FF] border border-violet-primary/20 text-xs font-semibold text-violet-primary mb-3">
            <span className="w-2 h-2 rounded-full bg-violet-primary" />
            <span>INTERACTIVE CAPABILITY STUDIOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-tight">
            See the Architecture in Action.
          </h2>
          <p className="text-sm sm:text-base font-dm text-[#666371] leading-relaxed mt-3 max-w-2xl">
            Interact with live capability simulations below — from semantic RAG citation inspectors to multi-agent pipelines and computer vision viewfinders.
          </p>
        </div>

        {/* 4 Bespoke Studios Stack */}
        <div className="space-y-16 sm:space-y-24">
          {/* ========================================================================= */}
          {/* STUDIO 1: Language & RAG Studio (Split-Screen Interactive Inspector) */}
          {/* ========================================================================= */}
          <div className="p-7 sm:p-10 lg:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-white to-[#F9F7FE] border border-[#E8E2F4] shadow-xl shadow-violet-primary/5 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-5 border-b border-[#F0EBF8]">
              <div>
                <span className="text-xs font-mono font-bold text-violet-primary uppercase tracking-wider block mb-1">
                  STUDIO 01 // ENTERPRISE RAG & LLMS
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#111014] tracking-tight">
                  Zero Hallucinations. Clickable Proof.
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full bg-[#EDE7FB] text-violet-primary font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Anti-Hallucination Gating: ACTIVE</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Interactive Prompts Switcher */}
              <div className="lg:col-span-5 space-y-3">
                <span className="text-xs font-mono font-semibold text-[#8E869E] uppercase tracking-wider block mb-2">
                  Select Enterprise Query:
                </span>
                {RAG_PROMPTS.map((item, idx) => {
                  const isSelected = selectedPromptIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedPromptIndex(idx)}
                      className={`w-full p-4 rounded-2xl text-left transition-all duration-200 border flex items-center justify-between gap-3 group ${
                        isSelected
                          ? 'bg-[#F4EEFF] border-violet-primary shadow-xs'
                          : 'bg-white border-[#E8E2F4] hover:border-violet-primary/40 hover:bg-[#FAF9FF]'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Sparkles className={`w-4 h-4 flex-shrink-0 ${isSelected ? 'text-violet-primary' : 'text-[#8E869E]'}`} />
                        <span className={`text-xs sm:text-[13px] font-dm truncate ${isSelected ? 'font-bold text-[#111014]' : 'text-[#4B4758]'}`}>
                          {item.query}
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${
                        isSelected ? 'bg-violet-primary text-white' : 'bg-[#EDE7FB] text-violet-primary'
                      }`}>
                        {item.score}
                      </span>
                    </button>
                  );
                })}

                <div className="p-4 rounded-2xl bg-[#FAF9FF] border border-violet-primary/15 mt-4 text-xs font-dm text-[#555162] leading-relaxed">
                  <span className="font-bold text-violet-primary block mb-1">How it works:</span>
                  User questions are converted into mathematical embeddings, filtered by user SAML permissions, and verified sentence-by-sentence against source documents.
                </div>
              </div>

              {/* Right Column: Visual Live Document Inspector */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedPromptIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="p-6 rounded-2xl bg-white border border-violet-primary/30 shadow-lg shadow-violet-primary/8 space-y-4"
                  >
                    {/* Document Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#F0EBF8] text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-violet-primary" />
                        <span className="font-bold text-[#111014]">{RAG_PROMPTS[selectedPromptIndex].docName}</span>
                        <span className="text-[#8E869E]">({RAG_PROMPTS[selectedPromptIndex].page})</span>
                      </div>
                      <span className="text-emerald-600 font-bold">
                        {RAG_PROMPTS[selectedPromptIndex].latency} Latency
                      </span>
                    </div>

                    {/* Simulated Document Excerpt with Glowing Purple Highlighter */}
                    <div className="p-4 rounded-xl bg-[#FAF9FF] border border-violet-primary/15 font-dm text-xs sm:text-sm text-[#2E2B38] leading-relaxed relative">
                      <span className="text-[10px] font-mono font-bold text-violet-primary uppercase tracking-widest block mb-2">
                        Grounded Source Passage
                      </span>
                      <p className="bg-violet-primary/10 border-l-2 border-violet-primary pl-3 py-1 rounded-r">
                        "{RAG_PROMPTS[selectedPromptIndex].highlight}"
                      </p>
                    </div>

                    {/* Verification Status Card */}
                    <div className="flex items-center justify-between pt-2 text-xs font-mono">
                      <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Grounding Confidence: {RAG_PROMPTS[selectedPromptIndex].score}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-violet-50 text-violet-primary font-bold">
                        RBAC Filter: Authorized
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* STUDIO 2: Autonomous Multi-Agent Swarm (Connected DAG Pipeline) */}
          {/* ========================================================================= */}
          <div className="p-7 sm:p-10 lg:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-white to-[#F6F8FE] border border-[#E2E8F6] shadow-xl shadow-blue-500/5 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-5 border-b border-[#EAF0F8]">
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  STUDIO 02 // MULTI-AGENT ORCHESTRATION
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#111014] tracking-tight">
                  Autonomous Action with Human Approval Gates.
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold">
                <Bot className="w-4 h-4 text-blue-600" />
                <span>Swarm Architecture: ACTIVE</span>
              </div>
            </div>

            {/* Visual 4-Node Pipeline Flow with Animated Conduit */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative py-4">
              {/* Node 1: Inbound Trigger */}
              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F6] shadow-xs space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center">
                    01
                  </span>
                  <span className="text-[10px] font-mono text-emerald-600 font-bold">Triggered</span>
                </div>
                <h4 className="text-sm font-sans font-bold text-[#111014]">Inbound Event</h4>
                <p className="text-[11.5px] font-dm text-[#666371] leading-relaxed">
                  ERP webhook detects $84,200 supplier invoice reconciliation mismatch.
                </p>
                <div className="pt-2 text-[10px] font-mono text-[#8E869E] border-t border-[#F0F4FA]">
                  Payload: Event_ID_9042
                </div>
              </div>

              {/* Node 2: Reasoning Agent */}
              <div className="p-4 rounded-2xl bg-[#FAF9FF] border border-violet-primary/30 shadow-xs space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-lg bg-violet-primary text-white text-xs font-bold flex items-center justify-center">
                    02
                  </span>
                  <span className="text-[10px] font-mono text-violet-primary font-bold animate-pulse">Tool Exec</span>
                </div>
                <h4 className="text-sm font-sans font-bold text-[#111014]">Agent Reasoning</h4>
                <p className="text-[11.5px] font-dm text-[#666371] leading-relaxed">
                  Queries SAP database & pulls verified signed PO contracts.
                </p>
                <div className="pt-2 text-[10px] font-mono text-violet-primary font-bold border-t border-violet-primary/15">
                  Tool: SAP_Ledger_API
                </div>
              </div>

              {/* Node 3: Human Oversight Gate (Interactive Button) */}
              <div className={`p-4 rounded-2xl border transition-all duration-300 space-y-2 relative ${
                agentApproved
                  ? 'bg-emerald-50/60 border-emerald-300 shadow-md shadow-emerald-500/10'
                  : 'bg-white border-amber-300 shadow-xs'
              }`}>
                <div className="flex items-center justify-between">
                  <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center ${
                    agentApproved ? 'bg-emerald-600 text-white' : 'bg-amber-100 text-amber-800'
                  }`}>
                    03
                  </span>
                  <span className={`text-[10px] font-mono font-bold ${
                    agentApproved ? 'text-emerald-700' : 'text-amber-700 animate-pulse'
                  }`}>
                    {agentApproved ? 'Approved ✓' : 'Awaiting Gate'}
                  </span>
                </div>
                <h4 className="text-sm font-sans font-bold text-[#111014]">Human-in-the-Loop</h4>
                <p className="text-[11.5px] font-dm text-[#666371] leading-relaxed">
                  High-value transactions route to executive signoff before execution.
                </p>
                <button
                  onClick={() => setAgentApproved(!agentApproved)}
                  className={`w-full py-1.5 px-3 rounded-lg text-xs font-dm font-semibold transition-all mt-1 ${
                    agentApproved
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-amber-500 hover:bg-amber-600 text-white shadow-xs'
                  }`}
                >
                  {agentApproved ? 'Gate Cleared ✓ (Click to reset)' : 'Click to Authorize Action'}
                </button>
              </div>

              {/* Node 4: Immutable Writeback */}
              <div className="p-4 rounded-2xl bg-white border border-[#E2E8F6] shadow-xs space-y-2 relative">
                <div className="flex items-center justify-between">
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center">
                    04
                  </span>
                  <span className={`text-[10px] font-mono font-bold ${agentApproved ? 'text-emerald-600' : 'text-[#8E869E]'}`}>
                    {agentApproved ? 'Committed ✓' : 'Standby'}
                  </span>
                </div>
                <h4 className="text-sm font-sans font-bold text-[#111014]">System Writeback</h4>
                <p className="text-[11.5px] font-dm text-[#666371] leading-relaxed">
                  ERP ledger updated, notifications dispatched, audit trail recorded.
                </p>
                <div className="pt-2 text-[10px] font-mono text-[#8E869E] border-t border-[#F0F4FA]">
                  Hash: #0x849b29e
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* STUDIO 3: Dual-Mode Vision HUD vs Multimodal OCR */}
          {/* ========================================================================= */}
          <div className="p-7 sm:p-10 lg:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-white to-[#F8FCF9] border border-[#E2F0E6] shadow-xl shadow-emerald-500/5 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-5 border-b border-[#EAF4ED]">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-1">
                  STUDIO 03 // VISION & MULTIMODAL INTELLIGENCE
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#111014] tracking-tight">
                  Micro-Millimeter Precision at Line Speed.
                </h3>
              </div>

              {/* Mode Toggle Switch */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#F0F8F2] border border-[#D5EAD9]">
                <button
                  onClick={() => setVisionMode('vision')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-dm font-semibold transition-all ${
                    visionMode === 'vision' ? 'bg-white text-emerald-800 shadow-xs' : 'text-[#555162]'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Industrial Vision HUD</span>
                </button>
                <button
                  onClick={() => setVisionMode('ocr')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-dm font-semibold transition-all ${
                    visionMode === 'ocr' ? 'bg-white text-emerald-800 shadow-xs' : 'text-[#555162]'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Multimodal OCR</span>
                </button>
              </div>
            </div>

            {visionMode === 'vision' ? (
              /* Sub-View: Dark HUD Viewfinder Simulator */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 p-6 rounded-2xl bg-[#0F0E13] border border-[#2B2738] text-white relative overflow-hidden select-none">
                  {/* Viewfinder Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-white/70">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> EDGE_CAMERA_CAM04 // 60 FPS
                    </span>
                    <span>RESOLUTION: 4K UHD</span>
                  </div>

                  {/* Viewfinder Canvas */}
                  <div className="py-10 flex items-center justify-center relative">
                    <div className={`w-72 h-44 rounded-xl border-2 relative flex items-center justify-center transition-all duration-300 ${
                      hasDefect ? 'border-red-500 bg-red-500/10' : 'border-emerald-400 bg-emerald-400/5'
                    }`}>
                      {/* Corner HUD Reticles */}
                      <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-white" />
                      <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-white" />
                      <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-white" />
                      <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-white" />

                      {/* Laser Line */}
                      <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_10px_#34D399]" />

                      {/* Center HUD status */}
                      <div className="p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/20 text-center">
                        <span className={`text-sm font-mono font-bold block ${hasDefect ? 'text-red-400' : 'text-emerald-400'}`}>
                          {hasDefect ? 'DEFECT DETECTED [0.04mm]' : 'QUALITY: PASS ✓'}
                        </span>
                        <span className="text-[10px] font-mono text-white/70 block mt-1">
                          Tolerance: ±0.01mm • 99.9% Conf
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Viewfinder Footer */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/70">
                    <span>STATUS: {hasDefect ? 'FLAGGED FOR REVIEW' : 'CONTINUOUS RUNNING'}</span>
                    <span className="text-emerald-400 font-bold">Latency: 11ms</span>
                  </div>
                </div>

                {/* Right Interactive Defect Toggle */}
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-xs font-mono font-bold text-[#8E869E] uppercase tracking-wider block">
                    Interactive HUD Simulator:
                  </span>
                  <div className="p-4 rounded-2xl bg-white border border-[#E2F0E6] shadow-xs space-y-3">
                    <p className="text-xs font-dm text-[#555162] leading-relaxed">
                      Toggle component conditions to observe how the computer vision HUD automatically segments sub-millimeter defects:
                    </p>
                    <div className="flex flex-col gap-2 pt-2">
                      <button
                        onClick={() => setHasDefect(false)}
                        className={`p-3 rounded-xl text-left text-xs font-dm font-semibold transition-all border ${
                          !hasDefect ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : 'bg-white border-[#E8E2F4] text-[#555162]'
                        }`}
                      >
                        ✓ Normal Specimen (Pass ±0.01mm)
                      </button>
                      <button
                        onClick={() => setHasDefect(true)}
                        className={`p-3 rounded-xl text-left text-xs font-dm font-semibold transition-all border ${
                          hasDefect ? 'bg-red-50 border-red-400 text-red-800' : 'bg-white border-[#E8E2F4] text-[#555162]'
                        }`}
                      >
                        ⚠ Inject Surface Defect (0.04mm Scratch)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Sub-View: Multimodal OCR Document Extractor */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Invoice Document with Bounding Boxes */}
                <div className="lg:col-span-6 p-6 rounded-2xl bg-[#FAF9FF] border border-violet-primary/20 space-y-3 relative">
                  <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#F0EBF8]">
                    <span className="font-bold text-[#111014]">INVOICE_SCAN_#8891.PDF</span>
                    <span className="text-emerald-600 font-bold">12 Bounding Boxes</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E8E2F4] space-y-2 text-xs font-mono">
                    <div className="p-2 rounded bg-violet-50/80 border border-violet-primary/30 flex items-center justify-between">
                      <span className="text-violet-primary font-bold">VENDOR_NAME</span>
                      <span className="font-semibold text-[#111014]">Acme Global Logistics</span>
                    </div>
                    <div className="p-2 rounded bg-emerald-50/80 border border-emerald-300 flex items-center justify-between">
                      <span className="text-emerald-700 font-bold">TAX_IDENTIFIER</span>
                      <span className="font-semibold text-[#111014]">AE-784-2910</span>
                    </div>
                    <div className="p-2 rounded bg-blue-50/80 border border-blue-300 flex items-center justify-between">
                      <span className="text-blue-700 font-bold">TOTAL_LIABILITY</span>
                      <span className="font-semibold text-emerald-600">$148,500.00</span>
                    </div>
                  </div>
                </div>

                {/* Right side OCR metrics */}
                <div className="lg:col-span-6 space-y-4">
                  <div className="p-5 rounded-2xl bg-white border border-[#E2F0E6] shadow-xs space-y-3">
                    <h4 className="text-sm font-sans font-bold text-[#111014]">
                      Structured Key-Value Extraction in 0.18s
                    </h4>
                    <p className="text-xs font-dm text-[#555162] leading-relaxed">
                      Eliminates manual clerical entry from PDF invoices, customs declarations, shipping manifests, and medical forms with 99.8% precision.
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono">
                      <div className="p-2.5 rounded-lg bg-[#FAF9FF] border border-[#F0EBF8]">
                        <span className="text-[#8E869E] block text-[10px]">PARSING TIME</span>
                        <span className="font-bold text-violet-primary">180ms</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#FAF9FF] border border-[#F0EBF8]">
                        <span className="text-[#8E869E] block text-[10px]">CONFIDENCE</span>
                        <span className="font-bold text-emerald-600">99.8%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ========================================================================= */}
          {/* STUDIO 4: Predictive Analytics & Sovereign Horizon */}
          {/* ========================================================================= */}
          <div className="p-7 sm:p-10 lg:p-12 rounded-[2.5rem] bg-gradient-to-br from-white via-white to-[#FEFBF6] border border-[#F6EED8] shadow-xl shadow-amber-500/5 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-5 border-b border-[#F6EED8]">
              <div>
                <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider block mb-1">
                  STUDIO 04 // PREDICTIVE FORECASTING & CLOUD SOVEREIGNTY
                </span>
                <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#111014] tracking-tight">
                  Anticipate Demand Shifts. Guard Local Tenancy.
                </h3>
              </div>

              {/* Scenario Selector */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#FAF5EB] border border-[#EDE2CD]">
                <button
                  onClick={() => setForecastScenario('baseline')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-dm font-semibold transition-all ${
                    forecastScenario === 'baseline' ? 'bg-white text-amber-900 shadow-xs' : 'text-[#666371]'
                  }`}
                >
                  Baseline
                </button>
                <button
                  onClick={() => setForecastScenario('peak')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-dm font-semibold transition-all ${
                    forecastScenario === 'peak' ? 'bg-white text-amber-900 shadow-xs' : 'text-[#666371]'
                  }`}
                >
                  Q4 Peak (+35%)
                </button>
                <button
                  onClick={() => setForecastScenario('shock')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-dm font-semibold transition-all ${
                    forecastScenario === 'shock' ? 'bg-white text-amber-900 shadow-xs' : 'text-[#666371]'
                  }`}
                >
                  Supply Shock (-20%)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Dynamic SVG Wave Chart */}
              <div className="lg:col-span-8 p-6 rounded-2xl bg-white border border-[#EFE8D8] shadow-xs relative">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-[#F6EED8]">
                  <span className="font-bold text-[#111014]">INVENTORY_DEMAND_CURVE // 90-DAY HORIZON</span>
                  <span className="text-amber-600 font-bold">
                    {forecastScenario === 'peak' ? '+35.4% Peak Forecast' : forecastScenario === 'shock' ? '-18.2% Supply Shock Buffer' : 'Steady State'}
                  </span>
                </div>

                <div className="py-6">
                  <svg className="w-full h-36" viewBox="0 0 360 100" fill="none">
                    {/* Shaded Corridor */}
                    <path
                      d={
                        forecastScenario === 'peak'
                          ? "M 10 70 Q 100 80, 180 40 T 350 15 L 350 45 L 180 65 L 10 85 Z"
                          : forecastScenario === 'shock'
                          ? "M 10 70 Q 100 75, 180 65 T 350 75 L 350 95 L 180 85 L 10 85 Z"
                          : "M 10 70 Q 100 70, 180 50 T 350 45 L 350 70 L 180 70 L 10 85 Z"
                      }
                      fill="#F59E0B"
                      fillOpacity="0.15"
                    />

                    {/* Historical Curve */}
                    <path
                      d="M 10 70 Q 100 75, 180 45"
                      stroke="#7650E8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* Projected Forecast Curve */}
                    <path
                      d={
                        forecastScenario === 'peak'
                          ? "M 180 45 Q 260 20, 350 15"
                          : forecastScenario === 'shock'
                          ? "M 180 45 Q 260 60, 350 75"
                          : "M 180 45 Q 260 45, 350 45"
                      }
                      stroke="#F59E0B"
                      strokeWidth="3"
                      strokeDasharray="4 4"
                      strokeLinecap="round"
                    />

                    {/* Reorder Waypoint Node */}
                    <circle cx="180" cy="45" r="6" fill="#F59E0B" />
                    <circle cx="180" cy="45" r="11" stroke="#F59E0B" strokeWidth="1.5" opacity="0.4" />
                  </svg>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[#8E869E] pt-2 border-t border-[#F6EED8]">
                  <span>Historical Actuals</span>
                  <span className="text-amber-700 font-bold">Optimal Reorder Trigger: Day 22</span>
                </div>
              </div>

              {/* Sovereign Cloud Shield Badge Box */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#FAF9FF] border border-violet-primary/20 space-y-3">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-violet-primary" />
                  <h4 className="text-sm font-sans font-bold text-[#111014]">
                    Sovereign Tenancy Shield
                  </h4>
                </div>
                <p className="text-xs font-dm text-[#555162] leading-relaxed">
                  All predictive telemetry and model retraining executed exclusively within your private VPC boundary without third-party data egress.
                </p>
                <div className="pt-2 space-y-1.5 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <Check className="w-3.5 h-3.5" /> UAE Sovereign Cloud Ready
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <Check className="w-3.5 h-3.5" /> On-Premise GPU Acceleration
                  </div>
                  <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                    <Check className="w-3.5 h-3.5" /> Zero Data Retention Guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

