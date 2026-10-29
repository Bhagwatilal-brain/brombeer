import React from 'react';
import { Container } from '../components/layout/Container';
import { RESPONSIBLE_PRINCIPLES } from '../data/siteContent';
import { Button } from '../components/ui/Button';
import { ArrowRight, Shield, Lock, CheckCircle2, UserCheck, Eye, Activity, AlertTriangle } from 'lucide-react';

export const ResponsibleAIPage: React.FC = () => {
  const icons = [Shield, Lock, CheckCircle2, UserCheck, Eye, Activity];

  return (
    <div className="py-12 sm:py-20 space-y-24 bg-background">
      {/* Hero Header */}
      <Container>
        <div className="max-w-3xl space-y-6">
          <span className="eyebrow block">RESPONSIBLE AI GOVERNANCE</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold text-text-primary tracking-[-0.03em] leading-[1.05]">
            Build AI with Confidence,{' '}
            <span className="text-violet-primary">
              Control, and Accountability.
            </span>
          </h1>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            AI systems can create meaningful value, but they also introduce risks involving accuracy, privacy, security, bias, and inappropriate automation. Brombeer AI takes a practical approach to responsible AI, incorporating relevant safeguards into the design, development, evaluation, and operation of each solution.
          </p>
          <div className="pt-2">
            <Button
              asLink
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss AI Governance
            </Button>
          </div>
        </div>
      </Container>

      {/* The 6 Framework Pillars */}
      <Container>
        <div className="space-y-10">
          <div className="border-b border-border-subtle/40 pb-6">
            <span className="text-xs uppercase tracking-wider text-violet-primary font-mono font-semibold block mb-2">
              COMPREHENSIVE SAFEGUARDS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold text-text-primary tracking-[-0.03em]">
              Our{' '}
              <span className="text-violet-primary">
                Responsible AI Framework
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESPONSIBLE_PRINCIPLES.map((principle, idx) => {
              const Icon = icons[idx] || Shield;
              return (
                <div
                  key={principle.number}
                  className="p-8 sm:p-9 rounded-3xl bg-white border border-[#6853A5]/15 shadow-sm hover:shadow-xl hover:border-violet-primary/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-surface-lavender text-violet-primary flex items-center justify-center border border-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-text-secondary">
                        {principle.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-serif text-text-primary tracking-tight">
                        {principle.title}
                      </h3>
                      <p className="text-xs text-text-secondary mt-2 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border-subtle/30 space-y-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-text-primary block">
                        Operational Safeguards:
                      </span>
                      <ul className="space-y-1.5">
                        {principle.measures.map((m, mIdx) => (
                          <li key={mIdx} className="text-xs text-text-secondary flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-violet-primary mt-1.5 flex-shrink-0" />
                            <span>{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* Context-Specific Callout */}
      <Container>
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#FAF9FF] border border-white shadow-sm space-y-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-surface-lavender text-violet-primary flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-2xl text-text-primary">
              Responsible AI Is Context-Specific
            </h3>
          </div>
          <div className="space-y-3 text-text-secondary text-sm leading-relaxed pt-2 border-t border-border-subtle/30">
            <p>
              The controls needed for an internal document assistant differ from those required for healthcare decision support, financial decisions, identity-related workflows, or security-sensitive systems.
            </p>
            <p>
              We work with customers to identify the relevant risks and requirements rather than applying a single generic checklist to every project.
            </p>
            <p className="text-xs italic text-text-secondary/80">
              Our approach does not replace legal, regulatory, or independent security assessments where these are required.
            </p>
          </div>
        </div>
      </Container>

      {/* Responsible AI CTA */}
      <Container>
        <div className="rounded-[2.5rem] bg-gradient-to-b from-[#F2EDFD] via-[#ECE6FA] to-[#F5F2FE] border border-white p-10 sm:p-14 text-center space-y-6 shadow-xl shadow-violet-primary/10">
          <span className="eyebrow inline-block">GOVERNANCE & TRUST</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-text-primary tracking-[-0.03em]">
            Innovation Needs the Right Safeguards.
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Let’s discuss the requirements, risks, and controls that matter for your proposed AI application.
          </p>
          <div className="pt-2">
            <Button
              asLink
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss Your AI Requirements
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
