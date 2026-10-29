import React from 'react';
import { InsightArticle } from '../../types';
import { SpotlightCard } from '../animations/SpotlightCard';
import { ArrowUpRight, Clock } from 'lucide-react';

interface InsightCardProps {
  article: InsightArticle;
}

export const InsightCard: React.FC<InsightCardProps> = ({ article }) => {
  return (
    <SpotlightCard className="p-7 sm:p-8 h-full flex flex-col justify-between bg-white/75">
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-text-secondary">
          <span className="px-2.5 py-1 rounded-full bg-surface-lavender text-violet-primary font-medium border border-violet-light/30">
            {article.category}
          </span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </div>
        </div>

        <div>
          <h3 className="text-xl sm:text-2xl font-serif text-text-primary tracking-tight leading-snug group-hover:text-violet-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-text-secondary text-sm mt-2.5 leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>
        </div>

        <div className="p-3 rounded-xl bg-surface-lavender/50 border border-white text-xs text-text-secondary space-y-1">
          <span className="font-semibold text-text-primary block">Key Insight:</span>
          <p className="italic">{article.keyTakeaway}</p>
        </div>
      </div>

      <div className="pt-5 mt-4 border-t border-border-subtle/30 flex items-center justify-between text-xs text-text-secondary">
        <span>{article.author} • {article.date}</span>
        <span className="inline-flex items-center gap-1 font-semibold text-violet-primary hover:underline cursor-pointer">
          Read Article <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </SpotlightCard>
  );
};