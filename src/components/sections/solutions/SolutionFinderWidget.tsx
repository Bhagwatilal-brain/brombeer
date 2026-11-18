import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Bot, Database, Eye, TrendingUp, FileText, Layout, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Container } from '../../layout/Container';

interface WorkflowNeed {
  id: string;
  question: string;
  recommendedSolutionId: string;
  solutionNumber: string;
  solutionTitle: string;
  solutionTagline: string;
  matchScore: string;
  highlightBenefit: string;
  tags: string[];
}

const WORKFLOW_NEEDS: WorkflowNeed[] = [
  {
    id: 'knowledge',
    question: 'How do I enable employees to safely query internal policies, wikis & documents?',
    recommendedSolutionId: 'enterprise-knowledge',
    solutionNumber: '03',
    solutionTitle: 'Enterprise AI & Knowledge Intelligence',
    solutionTagline: 'Make Organizational Knowledge Easier to Find.',
    matchScore: '99.4% Match',
    highlightBenefit: 'Role-based vector access partitioning ensures staff only access documents matching their authorization level.',
    tags: ['Enterprise RAG', 'Role-Based Access', 'Zero Hallucinations', 'Clickable Citations'],
  },
  {
    id: 'agents',
    question: 'How can we automate multi-step clerical actions across ERPs and CRMs?',
    recommendedSolutionId: 'ai-agents',
    solutionNumber: '02',
    solutionTitle: 'AI Agents & Intelligent Automation',
    solutionTagline: 'Connect Intelligence with Action.',
    matchScore: '98.8% Match',
    highlightBenefit: 'Autonomous tool-calling agents query APIs, coordinate multi-step workflows, and route sensitive actions to human approval gates.',
    tags: ['Tool Execution', 'Human-in-the-Loop', 'Multi-Agent', 'ERP Integration'],
  },
  {
    id: 'documents',
    question: 'How can we eliminate manual data entry from supplier invoices, receipts & PDF forms?',
    recommendedSolutionId: 'document-intelligence',
    solutionNumber: '06',
    solutionTitle: 'Document Intelligence & Data Extraction',
    solutionTagline: 'From Unstructured Documents to Structured Workflows.',
    matchScore: '99.6% Match',
    highlightBenefit: 'High-precision multimodal optical recognition and language models extract and validate key-value fields in sub-second time.',
    tags: ['Multimodal OCR', 'Table Parsing', 'ERP Reconciliation', 'Confidence Scores'],
  },
  {
    id: 'vision',
    question: 'How do we inspect physical products or detect visual defects at line-speed?',
    recommendedSolutionId: 'computer-vision',
    solutionNumber: '04',
    solutionTitle: 'Computer Vision & Image Intelligence',
    solutionTagline: 'Turn Visual Data into Useful Information.',
    matchScore: '99.1% Match',
    highlightBenefit: 'Edge-deployed computer vision models identify sub-millimeter defects with 60 FPS real-time feedback and human review fallbacks.',
    tags: ['Defect Detection', 'Edge Hardware', '60 FPS Analysis', 'Sub-mm Precision'],
  },
  {
    id: 'forecast',
    question: 'How can we predict inventory demand shifts and prevent costly stockouts?',
    recommendedSolutionId: 'predictive-analytics',
    solutionNumber: '05',
    solutionTitle: 'Machine Learning & Predictive Analytics',
    solutionTagline: 'Anticipate Patterns. Make Better Decisions.',
    matchScore: '97.9% Match',
    highlightBenefit: 'Time-series forecasting models learn from historical transaction patterns to predict demand shifts and trigger proactive reorders.',
    tags: ['Demand Curves', 'Anomaly Detection', 'Continuous Retraining', 'Risk Scoring'],
  },
  {
    id: 'strategy',
    question: 'We need an executive roadmap, feasibility study & sovereign governance blueprint.',
    recommendedSolutionId: 'ai-consulting',
    solutionNumber: '08',
    solutionTitle: 'AI Consulting & Strategy',
    solutionTagline: 'Start with the Right Problem.',
    matchScore: '100% Match',
    highlightBenefit: 'Comprehensive feasibility evaluation assessing business ROI, data readiness, cloud sovereignty, and multi-year implementation timelines.',
    tags: ['ROI Prioritization', 'Sovereignty Audit', 'Model Selection', 'Executive Plan'],
  },
];

export const SolutionFinderWidget: React.FC = () => {
  const [selectedNeed, setSelectedNeed] = useState<WorkflowNeed>(WORKFLOW_NEEDS[0]);

  const scrollToSolution = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden border-y border-[#EDE8F6]">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <span className="text-xs font-mono font-semibold text-violet-primary uppercase tracking-widest block mb-2">
            INTERACTIVE SOLUTION FINDER
          </span>
          <h2 className="text-2xl sm:text-3xl font-sans font-bold text-[#111014] tracking-tight">
            Which operational challenge are you solving today?
          </h2>
          <p className="text-sm font-dm text-[#666371] mt-2">
            Select a target workflow below to instantly preview the optimal Brombeer AI solution architecture.
          </p>
        </div>

        {/* Interactive 2-Column Split: Questions on Left, Dynamic Recommended Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: Interactive Questions List */}
          <div className="lg:col-span-6 space-y-2.5">
            {WORKFLOW_NEEDS.map((item) => {
              const isSelected = selectedNeed.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedNeed(item)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border flex items-center justify-between gap-3 group ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#FAF8FE] to-[#F3EEFC] border-violet-primary/40 shadow-sm shadow-violet-primary/10'
                      : 'bg-white border-[#E9E4F5] hover:border-violet-primary/30 hover:bg-[#FAF9FF]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors ${
                        isSelected ? 'bg-violet-primary ring-4 ring-violet-primary/20' : 'bg-[#D6CEE4] group-hover:bg-violet-primary/60'
                      }`}
                    />
                    <span
                      className={`text-xs sm:text-[13.5px] font-dm transition-colors truncate ${
                        isSelected ? 'font-bold text-[#111014]' : 'font-medium text-[#4B4758] group-hover:text-[#111014]'
                      }`}
                    >
                      {item.question}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 transition-all ${
                      isSelected ? 'text-violet-primary translate-x-1' : 'text-[#8E869E] group-hover:text-violet-primary group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Solution Recommendation Card with Animated Transition */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedNeed.id}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 sm:p-8 rounded-[2rem] bg-gradient-to-br from-white via-white to-[#F7F4FD] border border-violet-primary/25 shadow-xl shadow-violet-primary/8 relative overflow-hidden"
              >
                {/* Top glow indicator */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent" />

                {/* Badge & Match Score Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-[#EDE7FB] text-violet-primary font-bold text-xs flex items-center justify-center">
                    {selectedNeed.solutionNumber}
                  </span>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200/50">
                    {selectedNeed.matchScore}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#111014] tracking-tight mb-1">
                  {selectedNeed.solutionTitle}
                </h3>
                <p className="text-xs sm:text-sm font-dm font-semibold text-violet-primary mb-4">
                  {selectedNeed.solutionTagline}
                </p>

                {/* Highlight Benefit */}
                <p className="text-xs sm:text-sm font-dm text-[#4B4758] leading-relaxed mb-6 bg-[#FAF9FF] p-4 rounded-xl border border-violet-primary/10">
                  {selectedNeed.highlightBenefit}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedNeed.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white text-[#6355A4] border border-[#6355A4]/20 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Jump to Solution Button */}
                <button
                  onClick={() => scrollToSolution(selectedNeed.recommendedSolutionId)}
                  className="w-full py-3 px-5 rounded-full bg-gradient-to-r from-violet-primary to-violet-deep text-white text-xs sm:text-sm font-dm font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-violet-primary/25 transition-all group"
                >
                  <span>Explore Detailed Architecture</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};

