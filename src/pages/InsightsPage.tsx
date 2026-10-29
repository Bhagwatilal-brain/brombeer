import React from 'react';
import { Container } from '../components/layout/Container';
import { INSIGHTS } from '../data/insights';
import { InsightCard } from '../components/cards/InsightCard';

export const InsightsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 space-y-16">
      <Container>
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow block">RESEARCH & PERSPECTIVES</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold text-text-primary tracking-[-0.03em] leading-[1.06]">
            Ideas, Perspectives, and{' '}
            <span className="bg-gradient-to-r from-violet-deep via-violet-primary to-[#9E7EFF] bg-clip-text text-transparent">
              Practical AI Guidance.
            </span>
          </h1>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Explore perspectives on artificial intelligence, enterprise automation, generative AI, computer vision, and the practical decisions involved in implementing reliable AI systems.
          </p>
        </div>
      </Container>

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INSIGHTS.map((article) => (
            <InsightCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </div>
  );
};