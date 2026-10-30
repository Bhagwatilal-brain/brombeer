import React from 'react';
import { HeroSection } from '../components/hero/HeroSection';
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

      {/* 2. Trust and Value Proposition */}
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