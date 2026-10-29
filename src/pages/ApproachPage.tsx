import React from 'react';
import { Container } from '../components/layout/Container';
import { PROCESS_PHASES, PRINCIPLES, SUCCESS_METRICS } from '../data/siteContent';
import { Button } from '../components/ui/Button';
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, Sparkles, TrendingUp, BarChart3, Clock, CheckCheck } from 'lucide-react';
import { ScrollReveal } from '../components/animations/ScrollReveal';

export const ApproachPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 space-y-24 bg-background">
      {/* Hero Header */}
      <Container>
        <div className="max-w-3xl space-y-6">
          <span className="eyebrow block">OUR APPROACH</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold text-text-primary tracking-tight leading-[1.05]">
            A Clear Path from AI Idea to{' '}
            <span className="text-violet-primary">
              Implementation.
            </span>
          </h1>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            AI projects work best when business objectives, technical decisions, risk management, and delivery expectations are aligned from the beginning. Brombeer AI follows a structured approach that helps organizations evaluate opportunities, test assumptions, and develop solutions suited to their operating environment.
          </p>
          <div className="pt-2">
            <Button
              asLink
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Start an AI Discussion
            </Button>
          </div>
        </div>
      </Container>

      {/* 6 Phases Detailed Breakdown */}
      <Container>
        <div className="space-y-10">
          <div className="border-b border-border-subtle/40 pb-6">
            <span className="text-xs uppercase tracking-wider text-violet-primary font-mono font-semibold block mb-2">
              METHODICAL EXECUTION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-text-primary">
              The Six-Phase Delivery Lifecycle
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROCESS_PHASES.map((phase) => (
              <div
                key={phase.number}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-[#6853A5]/15 shadow-sm hover:shadow-xl hover:border-violet-primary/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-surface-lavender text-violet-primary font-semibold flex items-center justify-center text-sm border border-violet-light/30">
                      {phase.number}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-text-secondary">
                      PHASE {phase.number}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-sans font-bold text-text-primary tracking-tight">
                      Phase {phase.number}: {phase.name}
                    </h3>
                    <p className="text-sm font-medium text-violet-primary mt-1">
                      {phase.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-text-secondary mt-3 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-text-primary block">
                      Core Activities
                    </span>
                    <ul className="space-y-1.5">
                      {phase.activities.map((act, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-primary flex-shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle/40 bg-surface-lavender/30 p-4 rounded-2xl border border-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-violet-deep block mb-1">
                    Deliverable:
                  </span>
                  <p className="text-xs text-text-primary font-medium leading-relaxed">
                    {phase.deliverable}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* How We Measure Success */}
      <section className="py-16 bg-[#FAF9FF] border-y border-border-subtle/30">
        <Container>
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="eyebrow block">OUTCOME-FOCUSED METRICS</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-text-primary tracking-tight">
              Define Outcomes Before Measuring Results.
            </h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Success measures depend on the business problem. We work with stakeholders to select metrics that are relevant, measurable, and realistic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUCCESS_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-white shadow-sm hover:border-violet-light/50 transition-all space-y-2"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-primary" />
                  <h4 className="text-sm font-semibold text-text-primary">{metric.label}</h4>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-white/70 border border-[#6853A5]/10 text-xs text-text-secondary max-w-4xl">
            <strong>Methodology Note:</strong> Baseline measurements and post-implementation evaluations should be compared using an agreed methodology. We do not assume that a model’s technical performance automatically translates into business value.
          </div>
        </Container>
      </section>

      {/* Our Principles */}
      <Container>
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="eyebrow block">GUIDING ETHOS</span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-text-primary tracking-tight">
              Our Principles
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary">
              Five foundational commitments that govern every architecture and implementation we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {PRINCIPLES.map((pr, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#6853A5]/12 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-semibold text-violet-primary block mb-2">
                    0{idx + 1}
                  </span>
                  <h3 className="font-sans font-bold text-lg text-text-primary leading-snug">
                    {pr.title}
                  </h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed pt-2 border-t border-border-subtle/20">
                  {pr.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Process CTA */}
      <Container>
        <div className="rounded-[2.5rem] bg-gradient-to-b from-[#F2EDFD] via-[#ECE6FA] to-[#F5F2FE] border border-white p-10 sm:p-14 text-center space-y-6 shadow-xl shadow-violet-primary/10">
          <span className="eyebrow inline-block">LET'S COLLABORATE</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-text-primary tracking-tight">
            Let’s Define the Right First Step.
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Whether you need an initial assessment, a proof of concept, or a tailored AI application, we can help determine an appropriate path forward.
          </p>
          <div className="pt-2">
            <Button
              asLink
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss Your AI Project
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
