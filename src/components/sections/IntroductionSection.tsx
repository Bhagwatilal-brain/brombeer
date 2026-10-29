import React from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { NeuralPipeline } from '../animations/NeuralPipeline';

export const IntroductionSection: React.FC = () => {
  return (
    <section id="architecture" className="relative py-12 lg:py-16 overflow-hidden bg-background">
      <Container>
        {/* Editorial Architecture Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-10 sm:mb-12">
          <ScrollReveal>
            <span className="eyebrow inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-violet-primary animate-pulse" />
              SYSTEM ARCHITECTURE
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-extrabold text-text-primary tracking-[-0.03em] leading-[1.1]">
              How Intelligence Connects with Action.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
              We combine artificial intelligence with practical engineering to build systems that automate operations, unlock enterprise data, and scale human decision-making.
            </p>
          </ScrollReveal>

          {/* Visual Architecture Chips */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9FF] border border-[#6853A5]/15 text-xs text-text-primary font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Zero-Hallucination Guardrails
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9FF] border border-[#6853A5]/15 text-xs text-text-primary font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-primary" />
                Custom Workflow Adapters
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF9FF] border border-[#6853A5]/15 text-xs text-text-primary font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-deep" />
                Enterprise RBAC & Sovereignty
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Live Interactive Architecture Visualizer */}
        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-text-secondary text-center mb-6">
            Interact with each pipeline node to inspect real-time ingestion, reasoning, and verified execution.
          </p>
          <NeuralPipeline />
        </div>
      </Container>
    </section>
  );
};