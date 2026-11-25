import React from 'react';
import { Container } from '../../layout/Container';
import SocialCards, { CardItem } from '../../ui/card-fan-carousel';
import { Sparkles } from 'lucide-react';

const PRINCIPLE_CARDS: CardItem[] = [
  {
    category: 'Architecture',
    title: 'Purpose Before Technology',
    description: 'We start with a verified business need and select foundational technology accordingly, avoiding hype-driven complexity.',
    imgUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    alt: 'Purpose Before Technology - Architectural Core',
  },
  {
    category: 'Validation',
    title: 'Evidence Before Scale',
    description: 'We test core assumptions and evaluate accuracy benchmarks with real enterprise telemetry before recommending wider deployment.',
    imgUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    alt: 'Evidence Before Scale - Metric Telemetry',
  },
  {
    category: 'Ecosystem',
    title: 'Integration Before Isolation',
    description: 'We design solutions to operate natively within existing ERPs, databases, and operational pipelines rather than siloed experiments.',
    imgUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    alt: 'Integration Before Isolation - Interconnected Infrastructure',
  },
  {
    category: 'Governance',
    title: 'Human Accountability',
    description: 'We define explicit boundaries between autonomous processing and mandatory human-in-the-loop review checkpoints.',
    imgUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    alt: 'Human Accountability - Governance & Oversight',
  },
  {
    category: 'Lifecycle',
    title: 'Continuous Evaluation',
    description: 'We audit live drift, inference latency, operating costs, and stakeholder satisfaction across the full operational lifecycle.',
    imgUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    alt: 'Continuous Evaluation - Telemetry Loop',
  },
];

export const ApproachPrinciplesSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-[#FAF9FF] via-white to-[#FAF9FF] border-b border-[#6853A5]/10">
      {/* Soft Violet Atmospheric Ambient Light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[380px] bg-violet-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-6 sm:mb-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#6853A5]/20 shadow-xs text-xs font-semibold text-violet-primary">
            <Sparkles className="w-3.5 h-3.5 text-violet-primary" />
            <span className="font-mono uppercase text-[11px] tracking-wider">
              GUIDING ETHOS · FOUNDATIONAL PILLARS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.14]">
            Our Principles
          </h2>

          <p className="text-text-secondary text-[14.5px] sm:text-[16px] leading-relaxed font-normal max-w-2xl mx-auto">
            Five foundational commitments that govern every architecture, proof-of-concept, and production system we engineer.
          </p>
        </div>

        {/* Interactive Fanned Arc Carousel */}
        <div className="w-full relative z-20">
          <SocialCards cards={PRINCIPLE_CARDS} />
        </div>
      </Container>
    </section>
  );
};

export default ApproachPrinciplesSection;
