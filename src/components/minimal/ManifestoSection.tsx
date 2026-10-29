import React from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../animations/ScrollReveal';

export const ManifestoSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-background relative overflow-hidden">
      {/* Soft ambient violet glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-light/15 rounded-full blur-[140px] pointer-events-none" />

      <Container size="narrow">
        <div className="text-center space-y-12">
          <ScrollReveal>
            <span className="eyebrow block tracking-[0.25em] text-xs">
              THE PHILOSOPHY
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-text-primary tracking-tight leading-[1.12]">
              "We believe intelligence should feel calm, purposeful, and{' '}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-violet-primary via-[#9E7EFF] to-violet-deep">
                deeply human.
              </span>"
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-text-secondary/80 text-base sm:text-xl font-light max-w-xl mx-auto leading-relaxed">
              True technological sophistication is not measured by complexity. It is felt in the sudden absence of friction.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Pure Emotional Stones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <ScrollReveal delay={0.1}>
            <div className="p-8 rounded-3xl bg-[#FAF9FF]/80 border border-white hover:border-violet-light/50 transition-all duration-500 hover:shadow-xl hover:shadow-violet-primary/5 space-y-3 text-center">
              <span className="text-xs font-mono text-violet-primary font-semibold block">01 / CLARITY</span>
              <h3 className="font-serif text-2xl text-text-primary">Instant Truth</h3>
              <p className="text-xs text-text-secondary/80 font-light leading-relaxed">
                Transforming thousands of fragmented documents into calm, verified understanding.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="p-8 rounded-3xl bg-[#FAF9FF]/80 border border-white hover:border-violet-light/50 transition-all duration-500 hover:shadow-xl hover:shadow-violet-primary/5 space-y-3 text-center">
              <span className="text-xs font-mono text-violet-primary font-semibold block">02 / VELOCITY</span>
              <h3 className="font-serif text-2xl text-text-primary">Silent Flow</h3>
              <p className="text-xs text-text-secondary/80 font-light leading-relaxed">
                Replacing weeks of manual administrative toil with seconds of effortless precision.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="p-8 rounded-3xl bg-[#FAF9FF]/80 border border-white hover:border-violet-light/50 transition-all duration-500 hover:shadow-xl hover:shadow-violet-primary/5 space-y-3 text-center">
              <span className="text-xs font-mono text-violet-primary font-semibold block">03 / TRUST</span>
              <h3 className="font-serif text-2xl text-text-primary">Human Sanctuary</h3>
              <p className="text-xs text-text-secondary/80 font-light leading-relaxed">
                Sovereign data boundaries and explicit human authority over every consequential step.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};