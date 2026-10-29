import React from 'react';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';

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
    <ScrollTextReveal
      eyebrow={eyebrow}
      eyebrowIcon={<span className="w-2 h-2 rounded-full bg-violet-primary/80 animate-pulse inline-block" />}
      title={title}
      description={description}
      align={align}
      className={className}
      titleClassName={titleClassName}
      maxWidth={maxWidth}
    />
  );
};
