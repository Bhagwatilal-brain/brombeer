import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { cn } from '../../lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = false,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '0px 0px -60px 0px' });
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const getOffset = () => {
    switch (direction) {
      case 'up': return { y: 24, x: 0 };
      case 'down': return { y: -24, x: 0 };
      case 'left': return { x: 24, y: 0 };
      case 'right': return { x: -24, y: 0 };
      case 'none': return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset, filter: 'blur(4px)' }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' } : { opacity: 0, ...offset, filter: 'blur(4px)' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn('will-change-transform will-change-[filter]', className)}
    >
      {children}
    </motion.div>
  );
};
