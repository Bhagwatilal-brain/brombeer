import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../../layout/Container';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

interface ArchitectureItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  actionLabel?: string;
  href?: string;
  image: string;
}

const ARCHITECTURE_ITEMS: ArchitectureItem[] = [
  {
    id: 'connects-entire-stack',
    badge: 'DATA INTEGRATION',
    title: 'Connects to the Entire Stack',
    description:
      'Brombeer AI quickly and securely connects to your existing data warehouses, databases, ERPs, and cloud storage providers with strict tenancy boundaries and zero disruption to your current infrastructure.',
    actionLabel: 'Explore Architecture',
    href: '/contact',
    image: '/images/solutions/architecture/connects-to-entire-stack.jpg',
  },
  {
    id: 'modern-controls-governance',
    badge: 'GOVERNANCE & AUDIT',
    title: 'Modern Controls, Out of the Box',
    description:
      'Every model action and retrieval path is grounded against strict schema definitions, versioned with git auditability, and supervised by human verification gates and deterministic policy checks.',
    actionLabel: 'Explore Architecture',
    href: '/contact',
    image: '/images/solutions/architecture/modern-controls-governance.jpg',
  },
  {
    id: 'less-time-servicing-requests',
    badge: 'SEMANTIC QUERYING',
    title: 'Less Time Servicing Requests',
    description:
      'Natural language to SQL and semantic RAG empower business teams to query enterprise databases directly and receive verifiable answers with source-grounded citations in sub-second response times.',
    actionLabel: 'Explore Architecture',
    href: '/contact',
    image: '/images/solutions/architecture/less-time-servicing-requests.jpg',
  },
  {
    id: 'warehouse-native',
    badge: 'SOVEREIGN DATA SECURITY',
    title: 'Warehouse Native Architecture',
    description:
      'Execute analytics and language queries directly within your authorized data warehouse boundaries with zero external data duplication and complete compliance with sovereign data mandates.',
    actionLabel: 'Explore Architecture',
    href: '/contact',
    image: '/images/solutions/architecture/warehouse-native.jpg',
  },
];

export const SolutionsBentoGrid: React.FC = () => {
  const prefersReduced = useReducedMotion();

  const gridContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.96,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="py-14 sm:py-18 lg:py-24 bg-gradient-to-b from-[#FAF8FE] via-[#F6F1FD] to-[#FAF8FE] relative overflow-hidden border-t border-[#6853A5]/10">
      {/* Soft atmospheric background illumination */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-violet-light/25 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-[#EDE7FB]/50 blur-3xl pointer-events-none" />

      <Container size="wide" className="relative z-10">
        {/* Section Heading Centered */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold text-violet-primary uppercase tracking-widest block mb-3">
            ARCHITECTURE & CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.12]">
            Engineered to Connect, Govern, and Deliver{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-deep">
              Enterprise Value.
            </span>
          </h2>
          <p className="text-[#666371] text-sm sm:text-base font-dm leading-relaxed mt-4 max-w-2xl mx-auto">
            See how Brombeer AI seamlessly integrates with your existing data warehouses, enforces strict git-audited governance, and enables business teams to query enterprise intelligence in real time.
          </p>
        </div>

        {/* 4 Rich Visual Architecture Cards (Matching Home Page Use Case Card Design) */}
        <motion.div
          initial={prefersReduced ? 'visible' : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={gridContainerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 [perspective:1200px]"
        >
          {ARCHITECTURE_ITEMS.map((item) => (
            <motion.div key={item.id} variants={cardVariants} className="h-full">
              <a
                href={item.href || '/contact'}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[2rem] bg-white border border-[#6853A5]/16 shadow-[0_4px_24px_-4px_rgba(75,45,168,0.06),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_22px_48px_-10px_rgba(118,80,232,0.18)] hover:-translate-y-2 hover:border-violet-primary/45 transition-all duration-300 min-h-[380px] sm:min-h-[400px] h-full overflow-hidden select-none"
              >
                {/* Top Glowing Violet Accent Strip on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Ambient Violet Glow on Card Hover */}
                <div className="absolute -top-12 -right-12 w-36 h-36 rounded-full bg-[#7650E8]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Visual 3D Illustration Stage */}
                  <div className="mb-5 relative rounded-2xl overflow-hidden border border-[#7650E8]/14 bg-[#F5EFFE] aspect-[16/10] sm:aspect-[16/9] shadow-xs group-hover:border-violet-primary/35 transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1142]/20 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5 pointer-events-none" />
                  </div>

                  {/* Capability Badge Pill */}
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-semibold text-[#7650E8] bg-[#F3EEFC] border border-[#7650E8]/18 mb-3">
                    {item.badge}
                  </span>

                  {/* Card Title */}
                  <h3 className="font-sans font-bold text-[18px] sm:text-[19px] lg:text-[20px] text-[#111014] tracking-tight leading-snug mb-2.5 group-hover:text-violet-primary transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[#666371] text-[13px] sm:text-[13.5px] font-dm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Action Link with Animated Arrow */}
                <div className="pt-5 mt-auto flex items-center gap-1.5 text-xs font-semibold text-[#7650E8] group-hover:text-[#5B38D4] transition-colors">
                  <span>{item.actionLabel || 'Explore Architecture'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
