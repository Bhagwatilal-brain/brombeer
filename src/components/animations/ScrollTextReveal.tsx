import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { cn } from '../../lib/utils';

export interface ScrollTextRevealProps {
  eyebrow?: string;
  eyebrowIcon?: React.ReactNode;
  title: string | React.ReactNode;
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

  const renderTitleWords = () => {
    if (typeof title === 'string') {
      const words = title.split(/\s+/).filter(Boolean);
      return words.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          variants={wordVariants}
          className="inline-block mr-[0.24em] last:mr-0 will-change-transform will-change-[filter]"
        >
          {word}
        </motion.span>
      ));
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

      {/* Headline Title */}
      <motion.div variants={headlineContainerVariants}>
        <TitleTag
          className={cn(
            'text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-serif font-normal text-[#111014] tracking-tight leading-[1.08] mb-4',
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

