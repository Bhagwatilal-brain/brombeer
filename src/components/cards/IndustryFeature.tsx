import React from 'react';
import { Industry } from '../../types';
import { SpotlightCard } from '../animations/SpotlightCard';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface IndustryFeatureProps {
  industry: Industry;
}

export const IndustryFeature: React.FC<IndustryFeatureProps> = ({ industry }) => {
  return (
    <SpotlightCard className="p-7 sm:p-8 h-full flex flex-col justify-between bg-white/70">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="w-2 h-2 rounded-full bg-violet-primary" />
          <span className="text-xs text-text-secondary font-mono">SECTOR</span>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-serif text-text-primary tracking-tight">
            {industry.name}
          </h3>
          <p className="text-xs font-medium text-violet-primary mt-1">
            {industry.tagline}
          </p>
          <p className="text-text-secondary text-sm mt-2 leading-relaxed">
            {industry.description}
          </p>
        </div>

        <div className="space-y-2 pt-2 border-t border-border-subtle/40">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-text-primary block">
            Target Applications
          </span>
          <div className="flex flex-wrap gap-1.5">
            {industry.applications.slice(0, 3).map((app, i) => (
              <span
                key={i}
                className="text-[11px] bg-surface-lavender/60 text-text-secondary px-2.5 py-1 rounded-md border border-white"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-5 mt-4 border-t border-border-subtle/30">
        <Button
          asLink
          href={`/industries#${industry.id}`}
          variant="link"
          icon={<ArrowUpRight className="w-4 h-4" />}
          className="text-xs font-semibold text-text-primary hover:text-violet-primary"
        >
          Explore Sector Solutions
        </Button>
      </div>
    </SpotlightCard>
  );
};