import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Lock, FileCheck, Cpu, ArrowRight } from 'lucide-react';
import { Container } from '../../layout/Container';
import { Button } from '../../ui/Button';

export const IndustryParallaxBanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ['start end', 'end start'],
  });

  const xLeft = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const xRight = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yFloating = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const PILLARS = [
    {
      icon: Lock,
      title: 'Sovereign Enclaves',
      tag: 'AIR-GAPPED DEPLOYMENT',
      description: 'Host models inside your private perimeter — whether on bare-metal servers, tactical air-gapped field kits, or certified sovereign clouds.',
    },
    {
      icon: FileCheck,
      title: 'Deterministic Grounding',
      tag: '100% AUDIT TRAIL',
      description: 'Every statement, classification, and summary includes verifiable page-level PDF and database citations. Zero unchecked hallucinations.',
    },
    {
      icon: ShieldCheck,
      title: 'Human-in-the-Loop Oversight',
      tag: 'COMMAND & SIGN-OFF',
      description: 'Consequential decisions in public casework, triage, defense logistics, and legal filings require explicit human authority before actuation.',
    },
    {
      icon: Cpu,
      title: 'Legacy Interoperability',
      tag: 'ENTERPRISE CONNECTORS',
      description: 'Native connectors for SAP, Oracle, Epic EHR, HL7/FHIR, Siemens SCADA, and proprietary internal databases without re-architecting your stack.',
    },
  ];

  return (
    <section ref={bannerRef} className="py-20 sm:py-28 bg-[#111018] text-white relative overflow-hidden">
      {/* Background Parallax Mesh & Atmospheric Glow */}
      <motion.div
        style={{ y: yFloating }}
        className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-gradient-to-b from-[#7650E8]/20 via-[#452A85]/10 to-transparent rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: yFloating }}
        className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-gradient-to-t from-[#3B82F6]/15 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none"
      />

      {/* Decorative Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <Container className="relative z-10 space-y-14">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-mono font-bold text-violet-light uppercase tracking-widest block mb-3">
            CROSS-SECTOR ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-white tracking-[-0.03em] leading-[1.12]">
            Four Guardrails Common to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B49BF5] to-white">
              Every Regulated Sector.
            </span>
          </h2>
          <p className="text-[#A29DB8] text-sm sm:text-base font-dm leading-relaxed mt-4 max-w-2xl">
            Regardless of industry, enterprise artificial intelligence must adhere to immutable security, human authority, and transparent auditability.
          </p>
        </div>

        {/* 4 Pillars Grid with Parallax Offsets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            // Alternate horizontal motion for parallax sensation
            const motionX = idx % 2 === 0 ? xLeft : xRight;

            return (
              <motion.div
                key={idx}
                style={{ x: motionX }}
                className="group p-6 sm:p-7 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/10 hover:border-violet-light/40 transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-violet-primary/20 text-violet-light border border-violet-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-violet-light/70 tracking-wider">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-sans font-bold text-white mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-dm text-[#A29DB8] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/50 group-hover:text-violet-light transition-colors">
                  <span>Guaranteed by SLA</span>
                  <span className="text-sm">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/[0.06] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-white uppercase tracking-wider block">
              Need a Custom Security or Compliance Assessment?
            </span>
            <p className="text-xs font-dm text-[#A29DB8]">
              We provide formal architecture whitepapers, air-gap hardware specifications, and data flow audits.
            </p>
          </div>

          <Button
            asLink
            href="/contact"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
            className="flex-shrink-0 bg-violet-primary hover:bg-violet-deep text-white shadow-lg shadow-violet-primary/30"
          >
            Request Security Whitepaper
          </Button>
        </div>
      </Container>
    </section>
  );
};

