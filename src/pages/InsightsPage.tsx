import React from 'react';
import { Container } from '../components/layout/Container';
import { INSIGHTS } from '../data/insights';
import { InsightCard } from '../components/cards/InsightCard';
import { InsightsHeroSection } from '../components/sections/insights/InsightsHeroSection';
import { ArrowRight, BookOpen, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { CTA3DScene } from '../components/animations/CTA3DScene';

export const InsightsPage: React.FC = () => {
  return (
    <div className="bg-background relative overflow-x-clip pb-20">
      {/* 1. Atmospheric Hero Section with Interactive 3D Neural Research Core */}
      <InsightsHeroSection />

      {/* 2. Research Papers & Articles Grid */}
      <section id="insights-articles" className="pt-16 sm:pt-20 scroll-mt-12">
        <Container size="wide">
          {/* Section Header */}
          <div className="mb-10 pb-6 border-b border-[#E9E4F5]">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-lavender text-violet-primary text-xs font-semibold font-mono uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>TECHNICAL PAPERS & FIELD REPORTS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-sans font-extrabold text-text-primary tracking-tight">
                All Research Papers
              </h2>
            </div>
          </div>

          {/* Grid of 4 Inline Articles */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {INSIGHTS.map((article) => (
                <motion.div
                  layout
                  key={article.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                >
                  <InsightCard article={article} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>

      {/* 3. Bottom Consultation / Research Newsletter CTA with Real-Time 3D WebGL Background */}
      <section className="pt-20 sm:pt-28">
        <Container>
          <div className="rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-b from-[#F6F3FE] via-[#F0EAFB] to-[#F7F4FD] border border-[#6853A5]/20 p-8 sm:p-12 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(118,80,232,0.12)]">
            {/* Top purple glowing hairline accent */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-80" />

            {/* Professional Real-time 3D Interactive Scene (Neural Wave + Floating Glass Knot + Gyroscopic Core) */}
            <CTA3DScene className="opacity-95" />

            {/* Soft Radial Vignette Mask to protect center readability */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_75%_at_50%_50%,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.45)_55%,transparent_100%)] pointer-events-none" />

            {/* Soft atmospheric gradient halos on outer bounds */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/70 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-violet-light/25 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#6853A5]/20 text-xs font-semibold text-violet-primary shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-violet-primary" />
                <span className="font-mono uppercase tracking-wider text-[11px]">
                  BROMBEER AI BRIEFINGS
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.1]">
                Subscribe to Architectural Briefings & Field Reports
              </h2>

              <p className="text-text-secondary text-sm sm:text-base font-dm max-w-xl mx-auto leading-relaxed">
                Receive practical blueprints, sovereign AI governance updates, and technical benchmarks directly in your inbox once a month.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your enterprise email"
                  className="w-full px-4 py-3 rounded-full bg-white/90 border border-[#6853A5]/20 text-[#111014] placeholder-[#666371]/60 text-sm focus:outline-none focus:ring-2 focus:ring-violet-primary shadow-xs backdrop-blur-sm"
                />
                <Button
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shrink-0 shadow-lg shadow-violet-primary/25"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default InsightsPage;
