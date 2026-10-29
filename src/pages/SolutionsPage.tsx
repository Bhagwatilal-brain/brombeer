import React from 'react';
import { Container } from '../components/layout/Container';
import { SOLUTIONS } from '../data/solutions';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const SolutionsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 space-y-20 bg-background">
      {/* Hero Header */}
      <Container>
        <div className="max-w-3xl space-y-6">
          <span className="eyebrow block">OUR CAPABILITIES</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-text-primary tracking-tight leading-[1.05]">
            AI Solutions Built Around Your Business.
          </h1>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            From intelligent assistants to predictive systems and computer vision, Brombeer AI develops tailored solutions that connect artificial intelligence to real business workflows. We help organizations select suitable technologies, integrate them into existing environments, and build AI applications around practical operational needs.
          </p>
          <div className="pt-2">
            <Button
              asLink
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss Your Requirements
            </Button>
          </div>
        </div>
      </Container>

      {/* Introduction Banner */}
      <Container>
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#FAF9FF] border border-white shadow-sm space-y-4 max-w-5xl">
          <span className="text-xs font-mono font-semibold text-violet-primary uppercase tracking-widest block">
            STRATEGIC CAPABILITIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-text-primary">
            One AI Strategy. The Right Capabilities for Each Challenge.
          </h2>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Not every business problem requires the same AI approach. Some require the ability to understand and generate language. Others depend on visual recognition, statistical prediction, structured data processing, or carefully controlled workflow automation. We help identify the capabilities that fit your requirements, then design and implement an appropriate solution.
          </p>
        </div>
      </Container>

      {/* All 8 Solutions Detailed Grid */}
      <Container>
        <div className="space-y-12">
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              id={sol.id}
              className="scroll-mt-24 p-8 sm:p-12 rounded-3xl bg-white border border-[#6853A5]/15 shadow-sm hover:shadow-xl hover:border-violet-primary/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Description Column */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-full bg-surface-lavender text-violet-primary font-semibold flex items-center justify-center text-sm border border-violet-light/30">
                      {sol.number}
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-violet-primary">
                      {sol.badge || 'Enterprise AI'}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif text-text-primary tracking-tight">
                    {sol.title}
                  </h2>
                  <p className="text-sm font-medium text-violet-primary">
                    {sol.tagline}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {sol.description}
                  </p>

                  <div className="pt-4">
                    <Button
                      asLink
                      href="/contact"
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      {sol.ctaText}
                    </Button>
                  </div>
                </div>

                {/* Right Capabilities & Applications Box */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#FAF9FF] p-6 sm:p-8 rounded-2xl border border-white">
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary">
                      What We Deliver
                    </h4>
                    <ul className="space-y-2">
                      {sol.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-primary flex-shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-2">
                        Example Applications
                      </h4>
                      <ul className="space-y-1.5">
                        {sol.exampleApplications.slice(0, 6).map((app, i) => (
                          <li key={i} className="text-xs text-text-secondary">
                            • {app}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-border-subtle/40">
                      <h5 className="text-[11px] font-semibold uppercase tracking-wider text-violet-primary mb-1">
                        Our Approach
                      </h5>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {sol.approach}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};