import React from 'react';
import { cn } from '../../lib/utils';

interface AnimatedDividerProps {
  className?: string;
}

export const AnimatedDivider: React.FC<AnimatedDividerProps> = ({ className }) => {
  return (
    <div className={cn('relative w-full py-8 flex items-center justify-center', className)}>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent" />
      <div className="absolute w-2 h-2 rounded-full bg-violet-light border border-violet-primary/40 shadow-sm shadow-violet-primary/20" />
    </div>
  );
};