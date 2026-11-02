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

        {/* 6 High-Contrast Animated Use Case Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 mb-10 sm:mb-12">
          {USE_CASES.map((item, idx) => {
            const Icon = item.icon;

            return (
              <ScrollReveal key={item.id} direction="up" delay={0.06 * (idx % 3)}>
                <a
                  href={item.href}
                  className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-[2rem] bg-white border border-[#6853A5]/16 shadow-[0_4px_24px_-4px_rgba(75,45,168,0.06),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_24px_48px_-12px_rgba(118,80,232,0.18)] hover:-translate-y-2 hover:border-[#7650E8]/40 transition-all duration-300 overflow-hidden select-none min-h-[360px]"
                >
                  {/* Top Glowing Violet Laser Line on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top-Right Ambient Glow Bloom on Hover */}
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#7650E8]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="relative z-10">
                    {/* Circular Icon Badge: Changes to brand violet and scales up on hover */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#F0EAFA] border border-[#7650E8]/18 flex items-center justify-center text-[#7650E8] mb-5 shadow-xs group-hover:scale-110 group-hover:bg-[#7650E8] group-hover:text-white group-hover:border-[#7650E8] group-hover:shadow-lg group-hover:shadow-[#7650E8]/25 transition-all duration-300">
                      <Icon className="w-6 h-6 transition-colors duration-300" />
                    </div>

                    {/* Title */}
                    <h3 className="font-sans font-bold text-xl sm:text-[21px] text-[#111014] tracking-tight leading-snug mb-3 group-hover:text-violet-primary transition-colors duration-200">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#555263] text-[13.5px] sm:text-[14px] font-dm leading-relaxed font-normal mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="relative z-10">
                    {/* Pill Badges */}
                    <div className="flex flex-wrap gap-2 pt-1 mb-5">
                      {item.pills.map((pill) => (
                        <span
                          key={pill}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs sm:text-[12px] font-medium text-[#463B6E] bg-white sm:bg-[#FAF8FE] border border-[#6853A5]/18 shadow-[0_1px_2px_rgba(0,0,0,0.02)] group-hover:border-[#7650E8]/35 group-hover:bg-white hover:!border-[#7650E8] hover:!text-[#7650E8] hover:!bg-[#F0EAFA] transition-all duration-200 cursor-default select-none"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Action Link with Animated Arrow */}
                    <div className="pt-4 border-t border-[#6853A5]/10 flex items-center justify-between text-xs font-semibold text-[#7650E8] group-hover:text-[#5B38D4] transition-colors">
                      <span>Explore Use Case</span>
                      <div className="w-6 h-6 rounded-full bg-[#F0EAFA] group-hover:bg-[#7650E8] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
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
