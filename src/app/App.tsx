import React from 'react';
import { SiteLayout } from '../components/layout/SiteLayout';
import { useRouter, Router } from './router';
import { AppProviders } from './providers';

export const App: React.FC = () => {
  const currentPath = useRouter();

  return (
    <AppProviders>
      <SiteLayout currentPath={currentPath}>
        <Router currentPath={currentPath} />
      </SiteLayout>
    </AppProviders>
  );
};