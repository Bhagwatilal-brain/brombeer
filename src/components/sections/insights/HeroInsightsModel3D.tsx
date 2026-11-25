import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Lottie } from 'lottie-react';
import {
  Sparkles,
  ShieldCheck,
  Bot,
  Activity,
} from 'lucide-react';
import exclusiveSolutionAnimation from '@/assets/exclusive-solution.json';

export interface HeroInsightsModel3DProps {
  className?: string;
  animationSrc?: any;
}

export const HeroInsightsModel3D: React.FC<HeroInsightsModel3DProps> = ({
  className = '',
  animationSrc,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      rotateY: nx * 14,
      rotateX: -ny * 12,
      scale: 1.02,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  const activeAnimation = animationSrc || exclusiveSolutionAnimation;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="hero-insights-visual-container"
      className={`relative w-full max-w-[540px] sm:max-w-[580px] lg:max-w-[620px] mx-auto lg:ml-auto lg:mr-0 aspect-[1.05/1] sm:aspect-square flex items-center justify-center select-none overflow-visible ${className}`}
      style={{ perspective: 1200 }}
    >
      {/* Atmospheric Violet / Indigo Ambient Backlight Glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.58, 0.35],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle, rgba(130, 91, 242, 0.34) 0%, rgba(118, 80, 232, 0.14) 48%, transparent 72%)',
        }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] h-[88%] rounded-full blur-[75px] -z-10"
      />

      {/* 3D Tilt Stage Wrapper */}
      <motion.div
        animate={{
          scale: tilt.scale,
          rotateX: tilt.rotateX,
          rotateY: tilt.rotateY,
          y: [0, -8, 0],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          rotateX: { type: 'spring', stiffness: 220, damping: 24 },
          rotateY: { type: 'spring', stiffness: 220, damping: 24 },
          scale: { type: 'spring', stiffness: 220, damping: 24 },
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 w-full h-full flex items-center justify-center p-2 sm:p-4 cursor-default"
      >
        {/* ================= SVG ROTATING ORBITAL MATRIX ================= */}
        <svg
          viewBox="0 0 500 500"
          className="absolute inset-0 w-full h-full pointer-events-none"
          fill="none"
          aria-hidden="true"
        >
          {/* Outer dashed orbital ring */}
          <motion.circle
            cx="250"
            cy="250"
            r="200"
            stroke="#9581EF"
            strokeWidth="1.2"
            strokeDasharray="6 8"
            strokeOpacity="0.3"
            animate={{ rotate: 360 }}
            transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '250px 250px' }}
          />

          {/* Inner counter-rotating ring */}
          <motion.circle
            cx="250"
            cy="250"
            r="140"
            stroke="#7650E8"
            strokeWidth="1.5"
            strokeDasharray="10 12"
            strokeOpacity="0.35"
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: '250px 250px' }}
          />

          {/* Crosshair coordinate axes */}
          <line
            x1="250"
            y1="35"
            x2="250"
            y2="465"
            stroke="#7650E8"
            strokeWidth="1"
            strokeDasharray="4 6"
            strokeOpacity="0.15"
          />
          <line
            x1="35"
            y1="250"
            x2="465"
            y2="250"
            stroke="#7650E8"
            strokeWidth="1"
            strokeDasharray="4 6"
            strokeOpacity="0.15"
          />
        </svg>

        {/* ================= CENTRAL LOTTIE EXCLUSIVE SOLUTION ANIMATION ================= */}
        <div
          style={{
            transform: 'translateZ(40px)',
            filter: 'drop-shadow(0 20px 45px rgba(118, 80, 232, 0.22)) drop-shadow(0 8px 18px rgba(30, 17, 66, 0.08))',
          }}
          className="relative z-20 w-full h-full max-w-[360px] sm:max-w-[400px] aspect-square flex items-center justify-center select-none -translate-y-3 sm:-translate-y-5"
        >
          <Lottie
            src={activeAnimation}
            loop={true}
            autoplay={true}
            className="w-full h-full object-contain pointer-events-none"
          />
        </div>

        {/* ================= 4 FLOATING 3D SATELLITE TELEMETRY BADGES ================= */}

        {/* TOP-LEFT: RAG Benchmark Badge */}
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translateZ(65px)' }}
          className="absolute -top-3 left-0 sm:-left-4 p-3 sm:p-3.5 rounded-2xl bg-white/92 backdrop-blur-md border border-[#E9E4F5] shadow-lg shadow-violet-primary/10 max-w-[180px] sm:max-w-[205px] z-30"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-lg bg-violet-primary/10 flex items-center justify-center text-violet-primary">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] font-mono uppercase font-bold text-violet-primary tracking-wider">
              RAG BENCHMARK
            </span>
          </div>
          <p className="text-[12px] sm:text-[13px] font-sans font-bold text-[#111014] leading-tight">
            +42% Factual Accuracy
          </p>
          <span className="text-[10px] text-[#666371] font-dm block mt-0.5">
            Hybrid BM25 + Cross-Encoder
          </span>
        </motion.div>

        {/* TOP-RIGHT: Governance Framework Badge */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          style={{ transform: 'translateZ(75px)' }}
          className="absolute -top-1 right-0 sm:-right-4 p-3 sm:p-3.5 rounded-2xl bg-white/92 backdrop-blur-md border border-[#E9E4F5] shadow-lg shadow-violet-primary/10 max-w-[180px] sm:max-w-[205px] z-30"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] font-mono uppercase font-bold text-emerald-600 tracking-wider">
              GOVERNANCE PIPELINE
            </span>
          </div>
          <p className="text-[12px] sm:text-[13px] font-sans font-bold text-[#111014] leading-tight">
            Zero Hallucination Gate
          </p>
          <span className="text-[10px] text-[#666371] font-dm block mt-0.5">
            Automated CI/CD Test Suites
          </span>
        </motion.div>

        {/* BOTTOM-LEFT: Autonomous Agents Badge */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 5.6, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
          style={{ transform: 'translateZ(60px)' }}
          className="absolute -bottom-8 left-0 sm:-left-4 p-3 sm:p-3.5 rounded-2xl bg-white/92 backdrop-blur-md border border-[#E9E4F5] shadow-lg shadow-violet-primary/10 max-w-[180px] sm:max-w-[205px] z-30"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] font-mono uppercase font-bold text-blue-600 tracking-wider">
              AGENT GUARDRAILS
            </span>
          </div>
          <p className="text-[12px] sm:text-[13px] font-sans font-bold text-[#111014] leading-tight">
            Deterministic Sandbox
          </p>
          <span className="text-[10px] text-[#666371] font-dm block mt-0.5">
            Approval Gates on Actions
          </span>
        </motion.div>

        {/* BOTTOM-RIGHT: Computer Vision Badge */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5.0, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          style={{ transform: 'translateZ(70px)' }}
          className="absolute -bottom-8 right-0 sm:-right-4 p-3 sm:p-3.5 rounded-2xl bg-white/92 backdrop-blur-md border border-[#E9E4F5] shadow-lg shadow-violet-primary/10 max-w-[180px] sm:max-w-[205px] z-30"
        >
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-600">
              <Activity className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] font-mono uppercase font-bold text-purple-600 tracking-wider">
              VISION INFERENCE
            </span>
          </div>
          <p className="text-[12px] sm:text-[13px] font-sans font-bold text-[#111014] leading-tight">
            120 FPS Sub-mm Precision
          </p>
          <span className="text-[10px] text-[#666371] font-dm block mt-0.5">
            Edge-Optimized Quality Gate
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroInsightsModel3D;
