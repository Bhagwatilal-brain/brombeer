import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Bot,
  Database,
  Eye,
  TrendingUp,
  FileText,
  Layout,
  Compass,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '../../layout/Container';
import { ScrollReveal } from '../../animations/ScrollReveal';
import { ScrollTextReveal } from '../../animations/ScrollTextReveal';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { Button } from '../../ui/Button';

interface SolutionAccordionItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  badge: string;
  tagline: string;
  description: string;
  capabilities: string[];
  ctaText: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  image: string;
  imageClassName?: string;
}

const SOLUTION_ACCORDION_ITEMS: SolutionAccordionItem[] = [
  {
    id: 'generative-ai',
    number: '01',
    title: 'Generative AI & Large Language Models',
    shortTitle: 'Generative AI & LLMs',
    badge: 'Enterprise LLM',
    tagline: 'Put Generative AI to Work.',
    description:
      'Make information more accessible and turn natural-language interactions into productive business experiences. We develop AI-powered assistants, content-generation tools, conversational interfaces, and specialized language-model applications grounded in your enterprise data.',
    capabilities: [
      'Retrieval-Augmented Generation (RAG)',
      'Enterprise Knowledge Assistants',
      'Prompt Design & Evaluation',
      'Guardrails & Output Validation',
    ],
    ctaText: 'Build a Generative AI Solution',
    href: '/contact',
    icon: Sparkles,
    accentColor: '#7650E8',
    image: '/images/use-cases/knowledge-assistant.jpg',
  },
  {
    id: 'ai-agents',
    number: '02',
    title: 'AI Agents & Intelligent Automation',
    shortTitle: 'AI Agents & Automation',
    badge: 'Autonomous Systems',
    tagline: 'Connect Intelligence with Action.',
    description:
      'Move beyond repetitive manual workflows with intelligent systems that interpret requests, query approved tools, retrieve facts, and coordinate defined multi-step business tasks with human oversight.',
    capabilities: [
      'Multi-Step Workflow Orchestration',
      'AI-Assisted Service Operations',
      'Human-in-the-Loop Approvals',
      'Tool & API Integration',
    ],
    ctaText: 'Automate a Business Workflow',
    href: '/contact',
    icon: Bot,
    accentColor: '#6366F1',
    image: '/images/use-cases/service-assistant.jpg',
  },
  {
    id: 'enterprise-knowledge',
    number: '03',
    title: 'Enterprise AI & Knowledge Intelligence',
    shortTitle: 'Enterprise Knowledge',
    badge: 'Knowledge Retrieval',
    tagline: 'Make Organizational Knowledge Easier to Find.',
    description:
      'Help employees find trusted, verified information across documents, internal wikis, manuals, and connected operational systems with source-grounded citations and strict access control.',
    capabilities: [
      'Enterprise Semantic Search',
      'Internal Knowledge Assistants',
      'Source-Grounded Question Answering',
      'Role-Aware Access Authorization',
    ],
    ctaText: 'Build an Enterprise Assistant',
    href: '/contact',
    icon: Database,
    accentColor: '#8B5CF6',
    image: '/images/solutions/architecture/connects-to-entire-stack.jpg',
  },
  {
    id: 'computer-vision',
    number: '04',
    title: 'Computer Vision & Image Intelligence',
    shortTitle: 'Computer Vision',
    badge: 'Visual AI',
    tagline: 'Turn Visual Data into Useful Information.',
    description:
      'Enable software to interpret visual information and support image-based workflows, from high-precision defect identification to automated document verification and visual quality assurance.',
    capabilities: [
      'Image Classification & Recognition',
      'Visual Inspection Workflows',
      'Object Detection & Tracking',
      'Edge Camera Integration',
    ],
    ctaText: 'Explore Computer Vision',
    href: '/contact',
    icon: Eye,
    accentColor: '#EC4899',
    image: '/images/use-cases/quality-assessment.jpg',
  },
  {
    id: 'predictive-analytics',
    number: '05',
    title: 'Machine Learning & Predictive Analytics',
    shortTitle: 'Predictive Analytics',
    badge: 'Forecasting',
    tagline: 'Anticipate Patterns. Make Better Decisions.',
    description:
      'Turn operational and historical data into forecasts, risk indicators, and decision-support tools that help teams anticipate demand shifts, reduce downtime, and allocate resources efficiently.',
    capabilities: [
      'Workload & Demand Forecasting',
      'Predictive Maintenance Planning',
      'Anomaly & Risk Detection',
      'Continuous Model Drift Tracking',
    ],
    ctaText: 'Explore Predictive AI',
    href: '/contact',
    icon: TrendingUp,
    accentColor: '#F59E0B',
    image: '/images/use-cases/inventory-intelligence.jpg',
  },
  {
    id: 'document-intelligence',
    number: '06',
    title: 'Document Intelligence & Data Extraction',
    shortTitle: 'Document Intelligence',
    badge: 'Document IDP',
    tagline: 'From Unstructured Documents to Structured Workflows.',
    description:
      'Eliminate manual data entry by extracting, validating, and structuring information from invoices, contracts, health records, and complex forms with precision optical recognition and language models.',
    capabilities: [
      'Intelligent Document Processing (IDP)',
      'OCR & Contextual Key-Value Extraction',
      'Business Rule Schema Validation',
      'Human-in-the-Loop Review Workbench',
    ],
    ctaText: 'Improve Document Processing',
    href: '/contact',
    icon: FileText,
    accentColor: '#10B981',
    image: '/images/use-cases/document-processing.jpg',
  },
  {
    id: 'ai-app-development',
    number: '07',
    title: 'AI-Powered Application Development',
    shortTitle: 'AI Application Dev',
    badge: 'Full-Stack AI',
    tagline: 'Build Applications with Intelligence at Their Core.',
    description:
      'Transform intelligent models into polished, enterprise-grade software products. We engineer custom web platforms, mobile applications, and internal dashboards tailored to your workflows.',
    capabilities: [
      'Custom Enterprise Web Platforms',
      'Mobile AI Interfaces & Portals',
      'Secure Microservice APIs',
      'End-to-End Production Deployment',
    ],
    ctaText: 'Develop an AI Application',
    href: '/contact',
    icon: Layout,
    accentColor: '#3B82F6',
    image: '/images/use-cases/workflow-intelligence.jpg',
  },
  {
    id: 'ai-consulting',
    number: '08',
    title: 'AI Consulting & Strategy',
    shortTitle: 'AI Strategy & Consulting',
    badge: 'Advisory',
    tagline: 'Start with the Right Problem.',
    description:
      'Make informed, confident investments in artificial intelligence. We help leadership evaluate feasibility, assess technical readiness, design architecture blueprints, and implement responsible governance.',
    capabilities: [
      'AI Opportunity Discovery & Mapping',
      'Business Value & ROI Prioritization',
      'Proof-of-Concept Rapid Validation',
      'Responsible AI Governance Frameworks',
    ],
    ctaText: 'Plan Your AI Roadmap',
    href: '/contact',
    icon: Compass,
    accentColor: '#7C3AED',
    image: '/images/why_brombeer_section/From Concept to Implementation Roadmap.png',
  },
];

export const SolutionsDetailedSection: React.FC = () => {
  // Default to index 0: "Generative AI & Large Language Models"
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  // Support URL hash navigation (e.g. #generative-ai, #ai-agents)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const foundIndex = SOLUTION_ACCORDION_ITEMS.findIndex((item) => item.id === hash);
        if (foundIndex !== -1) {
          setActiveIndex(foundIndex);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="capabilities" className="py-14 sm:py-18 lg:py-24 bg-gradient-to-b from-[#FAF8FE] via-[#F8F5FD] to-[#F3EDFC] relative overflow-hidden border-b border-[#6853A5]/10">
      {/* Background Soft Accents & Ambient Radial Gradients */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#E2D9F8]/40 via-[#EDE7FB]/20 to-transparent pointer-events-none border border-[#7650E8]/10" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#EBE3FC]/30 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-72 h-72 rounded-full bg-gradient-to-t from-[#EDE7FB]/25 to-transparent pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Header Block Centered Above the Cards Deck (Matching Industry Solutions Style) */}
        <div className="mb-8 sm:mb-10 lg:mb-12 w-full text-center">
          <ScrollTextReveal
            align="center"
            eyebrow="ENTERPRISE CAPABILITIES"
            title="Generative AI & Large Language Models"
            highlightWords={['Large', 'Language', 'Models']}
            titleClassName="text-3xl sm:text-4xl lg:text-[46px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.12] mb-3.5"
            description="Explore our specialized AI disciplines — engineered from grounded private language models to autonomous multi-agent orchestration and computer vision."
            descriptionClassName="text-text-secondary text-[14.5px] sm:text-[16px] leading-relaxed font-normal max-w-3xl lg:max-w-4xl mx-auto"
            maxWidth="max-w-4xl lg:max-w-5xl mx-auto"
          />
        </div>

        {/* Full-Width Interactive Horizontal Accordion Deck */}
        <div className="w-full">
          <ScrollReveal direction="up" delay={0.15}>
            <div className="flex flex-row items-stretch gap-2.5 sm:gap-3.5 lg:gap-4 h-[540px] sm:h-[580px] lg:h-[620px] w-full overflow-x-auto lg:overflow-x-visible no-scrollbar pb-2">
              {SOLUTION_ACCORDION_ITEMS.map((item, idx) => {
                const isExpanded = activeIndex === idx;
                const Icon = item.icon;

                if (isExpanded) {
                  return (
                    <motion.div
                      key={item.id}
                      id={item.id}
                      layout={!prefersReduced}
                      transition={{
                        type: 'spring',
                        stiffness: 280,
                        damping: 28,
                      }}
                      style={{ flex: 8.5 }}
                      className="min-w-[340px] sm:min-w-[540px] lg:min-w-[660px] relative rounded-[2.25rem] sm:rounded-[2.5rem] bg-gradient-to-br from-white via-white to-[#F7F3FD] border border-[#6853A5]/20 shadow-2xl shadow-violet-primary/12 p-7 sm:p-9 lg:p-11 flex flex-col justify-between overflow-hidden select-none cursor-default"
                    >
                      {/* Background Artwork Illustration with Smooth Gradient Mist Mask */}
                      <div className="absolute top-0 right-0 bottom-0 w-[55%] sm:w-[64%] lg:w-[70%] pointer-events-none select-none overflow-hidden flex items-center justify-end">
                        <img
                          src={item.image}
                          alt={item.title}
                          className={`w-full h-full object-cover mix-blend-multiply opacity-45 sm:opacity-55 transition-all duration-500 ${item.imageClassName || 'object-center'}`}
                          style={{
                            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 15%, black 45%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 15%, black 45%)',
                          }}
                          loading="lazy"
                        />
                      </div>

                      {/* Top purple glowing accent line */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent" />

                      {/* Expanded Card Content */}
                      <div className="relative z-10 flex flex-col justify-between h-full max-w-[85%] sm:max-w-[70%] lg:max-w-[62%]">
                        <div>
                          {/* Header Badges Row */}
                          <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#F0EAFB] border border-[#6853A5]/18 flex items-center justify-center text-violet-primary shadow-xs flex-shrink-0">
                              <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-violet-primary" />
                            </div>
                            <span className="text-[10.5px] sm:text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF9FF] text-violet-primary border border-violet-primary/20">
                              {item.badge}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-sans font-bold text-2xl sm:text-[28px] lg:text-[32px] text-[#111014] tracking-tight leading-[1.18] mb-1.5">
                            {item.title}
                          </h3>

                          {/* Tagline */}
                          <p className="text-xs sm:text-[13.5px] font-dm font-semibold text-violet-primary mb-3">
                            {item.tagline}
                          </p>

                          {/* Description */}
                          <p className="text-xs sm:text-[14px] lg:text-[14.5px] font-dm text-[#666371] leading-relaxed font-normal max-w-lg mb-4 sm:mb-5">
                            {item.description}
                          </p>

                          {/* Key Capabilities Pills */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg mb-4">
                            {item.capabilities.map((cap, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/95 backdrop-blur-sm border border-[#E9E4F5] text-xs font-dm text-[#373344] shadow-xs"
                              >
                                <CheckCircle2 className="w-3.5 h-3.5 text-violet-primary flex-shrink-0" />
                                <span className="font-medium truncate">{cap}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom CTA Button */}
                        <div className="pt-2">
                          <Button
                            asLink
                            href={item.href}
                            variant="secondary"
                            size="md"
                            textRoll
                            icon={<ArrowRight className="w-4 h-4" />}
                            className="border-border-subtle hover:border-violet-primary hover:text-violet-primary font-medium shadow-sm hover:shadow-md hover:shadow-violet-primary/10"
                          >
                            {item.ctaText}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                // Collapsed Narrow Tab
                return (
                  <motion.div
                    key={item.id}
                    id={item.id}
                    layout={!prefersReduced}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 28,
                    }}
                    style={{ flex: 1 }}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className="min-w-[50px] sm:min-w-[62px] lg:min-w-[70px] group relative rounded-[1.75rem] sm:rounded-[2rem] bg-white border border-[#6853A5]/16 shadow-sm hover:shadow-md hover:border-violet-primary/40 pt-7 sm:pt-8 lg:pt-9 pb-6 sm:pb-7 px-2 sm:px-2.5 flex flex-col items-center justify-between cursor-pointer transition-colors select-none overflow-hidden"
                  >
                    {/* Top Indicator Accent on Hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Top: Icon Symbol */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F4EFFC] flex items-center justify-center text-violet-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-violet-primary" />
                    </div>

                    {/* Center: Vertical Rotated Label */}
                    <div className="flex-1 flex items-center justify-center py-6 my-auto">
                      <span
                        className="font-sans text-[13.5px] sm:text-[15px] text-[#1E1142] whitespace-nowrap tracking-tight font-semibold group-hover:text-violet-primary transition-colors"
                        style={{
                          writingMode: 'vertical-rl',
                          transform: 'rotate(180deg)',
                        }}
                      >
                        {item.shortTitle}
                      </span>
                    </div>

                    {/* Bottom: Upward Arrow Icon */}
                    <div className="w-6 h-6 flex items-center justify-center text-violet-primary group-hover:scale-110 transition-transform">
                      <ArrowUpRight className="w-4 h-4 text-violet-primary" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default SolutionsDetailedSection;
