import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export interface OrbitingIconProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export const OrbitingIcons: React.FC<OrbitingIconProps> = ({
  className,
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 160,
  path = true,
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-[#6853A5]/15 stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}

      <div
        style={
          {
            '--duration': `${duration}s`,
            '--radius': `${radius}px`,
            '--delay': `-${delay}s`,
          } as React.CSSProperties
        }
        className={cn(
          'pointer-events-none absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full',
          reverse && '[animation-direction:reverse]',
          prefersReduced && 'animation-none',
          className
        )}
      >
        <div className="glass-panel pointer-events-auto p-2.5 rounded-2xl shadow-md border border-white/90 text-violet-primary hover:scale-110 transition-transform">
          {children}
        </div>
      </div>
    </>
  );
};