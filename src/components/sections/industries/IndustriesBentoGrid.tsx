"use client";

import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "../../layout/Container";
import { Button } from "../../ui/Button";

interface GovApplication {
  id: string;
  badge: string;
  title: string;
  description?: string;
  image: string;
  fallbackImage: string;
  highlights?: string[];
}

const GOV_APPLICATIONS: GovApplication[] = [
  {
    id: "citizen-service",
    badge: "CITIZEN EXPERIENCE",
    title: "Citizen-Service Information Assistants",
    image: "/images/industries/gov-citizen-service.jpg",
    fallbackImage: "/images/use-cases/service-assistant.jpg",
    highlights: ["24/7 Civic Guidance", "Multi-lingual Support", "Zero Citizen Data Retention"],
  },
  {
    id: "policy-search",
    badge: "REGULATORY SEARCH",
    title: "Internal Policy and Procedure Search",
    image: "/images/industries/gov-policy-search.jpg",
    fallbackImage: "/images/use-cases/knowledge-assistant.jpg",
    highlights: ["Statutory Cross-Ref", "Agency Manuals", "Deterministic Citations"],
  },
  {
    id: "document-classification",
    badge: "DOCUMENT INTELLIGENCE",
    title: "Document Classification and Extraction",
    image: "/images/industries/gov-document-classification.jpg",
    fallbackImage: "/images/use-cases/document-processing.jpg",
    highlights: ["Records Ingestion", "Automated Redaction", "Taxonomy Mapping"],
  },
  {
    id: "workflow-automation",
    badge: "WORKFLOW AUTOMATION",
    title: "Administrative Workflow Automation",
    image: "/images/industries/gov-workflow-automation.jpg",
    fallbackImage: "/images/use-cases/workflow-intelligence.jpg",
    highlights: ["Casework Handoffs", "Officer Sign-Off", "Audit Trails"],
  },
  {
    id: "knowledge-management",
    badge: "KNOWLEDGE INFRASTRUCTURE",
    title: "Knowledge Management",
    image: "/images/industries/gov-knowledge-management.jpg",
    fallbackImage: "/images/solutions/architecture/warehouse-native.jpg",
    highlights: ["Institutional Memory", "Siloed Repository Bridge", "Source Attribution"],
  },
  {
    id: "operational-reporting",
    badge: "CIVIC TELEMETRY",
    title: "Operational Reporting and Analytics",
    image: "/images/industries/gov-operational-analytics.jpg",
    fallbackImage: "/images/industry_solutions/Lavender High-Rise Boardroom Panorama.png",
    highlights: ["Casework Throughput", "Resource Allocation", "Executive Summaries"],
  },
];

export const IndustriesBentoGrid: React.FC = () => {
  const appCitizen = GOV_APPLICATIONS[0];
  const appPolicy = GOV_APPLICATIONS[1];
  const appDoc = GOV_APPLICATIONS[2];
  const appWorkflow = GOV_APPLICATIONS[3];
  const appKnowledge = GOV_APPLICATIONS[4];
  const appReporting = GOV_APPLICATIONS[5];

  return (
    <section
      id="government-bento"
      className="py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-[#F6F3FE] via-[#F0EAFB] to-[#F7F4FD] relative overflow-hidden"
    >
      {/* Top purple glowing hairline accent */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-80 z-20 pointer-events-none" />

      {/* Soft atmospheric gradient halos on outer bounds */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/70 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-violet-light/25 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#6853A5]/20 shadow-xs text-xs font-semibold text-violet-primary mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-primary" />
            <span className="font-mono uppercase text-[11px] tracking-wider">
              1. GOVERNMENT & PUBLIC SECTOR
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.14]">
            More Accessible Information.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary via-[#6366F1] to-violet-deep">
              More Efficient Services.
            </span>
          </h2>

          <p className="text-[#666371] text-sm sm:text-base font-dm leading-relaxed mt-4 max-w-3xl mx-auto">
            Public-sector organizations manage complex information, formal procedures, and high volumes of administrative work. AI can help improve information discovery and support service delivery when implemented with appropriate controls.
          </p>
        </div>

        {/* =========================================================================
            BENTO GRID DASHBOARD CONTAINER (6 Client Applications)
            ========================================================================= */}
        <div className="bg-[#EBE8F2]/90 backdrop-blur-md rounded-[32px] sm:rounded-[38px] p-4 sm:p-6 lg:p-8 border border-[#D5CBE8]/70 shadow-[0_20px_50px_-20px_rgba(118,80,232,0.12)]">
          <div className="space-y-4 sm:space-y-6">
            {/* ROW 1: Hero Card (Citizen Service) + Regulatory Policy Search */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
              {/* Card 1: Citizen-Service Information Assistants (Hero 7-Col) */}
              <div className="lg:col-span-7 bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 shadow-xs border border-black/5 flex flex-col justify-between group hover:shadow-md transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-violet-primary px-3 py-1 rounded-full bg-violet-light/15 border border-violet-primary/20">
                      {appCitizen.badge}
                    </span>
                  </div>

                  <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-[#111014] tracking-tight leading-snug">
                    {appCitizen.title}
                  </h3>
                </div>

                {/* 3D Visual Banner */}
                <div className="relative my-4 aspect-[16/9] sm:aspect-[16/8.5] rounded-2xl overflow-hidden border border-black/5 bg-slate-900 shadow-inner">
                  <img
                    src={appCitizen.image}
                    alt={appCitizen.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = appCitizen.fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="pt-3 border-t border-black/5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-2">
                    {appCitizen.highlights?.map((h, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono text-[#5B556D] bg-[#F2EEFC] px-2.5 py-1 rounded-md border border-[#E0D8F4]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2: Internal Policy and Procedure Search (5-Col) */}
              <div className="lg:col-span-5 bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 shadow-xs border border-black/5 flex flex-col justify-between group hover:shadow-md transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-violet-primary px-3 py-1 rounded-full bg-violet-light/15 border border-violet-primary/20">
                      {appPolicy.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#4B4958] font-semibold bg-[#FAF9FC] px-2.5 py-0.5 rounded-full border border-[#6853A5]/15">
                      <ShieldCheck className="w-3.5 h-3.5 text-violet-primary" />
                      <span>STATUTORY MATCH</span>
                    </div>
                  </div>

                  <h3 className="font-sans font-extrabold text-xl text-[#111014] tracking-tight leading-snug">
                    {appPolicy.title}
                  </h3>
                </div>

                {/* 3D Visual Banner */}
                <div className="relative my-4 aspect-[16/9] sm:aspect-[16/10] rounded-2xl overflow-hidden border border-black/5 bg-slate-900 shadow-inner">
                  <img
                    src={appPolicy.image}
                    alt={appPolicy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = appPolicy.fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="pt-3 border-t border-black/5 flex flex-wrap gap-2">
                  {appPolicy.highlights?.map((h, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono text-[#5B556D] bg-[#F2EEFC] px-2.5 py-1 rounded-md border border-[#E0D8F4]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ROW 2: 3 Bento Tiles (Document Classification, Workflow Automation, Knowledge Management) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-stretch">
              {/* Card 3: Document Classification and Extraction */}
              <div className="bg-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 shadow-xs border border-black/5 flex flex-col justify-between group hover:shadow-md transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-violet-primary px-2.5 py-0.5 rounded-full bg-violet-light/15 border border-violet-primary/20">
                      {appDoc.badge}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-base sm:text-lg text-[#111014] tracking-tight leading-snug">
                    {appDoc.title}
                  </h4>
                </div>

                <div className="relative my-4 aspect-[16/10] rounded-xl overflow-hidden border border-black/5 bg-slate-900 shadow-inner">
                  <img
                    src={appDoc.image}
                    alt={appDoc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = appDoc.fallbackImage;
                    }}
                  />
                </div>

                <div className="pt-3 border-t border-black/5 flex flex-wrap gap-1.5">
                  {appDoc.highlights?.map((h, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-[#5B556D] bg-[#F2EEFC] px-2 py-0.5 rounded-md border border-[#E0D8F4]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 4: Administrative Workflow Automation */}
              <div className="bg-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 shadow-xs border border-black/5 flex flex-col justify-between group hover:shadow-md transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-violet-primary px-2.5 py-0.5 rounded-full bg-violet-light/15 border border-violet-primary/20">
                      {appWorkflow.badge}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-base sm:text-lg text-[#111014] tracking-tight leading-snug">
                    {appWorkflow.title}
                  </h4>
                </div>

                <div className="relative my-4 aspect-[16/10] rounded-xl overflow-hidden border border-black/5 bg-slate-900 shadow-inner">
                  <img
                    src={appWorkflow.image}
                    alt={appWorkflow.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = appWorkflow.fallbackImage;
                    }}
                  />
                </div>

                <div className="pt-3 border-t border-black/5 flex flex-wrap gap-1.5">
                  {appWorkflow.highlights?.map((h, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-[#5B556D] bg-[#F2EEFC] px-2 py-0.5 rounded-md border border-[#E0D8F4]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 5: Knowledge Management */}
              <div className="bg-white rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 shadow-xs border border-black/5 flex flex-col justify-between group hover:shadow-md transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-violet-primary px-2.5 py-0.5 rounded-full bg-violet-light/15 border border-violet-primary/20">
                      {appKnowledge.badge}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-base sm:text-lg text-[#111014] tracking-tight leading-snug">
                    {appKnowledge.title}
                  </h4>
                </div>

                <div className="relative my-4 aspect-[16/10] rounded-xl overflow-hidden border border-black/5 bg-slate-900 shadow-inner">
                  <img
                    src={appKnowledge.image}
                    alt={appKnowledge.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = appKnowledge.fallbackImage;
                    }}
                  />
                </div>

                <div className="pt-3 border-t border-black/5 flex flex-wrap gap-1.5">
                  {appKnowledge.highlights?.map((h, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono text-[#5B556D] bg-[#F2EEFC] px-2 py-0.5 rounded-md border border-[#E0D8F4]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ROW 3: Full-Width Executive Banner (Operational Reporting and Analytics) */}
            <div className="bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 shadow-xs border border-black/5 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 group hover:shadow-md transition-all duration-300">
              <div className="w-full lg:w-1/2 aspect-[16/9] sm:aspect-[16/8] rounded-2xl overflow-hidden border border-black/5 bg-slate-900 shadow-inner flex-shrink-0">
                <img
                  src={appReporting.image}
                  alt={appReporting.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = appReporting.fallbackImage;
                  }}
                />
              </div>

              <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-violet-primary px-3 py-1 rounded-full bg-violet-light/15 border border-violet-primary/20">
                      {appReporting.badge}
                    </span>
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-violet-primary px-3 py-1 rounded-full bg-violet-light/15 border border-violet-primary/20">
                      EXECUTIVE TELEMETRY
                    </span>
                  </div>

                  <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-[#111014] tracking-tight leading-snug">
                    {appReporting.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {appReporting.highlights?.map((h, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono text-[#5B556D] bg-[#F2EEFC] px-2.5 py-1 rounded-md border border-[#E0D8F4]"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-black/5 flex items-center">
                  <Button
                    asLink
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    Discuss Public-Sector AI
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default IndustriesBentoGrid;
