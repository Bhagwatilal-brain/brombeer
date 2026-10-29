import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { RealWorldStage } from './trust-cards/RealWorldStage';

export const TrustValueSection: React.FC = () => {
  return (
    <section id="trust-value" className="relative py-12 sm:py-16 lg:py-20 bg-background overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Statement & CTA */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <ScrollReveal direction="up" delay={0.05}>
              <span className="text-xs sm:text-[12.5px] font-semibold text-violet-primary tracking-[0.18em] uppercase block mb-3">
                AI DESIGNED FOR THE REAL WORLD
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#111014] tracking-tight leading-[1.12] mb-5">
                Transform the Way Your Business Thinks, Works, and Grows.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.15}>
              <p className="text-text-secondary text-[14px] sm:text-[15px] leading-relaxed mb-4 font-normal">
                Every organization has processes that consume valuable time, data that holds untapped insights, and knowledge that is difficult to access when it matters most. Brombeer AI helps bridge that gap.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <p className="text-text-secondary text-[14px] sm:text-[15px] leading-relaxed mb-7 font-normal">
                Our approach starts with understanding your business — not choosing a model or technology before understanding the problem.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.25}>
              <div>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-[#111014] border border-[#111014]/25 hover:border-violet-primary hover:bg-[#FAF9FF] transition-all duration-300 shadow-sm hover:shadow text-sm font-medium group select-none"
                >
                  <span>Discover Brombeer AI</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#111014] group-hover:text-violet-primary" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Properly Aligned Card Stage */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center w-full">
            <ScrollReveal direction="up" delay={0.2} className="w-full flex justify-center lg:justify-end">
              <RealWorldStage />
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
