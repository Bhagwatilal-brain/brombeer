import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Sparkles, CheckCircle2 } from 'lucide-react';

export const InteractiveFlow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      num: '01',
      title: 'Sense',
      sub: 'Ingesting fragmented knowledge',
      icon: Database,
      detail: 'Connecting internal wikis, ERP documents, and sensor data with user-level security boundaries.',
    },
    {
      num: '02',
      title: 'Reason',
      sub: 'Verifying factual grounding',
      icon: Sparkles,
      detail: 'Calibrating confidence and checking policy guardrails before a single statement is formulated.',
    },
    {
      num: '03',
      title: 'Deliver',
      sub: 'Executing verified actions',
      icon: CheckCircle2,
      detail: 'Writing clean updates into business systems with source citations and human managerial sign-off.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-background relative overflow-hidden">
      <Container size="narrow">
        <div className="text-center space-y-4 mb-14">
          <ScrollReveal>
            <span className="eyebrow block">KINETIC FLOW</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-text-primary tracking-tight">
              How the Mind Moves.
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary/70 font-light max-w-md mx-auto">
              Three seamless movements turning raw organizational data into purposeful action.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Step Interactive Selector */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
          {steps.map((st, i) => {
            const isActive = activeStep === i;
            return (
              <button
                key={st.num}
                onClick={() => setActiveStep(i)}
                className={`p-4 sm:p-6 rounded-3xl transition-all duration-300 text-center border relative ${
                  isActive
                    ? 'bg-white border-violet-primary/40 shadow-xl shadow-violet-primary/10 ring-1 ring-violet-primary/20'
                    : 'bg-[#FAF9FF] border-white hover:bg-white text-text-secondary'
                }`}
              >
                <span className={`text-[11px] font-mono block mb-1 ${isActive ? 'text-violet-primary' : 'text-text-secondary/60'}`}>
                  {st.num}
                </span>
                <span className={`font-sans text-lg sm:text-xl font-bold block ${isActive ? 'text-text-primary' : 'text-text-secondary'}`}>
                  {st.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Ethereal Frosted Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="p-8 sm:p-10 rounded-[2.5rem] bg-gradient-to-b from-white via-white to-surface-lavender/30 border border-white shadow-xl shadow-violet-primary/5 text-center space-y-4"
          >
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-surface-lavender text-violet-primary border border-violet-light/30">
              {steps[activeStep].sub}
            </span>
            <p className="text-sm sm:text-base font-dm text-text-secondary font-normal max-w-lg mx-auto leading-relaxed">
              {steps[activeStep].detail}
            </p>
            <div className="pt-2 text-[11px] font-mono text-text-secondary/60">
              Response Speed: 38ms â€¢ Zero Hallucination Gate Active
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};