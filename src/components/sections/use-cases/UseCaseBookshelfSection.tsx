import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BookOpen,
  FileCheck,
  MessageSquare,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import { Container } from '../../layout/Container';
import { ScrollReveal } from '../../animations/ScrollReveal';
import { ScrollTextReveal } from '../../animations/ScrollTextReveal';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { Button } from '../../ui/Button';
import { USE_CASES } from '../../../data/useCases';

interface BookshelfItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  headline: string;
  tag: string;
  solution: string;
  challenge: string;
  benefits: string[];
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const BOOKSHELF_CASES: BookshelfItem[] = [
  {
    id: USE_CASES[0].id,
    number: '01',
    title: USE_CASES[0].title,
    shortTitle: 'Knowledge Assistant',
    headline: USE_CASES[0].headline,
    tag: 'RAG · SECURE CITATIONS',
    solution: USE_CASES[0].solution,
    challenge: USE_CASES[0].challenge,
    benefits: USE_CASES[0].benefits,
    image: '/images/use-cases/bookshelf-knowledge-assistant.jpg',
    icon: BookOpen,
  },
  {
    id: USE_CASES[1].id,
    number: '02',
    title: USE_CASES[1].title,
    shortTitle: 'Document Processing',
    headline: USE_CASES[1].headline,
    tag: 'MULTI-MODAL OCR · FIELD PARSING',
    solution: USE_CASES[1].solution,
    challenge: USE_CASES[1].challenge,
    benefits: USE_CASES[1].benefits,
    image: '/images/use-cases/bookshelf-document-processing.jpg',
    icon: FileCheck,
  },
  {
    id: USE_CASES[2].id,
    number: '03',
    title: USE_CASES[2].title,
    shortTitle: 'Service Assistant',
    headline: USE_CASES[2].headline,
    tag: '24/7 SUPPORT · ESCALATION',
    solution: USE_CASES[2].solution,
    challenge: USE_CASES[2].challenge,
    benefits: USE_CASES[2].benefits,
    image: '/images/use-cases/bookshelf-service-assistant.jpg',
    icon: MessageSquare,
  },
  {
    id: USE_CASES[3].id,
    number: '04',
    title: USE_CASES[3].title,
    shortTitle: 'Inventory Intelligence',
    headline: USE_CASES[3].headline,
    tag: 'DEMAND ML · ANOMALY DETECTION',
    solution: USE_CASES[3].solution,
    challenge: USE_CASES[3].challenge,
    benefits: USE_CASES[3].benefits,
    image: '/images/use-cases/bookshelf-inventory-intelligence.jpg',
    icon: BarChart3,
  },
];

export const UseCaseBookshelfSection: React.FC = () => {
  // Default to the first case expanded
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  return (
    <section id="operational-use-cases" className="py-14 sm:py-18 lg:py-22 bg-gradient-to-b from-[#FAF8FE] via-[#F8F5FD] to-[#F3EDFC] relative overflow-hidden border-b border-[#6853A5]/10">
      {/* Background Soft Ambient Accents & Glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#E2D9F8]/40 via-[#EDE7FB]/20 to-transparent pointer-events-none border border-[#7650E8]/10" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#EBE3FC]/30 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-72 h-72 rounded-full bg-gradient-to-t from-[#EDE7FB]/25 to-transparent pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Header Block Centered Above Accordion */}
        <div className="mb-8 sm:mb-10 lg:mb-12 w-full text-center">
          <ScrollTextReveal
            align="center"
            eyebrow="CORE ENTERPRISE CAPABILITIES"
            title="Practical AI for the Challenges That Matter Most"
            highlightWords={['That', 'Matter', 'Most']}
            titleClassName="text-3xl sm:text-4xl lg:text-[44px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.14] mb-3.5"
            description="Explore our proven enterprise architectures designed to resolve knowledge bottlenecks, document overhead, service latency, and inventory forecasting volatility."
            descriptionClassName="text-text-secondary text-[14.5px] sm:text-[16px] leading-relaxed font-normal max-w-3xl lg:max-w-4xl mx-auto font-dm"
            maxWidth="max-w-4xl lg:max-w-5xl mx-auto"
          />
        </div>

        {/* Full-Width Interactive Horizontal Bookshelf Accordion */}
        <div className="w-full">
          <ScrollReveal direction="up" delay={0.15}>
            <div className="flex flex-row items-stretch gap-2.5 sm:gap-3.5 lg:gap-4 h-[560px] sm:h-[600px] lg:h-[630px] w-full overflow-x-auto lg:overflow-x-visible no-scrollbar pb-2">
              {BOOKSHELF_CASES.map((item, idx) => {
                const isExpanded = activeIndex === idx;
                const Icon = item.icon;

                if (isExpanded) {
                  return (
                    <motion.div
                      key={item.id}
                      layout={!prefersReduced}
                      transition={{
                        type: 'spring',
                        stiffness: 280,
                        damping: 28,
                      }}
                      style={{ flex: 8.5 }}
                      className="min-w-[340px] sm:min-w-[560px] lg:min-w-[680px] relative rounded-[2.25rem] sm:rounded-[2.5rem] bg-gradient-to-br from-white via-white to-[#F7F3FD] border border-[#6853A5]/20 shadow-2xl shadow-violet-primary/12 p-7 sm:p-9 lg:p-11 flex flex-col justify-between overflow-hidden select-none cursor-default"
                    >
                      {/* Background Artwork Illustration with Smooth Gradient Mist Mask */}
                      <div className="absolute top-0 right-0 bottom-0 w-[55%] sm:w-[62%] lg:w-[66%] pointer-events-none select-none overflow-hidden flex items-center justify-end">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover mix-blend-multiply opacity-45 sm:opacity-55 transition-all duration-500 object-center"
                          style={{
                            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 15%, black 45%)',
                            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 15%, black 45%)',
                          }}
                          loading="lazy"
                        />
                      </div>

                      {/* Top purple glowing hairline accent */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent" />

                      {/* Expanded Card Content */}
                      <div className="relative z-10 flex flex-col justify-between h-full max-w-[90%] sm:max-w-[72%] lg:max-w-[62%]">
                        <div>
                          {/* Icon Symbol Badge */}
                          <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-[#F0EAFB] border border-[#6853A5]/18 flex items-center justify-center text-violet-primary shadow-xs flex-shrink-0 mb-4 sm:mb-5">
                            <Icon className="w-5.5 h-5.5 text-violet-primary" />
                          </div>

                          {/* Title & Headline */}
                          <h3 className="font-sans font-bold text-2xl sm:text-[30px] lg:text-[34px] text-[#111014] tracking-tight leading-[1.15] mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm sm:text-base font-sans font-semibold text-[#7650E8] mb-3">
                            {item.headline}
                          </p>

                          {/* Solution description */}
                          <p className="text-xs sm:text-[14px] font-dm text-[#5E5970] leading-relaxed mb-4">
                            {item.solution}
                          </p>

                          {/* Key Benefits List */}
                          <div className="space-y-1.5 pt-1">
                            <span className="text-[10.5px] font-mono uppercase tracking-wider text-[#8A7EA8] font-semibold block">
                              KEY ENTERPRISE ADVANTAGES
                            </span>
                            <div className="grid grid-cols-1 gap-1.5">
                              {item.benefits.slice(0, 3).map((benefit, bIdx) => (
                                <div key={bIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#3E3852] font-dm">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-primary flex-shrink-0 mt-0.5" />
                                  <span className="leading-snug">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Bottom CTA Action Button */}
                        <div className="pt-5 sm:pt-6">
                          <Button
                            asLink
                            href="/contact"
                            variant="secondary"
                            size="md"
                            textRoll
                            icon={<ArrowRight className="w-4 h-4" />}
                            className="border-border-subtle hover:border-violet-primary hover:text-violet-primary font-medium shadow-sm hover:shadow-md hover:shadow-violet-primary/10"
                          >
                            Discuss This Architecture
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                // Collapsed Bookshelf Spine Tab
                return (
                  <motion.div
                    key={item.id}
                    layout={!prefersReduced}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 28,
                    }}
                    style={{ flex: 1 }}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className="min-w-[56px] sm:min-w-[68px] lg:min-w-[76px] group relative rounded-[1.75rem] sm:rounded-[2rem] bg-white border border-[#6853A5]/16 shadow-xs hover:shadow-md hover:border-violet-primary/40 pt-7 sm:pt-8 lg:pt-9 pb-6 sm:pb-7 px-2 sm:px-2.5 flex flex-col items-center justify-between cursor-pointer transition-colors select-none overflow-hidden"
                  >
                    {/* Top Indicator Accent on Hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Top: Icon Symbol inside Circle */}
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F4EFFC] flex items-center justify-center text-violet-primary group-hover:scale-110 transition-transform shadow-xs">
                      <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-violet-primary" />
                    </div>

                    {/* Center: Vertical Rotated Label Spine */}
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
