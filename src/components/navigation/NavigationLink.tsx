import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { TextRoll } from '../ui/text-roll';

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative text-sm font-medium transition-colors py-1 select-none inline-flex items-center',
        isActive
          ? 'text-violet-primary font-semibold'
          : 'text-text-secondary hover:text-text-primary',
        className
      )}
    >
      <TextRoll isHovered={isHovered}>{label}</TextRoll>
      {isActive && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-violet-primary rounded-full" />
      )}
    </a>
  );
};
