import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Landmark,
  Shield,
  HeartPulse,
  Truck,
  Factory,
  Users,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface IndustryCardData {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badgeBg: string;
  image: string;
}

const INDUSTRY_ITEMS: IndustryCardData[] = [
  {
    id: 'government',
    number: '01',
    title: 'Government & Public Sector',
    shortTitle: 'Government & Public Sector',
    description:
      'Support digital public services, information discovery, document processing, and administrative workflow improvement.',
    href: '/industries#government',
    icon: Landmark,
    accentColor: '#7650E8',
    badgeBg: 'bg-gradient-to-tr from-[#6366F1] to-[#8B5CF6]',
    image: '/images/industry_solutions/Lavender Capitol Fading into Mist.png',
  },
  {
    id: 'defence-security',
    number: '02',
    title: 'Defence & Security',
    shortTitle: 'Defence & Security',
    description:
      'Explore controlled AI applications for logistics, knowledge access, document workflows, asset management, and operational decision support.',
    href: '/industries#defence-security',
    icon: Shield,
    accentColor: '#3B82F6',
    badgeBg: 'bg-gradient-to-tr from-[#3B82F6] to-[#60A5FA]',
    image: '/images/industry_solutions/Violet Radar Over Misty Mountains.png',
  },
  {
    id: 'healthcare',
    number: '03',
    title: 'Healthcare & Life Sciences',
    shortTitle: 'Healthcare',
    description:
      'Support clinical and administrative workflows through document intelligence, information retrieval, operational analytics, and decision-support applications.',
    href: '/industries#healthcare',
    icon: HeartPulse,
    accentColor: '#EC4899',
    badgeBg: 'bg-gradient-to-tr from-[#EC4899] to-[#F43F5E]',
    image: '/images/industry_solutions/Futuristic Lavender Hospital Campus.png',
  },
  {
    id: 'logistics',
    number: '04',
    title: 'Logistics & Supply Chain',
    shortTitle: 'Logistics & Supply Chain',
    description:
      'Improve demand planning, inventory visibility, document processing, anomaly detection, and operational coordination.',
    href: '/industries#logistics',
    icon: Truck,
    accentColor: '#F59E0B',
    badgeBg: 'bg-gradient-to-tr from-[#F59E0B] to-[#FBBF24]',
    image: '/images/industry_solutions/Lavender Port_ Cranes and Cargo.png',
  },
  {
    id: 'manufacturing',
    number: '05',
    title: 'Manufacturing & Industrial',
    shortTitle: 'Manufacturing & Industrial Operations',
    description:
      'Apply computer vision, predictive maintenance, quality inspection, and data-driven process optimization.',
    href: '/industries#manufacturing',
    icon: Factory,
    accentColor: '#10B981',
    badgeBg: 'bg-gradient-to-tr from-[#10B981] to-[#34D399]',
    image: '/images/industry_solutions/Futuristic Lavender Robotic Assembly Line.png',
  },
  {
    id: 'enterprise-services',
    number: '06',
    title: 'Enterprise & Professional Services',
    shortTitle: 'Enterprise & Professional Services',
    description:
      'Help teams work more efficiently through knowledge assistants, document automation, intelligent search, and AI-enabled business applications.',
    href: '/industries#financial-services',
    icon: Users,
    accentColor: '#7C3AED',
    badgeBg: 'bg-gradient-to-tr from-[#7C3AED] to-[#A78BFA]',
    image: '/images/industry_solutions/Lavender High-Rise Boardroom Panorama.png',
  },
];

export const IndustriesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  return (
    <section id="industries" className="py-14 sm:py-20 lg:py-26 bg-background relative overflow-hidden">
      <Container size="wide">
        {/* Main Bounded Container Housing Header on Left and Interactive Accordion on Right */}
        <div className="rounded-[2.5rem] sm:rounded-[3rem] bg-gradient-to-br from-[#FAF8FE] via-[#F8F5FD] to-[#F3EDFC] border border-[#6853A5]/20 p-6 sm:p-8 md:p-9 lg:p-10 xl:p-12 shadow-[0_20px_50px_-20px_rgba(118,80,232,0.08),0_2px_6px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
            
            {/* Left Column: Heading Block & Copy */}
            <div className="lg:col-span-4 xl:col-span-4">
              <ScrollTextReveal
                eyebrow="INDUSTRY SOLUTIONS"
                title="AI for the Challenges That Matter Most"
                highlightWords={['That', 'Matter', 'Most']}
                titleClassName="text-3xl sm:text-4xl lg:text-[44px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.1] mb-4"
                description="We apply AI to industry-specific problems, taking into account the operational requirements, data environments, and governance considerations of each sector."
                descriptionClassName="text-text-secondary text-[14px] sm:text-[15.5px] leading-relaxed font-light"
                maxWidth="max-w-md"
              />
            </div>

            {/* Right Column: Interactive Horizontal Accordion Deck */}
            <div className="lg:col-span-8 xl:col-span-8 w-full">
              <ScrollReveal direction="up" delay={0.15}>
                {/* Horizontal Deck with expanded height so cards have maximum breathing room */}
                <div className="flex flex-row items-stretch gap-2.5 sm:gap-3.5 h-[530px] sm:h-[560px] lg:h-[580px] w-full overflow-x-auto lg:overflow-x-visible no-scrollbar pb-1">
                  {INDUSTRY_ITEMS.map((item, idx) => {
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
                          style={{ flex: 7.2 }}
                          className="min-w-[340px] sm:min-w-[460px] lg:min-w-0 relative rounded-[2.25rem] sm:rounded-[2.5rem] bg-gradient-to-br from-white via-white to-[#F7F3FD] border border-[#6853A5]/20 shadow-2xl shadow-violet-primary/10 p-8 sm:p-10 lg:p-12 flex flex-col justify-between overflow-hidden select-none cursor-default"
                        >
                          {/* Background Artwork Illustration with Smooth Gradient Mist Mask */}
                          <div className="absolute top-0 right-0 bottom-0 w-[55%] sm:w-[60%] pointer-events-none select-none overflow-hidden flex items-center justify-end">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover object-center mix-blend-multiply opacity-85 sm:opacity-90 transition-opacity duration-500"
                              style={{
                                maskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.3) 15%, black 50%)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.3) 15%, black 50%)',
                              }}
                              loading="lazy"
                            />
                          </div>

                          {/* Top purple glowing line */}
                          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent" />

                          {/* Expanded Card Content */}
                          <div className="relative z-10 flex flex-col justify-between h-full max-w-[85%] sm:max-w-[70%] lg:max-w-[65%]">
                            <div>
                              {/* Icon Symbol */}
                              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#F0EAFB] border border-[#6853A5]/18 flex items-center justify-center text-violet-primary mb-5 sm:mb-6 shadow-sm">
                                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-violet-primary" />
                              </div>

                              {/* Title */}
                              <h3 className="font-sans font-bold text-2xl sm:text-[30px] lg:text-[32px] text-[#111014] tracking-tight leading-[1.18] mb-4">
                                {item.title}
                              </h3>

                              {/* Description */}
                              <p className="text-xs sm:text-[14px] lg:text-[14.5px] font-dm text-[#666371] leading-relaxed font-normal max-w-md">
                                {item.description}
                              </p>
                            </div>

                            {/* Explore Solutions Pill Button */}
                            <div className="pt-6">
                              <a
                                href={item.href}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EDE7FA] hover:bg-[#E3DAF8] text-[#6E48E5] font-dm font-semibold text-xs sm:text-[13px] tracking-wide transition-colors shadow-sm select-none group"
                              >
                                <span>Explore Solutions</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      );
                    }

                    // Collapsed Narrow Tab
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
                        className="min-w-[58px] sm:min-w-[68px] lg:min-w-0 group relative rounded-[1.75rem] sm:rounded-[2rem] bg-white border border-[#6853A5]/16 shadow-sm hover:shadow-md hover:border-violet-primary/40 pt-7 sm:pt-8 lg:pt-9 pb-6 sm:pb-7 px-2 sm:px-2.5 flex flex-col items-center justify-between cursor-pointer transition-colors select-none overflow-hidden"
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
                            className="font-sans text-[14.5px] sm:text-[15.5px] text-[#1E1142] whitespace-nowrap tracking-tight font-semibold group-hover:text-violet-primary transition-colors"
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

          </div>
        </div>
      </Container>
    </section>
  );
};

export default IndustriesSection;
