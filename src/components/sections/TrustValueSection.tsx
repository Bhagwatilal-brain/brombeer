import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { RealWorldStage } from './trust-cards/RealWorldStage';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const TrustValueSection: React.FC = () => {
  const prefersReduced = useReducedMotion();

  return (
    <section id="trust-value" className="relative py-12 sm:py-16 lg:py-20 bg-background overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Statement & CTA with Scroll-Triggered Text Appearance & Hero Gradient Highlight */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <ScrollTextReveal
              eyebrow="AI DESIGNED FOR THE REAL WORLD"
              title="Transform the Way Your Business Thinks, Works, and Grows."
              highlightWords={['Thinks,', 'Works,', 'and', 'Grows.']}
              titleClassName="text-3xl sm:text-4xl lg:text-[44px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.1] mb-5"
              description={
                <>
                  <p className="text-text-secondary text-[14px] sm:text-[15px] leading-relaxed mb-4 font-normal">
                    Every organization has processes that consume valuable time, data that holds untapped insights, and knowledge that is difficult to access when it matters most. Brombeer AI helps bridge that gap.
                  </p>
                  <p className="text-text-secondary text-[14px] sm:text-[15px] leading-relaxed mb-7 font-normal">
                    Our approach starts with understanding your business — not choosing a model or technology before understanding the problem.
                  </p>
                </>
              }
              action={
                <a
                  href="/about"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-[#111014] border border-[#111014]/25 hover:border-violet-primary hover:bg-[#FAF9FF] transition-all duration-300 shadow-sm hover:shadow text-sm font-medium group select-none"
                >
                  <span>Discover Brombeer AI</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#111014] group-hover:text-violet-primary" />
                </a>
              }
              maxWidth="max-w-xl"
            />
          </div>

          {/* Right Column: Properly Aligned Card Stage */}
          <motion.div
            initial={prefersReduced ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={{ once: false, amount: 0.25, margin: '0px 0px -60px 0px' }}
            variants={{
              hidden: { opacity: 0, y: 28, filter: 'blur(5px)' },
              visible: {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                transition: { duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] },
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
