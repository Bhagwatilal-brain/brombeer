import React from 'react';
import { ArrowRight, ArrowUpRight, Sparkles, Bot, MessageSquareText, Eye, TrendingUp, FileText, Boxes, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface SolutionCardItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  description: string;
  linkText: string;
  icon: React.ComponentType<{ className?: string }>;
  hoverThemeBg: string;
}

const SOLUTIONS_CARDS: SolutionCardItem[] = [
  {
    id: 'generative-ai',
    number: '01',
    title: 'Generative AI & LLM Engineering',
    tagline: 'Private Foundation Models & Fine-Tuning',
    badge: 'LLM & Multi-Modal',
    description: 'Make enterprise knowledge accessible and turn natural-language interactions into productive automated business workflows.',
    linkText: 'Explore Generative AI',
    icon: Sparkles,
    hoverThemeBg: 'bg-gradient-to-tr from-[#6542E0] to-[#8E6DF8] shadow-lg shadow-[#7650E8]/30',
  },
  {
    id: 'ai-agents',
    number: '02',
    title: 'AI Agents & Automation',
    tagline: 'Autonomous Tool Calling & Multi-Agent Workflows',
    badge: 'Autonomous Agents',
    description: 'Move beyond repetitive manual processes with intelligent agents that interpret requests, query APIs, and coordinate business actions.',
    linkText: 'Explore AI Automation',
    icon: Bot,
    hoverThemeBg: 'bg-gradient-to-tr from-[#7650E8] to-[#9E7DFF] shadow-lg shadow-[#7650E8]/35',
  },
  {
    id: 'enterprise-knowledge',
    number: '03',
    title: 'Enterprise Knowledge Assistants',
    tagline: 'Factual Grounding & Anti-Hallucination Gates',
    badge: 'Enterprise RAG',
    description: 'Enable staff to query internal documents, wikis, and databases with verifiable source citations and strict access boundaries.',
    linkText: 'Explore Knowledge AI',
    icon: MessageSquareText,
    hoverThemeBg: 'bg-gradient-to-tr from-[#5830D4] to-[#8460F6] shadow-lg shadow-[#7650E8]/30',
  },
  {
    id: 'computer-vision',
    number: '04',
    title: 'Computer Vision & Inspection',
    tagline: 'Line-Speed Defect & Spatial Analysis',
    badge: 'Vision & Edge AI',
    description: 'Empower systems to inspect physical assets, detect anomalies in real time, analyze feeds, and guide visual operations.',
    linkText: 'Explore Computer Vision',
    icon: Eye,
    hoverThemeBg: 'bg-gradient-to-tr from-[#6F43EA] to-[#9773FF] shadow-lg shadow-[#7650E8]/35',
  },
  {
    id: 'predictive-analytics',
    number: '05',
    title: 'Machine Learning & Analytics',
    tagline: 'Time-Series & Demand Forecasting',
    badge: 'Predictive ML',
    description: 'Transform telemetry and historical enterprise records into forward-looking forecasts, anomaly detection, and decision support.',
    linkText: 'Explore Predictive ML',
    icon: TrendingUp,
    hoverThemeBg: 'bg-gradient-to-tr from-[#7650E8] to-[#A688FF] shadow-lg shadow-[#7650E8]/35',
  },
  {
    id: 'document-intelligence',
    number: '06',
    title: 'Document Intelligence',
    tagline: 'Automated Ingestion & Key-Value Extraction',
    badge: 'OCR & Document NLP',
    description: 'Eliminate manual document handling by extracting structured tabular data and entities from PDFs, invoices, and regulatory forms.',
    linkText: 'Explore Document AI',
    icon: FileText,
    hoverThemeBg: 'bg-gradient-to-tr from-[#522BB8] to-[#7E5AF6] shadow-lg shadow-[#7650E8]/30',
  },
  {
    id: 'ai-app-development',
    number: '07',
    title: 'AI Application Development',
    tagline: 'Cloud-Native Scalable API Architecture',
    badge: 'Full-Stack AI',
    description: 'Build enterprise-grade web, mobile, and backend applications engineered around custom AI capabilities and intuitive UX.',
    linkText: 'Build an AI Application',
    icon: Boxes,
    hoverThemeBg: 'bg-gradient-to-tr from-[#6E44EB] to-[#9572FF] shadow-lg shadow-[#7650E8]/35',
  },
  {
    id: 'ai-consulting',
    number: '08',
    title: 'AI Consulting & Strategy',
    tagline: 'Feasibility, Governance & ROI Roadmaps',
    badge: 'Strategic Advisory',
    description: 'Make informed technology decisions on model viability, privacy governance, compute budgeting, and measurable organizational ROI.',
    linkText: 'Plan Your AI Strategy',
    icon: Compass,
    hoverThemeBg: 'bg-gradient-to-tr from-[#6035DC] to-[#8B67F8] shadow-lg shadow-[#7650E8]/30',
  },
];

export const SolutionsSection: React.FC = () => {
  const prefersReduced = useReducedMotion();

  // Staggered cascade entrance for the cards grid when scrolled into view
  const cardsContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardItemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(5px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

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
              highlightWords={['Purposeful', 'Outcomes.']}
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

        {/* 8 Cards Grid with Scroll Appearance & Interactive Micro-Animations */}
        <motion.div
          initial={prefersReduced ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: false, amount: 0.1, margin: '0px 0px -60px 0px' }}
          variants={cardsContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SOLUTIONS_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.id} variants={cardItemVariants} className="h-full">
                <div className="group relative p-7 sm:p-8 rounded-[2rem] h-full flex flex-col justify-between bg-white border border-[#E9E4F5] shadow-[0_10px_35px_-12px_rgba(118,80,232,0.08),0_1px_3px_rgba(0,0,0,0.02)] hover:border-violet-primary/50 hover:shadow-2xl hover:shadow-violet-primary/14 hover:-translate-y-2 transition-all duration-300 overflow-hidden min-h-[340px]">
                  {/* Top purple glowing line that intensifies on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-75 group-hover:opacity-100 group-hover:h-[3.5px] transition-all duration-300" />

                  {/* Top-Right Soft Geometry Circle that expands on hover */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#EFEAFB]/40 group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                  {/* Bottom-Right Concentric Rings SVG that gently scales and rotates on hover */}
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
                    {/* Header: Circular Icon Badge with Scale Effect + Pill Badge */}
                    <div className="flex items-center justify-between">
                      <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {/* 1. Initial State: Grayish dull circle with muted icon */}
                        <div className="absolute inset-0 rounded-full bg-[#EDE8F5]/90 border border-[#D6CEE4] flex items-center justify-center shadow-xs transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                          <Icon className="w-6 h-6 text-[#8E869E] transition-colors duration-300" />
                        </div>

                        {/* 2. Hovered State: Our website theme colors (violet/purple gradient with crisp white icon & purple glow) */}
                        <div className={`absolute inset-0 rounded-full ${card.hoverThemeBg} border-2 border-white/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>

                      <span className="text-[10.5px] font-mono tracking-wider px-3 py-1 rounded-full bg-white text-[#7C7490] border border-[#D8D1E6] font-medium select-none shadow-xs transition-all duration-300 group-hover:border-violet-primary/40 group-hover:text-violet-primary group-hover:bg-[#FAF9FF]">
                        {card.badge}
                      </span>
                    </div>

                    {/* Title & Tagline with smooth hover motion */}
                    <div className="pt-1">
                      <h3 className="text-xl sm:text-[22px] font-sans font-bold text-[#111014] tracking-tight leading-[1.25] transition-transform duration-300 group-hover:translate-x-1.5 group-hover:text-[#181126]">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] font-dm font-medium text-violet-primary mt-1.5 transition-colors duration-200">
                        {card.tagline}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm font-dm text-text-secondary leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Action Link with Divider and Arrow Spring on Hover */}
                  <div className="pt-4 mt-6 border-t border-[#ECE8F5] flex items-center text-xs relative z-10">
                    <a
                      href={`/solutions#${card.id}`}
                      className="text-xs sm:text-[13.5px] font-dm font-semibold text-violet-primary hover:text-violet-deep inline-flex items-center gap-1.5 group/link transition-colors"
                    >
                      <span>{card.linkText}</span>
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

export default SolutionsSection;
