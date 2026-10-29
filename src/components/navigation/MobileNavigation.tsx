import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigation';
import { Button } from '../ui/Button';

import brmLogo from '../../assets/images/brombeer-logo-brand.png';

interface MobileNavigationProps {
  currentPath?: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ currentPath = '/' }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center justify-between w-full">
      {/* Brand Logo */}
      <a href="/" className="flex items-center group select-none py-1">
        <img
          src={brmLogo}
          alt="Brombeer AI - Brombeer IT Systems"
          className="h-8 sm:h-9 w-auto object-contain"
        />
      </a>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl text-text-primary hover:bg-surface-lavender transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-x-0 top-16 bg-white/95 backdrop-blur-xl border-b border-border-subtle p-6 space-y-5 shadow-2xl z-50">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                  currentPath === link.href
                    ? 'bg-surface-lavender text-violet-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/responsible-ai"
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                currentPath === '/responsible-ai'
                  ? 'bg-surface-lavender text-violet-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Responsible AI
            </a>
          </nav>

          <div className="pt-2 border-t border-border-subtle">
            <Button
              asLink
              href="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
              className="w-full"
              onClick={() => setIsOpen(false)}
            >
              Discuss an AI Project
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};