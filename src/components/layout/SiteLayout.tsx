import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { useScrollProgress } from '../../hooks/useScrollProgress';

interface SiteLayoutProps {
  children: React.ReactNode;
  currentPath?: string;
}

export const SiteLayout: React.FC<SiteLayoutProps> = ({ children, currentPath = '/' }) => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="min-h-screen flex flex-col bg-background text-text-primary relative selection:bg-violet-light/40 selection:text-purple-dark">
      {/* Top Ambient Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] bg-transparent pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-violet-primary via-violet-light to-violet-deep shadow-sm shadow-violet-primary/50 transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <Header currentPath={currentPath} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};