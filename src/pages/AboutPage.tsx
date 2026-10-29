import React from 'react';
import { Container } from '../components/layout/Container';
import { ABOUT_CONTENT } from '../data/siteContent';
import { Button } from '../components/ui/Button';
import { ArrowRight, Compass, ShieldCheck, Cpu, Users, BookOpen, Layers } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const icons = [Compass, Cpu, ShieldCheck, Users, BookOpen];

  return (
    <div className="py-12 sm:py-20 space-y-24 bg-background">
      {/* Hero Header */}
      <Container>
        <div className="max-w-3xl space-y-6">
          <span className="eyebrow block">ABOUT BROMBEER AI</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-outfit font-extrabold text-text-primary tracking-[-0.03em] leading-[1.05]">
            {ABOUT_CONTENT.headline}
          </h1>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            {ABOUT_CONTENT.intro}
          </p>
          <div className="pt-2">
            <Button
              asLink
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Talk to Our Team
            </Button>
          </div>
        </div>
      </Container>

      {/* Our Story */}
      <Container>
        <div className="p-8 sm:p-14 rounded-[2.5rem] bg-white border border-[#6853A5]/15 shadow-sm space-y-6 max-w-5xl">
          <span className="eyebrow block">ORIGIN & PURPOSE</span>
          <h2 className="text-3xl sm:text-4xl font-outfit font-extrabold text-text-primary tracking-[-0.03em]">
            Turning AI Possibilities into Practical Applications.
          </h2>
          <div className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed">
            <p>
              Artificial intelligence is changing how organizations interact with information, automate work, and develop digital services. But meaningful implementation takes more than adopting a new model or platform.
            </p>
            <p>
              It requires an understanding of the problem, the data, the users, the surrounding systems, and the controls needed to operate responsibly.
            </p>
            <p>
              Brombeer AI brings AI capabilities into that wider engineering context. Our focus is on identifying appropriate use cases, designing fit-for-purpose architectures, and developing solutions that can integrate with real business operations.
            </p>
            <p className="pt-2 text-text-primary font-medium">
              As part of Brombeer IT Systems, the AI initiative builds on the broader technology focus of the company while giving artificial intelligence its own dedicated proposition, capabilities, and customer experience.
            </p>
          </div>
        </div>
      </Container>

      {/* Mission & Vision Side-by-Side */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF9FF] border border-white shadow-sm space-y-4">
            <span className="text-xs font-mono font-semibold text-violet-primary uppercase tracking-widest block">
              OUR MISSION
            </span>
            <h3 className="font-serif text-2xl text-text-primary">
              Solving Practical Problems
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {ABOUT_CONTENT.mission}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF9FF] border border-white shadow-sm space-y-4">
            <span className="text-xs font-mono font-semibold text-violet-primary uppercase tracking-widest block">
              OUR VISION
            </span>
            <h3 className="font-serif text-2xl text-text-primary">
              Thoughtful, Measurable Value
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {ABOUT_CONTENT.vision}
            </p>
          </div>
        </div>
      </Container>

      {/* What We Stand For (5 Pillars) */}
      <section className="py-16 bg-[#FAF9FF] border-y border-border-subtle/30">
        <Container>
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="eyebrow block">CORE VALUES</span>
            <h2 className="text-3xl sm:text-4xl font-serif text-text-primary tracking-tight">
              What We Stand For
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary">
              The engineering standards that define how we build and partner with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {ABOUT_CONTENT.standFor.map((item, idx) => {
              const Icon = icons[idx] || Layers;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-[#6853A5]/12 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-surface-lavender text-violet-primary flex items-center justify-center border border-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg text-text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed pt-2 border-t border-border-subtle/20">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Relationship with Brombeer IT Systems */}
      <Container>
        <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-3xl bg-white border border-[#6853A5]/15 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-surface-lavender text-violet-primary flex items-center justify-center font-bold text-xs">
              HQ
            </div>
            <h3 className="font-serif text-2xl text-text-primary">
              Our Relationship with Brombeer IT Systems
            </h3>
          </div>
          <div className="text-text-secondary text-sm leading-relaxed space-y-3 pt-2 border-t border-border-subtle/30">
            <p>
              Brombeer AI represents the company’s dedicated focus on artificial intelligence and AI-enabled digital solutions.
            </p>
            <p>
              Brombeer IT Systems provides the broader company context, including its general technology services and software-development orientation. The AI website is intended to help customers discover AI-specific capabilities, use cases, and engagement opportunities.
            </p>
          </div>
        </div>
      </Container>

      {/* Final Brand Message CTA */}
      <Container>
        <div className="rounded-[2.5rem] bg-gradient-to-b from-[#F2EDFD] via-[#ECE6FA] to-[#F5F2FE] border border-white p-10 sm:p-16 text-center space-y-6 shadow-xl shadow-violet-primary/10">
          <span className="eyebrow inline-block">INTELLIGENCE THAT MOVES BUSINESS FORWARD</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-text-primary tracking-tight">
            Discover the Opportunity. Build the Right Solution.
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Artificial intelligence is most valuable when it helps people solve real problems, work with information more effectively, and make better-informed decisions.
          </p>
          <div className="pt-2">
            <Button
              asLink
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Discuss an AI Project
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
