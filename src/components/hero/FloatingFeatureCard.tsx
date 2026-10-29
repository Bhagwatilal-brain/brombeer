import React from 'react';
import { cn } from '../../lib/utils';

interface FloatingFeatureCardProps {
  title: string;
  subtitle: string;
  className?: string;
  dotColor?: string;
}

export const FloatingFeatureCard: React.FC<FloatingFeatureCardProps> = ({
  title,
  subtitle,
  className,
  dotColor = 'bg-[#7650E8]',
}) => {
  return (
    <div
      className={cn(
        'glass-panel rounded-2xl py-3.5 px-4 sm:px-5 flex items-start gap-3 shadow-[0_12px_36px_rgba(118,80,232,0.12)] border border-white/90 transition-transform duration-300 hover:scale-105 select-none',
        className
      )}
    >
      <div className="pt-1 flex-shrink-0">
        <span className={cn('block w-2.5 h-2.5 rounded-full shadow-sm', dotColor)} />
      </div>
      <div>
        <h5 className="text-xs sm:text-sm font-semibold text-text-primary tracking-tight">
          {title}
        </h5>
        <p className="text-[11px] sm:text-xs text-text-secondary leading-snug mt-0.5">
          {subtitle}
        </p>
      </div>
    </div>
  );
};