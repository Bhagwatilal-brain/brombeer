import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Bot, MessageSquareText, Eye, TrendingUp, FileText, Boxes, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';

interface SolutionCardItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  linkText: string;
  icon: React.ReactNode;
  badgeBg: string;
}

const SOLUTIONS_CARDS: SolutionCardItem[] = [
  {
    id: 'generative-ai',
    number: '01',
    title: 'Generative AI & LLM Engineering',
    tagline: 'Private Foundation Models & Fine-Tuning',
    badge: 'LLM & Multimodal',
    description: 'Make enterprise knowledge accessible and turn natural-language prompts into productive automated business workflows.',
    linkText: 'Explore Generative AI',
    icon: <Sparkles className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] shadow-md shadow-indigo-500/20 text-white',
  },
  {
    id: 'ai-agents',
    number: '02',
    title: 'AI Agents & Intelligent Automation',
    tagline: 'Autonomous Orchestration & Tool Calling',
    badge: 'Autonomous Agents',
    description: 'Move beyond repetitive manual processes with intelligent agents that interpret requests, query APIs, and coordinate business actions.',
    linkText: 'Explore AI Automation',
    icon: <Bot className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] shadow-md shadow-blue-500/20 text-white',
  },
  {
    id: 'enterprise-knowledge',
    number: '03',
    title: 'Enterprise AI & Knowledge Assistants',
    tagline: 'Grounded Retrieval & Source Verification',
    badge: 'Enterprise RAG',
    description: 'Enable staff to query internal documents, wikis, and databases with verifiable source citations and strict access boundaries.',
    linkText: 'Explore Knowledge AI',
    icon: <MessageSquareText className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA] shadow-md shadow-purple-500/20 text-white',
  },
  {
    id: 'computer-vision',
    number: '04',
    title: 'Computer Vision & Image Intelligence',
    tagline: 'Line-Speed Defect & Spatial Analysis',
    badge: 'Vision & Edge AI',
    description: 'Empower systems to inspect physical assets, detect anomalies in real time, analyze feeds, and guide visual operations.',
    linkText: 'Explore Computer Vision',
    icon: <Eye className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#06B6D4] to-[#38BDF8] shadow-md shadow-cyan-500/20 text-white',
  },
  {
    id: 'predictive-analytics',
    number: '05',
    title: 'Machine Learning & Predictive Analytics',
    tagline: 'Time-Series & Demand Forecasting',
    badge: 'Predictive ML',
    description: 'Transform telemetry and historical enterprise records into forward-looking forecasts, anomaly detection, and decision support.',
    linkText: 'Explore Predictive ML',
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#10B981] to-[#34D399] shadow-md shadow-emerald-500/20 text-white',
  },
  {
    id: 'document-intelligence',
    number: '06',
    title: 'Document Intelligence & Data Extraction',
    tagline: 'Automated Ingestion & Multi-Format Parsing',
    badge: 'OCR & Document NLP',
    description: 'Eliminate manual document handling by extracting structured tabular data and entities from PDFs, invoices, and regulatory forms.',
    linkText: 'Explore Document AI',
    icon: <FileText className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#F59E0B] to-[#FBBF24] shadow-md shadow-amber-500/20 text-white',
  },
  {
    id: 'ai-app-development',
    number: '07',
    title: 'AI-Powered Application Development',
    tagline: 'Cloud-Native & High-Throughput APIs',
    badge: 'Full-Stack AI Apps',
    description: 'Build enterprise-grade web, mobile, and backend applications engineered around custom AI capabilities and intuitive UX.',
    linkText: 'Build an AI Application',
    icon: <Boxes className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#2563EB] to-[#60A5FA] shadow-md shadow-blue-600/20 text-white',
  },
  {
    id: 'ai-consulting',
    number: '08',
    title: 'AI Consulting & Strategy',
    tagline: 'Feasibility, Architecture & ROI Roadmaps',
    badge: 'Strategic Advisory',
    description: 'Make informed technology decisions on model viability, privacy governance, compute budgeting, and measurable organizational ROI.',
    linkText: 'Plan Your AI Strategy',
    icon: <Compass className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#EC4899] to-[#F43F5E] shadow-md shadow-pink-500/20 text-white',
  },
];

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-14 sm:py-18 lg:py-24 bg-[#F8F7FD] relative overflow-hidden">
      {/* Background Soft Accents & Radial Gradients */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#E2D9F8]/45 via-[#EDE7FB]/25 to-transparent pointer-events-none border border-[#7650E8]/10" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#EBE3FC]/35 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-72 h-72 rounded-full bg-gradient-to-t from-[#EDE7FB]/30 to-transparent pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Header Block: Two-Column Header with All AI Solutions CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl relative">
            {/* Soft Circular Backdrop behind Title */}
            <div className="absolute -top-8 -left-8 w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#E5DEFB]/65 blur-[1px] pointer-events-none -z-10" />

            <ScrollTextReveal
              eyebrow="OUR AI SOLUTIONS"
              title="Intelligent Technology. Purposeful Outcomes."
              description="We build AI capabilities that address different stages of the business value chain, from understanding information to automating decisions and improving operational performance."
              maxWidth="max-w-2xl"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
          >
            <a
              href="/solutions"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#111014] border border-[#111014]/40 hover:border-violet-primary hover:bg-[#FAF9FF] transition-all duration-300 text-sm font-medium group select-none shadow-sm hover:shadow"
            >
              <span>All AI Solutions</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#111014] group-hover:text-violet-primary" />
            </a>
          </motion.div>
        </div>

        {/* 8 Cards Grid (4 Columns x 2 Rows) styled like Responsible AI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SOLUTIONS_CARDS.map((card, idx) => (
            <ScrollReveal key={card.id} direction="up" delay={0.06 * (idx % 4)}>
              <div className="group relative p-6 sm:p-7 rounded-[1.75rem] h-full flex flex-col justify-between bg-white/95 backdrop-blur-sm border border-white hover:border-violet-primary/40 hover:bg-white hover:shadow-xl hover:shadow-violet-primary/10 transition-all duration-300 overflow-hidden min-h-[320px]">
                {/* Subtle top indicator on hover */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Background Illustration 1: Top-Right Soft Geometry Circle */}
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
                  {/* Header: Colorful Icon Badge + Pill Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-2xl ${card.badgeBg} flex items-center justify-center border border-white/40 group-hover:scale-110 transition-all duration-300`}>
                      {card.icon}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-white text-violet-deep border border-border-subtle/50 font-medium select-none shadow-sm">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h4 className="text-xl font-serif text-text-primary tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                      {card.title}
                    </h4>
                    <p className="text-xs font-medium text-violet-primary mt-1">
                      {card.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 mt-4 border-t border-border-subtle/30 flex items-center text-xs relative z-10">
                  <a
                    href={`/solutions#${card.id}`}
                    className="text-xs sm:text-[13px] font-semibold text-violet-primary hover:text-violet-deep inline-flex items-center gap-1.5 group/link transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SolutionsSection;
