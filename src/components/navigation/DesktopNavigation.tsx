import React from 'react';
import { NAV_LINKS } from '../../data/navigation';
import { NavigationLink } from './NavigationLink';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';

import brmLogo from '../../assets/images/brombeer-logo-brand.png';

interface DesktopNavigationProps {
  currentPath?: string;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ currentPath = '/' }) => {
  return (
    <div className="hidden md:flex items-center justify-between w-full">
      {/* Brand Logo */}
      <a href="/" className="flex items-center group select-none py-1">
        <img
          src={brmLogo}
          alt="Brombeer AI - Brombeer IT Systems"
          className="h-10 lg:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </a>

      {/* Navigation Links */}
      <nav className="flex items-center gap-5 lg:gap-7">
        {NAV_LINKS.map((link) => (
          <NavigationLink
            key={link.href}
            label={link.label}
            href={link.href}
            isActive={currentPath === link.href}
          />
        ))}
      </nav>

      {/* Header Primary CTA */}
      <div className="flex items-center gap-4">
        <Button
          asLink
          href="/contact"
          variant="secondary"
          size="sm"
          icon={<ArrowRight className="w-4 h-4" />}
          className="border-border-subtle hover:border-violet-primary hover:text-violet-primary font-medium"
        >
          Discuss an AI Project
        </Button>
      </div>
    </div>
  );
};