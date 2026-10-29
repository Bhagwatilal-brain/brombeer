import React from 'react';
import { Container } from '../layout/Container';
import { WHY_BROMBEER_PILLARS } from '../../data/siteContent';
import { ScrollReveal } from '../animations/ScrollReveal';
import { EmotionalMetrics } from '../minimal/EmotionalMetrics';

export const WhyBrombeerSection: React.FC = () => {
  return (
    <section id="why-brombeer" className="py-12 sm:py-16 bg-[#FCFCFF] relative overflow-hidden">
      <Container>
        {/* Header Area (Left-aligned matching reference image) */}
        <div className="max-w-4xl space-y-4 mb-10 sm:mb-12">
          <ScrollReveal>
            <span className="text-[11px] sm:text-xs font-mono tracking-[0.24em] text-[#8E7EB8] uppercase block font-semibold">
              WHY BROMBEER AI?
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-serif text-[#1E1142] tracking-tight leading-[1.08] font-normal">
              More Than AI Technology. A <br className="hidden sm:inline" />
              Partner in Practical <br className="hidden sm:inline" />
              Transformation.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <p className="text-[#665D82] text-sm sm:text-base leading-relaxed max-w-2xl font-light pt-1">
              Successful AI implementation requires more than access to a model. It requires an understanding of the business, dependable engineering, reliable data, thoughtful integration, and clear accountability.
            </p>
          </ScrollReveal>
        </div>

        {/* 5 Horizontal Pillar Rows with text slide right effect */}
        <div className="border-t border-[#E1DFEF]">
          {WHY_BROMBEER_PILLARS.map((p, idx) => (
            <ScrollReveal key={p.number} delay={idx * 0.06}>
              <div className="group grid gap-4 py-8 border-b border-[#E1DFEF] transition-colors md:grid-cols-[80px_1fr_1.4fr] md:items-baseline hover:bg-[#F9F8FD]/60 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-xl cursor-default">
                {/* Number 01-05 in Periwinkle Italic Serif */}
                <span className="font-serif italic text-3xl text-[#9581EF] font-light">
                  {p.number}
                </span>

                {/* Pillar Title with smooth 500ms slide right hover animation */}
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1142] font-normal tracking-tight transition-transform duration-500 group-hover:translate-x-2 group-hover:text-violet-primary">
                  {p.title}
                </h3>

                {/* Descriptive Paragraph */}
                <p className="text-xs sm:text-sm leading-relaxed text-[#665D82] font-light">
                  {p.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Emotional Metrics Ribbon */}
        <div className="pt-16 sm:pt-20">
          <EmotionalMetrics />
        </div>
      </Container>
    </section>
  );
};
