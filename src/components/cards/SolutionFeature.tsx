import React from 'react';
import { Solution } from '../../types';
import { SpotlightCard } from '../animations/SpotlightCard';
import { ArrowUpRight, Check } from 'lucide-react';
import { Button } from '../ui/Button';

interface SolutionFeatureProps {
  solution: Solution;
  index?: number;
}

export const SolutionFeature: React.FC<SolutionFeatureProps> = ({ solution, index = 0 }) => {
  return (
    <SpotlightCard className="h-full flex flex-col justify-between p-7 sm:p-8 bg-white/70 border border-white/90">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-surface-lavender text-violet-primary border border-violet-light/30">
            {solution.number}
          </span>
          {solution.badge && (
            <span className="text-[11px] font-medium text-text-secondary uppercase tracking-wider">
              {solution.badge}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-sans font-bold text-text-primary tracking-tight">
            {solution.title}
          </h3>
          <p className="text-text-secondary text-sm mt-2 leading-relaxed">
            {solution.description}
          </p>
        </div>

        {/* Core Capabilities */}
        <div className="space-y-2 pt-2 border-t border-border-subtle/40">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-violet-primary block">
            Key Capabilities
          </span>
          <ul className="space-y-1.5">
            {solution.capabilities.slice(0, 4).map((cap, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                <Check className="w-3.5 h-3.5 text-violet-primary flex-shrink-0" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-6 mt-4 border-t border-border-subtle/30 flex items-center justify-between">
        <Button
          asLink
          href={`/solutions#${solution.id}`}
          variant="link"
          icon={<ArrowUpRight className="w-4 h-4" />}
          className="text-xs font-semibold text-text-primary hover:text-violet-primary p-0"
        >
          {solution.ctaText}
        </Button>
      </div>
    </SpotlightCard>
  );
};