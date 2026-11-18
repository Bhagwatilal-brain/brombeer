import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../../layout/Container';
import { SOLUTIONS } from '../../../data/solutions';
import { Solution } from '../../../types';
import { CheckCircle2, ArrowRight, Layers, Briefcase, Wrench, Sparkles, Bot, Eye, TrendingUp, FileText, Compass, LayoutGrid } from 'lucide-react';
import { Button } from '../../ui/Button';
import { SolutionVisualWidget } from './SolutionVisualWidgets';

type TabMode = 'capabilities' | 'applications' | 'approach';

interface SolutionCardState {
  [solutionId: string]: TabMode;
}

const CATEGORY_FILTERS = [
  { id: 'all', label: 'All Capabilities', count: '8', icon: LayoutGrid, matches: [] },
  { id: 'language', label: 'GenAI & RAG', count: '2', icon: Sparkles, matches: ['generative-ai', 'enterprise-knowledge'] },
  { id: 'agents', label: 'AI Agents', count: '1', icon: Bot, matches: ['ai-agents'] },
  { id: 'vision', label: 'Computer Vision', count: '1', icon: Eye, matches: ['computer-vision'] },
  { id: 'predictive', label: 'Predictive ML', count: '1', icon: TrendingUp, matches: ['predictive-analytics'] },
  { id: 'documents', label: 'Document AI', count: '1', icon: FileText, matches: ['document-intelligence'] },
  { id: 'engineering', label: 'Full-Stack & Advisory', count: '2', icon: Compass, matches: ['ai-app-development', 'ai-consulting'] },
];

export const SolutionsDetailedSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [cardTabs, setCardTabs] = useState<SolutionCardState>({});

  const setTabForCard = (id: string, mode: TabMode) => {
    setCardTabs((prev) => ({ ...prev, [id]: mode }));
  };

  const filteredSolutions = SOLUTIONS.filter((sol) => {
    if (activeCategory === 'all') return true;
    const cat = CATEGORY_FILTERS.find((c) => c.id === activeCategory);
    return cat?.matches && cat.matches.length > 0 ? cat.matches.includes(sol.id) : true;
  });

  return (
    <section className="py-12 sm:py-20 relative">
      <Container>
        {/* Dynamic Island Style Floating Capability Dock with Fluid Motion Slider */}
        <div className="sticky top-20 z-30 mb-12 sm:mb-16 px-2 sm:px-4">
          <div className="max-w-fit mx-auto rounded-full bg-white/80 backdrop-blur-xl border border-violet-primary/20 shadow-[0_12px_36px_-10px_rgba(118,80,232,0.15)] p-1.5 flex items-center overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1 sm:gap-1.5 min-w-max mx-auto">
              {CATEGORY_FILTERS.map((cat) => {
                const isActive = activeCategory === cat.id;
                const Icon = cat.icon;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative px-3.5 sm:px-4 py-2 rounded-full text-xs sm:text-[13px] font-dm font-semibold transition-colors duration-200 select-none flex items-center gap-2 whitespace-nowrap z-10 ${
                      isActive ? 'text-white' : 'text-[#555162] hover:text-[#111014] hover:bg-[#FAF9FF]'
                    }`}
                  >
                    {/* Fluid Spring Gliding Pill Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-primary via-[#805BF6] to-violet-deep shadow-md shadow-violet-primary/30 -z-10"
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}

                    <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-white' : 'text-violet-primary'}`} />
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full transition-colors ${
                        isActive ? 'bg-white/25 text-white' : 'bg-[#EDE7FB] text-violet-primary font-bold'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Solutions Cards Staggered 3D Scroll List */}
        <div className="space-y-12 sm:space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredSolutions.map((sol, index) => {
              const currentTab = cardTabs[sol.id] || 'capabilities';
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={sol.id}
                  id={sol.id}
                  layout
                  initial={{ opacity: 0, y: 40, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="scroll-mt-36 group relative p-7 sm:p-10 lg:p-12 rounded-[2.25rem] bg-white border border-[#E9E4F5] shadow-[0_12px_45px_-15px_rgba(118,80,232,0.08),0_1px_3px_rgba(0,0,0,0.02)] hover:border-violet-primary/45 hover:shadow-2xl hover:shadow-violet-primary/14 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
                >
                  {/* Top glowing violet accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-0 group-hover:opacity-100 group-hover:h-[3.5px] transition-all duration-300" />

                  {/* Alternating 2-Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Column A: Information & Interactive Tabs */}
                    <div className={`lg:col-span-7 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      {/* Header Badge */}
                      <div className="flex items-center gap-3">
                        <span className="w-9 h-9 rounded-full bg-[#EDE7FB] text-violet-primary font-bold flex items-center justify-center text-xs sm:text-sm border border-violet-primary/20 shadow-xs">
                          {sol.number}
                        </span>
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FAF9FF] text-violet-primary border border-violet-primary/20">
                          {sol.badge || 'Enterprise AI'}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#111014] tracking-tight group-hover:text-violet-primary transition-colors duration-200">
                          {sol.title}
                        </h3>
                        <p className="text-sm font-dm font-semibold text-violet-primary mt-1">
                          {sol.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm font-dm text-[#555162] leading-relaxed font-normal">
                        {sol.description}
                      </p>

                      {/* Interactive Tab Switcher */}
                      <div className="pt-2">
                        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#F4EFFC] border border-[#E8E2F4] w-fit mb-4">
                          <button
                            onClick={() => setTabForCard(sol.id, 'capabilities')}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-dm font-semibold transition-all ${
                              currentTab === 'capabilities'
                                ? 'bg-white text-violet-primary shadow-xs'
                                : 'text-[#666371] hover:text-[#111014]'
                            }`}
                          >
                            <Layers className="w-3.5 h-3.5" />
                            <span>Capabilities</span>
                          </button>

                          <button
                            onClick={() => setTabForCard(sol.id, 'applications')}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-dm font-semibold transition-all ${
                              currentTab === 'applications'
                                ? 'bg-white text-violet-primary shadow-xs'
                                : 'text-[#666371] hover:text-[#111014]'
                            }`}
                          >
                            <Briefcase className="w-3.5 h-3.5" />
                            <span>Applications</span>
                          </button>

                          <button
                            onClick={() => setTabForCard(sol.id, 'approach')}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-dm font-semibold transition-all ${
                              currentTab === 'approach'
                                ? 'bg-white text-violet-primary shadow-xs'
                                : 'text-[#666371] hover:text-[#111014]'
                            }`}
                          >
                            <Wrench className="w-3.5 h-3.5" />
                            <span>Approach</span>
                          </button>
                        </div>

                        {/* Tab Content Display */}
                        <div className="min-h-[140px]">
                          {currentTab === 'capabilities' && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                              className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                            >
                              {sol.capabilities.slice(0, 6).map((cap, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-2 p-2 rounded-lg bg-[#FAF9FF] border border-[#F0EAF8] text-xs font-dm text-[#373344]"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-primary flex-shrink-0 mt-0.5" />
                                  <span className="font-medium">{cap}</span>
                                </div>
                              ))}
                            </motion.div>
                          )}

                          {currentTab === 'applications' && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                              className="space-y-1.5"
                            >
                              {sol.exampleApplications.slice(0, 4).map((app, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF9FF] border border-[#F0EAF8] text-xs font-dm text-[#373344]"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-violet-primary flex-shrink-0" />
                                  <span>{app}</span>
                                </div>
                              ))}
                            </motion.div>
                          )}

                          {currentTab === 'approach' && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                              className="p-4 rounded-xl bg-[#FAF9FF] border border-violet-primary/15 text-xs sm:text-[13px] font-dm text-[#373344] leading-relaxed"
                            >
                              <span className="font-semibold text-violet-primary block mb-1">
                                Our Methodology:
                              </span>
                              {sol.approach}
                            </motion.div>
                          )}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-2">
                        <Button
                          asLink
                          href="/contact"
                          variant="primary"
                          size="sm"
                          icon={<ArrowRight className="w-4 h-4" />}
                          className="hover:shadow-lg hover:shadow-violet-primary/20"
                        >
                          {sol.ctaText}
                        </Button>
                      </div>
                    </div>

                    {/* Column B: Illustrated Visual Interactive Widget */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <SolutionVisualWidget solutionId={sol.id} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

