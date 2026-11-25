"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Container } from "../../layout/Container";

interface HealthcareApplication {
  id: string;
  number: string;
  title: string;
  kicker: string;
  description: string;
  image: string;
  fallbackImage: string;
  tags: string[];
}

const HEALTHCARE_APPLICATIONS: HealthcareApplication[] = [
  {
    id: "medical-document-processing",
    number: "01",
    title: "Medical-Document Processing",
    kicker: "Clinical Documentation",
    description:
      "Automate ingestion and structuring of unstructured clinical progress notes, discharge summaries, and radiology reports with high fidelity and zero cloud data retention.",
    image: "/images/healthcare/health-doc-processing.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    tags: ["EHR Ingestion", "Radiology Reports", "Discharge Summaries", "Zero Cloud Retention"],
  },
  {
    id: "admin-knowledge-assistants",
    number: "02",
    title: "Administrative Knowledge Assistants",
    kicker: "Institutional SOP Retrieval",
    description:
      "Empower operational staff with verified, conversational access to institutional SOPs, formulary guidelines, insurance billing codes, and hospital administrative protocols.",
    image: "/images/healthcare/health-knowledge-assistant.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    tags: ["Institutional SOPs", "Billing Guidelines", "Policy Retrieval", "Staff Assistant"],
  },
  {
    id: "record-classification",
    number: "03",
    title: "Record Classification & Extraction",
    kicker: "Taxonomy & Diagnostic Coding",
    description:
      "Automatically categorize multi-format medical archives, map diagnoses to standard ICD-10/CPT coding taxonomies, and extract structured patient variables safely.",
    image: "/images/healthcare/health-record-classification.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    tags: ["ICD-10 / CPT Mapping", "Record Taxonomy", "Variable Extraction", "Deterministic Check"],
  },
  {
    id: "workflow-support",
    number: "04",
    title: "Appointment & Service Workflow Support",
    kicker: "Clinical Scheduling Support",
    description:
      "Streamline scheduling logistics, triage outpatient communications, and coordinate clinical service handoffs to reduce repetitive coordination overhead across clinical wards.",
    image: "/images/healthcare/health-workflow-support.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1200&q=80",
    tags: ["Appointment Scheduling", "Outpatient Triage", "Ward Coordination", "Service Routing"],
  },
  {
    id: "operational-analytics",
    number: "05",
    title: "Operational Analytics",
    kicker: "Ward Capacity Telemetry",
    description:
      "Monitor real-time ward bed occupancy, forecast patient admission surges, and optimize medical equipment allocation with privacy-preserving localized intelligence.",
    image: "/images/healthcare/health-operational-analytics.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
    tags: ["Bed Occupancy", "Admission Forecasts", "Resource Allocation", "Privacy-Preserving"],
  },
  {
    id: "system-interoperability",
    number: "06",
    title: "Healthcare-System Interoperability",
    kicker: "Epic & Cerner EHR Connectors",
    description:
      "Bridge siloed hospital legacy platforms, Epic and Cerner EHR architectures, and modern HL7/FHIR APIs without requiring costly database migrations or rip-and-replace overhead.",
    image: "/images/healthcare/health-system-interoperability.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    tags: ["Epic & Cerner Interop", "HL7 / FHIR Standards", "Legacy Database Bridge", "Zero Rip-and-Replace"],
  },
  {
    id: "research-documentation",
    number: "07",
    title: "Research & Documentation Assistance",
    kicker: "Clinical Literature Grounding",
    description:
      "Accelerate clinical trial documentation, cross-reference peer-reviewed PubMed literature, and synthesize formulary research with rigorous citation grounding.",
    image: "/images/healthcare/health-research-documentation.jpg",
    fallbackImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    tags: ["PubMed Grounding", "Clinical Trial Prep", "Formulary Synthesis", "Strict Citations"],
  },
];

export const IndustryStickyContentSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const activeApp = HEALTHCARE_APPLICATIONS[activeSlide] || HEALTHCARE_APPLICATIONS[0];

  return (
    <section
      id="healthcare-section"
      className="py-20 sm:py-28 bg-[#FBFBFE] relative overflow-hidden border-t border-slate-200/60"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-violet-200/25 rounded-full blur-[140px] pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#6853A5]/20 shadow-xs text-xs font-semibold text-violet-primary mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-primary" />
            <span className="font-mono uppercase text-[11px] tracking-wider">
              3. HEALTHCARE & CLINICAL OPERATIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-sans font-extrabold text-[#111014] tracking-tight leading-[1.15]">
            Support Better Information Flow Across{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary via-[#6366F1] to-violet-deep">
              Healthcare Operations.
            </span>
          </h2>

          <p className="text-[#666371] text-sm sm:text-base font-dm leading-relaxed mt-3.5 max-w-3xl mx-auto">
            Healthcare organizations work with complex records, administrative processes, and sensitive information. Carefully designed AI can help staff access information and reduce repetitive administrative effort.
          </p>
        </div>

        {/* Main Reference Layout: Vertical Watermark Text + Thumbnails (Left) | Split Showcase Card (Center/Right) */}
        <div className="relative max-w-6xl mx-auto">
          {/* Subtle Two-Tone Offset Layer (matches user reference design) */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-[84%] bg-[#F3F1FA]/70 rounded-[36px] -z-10" />

          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
            
            {/* ================= LEFT CONTROLS (Vertical Text + Thumbnails) ================= */}
            <div className="flex items-center gap-4 lg:gap-6 shrink-0 order-2 lg:order-1 w-full lg:w-auto justify-center lg:justify-start">
              {/* Vertical Decorative Watermark Text */}
              <div className="hidden lg:flex items-center justify-center select-none py-4">
                <span
                  className="text-[#B9ADD6] font-sans font-extrabold text-2xl tracking-[0.24em] uppercase"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  Applications
                </span>
              </div>

              {/* Vertical Thumbnail Strip (Horizontal on mobile) */}
              <div className="flex lg:flex-col items-center gap-3 overflow-x-auto lg:overflow-visible py-2 px-1 max-w-full">
                {HEALTHCARE_APPLICATIONS.map((app, idx) => {
                  const isActive = activeSlide === idx;
                  return (
                    <button
                      key={app.id}
                      onClick={() => setActiveSlide(idx)}
                      className={`group relative rounded-xl lg:rounded-2xl overflow-hidden shrink-0 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "ring-2 ring-[#7650E8] ring-offset-2 lg:scale-105 shadow-md shadow-violet-500/20"
                          : "opacity-60 hover:opacity-100 hover:scale-102 border border-slate-200"
                      }`}
                      style={{ width: "62px", height: "62px" }}
                      aria-label={`View ${app.title}`}
                    >
                      <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = app.fallbackImage;
                        }}
                      />
                      {/* Active border indicator */}
                      {isActive && (
                        <div className="absolute inset-0 border-2 border-[#7650E8] rounded-xl lg:rounded-2xl pointer-events-none" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ================= MAIN SPLIT SHOWCASE CARD ================= */}
            <div className="relative w-full flex-1 order-1 lg:order-2">
              <div className="relative bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#E3DEF5] shadow-[0_24px_60px_-18px_rgba(118,80,232,0.14)]">
                <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px] lg:min-h-[420px]">
                  
                  {/* LEFT HALF: Active Main Image */}
                  <div className="relative md:col-span-5 lg:col-span-6 h-[260px] sm:h-[320px] md:h-auto min-h-full bg-slate-100 overflow-hidden">
                    <div className="absolute inset-0 w-full h-full">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeApp.id}
                          initial={{ opacity: 0, scale: 1.04 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.98 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-0 w-full h-full"
                        >
                          <img
                            src={activeApp.image}
                            alt={activeApp.title}
                            className="w-full h-full object-cover object-center"
                            loading="eager"
                            onError={(e) => {
                              e.currentTarget.src = activeApp.fallbackImage;
                            }}
                          />
                          {/* Atmospheric soft overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-black/10 pointer-events-none" />
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* RIGHT HALF: Content Panel */}
                  <div className="relative md:col-span-7 lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-center bg-white min-h-[380px] lg:min-h-[420px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeApp.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="space-y-4"
                      >
                        {/* Main Description Copy */}
                        <p className="font-dm text-slate-700 text-[15px] sm:text-base lg:text-[17px] leading-relaxed font-normal">
                          {activeApp.description}
                        </p>

                        {/* Feature Chips */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {activeApp.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] sm:text-xs font-mono font-medium text-[#665D82] bg-[#F6F3FF] border border-[#E4DEF5] px-2.5 py-1 rounded-md"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title + Category (matches reference design layout) */}
                        <div className="pt-4 mt-2">
                          <h3 className="font-sans font-bold text-lg sm:text-xl text-[#7650E8] tracking-tight">
                            {activeApp.title}
                            <span className="font-dm font-normal text-slate-400 text-sm ml-2.5 hidden sm:inline">
                              — {activeApp.kicker}
                            </span>
                          </h3>
                          <p className="text-slate-500 font-dm text-xs sm:text-sm mt-0.5 sm:hidden">
                            Operational Focus — {activeApp.kicker}
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
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

export default IndustryStickyContentSection;