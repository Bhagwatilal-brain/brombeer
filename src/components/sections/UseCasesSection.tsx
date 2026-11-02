import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';

interface UseCaseCard {
  id: string;
  title: string;
  description: string;
  href: string;
}

const USE_CASES_LIST: UseCaseCard[] = [
  {
    id: 'knowledge-assistant',
    title: 'Enterprise Knowledge Assistant',
    description: 'Enable employees to ask questions about authorized internal documents and receive answers grounded in relevant source material.',
    href: '/use-cases#knowledge-assistant',
  },
  {
    id: 'document-processing',
    title: 'Intelligent Document Processing',
    description: 'Extract, classify, and validate information from forms, reports, applications, and business documents.',
    href: '/use-cases#document-processing',
  },
  {
    id: 'service-assistant',
    title: 'AI-Powered Service Assistant',
    description: 'Help users navigate information, resolve routine enquiries, and route more complex requests to the appropriate team.',
    href: '/use-cases#service-assistant',
  },
  {
    id: 'inventory-intelligence',
    title: 'Predictive Inventory Intelligence',
    description: 'Use historical and operational data to support demand forecasting, stock planning, and anomaly detection.',
    href: '/use-cases#inventory-intelligence',
  },
  {
    id: 'quality-assessment',
    title: 'Visual Quality Assessment',
    description: 'Apply computer vision to identify image defects or other defined visual conditions, subject to suitable data and validation.',
    href: '/use-cases#quality-assessment',
  },
  {
    id: 'workflow-intelligence',
    title: 'Workflow Intelligence',
    description: 'Combine language models, business rules, and approved integrations to support multi-step processes with appropriate human review.',
    href: '/use-cases#workflow-intelligence',
  },
];

export const UseCasesSection: React.FC = () => {
  return (
    <section id="use-cases" className="py-14 sm:py-18 lg:py-24 bg-background relative overflow-hidden">
      <Container size="wide">
        {/* Left-Aligned Editorial Header Block */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <ScrollTextReveal
            eyebrow="AI USE CASES"
            title="Real Problems. Intelligent Possibilities."
            highlightWords={['Intelligent', 'Possibilities.']}
            titleClassName="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.08] mb-4"
            description="Explore how AI can support practical business workflows."
            maxWidth="max-w-3xl"
          />
        </div>

        {/* 6 Use Case Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-10 sm:mb-12">
          {USE_CASES_LIST.map((card, idx) => (
            <ScrollReveal key={card.id} direction="up" delay={0.08 * (idx % 3)}>
              <a
                href={card.href}
                className="group flex flex-col justify-between p-7 sm:p-8 rounded-[1.75rem] bg-white border border-[#6853A5]/14 shadow-[0_4px_24px_-4px_rgba(75,45,168,0.06),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_-6px_rgba(118,80,232,0.12)] hover:-translate-y-1.5 hover:border-violet-primary/30 transition-all duration-300 min-h-[220px] sm:min-h-[235px]"
              >
                <div>
                  {/* Title */}
                  <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#111014] leading-snug mb-3 group-hover:text-violet-primary transition-colors duration-200">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#666371] text-[13px] sm:text-[13.5px] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
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