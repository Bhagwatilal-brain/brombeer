import React from 'react';
import { ArrowRight, Sparkles, Bot, MessageSquareText, Eye, TrendingUp, FileText, Boxes, Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';

interface SolutionCardItem {
  id: string;
  number: string;
  title: string;
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
    description: 'Make information more accessible and turn natural-language interactions into productive business experiences.',
    linkText: 'Explore Generative AI',
    icon: <Sparkles className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6] shadow-md shadow-indigo-500/20',
  },
  {
    id: 'ai-agents',
    number: '02',
    title: 'AI Agents & Intelligent Automation',
    description: 'Move beyond repetitive manual workflows with intelligent systems that can interpret requests, use approved tools, retrieve information, and coordinate defined business tasks.',
    linkText: 'Explore AI Automation',
    icon: <Bot className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA] shadow-md shadow-blue-500/20',
  },
  {
    id: 'enterprise-knowledge',
    number: '03',
    title: 'Enterprise AI & Knowledge Assistants',
    description: 'Help employees find trusted information across documents, internal knowledge bases, and connected business systems.',
    linkText: 'Explore Enterprise AI',
    icon: <MessageSquareText className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA] shadow-md shadow-purple-500/20',
  },
  {
    id: 'computer-vision',
    number: '04',
    title: 'Computer Vision & Image Intelligence',
    description: 'Enable software to interpret visual information and support image-based workflows.',
    linkText: 'Explore Computer Vision',
    icon: <Eye className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#06B6D4] to-[#38BDF8] shadow-md shadow-cyan-500/20',
  },
  {
    id: 'predictive-analytics',
    number: '05',
    title: 'Machine Learning & Predictive Analytics',
    description: 'Turn operational data into forecasts, risk indicators, and decision-support tools.',
    linkText: 'Explore Machine Learning',
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#10B981] to-[#34D399] shadow-md shadow-emerald-500/20',
  },
  {
    id: 'document-intelligence',
    number: '06',
    title: 'Document Intelligence & Data Extraction',
    description: 'Reduce the effort involved in processing complex documents and converting unstructured information into usable business data.',
    linkText: 'Explore Document Intelligence',
    icon: <FileText className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#F59E0B] to-[#FBBF24] shadow-md shadow-amber-500/20',
  },
  {
    id: 'ai-app-development',
    number: '07',
    title: 'AI-Powered Application Development',
    description: 'Bring AI capabilities into the applications people use every day.',
    linkText: 'Build an AI Application',
    icon: <Boxes className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#2563EB] to-[#60A5FA] shadow-md shadow-blue-600/20',
  },
  {
    id: 'ai-consulting',
    number: '08',
    title: 'AI Consulting & Strategy',
    description: 'Make informed decisions about where AI belongs in your business, which approaches are appropriate, and how to implement them responsibly.',
    linkText: 'Plan Your AI Strategy',
    icon: <Compass className="w-5 h-5 text-white" />,
    badgeBg: 'bg-gradient-to-tr from-[#EC4899] to-[#F43F5E] shadow-md shadow-pink-500/20',
  },
];

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-14 sm:py-18 lg:py-24 bg-[#F8F7FD] relative overflow-hidden">
      {/* Reference Image Background Illustrations: Top-Right Large Geometric Circle & Soft Backdrop Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#E2D9F8]/45 via-[#EDE7FB]/25 to-transparent pointer-events-none border border-[#7650E8]/10" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#EBE3FC]/35 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-72 h-72 rounded-full bg-gradient-to-t from-[#EDE7FB]/30 to-transparent pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Header Block: Two-Column Header with All AI Solutions CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl relative">
            {/* Reference Image Soft Circular Backdrop behind Title */}
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

        {/* 8 Cards Grid (4 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SOLUTIONS_CARDS.map((card, idx) => (
            <ScrollReveal key={card.id} direction="up" delay={0.08 * (idx % 4)}>
              <div className="group relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-[1.75rem] bg-white/95 backdrop-blur-sm border border-[#6853A5]/12 shadow-[0_4px_20px_-4px_rgba(75,45,168,0.05),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_-6px_rgba(118,80,232,0.14)] hover:-translate-y-1.5 hover:border-violet-primary/35 transition-all duration-300 min-h-[300px] overflow-hidden">
                {/* Background Illustration 1: Top-Right Soft Geometry Circle (Reference Image Style) */}
                <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br from-violet-primary/8 via-violet-primary/4 to-transparent group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

                {/* Background Illustration 2: Subtle Geometric Concentric Rings SVG */}
                <svg
                  className="absolute -right-5 -bottom-5 w-32 h-32 text-violet-primary/10 group-hover:text-violet-primary/20 transition-all duration-500 pointer-events-none select-none"
                  viewBox="0 0 120 120"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="85" cy="85" r="28" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 3" />
                  <circle cx="85" cy="85" r="46" stroke="currentColor" strokeWidth="1" />
                  <circle cx="85" cy="85" r="64" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
                </svg>

                {/* Top Row: Colorful Icon Badge & Italic Serif Number */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-2xl ${card.badgeBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      {card.icon}
                    </div>
                    <span className="font-serif italic text-lg sm:text-xl text-[#B8B4C8] font-light select-none">
                      {card.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[16.5px] sm:text-[17.5px] font-semibold text-[#111014] leading-snug mb-3 group-hover:text-violet-primary transition-colors duration-200">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[13.5px] text-[#666371] leading-relaxed font-normal mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-2 relative z-10">
                  <a
                    href={`/solutions#${card.id}`}
                    className="inline-flex items-center gap-1.5 text-[12.5px] sm:text-[13px] font-medium text-violet-primary hover:text-violet-deep transition-colors group/link"
                  >
                    <span>{card.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
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