import React from 'react';
import { cn } from '../../lib/utils';

interface LiquidGlassEffectProps {
  children?: React.ReactNode;
  className?: string;
}

export const LiquidGlassEffect: React.FC<LiquidGlassEffectProps> = ({ children, className }) => {
  return (
    <div className={cn('relative overflow-hidden group', className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-40 group-hover:opacity-75 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
        style={{ transformOrigin: 'top left' }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};