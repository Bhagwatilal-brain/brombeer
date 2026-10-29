import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FloatingFeatureCard } from './FloatingFeatureCard';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { Sparkles, Bot, Database, Cpu } from 'lucide-react';
import { OrbitingIcons } from '../animations/FloatingIcons';
import { SandSculpture } from './SandSculpture';

export const HeroArtwork: React.FC = () => {
  const prefersReduced = useReducedMotion();
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({ x: x * 15, y: y * 15 });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[560px] mx-auto aspect-square flex items-center justify-center select-none"
    >
      {/* Soft Ambient Radial Floor Gradient */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-violet-light/35 via-violet-primary/10 to-transparent blur-3xl pointer-events-none" />

      {/* 21st.dev Orbiting Floating Icons */}
      <OrbitingIcons radius={185} duration={24} delay={0}>
        <Bot className="w-5 h-5 text-violet-primary" />
      </OrbitingIcons>
      <OrbitingIcons radius={185} duration={24} delay={12}>
        <Sparkles className="w-5 h-5 text-[#9E7EFF]" />
      </OrbitingIcons>
      <OrbitingIcons radius={230} duration={30} delay={6} reverse>
        <Database className="w-4 h-4 text-violet-deep" />
      </OrbitingIcons>
      <OrbitingIcons radius={230} duration={30} delay={21} reverse>
        <Cpu className="w-4 h-4 text-violet-primary" />
      </OrbitingIcons>

      {/* 21st.dev Liquid Particle Sand Sculpture Effect (Replacing the circular 3D model) */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <SandSculpture />
      </div>

      {/* Floating Card 1: AI agents (Top Left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="absolute top-8 left-0 sm:-left-4 z-20 pointer-events-auto"
      >
        <motion.div
          animate={prefersReduced ? {} : { y: [0, -7, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FloatingFeatureCard
            title="AI agents"
            subtitle="Automate complex workflows"
            dotColor="bg-violet-primary"
          />
        </motion.div>
      </motion.div>

      {/* Floating Card 2: Enterprise knowledge (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-10 right-0 sm:-right-4 z-20 pointer-events-auto"
      >
        <motion.div
          animate={prefersReduced ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <FloatingFeatureCard
            title="Enterprise knowledge"
            subtitle="Connect your data. Make better decisions."
            dotColor="bg-violet-primary"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};