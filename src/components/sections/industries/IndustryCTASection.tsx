import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import { Button } from '../../ui/Button';
import { CTA3DScene } from '../../animations/CTA3DScene';

export const IndustryCTASection: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-[1380px] mx-auto rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-b from-[#F6F3FE] via-[#F0EAFB] to-[#F7F4FD] border border-[#6853A5]/20 p-8 sm:p-12 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(118,80,232,0.12)]">
        {/* Top purple glowing hairline accent */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-80" />

        {/* Professional Real-time 3D Interactive Scene (Neural Wave Surface + Particles) */}
        <CTA3DScene className="opacity-95" />

        {/* Soft Radial Vignette Mask to protect center readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_75%_at_50%_50%,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.45)_55%,transparent_100%)] pointer-events-none" />

        {/* Soft atmospheric gradient halos on outer bounds */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/70 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-violet-light/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-7">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#6853A5]/20 shadow-xs text-xs font-semibold text-violet-primary backdrop-blur-sm">
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
              className="shadow-xl shadow-violet-primary/25 hover:scale-105 transition-transform"
            >
              Discuss Your Industry Needs
            </Button>
          </div>

          {/* Operational Reassurance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-6 border-t border-[#6853A5]/15 text-xs font-mono text-[#555261]">
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
    </section>
  );
};

