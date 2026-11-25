import React from 'react';
import { IndustriesHeroSection } from '../components/sections/industries/IndustriesHeroSection';
import { IndustriesBentoGrid } from '../components/sections/industries/IndustriesBentoGrid';
import { IndustryScrollStackSection } from '../components/sections/industries/IndustryScrollStackSection';
import { IndustryStickyContentSection } from '../components/sections/industries/IndustryStickyContentSection';
import { IndustryHorizontalRevealSection } from '../components/sections/industries/IndustryHorizontalRevealSection';
import { IndustryComplianceTrustSection } from '../components/sections/industries/IndustryComplianceTrustSection';
import { IndustryCTASection } from '../components/sections/industries/IndustryCTASection';

export const IndustriesPage: React.FC = () => {
  return (
    <div className="bg-background relative overflow-x-clip">
      {/* Hero Section */}
      <IndustriesHeroSection />

      {/* 1. Government & Public Sector: Bento Grid */}
      <IndustriesBentoGrid />

      {/* 2. Defence & Aerospace: Scroll Stacking Cards */}
      <IndustryScrollStackSection />

      {/* 3. Healthcare & Clinical Operations: Sticky Content Wrapper */}
      <IndustryStickyContentSection />

      {/* 4. Maritime Logistics & Supply Chain: Horizontal Feature Reveal */}
      <IndustryHorizontalRevealSection />

      {/* 5. Enterprise & Financial Services: Responsible AI Style Cards */}
      <IndustryComplianceTrustSection />

      {/* Conversion Call-to-Action */}
      <IndustryCTASection />
    </div>
  );
};

export default IndustriesPage;
