import React from 'react';
import { Container } from '../layout/Container';
import { GlowCard } from '@/components/ui/spotlight-card';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ArrowUpRight, Sparkles, Bot, Eye, TrendingUp } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      id: 'knowledge',
      number: '01',
      title: 'Knowledge & Language',
      headline: 'Conversations with your enterprise mind.',
      description: 'Instant, citation-grounded understanding across every policy, manual, and contract your organization holds.',
      icon: Sparkles,
      link: '/solutions#generative-ai',
      glow: 'purple' as const,
    },
    {
      id: 'agents',
      number: '02',
      title: 'Autonomous Agency',
      headline: 'Workflows that move with intention.',
      description: 'Intelligent multi-step agents that coordinate complex operations while preserving human approval checkpoints.',
      icon: Bot,
      link: '/solutions#ai-agents',
      glow: 'blue' as const,
    },
    {
      id: 'vision',
      number: '03',
      title: 'Visual Perception',
      headline: 'Seeing precision at the speed of light.',
      description: 'High-speed computer vision for microscopic quality inspection, document parsing, and real-time validation.',
      icon: Eye,
      link: '/solutions#computer-vision',
      glow: 'purple' as const,
    },
    {
      id: 'predictive',
      number: '04',
      title: 'Predictive Horizon',
      headline: 'Foreseeing the patterns of tomorrow.',
      description: 'Uncovering subtle signals across historical and operational data to illuminate critical business decisions.',
      icon: TrendingUp,
      link: '/solutions#predictive-analytics',
      glow: 'blue' as const,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9FF] relative overflow-hidden">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <ScrollReveal>
            <span className="eyebrow block">CAPABILITIES</span>
            <h2 className="text-3xl sm:text-5xl font-sans font-extrabold text-text-primary tracking-tight">
              Four Pillars of Quiet Power.
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={p.id} delay={idx * 0.08}>
                <GlowCard
                  customSize={true}
                  glowColor={p.glow}
                  borderRadius="2.5rem"
                  className="p-8 sm:p-10 h-full flex flex-col justify-between bg-white/85 border border-white/95 rounded-[2.5rem] hover:shadow-2xl hover:shadow-violet-primary/10 transition-all duration-500 overflow-hidden"
                >
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-2xl bg-surface-lavender text-violet-primary flex items-center justify-center border border-white">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-text-secondary/60">{p.number}</span>
                    </div>

                    <div className="space-y-1.5 font-dm">
                      <h3 className="font-sans font-bold text-2xl text-text-primary tracking-tight">{p.title}</h3>
                      <p className="text-xs sm:text-sm font-medium text-violet-primary italic">{p.headline}</p>
                    </div>

                    <p className="text-xs sm:text-sm font-dm text-text-secondary font-normal leading-relaxed pt-1">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-border-subtle/30 relative z-10">
                    <a
                      href={p.link}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-text-primary hover:text-violet-primary transition-colors group"
                    >
                      <span>Explore Capability</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </GlowCard>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};