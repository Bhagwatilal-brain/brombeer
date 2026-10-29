import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';

interface IndustryItem {
  id: string;
  title: string;
  description: string;
  href: string;
  isCol3?: boolean;
  isRow1?: boolean;
}

const INDUSTRIES_LIST: IndustryItem[] = [
  {
    id: 'government',
    title: 'Government & Public Sector',
    description: 'Support digital public services, information discovery, document processing, and administrative workflow improvement.',
    href: '/industries#government',
    isRow1: true,
  },
  {
    id: 'defence-security',
    title: 'Defence & Security',
    description: 'Explore controlled AI applications for logistics, knowledge access, document workflows, asset management, and operational decision support.',
    href: '/industries#defence-security',
    isRow1: true,
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Support clinical and administrative workflows through document intelligence, information retrieval, operational analytics, and appropriate decision-support applications.',
    href: '/industries#healthcare',
    isRow1: true,
    isCol3: true,
  },
  {
    id: 'logistics',
    title: 'Logistics & Supply Chain',
    description: 'Improve demand planning, inventory visibility, document processing, anomaly detection, and operational coordination.',
    href: '/industries#logistics',
    isRow1: false,
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial Operations',
    description: 'Apply computer vision, predictive maintenance, quality inspection, and data-driven process optimization.',
    href: '/industries#manufacturing',
    isRow1: false,
  },
  {
    id: 'enterprise-services',
    title: 'Enterprise & Professional Services',
    description: 'Help teams work more efficiently through knowledge assistants, document automation, intelligent search, and AI-enabled business applications.',
    href: '/industries#financial-services',
    isRow1: false,
    isCol3: true,
  },
];

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="py-14 sm:py-18 lg:py-24 bg-background relative overflow-hidden">
      <Container size="wide">
        {/* Header Block with Explore Industry Solutions CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <ScrollTextReveal
              eyebrow="INDUSTRY SOLUTIONS"
              title="AI for the Challenges That Matter Most"
              titleClassName="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-serif font-normal text-[#111014] tracking-tight leading-[1.08] mb-5"
              description="We apply AI to industry-specific problems, taking into account the operational requirements, data environments, and governance considerations of each sector."
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
              href="/industries"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#111014] border border-[#111014]/50 hover:border-violet-primary hover:bg-[#FAF9FF] transition-all duration-300 text-sm font-medium group select-none shadow-sm hover:shadow"
            >
              <span>Explore Industry Solutions</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#111014] group-hover:text-violet-primary" />
            </a>
          </motion.div>
        </div>

        {/* 6 Industry Solutions Bounded Bento Container */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="rounded-[2rem] sm:rounded-[2.25rem] bg-white border border-[#6853A5]/20 shadow-[0_4px_30px_-6px_rgba(75,45,168,0.06),0_1px_3px_rgba(0,0,0,0.02)] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES_LIST.map((item, idx) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`group relative flex flex-col justify-between p-7 sm:p-8 lg:p-9 transition-colors duration-200 hover:bg-[#FAF9FE] ${
                    item.isRow1 ? 'border-b border-[#6853A5]/18' : ''
                  } ${
                    item.isCol3 ? 'lg:border-l lg:border-[#6853A5]/18' : ''
                  } ${
                    idx % 2 === 1 ? 'md:max-lg:border-l md:max-lg:border-[#6853A5]/18' : ''
                  }`}
                >
                  {/* Top: Title & Violet Arrow */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-serif text-2xl sm:text-[25px] lg:text-[27px] font-normal text-[#111014] group-hover:text-violet-primary transition-colors duration-200 leading-[1.18]">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-violet-primary flex-shrink-0 mt-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  {/* Body: Sector Description */}
                  <p className="text-[#666371] text-[13px] sm:text-[13.5px] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};