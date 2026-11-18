import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Landmark,
  ShieldCheck,
  HeartPulse,
  Truck,
  Factory,
  Users,
  Play,
  RotateCcw,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sliders,
  Sparkles,
  Cpu,
  FileCode,
  AlertTriangle,
} from 'lucide-react';
import { Container } from '../../layout/Container';
import { Button } from '../../ui/Button';

interface StudioSector {
  id: string;
  name: string;
  shortName: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  image: string;
  simulationTitle: string;
  steps: {
    title: string;
    description: string;
    badge: string;
  }[];
  metrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
  sampleLog: string;
}

const SECTOR_STUDIOS: StudioSector[] = [
  {
    id: 'government',
    name: 'Government & Public Sector',
    shortName: 'Government & Public',
    category: 'Civic Intelligence',
    icon: Landmark,
    tagline: 'Citizen Inquiry & Automated Casework Ingestion',
    image: '/images/industry_solutions/Lavender Capitol in the Mist.png',
    simulationTitle: 'Municipal Variance Request Resolution',
    steps: [
      {
        title: 'Document Ingestion & OCR',
        description: 'Digitizes municipal zoning permits with multi-language OCR and stamp verification.',
        badge: 'Zero PII Leakage',
      },
      {
        title: 'Statute & By-law Grounding',
        description: 'Cross-references 12,000+ local ordinances with semantic vector retrieval.',
        badge: '100% Policy Grounded',
      },
      {
        title: 'Human Caseworker Sign-off',
        description: 'Drafts resolution with exact paragraph citations for civil servant approval.',
        badge: 'Audit Trail Enforced',
      },
    ],
    metrics: [
      { label: 'Casework Latency', value: '1.2s', subtext: 'vs 4.5 days manual' },
      { label: 'Statute Grounding', value: '100%', subtext: 'Deterministic references' },
      { label: 'Citizen Satisfaction', value: '94%', subtext: 'Accurate instant answers' },
    ],
    sampleLog: 'INGESTING: Permit_Variance_2026.pdf [MD5: 8f92a1...]\nGROUNDING: Municipal Code § 44-B (Commercial Use Exemption)\nVERIFICATION: All statutory criteria met. Citation generated: page 42.\nSTATUS: PENDING HUMAN OFFICER APPROVAL.',
  },
  {
    id: 'defence-security',
    name: 'Defence & Security Operations',
    shortName: 'Defence & Security',
    category: 'Tactical Enclaves',
    icon: ShieldCheck,
    tagline: 'Air-Gapped Logistics & Operational Readiness',
    image: '/images/industry_solutions/Lavender Radar Landscape with Airliner.png',
    simulationTitle: 'Mission Critical Fleet Readiness Analysis',
    steps: [
      {
        title: 'Air-Gapped Telemetry Sync',
        description: 'Processes onboard asset telemetry strictly on local hardware with zero cloud egress.',
        badge: 'Zero Network Egress',
      },
      {
        title: 'Predictive Component Stress',
        description: 'Calculates mean time between failures (MTBF) across flight hours and thermal cycles.',
        badge: 'Sub-second Inference',
      },
      {
        title: 'Tactical Decision Briefing',
        description: 'Generates secure maintenance directives for unit commanding officers.',
        badge: 'Cryptographically Signed',
      },
    ],
    metrics: [
      { label: 'Air-Gap Isolation', value: '100%', subtext: 'No foreign server dependencies' },
      { label: 'Mission Readiness', value: '99.4%', subtext: 'Preventative fault alerts' },
      { label: 'Manual Retrieval', value: '<250ms', subtext: 'Local vector database' },
    ],
    sampleLog: 'ISOLATION CHECK: Network interfaces eth0-eth3 physically severed.\nTELEMETRY INGEST: Jet Engine Turbine Stage 2 Vibration Sensor 04.\nPREDICTION: Vibration harmonic abnormal at 9,400 RPM (+0.04mm peak).\nALERT: Scheduled maintenance advised before next sortie. Signed with SHA-256.',
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    shortName: 'Healthcare',
    category: 'Clinical Integrity',
    icon: HeartPulse,
    tagline: 'Clinical NLP & Automated Medical Record Parsing',
    image: '/images/industry_solutions/Modern Purple Hospital Complex.png',
    simulationTitle: 'Clinical Discharge Summary & FHIR Extraction',
    steps: [
      {
        title: 'Unstructured Dictation Ingest',
        description: 'Transcribes voice and physician chart notes into high-fidelity medical records.',
        badge: 'Medical Lexicon Grounded',
      },
      {
        title: 'HIPAA Safe Harbor De-ID',
        description: 'Strips 18 identifiers including names, MRNs, dates, and geographic locations.',
        badge: 'Safe Harbor Compliant',
      },
      {
        title: 'HL7 / FHIR Standardization',
        description: 'Maps clinical observations directly into standard FHIR Observation and DiagnosticReport.',
        badge: 'Interoperable FHIR R4',
      },
    ],
    metrics: [
      { label: 'Doctor Admin Time', value: '-70%', subtext: 'Instant chart drafts' },
      { label: 'Coding Accuracy', value: '98.9%', subtext: 'ICD-10 & SNOMED CT' },
      { label: 'PHI Protection', value: 'Zero', subtext: 'Never cached off-prem' },
    ],
    sampleLog: 'INGESTING: Physician_Dictation_Audio_891.wav\nTRANSCRIPTION: "Patient exhibits bilateral infiltrates, SpO2 93% on room air..."\nDE-IDENTIFICATION: Scrubbed 4 PHI elements using HIPAA Safe Harbor rules.\nFHIR MAPPING: Generated Bundle: Observation (LOINC 2708-6) -> Validated.',
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    shortName: 'Logistics & Supply',
    category: 'Throughput Optimization',
    icon: Truck,
    tagline: 'Customs Manifest OCR & Real-Time Port Tracking',
    image: '/images/industry_solutions/Lavender Port_ Cranes and Cargo.png',
    simulationTitle: 'Automated Port Container Clearance Pipeline',
    steps: [
      {
        title: 'Bill-of-Lading Parsing',
        description: 'Extracts HS tariff codes, weight, consignee, and hazardous goods declarations in 40+ languages.',
        badge: 'Multi-Lingual OCR',
      },
      {
        title: 'Customs Discrepancy Check',
        description: 'Detects weight anomalies and misclassified import duties before customs submission.',
        badge: 'Harmonized Tariff Grounded',
      },
      {
        title: 'Dynamic Gate Dispatch',
        description: 'Allocates container drayage slots to eliminate terminal congestion bottlenecks.',
        badge: 'Real-Time EDI',
      },
    ],
    metrics: [
      { label: 'Dwell Time Reduction', value: '-4.2 hrs', subtext: 'Per TEU container' },
      { label: 'Customs OCR Accuracy', value: '99.1%', subtext: 'Multi-currency & weight' },
      { label: 'Demurrage Cost Savings', value: '$340K', subtext: 'Annual average per fleet' },
    ],
    sampleLog: 'OCR PARSER: Container MSCU-4829104 / Vessel: "MV Lavender Star"\nTARIFF VALIDATION: HS Code 8471.30 (Portable Data Processors) - MATCH.\nWEIGHT RECONCILIATION: Declared: 18,400 kg vs Gate Scale: 18,390 kg (0.05% delta - PASS).\nDISPATCH: Assigned to Gate Terminal 4B, Slot 112.',
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Robotics',
    shortName: 'Manufacturing',
    category: 'Edge Vision & Quality',
    icon: Factory,
    tagline: 'Sub-Millimeter Edge Inspection & Sensor Maintenance',
    image: '/images/industry_solutions/Futuristic Lavender Robotic Assembly Line.png',
    simulationTitle: 'High-Speed Automated Quality Inspection Line',
    steps: [
      {
        title: 'High-Speed Edge Camera Stream',
        description: 'Captures 60 FPS 4K frames of moving parts under variable shop floor lighting.',
        badge: 'Edge TPU Powered',
      },
      {
        title: 'Sub-Millimeter Defect Classifier',
        description: 'Pinpoints micro-cracks, surface pitting, and dimensional tolerance breaches down to 0.01mm.',
        badge: 'Sub-15ms Latency',
      },
      {
        title: 'PLC Pneumatic Ejection Gate',
        description: 'Instantly commands line actuator to divert defective units to scrap recycling.',
        badge: 'Deterministic Actuation',
      },
    ],
    metrics: [
      { label: 'Defect Escape Rate', value: '<0.001%', subtext: 'Zero defects to customer' },
      { label: 'Line Cycle Speed', value: '1,200', subtext: 'Parts inspected per minute' },
      { label: 'Scrap Material Saved', value: '38%', subtext: 'Early process feedback' },
    ],
    sampleLog: 'CAMERA 1 [60 FPS]: Frame #19042 captured.\nINFERENCE ENGINE: YOLO-Edge v8 running on local Coral TPU.\nDETECTION: Part #B-901 / Dimension: 44.012mm (Tolerance: 44.000 ±0.020mm) - PASS.\nSURFACE ROUGHNESS: Ra 0.4um - PASS.\nACTUATOR: Ejector inactive. Part cleared to Packaging Station.',
  },
  {
    id: 'enterprise-services',
    name: 'Enterprise & Professional Services',
    shortName: 'Enterprise',
    category: 'Knowledge Workflows',
    icon: Users,
    tagline: 'Private Cross-Silo RAG & Contract Intelligence',
    image: '/images/industry_solutions/Lavender High-Rise Boardroom Panorama.png',
    simulationTitle: 'Executive M&A Contract Liability Audit',
    steps: [
      {
        title: 'Cross-Repository Ingestion',
        description: 'Connects SharePoint, Google Drive, Salesforce, and ERP with zero third-party training.',
        badge: 'Fine-Grained RBAC',
      },
      {
        title: 'Semantic Clause Variance Engine',
        description: 'Compares supplier indemnification clauses against standard corporate playbook.',
        badge: 'Audit Verifiable',
      },
      {
        title: 'Executive Briefing Generator',
        description: 'Compiles risk memo with exact page citations and financial liability calculations.',
        badge: 'Human Oversight Ready',
      },
    ],
    metrics: [
      { label: 'RFP & Contract Speed', value: '5.5x', subtext: 'Faster turnaround' },
      { label: 'Source Verification', value: '100%', subtext: 'Direct clickable links' },
      { label: 'Data Privacy Guard', value: 'SOC 2', subtext: 'Strict enclave isolation' },
    ],
    sampleLog: 'QUERY: "Identify uncapped liability provisions across 2023-2026 Vendor MSAs."\nSEMANTIC SEARCH: 412 PDF contracts parsed in 840ms.\nFINDING: 2 agreements contain mutual uncapped liability for consequential damages.\nCITATIONS: Vendor_Agreement_CorpA.pdf (p. 23) and Global_Supply_LLC.pdf (p. 104).\nOUTPUT: Executive Summary compiled with redline suggestions.',
  },
];

export const IndustryInteractiveStudio: React.FC = () => {
  const [activeSectorId, setActiveSectorId] = useState<string>('government');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationStep, setSimulationStep] = useState<number>(0);

  const activeSector = SECTOR_STUDIOS.find((s) => s.id === activeSectorId) || SECTOR_STUDIOS[0];
  const Icon = activeSector.icon;

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulationStep(1);

    setTimeout(() => {
      setSimulationStep(2);
    }, 900);

    setTimeout(() => {
      setSimulationStep(3);
    }, 1800);

    setTimeout(() => {
      setIsSimulating(false);
    }, 2700);
  };

  const handleReset = () => {
    setSimulationStep(0);
    setIsSimulating(false);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#6853A5]/10 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#F0EAFB]/40 via-[#F7F3FD]/60 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />

      <Container>
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9FF] border border-[#6853A5]/20 text-xs font-semibold text-violet-primary mb-3">
            <Sliders className="w-3.5 h-3.5 text-violet-primary" />
            <span className="font-mono uppercase text-[11px] tracking-wider">LIVE OPERATIONAL STUDIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.12]">
            Test How Brombeer Executes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-deep">
              Within Your Perimeter.
            </span>
          </h2>
          <p className="text-[#666371] text-sm sm:text-base font-dm leading-relaxed mt-4 max-w-2xl">
            Choose your sector below to see an interactive, step-by-step workflow simulation with live telemetry, verification checks, and deterministic outputs.
          </p>
        </div>

        {/* Dynamic Floating Sector Dock */}
        <div className="flex justify-center mb-8 sm:mb-12 px-2">
          <div className="max-w-full rounded-2xl sm:rounded-full bg-white/95 backdrop-blur-xl border border-violet-primary/20 shadow-[0_12px_36px_-10px_rgba(118,80,232,0.12)] p-1.5 flex flex-wrap items-center justify-center gap-1 sm:gap-1.5">
            {SECTOR_STUDIOS.map((sector) => {
              const SectorIcon = sector.icon;
              const isActive = sector.id === activeSectorId;

              return (
                <button
                  key={sector.id}
                  onClick={() => {
                    setActiveSectorId(sector.id);
                    handleReset();
                  }}
                  className={`group relative px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-[13px] font-dm font-semibold transition-colors duration-200 select-none flex items-center gap-2 whitespace-nowrap z-10 ${
                    isActive ? 'text-white' : 'text-[#555162] hover:text-[#111014] hover:bg-[#FAF9FF]'
                  }`}
                >
                  {/* Fluid Spring Gliding Pill Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStudioTab"
                      className="absolute inset-0 rounded-xl sm:rounded-full bg-gradient-to-r from-violet-primary via-[#805BF6] to-violet-deep shadow-md shadow-violet-primary/30 -z-10"
                      transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                    />
                  )}

                  {/* Dual-State Icon: Grayish dull initially, crisp white when active/hovered */}
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-[#EDE8F5]/90 text-[#8E869E] group-hover:bg-violet-primary group-hover:text-white'
                    }`}
                  >
                    <SectorIcon className="w-3.5 h-3.5" />
                  </div>

                  <span>{sector.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Studio Workbench */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2.25rem] bg-gradient-to-br from-white via-[#FAF9FF] to-[#F5F0FD] border border-[#E5DEFA] shadow-xl p-6 sm:p-10 lg:p-12 space-y-8"
          >
            {/* Studio Header Bar */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#EAE4F5] pb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2D8F8] text-violet-primary flex items-center justify-center shadow-sm">
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-violet-primary uppercase tracking-wider">
                      {activeSector.category}
                    </span>
                    <span className="text-[#CCC6D9]">•</span>
                    <span className="text-[11px] font-mono text-[#666371]">
                      SIMULATION BENCH
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-sans font-extrabold text-[#111014] tracking-tight">
                    {activeSector.simulationTitle}
                  </h3>
                  <p className="text-xs sm:text-sm font-dm text-[#666371] mt-0.5">
                    {activeSector.tagline}
                  </p>
                </div>
              </div>

              {/* Simulation Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-sans font-semibold text-xs transition-all shadow-md ${
                    isSimulating
                      ? 'bg-violet-primary/70 text-white cursor-wait'
                      : 'bg-violet-primary hover:bg-violet-deep text-white shadow-violet-primary/20 hover:scale-105 active:scale-95'
                  }`}
                >
                  <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? 'Simulating Pipeline...' : 'Run Simulation'}</span>
                </button>

                <button
                  onClick={handleReset}
                  className="p-2.5 rounded-xl bg-white border border-[#E2D8F8] text-[#555261] hover:text-[#111014] hover:bg-[#F3EEFD] transition-colors"
                  title="Reset simulation state"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* 3 Step Visual Operational Pipeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeSector.steps.map((step, idx) => {
                const stepNum = idx + 1;
                const isStepActive = simulationStep >= stepNum || simulationStep === 0;
                const isCurrent = simulationStep === stepNum;

                return (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border transition-all duration-300 relative ${
                      isCurrent
                        ? 'bg-white border-violet-primary shadow-lg ring-2 ring-violet-primary/20'
                        : isStepActive
                        ? 'bg-white/80 border-[#E8E2F5] shadow-xs'
                        : 'bg-white/40 border-[#EFEAF6] opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                            isCurrent
                              ? 'bg-violet-primary text-white animate-pulse'
                              : isStepActive
                              ? 'bg-[#EDE7FB] text-violet-primary'
                              : 'bg-gray-100 text-gray-400'
                          }`}
                        >
                          {stepNum}
                        </span>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7650E8]">
                          STAGE {stepNum}
                        </span>
                      </div>

                      <span className="px-2 py-0.5 rounded-md bg-[#FAF9FF] border border-[#E5DEFA] text-[10px] font-mono text-[#666371]">
                        {step.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-sans font-bold text-[#111014] mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-xs font-dm text-[#666371] leading-relaxed">
                      {step.description}
                    </p>

                    {isCurrent && (
                      <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-violet-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-primary animate-ping" />
                        <span>Processing in enclave...</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Split: Live Enclave Log Stream + Quantitative Metrics */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Log Console (Span 7) */}
              <div className="lg:col-span-7 rounded-2xl bg-[#111018] text-white p-5 border border-[#2D283E] flex flex-col justify-between font-mono text-xs">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                  <div className="flex items-center gap-2">
                    <FileCode className="w-4 h-4 text-violet-primary" />
                    <span className="text-[11px] text-white/80 font-bold uppercase">
                      ENCLAVE LOG OUTPUT STREAM
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    DETERMINISTIC
                  </span>
                </div>

                <pre className="text-[11.5px] text-[#A69FC0] whitespace-pre-wrap font-mono leading-relaxed overflow-x-auto no-scrollbar py-1">
                  {activeSector.sampleLog}
                </pre>

                <div className="border-t border-white/10 pt-3 mt-3 flex items-center justify-between text-[10px] text-white/40">
                  <span>Audit Hash: SHA-256 (Immutable)</span>
                  <span>Isolation: Zero External APIs</span>
                </div>
              </div>

              {/* Right Performance Scorecard (Span 5) */}
              <div className="lg:col-span-5 rounded-2xl bg-white border border-[#E8E2F5] p-5 flex flex-col justify-between space-y-4">
                <div className="border-b border-[#F0EAFB] pb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-violet-primary block">
                    OPERATIONAL IMPACT SCORECARD
                  </span>
                  <span className="text-xs font-dm text-[#666371]">
                    Quantified against industry baseline
                  </span>
                </div>

                <div className="space-y-3">
                  {activeSector.metrics.map((metric, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#FAF9FF] border border-[#ECE5FA] flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold text-[#111014] block">
                          {metric.label}
                        </span>
                        <span className="text-[10px] text-[#827E8E] font-dm">
                          {metric.subtext}
                        </span>
                      </div>
                      <span className="text-xl font-sans font-extrabold text-violet-primary">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    asLink
                    href="/contact"
                    variant="primary"
                    size="sm"
                    className="w-full text-center justify-center text-xs"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Deploy for {activeSector.name}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};

