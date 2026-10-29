import React, { useState, useEffect } from 'react';
import { HomePage } from '../pages/HomePage';
import { SolutionsPage } from '../pages/SolutionsPage';
import { IndustriesPage } from '../pages/IndustriesPage';
import { UseCasesPage } from '../pages/UseCasesPage';
import { ApproachPage } from '../pages/ApproachPage';
import { AboutPage } from '../pages/AboutPage';
import { ResponsibleAIPage } from '../pages/ResponsibleAIPage';
import { InsightsPage } from '../pages/InsightsPage';
import { ContactPage } from '../pages/ContactPage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { PrivacyPage } from '../pages/PrivacyPage';
import { TermsPage } from '../pages/TermsPage';
import Demo from '../components/ui/demo';

export const useRouter = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('popstate', handleLocationChange);

    // Global internal link interceptor
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href) return;

      // Handle external links or special protocols
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:')
      ) {
        return;
      }

      e.preventDefault();

      // Handle internal in-page hash links like /#approach or #solutions
      if (href.startsWith('/#') || href.startsWith('#')) {
        const hash = href.includes('#') ? href.substring(href.indexOf('#')) : '';
        if (window.location.pathname !== '/') {
          window.history.pushState(null, '', '/' + hash);
          handleLocationChange();
        } else {
          window.history.pushState(null, '', hash);
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }

      // Regular internal route
      window.history.pushState(null, '', href);
      handleLocationChange();
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return currentPath;
};

export const Router: React.FC<{ currentPath: string }> = ({ currentPath }) => {
  switch (currentPath) {
    case '/':
      return <HomePage />;
    case '/demo':
      return <Demo />;
    case '/solutions':
      return <SolutionsPage />;
    case '/industries':
      return <IndustriesPage />;
    case '/use-cases':
      return <UseCasesPage />;
    case '/approach':
    case '/our-approach':
      return <ApproachPage />;
    case '/about':
    case '/about-us':
      return <AboutPage />;
    case '/responsible-ai':
      return <ResponsibleAIPage />;
    case '/insights':
      return <InsightsPage />;
    case '/contact':
      return <ContactPage />;
    case '/privacy':
      return <PrivacyPage />;
    case '/terms':
      return <TermsPage />;
    default:
      return <NotFoundPage />;
  }
};