import React from 'react';
import { cn } from '../../lib/utils';

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  intensity?: 'low' | 'medium' | 'high';
  bordered?: boolean;
  hoverEffect?: boolean;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className,
  intensity = 'medium',
  bordered = true,
  hoverEffect = false,
  ...props
}) => {
  const intensities = {
    low: 'bg-white/40 backdrop-blur-sm',
    medium: 'bg-white/70 backdrop-blur-md',
    high: 'bg-white/85 backdrop-blur-xl',
  };

  return (
    <div
      className={cn(
        'rounded-3xl transition-all duration-300',
        intensities[intensity],
        bordered && 'border border-white/80 shadow-[0_8px_32px_0_rgba(118,80,232,0.06)]',
        hoverEffect && 'hover:shadow-[0_16px_40px_0_rgba(118,80,232,0.12)] hover:border-violet-light/50 hover:-translate-y-0.5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};