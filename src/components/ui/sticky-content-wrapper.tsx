"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Activity,
  ShieldCheck,
  FileText,
  UserCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface StickyContentStep {
  id: string;
  number: string;
  kicker: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  highlight: string;
  graphicType: "fhir" | "redaction" | "citations" | "approval";
  image?: string;
}

export interface StickyContentWrapperProps {
  steps: StickyContentStep[];
  eyebrow?: string;
  heading?: string;
  subheading?: string;
  className?: string;
}

export const StickyContentWrapper: React.FC<StickyContentWrapperProps> = ({
  steps,
  eyebrow,
  heading = "Deterministic Clinical Ingestion & Sovereign Physician Gates",
  subheading = "Follow the end-to-end patient record lifecycle from on-premises EHR ingestion to zero-hallucination physician sign-off.",
  className = "",
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      stepRefs.current.forEach((el, index) => {
        if (!el) return;

        ScrollTrigger.create({
          trigger: el,
          start: "top center+=100",
          end: "bottom center+=100",
          onEnter: () => setActiveStepIndex(index),
          onEnterBack: () => setActiveStepIndex(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [steps]);

  const activeStep = steps[activeStepIndex] || steps[0];

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 px-4">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#6853A5]/20 shadow-xs text-xs font-semibold text-violet-primary mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-primary" />
            <span className="font-mono uppercase text-[11px] tracking-wider">{eyebrow}</span>
          </div>
        )}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-[#111014] tracking-tight leading-[1.14]">
          {heading.includes("&") ? (
            <>
              {heading.split("&")[0]}
              {"& "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary via-[#6366F1] to-violet-deep">
                {heading.split("&")[1].trim()}
              </span>
            </>
          ) : (
            heading
          )}
        </h2>
        {subheading && (
          <p className="text-[#666371] text-sm sm:text-base font-dm leading-relaxed mt-4 max-w-2xl mx-auto">
            {subheading}
          </p>
        )}
      </div>

      {/* Split Stage: Left Scrolling Narrative + Right Sticky Viewport */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
        {/* Left Column: Interactive Story Steps */}
        <div className="lg:col-span-6 space-y-24 sm:space-y-36 py-8">
          {steps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <div
                key={step.id}
                ref={(el) => {
                  stepRefs.current[idx] = el;
                }}
                className={`p-8 sm:p-10 rounded-[28px] transition-all duration-500 border ${isActive
                  ? "bg-white border-violet-primary/40 shadow-[0_20px_50px_-15px_rgba(118,80,232,0.18)] scale-[1.02]"
                  : "bg-white/60 border-slate-200/80 opacity-60 hover:opacity-80"
                  }`}
              >
                {/* Step Kicker */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="font-mono text-xs font-bold tracking-widest uppercase text-violet-primary px-3 py-1 rounded-full bg-violet-light/15 border border-violet-primary/20">
                    {step.kicker}
                  </span>
                  <span className="font-mono text-sm font-semibold text-slate-400">
                    {step.number} / {pad2(steps.length)}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#111014] tracking-tight leading-snug mb-3.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-dm text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Highlight callout */}
                <div className="p-3.5 rounded-xl bg-[#FAF8FE] border border-[#6853A5]/15 mb-6 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[#2E283F]">
                    {step.highlight}
                  </span>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  {step.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="font-mono text-xl sm:text-2xl font-bold text-violet-primary">
                        {m.value}
                      </div>
                      <div className="font-dm text-xs text-slate-500 mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Sticky Interactive Viewport */}
        <div className="lg:col-span-6 sticky top-28 z-20 pb-12">
          <div className="relative rounded-[32px] bg-gradient-to-br from-[#121118] via-[#1A1826] to-[#0D0C13] border border-white/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.5)] overflow-hidden min-h-[520px] sm:min-h-[580px] p-6 sm:p-8 flex flex-col justify-between text-white">
            {/* Ambient Purple Backlight */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-violet-primary/25 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

            {/* Top Status Bar */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider text-slate-300">
                  SOVEREIGN CLINICAL RUNTIME · NODE 0{activeStepIndex + 1}
                </span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-violet-300 px-2.5 py-1 rounded-md bg-white/10 border border-white/15">
                HIPAA · ZERO EGRESS
              </span>
            </div>

            {/* Middle Dynamic Interactive Screen */}
            <div className="relative z-10 my-6 flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, scale: 0.96, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  {/* Step Graphic 1: FHIR Packet Ingestion Stream */}
                  {activeStep.graphicType === "fhir" && (
                    <div className="space-y-3.5 bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10 font-mono text-xs">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/10 pb-2">
                        <span>POST /fhir/v4/DiagnosticReport</span>
                        <span className="text-emerald-400">200 OK · 14ms</span>
                      </div>
                      <div className="space-y-1.5 text-slate-300 text-[11.5px] leading-relaxed">
                        <p className="text-violet-300 font-semibold">{"{"}</p>
                        <p className="pl-4">
                          &quot;resourceType&quot;: &quot;Observation&quot;,
                        </p>
                        <p className="pl-4">
                          &quot;status&quot;: &quot;final&quot;,
                        </p>
                        <p className="pl-4">
                          &quot;code&quot;: &quot;LOINC:883-9 (ABO & Rh Group)&quot;,
                        </p>
                        <p className="pl-4 text-emerald-300">
                          &quot;verificationGate&quot;: &quot;IN_MEMORY_AES_256&quot;,
                        </p>
                        <p className="pl-4 text-amber-300">
                          &quot;egressShield&quot;: &quot;AIR_GAP_ENCLAVE_ACTIVE&quot;
                        </p>
                        <p className="text-violet-300 font-semibold">{"}"}</p>
                      </div>
                      <div className="pt-2 flex items-center gap-2 text-[10px] text-slate-400">
                        <Lock className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Direct socket writeback to Cerner & Epic Core</span>
                      </div>
                    </div>
                  )}

                  {/* Step Graphic 2: PHI Redaction Matrix */}
                  {activeStep.graphicType === "redaction" && (
                    <div className="space-y-3 bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-xs">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-white/10 pb-2">
                        <span>DETERMINISTIC PHI REDACTION</span>
                        <span className="text-emerald-400">99.99% Purged</span>
                      </div>
                      <div className="p-3 bg-red-950/30 rounded-lg border border-red-500/20 text-red-200 line-through opacity-70">
                        Patient: Sarah Jenkins (MRN-902148), DOB: 14-Aug-1978. Address: 742 Evergreen Terrace.
                      </div>
                      <div className="flex justify-center">
                        <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest">
                          ↓ Cryptographic Tokenization ↓
                        </span>
                      </div>
                      <div className="p-3 bg-emerald-950/30 rounded-lg border border-emerald-500/30 text-emerald-300 font-mono text-[11px]">
                        Patient: [ENCLAVE_TOKEN_89B] · Diagnosis: Acute Sinusitis · Vitals: Normotensive
                      </div>
                    </div>
                  )}

                  {/* Step Graphic 3: Peer-Reviewed Clinical Citations */}
                  {activeStep.graphicType === "citations" && (
                    <div className="space-y-3 bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-xs">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-white/10 pb-2">
                        <span>ANTI-HALLUCINATION CITATION GATE</span>
                        <span className="text-emerald-400">100% Deterministic</span>
                      </div>
                      <div className="space-y-2">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <div className="flex items-center justify-between font-mono text-[11px] text-violet-300">
                            <span>PubMed ID: 38472910</span>
                            <span className="text-emerald-400 font-semibold">99.8% Grounded</span>
                          </div>
                          <p className="text-slate-300 text-xs mt-1.5 font-dm">
                            &quot;Recommended second-line dosage: 500mg Amoxicillin-Clavulanate q12h verified against renal clearance tables.&quot;
                          </p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                          <div className="flex items-center justify-between font-mono text-[11px] text-violet-300">
                            <span>Hospital Formulary Standard</span>
                            <span className="text-emerald-400 font-semibold">Zero Contraindication</span>
                          </div>
                          <p className="text-slate-300 text-xs mt-1.5 font-dm">
                            Allergies cross-referenced with Penicillin sensitivity test results.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step Graphic 4: Dual-Key Physician Sign-Off */}
                  {activeStep.graphicType === "approval" && (
                    <div className="space-y-3 bg-black/40 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-xs">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-white/10 pb-2">
                        <span>PHYSICIAN BIOMETRIC SIGN-OFF</span>
                        <span className="text-emerald-400 font-semibold">Seal Verified</span>
                      </div>
                      <div className="p-4 rounded-xl bg-gradient-to-r from-violet-900/40 to-indigo-900/40 border border-violet-500/30 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-violet-600/30 border border-violet-400/40 flex items-center justify-center flex-shrink-0">
                          <UserCheck className="w-6 h-6 text-violet-300" />
                        </div>
                        <div>
                          <div className="font-sans font-bold text-sm text-white">
                            Dr. Elena Rostova, MD (Cardiology)
                          </div>
                          <div className="font-mono text-[11px] text-slate-300">
                            Digital Key ID: RSA-4096-7F32 · Time: 14:22:08 UTC
                          </div>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-emerald-300 text-xs font-mono flex items-center justify-between">
                        <span>Status: Written to Epic Hyperspace</span>
                        <span className="text-emerald-400">✓ Committed</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="relative z-10 border-t border-white/10 pt-4 flex items-center justify-between font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-violet-400" />
                <span>Enclave Compute: INT8 Private NVLink</span>
              </div>
              <div className="text-emerald-400 font-semibold">Latency: 110ms</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const pad2 = (n: number) => (n < 10 ? "0" : "") + n;
