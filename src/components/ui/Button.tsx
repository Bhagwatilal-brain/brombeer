import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { TextRoll } from './text-roll';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
  textRoll?: boolean;
}

const primaryCircleSizes = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-9 h-9',
};

const primaryIconSizes = {
  sm: '[&>svg]:w-3 [&>svg]:h-3 w-3 h-3',
  md: '[&>svg]:w-3.5 [&>svg]:h-3.5 w-3.5 h-3.5',
  lg: '[&>svg]:w-4 [&>svg]:h-4 w-4 h-4',
};

const primaryPaddings = {
  sm: 'pl-4 pr-1.5 py-1 text-xs gap-2.5',
  md: 'pl-5 pr-2 py-1.5 text-sm gap-3',
  lg: 'pl-6 sm:pl-7 pr-2 sm:pr-2.5 py-2 sm:py-2.5 text-sm sm:text-base gap-3.5 sm:gap-4',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  asLink,
  href,
  textRoll,
  ...props
}) => {
  const isPrimary = variant === 'primary';
  const shouldRoll = textRoll ?? isPrimary;
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles =
    'group relative overflow-hidden isolate inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-primary/40 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer';

  const variants = {
    // Primary: Outlined pill at start with a purple circle + tilted arrow.
    // On hover, the arrow rotates straight right and the purple circle spreads across the outline button.
    primary:
      'bg-transparent text-[#111014] border-2 border-[#111014] hover:border-[#111014] hover:shadow-xl hover:shadow-violet-primary/25 shadow-none',
    secondary:
      'bg-white/80 backdrop-blur-md text-[#111014] border border-[#6853A5]/20 hover:border-violet-primary hover:bg-white shadow-sm hover:shadow-md hover:shadow-violet-primary/10',
    outline:
      'bg-transparent text-[#111014] border-2 border-[#111014]/80 hover:bg-[#111014] hover:text-white',
    ghost:
      'bg-transparent text-[#111014] hover:bg-surface-lavender text-text-secondary hover:text-text-primary',
    link:
      'bg-transparent text-[#111014] p-0 underline-offset-4 hover:underline hover:text-violet-primary font-semibold',
  };

  const defaultSizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const combinedClass = cn(
    baseStyles,
    variants[variant],
    isPrimary && iconPosition === 'right' ? primaryPaddings[size] : (variant !== 'link' && defaultSizes[size]),
    className
  );

  const renderedChildren = shouldRoll && typeof children === 'string' ? (
    <TextRoll isHovered={isHovered}>{children}</TextRoll>
  ) : (
    children
  );

  const content = isPrimary && iconPosition === 'right' ? (
    <>
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white font-semibold inline-flex items-center justify-center leading-none self-center">
        {renderedChildren}
      </span>
      <div
        className={cn(
          'relative flex-shrink-0 flex items-center justify-center rounded-full self-center',
          primaryCircleSizes[size]
        )}
      >
        {/* Expanding purple circle: spreads radially from the right across the outline button on hover */}
        <span
          className="absolute inset-0 rounded-full bg-violet-primary transition-transform duration-500 ease-out origin-center scale-100 group-hover:scale-[35] pointer-events-none z-0"
          aria-hidden="true"
        />
        {/* Arrow: tilted upside (-rotate-45) at start, rotates straight right (rotate-0) on hover */}
        <span
          className={cn(
            'relative z-20 text-white transition-transform duration-300 ease-out transform -rotate-45 group-hover:rotate-0 group-hover:translate-x-0.5 flex items-center justify-center pointer-events-none [&>svg]:block',
            primaryIconSizes[size]
          )}
        >
          {icon || <ArrowRight className="w-full h-full" />}
        </span>
      </div>
    </>
  ) : (
    <>
      {icon && iconPosition === 'left' && (
        <span className="inline-flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:-translate-x-1 leading-none self-center [&>svg]:block">
          {icon}
        </span>
      )}
      <span className="inline-flex items-center justify-center leading-none self-center">
        {renderedChildren}
      </span>
      {icon && iconPosition === 'right' && (
        <span className="inline-flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1 leading-none self-center [&>svg]:block">
          {icon}
        </span>
      )}
    </>
  );

  const handleMouseEnter = (e: React.MouseEvent<any>) => {
    setIsHovered(true);
    props.onMouseEnter?.(e as React.MouseEvent<HTMLButtonElement>);
  };

  const handleMouseLeave = (e: React.MouseEvent<any>) => {
    setIsHovered(false);
    props.onMouseLeave?.(e as React.MouseEvent<HTMLButtonElement>);
  };

  if (asLink && href) {
    return (
      <a
        href={href}
        className={combinedClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={combinedClass}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {content}
    </button>
  );
};
