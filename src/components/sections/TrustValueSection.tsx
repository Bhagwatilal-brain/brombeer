import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { RealWorldStage } from './trust-cards/RealWorldStage';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Button } from '../ui/Button';

export const TrustValueSection: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="trust-value"
      className="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FAF8FF] via-[#F5EDFE] to-[#FAF8FF] overflow-hidden"
    >
      {/* Ambient Atmospheric Wave/Glow Gradients (Matching Reference Artwork) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft violet radial aura behind the right neural hub */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[550px] h-[550px] bg-[#7650E8]/10 rounded-full blur-[100px]" />

        {/* Top-left soft lavender ambient wash */}
        <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-[#9D74FF]/8 rounded-full blur-[90px]" />

        {/* Ambient background flowing wave accents */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
          viewBox="0 0 1440 800"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M-100 200 C300 100, 600 350, 1000 180 C1200 90, 1400 150, 1540 100"
            stroke="url(#bg-wave-gradient)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <path
            d="M-50 700 C250 620, 700 780, 1100 650 C1300 580, 1450 640, 1550 600"
            stroke="url(#bg-wave-gradient)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <defs>
            <linearGradient id="bg-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7650E8" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#7650E8" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#7650E8" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
          {/* ==================== LEFT COLUMN: EDITORIAL STATEMENT & CTA ==================== */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <ScrollTextReveal
              eyebrow="AI DESIGNED FOR THE REAL WORLD"
              eyebrowIcon={
                <svg
                  className="w-3.5 h-3.5 text-[#7650E8]"
                  viewBox="0 0 14 14"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 0l1.8 5.2L14 7l-5.2 1.8L7 14l-1.8-5.2L0 7l5.2-1.8L7 0z" />
                </svg>
              }
              eyebrowClassName="px-3.5 py-1.5 rounded-full bg-[#F3EFFF] border border-[#7650E8]/20 text-[#7650E8] text-[11px] sm:text-xs font-bold tracking-[0.14em] shadow-sm mb-4"
              title="Transform the Way Your Business Thinks, Works, and Grows."
              highlightWords={['Thinks,', 'Works,', 'and', 'Grows.']}
              titleClassName="text-3xl sm:text-4xl lg:text-[44px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.24] sm:leading-[1.26] lg:leading-[1.28] mb-5"
              description={
                <>
                  <p className="text-[#555263] text-[14px] sm:text-[15px] leading-relaxed mb-4 font-normal">
                    Every organization has processes that consume valuable time, data that holds untapped insights, and knowledge that is difficult to access when it matters most. Brombeer AI helps bridge that gap.
                  </p>
                  <p className="text-[#555263] text-[14px] sm:text-[15px] leading-relaxed mb-8 font-normal">
                    Our approach starts with understanding your business — not choosing a model or technology before understanding the problem.
                  </p>
                </>
              }
              action={
                <div className="pt-1">
                  {/* Discover Brombeer AI Button (Matching Menu Bar Secondary Button) */}
                  <Button
                    asLink
                    href="/about"
                    variant="secondary"
                    size="sm"
                    textRoll
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="border-border-subtle bg-white/80 hover:bg-white hover:border-violet-primary hover:text-violet-primary font-medium"
                  >
                    Discover Brombeer AI
                  </Button>
                </div>
              }
              maxWidth="max-w-xl"
            />
          </div>

          {/* ==================== RIGHT COLUMN: NEURAL AI HUB STAGE ==================== */}
          <motion.div
            initial={prefersReduced ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={{ once: false, amount: 0.2, margin: '0px 0px -40px 0px' }}
            variants={{
              hidden: { opacity: 0, y: 24, filter: 'blur(5px)' },
              visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: { duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="lg:col-span-7 flex justify-center lg:justify-end items-center w-full"
          >
            <RealWorldStage />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
