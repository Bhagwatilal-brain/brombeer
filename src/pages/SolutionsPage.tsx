import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GsapTextEffect } from '../components/animations/GsapTextEffect';
import { SolutionsBentoGrid } from '../components/sections/solutions/SolutionsBentoGrid';
import { SolutionsDetailedSection } from '../components/sections/solutions/SolutionsDetailedSection';
import { HeroSolutionModel3D } from '../components/sections/solutions/HeroSolutionModel3D';
import { CTA3DScene } from '../components/animations/CTA3DScene';

export const SolutionsPage: React.FC = () => {
  return (
    <div className="bg-background relative overflow-x-clip">
      {/* 1. Editorial Atmospheric Hero Section with Interactive 3D Model (Transparent Background) */}
      <section className="relative w-full min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex items-center overflow-hidden bg-[#F7F5FF] pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-8 lg:pb-8">
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
            {/* Left-Anchored Editorial Content Block */}
            <div className="max-w-xl space-y-6 sm:space-y-7">
              {/* Large 3-Line Editorial Headline */}
              <div className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.15rem] xl:text-[4.35rem] leading-[1.04] tracking-[-0.035em]">
                <GsapTextEffect
                  lines={['AI Solutions Built', 'Around Your', 'Business.']}
                  highlightWords={['Around', 'Your', 'Business.']}
                  delay={0.1}
                />
              </div>

              {/* Compact 2-Line Supporting Copy */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35 }}
                className="max-w-lg text-[#4D4761] text-[15px] sm:text-base lg:text-[17px] leading-relaxed font-dm font-normal"
              >
                From private language models and autonomous agents to predictive ML and computer vision — integrated seamlessly into your enterprise workflows.
              </motion.p>

              {/* Primary CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.48 }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Button
                  asLink
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss Your Requirements
                </Button>
              </motion.div>
            </div>

            {/* Right Lottie AI Processor Hero Visual with Floating Capability Cards */}
            <div className="w-full self-center">
              <HeroSolutionModel3D />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Illustrated Bento Grid Section */}
      <SolutionsBentoGrid />

      {/* 3. Deep-Dive Detailed Solutions with Sticky Category Nav, 3D Scroll Entrance & Interactive Visuals */}
      <SolutionsDetailedSection />

      {/* 5. Closing Strategic Call to Action Section with Real-Time 3D WebGL Background */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#6853A5]/20 text-xs font-semibold text-violet-primary shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-violet-primary" />
                <span className="font-mono uppercase tracking-wider text-[11px]">
                  ENTERPRISE FEASIBILITY EVALUATION
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.1]">
                Ready to Connect AI to Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7650E8] via-[#8E6DF5] to-[#7650E8]">
                  Core Business Workflows?
                </span>
              </h2>

              <p className="text-text-secondary text-sm sm:text-base font-dm max-w-xl mx-auto leading-relaxed">
                Schedule a strategic consultation with Brombeer AI's engineering leadership to map your workflows, audit data readiness, and review architectural blueprints.
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
                  Schedule Architecture Review
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SolutionsPage;
