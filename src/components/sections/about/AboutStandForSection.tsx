import React from 'react';
import { Container } from '../../layout/Container';
import SocialCards, { CardItem } from '../../ui/card-fan-carousel';
import { Sparkles } from 'lucide-react';

const STAND_FOR_CARDS: CardItem[] = [
  {
    category: 'Strategy',
    title: 'Business Relevance',
    description: 'We prioritize use cases with a clear purpose and a defined path to value, avoiding speculative complexity.',
    imgUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    alt: 'Business Relevance - Strategic Foundation',
  },
  {
    category: 'Architecture',
    title: 'Engineering Excellence',
    description: 'We consider architecture, integration, testing, maintainability, and operational requirements as part of AI delivery.',
    imgUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    alt: 'Engineering Excellence - Precision Systems',
  },
  {
    category: 'Governance',
    title: 'Responsible Innovation',
    description: 'We recognize the importance of privacy, security, transparency, and human accountability across all deployments.',
    imgUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Responsible Innovation - Sovereign Security',
  },
  {
    category: 'Partnership',
    title: 'Collaboration',
    description: 'We work with stakeholders to understand requirements, validate assumptions, and develop solutions suited to the people who will use them.',
    imgUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Collaboration - Stakeholder Alignment',
  },
  {
    category: 'Evolution',
    title: 'Continuous Learning',
    description: 'AI technologies evolve rapidly. We emphasize ongoing evaluation, practical experimentation, and informed technology choices.',
    imgUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Continuous Learning - Telemetry & Research',
  },
];

export const AboutStandForSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF9FF] border-y border-border-subtle/30 relative overflow-hidden">
      {/* Background Soft Accent Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-violet-primary/10 rounded-full blur-[130px] pointer-events-none" />

      <Container>
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 sm:mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#6853A5]/20 shadow-xs text-xs font-semibold text-violet-primary">
            <Sparkles className="w-3.5 h-3.5 text-violet-primary" />
            <span className="font-mono uppercase text-[11px] tracking-wider">
              CORE VALUES · GUIDING PRINCIPLES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.14]">
            What We Stand For
          </h2>

          <p className="text-text-secondary text-[14.5px] sm:text-[16px] leading-relaxed font-normal max-w-xl mx-auto">
            The engineering standards that define how we build and partner with clients.
          </p>
        </div>

        {/* Fanned Arc Carousel Deck */}
        <div className="w-full relative z-20">
          <SocialCards cards={STAND_FOR_CARDS} />
        </div>
      </Container>
    </section>
  );
};

export default AboutStandForSection;
