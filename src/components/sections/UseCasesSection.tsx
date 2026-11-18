import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Button } from '../ui/Button';

interface UseCaseCard {
  id: string;
  badge: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

const USE_CASES_LIST: UseCaseCard[] = [
  {
    id: 'knowledge-assistant',
    badge: 'ENTERPRISE RAG',
    title: 'Enterprise Knowledge Assistant',
    description: 'Enable employees to ask questions about authorized internal documents and receive answers grounded in verified source citations.',
    href: '/use-cases#knowledge-assistant',
    image: '/images/use-cases/knowledge-assistant.jpg',
  },
  {
    id: 'document-processing',
    badge: 'MULTIMODAL OCR',
    title: 'Intelligent Document Processing',
    description: 'Extract, classify, and validate information from structured forms, invoices, technical specs, and business documents.',
    href: '/use-cases#document-processing',
    image: '/images/use-cases/document-processing.jpg',
  },
  {
    id: 'service-assistant',
    badge: 'AUTONOMOUS AGENTS',
    title: 'AI-Powered Service Assistant',
    description: 'Help users navigate complex information, resolve routine enquiries, and autonomously route edge cases to specialized teams.',
    href: '/use-cases#service-assistant',
    image: '/images/use-cases/service-assistant.jpg',
  },
  {
    id: 'inventory-intelligence',
    badge: 'PREDICTIVE ML',
    title: 'Predictive Inventory Intelligence',
    description: 'Use historical and operational data to support demand forecasting, stock reorder planning, and supply chain anomaly detection.',
    href: '/use-cases#inventory-intelligence',
    image: '/images/use-cases/inventory-intelligence.jpg',
  },
  {
    id: 'quality-assessment',
    badge: 'EDGE VISION',
    title: 'Visual Quality Assessment',
    description: 'Apply computer vision to inspect physical products, spot sub-millimeter defects, and maintain rigorous industrial tolerances.',
    href: '/use-cases#quality-assessment',
    image: '/images/use-cases/quality-assessment.jpg',
  },
  {
    id: 'workflow-intelligence',
    badge: 'ORCHESTRATION',
    title: 'Workflow Intelligence',
    description: 'Combine language models, business rules, and approved integrations to orchestrate multi-step processes with audit trails.',
    href: '/use-cases#workflow-intelligence',
    image: '/images/use-cases/workflow-intelligence.jpg',
  },
];

export const UseCasesSection: React.FC = () => {
  const prefersReduced = useReducedMotion();

  // Staggered cascade entrance for the 6 cards as the user scrolls into view
  const gridContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 48,
      scale: 0.94,
      rotateX: 6,
      filter: 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1], // fluid deceleration curve
      },
    },
  };

  return (
    <section id="use-cases" className="py-14 sm:py-20 lg:py-26 bg-gradient-to-b from-[#FAF8FE] via-[#F8F5FD] to-[#F3EDFC] relative overflow-hidden border-b border-[#6853A5]/10">
      {/* Background Soft Accents & Ambient Violet Radial Glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#E2D9F8]/35 via-[#EDE7FB]/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#EBE3FC]/25 to-transparent pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Header Block Centered Above Cards Grid (matching Industry Solutions) */}
        <div className="w-full text-center mb-10 sm:mb-12 lg:mb-14 relative">
          {/* Soft Circular Glow Backdrop centered behind Title */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-[#E5DEFB]/50 blur-[2px] pointer-events-none -z-10" />

          <ScrollTextReveal
            align="center"
            eyebrow="AI USE CASES"
            title="Real Problems. Intelligent Possibilities."
            highlightWords={['Intelligent', 'Possibilities.']}
            titleClassName="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.2] sm:leading-[1.24] mb-3.5"
            description="Explore how tailored enterprise AI workflows automate operations, extract intelligence, and power critical decisions."
            descriptionClassName="text-text-secondary text-[14.5px] sm:text-[16px] leading-relaxed font-normal max-w-2xl lg:max-w-3xl mx-auto"
            maxWidth="max-w-4xl lg:max-w-5xl mx-auto"
          />
        </div>

        {/* 6 Rich Visual Use Case Cards Grid with Dynamic Cascading Scroll Appearance */}
        <motion.div
          initial={prefersReduced ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: false, amount: 0.12, margin: '0px 0px -40px 0px' }}
          variants={gridContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-10 sm:mb-12 [perspective:1200px]"
        >
          {USE_CASES_LIST.map((card) => {
            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                className="h-full"
              >
                <a
                  href={card.href}
                  className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[2rem] bg-white border border-[#6853A5]/16 shadow-[0_4px_24px_-4px_rgba(75,45,168,0.06),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_22px_48px_-10px_rgba(118,80,232,0.18)] hover:-translate-y-2 hover:border-violet-primary/45 transition-all duration-300 min-h-[380px] sm:min-h-[400px] h-full overflow-hidden select-none"
                >
                  {/* Top Glowing Accent Indicator on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Ambient Violet Glow on Card Hover */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#7650E8]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* Visual 3D Illustration Stage */}
                    <div className="mb-5 relative rounded-2xl overflow-hidden border border-[#7650E8]/14 bg-[#F5EFFE] aspect-[16/10] sm:aspect-[16/9] shadow-xs group-hover:border-violet-primary/35 transition-all duration-300">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1142]/20 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
                      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 pointer-events-none" />
                    </div>

                    {/* Capability Badge Pill */}
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold text-[#7650E8] bg-[#F3EEFC] border border-[#7650E8]/18 mb-3">
                      {card.badge}
                    </span>

                    {/* Card Title */}
                    <h3 className="font-sans font-bold text-[18px] sm:text-[19px] lg:text-[20px] text-[#111014] tracking-tight leading-snug mb-2.5 group-hover:text-violet-primary transition-colors duration-200">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-[#666371] text-[13px] sm:text-[13.5px] font-dm leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Action Link with Animated Arrow */}
                  <div className="pt-5 mt-auto flex items-center gap-1.5 text-xs font-semibold text-[#7650E8] group-hover:text-[#5B38D4] transition-colors">
                    <span>Explore Use Case</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA Button: Explore AI Use Cases */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex justify-center">
            <Button
              asLink
              href="/use-cases"
              variant="secondary"
              size="md"
              textRoll
              icon={<ArrowRight className="w-4 h-4" />}
              className="border-border-subtle bg-white hover:bg-white hover:border-violet-primary hover:text-violet-primary font-medium shadow-sm hover:shadow-md hover:shadow-violet-primary/10 px-6 py-2.5"
            >
              Explore AI Use Cases
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
