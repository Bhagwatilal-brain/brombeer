import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Landmark,
  ShieldCheck,
  HeartPulse,
  Truck,
  Factory,
  Users,
} from 'lucide-react';
import { Container } from '../../layout/Container';
import { Button } from '../../ui/Button';

interface SectorNavPill {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  hoverThemeBg: string;
}

const SECTOR_PILLS: SectorNavPill[] = [
  {
    id: 'government',
    name: 'Government & Public',
    icon: Landmark,
    hoverThemeBg: 'bg-gradient-to-tr from-[#6542E0] to-[#8E6DF8] shadow-md shadow-[#7650E8]/35',
  },
  {
    id: 'defence-security',
    name: 'Defence & Security',
    icon: ShieldCheck,
    hoverThemeBg: 'bg-gradient-to-tr from-[#7650E8] to-[#9E7DFF] shadow-md shadow-[#7650E8]/35',
  },
  {
    id: 'healthcare',
    name: 'Healthcare Operations',
    icon: HeartPulse,
    hoverThemeBg: 'bg-gradient-to-tr from-[#5830D4] to-[#8460F6] shadow-md shadow-[#7650E8]/35',
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply',
    icon: Truck,
    hoverThemeBg: 'bg-gradient-to-tr from-[#6F43EA] to-[#9773FF] shadow-md shadow-[#7650E8]/35',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Ops',
    icon: Factory,
    hoverThemeBg: 'bg-gradient-to-tr from-[#6542E0] to-[#8E6DF8] shadow-md shadow-[#7650E8]/35',
  },
  {
    id: 'enterprise-services',
    name: 'Enterprise Services',
    icon: Users,
    hoverThemeBg: 'bg-gradient-to-tr from-[#7650E8] to-[#9E7DFF] shadow-md shadow-[#7650E8]/35',
  },
];

export const IndustriesHeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Smooth parallax transformations
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const floatingOrbY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  const scrollToSector = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={containerRef} className="relative pt-6 sm:pt-10 lg:pt-14 pb-12 sm:pb-16 overflow-hidden bg-background">
      {/* Dynamic Parallax Background Orbs & Gradients */}
      <motion.div
        style={{ y: yBg }}
        className="absolute -top-24 right-0 w-[550px] h-[550px] bg-gradient-to-br from-[#E8DEFC]/50 via-[#EDE7FB]/25 to-transparent rounded-full blur-[100px] pointer-events-none -z-10"
      />
      <motion.div
        style={{ y: floatingOrbY }}
        className="absolute top-1/3 -left-36 w-[420px] h-[420px] bg-[#FAF5FE]/70 rounded-full blur-[90px] pointer-events-none -z-10"
      />

      <Container>
        <motion.div style={{ opacity: opacityHero }} className="space-y-8 sm:space-y-10">
          {/* Main Hero Header */}
          <div className="max-w-4xl space-y-5 sm:space-y-6">
            {/* Pill Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF9FF] border border-[#6853A5]/20 shadow-sm text-xs font-semibold text-violet-primary"
            >
              <span className="w-2 h-2 rounded-full bg-violet-primary animate-pulse" />
              <span className="tracking-wide uppercase font-mono text-[11px]">Mission-Critical Sector AI</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-sans font-extrabold text-text-primary tracking-[-0.035em] leading-[1.05]"
            >
              AI Engineered for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary via-[#8B65F8] to-violet-deep">
                High-Stakes Reality.
              </span>
            </motion.h1>

            {/* Subtitle (Short & Punchy) */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-text-secondary text-base sm:text-lg md:text-xl font-dm leading-relaxed max-w-2xl"
            >
              Bespoke, domain-grounded intelligence deployed directly inside your operational perimeter with zero data leakage.
            </motion.p>

            {/* CTA Action Row */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                asLink
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Schedule Industry Consultation
              </Button>

              <button
                onClick={() => {
                  const bento = document.getElementById('bento-grid');
                  bento?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#111014]/20 hover:border-violet-primary hover:bg-[#FAF9FF] text-[#111014] text-sm font-semibold transition-all duration-200 shadow-sm"
              >
                <span>Explore Bento Architecture</span>
                <span className="text-xs text-violet-primary font-mono">↓</span>
              </button>
            </motion.div>
          </div>

          {/* Interactive Sector Selector: Clean Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="pt-2"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-medium text-[#666371] uppercase tracking-wider">
                Select an Operational Sector:
              </span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-violet-primary">
                Click to jump to architecture ↓
              </span>
            </div>

            {/* Responsive 6-Col Grid with Dual-Layer Grayish Dull to Theme Hover Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 py-1">
              {SECTOR_PILLS.map((pill) => {
                const Icon = pill.icon;
                return (
                  <button
                    key={pill.id}
                    onClick={() => scrollToSector(pill.id)}
                    className="group relative flex items-center gap-2.5 px-3 py-2.5 rounded-2xl bg-white border border-[#E9E4F5] hover:border-violet-primary/50 hover:bg-[#FAF8FE] shadow-[0_4px_16px_-4px_rgba(118,80,232,0.06)] hover:shadow-xl hover:shadow-violet-primary/14 hover:-translate-y-1 transition-all duration-300 text-left w-full overflow-hidden"
                  >
                    {/* Top purple indicator line on hover */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Dual-Layer Symbol: Initially grayish-dull, on hover website theme colors */}
                    <div className="relative w-8 h-8 rounded-full flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {/* 1. Initial State: Grayish dull circle with muted icon */}
                      <div className="absolute inset-0 rounded-full bg-[#EDE8F5]/90 border border-[#D6CEE4] flex items-center justify-center shadow-xs transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                        <Icon className="w-4 h-4 text-[#8E869E] transition-colors duration-300" />
                      </div>

                      {/* 2. Hovered State: Our website theme colors (violet gradient + white icon & purple glow) */}
                      <div className={`absolute inset-0 rounded-full ${pill.hoverThemeBg} border-2 border-white/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-semibold text-[#111014] group-hover:text-violet-primary transition-colors leading-tight">
                        {pill.name}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
