import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';
import {
  KnowledgeAssistantVisual,
  DocumentProcessingVisual,
  ServiceAssistantVisual,
  InventoryIntelligenceVisual,
  QualityAssessmentVisual,
  WorkflowIntelligenceVisual,
} from './use-cases/UseCaseVisuals';

interface UseCaseCard {
  id: string;
  badge: string;
  title: string;
  description: string;
  href: string;
  visual: React.ComponentType;
}

const USE_CASES_LIST: UseCaseCard[] = [
  {
    id: 'knowledge-assistant',
    badge: 'ENTERPRISE RAG',
    title: 'Enterprise Knowledge Assistant',
    description: 'Enable employees to ask questions about authorized internal documents and receive answers grounded in verified source citations.',
    href: '/use-cases#knowledge-assistant',
    visual: KnowledgeAssistantVisual,
  },
  {
    id: 'document-processing',
    badge: 'MULTIMODAL OCR',
    title: 'Intelligent Document Processing',
    description: 'Extract, classify, and validate information from structured forms, invoices, technical specs, and business documents.',
    href: '/use-cases#document-processing',
    visual: DocumentProcessingVisual,
  },
  {
    id: 'service-assistant',
    badge: 'AUTONOMOUS AGENTS',
    title: 'AI-Powered Service Assistant',
    description: 'Help users navigate complex information, resolve routine enquiries, and autonomously route edge cases to specialized teams.',
    href: '/use-cases#service-assistant',
    visual: ServiceAssistantVisual,
  },
  {
    id: 'inventory-intelligence',
    badge: 'PREDICTIVE ML',
    title: 'Predictive Inventory Intelligence',
    description: 'Use historical and operational data to support demand forecasting, stock reorder planning, and supply chain anomaly detection.',
    href: '/use-cases#inventory-intelligence',
    visual: InventoryIntelligenceVisual,
  },
  {
    id: 'quality-assessment',
    badge: 'EDGE VISION',
    title: 'Visual Quality Assessment',
    description: 'Apply computer vision to inspect physical products, spot sub-millimeter defects, and maintain rigorous industrial tolerances.',
    href: '/use-cases#quality-assessment',
    visual: QualityAssessmentVisual,
  },
  {
    id: 'workflow-intelligence',
    badge: 'ORCHESTRATION',
    title: 'Workflow Intelligence',
    description: 'Combine language models, business rules, and approved integrations to orchestrate multi-step processes with audit trails.',
    href: '/use-cases#workflow-intelligence',
    visual: WorkflowIntelligenceVisual,
  },
];

export const UseCasesSection: React.FC = () => {
  return (
    <section id="use-cases" className="py-14 sm:py-20 lg:py-26 bg-gradient-to-b from-[#FAF8FE] via-[#F8F5FD] to-[#F3EDFC] relative overflow-hidden border-b border-[#6853A5]/10">
      {/* Background Soft Accents & Ambient Violet Radial Glows */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-[#E2D9F8]/35 via-[#EDE7FB]/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-gradient-to-tr from-[#EBE3FC]/25 to-transparent pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Left-Aligned Editorial Header Block */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <ScrollTextReveal
            eyebrow="AI USE CASES"
            title="Real Problems. Intelligent Possibilities."
            highlightWords={['Intelligent', 'Possibilities.']}
            titleClassName="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.08] mb-4"
            description="Explore how tailored enterprise AI workflows automate operations, extract intelligence, and power critical decisions."
            maxWidth="max-w-3xl"
          />
        </div>

        {/* 6 Rich Visual Use Case Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-10 sm:mb-12">
          {USE_CASES_LIST.map((card, idx) => {
            const Visual = card.visual;

            return (
              <ScrollReveal key={card.id} direction="up" delay={0.08 * (idx % 3)}>
                <a
                  href={card.href}
                  className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[2rem] bg-white border border-[#6853A5]/16 shadow-[0_4px_24px_-4px_rgba(75,45,168,0.06),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_44px_-10px_rgba(118,80,232,0.16)] hover:-translate-y-1.5 hover:border-violet-primary/40 transition-all duration-300 min-h-[380px] sm:min-h-[400px] overflow-hidden select-none"
                >
                  {/* Top Glowing Accent Indicator on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div>
                    {/* Interactive Animated Visual Stage */}
                    <div className="mb-5 transition-transform duration-300 group-hover:scale-[1.01]">
                      <Visual />
                    </div>

                    {/* Capability Badge Pill */}
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold text-[#7650E8] bg-[#F3EEFC] border border-[#7650E8]/18 mb-3">
                      {card.badge}
                    </span>

                    {/* Card Title */}
                    <h3 className="font-sans font-bold text-[18px] sm:text-[19px] lg:text-[20px] text-[#111014] tracking-tight leading-snug mb-2.5 group-hover:text-violet-primary transition-colors duration-200">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-[#666371] text-[13px] sm:text-[13.5px] font-dm leading-relaxed font-normal">
                      {card.description}
                    </p>
                  </div>

                  {/* Bottom Action Link with Animated Arrow */}
                  <div className="pt-5 mt-auto flex items-center gap-1.5 text-xs font-semibold text-[#7650E8] group-hover:text-[#5B38D4] transition-colors">
                    <span>Explore Use Case</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </a>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA Button: Explore AI Use Cases */}
        <ScrollReveal direction="up" delay={0.2}>
          <div>
            <a
              href="/use-cases"
              className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-[#111014] border border-[#111014]/50 hover:border-violet-primary hover:bg-[#FAF9FF] transition-all duration-300 shadow-sm hover:shadow text-sm font-medium group select-none"
            >
              <span>Explore AI Use Cases</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#111014] group-hover:text-violet-primary" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
