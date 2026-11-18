import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import { Container } from '../../layout/Container';
import { Button } from '../../ui/Button';

export const IndustryCTASection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-[#E6DCFA]/40 via-[#EDE7FB]/30 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      <Container>
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#F5F0FD] via-[#ECE5FA] to-[#F7F3FD] border border-[#DDD3F5] p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl shadow-violet-primary/10">
          {/* Top glowing ambient gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-violet-primary to-transparent" />

          {/* Background Decorative Prisms */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-violet-light/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/60 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-violet-primary/20 shadow-xs text-xs font-semibold text-violet-primary">
              <Sparkles className="w-3.5 h-3.5 text-violet-primary" />
              <span className="font-mono uppercase text-[11px] tracking-wider">
                COMMENCE SECTOR CONSULTATION
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-extrabold text-[#111014] tracking-[-0.035em] leading-[1.12]">
              Your Sector Has Unique Constraints.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary via-[#845BF5] to-violet-deep">
                Your AI Architecture Must Reflect Them.
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-text-secondary text-sm sm:text-base md:text-lg font-dm leading-relaxed max-w-2xl mx-auto">
              Schedule an architecture discovery session with Brombeer’s sector systems specialists. We’ll map out your security perimeters, legacy data integrations, and proof-of-concept timelines.
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Button
                asLink
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-xl shadow-violet-primary/25"
              >
                Discuss Your Industry Needs
              </Button>

              <Button
                asLink
                href="/solutions"
                variant="secondary"
                size="lg"
                className="bg-white/80 border-[#111014]/20 hover:border-violet-primary hover:bg-white"
              >
                Browse AI Solutions Matrix
              </Button>
            </div>

            {/* Operational Reassurance Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-[#DECFF5] text-xs font-mono text-[#555261]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-primary" />
                <span>NDA & Data Privacy Guaranteed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-violet-primary" />
                <span>Air-Gapped Deployment Verified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-violet-primary" />
                <span>Zero Model Training on Client Data</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

