import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Shield, Lock, CheckCircle2, UserCheck, Eye, Activity, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface TrustPillarItem {
  number: string;
  title: string;
  tagline: string;
  badge: string;
  guarantee: string;
  icon: React.ComponentType<{ className?: string }>;
  badgeBg: string;
}

const TRUST_PILLARS: TrustPillarItem[] = [
  {
    number: '01',
    title: 'Data Privacy & Sovereignty',
    tagline: 'Zero Customer Data Retained for Model Training',
    badge: 'UAE Sovereign Ready',
    guarantee: 'Your data remains within your authorized tenancy boundaries and is never used to train public models.',
    icon: Shield,
    badgeBg: 'bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] shadow-md shadow-blue-500/20 text-white',
  },
  {
    number: '02',
    title: 'Security & Access Control',
    tagline: 'Strict Role-Based Vector Access Partitioning',
    badge: 'Zero-Trust Architecture',
    guarantee: 'Granular SAML/OAuth user permissions filter every query before semantic retrieval executes.',
    icon: Lock,
    badgeBg: 'bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] shadow-md shadow-indigo-500/20 text-white',
  },
  {
    number: '03',
    title: 'Accuracy & Verification',
    tagline: 'Factual Grounding & Anti-Hallucination Gates',
    badge: 'Citation Grounded',
    guarantee: 'Every synthesized response is mathematically matched against source documents with confidence scoring.',
    icon: CheckCircle2,
    badgeBg: 'bg-gradient-to-tr from-[#10B981] to-[#34D399] shadow-md shadow-emerald-500/20 text-white',
  },
  {
    number: '04',
    title: 'Human-in-the-Loop Oversight',
    tagline: 'Consequential Actions Require Human Approval',
    badge: 'Audited Authority',
    guarantee: 'Financial writebacks, civic casework, and policy changes always route through human verification gates.',
    icon: UserCheck,
    badgeBg: 'bg-gradient-to-tr from-[#EC4899] to-[#F43F5E] shadow-md shadow-pink-500/20 text-white',
  },
  {
    number: '05',
    title: 'Transparency & Traceability',
    tagline: 'Immutable Logs with Clickable References',
    badge: '100% Provenance',
    guarantee: 'Complete cryptographic audit trail of all model prompts, retrieved passages, and agent tool calls.',
    icon: Eye,
    badgeBg: 'bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA] shadow-md shadow-purple-500/20 text-white',
  },
  {
    number: '06',
    title: 'Continuous Surveillance',
    tagline: 'Automated Drift & Compute Cost Governance',
    badge: 'Real-Time Health',
    guarantee: 'Active telemetry tracks model performance, output drift, latency anomalies, and API token spend.',
    icon: Activity,
    badgeBg: 'bg-gradient-to-tr from-[#F59E0B] to-[#FBBF24] shadow-md shadow-amber-500/20 text-white',
  },
];

export const ResponsibleAISection: React.FC = () => {
  return (
    <section id="responsible-ai" className="py-14 sm:py-18 lg:py-24 bg-gradient-to-b from-[#F7F4FD] via-[#EFEAFB] to-[#F7F4FD] relative overflow-hidden">
      {/* Reference Image Background Illustrations: Top-Right Large Geometric Circle & Soft Backdrop Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#E2D9F8]/50 via-[#EDE7FB]/30 to-transparent pointer-events-none border border-violet-primary/10" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#EBE3FC]/40 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-white/60 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14 relative">
          <div className="relative max-w-2xl">
            {/* Reference Image Soft Circular Backdrop behind Title */}
            <div className="absolute -top-8 -left-8 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#E5DEFB]/70 blur-[1px] pointer-events-none -z-10" />
            <ScrollReveal>
              <SectionHeading
                eyebrow="RESPONSIBLE AI"
                title="Innovation You Can Understand and Govern."
                description="Enterprise AI engineered with output reliability, data privacy, access controls, and explicit human oversight."
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <Button
              asLink
              href="/responsible-ai"
              variant="secondary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              className="border-[#111014]/30 hover:border-violet-primary hover:bg-[#FAF9FF]"
            >
              Explore Governance Framework
            </Button>
          </ScrollReveal>
        </div>

        {/* 6 Visual Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TRUST_PILLARS.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <ScrollReveal key={principle.number} delay={idx * 0.06}>
                <div className="group relative p-7 rounded-[1.75rem] h-full flex flex-col justify-between bg-white/95 backdrop-blur-sm border border-white hover:border-violet-primary/40 hover:bg-white hover:shadow-xl hover:shadow-violet-primary/10 transition-all duration-300 overflow-hidden min-h-[300px]">
                  {/* Subtle top indicator on hover */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Background Illustration 1: Top-Right Soft Geometry Circle (Reference Image Style) */}
                  <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br from-violet-primary/8 via-violet-primary/4 to-transparent group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                  {/* Background Illustration 2: Subtle Geometric Concentric Rings SVG */}
                  <svg
                    className="absolute -right-5 -bottom-5 w-32 h-32 text-violet-primary/10 group-hover:text-violet-primary/22 transition-all duration-500 pointer-events-none select-none"
                    viewBox="0 0 120 120"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="85" cy="85" r="28" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                    <circle cx="85" cy="85" r="46" stroke="currentColor" strokeWidth="1" />
                    <circle cx="85" cy="85" r="64" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
                  </svg>

                  <div className="space-y-4 relative z-10">
                    {/* Header: Colorful Icon Badge + Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-2xl ${principle.badgeBg} flex items-center justify-center border border-white/40 group-hover:scale-110 transition-all duration-300`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-white text-violet-deep border border-border-subtle/50 font-medium select-none shadow-sm">
                        {principle.badge}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h4 className="text-xl font-serif text-text-primary tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                        {principle.title}
                      </h4>
                      <p className="text-xs font-medium text-violet-primary mt-1">
                        {principle.tagline}
                      </p>
                    </div>

                    {/* Punchy 1-line guarantee */}
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                      {principle.guarantee}
                    </p>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-4 mt-4 border-t border-border-subtle/30 flex items-center text-xs relative z-10">
                    <a
                      href="/responsible-ai"
                      className="text-xs sm:text-[13px] font-semibold text-violet-primary hover:text-violet-deep inline-flex items-center gap-1.5 group/link transition-colors"
                    >
                      <span>Read Policy</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ResponsibleAISection;