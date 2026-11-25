import React from 'react';
import Timeline, { JourneyItem } from '../../ui/timeline';
import { Container } from '../../layout/Container';
import { ScrollTextReveal } from '../../animations/ScrollTextReveal';
import { Sparkles } from 'lucide-react';

const outcomeMetricsVisual = '/images/our_approach/outcome-metrics-dashboard.jpg';

const outcomeTopMetrics: JourneyItem[] = [
  {
    id: 'turnaround-time',
    year: '01',
    month: 'Turnaround Time',
    content:
      'Time required to complete an end-to-end operational workflow, benchmarked and reduced by up to 75%.',
  },
  {
    id: 'extraction-accuracy',
    year: '03',
    month: 'Extraction Accuracy',
    content:
      'Verified 95%+ precision across diverse unstructured documents, scans, complex tables, and legacy archives.',
  },
  {
    id: 'forecast-precision',
    year: '05',
    month: 'Forecast Precision',
    content:
      'Quantifiable reduction in demand variance and inventory forecasting error under high market volatility.',
  },
  {
    id: 'uptime-latency',
    year: '07',
    month: 'Uptime & Latency',
    content:
      'Mission-critical enterprise SLAs with deterministic sub-80ms edge inference and verified zero data drift.',
  },
];

const outcomeBottomMetrics: JourneyItem[] = [
  {
    id: 'manual-effort',
    year: '02',
    month: 'Manual Effort',
    content:
      'Substantial elimination of repetitive keystrokes with auditable human-in-the-loop review checkpoints.',
  },
  {
    id: 'factual-reliability',
    year: '04',
    month: 'Factual Reliability',
    content:
      'Answer relevance grounded with 100% strict citations in verified enterprise repositories with zero hallucinations.',
  },
  {
    id: 'cost-per-task',
    year: '06',
    month: 'Cost Per Task',
    content:
      'Predictable, controlled sub-cent compute expenditure per completed business transaction with zero runaway overhead.',
  },
];

export const ApproachOutcomeTimelineSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#FAF9FF] border-y border-[#6853A5]/12 overflow-hidden">
      {/* Background Soft Accents */}
      <div className="absolute top-12 left-1/4 w-96 h-96 rounded-full bg-violet-200/20 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-12 right-1/4 w-96 h-96 rounded-full bg-indigo-200/20 blur-[130px] pointer-events-none" />

      {/* Header Block with Editorial Context */}
      <div className="pt-16 sm:pt-20 pb-8 sm:pb-12 text-center relative z-10">
        <Container size="default">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#6853A5]/20 shadow-xs text-xs font-semibold text-violet-primary mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-primary" />
            <span className="font-mono uppercase text-[11px] tracking-wider">
              OUTCOME-FOCUSED METRICS · EMPIRICAL EVALUATION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.12] mb-3.5 max-w-3xl mx-auto">
            Define Outcomes Before{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary via-[#6366F1] to-violet-deep">
              Measuring Results.
            </span>
          </h2>

          <p className="text-text-secondary text-[14.5px] sm:text-[16px] leading-relaxed font-normal max-w-2xl mx-auto">
            Success measures depend on the business problem. We work with stakeholders to select metrics that are relevant, measurable, and realistic before any model scales into production.
          </p>
        </Container>
      </div>

      {/* Pinned Horizontal Scroll Timeline with SplitText Kinetic Reveals */}
      <div className="relative w-full">
        <Timeline
          title="Empirical Measurement Framework"
          periodLabel="KPIs & Verification Gates"
          textColor="#111014"
          mutedTextColor="#554F68"
          activeColor="#7650E8"
          backgroundColor="#FAF9FF"
          imageUrl={outcomeMetricsVisual}
          imageAlt="Brombeer AI Outcome Metrics Analytics Dashboard"
          duration={1.2}
          topJourneyData={outcomeTopMetrics}
          bottomJourneyData={outcomeBottomMetrics}
        />
      </div>
    </section>
  );
};

export default ApproachOutcomeTimelineSection;
