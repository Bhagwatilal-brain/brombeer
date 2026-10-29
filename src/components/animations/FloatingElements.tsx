import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { cn } from '../../lib/utils';

interface FloatingElementsProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
  delay?: number;
  reverse?: boolean;
}

export const FloatingElements: React.FC<FloatingElementsProps> = ({
  children,
  className,
  duration = 6,
  distance = 10,
  delay = 0,
  reverse = false,
}) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  const yValues = reverse
    ? [0, distance, 0, -distance, 0]
    : [0, -distance, 0, distance, 0];

  return (
    <motion.div
      animate={{
        y: yValues,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={cn('inline-block', className)}
    >
      {children}
    </motion.div>
  );
};