import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { ScrollReveal } from '../animations/ScrollReveal';
import { ScrollTextReveal } from '../animations/ScrollTextReveal';

const INSIGHTS_TOPICS = [
  { label: 'Artificial intelligence', slug: 'ai' },
  { label: 'Enterprise automation', slug: 'automation' },
  { label: 'Generative AI', slug: 'generative-ai' },
  { label: 'Computer vision', slug: 'computer-vision' },
  { label: 'Implementing AI systems', slug: 'implementation' },
];

export const InsightsSection: React.FC = () => {
  return (
    <section id="insights" className="py-10 sm:py-14 lg:py-16 bg-background relative overflow-hidden">
      <Container size="wide">
        <ScrollReveal direction="up" delay={0.1}>
          {/* Main Rounded Banner Card */}
          <div className="relative rounded-[2.25rem] sm:rounded-[2.75rem] lg:rounded-[3rem] bg-gradient-to-br from-[#FAF8FE] via-[#F4EFFC] to-[#EEE8FA] border border-[#6853A5]/18 shadow-[0_20px_50px_-20px_rgba(118,80,232,0.08),0_2px_6px_rgba(0,0,0,0.02)] overflow-hidden p-8 sm:p-12 lg:p-16">
            
            {/* Top Row: Eyebrow + Title on Left, Button on Right */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8">
              <ScrollTextReveal
                eyebrow="INSIGHTS"
                title="Ideas, Perspectives, and Practical AI Guidance."
                highlightWords={['Practical', 'AI', 'Guidance.']}
                titleClassName="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.1]"
                maxWidth="max-w-3xl"
              />

              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.25, margin: '0px 0px -60px 0px' }}
                transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="flex-shrink-0 self-start md:self-center"
              >
                <a
                  href="/insights"
                  className="inline-flex items-center gap-2.5 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-white text-[#111014] border border-[#111014]/50 hover:border-violet-primary hover:bg-[#FAF9FF] transition-all duration-300 shadow-sm hover:shadow text-sm font-medium group select-none"
                >
                  <span>Visit Insights</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#111014] group-hover:text-violet-primary" />
                </a>
              </motion.div>
            </div>

            {/* Bottom Row: Topic Chips */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mt-8 sm:mt-10 lg:mt-12">
              {INSIGHTS_TOPICS.map((topic) => (
                <a
                  key={topic.slug}
                  href={`/insights?topic=${topic.slug}`}
                  className="inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white border border-[#6853A5]/12 text-[#2E2B38] text-xs sm:text-[13px] font-medium shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-violet-primary/40 hover:text-violet-primary hover:shadow-sm transition-all duration-200 select-none cursor-pointer"
                >
                  {topic.label}
                </a>
              ))}
            </div>

          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};