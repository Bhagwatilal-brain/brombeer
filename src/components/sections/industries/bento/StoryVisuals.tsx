import React from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  Clock,
  Shield,
  Check,
  Lock,
  Radar,
  Radio,
  Cpu,
  ShieldAlert,
  HeartPulse,
  Activity,
  FileCheck,
  Ship,
  Truck,
  Zap,
  AlertTriangle,
  Crosshair,
  CheckCircle2,
  Database,
  Layers,
  Sparkles,
} from 'lucide-react';

/* =========================================================================
   1. GOVERNMENT STORY VISUALS
   ========================================================================= */
export const GovernmentChallengeVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#181326] to-[#120E20] border border-amber-900/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-2 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
      <Clock className="w-7 h-7 animate-pulse" />
    </div>
    <div className="text-sm font-sans font-bold text-white">4.5-Day Bureaucratic Queue</div>
    <p className="text-xs text-white/60 font-dm max-w-xs mt-1">
      Citizen variance requests stuck across siloed municipal departments waiting for manual statute lookups.
    </p>
  </div>
);

export const GovernmentSolutionVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#141026] to-[#120E22] border border-violet-500/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-600 border border-violet-300/60 flex items-center justify-center text-white mb-2 shadow-[0_0_25px_rgba(139,92,246,0.5)]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-2xl border border-dashed border-white/40"
      />
      <Shield className="w-7 h-7 text-white" />
    </div>
    <div className="text-sm font-sans font-bold text-white">Sovereign Enclave Cross-Ref</div>
    <p className="text-xs text-violet-200/80 font-dm max-w-xs mt-1">
      12,000+ local ordinances semantically cross-matched in 140ms on local sovereign infrastructure.
    </p>
  </div>
);

export const GovernmentImpactVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#0F1E19] to-[#0A1411] border border-emerald-500/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 mb-2 shadow-[0_0_25px_rgba(52,211,153,0.3)]">
      <Check className="w-8 h-8 stroke-[3]" />
    </div>
    <div className="text-sm font-sans font-bold text-white">100% Audited Human Approval</div>
    <p className="text-xs text-emerald-200/80 font-dm max-w-xs mt-1">
      Officer reviews complete legal citation trail and signs off with a single click. Zero public cloud leakage.
    </p>
  </div>
);

/* =========================================================================
   2. DEFENCE STORY VISUALS
   ========================================================================= */
export const DefenceChallengeVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#1F1215] to-[#140B0E] border border-rose-900/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="w-14 h-14 rounded-2xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 mb-2 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
      <ShieldAlert className="w-7 h-7 animate-pulse" />
    </div>
    <div className="text-sm font-sans font-bold text-white">Public Cloud Vulnerability</div>
    <p className="text-xs text-white/60 font-dm max-w-xs mt-1">
      Hostile environments cannot rely on satellite uplinks or risk data exfiltration to external commercial APIs.
    </p>
  </div>
);

export const DefenceSolutionVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#141026] to-[#0D0A18] border border-violet-500/40 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="relative w-full max-w-[260px] py-2 flex items-center justify-center mb-1">
      <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-violet-400 to-transparent shadow-[0_0_12px_#A78BFA]" />
      <div className="absolute px-3 py-0.5 rounded-full bg-[#0D0A18] border border-violet-400 text-[10px] font-mono text-violet-200 font-bold flex items-center gap-1">
        <Lock className="w-3 h-3 text-violet-300" />
        HARDWARE AIR-GAP FENCE
      </div>
    </div>
    <div className="text-sm font-sans font-bold text-white mt-2">100% Local Inference Barrier</div>
    <p className="text-xs text-violet-200/80 font-dm max-w-xs mt-1">
      All weights and queries locked on encrypted local hardware with 0 bytes of external network egress.
    </p>
  </div>
);

export const DefenceImpactVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#0B0916] to-[#070510] border border-blue-500/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="relative w-16 h-16 rounded-full border border-blue-400/30 flex items-center justify-center mb-1">
      <div className="absolute inset-0 rounded-full border border-dashed border-blue-400/40 animate-spin" style={{ animationDuration: '6s' }} />
      <Radar className="w-7 h-7 text-blue-400" />
    </div>
    <div className="text-sm font-sans font-bold text-white">99.4% Mission Fleet Readiness</div>
    <p className="text-xs text-blue-200/80 font-dm max-w-xs mt-1">
      Deterministic technical manual retrieval in &lt;280ms keeps mission-critical assets operational in the field.
    </p>
  </div>
);

/* =========================================================================
   3. HEALTHCARE STORY VISUALS
   ========================================================================= */
export const HealthcareChallengeVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#1C121E] to-[#140C16] border border-rose-900/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="w-14 h-14 rounded-2xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 mb-2">
      <Clock className="w-7 h-7 animate-pulse" />
    </div>
    <div className="text-sm font-sans font-bold text-white">4+ Hours of Daily Charting</div>
    <p className="text-xs text-white/60 font-dm max-w-xs mt-1">
      Physicians spend over a third of their shifts transcribing clinical notes and wrestling EHR interfaces.
    </p>
  </div>
);

export const HealthcareSolutionVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#161226] to-[#100C1C] border border-violet-500/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="px-3 py-1.5 rounded-lg bg-violet-600/30 border border-violet-400/50 text-violet-200 font-mono text-xs font-bold mb-2 flex items-center gap-1.5 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
      <Lock className="w-3.5 h-3.5 text-violet-300" />
      [SAFE_HARBOR_DE-IDENTIFIED]
    </div>
    <div className="text-sm font-sans font-bold text-white">Automated PHI Scrubbing</div>
    <p className="text-xs text-violet-200/80 font-dm max-w-xs mt-1">
      Real-time redaction masks 18 HIPAA identifiers while preserving full clinical diagnosis context.
    </p>
  </div>
);

export const HealthcareImpactVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#0F1E1A] to-[#0A1412] border border-emerald-500/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="w-48 h-8 mb-2">
      <svg viewBox="0 0 160 24" className="w-full h-full stroke-emerald-400 fill-none">
        <path
          d="M 0 12 L 25 12 L 32 4 L 40 20 L 48 8 L 56 16 L 64 12 L 100 12 L 107 4 L 115 20 L 123 8 L 131 16 L 138 12 L 160 12"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <div className="text-sm font-sans font-bold text-white">Instant FHIR R4 Synthesized</div>
    <p className="text-xs text-emerald-200/80 font-dm max-w-xs mt-0.5">
      Physicians gain 65% of charting time back with 100% human-in-the-loop clinical validation.
    </p>
  </div>
);

/* =========================================================================
   4. LOGISTICS STORY VISUALS
   ========================================================================= */
export const LogisticsChallengeVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#1C1812] to-[#14100B] border border-amber-900/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-2">
      <Ship className="w-7 h-7 animate-pulse" />
    </div>
    <div className="text-sm font-sans font-bold text-white">8-Hour Port Gate Bottlenecks</div>
    <p className="text-xs text-white/60 font-dm max-w-xs mt-1">
      Container dwell times skyrocket as customs agents manually reconcile multi-carrier bills of lading.
    </p>
  </div>
);

export const LogisticsSolutionVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#181326] to-[#120E20] border border-violet-500/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="w-14 h-14 rounded-2xl bg-violet-600/30 border border-violet-400/50 flex items-center justify-center text-violet-300 mb-2 shadow-[0_0_20px_rgba(139,92,246,0.3)]">
      <Zap className="w-7 h-7 text-violet-300" />
    </div>
    <div className="text-sm font-sans font-bold text-white">Autonomous EDI & Tariff Match</div>
    <p className="text-xs text-violet-200/80 font-dm max-w-xs mt-1">
      OCR engines extract container manifests instantly and cross-verify weight limits and customs duties.
    </p>
  </div>
);

export const LogisticsImpactVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#0F1E19] to-[#0A1411] border border-emerald-500/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 mb-2 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
      <Truck className="w-7 h-7" />
    </div>
    <div className="text-sm font-sans font-bold text-white">4.2x Faster Yard Clearance</div>
    <p className="text-xs text-emerald-200/80 font-dm max-w-xs mt-1">
      Gate dwell cut from 8.2 hours to 1.4 hours with 98.6% predictive inventory placement accuracy.
    </p>
  </div>
);

/* =========================================================================
   5. MANUFACTURING STORY VISUALS
   ========================================================================= */
export const ManufacturingChallengeVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#1C1215] to-[#140B0E] border border-rose-900/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="w-14 h-14 rounded-2xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center text-rose-300 mb-2">
      <AlertTriangle className="w-7 h-7 animate-pulse" />
    </div>
    <div className="text-sm font-sans font-bold text-white">Undetected Micro-Fractures</div>
    <p className="text-xs text-white/60 font-dm max-w-xs mt-1">
      High-speed lines move too fast for manual inspection, letting microscopic defects reach downstream assembly.
    </p>
  </div>
);

export const ManufacturingSolutionVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#090812] to-[#05040A] border border-emerald-500/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center text-emerald-300 mb-2 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
      <Crosshair className="w-7 h-7 text-emerald-400 animate-spin" style={{ animationDuration: '12s' }} />
    </div>
    <div className="text-sm font-sans font-bold text-white">60 FPS Edge Vision Reticle</div>
    <p className="text-xs text-emerald-200/80 font-dm max-w-xs mt-1">
      TensorRT models inspect components at ±0.015mm sub-millimeter precision in under 12ms.
    </p>
  </div>
);

export const ManufacturingImpactVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#0F1E19] to-[#0A1411] border border-emerald-500/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 mb-2 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
      <CheckCircle2 className="w-7 h-7" />
    </div>
    <div className="text-sm font-sans font-bold text-white">-38% Scrap & Zero Returns</div>
    <p className="text-xs text-emerald-200/80 font-dm max-w-xs mt-1">
      Defective parts are flagged and diverted instantly, saving hundreds of hours of factory rework.
    </p>
  </div>
);

/* =========================================================================
   6. ENTERPRISE STORY VISUALS
   ========================================================================= */
export const EnterpriseChallengeVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#181326] to-[#120E20] border border-amber-900/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-2">
      <Layers className="w-7 h-7 animate-pulse" />
    </div>
    <div className="text-sm font-sans font-bold text-white">Paralyzed in Disconnected Silos</div>
    <p className="text-xs text-white/60 font-dm max-w-xs mt-1">
      Teams waste days cross-referencing SharePoint, Salesforce, and legal drives without source confidence.
    </p>
  </div>
);

export const EnterpriseSolutionVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#141026] to-[#0E0A1A] border border-violet-500/40 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-500 border border-violet-300/50 flex items-center justify-center text-white mb-2 shadow-[0_0_25px_rgba(139,92,246,0.5)]">
      <Cpu className="w-7 h-7 text-white" />
    </div>
    <div className="text-sm font-sans font-bold text-white">Unified Private Neural Core</div>
    <p className="text-xs text-violet-200/80 font-dm max-w-xs mt-1">
      SAML tokens filter every query so employees only access knowledge permitted by their enterprise role.
    </p>
  </div>
);

export const EnterpriseImpactVisual: React.FC = () => (
  <div className="h-44 rounded-2xl bg-gradient-to-b from-[#0F1E19] to-[#0A1411] border border-emerald-500/30 p-4 flex flex-col items-center justify-center relative overflow-hidden text-center text-white">
    <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 mb-2 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
      <Sparkles className="w-7 h-7 text-emerald-300" />
    </div>
    <div className="text-sm font-sans font-bold text-white">85% Faster Contract Synthesis</div>
    <p className="text-xs text-emerald-200/80 font-dm max-w-xs mt-1">
      Exact paragraph-level citations verify every claim, reducing liability gaps with zero data exposure.
    </p>
  </div>
);
