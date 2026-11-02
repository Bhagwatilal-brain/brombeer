import React from 'react';
import { 
  Database, 
  FileCheck, 
  Bot, 
  TrendingUp, 
  Scan, 
  Workflow, 
  ArrowRight 
} from 'lucide-react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';

interface UseCaseItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
  pills: string[];
}

const USE_CASES: UseCaseItem[] = [
  {
    id: 'knowledge-assistant',
    icon: Database,
    title: 'Enterprise Knowledge Assistant',
    description: 'Query verified internal documents, policy repositories, and technical SOPs with grounded source citations and role-based access.',
    href: '/use-cases#knowledge-assistant',
    pills: ['Hybrid BM25 + Vectors', 'Source Grounding', 'Role-Based ACL', 'Zero Leakage', 'SAML / SSO'],
  },
  {
    id: 'document-processing',
    icon: FileCheck,
    title: 'Intelligent Document Processing',
    description: 'Extract, classify, and validate complex structured data from forms, invoices, contracts, and regulatory filings with high precision.',
    href: '/use-cases#document-processing',
    pills: ['Multimodal OCR', 'Key-Value Extraction', 'Table Parsing', 'Schema Validation', 'ERP Export'],
  },
  {
    id: 'service-assistant',
    icon: Bot,
    title: 'AI-Powered Service Assistant',
    description: 'Resolve high-volume client and internal inquiries instantly, orchestrate multi-turn actions, and intelligently route edge cases.',
    href: '/use-cases#service-assistant',
    pills: ['Autonomous Agents', 'Sentiment Routing', 'SLA Escalation', 'CRM Integration', 'Omnichannel API'],
  },
  {
    id: 'inventory-intelligence',
    icon: TrendingUp,
    title: 'Predictive Inventory Intelligence',
    description: 'Leverage historical time-series data and operational signals to forecast demand surges, optimize reorder cycles, and prevent stockouts.',
    href: '/use-cases#inventory-intelligence',
    pills: ['Demand Forecasting', 'Anomaly Detection', 'Lead Time Tuning', 'Safety Stock Alerts'],
  },
  {
    id: 'quality-assessment',
    icon: Scan,
    title: 'Visual Quality Assessment',
    description: 'Deploy high-speed edge computer vision to detect physical surface defects, verify assembly tolerances, and automate visual inspection.',
    href: '/use-cases#quality-assessment',
    pills: ['Defect Detection', 'Edge Inference', 'Sub-Millimeter Precision', 'Automated Sorting'],
  },
  {
    id: 'workflow-intelligence',
    icon: Workflow,
    title: 'Workflow Intelligence',
    description: 'Combine foundation models with enterprise business rules to orchestrate multi-system operational flows with full audit trails.',
    href: '/use-cases#workflow-intelligence',
    pills: ['Event Triggers', 'Rule Engine', 'Human-in-the-Loop', 'Audit Trails', 'Webhook Writeback'],
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

        {/* Unified White Container Housing the 6 Use Cases Grid */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="rounded-[2.5rem] bg-white border border-[#6853A5]/18 shadow-[0_20px_50px_-20px_rgba(118,80,232,0.08),0_2px_6px_rgba(0,0,0,0.02)] p-8 sm:p-12 lg:p-14 mb-10 sm:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 sm:gap-x-12 lg:gap-x-14 gap-y-12 sm:gap-y-14">
              {USE_CASES.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.id} className="group flex flex-col justify-between">
                    <div>
                      {/* Circular Icon Badge */}
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#F0EAFA] border border-[#7650E8]/18 flex items-center justify-center text-[#7650E8] mb-5 shadow-xs group-hover:scale-105 group-hover:bg-[#E8DCF9] transition-all duration-300">
                        <Icon className="w-6 h-6 text-[#7650E8]" />
                      </div>

                      {/* Title */}
                      <h3 className="font-sans font-bold text-xl sm:text-[21px] text-[#111014] tracking-tight leading-snug mb-3 group-hover:text-violet-primary transition-colors duration-200">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[#555263] text-[13.5px] sm:text-[14px] font-dm leading-relaxed font-normal mb-5">
                        {item.description}
                      </p>
                    </div>

                    {/* Pill Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.pills.map((pill) => (
                        <span
                          key={pill}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-[12px] font-medium text-[#463B6E] bg-white border border-[#6853A5]/22 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-[#7650E8]/60 hover:text-[#7650E8] hover:bg-[#FAF8FE] transition-all duration-200 cursor-default select-none"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

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
