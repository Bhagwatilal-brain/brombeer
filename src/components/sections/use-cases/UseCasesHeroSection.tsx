import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../../layout/Container';
import { Button } from '../../ui/Button';
import { GsapTextEffect } from '../../animations/GsapTextEffect';
import { HeroUseCaseModel3D } from './HeroUseCaseModel3D';

export interface UseCasesHeroSectionProps {
  onExploreClick?: () => void;
}

export const UseCasesHeroSection: React.FC<UseCasesHeroSectionProps> = ({
  onExploreClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToGrid = () => {
    if (onExploreClick) {
      onExploreClick();
      return;
    }
    const el = document.getElementById('use-cases-grid');
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
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] items-center gap-10 lg:gap-12">
          {/* ================= LEFT EDITORIAL CONTENT COLUMN ================= */}
          <div className="max-w-2xl space-y-6 sm:space-y-7">
            {/* GSAP 3-Line Cinematic Editorial Headline */}
            <div className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.15rem] xl:text-[4.35rem] leading-[1.04] tracking-[-0.035em]">
              <GsapTextEffect
                lines={['From Business Challenges', 'to Proven AI', 'Solutions.']}
                highlightWords={['Proven', 'AI', 'Solutions.']}
                delay={0.1}
              />
            </div>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="max-w-xl text-[#4D4761] text-[15px] sm:text-base lg:text-[17px] leading-relaxed font-dm font-normal"
            >
              The best enterprise AI implementations start with a real operational bottleneck. Explore field-tested blueprints across knowledge retrieval, intelligent document workflows, autonomous customer care, and computer vision.
            </motion.p>

            {/* Primary Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <Button
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                onClick={scrollToGrid}
                className="shadow-xl shadow-violet-primary/25 hover:scale-105 transition-transform cursor-pointer"
              >
                Explore Use Cases
              </Button>
            </motion.div>
          </div>

          {/* ================= RIGHT INTERACTIVE 3D HERO VISUAL ================= */}
          <div className="w-full self-center">
            <HeroUseCaseModel3D />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default UseCasesHeroSection;
