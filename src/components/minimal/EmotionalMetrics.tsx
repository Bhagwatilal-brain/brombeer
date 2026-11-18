import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SlidingNumber } from '../ui/SlidingNumber';
import { cn } from '../../lib/utils';

interface MetricItem {
  value: string;
  label: string;
  desc: string;
}

const METRICS: MetricItem[] = [
  {
    value: '95%',
    label: 'Factual Grounding',
    desc: 'Precise extraction from noisy documents',
  },
  {
    value: '38ms',
    label: 'Thought Latency',
    desc: 'Real-time responsive intelligence',
  },
  {
    value: '0',
    label: 'Data Leakage',
    desc: 'Absolute tenant & sovereign isolation',
  },
  {
    value: '100%',
    label: 'Human Command',
    desc: 'Consequential decisions stay in your hands',
  },
];

// Dashed border dividers between columns to match the reference layout
const COLUMN_BORDER_CLASSES = [
  'border-b sm:border-b lg:border-b-0 border-r-0 sm:border-r border-dashed border-[#6853A5]/25',
  'border-b sm:border-b lg:border-b-0 lg:border-r border-dashed border-[#6853A5]/25',
  'border-b sm:border-b-0 border-r-0 sm:border-r lg:border-r border-dashed border-[#6853A5]/25',
  'border-0',
];

export const EmotionalMetrics: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      ref={sectionRef}
      className="w-full relative overflow-hidden select-none"
    >
      {/* Full-Width Continuous Blueprint/Technical Metric Frame with Dashed Borders */}
      <div className="w-full border-y border-dashed border-[#6853A5]/25 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.65,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={cn(
                'group relative p-8 sm:p-10 md:p-12 xl:px-14 flex flex-col justify-between min-h-[180px] sm:min-h-[210px] transition-colors duration-300 hover:bg-[#FAF9FF]/60 cursor-default',
                COLUMN_BORDER_CLASSES[idx]
              )}
            >
              {/* Top Row: Big Number & Suffix + 4-Bar Technical Indicator */}
              <div className="flex items-center justify-between gap-3">
                <div className="font-sans font-bold text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight leading-none">
                  <SlidingNumber
                    value={m.value}
                    trigger={isInView}
                    delay={0.15 + idx * 0.12}
                    digitClass="text-[#111014] font-bold"
                    suffixClass="text-violet-primary font-bold ml-0.5"
                  />
                </div>

                {/* Technical 4-Bar Indicator: index bar highlighted in brand violet */}
                <div
                  className="flex items-center gap-[3px] sm:gap-1 flex-shrink-0"
                  aria-hidden="true"
                >
                  {[0, 1, 2, 3].map((barIdx) => {
                    const isHighlighted = barIdx === idx;
                    return (
                      <span
                        key={barIdx}
                        className={cn(
                          'w-[2.5px] rounded-full transition-all duration-300',
                          isHighlighted
                            ? 'h-4 sm:h-5 bg-violet-primary shadow-sm shadow-violet-primary/30'
                            : 'h-3 sm:h-3.5 bg-[#6853A5]/20 group-hover:bg-[#6853A5]/35'
                        )}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Bottom Row: Label (Uppercase) & Detailed Description */}
              <div className="pt-6 sm:pt-8 text-left space-y-1">
                <h4 className="font-sans text-[11px] sm:text-xs font-bold text-[#111014] tracking-wider uppercase transition-colors group-hover:text-violet-primary">
                  {m.label}
                </h4>
                <p className="text-xs text-text-secondary/70 font-normal leading-relaxed line-clamp-2">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmotionalMetrics;
