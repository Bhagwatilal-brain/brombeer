import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { RealWorldStage } from './trust-cards/RealWorldStage';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const HEADLINE_WORDS = 'Transform the Way Your Business Thinks, Works, and Grows.'.split(' ');

export const TrustValueSection: React.FC = () => {
  const prefersReduced = useReducedMotion();

  // Container variant: coordinates sequential staggered appearance of all text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.08,
      },
    },
  };

  // Eyebrow variant: subtle upward float with letter-spacing expansion
  const eyebrowVariants = {
    hidden: { opacity: 0, y: 16, letterSpacing: '0.12em' },
    visible: {
      opacity: 1,
      y: 0,
      letterSpacing: '0.18em',
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Headline words container variant
  const headlineContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.038,
        delayChildren: 0.05,
      },
    },
  };

  // Individual word variant: smooth 3D upward glide with blur to crisp sharpness
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 22,
      filter: 'blur(5px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Paragraph variant: smooth slide up with subtle blur fade
  const paragraphVariants = {
    hidden: {
      opacity: 0,
      y: 18,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // CTA button variant
  const buttonVariants = {
    hidden: {
      opacity: 0,
      y: 16,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="trust-value" className="relative py-12 sm:py-16 lg:py-20 bg-background overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Editorial Statement & CTA with Scroll-Triggered Text Appearance */}
          <motion.div
            initial={prefersReduced ? 'visible' : 'hidden'}
            whileInView="visible"
            viewport={{ once: false, amount: 0.25, margin: '0px 0px -60px 0px' }}
            variants={containerVariants}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <motion.span
              variants={eyebrowVariants}
              className="text-xs sm:text-[12.5px] font-semibold text-violet-primary tracking-[0.18em] uppercase block mb-3 will-change-transform"
            >
              AI DESIGNED FOR THE REAL WORLD
            </motion.span>

            {/* Headline with cinematic word-by-word reveal */}
            <motion.h2
              variants={headlineContainerVariants}
              className="text-3xl sm:text-4xl lg:text-[44px] font-outfit font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.1] mb-5"
            >
              {HEADLINE_WORDS.map((word, idx) => (
                <motion.span
                  key={`${word}-${idx}`}
                  variants={wordVariants}
                  className="inline-block mr-[0.24em] last:mr-0 will-change-transform will-change-[filter]"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            {/* Paragraph 1 */}
            <motion.p
              variants={paragraphVariants}
              className="text-text-secondary text-[14px] sm:text-[15px] leading-relaxed mb-4 font-normal will-change-transform will-change-[filter]"
            >
              Every organization has processes that consume valuable time, data that holds untapped insights, and knowledge that is difficult to access when it matters most. Brombeer AI helps bridge that gap.
            </motion.p>

            {/* Paragraph 2 */}
            <motion.p
              variants={paragraphVariants}
              className="text-text-secondary text-[14px] sm:text-[15px] leading-relaxed mb-7 font-normal will-change-transform will-change-[filter]"
            >
              Our approach starts with understanding your business — not choosing a model or technology before understanding the problem.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={buttonVariants}>
              <a
                href="/about"
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-[#111014] border border-[#111014]/25 hover:border-violet-primary hover:bg-[#FAF9FF] transition-all duration-300 shadow-sm hover:shadow text-sm font-medium group select-none"
              >
                <span>Discover Brombeer AI</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#111014] group-hover:text-violet-primary" />
              </a>
            </motion.div>
          </motion.div>

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
