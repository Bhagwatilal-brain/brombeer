import React from 'react';
import { UseCase } from '../../types';
import { GlassPanel } from '../ui/GlassPanel';
import { CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { Button } from '../ui/Button';

interface UseCaseFeatureProps {
  useCase: UseCase;
}

export const UseCaseFeature: React.FC<UseCaseFeatureProps> = ({ useCase }) => {
  return (
    <GlassPanel className="p-7 sm:p-9 space-y-6 hoverEffect flex flex-col justify-between h-full bg-white/90 border border-[#6853A5]/15 rounded-3xl shadow-sm hover:shadow-xl transition-all">
      <div className="space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-border-subtle/30">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-surface-lavender text-violet-primary border border-violet-light/40">
            Case {useCase.number}
          </span>
          <span className="text-xs font-medium text-text-secondary">{useCase.title}</span>
        </div>

        <div>
          <h3 className="text-2xl font-serif text-text-primary leading-tight">
            {useCase.headline}
          </h3>
          <p className="text-text-secondary text-xs sm:text-sm mt-2 leading-relaxed">
            {useCase.solution}
          </p>
        </div>

        {/* Business Challenge */}
        {useCase.challenge && (
          <div className="bg-[#FAF9FF] p-4 rounded-2xl border border-white space-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-text-primary block">
              The Business Challenge
            </span>
            <p className="text-xs text-text-secondary leading-relaxed">
              {useCase.challenge}
            </p>
          </div>
        )}

        {/* Workflow Steps */}
        <div className="space-y-2.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-violet-primary block">
            How the Solution Works
          </span>
          <div className="space-y-2">
            {useCase.steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                <span className="w-4 h-4 rounded-full bg-violet-light/30 text-violet-deep flex-shrink-0 flex items-center justify-center text-[10px] font-semibold mt-0.5">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="pt-2 border-t border-border-subtle/40 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-primary block">
            Key Benefits
          </span>
          <div className="space-y-1.5">
            {useCase.benefits.map((b, bIdx) => (
              <div key={bIdx} className="flex items-start gap-2 text-xs text-text-secondary">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-primary flex-shrink-0 mt-0.5" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Practical Considerations */}
        {useCase.considerations && (
          <div className="p-3.5 rounded-xl bg-surface-lavender/40 border border-violet-light/20 flex items-start gap-2 text-xs text-text-secondary">
            <AlertCircle className="w-4 h-4 text-violet-primary flex-shrink-0 mt-0.5" />
            <span>
              <strong>Practical considerations:</strong> {useCase.considerations}
            </span>
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-border-subtle/30">
        <Button
          asLink
          href="/contact"
          variant="secondary"
          size="sm"
          icon={<ArrowRight className="w-4 h-4" />}
          className="w-full justify-between"
        >
          Discuss This Use Case
        </Button>
      </div>
    </GlassPanel>
  );
};