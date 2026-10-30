import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
import { CapabilitiesTicker } from '../components/hero/CapabilitiesTicker';
import { TrustValueSection } from '../components/sections/TrustValueSection';
import { SolutionsSection } from '../components/sections/SolutionsSection';
import { WhyBrombeerSection } from '../components/sections/WhyBrombeerSection';
import { ApproachSection } from '../components/sections/ApproachSection';
import { IndustriesSection } from '../components/sections/IndustriesSection';
import { UseCasesSection } from '../components/sections/UseCasesSection';
import { ResponsibleAISection } from '../components/sections/ResponsibleAISection';
import { FinalCTASection } from '../components/sections/FinalCTASection';

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* 1. Main Hero Section */}
      <HeroSection />

      {/* Running Capabilities Ticker Strip with Frosted Glass / Blurry Background */}
      <div className="relative w-full z-20 overflow-hidden bg-white/45 backdrop-blur-xl border-y border-[#7650E8]/15 py-3 sm:py-3.5 shadow-[0_8px_32px_0_rgba(118,80,232,0.06)]">
        {/* Soft atmospheric gradient sheen across the blurry bar */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-light/15 via-white/50 to-violet-light/15 pointer-events-none" />

        <CapabilitiesTicker fadeColor="from-white/80" />
      </div>

      {/* 2. Trust and Value Proposition ("AI DESIGNED FOR THE REAL WORLD") */}
      <TrustValueSection />

      {/* 3. Our AI Solutions (8 Core Capabilities) */}
      <SolutionsSection />

      {/* 4. Why Brombeer AI? (5 Pillars & GSAP Emotional Metrics) */}
      <WhyBrombeerSection />

      {/* 5. How We Work (6 Delivery Phases) */}
      <ApproachSection />

      {/* 6. Industry Solutions (6 Target Sectors) */}
      <IndustriesSection />

      {/* 7. AI Use Cases */}
      <UseCasesSection />

      {/* 8. Responsible AI (6 Framework Pillars) */}
      <ResponsibleAISection />

      {/* 9. Final Call to Action */}
      <FinalCTASection />
    </div>
  );
};