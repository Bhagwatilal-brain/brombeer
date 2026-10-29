import React from 'react';
import { Container } from '../components/layout/Container';
import { INDUSTRIES } from '../data/industries';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const IndustriesPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 space-y-20 bg-background">
      {/* Hero Header */}
      <Container>
        <div className="max-w-3xl space-y-6">
          <span className="eyebrow block">SECTOR SPECIALIZATION</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold text-text-primary tracking-[-0.03em] leading-[1.05]">
            AI That Understands{' '}
            <span className="text-violet-primary">
              Your Industry.
            </span>
          </h1>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Every industry operates with its own processes, data, regulations, and expectations. Brombeer AI helps organizations apply artificial intelligence to industry-specific challenges while accounting for operational realities and appropriate governance.
          </p>
          <div className="pt-2">
            <Button
              asLink
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss Your Industry Needs
            </Button>
          </div>
        </div>
      </Container>

      {/* Industries Grid */}
      <Container>
        <div className="space-y-12">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              id={ind.id}
              className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-white border border-[#6853A5]/15 shadow-sm hover:shadow-xl hover:border-violet-primary/40 transition-all duration-300 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-border-subtle/40">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-sans font-bold text-text-primary">
                    {ind.name}
                  </h2>
                  <p className="text-sm font-medium text-violet-primary mt-1">
                    {ind.tagline}
                  </p>
                </div>
                <Button
                  asLink
                  href="/contact"
                  variant="secondary"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss Industry Needs
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm">
                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary">
                    The Challenge
                  </h4>
                  <p className="text-text-secondary leading-relaxed">
                    {ind.challenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary">
                    Potential Applications
                  </h4>
                  <ul className="space-y-1.5">
                    {ind.applications.map((app, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-primary flex-shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 bg-surface-lavender/40 p-5 rounded-2xl border border-white">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-violet-primary">
                    Governance & Focus
                  </h4>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {ind.focus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Industry CTA */}
      <Container>
        <div className="rounded-[2.5rem] bg-gradient-to-b from-[#F2EDFD] via-[#ECE6FA] to-[#F5F2FE] border border-white p-10 sm:p-14 text-center space-y-6 shadow-xl shadow-violet-primary/10">
          <span className="eyebrow inline-block">SECTOR-SPECIFIC SOLUTIONS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-text-primary tracking-[-0.03em]">
            Your Industry Has Unique Challenges. <br />
            <span className="italic text-violet-primary">Your AI Solution Should Reflect Them.</span>
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Let’s discuss the workflows, regulations, and operational requirements that shape AI adoption in your sector.
          </p>
          <div className="pt-2">
            <Button
              asLink
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss Your Industry Needs
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};