import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  asLink?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  asLink,
  href,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-primary/40 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none';

  const variants = {
    primary: 'bg-[#111014] text-white hover:bg-[#28164D] hover:shadow-lg hover:shadow-violet-primary/20 shadow-sm border border-transparent',
    secondary: 'bg-white/80 backdrop-blur-md text-[#111014] border border-[#6853A5]/20 hover:border-violet-primary hover:bg-white shadow-sm hover:shadow-md hover:shadow-violet-primary/10',
    outline: 'bg-transparent text-[#111014] border border-[#111014]/80 hover:bg-[#111014] hover:text-white',
    ghost: 'bg-transparent text-[#111014] hover:bg-surface-lavender text-text-secondary hover:text-text-primary',
    link: 'bg-transparent text-[#111014] p-0 underline-offset-4 hover:underline hover:text-violet-primary font-semibold',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5 font-medium',
  };

  const combinedClass = cn(
    baseStyles,
    variants[variant],
    variant !== 'link' && sizes[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="transition-transform group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform group-hover:translate-x-0.5">{icon}</span>}
    </>
  );

  if (asLink && href) {
    return (
      <a href={href} className={combinedClass}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {content}
    </button>
  );
};