import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Lottie } from 'lottie-react';
import aiProcessorAnimation from '@/assets/ai-processor.json';

export interface HeroSolutionModel3DProps {
  modelUrl?: string;
  className?: string;
}

export const HeroSolutionModel3D: React.FC<HeroSolutionModel3DProps> = ({
  className = '',
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
      scale: 1.025,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full max-w-[560px] mx-auto lg:ml-auto lg:mr-0 aspect-square flex items-center justify-center select-none overflow-visible ${className}`}
      style={{ perspective: 1200 }}
    >
      {/* 1. Atmospheric Violet Glow Behind AI Processor */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.45, 0.72, 0.45],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background:
            'radial-gradient(circle, rgba(130, 91, 242, 0.26) 0%, rgba(118, 80, 232, 0.12) 45%, transparent 70%)',
        }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full blur-[65px] -z-10"
      />

      {/* 2. Pure AI Processor (Base, Pins/Connectors, Top Plate, "AI" Text, Glass Reflection Only) */}
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
          filter: 'drop-shadow(0 20px 45px rgba(118, 80, 232, 0.28))',
        }}
        className="relative z-10 w-full h-full max-w-[520px] aspect-square flex items-center justify-center cursor-default"
      >
        <Lottie
          src={aiProcessorAnimation}
          loop={true}
          autoplay={true}
          className="w-full h-full object-contain pointer-events-none"
        />
      </motion.div>
    </div>
  );
};
