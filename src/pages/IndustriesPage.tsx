import React from 'react';
import { IndustriesHeroSection } from '../components/sections/industries/IndustriesHeroSection';
import { IndustriesBentoGrid } from '../components/sections/industries/IndustriesBentoGrid';
import { IndustryInteractiveStudio } from '../components/sections/industries/IndustryInteractiveStudio';
import { IndustryParallaxBanner } from '../components/sections/industries/IndustryParallaxBanner';
import { IndustryCTASection } from '../components/sections/industries/IndustryCTASection';

export const IndustriesPage: React.FC = () => {
  return (
    <div className="bg-background relative overflow-hidden">
      {/* 1. Parallax Hero Section with Fast-Pills and Live Telemetry Ribbon */}
      <IndustriesHeroSection />

      {/* 2. Flagship Asymmetric Bento Grid with Parallax Depth, Website Artwork, and Visual HUDs */}
      <IndustriesBentoGrid />

      {/* 3. Live Interactive Operational Studio Workbench */}
      <IndustryInteractiveStudio />

      {/* 4. Cross-Sector Parallax Architecture Banner */}
      <IndustryParallaxBanner />

      {/* 5. Sector Call-to-Action */}
      <IndustryCTASection />
    </div>
  );
};
