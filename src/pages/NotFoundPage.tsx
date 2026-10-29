import React from 'react';
import { Container } from '../components/layout/Container';
import { Button } from '../components/ui/Button';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 sm:py-32 bg-background text-center">
      <Container size="narrow">
        <div className="space-y-6">
          <span className="eyebrow block">404 ERROR</span>
          <h1 className="text-4xl sm:text-5xl font-sans font-extrabold text-text-primary tracking-[-0.03em]">
            This Page Seems to Have Taken a Different Path.
          </h1>
          <p className="text-text-secondary text-base max-w-md mx-auto leading-relaxed">
            The page you are looking for may have moved, been updated, or no longer exist. Let''s get you back to the right place.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button
              asLink
              href="/"
              variant="primary"
              size="md"
              icon={<ArrowLeft className="w-4 h-4" />}
              iconPosition="left"
            >
              Back to Home
            </Button>
            <Button
              asLink
              href="/solutions"
              variant="secondary"
              size="md"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Explore AI Solutions
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};