import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  illustration: React.ReactNode;
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
    illustration: (
      <svg
        className="w-full h-full text-violet-primary/20"
        viewBox="0 0 360 400"
        fill="none"
        aria-hidden="true"
      >
        {/* Soft Radial Aura */}
        <circle cx="260" cy="200" r="140" fill="currentColor" fillOpacity="0.12" />
        
        {/* Neoclassical Dome & Colonnade Architectural Silhouette */}
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
          {/* Lantern & Finial */}
          <line x1="260" y1="50" x2="260" y2="70" strokeWidth="2" />
          <circle cx="260" cy="46" r="4" fill="currentColor" />
          <path d="M252 70h16v14h-16z" fill="currentColor" fillOpacity="0.1" />

          {/* Upper Dome Curve */}
          <path d="M220 120 C220 78, 300 78, 300 120 Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M232 120 C232 90, 288 90, 288 120" strokeDasharray="3 3" />
          <line x1="214" y1="120" x2="306" y2="120" strokeWidth="2" />

          {/* Drum / Rotunda */}
          <path d="M216 120v28h88v-28" />
          <line x1="228" y1="120" x2="228" y2="148" />
          <line x1="244" y1="120" x2="244" y2="148" />
          <line x1="260" y1="120" x2="260" y2="148" />
          <line x1="276" y1="120" x2="276" y2="148" />
          <line x1="292" y1="120" x2="292" y2="148" />
          <line x1="208" y1="148" x2="312" y2="148" strokeWidth="2" />

          {/* Triangular Pediment */}
          <polygon points="260,160 190,190 330,190" fill="currentColor" fillOpacity="0.12" strokeWidth="1.8" />
          <circle cx="260" cy="180" r="5" fill="currentColor" fillOpacity="0.4" />

          {/* Grand Colonnade Pillars */}
          <line x1="192" y1="190" x2="328" y2="190" strokeWidth="2.2" />
          <line x1="202" y1="190" x2="202" y2="280" strokeWidth="2" />
          <line x1="222" y1="190" x2="222" y2="280" strokeWidth="2" />
          <line x1="242" y1="190" x2="242" y2="280" strokeWidth="2" />
          <line x1="262" y1="190" x2="262" y2="280" strokeWidth="2" />
          <line x1="282" y1="190" x2="282" y2="280" strokeWidth="2" />
          <line x1="302" y1="190" x2="302" y2="280" strokeWidth="2" />
          <line x1="318" y1="190" x2="318" y2="280" strokeWidth="2" />

          {/* Base Steps */}
          <line x1="184" y1="280" x2="336" y2="280" strokeWidth="2.5" />
          <line x1="176" y1="288" x2="344" y2="288" strokeWidth="2.5" />
          <line x1="168" y1="296" x2="352" y2="296" strokeWidth="2.5" />
        </g>
      </svg>
    ),
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
    illustration: (
      <svg
        className="w-full h-full text-blue-500/20"
        viewBox="0 0 360 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="260" cy="200" r="130" fill="currentColor" fillOpacity="0.1" />
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.85">
          {/* Radar Circles */}
          <circle cx="260" cy="200" r="100" strokeDasharray="4 4" />
          <circle cx="260" cy="200" r="68" />
          <circle cx="260" cy="200" r="36" />
          
          {/* Central Shield Crest */}
          <path
            d="M260 140 L300 160 L300 220 Q300 260 260 280 Q220 260 220 220 L220 160 Z"
            fill="currentColor"
            fillOpacity="0.15"
            strokeWidth="2"
          />
          <path d="M260 156 L286 172 L286 216 Q286 248 260 264 Q234 248 234 216 L234 172 Z" strokeDasharray="3 3" />
          
          {/* Scanning Sweep Vector Line */}
          <line x1="260" y1="200" x2="350" y2="130" strokeWidth="2" strokeDasharray="6 3" />
        </g>
      </svg>
    ),
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
    illustration: (
      <svg
        className="w-full h-full text-pink-500/20"
        viewBox="0 0 360 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="260" cy="200" r="130" fill="currentColor" fillOpacity="0.1" />
        <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.85">
          {/* Heart Emblem */}
          <path
            d="M260 260 C210 210, 210 160, 235 145 C255 132, 260 155, 260 155 C260 155, 265 132, 285 145 C310 160, 310 210, 260 260 Z"
            fill="currentColor"
            fillOpacity="0.14"
            strokeWidth="2"
          />
          {/* Heartbeat EKG Pulse Wave */}
          <path
            d="M180 200 L230 200 L242 175 L255 225 L268 185 L278 208 L288 200 L340 200"
            strokeWidth="2.2"
          />
          {/* Medical Cross Aura */}
          <circle cx="260" cy="180" r="50" strokeDasharray="4 4" />
        </g>
      </svg>
    ),
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
    illustration: (
      <svg
        className="w-full h-full text-amber-500/20"
        viewBox="0 0 360 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="260" cy="200" r="130" fill="currentColor" fillOpacity="0.1" />
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
          {/* Global Transit Network Iso-Grid */}
          <path d="M260 130 L330 170 L330 250 L260 290 L190 250 L190 170 Z" fill="currentColor" fillOpacity="0.1" strokeWidth="1.8" />
          <line x1="260" y1="130" x2="260" y2="290" strokeDasharray="3 3" />
          <line x1="190" y1="170" x2="330" y2="250" strokeDasharray="3 3" />
          <line x1="330" y1="170" x2="190" y2="250" strokeDasharray="3 3" />

          {/* Route Nodes */}
          <circle cx="260" cy="130" r="6" fill="currentColor" />
          <circle cx="330" cy="170" r="5" fill="currentColor" />
          <circle cx="190" cy="170" r="5" fill="currentColor" />
          <circle cx="260" cy="210" r="7" fill="currentColor" />
          <circle cx="330" cy="250" r="5" fill="currentColor" />
          <circle cx="190" cy="250" r="5" fill="currentColor" />
          <circle cx="260" cy="290" r="6" fill="currentColor" />
        </g>
      </svg>
    ),
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
    illustration: (
      <svg
        className="w-full h-full text-emerald-500/20"
        viewBox="0 0 360 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="260" cy="200" r="130" fill="currentColor" fillOpacity="0.1" />
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
          {/* Precision Industrial Gear */}
          <circle cx="260" cy="200" r="60" fill="currentColor" fillOpacity="0.12" strokeWidth="2" />
          <circle cx="260" cy="200" r="28" fill="white" strokeWidth="2" />
          <circle cx="260" cy="200" r="14" fill="currentColor" />
          
          {/* Gear Teeth Array */}
          <path d="M252 134h16v12h-16z" fill="currentColor" />
          <path d="M252 254h16v12h-16z" fill="currentColor" />
          <path d="M194 192h12v16h-12z" fill="currentColor" />
          <path d="M314 192h12v16h-12z" fill="currentColor" />
          
          {/* Satellite Telemetry Ring */}
          <circle cx="260" cy="200" r="95" strokeDasharray="4 4" />
        </g>
      </svg>
    ),
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
    illustration: (
      <svg
        className="w-full h-full text-purple-500/20"
        viewBox="0 0 360 400"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="260" cy="200" r="130" fill="currentColor" fillOpacity="0.1" />
        <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.85">
          {/* Constellation Nodes of Organizations */}
          <circle cx="260" cy="150" r="18" fill="currentColor" fillOpacity="0.15" strokeWidth="2" />
          <circle cx="210" cy="240" r="15" fill="currentColor" fillOpacity="0.15" strokeWidth="2" />
          <circle cx="310" cy="240" r="15" fill="currentColor" fillOpacity="0.15" strokeWidth="2" />
          
          {/* Interconnecting Network Bridges */}
          <line x1="260" y1="168" x2="210" y2="225" strokeWidth="2" />
          <line x1="260" y1="168" x2="310" y2="225" strokeWidth="2" />
          <line x1="225" y1="240" x2="295" y2="240" strokeWidth="2" strokeDasharray="4 4" />
          
          {/* Surrounding Orbit Ring */}
          <circle cx="260" cy="210" r="90" strokeDasharray="3 3" />
        </g>
      </svg>
    ),
  },
];

export const IndustriesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  const activeItem = INDUSTRY_ITEMS[activeIndex];
  const ActiveIcon = activeItem.icon;

  return (
    <section id="industries" className="py-14 sm:py-18 lg:py-24 bg-background relative overflow-hidden">
      <Container size="wide">
        {/* Main Bounded Container Housing Header on Left and Interactive Accordion on Right */}
        <div className="rounded-[2.25rem] sm:rounded-[2.75rem] bg-gradient-to-br from-[#FAF8FE] via-[#F8F5FD] to-[#F3EDFC] border border-[#6853A5]/20 p-6 sm:p-8 md:p-10 lg:p-12 shadow-[0_20px_50px_-20px_rgba(118,80,232,0.08),0_2px_6px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Column: Heading Block & Copy */}
            <div className="lg:col-span-4 xl:col-span-4">
              <ScrollTextReveal
                eyebrow="INDUSTRY SOLUTIONS"
                title="AI for the Challenges That Matter Most"
                titleClassName="text-3xl sm:text-4xl lg:text-[40px] font-serif font-normal text-[#111014] tracking-tight leading-[1.12] mb-4"
                description="We apply AI to industry-specific problems, taking into account the operational requirements, data environments, and governance considerations of each sector."
                descriptionClassName="text-text-secondary text-[14px] sm:text-[15px] leading-relaxed font-light"
                maxWidth="max-w-md"
              />
            </div>

            {/* Right Column: Interactive Horizontal Accordion Deck */}
            <div className="lg:col-span-8 xl:col-span-8 w-full">
              <ScrollReveal direction="up" delay={0.15}>
                {/* Horizontal Deck for Tablets & Desktops */}
                <div className="flex flex-row items-stretch gap-2 sm:gap-3 h-[430px] sm:h-[450px] w-full overflow-x-auto lg:overflow-x-visible no-scrollbar pb-1">
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
                          className="flex-[4] min-w-[280px] sm:min-w-[340px] lg:min-w-0 relative rounded-[2rem] bg-gradient-to-br from-white via-white to-[#F7F3FD] border border-[#6853A5]/20 shadow-xl shadow-violet-primary/8 p-7 sm:p-9 flex flex-col justify-between overflow-hidden select-none cursor-default"
                        >
                          {/* Background Artwork Illustration with Soft Blend */}
                          <div className="absolute top-0 right-0 bottom-0 w-[55%] pointer-events-none select-none overflow-hidden flex items-center justify-end opacity-40 sm:opacity-50">
                            {item.illustration}
                          </div>

                          {/* Top purple glowing line */}
                          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent" />

                          {/* Expanded Card Content */}
                          <div className="relative z-10 flex flex-col justify-between h-full max-w-[85%] sm:max-w-[70%]">
                            <div>
                              {/* Top Number */}
                              <span className="font-mono text-xs sm:text-[13px] font-semibold text-violet-primary tracking-wider block mb-4">
                                {item.number}
                              </span>

                              {/* Icon */}
                              <div className="w-12 h-12 sm:w-13 sm:h-13 rounded-2xl bg-[#F0EAFB] border border-[#6853A5]/18 flex items-center justify-center text-violet-primary mb-6 shadow-sm">
                                <Icon className="w-6 h-6 text-violet-primary" />
                              </div>

                              {/* Title */}
                              <h3 className="font-serif text-2xl sm:text-[28px] font-normal text-[#111014] tracking-tight leading-[1.2] mb-3.5">
                                {item.title}
                              </h3>

                              {/* Description */}
                              <p className="text-xs sm:text-[13.5px] text-[#666371] leading-relaxed font-light">
                                {item.description}
                              </p>
                            </div>

                            {/* Explore Solutions Pill Button */}
                            <div className="pt-4">
                              <a
                                href={item.href}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EDE7FA] hover:bg-[#E3DAF8] text-[#6E48E5] font-semibold text-xs tracking-wide transition-colors shadow-sm select-none group"
                              >
                                <span>Explore Solutions</span>
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
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
                        onClick={() => setActiveIndex(idx)}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className="flex-1 min-w-[58px] sm:min-w-[68px] lg:min-w-0 group relative rounded-[1.75rem] bg-white border border-[#6853A5]/16 shadow-sm hover:shadow-md hover:border-violet-primary/40 py-6 px-2 sm:px-3 flex flex-col items-center justify-between cursor-pointer transition-colors select-none overflow-hidden"
                      >
                        {/* Top Indicator Accent on Hover */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-violet-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Top: Number & Icon */}
                        <div className="flex flex-col items-center gap-3">
                          <span className="font-mono text-[11px] sm:text-xs font-semibold text-violet-primary tracking-wider">
                            {item.number}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-[#F4EFFC] flex items-center justify-center text-violet-primary group-hover:scale-110 transition-transform">
                            <Icon className="w-4 h-4 text-violet-primary" />
                          </div>
                        </div>

                        {/* Center: Vertical Rotated Label */}
                        <div className="flex-1 flex items-center justify-center py-4 my-auto">
                          <span
                            className="font-serif text-[14px] sm:text-[15px] text-[#1E1142] whitespace-nowrap tracking-tight font-normal group-hover:text-violet-primary transition-colors"
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
