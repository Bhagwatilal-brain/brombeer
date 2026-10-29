import React from 'react';
import { motion } from 'framer-motion';
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
            <SectionHeading
              eyebrow="RESPONSIBLE AI"
              title="Innovation You Can Understand and Govern."
              highlightWords={['Understand', 'and', 'Govern.']}
              description="Enterprise AI engineered with output reliability, data privacy, access controls, and explicit human oversight."
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
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
          </motion.div>
        </div>

        {/* 6 Visual Trust Cards with Staggered Scroll Entrance & Hover Animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1, margin: '0px 0px -60px 0px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {TRUST_PILLARS.map((principle) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.number}
                variants={{
                  hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="h-full"
              >
                <div className="group relative p-7 sm:p-8 rounded-[2rem] h-full flex flex-col justify-between bg-white border border-[#E9E4F5] shadow-[0_10px_35px_-12px_rgba(118,80,232,0.08),0_1px_3px_rgba(0,0,0,0.02)] hover:border-violet-primary/50 hover:shadow-2xl hover:shadow-violet-primary/14 hover:-translate-y-2 transition-all duration-300 overflow-hidden min-h-[340px]">
                  {/* Top purple glowing line that intensifies on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-75 group-hover:opacity-100 group-hover:h-[3.5px] transition-all duration-300" />

                  {/* Background Illustration 1: Top-Right Soft Geometry Circle that expands on hover */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#EFEAFB] group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                  {/* Background Illustration 2: Subtle Geometric Concentric Rings SVG that gently scales and rotates on hover */}
                  <svg
                    className="absolute -right-6 -bottom-6 w-36 h-36 pointer-events-none select-none group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                    viewBox="0 0 120 120"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle cx="85" cy="85" r="28" stroke="#111014" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
                    <circle cx="85" cy="85" r="46" stroke="#111014" strokeWidth="1" opacity="0.18" />
                    <circle cx="85" cy="85" r="64" stroke="#111014" strokeWidth="1" opacity="0.1" />
                  </svg>

                  <div className="space-y-4 relative z-10">
                    {/* Header: Circular Icon Badge + Badge */}
                    <div className="flex items-center justify-between">
                      <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full ${principle.badgeBg} flex items-center justify-center border-2 border-white/60 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-[10.5px] font-mono tracking-wider px-3 py-1 rounded-full bg-white text-[#6355A4] border border-[#6355A4]/25 font-medium select-none shadow-sm transition-colors duration-200 group-hover:border-violet-primary/40 group-hover:text-violet-primary">
                        {principle.badge}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div className="pt-1">
                      <h4 className="text-xl sm:text-[22px] font-sans font-bold text-[#111014] tracking-tight leading-[1.25] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-[#181126]">
                        {principle.title}
                      </h4>
                      <p className="text-xs sm:text-[13px] font-dm font-medium text-violet-primary mt-1.5 transition-colors duration-200">
                        {principle.tagline}
                      </p>
                    </div>

                    {/* Punchy 1-line guarantee */}
                    <p className="text-xs sm:text-sm font-dm text-text-secondary leading-relaxed font-normal">
                      {principle.guarantee}
                    </p>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="pt-4 mt-6 border-t border-[#ECE8F5] flex items-center text-xs relative z-10">
                    <a
                      href="/responsible-ai"
                      className="text-xs sm:text-[13.5px] font-dm font-semibold text-violet-primary hover:text-violet-deep inline-flex items-center gap-1.5 group/link transition-colors"
                    >
                      <span>Read Policy</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default ResponsibleAISection;