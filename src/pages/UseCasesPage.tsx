import React from 'react';
import { Container } from '../components/layout/Container';
import { USE_CASES } from '../data/useCases';
import { UseCaseFeature } from '../components/cards/UseCaseFeature';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const UseCasesPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 space-y-20 bg-background">
      {/* Hero Header */}
      <Container>
        <div className="max-w-3xl space-y-6">
          <span className="eyebrow block">ENTERPRISE USE CASES</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-outfit font-extrabold text-text-primary tracking-[-0.03em] leading-[1.05]">
            From Business Challenges to AI-Powered Solutions.
          </h1>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            The best AI use cases start with a problem worth solving. Explore practical ways AI can support workflows, make information more accessible, and help teams make better-informed decisions.
          </p>
          <div className="pt-2">
            <Button
              asLink
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore a Similar Use Case
            </Button>
          </div>
        </div>
      </Container>

      {/* 8 Use Cases Grid */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {USE_CASES.map((uc) => (
            <UseCaseFeature key={uc.id} useCase={uc} />
          ))}
        </div>
      </Container>

      {/* Use Cases Bottom CTA */}
      <Container>
        <div className="rounded-[2.5rem] bg-gradient-to-b from-[#F2EDFD] via-[#ECE6FA] to-[#F5F2FE] border border-white p-10 sm:p-14 text-center space-y-6 shadow-xl shadow-violet-primary/10">
          <span className="eyebrow inline-block">CUSTOM WORKFLOWS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-extrabold text-text-primary tracking-[-0.03em]">
            Have a Specific Operational Challenge in Mind?
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            We collaborate with your engineering and operational leaders to validate whether AI is the right fit, engineer proof-of-concept prototypes, and deploy production-grade solutions.
          </p>
          <div className="pt-2">
            <Button
              asLink
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss Your Use Case
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};