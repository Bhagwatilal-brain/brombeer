import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Target,
  Layers,
  Cpu,
  GitBranch,
  Activity,
  ArrowUpRight,
} from 'lucide-react';
import { Container } from '../../layout/Container';
import { ScrollReveal } from '../../animations/ScrollReveal';
import { ScrollTextReveal } from '../../animations/ScrollTextReveal';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { PROCESS_PHASES } from '../../../data/siteContent';

import approach1 from '@/assets/images/approach/approach 1.jpeg';
import approach2 from '@/assets/images/approach/approach 2.jpeg';
import approach3 from '@/assets/images/approach/approach 3.jpeg';
import approach4 from '@/assets/images/approach/approach 4.jpeg';
import approach5 from '@/assets/images/approach/approach 5.jpeg';
import approach6 from '@/assets/images/approach/approach 6.jpeg';

interface PhaseAccordionData {
  number: string;
  name: string;
  shortTitle: string;
  tagline: string;
  description: string;
  activities: string[];
  deliverable: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  image: string;
  imageClassName?: string;
  gateLabel: string;
}

const ACCORDION_PHASES: PhaseAccordionData[] = [
  {
    number: PROCESS_PHASES[0].number,
    name: PROCESS_PHASES[0].name,
    shortTitle: 'Discover',
    tagline: PROCESS_PHASES[0].tagline,
    description: PROCESS_PHASES[0].description,
    activities: PROCESS_PHASES[0].activities,
    deliverable: PROCESS_PHASES[0].deliverable,
    icon: Compass,
    accentColor: '#7650E8',
    image: approach1,
    gateLabel: 'Gate 01 · Opportunity & Constraints',
  },
  {
    number: PROCESS_PHASES[1].number,
    name: PROCESS_PHASES[1].name,
    shortTitle: 'Define',
    tagline: PROCESS_PHASES[1].tagline,
    description: PROCESS_PHASES[1].description,
    activities: PROCESS_PHASES[1].activities,
    deliverable: PROCESS_PHASES[1].deliverable,
    icon: Target,
    accentColor: '#6366F1',
    image: approach2,
    gateLabel: 'Gate 02 · Feasibility & ROI Validation',
  },
  {
    number: PROCESS_PHASES[2].number,
    name: PROCESS_PHASES[2].name,
    shortTitle: 'Design',
    tagline: PROCESS_PHASES[2].tagline,
    description: PROCESS_PHASES[2].description,
    activities: PROCESS_PHASES[2].activities,
    deliverable: PROCESS_PHASES[2].deliverable,
    icon: Layers,
    accentColor: '#8B5CF6',
    image: approach3,
    gateLabel: 'Gate 03 · Architecture & Governance',
  },
  {
    number: PROCESS_PHASES[3].number,
    name: PROCESS_PHASES[3].name,
    shortTitle: 'Prototype',
    tagline: PROCESS_PHASES[3].tagline,
    description: PROCESS_PHASES[3].description,
    activities: PROCESS_PHASES[3].activities,
    deliverable: PROCESS_PHASES[3].deliverable,
    icon: Cpu,
    accentColor: '#3B82F6',
    image: approach4,
    gateLabel: 'Gate 04 · Proof-of-Concept Benchmark',
  },
  {
    number: PROCESS_PHASES[4].number,
    name: PROCESS_PHASES[4].name,
    shortTitle: 'Build & Integrate',
    tagline: PROCESS_PHASES[4].tagline,
    description: PROCESS_PHASES[4].description,
    activities: PROCESS_PHASES[4].activities,
    deliverable: PROCESS_PHASES[4].deliverable,
    icon: GitBranch,
    accentColor: '#10B981',
    image: approach5,
    gateLabel: 'Gate 05 · Production Security Audit',
  },
  {
    number: PROCESS_PHASES[5].number,
    name: PROCESS_PHASES[5].name,
    shortTitle: 'Deploy & Improve',
    tagline: PROCESS_PHASES[5].tagline,
    description: PROCESS_PHASES[5].description,
    activities: PROCESS_PHASES[5].activities,
    deliverable: PROCESS_PHASES[5].deliverable,
    icon: Activity,
    accentColor: '#EC4899',
    image: approach6,
    gateLabel: 'Gate 06 · Drift & Telemetry Loop',
  },
];

export const ApproachPhasesAccordionSection: React.FC = () => {
  // Default to Phase 01 (Discover) or Phase 03
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="phases-breakdown"
      className="py-14 sm:py-18 lg:py-24 bg-gradient-to-b from-[#FAF8FE] via-[#F8F5FD] to-[#F3EDFC] relative overflow-hidden border-b border-[#6853A5]/10 scroll-mt-24"
    >
      {/* Background Soft Accents & Radial Gradients */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#E2D9F8]/40 via-[#EDE7FB]/20 to-transparent pointer-events-none border border-[#7650E8]/10" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#EBE3FC]/30 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-72 h-72 rounded-full bg-gradient-to-t from-[#EDE7FB]/25 to-transparent pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Header Block Centered Above the Accordion Deck */}
        <div className="mb-8 sm:mb-10 lg:mb-12 w-full text-center">
          <ScrollTextReveal
            align="center"
            eyebrow="METHODICAL EXECUTION"
            title="The Six-Phase Delivery Lifecycle"
            highlightWords={['Delivery', 'Lifecycle']}
            titleClassName="text-3xl sm:text-4xl lg:text-[46px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.12] mb-3.5"
            description="AI initiatives succeed when business objectives, technical decisions, risk management, and delivery expectations align from the beginning. Explore our proven delivery stages."
            descriptionClassName="text-text-secondary text-[14.5px] sm:text-[16px] leading-relaxed font-normal max-w-3xl lg:max-w-4xl mx-auto"
            maxWidth="max-w-4xl lg:max-w-5xl mx-auto"
          />
        </div>

        {/* Full-Width Interactive Horizontal Accordion Deck */}
        <div className="w-full">
          <ScrollReveal direction="up" delay={0.15}>
            <div className="flex flex-row items-stretch gap-2.5 sm:gap-3.5 lg:gap-4 h-[560px] sm:h-[600px] lg:h-[640px] w-full overflow-x-auto lg:overflow-x-visible no-scrollbar pb-2">
              {ACCORDION_PHASES.map((item, idx) => {
                const isExpanded = activeIndex === idx;
                const Icon = item.icon;

                if (isExpanded) {
                  return (
                    <motion.div
                      key={item.number}
                      id={`phase-${item.number}`}
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
                      <div className="absolute top-0 right-0 bottom-0 w-[55%] sm:w-[62%] lg:w-[68%] pointer-events-none select-none overflow-hidden flex items-center justify-end">
                        <img
                          src={item.image}
                          alt={item.name}
                          className={`w-full h-full object-cover mix-blend-multiply opacity-45 sm:opacity-55 transition-all duration-500 ${item.imageClassName || 'object-center'}`}
                          style={{
                            maskImage:
                              'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 15%, black 45%)',
                            WebkitMaskImage:
                              'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.2) 15%, black 45%)',
                          }}
                          loading="lazy"
                        />
                      </div>

                      {/* Top purple glowing line */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent" />

                      {/* Expanded Card Content with Enhanced Typography & Breathing Room */}
                      <div className="relative z-10 flex flex-col justify-start h-full max-w-[85%] sm:max-w-[70%] lg:max-w-[62%]">
                        <div>
                          {/* Icon Symbol Badge */}
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#F0EAFB] border border-[#6853A5]/18 flex items-center justify-center text-violet-primary mb-5 sm:mb-6 shadow-sm flex-shrink-0">
                            <Icon className="w-6 h-6 sm:w-6.5 sm:h-6.5 text-violet-primary" />
                          </div>

                          {/* Title */}
                          <h3 className="font-sans font-bold text-2xl sm:text-[32px] lg:text-[36px] text-[#111014] tracking-tight leading-[1.16] mb-4">
                            {item.name}
                          </h3>

                          {/* Description */}
                          <p className="text-xs sm:text-[14.5px] lg:text-[15px] font-dm text-[#666371] leading-relaxed font-normal max-w-lg">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                }

                // Collapsed Narrow Tab
                return (
                  <motion.div
                    key={item.number}
                    id={`phase-${item.number}`}
                    layout={!prefersReduced}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 28,
                    }}
                    style={{ flex: 1 }}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className="min-w-[56px] sm:min-w-[68px] lg:min-w-[74px] group relative rounded-[1.75rem] sm:rounded-[2rem] bg-white border border-[#6853A5]/16 shadow-sm hover:shadow-md hover:border-violet-primary/40 pt-7 sm:pt-8 lg:pt-9 pb-6 sm:pb-7 px-2 sm:px-2.5 flex flex-col items-center justify-between cursor-pointer transition-colors select-none overflow-hidden"
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

export default ApproachPhasesAccordionSection;
