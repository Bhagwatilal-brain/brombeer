import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '../animations/ScrollReveal';

export const ImpactSection: React.FC = () => {
  const kpis = [
    { value: '95%+', label: 'Extraction Precision', detail: 'Across high-variance forms, invoices, and unstructured reports' },
    { value: '75%', label: 'Search Acceleration', detail: 'Reduction in hours spent retrieving organizational documents' },
    { value: '38ms', label: 'Inference Latency', detail: 'Real-time responsive pipeline execution on enterprise queries' },
    { value: 'Zero', label: 'Data Leakage', detail: 'Strict role-based partitioning and zero-retention API policies' },
  ];

  return (
    <section className="py-12 lg:py-16 bg-background relative overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <ScrollReveal>
            <SectionHeading
              align="center"
              eyebrow="MEASURABLE IMPACT"
              title="Built for Measurable Business Outcomes."
              highlightWords={['Measurable', 'Business', 'Outcomes.']}
              description="We evaluate projects against real business outcomes, operational efficiency, and risk reduction rather than technical novelty alone."
            />
          </ScrollReveal>
        </div>

        {/* 4 Bold Hero Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpis.map((kpi, idx) => (
            <ScrollReveal key={kpi.label} delay={idx * 0.08}>
              <div className="p-8 rounded-3xl bg-[#FAF9FF] border border-[#6853A5]/12 hover:border-violet-primary/40 hover:bg-white hover:shadow-xl transition-all duration-300 space-y-2">
                <div className="font-serif text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-deep font-bold tracking-tight">
                  {kpi.value}
                </div>
                <h4 className="text-sm font-semibold text-text-primary pt-1">
                  {kpi.label}
                </h4>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {kpi.detail}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Qualitative Standards Bar */}
        <ScrollReveal delay={0.3}>
          <div className="p-6 rounded-2xl bg-surface-lavender/50 border border-white text-xs text-text-secondary flex flex-wrap items-center justify-between gap-4">
            <span className="font-medium text-text-primary">
              Empirical Success Metrics:
            </span>
            <span>Turnaround Time Acceleration</span>
            <span>â€¢</span>
            <span>Manual Entry Elimination</span>
            <span>â€¢</span>
            <span>Deterministic Audit Trails</span>
            <span>â€¢</span>
            <span>High User NPS</span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};