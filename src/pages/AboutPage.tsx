import React from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { CTA3DScene } from '../components/animations/CTA3DScene';
import { AboutHeroSection } from '../components/sections/about/AboutHeroSection';
import { AboutOriginPurposeSection } from '../components/sections/about/AboutOriginPurposeSection';
import { AboutStandForSection } from '../components/sections/about/AboutStandForSection';

export const AboutPage: React.FC = () => {

  return (
    <div className="bg-background relative overflow-x-clip space-y-20 sm:space-y-28 pb-20">
      {/* 1. Atmospheric Hero Section with Interactive 3D Engineering Core */}
      <AboutHeroSection />

      {/* 2. Origin & Purpose, Mission & Vision (Fluid Expanding Grid) */}
      <AboutOriginPurposeSection />

      {/* 3. What We Stand For (Interactive Fanned Arc Deck) */}
      <AboutStandForSection />

      {/* Final Brand Message CTA with Real-Time 3D Interactive Scene & Atmospheric Gradients */}
      <Container>
        <div className="rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-b from-[#F6F3FE] via-[#F0EAFB] to-[#F7F4FD] border border-[#6853A5]/20 p-8 sm:p-12 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(118,80,232,0.12)]">
          {/* Top purple glowing hairline accent */}
          <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-80" />

          {/* Professional Real-time 3D Interactive Scene (Neural Wave + Floating Glass Knot + Gyroscopic Core) */}
          <CTA3DScene className="opacity-95" />

          {/* Soft Radial Vignette Mask to protect center readability */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_75%_at_50%_50%,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.45)_55%,transparent_100%)] pointer-events-none" />

          {/* Soft atmospheric gradient halos on outer bounds */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/70 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-violet-light/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="eyebrow inline-block">INTELLIGENCE THAT MOVES BUSINESS FORWARD</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.1]">
              Discover the Opportunity. Build the Right Solution.
            </h2>
            <p className="text-text-secondary text-sm sm:text-base font-dm max-w-xl mx-auto leading-relaxed">
              Artificial intelligence is most valuable when it helps people solve real problems, work with information more effectively, and make better-informed decisions.
            </p>
            <div className="pt-2 flex justify-center">
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
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
