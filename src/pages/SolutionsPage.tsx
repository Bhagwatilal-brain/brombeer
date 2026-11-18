import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { ArrowRight, ShieldCheck, Zap, Lock, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SolutionsBentoGrid } from '../components/sections/solutions/SolutionsBentoGrid';
import { SolutionFinderWidget } from '../components/sections/solutions/SolutionFinderWidget';
import { SolutionsDetailedSection } from '../components/sections/solutions/SolutionsDetailedSection';

export const SolutionsPage: React.FC = () => {
  return (
    <div className="bg-background relative overflow-hidden">
      {/* 1. Enhanced Hero Section with Telemetry & Floating Badges (Tightened top spacing) */}
      <section className="relative pt-4 sm:pt-6 lg:pt-8 pb-10 sm:pb-14">
        {/* Background Decorative Blur Spheres */}
        <div className="absolute -top-16 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#E2D9F8]/40 via-[#EDE7FB]/25 to-transparent rounded-full blur-[90px] pointer-events-none -z-10" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#FAF6FE]/60 rounded-full blur-3xl pointer-events-none -z-10" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Hero Column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9FF] border border-[#6853A5]/18 text-xs font-semibold text-violet-primary">
                <span className="w-2 h-2 rounded-full bg-violet-primary animate-pulse" />
                <span>ENTERPRISE CAPABILITIES</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold text-text-primary tracking-[-0.03em] leading-[1.05]">
                AI Solutions Built{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary via-[#8B65F8] to-violet-deep">
                  Around Your Business.
                </span>
              </h1>

              <p className="text-text-secondary text-base sm:text-lg font-dm leading-relaxed max-w-2xl">
                From private language models and autonomous agents to predictive machine learning and computer vision, Brombeer AI designs, integrates, and governs production-grade intelligence tailored to your operational workflows.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  asLink
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Discuss Your Requirements
                </Button>

                <Button
                  asLink
                  href="#all"
                  variant="secondary"
                  size="lg"
                  className="border-[#111014]/25 hover:border-violet-primary hover:bg-[#FAF9FF]"
                >
                  Explore 8 Capabilities
                </Button>
              </div>
            </motion.div>

            {/* Right Hero Column: Live Telemetry Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4"
            >
              {/* Metric 1 */}
              <div className="p-5 rounded-2xl bg-white border border-[#E9E4F5] shadow-sm hover:shadow-md hover:border-violet-primary/35 transition-all duration-300 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#EDE7FB] text-violet-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-2xl font-sans font-bold text-[#111014] tracking-tight block">
                    99.4%
                  </span>
                  <span className="text-xs font-dm text-[#666371] block">
                    Factual grounding with verified citations
                  </span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="p-5 rounded-2xl bg-white border border-[#E9E4F5] shadow-sm hover:shadow-md hover:border-violet-primary/35 transition-all duration-300 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-2xl font-sans font-bold text-[#111014] tracking-tight block">
                    &lt;350ms
                  </span>
                  <span className="text-xs font-dm text-[#666371] block">
                    Sub-second enterprise semantic query latency
                  </span>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="p-5 rounded-2xl bg-white border border-[#E9E4F5] shadow-sm hover:shadow-md hover:border-violet-primary/35 transition-all duration-300 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-2xl font-sans font-bold text-[#111014] tracking-tight block">
                    Zero Retention
                  </span>
                  <span className="text-xs font-dm text-[#666371] block">
                    Authorized VPC & UAE sovereign tenancy boundaries
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 2. Illustrated Bento Grid Section */}
      <SolutionsBentoGrid />

      {/* 3. Interactive Workflow & Solution Matcher Mini-Tool */}
      <SolutionFinderWidget />

      {/* 4. Deep-Dive Detailed Solutions with Sticky Category Nav, 3D Scroll Entrance & Interactive Visuals */}
      <SolutionsDetailedSection />

      {/* 5. Closing Strategic Call to Action Section */}
      <section className="pb-16 sm:pb-20 lg:pb-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2.5rem] bg-gradient-to-br from-[#181126] via-[#22163B] to-[#181126] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl border border-violet-primary/20 text-center"
          >
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-violet-primary/25 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <span className="text-xs font-mono font-semibold text-[#C8B8FA] uppercase tracking-widest block">
                ENTERPRISE FEASIBILITY EVALUATION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-[-0.03em] leading-tight">
                Ready to Connect AI to Your Core Business Workflows?
              </h2>
              <p className="text-[#C8B8FA] text-sm sm:text-base font-dm max-w-2xl mx-auto leading-relaxed">
                Schedule a strategic consultation with Brombeer AI's engineering leadership to map your workflows, audit data readiness, and review architectural blueprints.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asLink
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="bg-white text-[#181126] hover:bg-[#FAF9FF] shadow-xl"
                >
                  Schedule Architecture Review
                </Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default SolutionsPage;
