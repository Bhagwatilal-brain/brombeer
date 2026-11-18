import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Landmark,
  ShieldCheck,
  HeartPulse,
  Truck,
  Factory,
  Users,
  CheckCircle2,
  Lock,
  ArrowRight,
  ExternalLink,
  Eye,
  Scan,
  Database,
  Cpu,
  FileCheck,
  Radar,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';
import { Container } from '../../layout/Container';
import { Button } from '../../ui/Button';

export const IndustriesBentoGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax transform offsets for background floating depth
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [-30, 40]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [40, -50]);
  const parallaxImgShift = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  // Interactive toggle states for visual micro-simulations
  const [govQueryVerified, setGovQueryVerified] = useState(true);
  const [defenceAirGapActive, setDefenceAirGapActive] = useState(true);
  const [healthcareMaskPII, setHealthcareMaskPII] = useState(true);
  const [manufacturingVisionRunning, setManufacturingVisionRunning] = useState(true);

  return (
    <section id="bento-grid" ref={containerRef} className="py-14 sm:py-20 lg:py-28 bg-[#FAF8FE] relative overflow-hidden">
      {/* Parallax Decorative Depth Elements */}
      <motion.div
        style={{ y: parallaxY1 }}
        className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#E4D7F8]/40 to-transparent blur-[110px] pointer-events-none"
      />
      <motion.div
        style={{ y: parallaxY2 }}
        className="absolute bottom-40 left-[-10%] w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#EBE3FC]/45 to-transparent blur-[120px] pointer-events-none"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#6853A5]/20 shadow-sm text-xs font-semibold text-violet-primary mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-primary" />
            <span className="font-mono uppercase text-[11px] tracking-wider">BENTO ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.12]">
            Engineered Where Reliability, Privacy, and{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-deep">
              Domain Depth are Non-Negotiable.
            </span>
          </h2>

          <p className="text-[#666371] text-sm sm:text-base font-dm leading-relaxed mt-4 max-w-2xl">
            Explore Brombeer’s 6 specialized sector platforms. Each card integrates dedicated operational pipelines, strict regulatory boundaries, and live telemetry to solve your sector’s most demanding bottlenecks.
          </p>
        </div>

        {/* 12-Column Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">

          {/* =========================================================================
              CARD 1: Government & Public Sector (Span 7, Wide Tall Hero Card)
              ========================================================================= */}
          <motion.div
            id="government"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 scroll-mt-24"
          >
            <div className="group relative rounded-[2.25rem] bg-white border border-[#E8E2F5] hover:border-violet-primary/45 shadow-[0_12px_45px_-15px_rgba(118,80,232,0.08)] hover:shadow-2xl hover:shadow-violet-primary/15 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
              {/* Subtle Top Purple Accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-light via-violet-primary to-violet-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Background Artwork Layer with Parallax & Soft Mist Gradient */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#F6F2FC]">
                <motion.img
                  style={{ y: parallaxImgShift }}
                  src="/images/industry_solutions/Lavender Capitol in the Mist.png"
                  alt="Government & Public Sector"
                  className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />

                {/* Overlaid Pill Badges */}
                <div className="absolute top-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E5DEFA] text-xs font-bold text-violet-primary shadow-sm">
                    <Landmark className="w-3.5 h-3.5 text-violet-primary" />
                    <span>GOVERNMENT & PUBLIC SECTOR</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50/95 backdrop-blur-md border border-emerald-200/80 text-[11px] font-mono font-medium text-emerald-700 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>SOVEREIGN ENCLAVE · AUDITED</span>
                  </div>
                </div>

                {/* Headline inside hero image bottom */}
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#111014] tracking-tight">
                    Accessible Civic Services & Audited Policy AI
                  </h3>
                  <p className="text-xs sm:text-sm font-dm text-[#666371] mt-1 max-w-xl">
                    Eliminate administrative casework backlogs while guaranteeing strict sovereign data protection and 100% human accountability.
                  </p>
                </div>
              </div>

              {/* Visual Interactive Architecture HUD */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Visual Pipeline Simulation: Citizen Query Ingestion */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9FF] border border-[#ECE5FA] space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-violet-primary" />
                      <span className="text-xs font-mono font-semibold uppercase text-[#111014]">
                        Casework RAG Verification Stream
                      </span>
                    </div>
                    <button
                      onClick={() => setGovQueryVerified(!govQueryVerified)}
                      className="text-[11px] font-mono text-violet-primary hover:underline flex items-center gap-1"
                    >
                      <span>{govQueryVerified ? 'Toggle Re-check' : 'Re-verify Stream'}</span>
                    </button>
                  </div>

                  {/* Citizen Query Card Mockup */}
                  <div className="p-3 rounded-xl bg-white border border-[#EAE4F5] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono text-[#8C8799] uppercase tracking-wider block">
                        Citizen Query #CV-8912
                      </span>
                      <p className="text-xs font-dm font-semibold text-[#111014]">
                        "Application for Municipal Code § 44-B Commercial Building Variance"
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-violet-50 text-violet-primary text-[10px] font-mono font-bold">
                        140ms Latency
                      </span>
                      {govQueryVerified ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Grounded: Res. 2024-18
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 text-amber-700 text-[10px] font-mono font-bold">
                          Validating Policy...
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 3 Step Visual Flow */}
                  <div className="grid grid-cols-3 gap-2 text-center pt-1">
                    <div className="p-2 rounded-lg bg-white/70 border border-[#ECE5FA]">
                      <span className="text-[10px] font-mono text-[#7650E8] block font-bold">01. INGEST</span>
                      <span className="text-[11px] text-[#555261] font-dm">Public Record OCR</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/70 border border-[#ECE5FA]">
                      <span className="text-[10px] font-mono text-[#7650E8] block font-bold">02. GROUND</span>
                      <span className="text-[11px] text-[#555261] font-dm">Statute Cross-Ref</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/70 border border-[#ECE5FA]">
                      <span className="text-[10px] font-mono text-[#7650E8] block font-bold">03. HUMAN SIGN</span>
                      <span className="text-[11px] text-[#555261] font-dm">Officer Review Gate</span>
                    </div>
                  </div>
                </div>

                {/* Quantitative Telemetry Strip */}
                <div className="grid grid-cols-3 gap-3 border-t border-[#F0EAFB] pt-4">
                  <div>
                    <span className="text-xl sm:text-2xl font-sans font-bold text-[#111014] tracking-tight block">
                      -72%
                    </span>
                    <span className="text-[11px] font-dm text-[#666371]">
                      Casework response backlog
                    </span>
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl font-sans font-bold text-violet-primary tracking-tight block">
                      100%
                    </span>
                    <span className="text-[11px] font-dm text-[#666371]">
                      Legislative source citations
                    </span>
                  </div>
                  <div>
                    <span className="text-xl sm:text-2xl font-sans font-bold text-emerald-600 tracking-tight block">
                      Zero
                    </span>
                    <span className="text-[11px] font-dm text-[#666371]">
                      Data shared with public clouds
                    </span>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#666371] font-dm">
                    <Lock className="w-3.5 h-3.5 text-violet-primary" />
                    <span>Compatible with UAE National Sovereign & FedRAMP standards</span>
                  </div>
                  <Button
                    asLink
                    href="/contact"
                    variant="secondary"
                    size="sm"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="border-violet-primary/20 hover:border-violet-primary"
                  >
                    Deploy for Public Sector
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>


          {/* =========================================================================
              CARD 2: Defence & Security Operations (Span 5, Tactical Visual Card)
              ========================================================================= */}
          <motion.div
            id="defence-security"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 scroll-mt-24"
          >
            <div className="group relative rounded-[2.25rem] bg-white border border-[#E8E2F5] hover:border-violet-primary/45 shadow-[0_12px_45px_-15px_rgba(118,80,232,0.08)] hover:shadow-2xl hover:shadow-violet-primary/15 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-violet-primary to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Background Radar Artwork Layer */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#120F1D]">
                <motion.img
                  style={{ y: parallaxImgShift }}
                  src="/images/industry_solutions/Lavender Radar Landscape with Airliner.png"
                  alt="Defence and Security Radar"
                  className="w-full h-full object-cover object-center opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />

                {/* Animated Tactical Radar Sweep Line */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-violet-light/30 relative flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-violet-light/20" />
                    <div className="w-16 h-16 rounded-full border border-violet-light/20" />
                    {/* Rotating Scanner Line */}
                    <div className="absolute top-1/2 left-1/2 w-24 h-[1px] bg-gradient-to-r from-violet-light to-transparent origin-left animate-spin" style={{ animationDuration: '4s' }} />
                  </div>
                </div>

                {/* Tactical Top Badges */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111014]/80 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>DEFENCE & SECURITY</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 backdrop-blur-md border border-blue-400/40 text-[11px] font-mono text-blue-200">
                    <Lock className="w-3 h-3 text-blue-400" />
                    <span>AIR-GAP ENCLAVE</span>
                  </div>
                </div>

                {/* Headline overlay */}
                <div className="absolute bottom-4 left-6 right-6">
                  <h3 className="text-xl sm:text-2xl font-sans font-extrabold text-[#111014] tracking-tight">
                    Air-Gapped Operational Decision Support
                  </h3>
                </div>
              </div>

              {/* Tactical Content & HUD */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-xs sm:text-sm font-dm text-[#666371] leading-relaxed">
                  Engineered with cryptographic authorization boundaries, immutable audit ledgers, and zero reliance on external network connectivity.
                </p>

                {/* Tactical HUD Telemetry Box */}
                <div className="p-4 rounded-2xl bg-[#111018] text-white border border-[#2D283E] space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[#A29DB8] flex items-center gap-1.5">
                      <Radar className="w-3.5 h-3.5 text-blue-400" />
                      SYSTEM STATUS
                    </span>
                    <span className="text-emerald-400 text-[11px] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      AIR-GAPPED : SECURE
                    </span>
                  </div>

                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-white/60">Asset Readiness Index:</span>
                      <span className="text-white font-bold">99.4% Validated</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Technical Manual Retrieval:</span>
                      <span className="text-blue-400">&lt;280ms Deterministic</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">External Telemetry Call:</span>
                      <span className="text-rose-400 font-bold">BLOCKED (0 bytes)</span>
                    </div>
                  </div>

                  <div className="pt-1">
                    <button
                      onClick={() => setDefenceAirGapActive(!defenceAirGapActive)}
                      className="w-full py-1.5 px-3 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 text-[10px] text-center text-white/90 transition-colors uppercase tracking-wider"
                    >
                      {defenceAirGapActive ? 'Command Gate: Strict Human Oversight' : 'Command Gate: Standby'}
                    </button>
                  </div>
                </div>

                {/* Bottom Metric & Action */}
                <div className="flex items-center justify-between border-t border-[#F0EAFB] pt-4">
                  <div>
                    <span className="text-xl font-sans font-bold text-[#111014] tracking-tight block">
                      100% On-Prem
                    </span>
                    <span className="text-[11px] font-dm text-[#666371]">
                      Tactical deployable edge
                    </span>
                  </div>

                  <Button
                    asLink
                    href="/contact"
                    variant="secondary"
                    size="sm"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="border-violet-primary/20 hover:border-violet-primary"
                  >
                    Discuss Protocols
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>


          {/* =========================================================================
              CARD 3: Healthcare Operations & Clinical Records (Span 4, Clean Precision Card)
              ========================================================================= */}
          <motion.div
            id="healthcare"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 scroll-mt-24"
          >
            <div className="group relative rounded-[2.25rem] bg-white border border-[#E8E2F5] hover:border-violet-primary/45 shadow-[0_12px_45px_-15px_rgba(118,80,232,0.08)] hover:shadow-2xl hover:shadow-violet-primary/15 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-rose-400 via-violet-primary to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Artwork Layer */}
              <div className="relative h-56 w-full overflow-hidden bg-[#F6F2FC]">
                <img
                  src="/images/industry_solutions/Modern Purple Hospital Complex.png"
                  alt="Modern Purple Hospital Complex"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E5DEFA] text-xs font-bold text-violet-primary shadow-xs">
                    <HeartPulse className="w-3.5 h-3.5 text-rose-500" />
                    <span>HEALTHCARE OPS</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-50 border border-rose-200 text-[10px] font-mono font-bold text-rose-700">
                    HIPAA & HL7/FHIR
                  </span>
                </div>

                <div className="absolute bottom-3 left-5 right-5">
                  <h3 className="text-xl font-sans font-extrabold text-[#111014] tracking-tight">
                    Clinical Document Extraction
                  </h3>
                </div>
              </div>

              {/* Interactive Extraction HUD */}
              <div className="p-6 space-y-5">
                <p className="text-xs font-dm text-[#666371] leading-relaxed">
                  Synthesize complex EHR charts, clinical summaries, and operational capacity with automated PHI de-identification.
                </p>

                {/* De-identification simulation pill */}
                <div className="p-3.5 rounded-xl bg-[#FAF9FF] border border-[#ECE5FA] space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#666371]">De-identification HUD:</span>
                    <button
                      onClick={() => setHealthcareMaskPII(!healthcareMaskPII)}
                      className="text-violet-primary hover:underline text-[10px] font-bold"
                    >
                      {healthcareMaskPII ? 'Show Raw Text' : 'Apply Safe Harbor'}
                    </button>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white border border-[#E8E2F4] text-[11px] font-dm text-[#111014] leading-relaxed">
                    Patient{' '}
                    {healthcareMaskPII ? (
                      <span className="px-1.5 py-0.5 rounded bg-violet-100 text-violet-primary font-mono text-[10px]">
                        [REDACTED_ID_902]
                      </span>
                    ) : (
                      <span className="text-rose-600 font-semibold underline">Johnathan Miller (DOB: 1978-04-12)</span>
                    )}{' '}
                    presented with acute symptoms. FHIR mapping to SNOMED-CT verified.
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 border-t border-[#F0EAFB] pt-4">
                  <div>
                    <span className="text-xl font-sans font-bold text-[#111014] block">-65%</span>
                    <span className="text-[10px] font-dm text-[#666371]">Doc administrative burden</span>
                  </div>
                  <div>
                    <span className="text-xl font-sans font-bold text-emerald-600 block">100%</span>
                    <span className="text-[10px] font-dm text-[#666371]">Physician oversight control</span>
                  </div>
                </div>

                <div className="pt-1">
                  <Button
                    asLink
                    href="/contact"
                    variant="secondary"
                    size="sm"
                    className="w-full text-center justify-center text-xs"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Explore Healthcare AI
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>


          {/* =========================================================================
              CARD 4: Logistics & Supply Chain (Span 4, Flow Dynamic Card)
              ========================================================================= */}
          <motion.div
            id="logistics"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 scroll-mt-24"
          >
            <div className="group relative rounded-[2.25rem] bg-white border border-[#E8E2F5] hover:border-violet-primary/45 shadow-[0_12px_45px_-15px_rgba(118,80,232,0.08)] hover:shadow-2xl hover:shadow-violet-primary/15 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-amber-500 via-orange-500 to-violet-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Artwork Layer */}
              <div className="relative h-56 w-full overflow-hidden bg-[#F6F2FC]">
                <img
                  src="/images/industry_solutions/Lavender Port_ Cranes and Cargo.png"
                  alt="Lavender Port Cranes and Cargo"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E5DEFA] text-xs font-bold text-violet-primary shadow-xs">
                    <Truck className="w-3.5 h-3.5 text-amber-500" />
                    <span>LOGISTICS & PORT</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-[10px] font-mono font-bold text-amber-700">
                    REAL-TIME EDI
                  </span>
                </div>

                <div className="absolute bottom-3 left-5 right-5">
                  <h3 className="text-xl font-sans font-extrabold text-[#111014] tracking-tight">
                    Throughput & Manifest Flow
                  </h3>
                </div>
              </div>

              {/* Interactive Freight Flow HUD */}
              <div className="p-6 space-y-5">
                <p className="text-xs font-dm text-[#666371] leading-relaxed">
                  Automate bill-of-lading reconciliation, predict container dwell times, and synchronize warehouse inventory in real time.
                </p>

                {/* Live Manifest Flow Widget */}
                <div className="p-3.5 rounded-xl bg-[#FAF9FF] border border-[#ECE5FA] space-y-2.5 font-mono text-xs">
                  <div className="flex items-center justify-between text-[10px] text-[#666371]">
                    <span>CUSTOMS OCR PIPELINE</span>
                    <span className="text-emerald-600 font-bold">READY · MATCHED</span>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-[#E8E2F4]">
                    <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-[10px]">
                      BOL
                    </div>
                    <div className="space-y-0.5 text-[11px] font-dm">
                      <div className="font-semibold text-[#111014]">Manifest #MSC-99201-B</div>
                      <div className="text-[10px] text-[#666371]">48 TEU Containers · Dwell ETA: 1.4h</div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 border-t border-[#F0EAFB] pt-4">
                  <div>
                    <span className="text-xl font-sans font-bold text-[#111014] block">4.2x</span>
                    <span className="text-[10px] font-dm text-[#666371]">Faster clearance speed</span>
                  </div>
                  <div>
                    <span className="text-xl font-sans font-bold text-violet-primary block">98.6%</span>
                    <span className="text-[10px] font-dm text-[#666371]">Demand forecast accuracy</span>
                  </div>
                </div>

                <div className="pt-1">
                  <Button
                    asLink
                    href="/contact"
                    variant="secondary"
                    size="sm"
                    className="w-full text-center justify-center text-xs"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Explore Supply Chain AI
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>


          {/* =========================================================================
              CARD 5: Manufacturing & Robotics (Span 4, Precision Engineering Card)
              ========================================================================= */}
          <motion.div
            id="manufacturing"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 scroll-mt-24"
          >
            <div className="group relative rounded-[2.25rem] bg-white border border-[#E8E2F5] hover:border-violet-primary/45 shadow-[0_12px_45px_-15px_rgba(118,80,232,0.08)] hover:shadow-2xl hover:shadow-violet-primary/15 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-500 via-teal-500 to-violet-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Artwork Layer */}
              <div className="relative h-56 w-full overflow-hidden bg-[#F6F2FC]">
                <img
                  src="/images/industry_solutions/Futuristic Lavender Robotic Assembly Line.png"
                  alt="Futuristic Lavender Robotic Assembly Line"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E5DEFA] text-xs font-bold text-violet-primary shadow-xs">
                    <Factory className="w-3.5 h-3.5 text-emerald-600" />
                    <span>MANUFACTURING</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-mono font-bold text-emerald-700">
                    60 FPS EDGE
                  </span>
                </div>

                <div className="absolute bottom-3 left-5 right-5">
                  <h3 className="text-xl font-sans font-extrabold text-[#111014] tracking-tight">
                    Sub-Millimeter Quality Inspection
                  </h3>
                </div>
              </div>

              {/* Interactive Edge Vision Reticle HUD */}
              <div className="p-6 space-y-5">
                <p className="text-xs font-dm text-[#666371] leading-relaxed">
                  Real-time edge computer vision and acoustic anomaly sensing deployed directly onto high-speed production lines.
                </p>

                {/* Simulated Computer Vision Reticle */}
                <div className="p-3.5 rounded-xl bg-[#111018] text-white border border-[#2B263B] space-y-2 relative overflow-hidden font-mono text-xs">
                  <div className="flex items-center justify-between text-[10px] text-white/60">
                    <span className="flex items-center gap-1">
                      <Scan className="w-3 h-3 text-emerald-400" />
                      LINE CAMERA #02
                    </span>
                    <button
                      onClick={() => setManufacturingVisionRunning(!manufacturingVisionRunning)}
                      className="text-emerald-400 hover:underline"
                    >
                      {manufacturingVisionRunning ? 'Active (60 FPS)' : 'Paused'}
                    </button>
                  </div>

                  {/* Bounding Box Visualizer */}
                  <div className="p-2.5 rounded-lg bg-black/40 border border-emerald-500/40 relative flex items-center justify-between text-[11px]">
                    <div>
                      <span className="text-emerald-400 font-bold block">PART #AX-8820</span>
                      <span className="text-white/60 text-[10px]">Tolerance: ±0.015mm</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px] border border-emerald-500/30">
                      DEFECT: NONE
                    </span>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 border-t border-[#F0EAFB] pt-4">
                  <div>
                    <span className="text-xl font-sans font-bold text-[#111014] block">-38%</span>
                    <span className="text-[10px] font-dm text-[#666371]">Factory scrap reduction</span>
                  </div>
                  <div>
                    <span className="text-xl font-sans font-bold text-violet-primary block">&lt;12ms</span>
                    <span className="text-[10px] font-dm text-[#666371]">Edge inference latency</span>
                  </div>
                </div>

                <div className="pt-1">
                  <Button
                    asLink
                    href="/contact"
                    variant="secondary"
                    size="sm"
                    className="w-full text-center justify-center text-xs"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Explore Industrial AI
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>


          {/* =========================================================================
              CARD 6: Enterprise & Strategic Advisory (Span 12, Full Width Panoramic)
              ========================================================================= */}
          <motion.div
            id="enterprise-services"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-12 scroll-mt-24"
          >
            <div className="group relative rounded-[2.5rem] bg-white border border-[#E8E2F5] hover:border-violet-primary/45 shadow-[0_15px_50px_-15px_rgba(118,80,232,0.1)] hover:shadow-2xl hover:shadow-violet-primary/15 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-violet-light via-violet-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                {/* Left Panoramic Artwork Strip */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] overflow-hidden bg-[#F6F2FC]">
                  <motion.img
                    style={{ y: parallaxImgShift }}
                    src="/images/industry_solutions/Lavender High-Rise Boardroom Panorama.png"
                    alt="Lavender High-Rise Boardroom Panorama"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-white/30 to-white" />

                  <div className="absolute top-6 left-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#E5DEFA] text-xs font-bold text-violet-primary shadow-sm">
                      <Users className="w-3.5 h-3.5 text-violet-primary" />
                      <span>ENTERPRISE & PROFESSIONAL SERVICES</span>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="px-2.5 py-1 rounded-full bg-[#111014]/80 backdrop-blur-md text-white text-[11px] font-mono">
                      ZERO TRAINING ON CLIENT DATA · SOC2 READY
                    </span>
                  </div>
                </div>

                {/* Right Interactive Multi-Source Studio */}
                <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-extrabold text-[#111014] tracking-tight leading-[1.15]">
                      Unified Corporate Knowledge with Verifiable Citations
                    </h3>
                    <p className="text-sm sm:text-base font-dm text-[#666371] leading-relaxed mt-3 max-w-2xl">
                      Legal, financial, consulting, and corporate teams synthesize thousands of documents across SharePoint, Salesforce, Confluence, and internal databases — without ever exposing IP to third-party model providers.
                    </p>
                  </div>

                  {/* Visual Knowledge Assistant Synthesis Card */}
                  <div className="p-5 rounded-2xl bg-[#FAF9FF] border border-[#ECE5FA] space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EAE4F5] pb-3">
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-violet-primary" />
                        <span className="text-xs font-mono font-semibold uppercase text-[#111014]">
                          Cross-Silo Query: "Master Service Agreement Supplier Term Variance"
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                        4 Sources Grounded
                      </span>
                    </div>

                    {/* Synthesized Result with Citations */}
                    <div className="space-y-2 text-xs font-dm text-[#111014]">
                      <p className="leading-relaxed">
                        "Clause 14.2 of the 2024 MSA contradicts the previous liability cap in Exhibit B, exposing a $2.4M indemnification gap."
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[10px]">
                        <span className="px-2 py-0.5 rounded bg-white border border-violet-primary/30 text-violet-primary">
                          📄 Legal_MSA_v3.pdf · Page 42
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white border border-violet-primary/30 text-violet-primary">
                          📊 Salesforce Opp #9012
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white border border-violet-primary/30 text-violet-primary">
                          📑 SharePoint Policy Enclave
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Row & Action */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-[#F0EAFB]">
                    <div>
                      <span className="text-2xl font-sans font-bold text-[#111014] block">85%</span>
                      <span className="text-xs font-dm text-[#666371]">Drafting & RFP acceleration</span>
                    </div>
                    <div>
                      <span className="text-2xl font-sans font-bold text-violet-primary block">100%</span>
                      <span className="text-xs font-dm text-[#666371]">Fine-grained RBAC permissions</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1 flex items-center sm:justify-end">
                      <Button
                        asLink
                        href="/contact"
                        variant="primary"
                        size="md"
                        icon={<ArrowRight className="w-4 h-4" />}
                        className="w-full sm:w-auto shadow-md shadow-violet-primary/20"
                      >
                        Request Enterprise Proof
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

