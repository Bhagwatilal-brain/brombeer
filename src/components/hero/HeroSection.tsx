import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Globe } from './Globe';
import { CapabilitiesTicker } from './CapabilitiesTicker';
import { GsapTextEffect } from '../animations/GsapTextEffect';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full pt-4 pb-0 sm:pt-6 sm:pb-0 px-4 sm:px-6 lg:px-8">
      {/* Approved Lavender Hero Container */}
      <div className="max-w-[1380px] mx-auto rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-b from-[#F5F2FD] via-[#ECE7FA] to-[#F2EEFC] border border-white/90 shadow-[0_20px_60px_-15px_rgba(118,80,232,0.1)] overflow-hidden relative">

        {/* Soft non-blurred ambient radial gradients */}
        <div
          className="wave absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(520px 220px at 24% 55%, rgba(124,77,236,.14), transparent 70%), radial-gradient(460px 460px at 80% 50%, rgba(124,77,236,.07), transparent 70%)',
          }}
        />

        <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-16 pt-12 pb-14 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[580px] lg:min-h-[640px]">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="eyebrow"
              >
                ENTERPRISE ARTIFICIAL INTELLIGENCE
              </motion.div>

              {/* Modern Futuristic Geometric Headline with GSAP Cinematic Slide-Up & Iridescent Light Sweep */}
              <div className="text-[2.65rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.14]">
                <GsapTextEffect
                  words="Intelligence That Moves Businesses Forward."
                  highlightWords={['Moves', 'Businesses', 'Forward.']}
                  delay={0.15}
                />
              </div>

              {/* Divider Line */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ transformOrigin: 'left' }}
                className="w-full max-w-lg h-px bg-[#6853A5]/18"
              />

              {/* Supporting Copy - Punchy & Visual */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="max-w-xl text-text-secondary text-base sm:text-lg leading-relaxed"
              >
                <p>
                  Turn complex business challenges into intelligent digital systems. We architect production-grade AI designed around your operational workflows, enterprise data, and measurable ROI.
                </p>
              </motion.div>

              {/* Values Line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-text-primary/90 pt-1"
              >
                {/* Dual Pill Icon */}
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-3.5 rounded-full bg-violet-primary transform -rotate-12 inline-block" />
                  <span className="w-1.5 h-3.5 rounded-full bg-violet-deep transform -rotate-12 inline-block" />
                </span>
                <span>Practical AI</span>
                <span className="text-text-secondary/40 font-light">•</span>
                <span>Responsible Innovation</span>
                <span className="text-text-secondary/40 font-light">•</span>
                <span>Real Business Value</span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6"
              >
                <Button
                  asLink
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="shadow-md shadow-violet-primary/15"
                >
                  Discuss an AI Project
                </Button>

                <Button
                  asLink
                  href="/solutions"
                  variant="link"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                  className="text-text-primary hover:text-violet-primary font-medium text-sm sm:text-base"
                >
                  Explore Our AI Solutions
                </Button>
              </motion.div>
            </div>

            {/* Right 3D Animated Globe Column */}
            <div className="lg:col-span-5 flex items-center justify-center relative w-full">
              <Globe />
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Ticker Strip */}
      <CapabilitiesTicker />
    </section>
  );
};