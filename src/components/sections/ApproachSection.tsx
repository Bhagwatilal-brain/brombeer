import React from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';
import { Button } from '../ui/Button';
import { ArrowRight } from 'lucide-react';
import { ApproachStepVisual } from './approach/ApproachStepVisuals';

interface JourneyStep {
  number: string;
  stepLabel: string;
  name: string;
  description: string;
  chips: [string, string];
  cardBg: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: '01',
    stepLabel: 'Step 01',
    name: 'Discover',
    description:
      'We understand your business goals, operational challenges, users, available data, and existing technology environment.',
    chips: ['Business audit', 'Data & workflow review'],
    cardBg: 'bg-[#EAE4FF]',
  },
  {
    number: '02',
    stepLabel: 'Step 02',
    name: 'Define',
    description:
      'We prioritize the right use-case, assess feasibility, identify risks, and establish measurable success criteria.',
    chips: ['Use-case priority', 'Feasibility & ROI'],
    cardBg: 'bg-[#F2EDFF]',
  },
  {
    number: '03',
    stepLabel: 'Step 03',
    name: 'Design',
    description:
      'We select an appropriate technical approach, define solution architecture, and plan for security, integration, and oversight.',
    chips: ['AI architecture', 'Security & oversight'],
    cardBg: 'bg-[#E9E4FF]',
  },
  {
    number: '04',
    stepLabel: 'Step 04',
    name: 'Build',
    description:
      'We develop and test the AI solution, validate its performance, and refine the experience with stakeholder feedback.',
    chips: ['Model engineering', 'Validation & QA'],
    cardBg: 'bg-[#F3EEFF]',
  },
  {
    number: '05',
    stepLabel: 'Step 05',
    name: 'Integrate',
    description:
      'We connect the solution seamlessly to approved enterprise systems, data sources, and daily business workflows.',
    chips: ['API connectors', 'Workflow deployment'],
    cardBg: 'bg-[#EBE7FF]',
  },
  {
    number: '06',
    stepLabel: 'Step 06',
    name: 'Improve',
    description:
      'We evaluate live performance, monitor relevant risks, and identify opportunities for continued optimization.',
    chips: ['Live telemetry', 'Continuous tuning'],
    cardBg: 'bg-[#F1ECFF]',
  },
];

export const ApproachSection: React.FC = () => {
  return (
    <section
      id="how-we-work"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#FAF9FF] text-[#111014] overflow-x-clip"
    >
      <Container size="default" className="relative z-10">
        {/* Centered Header (matching reference structure in Brombeer AI theme) */}
        <div className="w-full text-center mb-14 sm:mb-16 lg:mb-20">
          <ScrollTextReveal
            align="center"
            eyebrow="How we work"
            eyebrowClassName="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#EFEAFF] border border-[#7650E8]/20 text-[#7650E8] text-xs font-semibold tracking-wide mb-4"
            title="From AI Opportunity to Operational Impact"
            highlightWords={['Operational', 'Impact']}
            titleClassName="text-3xl sm:text-4xl lg:text-[46px] font-sans font-extrabold text-[#161224] tracking-[-0.03em] leading-[1.15] mb-3.5 max-w-2xl mx-auto"
            description="Six structured phases, one dedicated team, and a clear roadmap you approve before anything scales."
            descriptionClassName="text-[#665D82] text-sm sm:text-[15.5px] leading-relaxed max-w-xl mx-auto font-normal"
            maxWidth="max-w-3xl mx-auto"
          />
        </div>

        {/* Alternating 2-Column Zig-Zag Process Rows with Center Winding Dotted S-Curve */}
        <div className="max-w-5xl mx-auto flex flex-col gap-10 md:gap-12">
          {JOURNEY_STEPS.map((step, idx) => {
            const isTextLeft = idx % 2 === 0;
            const isLast = idx === JOURNEY_STEPS.length - 1;
            // Alternate S-curve bow direction: right on even steps, left on odd steps
            const curvePath = isTextLeft
              ? 'M 48 0 C 90 65, 90 195, 48 260'
              : 'M 48 0 C 6 65, 6 195, 48 260';

            const TextCard = (
              <div
                className={`${step.cardBg} rounded-[24px] p-7 sm:p-8 lg:p-9 min-h-[215px] sm:min-h-[235px] flex flex-col justify-center border border-[#7650E8]/10 transition-transform duration-300 hover:-translate-y-1`}
              >
                {/* Step Pill */}
                <span className="inline-flex w-fit px-3 py-1 rounded-full bg-white text-[#7650E8] text-[11px] font-semibold tracking-wide shadow-[0_2px_8px_rgba(118,80,232,0.08)] mb-3.5">
                  {step.stepLabel}
                </span>

                {/* Step Heading */}
                <h3 className="font-sans text-2xl sm:text-[26px] font-extrabold text-[#161224] tracking-tight leading-tight mb-2">
                  {step.name}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-[13.5px] font-dm text-[#5B5472] leading-relaxed mb-5 max-w-md">
                  {step.description}
                </p>

                {/* Two White Keyword Chips */}
                <div className="flex flex-wrap gap-2">
                  {step.chips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-white text-[#1E1142] text-[11.5px] font-semibold shadow-[0_2px_8px_rgba(118,80,232,0.06)] border border-[#7650E8]/8"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            );

            const VisualCard = (
              <div className="h-[215px] sm:h-[235px] w-full rounded-[24px] border border-[#7650E8]/12 transition-transform duration-300 hover:-translate-y-1">
                <ApproachStepVisual stepIndex={idx} />
              </div>
            );

            return (
              <ScrollReveal key={step.number} delay={idx * 0.06}>
                <div className="relative grid grid-cols-1 md:grid-cols-[1fr_96px_1fr] gap-5 md:gap-0 items-center">
                  {/* Mobile Step Badge */}
                  <div className="flex md:hidden items-center gap-3 -mb-1">
                    <span className="w-9 h-9 rounded-full bg-[#7650E8] text-white font-sans font-bold text-xs flex items-center justify-center shadow-[0_6px_16px_-4px_rgba(118,80,232,0.5)]">
                      {step.number}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#7650E8] font-semibold">
                      {step.stepLabel} — {step.name}
                    </span>
                  </div>

                  {/* LEFT SLOT */}
                  <div className="w-full">{isTextLeft ? TextCard : VisualCard}</div>

                  {/* CENTER TIMELINE NODE + WINDING DOTTED S-CURVE (Desktop) */}
                  <div className="hidden md:flex relative items-center justify-center h-full">
                    {/* Winding Dotted S-Curve to Next Node */}
                    {!isLast && (
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 96 260"
                        preserveAspectRatio="none"
                        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 w-[96px] h-[calc(100%+3rem)] z-0 overflow-visible"
                      >
                        <path
                          d={curvePath}
                          fill="none"
                          stroke="#7650E8"
                          strokeOpacity="0.6"
                          strokeWidth="3.2"
                          strokeDasharray="1 13"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}

                    {/* Solid Brand-Violet Step Circle */}
                    <div className="relative z-10 w-11 h-11 rounded-full bg-[#7650E8] text-white font-sans font-bold text-sm flex items-center justify-center shadow-[0_8px_22px_-4px_rgba(118,80,232,0.55)] ring-4 ring-[#FAF9FF]">
                      {step.number}
                    </div>
                  </div>

                  {/* RIGHT SLOT */}
                  <div className="w-full">{isTextLeft ? VisualCard : TextCard}</div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Centered CTA */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <Button
            href="/approach"
            variant="secondary"
            size="sm"
            textRoll
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start Your AI Journey
          </Button>
        </div>
      </Container>
    </section>
  );
};
