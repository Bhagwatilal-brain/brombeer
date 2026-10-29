import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { cn } from '../../lib/utils';

export interface ScrollTextRevealProps {
  eyebrow?: string;
  eyebrowIcon?: React.ReactNode;
  title: string | React.ReactNode;
  highlightWords?: string[];
  titleAs?: 'h1' | 'h2' | 'h3';
  description?: React.ReactNode;
  action?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
  descriptionClassName?: string;
  maxWidth?: string;
  delay?: number;
  once?: boolean;
}

export const ScrollTextReveal: React.FC<ScrollTextRevealProps> = ({
  eyebrow,
  eyebrowIcon,
  title,
  highlightWords,
  titleAs: TitleTag = 'h2',
  description,
  action,
  align = 'left',
  className,
  titleClassName,
  eyebrowClassName,
  descriptionClassName,
  maxWidth = 'max-w-2xl',
  delay = 0.05,
  once = false,
}) => {
  const prefersReduced = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: delay,
      },
    },
  };

  const eyebrowVariants = {
    hidden: { opacity: 0, y: 14, letterSpacing: '0.12em' },
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

  const headlineContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.038,
        delayChildren: 0.04,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
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

  const descriptionVariants = {
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

  const actionVariants = {
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

  const isWordHighlighted = (word: string, idx: number, allWords: string[]): boolean => {
    const clean = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (!clean) return false;

    if (highlightWords && highlightWords.length > 0) {
      return highlightWords.some(
        (hw) => hw.toLowerCase().replace(/[^a-z0-9]/g, '') === clean
      );
    }

    // Auto-detection fallback: if title has a period break
    const periodIdx = allWords.findIndex((w, i) => i < allWords.length - 1 && w.endsWith('.'));
    if (periodIdx !== -1) {
      return idx > periodIdx;
    }

    // Auto-detection fallback: highlight trailing ~40% of words
    const splitPoint = Math.max(1, Math.floor(allWords.length * 0.58));
    return idx >= splitPoint;
  };

  const renderTitleWords = () => {
    if (typeof title === 'string') {
      const words = title.split(/\s+/).filter(Boolean);
      const isDarkSection =
        titleClassName?.includes('text-[#F2F2F8]') || titleClassName?.includes('text-white');

      return words.map((word, idx) => {
        const isHighlighted = isWordHighlighted(word, idx, words);

        return (
          <span
            key={`${word}-${idx}`}
            className="inline-block mr-[0.24em] last:mr-0 overflow-visible align-baseline"
          >
            <motion.span
              variants={wordVariants}
              className={cn(
                'inline-block will-change-transform will-change-[filter]',
                isHighlighted
                  ? isDarkSection
                    ? 'text-[#C4B3FD]'
                    : 'text-violet-primary'
                  : 'text-current'
              )}
            >
              {word}
            </motion.span>
          </span>
        );
      });
    }
    return title;
  };

  return (
    <motion.div
      initial={prefersReduced ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once, amount: 0.25, margin: '0px 0px -60px 0px' }}
      variants={containerVariants}
      className={cn(
        align === 'center' && 'text-center mx-auto',
        align === 'right' && 'text-right ml-auto',
        maxWidth,
        className
      )}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <motion.div
          variants={eyebrowVariants}
          className={cn(
            'eyebrow inline-flex items-center gap-2 mb-3.5 will-change-transform',
            eyebrowClassName
          )}
        >
          {eyebrowIcon && eyebrowIcon}
          <span>{eyebrow}</span>
        </motion.div>
      )}

      {/* Headline Title with static color */}
      <motion.div variants={headlineContainerVariants}>
        <TitleTag
          className={cn(
            'text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.08] mb-4 select-none cursor-default',
            titleClassName
          )}
        >
          {renderTitleWords()}
        </TitleTag>
      </motion.div>

      {/* Description */}
      {description && (
        <motion.div
          variants={descriptionVariants}
          className={cn(
            'text-text-secondary text-[14.5px] sm:text-[15.5px] leading-relaxed font-light will-change-transform will-change-[filter]',
            descriptionClassName
          )}
        >
          {typeof description === 'string' ? <p>{description}</p> : description}
        </motion.div>
      )}

      {/* Action CTA */}
      {action && (
        <motion.div variants={actionVariants} className="mt-6">
          {action}
        </motion.div>
      )}
    </motion.div>
  );
};

