import React from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';
import { CTA3DScene } from '../animations/CTA3DScene';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-[1380px] mx-auto rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-b from-[#F6F3FE] via-[#F0EAFB] to-[#F7F4FD] border border-[#6853A5]/20 p-8 sm:p-12 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(118,80,232,0.12)]">
        
        {/* Top purple glowing hairline accent */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-80" />

        {/* Professional Real-time 3D Interactive Scene (Neural Wave + Floating Glass Knot + Gyroscopic Core) */}
        <CTA3DScene className="opacity-95" />

        {/* Soft Radial Vignette Mask to protect center readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_75%_at_50%_50%,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.45)_55%,transparent_100%)] pointer-events-none" />

        {/* Soft atmospheric gradient halos on outer bounds */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/70 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-violet-light/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <ScrollTextReveal
            eyebrow="START YOUR TRANSFORMATION"
            eyebrowIcon={<Sparkles className="w-3.5 h-3.5 text-violet-primary" />}
            title="Your Next Business Advantage Could Start with AI."
            highlightWords={['Could', 'Start', 'with', 'AI.']}
            titleClassName="text-3xl sm:text-5xl md:text-6xl font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.05]"
            description="Tell us what you want to improve, automate, or build. We will help you architect a tailored AI strategy and production roadmap."
            descriptionClassName="text-text-secondary text-base sm:text-lg font-dm font-normal leading-relaxed max-w-xl mx-auto"
            align="center"
            maxWidth="max-w-2xl mx-auto"
            action={
              <div className="space-y-4">
                <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                  <Button
                    asLink
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="shadow-xl shadow-violet-primary/25 hover:scale-105 transition-transform"
                  >
                    Discuss an AI Project
                  </Button>

                  <Button
                    asLink
                    href="/contact"
                    variant="secondary"
                    size="lg"
                    icon={<MessageSquare className="w-4 h-4" />}
                    className="hover:scale-105 transition-transform bg-white/90 border-[#6853A5]/25"
                  >
                    Contact Our Team
                  </Button>
                </div>
                <p className="text-xs font-dm text-text-secondary pt-2">
                  Start with a conversation • Identify the opportunity • Build with purpose
                </p>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};