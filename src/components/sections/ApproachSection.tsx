import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface JourneyStep {
  number: string;
  displayNumber: string;
  name: string;
  description: string;
}

const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: '01',
    displayNumber: '0 1',
    name: 'Discover',
    description: 'We understand your business goals, operational challenges, users, available data, and existing technology environment.',
  },
  {
    number: '02',
    displayNumber: '0 2',
    name: 'Define',
    description: 'We prioritize the right use-case, assess feasibility, identify risks, and establish success criteria.',
  },
  {
    number: '03',
    displayNumber: '0 3',
    name: 'Design',
    description: 'We select an appropriate technical approach, define the solution architecture, and plan for security, integration, and human oversight.',
  },
  {
    number: '04',
    displayNumber: '0 4',
    name: 'Build',
    description: 'We develop and test the AI solution, validate its performance, and refine the experience with stakeholder feedback.',
  },
  {
    number: '05',
    displayNumber: '0 5',
    name: 'Integrate',
    description: 'We connect the solution to approved systems, data sources, and business workflows.',
  },
  {
    number: '06',
    displayNumber: '0 6',
    name: 'Improve',
    description: 'We evaluate performance, monitor relevant risks, and identify opportunities for continued optimization.',
  },
];

export const ApproachSection: React.FC = () => {
  // Current active progress step (0 to 5)
  const [activeStep, setActiveStep] = useState(1); // default active at 02 like in the close-up crop
  const [isManual, setIsManual] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [lineFillHeight, setLineFillHeight] = useState<number>(0);

  // Automatically advance running flow every 2.4s if user is not hovering
  useEffect(() => {
    if (isManual) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % JOURNEY_STEPS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [isManual]);

  // Recalculate filled line height down to the active step dot
  useEffect(() => {
    const updateLineFill = () => {
      const activeEl = stepRefs.current[activeStep];
      const timelineEl = timelineRef.current;
      if (activeEl && timelineEl) {
        const timelineTop = timelineEl.getBoundingClientRect().top;
        const dotCenter = activeEl.getBoundingClientRect().top + 9; // center of 14px dot (top 2px + 7px radius)
        const relativeTop = Math.max(0, dotCenter - timelineTop);
        setLineFillHeight(relativeTop);
      }
    };

    updateLineFill();
    window.addEventListener('resize', updateLineFill);
    return () => window.removeEventListener('resize', updateLineFill);
  }, [activeStep]);

  return (
    <section
      id="how-we-work"
      className="relative py-14 sm:py-20 lg:py-24 text-white overflow-hidden select-none"
      style={{
        background: `
          radial-gradient(circle at 86% 22%, #432CA5 0%, #362281 26%, #2B1962 45%, #261555 60%, #1E1142 80%, #140A2E 100%),
          linear-gradient(180deg, #211249 0%, #1A0E3C 45%, #120B2A 100%)
        `,
      }}
    >
      {/* Top-Right Luminous Indigo Atmosphere Bloom (sampled from image) */}
      <div
        className="absolute right-0 top-0 w-[72%] h-[75%] pointer-events-none opacity-90"
        style={{
          background: 'radial-gradient(circle at 85% 20%, rgba(67, 44, 165, 0.85) 0%, rgba(54, 34, 129, 0.5) 35%, rgba(38, 21, 85, 0.2) 65%, transparent 80%)',
          filter: 'blur(50px)',
        }}
      />

      {/* Left Deep Plum Ambient Atmosphere */}
      <div
        className="absolute -left-20 top-1/4 w-[500px] h-[500px] pointer-events-none opacity-35"
        style={{
          background: 'radial-gradient(circle, rgba(33, 18, 73, 0.85) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 self-start space-y-6">
            <ScrollTextReveal
              eyebrow="HOW WE WORK"
              eyebrowClassName="text-[11px] sm:text-xs font-mono tracking-[0.24em] text-[#A69FBA]"
              title="From AI Opportunity to Operational Impact"
              titleClassName="text-2xl sm:text-3xl lg:text-[2.25rem] font-serif text-[#F2F2F8] tracking-tight leading-[1.2] max-w-[340px] font-normal"
              maxWidth="max-w-[380px]"
              action={
                <a
                  href="/approach"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#7B6BB2]/50 bg-white/[0.03] hover:bg-white/[0.09] hover:border-[#C3B5FC] text-[#D8D2EB] hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 backdrop-blur-sm group"
                >
                  <span>Start Your AI Journey</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C3B5FC] transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              }
            />
          </div>

          {/* Right Column: Timeline & Running Flow */}
          <div className="lg:col-span-7 relative pl-1 sm:pl-3">
            
            {/* Timeline Track Container with top extension */}
            <div ref={timelineRef} className="relative pt-6 pb-6">
              
              {/* 1. Base Inactive Vertical Line (2px wide, Exact Sampled Hex: #493A76) */}
              <div
                className="absolute left-[6px] top-0 bottom-0 w-[2px] pointer-events-none"
                style={{
                  backgroundColor: '#493A76',
                }}
              />

              {/* 2. Active Running Filled Line (2px wide, Exact Sampled Hex: #C3B5FC) */}
              <motion.div
                className="absolute left-[6px] top-0 w-[2px] pointer-events-none"
                style={{
                  backgroundColor: '#C3B5FC',
                }}
                animate={{
                  height: lineFillHeight,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 80,
                  damping: 20,
                }}
              />

              {/* 6 Sequential Timeline Steps */}
              <div className="space-y-12 sm:space-y-14 lg:space-y-16">
                {JOURNEY_STEPS.map((step, idx) => {
                  const isPassedOrActive = idx <= activeStep;
                  const isCurrentActive = idx === activeStep;

                  return (
                    <ScrollReveal key={step.number} delay={idx * 0.05}>
                      <div
                        ref={(el) => (stepRefs.current[idx] = el)}
                        onMouseEnter={() => {
                          setIsManual(true);
                          setActiveStep(idx);
                        }}
                        onMouseLeave={() => {
                          setIsManual(false);
                        }}
                        onClick={() => {
                          setActiveStep(idx);
                          setIsManual(true);
                        }}
                        className="relative pl-14 sm:pl-16 group cursor-pointer transition-all duration-300"
                      >
                        {/* Solid Circular Point / Dot Sitting Exactly Centered on Line (Width 14px, Center at 7px, Line at 6-8px) */}
                        <div
                          className={`absolute left-0 top-[2px] w-[14px] h-[14px] rounded-full bg-[#C3B5FC] transition-all duration-300 ${
                            isPassedOrActive
                              ? 'opacity-100'
                              : 'opacity-75 group-hover:opacity-100'
                          }`}
                        />

                        {/* Step Content */}
                        <div className="space-y-2">
                          {/* Step Number: "0 1", "0 2", etc. (Horizontally level with the dot, Spaced format) */}
                          <span
                            className={`text-[12px] sm:text-[13px] font-mono tracking-[0.25em] block leading-snug transition-colors duration-300 ${
                              isPassedOrActive ? 'text-[#C3B5FC] font-semibold' : 'text-[#A69FBA]'
                            }`}
                          >
                            {step.displayNumber}
                          </span>

                          {/* Step Title in Editorial Serif font (Exact Sampled Hex: #F2F2F8) */}
                          <h3
                            className={`text-2xl sm:text-3xl lg:text-[2.2rem] font-serif tracking-tight leading-tight font-normal transition-all duration-300 ${
                              isPassedOrActive
                                ? 'text-white'
                                : 'text-[#F2F2F8] group-hover:text-white'
                            }`}
                          >
                            {step.name}
                          </h3>

                          {/* Step Description (Exact Sampled Hex: #8F85B1) */}
                          <p
                            className={`text-xs sm:text-sm leading-relaxed max-w-lg font-light transition-colors duration-300 ${
                              isPassedOrActive ? 'text-[#D8D2EB]' : 'text-[#8F85B1] group-hover:text-[#B8B0D2]'
                            }`}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};