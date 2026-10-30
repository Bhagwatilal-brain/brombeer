import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Globe } from './Globe';
import { GsapTextEffect } from '../animations/GsapTextEffect';
import { Container } from '../layout/Container';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#F5F2FD] via-[#ECE7FA] to-[#F2EEFC] overflow-hidden pt-6 pb-10 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16 lg:pt-14 lg:pb-16">
      {/* Soft ambient radial gradients across full-length background */}
      <div
        className="wave absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(650px 320px at 24% 45%, rgba(124,77,236,.14), transparent 70%), radial-gradient(550px 550px at 80% 50%, rgba(124,77,236,.08), transparent 70%)',
        }}
      />

      <Container size="wide" className="relative z-10">
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
            <div className="text-[2.65rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.02] tracking-[-0.03em]">
              <GsapTextEffect
                lines={[
                  'Intelligence That',
                  'Moves Businesses',
                  'Forward.'
                ]}
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
              className="max-w-xl text-text-secondary text-base sm:text-lg leading-relaxed font-dm font-normal"
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
      </Container>
    </section>
  );
};