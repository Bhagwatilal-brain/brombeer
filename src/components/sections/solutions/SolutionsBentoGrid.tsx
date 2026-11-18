import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Database, Cloud, ShieldCheck, GitCommit, Table2, ArrowRight } from 'lucide-react';
import { Container } from '../../layout/Container';

export const SolutionsBentoGrid: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#FAF8FE] via-[#F5F0FD] to-[#FAF8FE] relative overflow-hidden">
      {/* Soft atmospheric background illumination */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-violet-light/25 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-[#EDE7FB]/50 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <span className="text-xs font-mono font-semibold text-violet-primary uppercase tracking-widest block mb-3">
            ARCHITECTURE & CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold text-[#111014] tracking-[-0.03em] leading-[1.12]">
            Engineered to Connect, Govern, and Deliver{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-primary to-violet-deep">
              Enterprise Value.
            </span>
          </h2>
          <p className="text-[#666371] text-sm sm:text-base font-dm leading-relaxed mt-4 max-w-2xl">
            See how Brombeer AI seamlessly integrates with your existing data warehouses, enforces strict git-audited governance, and enables business teams to query enterprise intelligence in real time.
          </p>
        </div>

        {/* 4-Item Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7">
          {/* Card 1: Connects to the entire stack (Orbital Rings Illustration) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 h-full"
          >
            <div className="group relative p-6 sm:p-8 rounded-[2rem] bg-white border border-[#E9E4F5] shadow-[0_12px_40px_-15px_rgba(118,80,232,0.07),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-violet-primary/14 hover:border-violet-primary/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden min-h-[480px]">
              {/* Top purple hover indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Illustration 1: Orbital Stack Connectivity */}
              <div className="h-60 sm:h-68 w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#FBF9FE] via-[#F8F5FD] to-white/70 rounded-2xl border border-[#EDE8F6] select-none">
                {/* Orbital Arcs SVG */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 400 240"
                  fill="none"
                  aria-hidden="true"
                >
                  {/* Concentric semi-circular orbit rings */}
                  <path
                    d="M 130 220 A 70 70 0 0 1 270 220"
                    stroke="#D8CFED"
                    strokeWidth="1.25"
                    strokeDasharray="3 3"
                  />
                  <path
                    d="M 80 220 A 120 120 0 0 1 320 220"
                    stroke="#D8CFED"
                    strokeWidth="1.25"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 30 220 A 170 170 0 0 1 370 220"
                    stroke="#D8CFED"
                    strokeWidth="1.25"
                    strokeDasharray="5 5"
                  />

                  {/* Soft Radial Center Flare */}
                  <circle cx="200" cy="220" r="45" fill="url(#center-glow)" opacity="0.6" />
                  <defs>
                    <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#7650E8" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#7650E8" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>

                {/* Orbiting Tech Nodes */}
                {/* Node 1: BigQuery / Google Cloud (Outer Left) */}
                <div className="absolute left-[12%] top-[38%] -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-[#E8E2F4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" fill="#4285F4" fillOpacity="0.12" stroke="#4285F4" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="3.5" fill="#4285F4" />
                  </svg>
                </div>

                {/* Node 2: Snowflake (Middle Left) */}
                <div className="absolute left-[20%] top-[70%] -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-[#E8E2F4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-cyan-500 font-bold text-sm select-none">❄</span>
                </div>

                {/* Node 3: Salesforce (Outer Top Left) */}
                <div className="absolute left-[30%] top-[20%] -translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-[#E8E2F4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cloud className="w-4.5 h-4.5 text-[#00A1E0]" />
                </div>

                {/* Node 4: Pinecone / Vector DB (Inner Arc Left) */}
                <div className="absolute left-[38%] top-[54%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-md border border-[#E8E2F4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#7650E8] font-mono font-bold text-xs">▰</span>
                </div>

                {/* Node 5: Databricks (Outer Center Right) */}
                <div className="absolute right-[30%] top-[20%] translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-[#E8E2F4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#FF3621] font-bold text-xs select-none">◆</span>
                </div>

                {/* Node 6: PostgreSQL / Vector Store (Inner Center) */}
                <div className="absolute right-[42%] top-[40%] translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white shadow-md border border-[#E8E2F4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-4 h-4 text-[#336791]" />
                </div>

                {/* Node 7: Sovereign Tenancy (Outer Right) */}
                <div className="absolute right-[18%] top-[34%] translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-[#E8E2F4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheck className="w-4.5 h-4.5 text-[#10B981]" />
                </div>

                {/* Node 8: ERP / SAP (Middle Right) */}
                <div className="absolute right-[22%] top-[68%] translate-x-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-md border border-[#E8E2F4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-[#059669] font-bold text-xs select-none">∿</span>
                </div>

                {/* Node 9: API Conduits (Outer Far Right) */}
                <div className="absolute right-[9%] top-[60%] translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-white shadow-md border border-[#E8E2F4] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-violet-primary font-bold text-xs select-none">⚯</span>
                </div>

                {/* Central Core Emblem at Bottom-Center */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white shadow-xl shadow-amber-500/15 border-2 border-[#FDE68A] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300">
                    <span className="absolute -inset-1 rounded-full bg-amber-400/20 blur-sm pointer-events-none animate-pulse" />
                    {/* Golden Double Chevron Emblem */}
                    <div className="flex items-center text-amber-500 font-bold text-lg select-none pl-0.5">
                      <span>›</span>
                      <span className="-ml-1">›</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Description Block */}
              <div className="pt-6 sm:pt-7">
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#111014] tracking-tight mb-2 group-hover:text-violet-primary transition-colors duration-200">
                  Connects to the entire stack
                </h3>
                <p className="text-sm font-dm text-[#666371] leading-relaxed">
                  Brombeer AI quickly and securely connects to the most popular warehouses, databases, ERPs, and cloud storage providers with strict tenancy boundaries.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Modern controls, out of the box (3 Floating Panels) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 h-full"
          >
            <div className="group relative p-6 sm:p-8 rounded-[2rem] bg-white border border-[#E9E4F5] shadow-[0_12px_40px_-15px_rgba(118,80,232,0.07),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-violet-primary/14 hover:border-violet-primary/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden min-h-[480px]">
              {/* Top purple hover indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Illustration 2: 3 Floating Cards (Schema, Commits, Workflow DAG) */}
              <div className="h-60 sm:h-68 w-full flex items-center justify-center gap-2 sm:gap-3 p-3 sm:p-4 relative overflow-hidden bg-gradient-to-b from-[#FBF9FE] via-[#F8F5FD] to-white/70 rounded-2xl border border-[#EDE8F6] select-none">
                {/* Floating Panel 1: Data Schema Tables */}
                <div className="w-[32%] h-[82%] bg-white rounded-xl border border-[#E8E2F4] p-2.5 sm:p-3 shadow-md shadow-violet-primary/[0.04] flex flex-col justify-between group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-[#F0ECF8]">
                    <div className="w-4 h-4 rounded bg-rose-50 border border-rose-200 flex items-center justify-center text-[10px] text-rose-600 font-bold">
                      ⊞
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-[#111014] truncate">
                      Schema
                    </span>
                  </div>

                  <div className="space-y-1.5 py-1 text-[9.5px] sm:text-[10px] font-mono text-[#666371]">
                    <div className="flex items-center gap-1 truncate hover:text-violet-primary transition-colors">
                      <span className="text-[#8E869E]">⊞</span>
                      <span className="truncate">new_customers</span>
                    </div>
                    <div className="flex items-center gap-1 truncate hover:text-violet-primary transition-colors">
                      <span className="text-[#8E869E]">⊞</span>
                      <span className="truncate">orders_fact</span>
                    </div>
                    <div className="flex items-center gap-1 truncate hover:text-violet-primary transition-colors">
                      <span className="text-[#8E869E]">⊞</span>
                      <span className="truncate">payments</span>
                    </div>
                  </div>

                  <div className="pt-1 border-t border-[#F0ECF8] flex items-center justify-between text-[8.5px] font-mono text-[#8E869E]">
                    <span>3 tables</span>
                    <span className="text-emerald-600 font-semibold">Ready</span>
                  </div>
                </div>

                {/* Floating Panel 2: Git Commit & Audit Trail */}
                <div className="w-[34%] h-[90%] bg-white rounded-xl border border-violet-primary/25 p-2.5 sm:p-3 shadow-lg shadow-violet-primary/[0.08] flex flex-col justify-between group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex items-center justify-between pb-2 border-b border-[#F0ECF8]">
                    <div className="flex items-center gap-1">
                      <GitCommit className="w-3.5 h-3.5 text-violet-primary" />
                      <span className="text-[10px] font-mono font-bold text-violet-primary">
                        Audit Git
                      </span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="space-y-1.5 py-1">
                    <span className="text-[9px] font-dm text-[#8E869E] block truncate">
                      Commits on Nov 24, 2026
                    </span>
                    <div className="p-1.5 rounded-lg bg-[#FAF9FF] border border-violet-primary/15 flex items-center gap-1.5">
                      <div className="w-3.5 h-3.5 rounded bg-emerald-500 flex items-center justify-center text-white text-[8px] font-bold">
                        ✓
                      </div>
                      <span className="text-[9px] font-mono font-semibold text-[#111014] truncate">
                        Verified by Gate
                      </span>
                    </div>
                    <span className="text-[8.5px] font-mono text-emerald-600 block truncate">
                      Policy check 100% passed
                    </span>
                  </div>

                  <div className="pt-1 border-t border-[#F0ECF8] flex items-center justify-between text-[8.5px] font-mono text-[#8E869E]">
                    <span>v2.4.1</span>
                    <span className="text-violet-primary font-semibold">Immutable</span>
                  </div>
                </div>

                {/* Floating Panel 3: DAG Workflow Pipeline */}
                <div className="w-[32%] h-[82%] bg-white rounded-xl border border-[#E8E2F4] p-2.5 sm:p-3 shadow-md shadow-violet-primary/[0.04] flex flex-col justify-between group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex items-center gap-1.5 pb-2 border-b border-[#F0ECF8]">
                    <div className="flex items-center gap-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-primary" />
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-[#111014] truncate">
                      DAG Flow
                    </span>
                  </div>

                  {/* Visual branching nodes */}
                  <div className="py-2 flex items-center justify-between relative">
                    <div className="w-5 h-5 rounded border border-[#E0D8EE] bg-[#FAF9FF] flex items-center justify-center text-[8px] font-bold text-violet-primary">
                      ⊞
                    </div>
                    <div className="flex-1 px-1 flex flex-col items-center justify-center">
                      <svg className="w-full h-8" viewBox="0 0 40 30" fill="none">
                        <path d="M 0 15 C 15 15, 25 5, 40 5" stroke="#7650E8" strokeWidth="1.25" strokeDasharray="2 2" />
                        <path d="M 0 15 C 15 15, 25 25, 40 25" stroke="#7650E8" strokeWidth="1.25" strokeDasharray="2 2" />
                      </svg>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="w-5 h-5 rounded border border-emerald-300 bg-emerald-50 flex items-center justify-center text-[8px] font-bold text-emerald-700">
                        ✓
                      </div>
                      <div className="w-5 h-5 rounded border border-[#E0D8EE] bg-[#FAF9FF] flex items-center justify-center text-[8px] font-bold text-violet-primary">
                        ⊞
                      </div>
                    </div>
                  </div>

                  <div className="pt-1 border-t border-[#F0ECF8] flex items-center justify-between text-[8.5px] font-mono text-[#8E869E]">
                    <span>Orchestrated</span>
                    <span className="text-violet-primary font-semibold">Active</span>
                  </div>
                </div>
              </div>

              {/* Text Description Block */}
              <div className="pt-6 sm:pt-7">
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#111014] tracking-tight mb-2 group-hover:text-violet-primary transition-colors duration-200">
                  Modern controls, out of the box
                </h3>
                <p className="text-sm font-dm text-[#666371] leading-relaxed">
                  Every model action and retrieval path is grounded against schema definitions, versioned with git auditability, and supervised by human verification gates.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Less time servicing requests (Conversational Query Stack - Wider 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 h-full"
          >
            <div className="group relative p-6 sm:p-8 rounded-[2rem] bg-white border border-[#E9E4F5] shadow-[0_12px_40px_-15px_rgba(118,80,232,0.07),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-violet-primary/14 hover:border-violet-primary/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden min-h-[480px]">
              {/* Top purple hover indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Illustration 3: Conversational Prompt Stack */}
              <div className="h-60 sm:h-68 w-full flex flex-col justify-center gap-2.5 sm:gap-3 p-4 sm:p-6 relative overflow-hidden bg-gradient-to-b from-[#FBF9FE] via-[#F8F5FD] to-white/70 rounded-2xl border border-[#EDE8F6] select-none">
                {/* Subtle top faded ghost pill */}
                <div className="w-full bg-white/50 rounded-2xl border border-[#E8E2F4]/60 px-4 py-2 flex items-center justify-between text-xs text-[#8E869E]/50 pointer-events-none -mb-1 opacity-50 blur-[0.4px]">
                  <div className="flex items-center gap-2 truncate">
                    <Sparkles className="w-3.5 h-3.5 text-violet-primary/40" />
                    <span className="truncate">Query total active enterprise accounts...</span>
                  </div>
                </div>

                {/* Prompt Pill 1 */}
                <div className="w-full bg-white/95 rounded-2xl border border-[#E8E2F4] px-4 py-3 shadow-xs flex items-center justify-between gap-3 group-hover:translate-x-1 transition-all duration-300">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Sparkles className="w-4 h-4 text-violet-primary flex-shrink-0" />
                    <span className="text-xs sm:text-[13px] font-dm text-[#2E2B38] font-medium truncate">
                      Show me a list of contacts that haven't signed in in the last 10 days
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/50 flex-shrink-0">
                    84 found
                  </span>
                </div>

                {/* Prompt Pill 2 (Highlighted Hero Pill) */}
                <div className="w-full bg-white rounded-2xl border border-violet-primary/35 px-4 py-3.5 shadow-lg shadow-violet-primary/10 flex items-center justify-between gap-3 group-hover:scale-[1.01] transition-all duration-300">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#7650E8] to-[#9D7DFF] flex items-center justify-center text-white flex-shrink-0 shadow-xs">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-[13.5px] font-dm text-[#111014] font-semibold truncate">
                      How much revenue did we generate across enterprise tiers last fiscal?
                    </span>
                  </div>
                  <span className="text-[10.5px] font-mono px-2.5 py-1 rounded-full bg-[#FAF9FF] text-violet-primary font-bold border border-violet-primary/25 flex-shrink-0">
                    SQL • 0.3s
                  </span>
                </div>

                {/* Prompt Pill 3 */}
                <div className="w-full bg-white/95 rounded-2xl border border-[#E8E2F4] px-4 py-3 shadow-xs flex items-center justify-between gap-3 group-hover:translate-x-1 transition-all duration-300">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Sparkles className="w-4 h-4 text-violet-primary flex-shrink-0" />
                    <span className="text-xs sm:text-[13px] font-dm text-[#2E2B38] font-medium truncate">
                      How many active users do we have per Salesforce account?
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-50 text-violet-primary font-semibold border border-violet-primary/20 flex-shrink-0">
                    Auto-Grounded
                  </span>
                </div>
              </div>

              {/* Text Description Block */}
              <div className="pt-6 sm:pt-7">
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#111014] tracking-tight mb-2 group-hover:text-violet-primary transition-colors duration-200">
                  Less time servicing requests
                </h3>
                <p className="text-sm font-dm text-[#666371] leading-relaxed">
                  Natural language to SQL and semantic RAG empower business teams to query enterprise databases and receive verifiable answers instantly.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Warehouse native (Cloud & Tech Badges - 5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 h-full"
          >
            <div className="group relative p-6 sm:p-8 rounded-[2rem] bg-white border border-[#E9E4F5] shadow-[0_12px_40px_-15px_rgba(118,80,232,0.07),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-violet-primary/14 hover:border-violet-primary/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full overflow-hidden min-h-[480px]">
              {/* Top purple hover indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Illustration 4: Cloud Outline with 3 Spherical Tech Badges */}
              <div className="h-60 sm:h-68 w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#FBF9FE] via-[#F8F5FD] to-white/70 rounded-2xl border border-[#EDE8F6] select-none">
                {/* Cloud Outline SVG */}
                <div className="relative w-64 h-44 sm:w-72 sm:h-48 flex items-center justify-center">
                  <svg
                    className="w-full h-full text-violet-primary/30 group-hover:text-violet-primary/50 transition-colors duration-300"
                    viewBox="0 0 240 160"
                    fill="none"
                    aria-hidden="true"
                  >
                    {/* Cloud Path */}
                    <path
                      d="M 65 140 H 180 C 205 140 225 120 225 95 C 225 72 208 53 186 50 C 180 25 155 8 128 8 C 103 8 82 23 74 46 C 48 48 28 69 28 95 C 28 120 45 140 65 140 Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      fill="rgba(245, 240, 255, 0.4)"
                    />
                  </svg>

                  {/* 3 Spherical Tech Emblems inside the Cloud */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4 z-10 pt-4">
                    {/* Emblem 1: Snowflake */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl shadow-cyan-500/15 border border-cyan-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-cyan-500 font-bold text-lg select-none">❄</span>
                    </div>

                    {/* Emblem 2: Databricks */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl shadow-red-500/15 border border-red-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="flex flex-col items-center justify-center gap-0.5">
                        <span className="w-4 h-1 rounded bg-[#FF3621]" />
                        <span className="w-4 h-1 rounded bg-[#FF3621]" />
                        <span className="w-4 h-1 rounded bg-[#FF3621]" />
                      </div>
                    </div>

                    {/* Emblem 3: BigQuery / Sovereign Vector */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-xl shadow-blue-500/15 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Database className="w-5 h-5 text-[#4285F4]" />
                    </div>
                  </div>

                  {/* Gentle background floating dots */}
                  <div className="absolute top-4 left-6 w-1.5 h-1.5 rounded-full bg-violet-primary/25" />
                  <div className="absolute top-8 right-8 w-1 h-1 rounded-full bg-violet-primary/30" />
                  <div className="absolute bottom-6 left-10 w-1 h-1 rounded-full bg-violet-primary/20" />
                </div>
              </div>

              {/* Text Description Block */}
              <div className="pt-6 sm:pt-7">
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#111014] tracking-tight mb-2 group-hover:text-violet-primary transition-colors duration-200">
                  Warehouse native
                </h3>
                <p className="text-sm font-dm text-[#666371] leading-relaxed">
                  Execute analytics and language queries directly within your authorized data warehouse boundaries with zero external data duplication.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

