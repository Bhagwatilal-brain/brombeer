import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
} from 'lucide-react';
import { Container } from '../../layout/Container';
import { Button } from '../../ui/Button';
import { GsapTextEffect } from '../../animations/GsapTextEffect';
import { HeroInsightsModel3D } from './HeroInsightsModel3D';
import insightsCoreImg from '@/assets/images/insights/insights-hero-core.png';

interface InsightsHeroSectionProps {
  onExploreClick?: () => void;
}

export const InsightsHeroSection: React.FC<InsightsHeroSectionProps> = ({
  onExploreClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToArticles = () => {
    if (onExploreClick) {
      onExploreClick();
    }
    const el = document.getElementById('insights-articles');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] flex items-center overflow-hidden bg-[#F7F5FF] pt-8 pb-14 sm:pt-10 sm:pb-16 lg:pt-10 lg:pb-18"
    >
      {/* Dreamy Multi-Layered Ethereal Violet / Lavender Cloud Wash Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(64% 80% at 4% 80%, rgba(118, 80, 232, 0.34) 0%, rgba(157, 125, 255, 0.20) 38%, transparent 72%),
            radial-gradient(50% 62% at 12% 24%, rgba(169, 142, 255, 0.25) 0%, rgba(208, 192, 255, 0.13) 45%, transparent 75%),
            radial-gradient(58% 68% at 94% 16%, rgba(139, 102, 246, 0.24) 0%, rgba(196, 181, 253, 0.14) 44%, transparent 74%),
            radial-gradient(52% 62% at 88% 84%, rgba(167, 139, 250, 0.22) 0%, rgba(221, 211, 255, 0.12) 48%, transparent 76%),
            radial-gradient(66% 58% at 52% 46%, rgba(255, 255, 255, 0.88) 0%, rgba(248, 245, 255, 0.55) 55%, transparent 100%),
            linear-gradient(135deg, #EAE3FF 0%, #F8F6FF 46%, #EFEAFF 100%)
          `,
        }}
      />

      {/* Soft Drifting Luminous Cloud Blooms for Painterly Atmospheric Depth */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -bottom-24 -left-24 w-[620px] h-[520px] rounded-full bg-[#8B65F8]/22 blur-[110px]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -16, 0], y: [0, 14, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-24 -right-16 w-[560px] h-[480px] rounded-full bg-[#B79DFF]/24 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-[36%] w-[540px] h-[360px] rounded-full bg-white/78 blur-[95px]"
      />

      <Container size="wide" className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] items-center gap-10 lg:gap-12">
          {/* Left-Anchored Editorial Content Column */}
          <div className="max-w-xl space-y-6 sm:space-y-7">
            {/* Large 3-Line Editorial Headline */}
            <div className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.15rem] xl:text-[4.35rem] leading-[1.04] tracking-[-0.035em]">
              <GsapTextEffect
                lines={['Ideas, Perspectives &', 'Practical AI', 'Guidance.']}
                highlightWords={['Practical', 'AI', 'Guidance.']}
                delay={0.1}
              />
            </div>

            {/* Compact Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="max-w-lg text-[#4D4761] text-[15px] sm:text-base lg:text-[17px] leading-relaxed font-dm font-normal"
            >
              Explore architectural frameworks, production benchmarks, and field notes from Brombeer AI's engineering leadership—bridging enterprise requirements with deterministic AI delivery.
            </motion.p>

            {/* Primary CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.48 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={() => scrollToArticles()}
              >
                Explore Research Papers
              </Button>
            </motion.div>
          </div>

          {/* Right Interactive 3D Model with Pure Transparent Background */}
          <div className="w-full self-center">
            <HeroInsightsModel3D />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InsightsHeroSection;
