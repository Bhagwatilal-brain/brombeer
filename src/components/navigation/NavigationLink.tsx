import React from 'react';
import { cn } from '../../lib/utils';

interface NavigationLinkProps {
  label: string;
  href: string;
  isActive?: boolean;
  isExternal?: boolean;
  className?: string;
  onClick?: () => void;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  label,
  href,
  isActive = false,
  isExternal = false,
  className,
  onClick,
}) => {
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      className={cn(
        'relative text-sm font-medium transition-colors py-1 select-none',
        isActive
          ? 'text-violet-primary'
          : 'text-text-secondary hover:text-text-primary',
        className
      )}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-primary rounded-full" />
      )}
    </a>
  );
};