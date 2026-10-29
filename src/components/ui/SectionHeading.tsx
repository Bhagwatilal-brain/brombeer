import React from 'react';
import { cn } from '../../lib/utils';

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  maxWidth?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  titleClassName,
  maxWidth = 'max-w-2xl',
}) => {
  return (
    <div
      className={cn(
        'space-y-3.5',
        align === 'center' && 'text-center mx-auto',
        align === 'right' && 'text-right ml-auto',
        maxWidth,
        className
      )}
    >
      {eyebrow && (
        <div className="eyebrow inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-violet-primary/80 animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl font-serif text-text-primary tracking-tight leading-[1.08]',
          titleClassName
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-base sm:text-lg leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
};