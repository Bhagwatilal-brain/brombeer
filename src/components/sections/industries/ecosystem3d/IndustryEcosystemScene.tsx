import React, { useEffect, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import gsap from 'gsap';

import { BasePlatform } from './BasePlatform';
import { CentralAiChip } from './CentralAiChip';
import { HexPlatform } from './HexPlatform';
import { CircuitConnections } from './CircuitConnections';

import { GovernmentModule } from './modules/GovernmentModule';
import { DefenceModule } from './modules/DefenceModule';
import { HealthcareModule } from './modules/HealthcareModule';
import { LogisticsModule } from './modules/LogisticsModule';
import { ManufacturingModule } from './modules/ManufacturingModule';
import { FinanceModule } from './modules/FinanceModule';

// 6 Platform coordinates around central AI chip (matching reference image)
const PLATFORM_CONFIGS: {
  id: string;
  pos: [number, number, number];
  rotY: number;
  delay: number;
  speed: number;
  amp: number;
  component: React.ReactNode;
}[] = [
  // 12 o'clock (North): Government Capitol (faces forward towards viewer)
  {
    id: 'government',
    pos: [0, 0.44, -3.1],
    rotY: 0,
    delay: 0,
    speed: 1.3,
    amp: 0.045,
    component: <GovernmentModule />,
  },
  // 2 o'clock (North-East): Defence
  {
    id: 'defence',
    pos: [2.68, 0.44, -1.55],
    rotY: -Math.PI / 5,
    delay: 0.8,
    speed: 1.4,
    amp: 0.048,
    component: <DefenceModule />,
  },
  // 4 o'clock (South-East): Logistics (Cargo Ship & Crane)
  {
    id: 'logistics',
    pos: [2.68, 0.44, 1.55],
    rotY: -Math.PI / 4,
    delay: 1.6,
    speed: 1.35,
    amp: 0.05,
    component: <LogisticsModule />,
  },
  // 6 o'clock (South): Manufacturing (Factory & Chimneys - front facing)
  {
    id: 'manufacturing',
    pos: [0, 0.44, 3.1],
    rotY: 0,
    delay: 2.4,
    speed: 1.45,
    amp: 0.046,
    component: <ManufacturingModule />,
  },
  // 8 o'clock (South-West): Finance (Bank & Gold Coins)
  {
    id: 'finance',
    pos: [-2.68, 0.44, 1.55],
    rotY: Math.PI / 5,
    delay: 3.2,
    speed: 1.3,
    amp: 0.052,
    component: <FinanceModule />,
  },
  // 10 o'clock (North-West): Healthcare (Hospital & Ambulance)
  {
    id: 'healthcare',
    pos: [-2.68, 0.44, -1.55],
    rotY: Math.PI / 5,
    delay: 4.0,
    speed: 1.4,
    amp: 0.044,
    component: <HealthcareModule />,
  },
];

const EcosystemContent: React.FC = () => {
  const masterGroupRef = useRef<THREE.Group>(null);
  const platformsGroupRef = useRef<THREE.Group>(null);

  const platformPositions = useMemo(
    () => PLATFORM_CONFIGS.map((cfg) => cfg.pos),
    []
  );

  // GSAP-Powered Entrance Animation on Mount
  useEffect(() => {
    if (!masterGroupRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Master Group smooth rise and settle
      gsap.fromTo(
        masterGroupRef.current!.position,
        { y: -0.8 },
        { y: 0, duration: 1.4, ease: 'power3.out' }
      );
      gsap.fromTo(
        masterGroupRef.current!.scale,
        { x: 0.58, y: 0.58, z: 0.58 },
        { x: 0.72, y: 0.72, z: 0.72, duration: 1.4, ease: 'power3.out' }
      );

      // 2. Hexagonal platforms staggered pop-in
      if (platformsGroupRef.current) {
        gsap.fromTo(
          platformsGroupRef.current.children.map((c) => c.scale),
          { x: 0.001, y: 0.001, z: 0.001 },
          {
            x: 1,
            y: 1,
            z: 1,
            duration: 0.85,
            stagger: 0.1,
            ease: 'back.out(1.6)',
            delay: 0.25,
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Smooth Interactive Mouse Parallax
  useFrame((state, delta) => {
    if (masterGroupRef.current) {
      const targetRotY = state.pointer.x * 0.15;
      const targetRotX = -state.pointer.y * 0.08;

      const factor = 1 - Math.exp(-6 * delta);
      masterGroupRef.current.rotation.y += (targetRotY - masterGroupRef.current.rotation.y) * factor;
      masterGroupRef.current.rotation.x += (targetRotX - masterGroupRef.current.rotation.x) * factor;
    }
  });

  return (
    <>
      {/* 1. CLEAN STUDIO DAYLIGHT LIGHTING (Natural whites, vivid greens, pure golds - NO purple wash!) */}
      {/* Clean Neutral Ambient Light */}
      <ambientLight color="#FFFFFF" intensity={0.65} />

      {/* Main Crisp White Directional Key Sun Light */}
      <directionalLight
        position={[6, 12, 8]}
        intensity={1.8}
        color="#FFFFFF"
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0001}
      />

      {/* Soft Secondary Fill Light (Clean Neutral Periwinkle-White) */}
      <directionalLight position={[-6, 8, -4]} intensity={0.55} color="#E8EEF5" />

      {/* Subtle Violet Rim Accent (Gentle back edge catchlight only, low intensity) */}
      <directionalLight position={[0, 3, -8]} intensity={0.8} color="#C084FC" />

      {/* Ground Contact Shadows for Photorealistic Grounding & Depth */}
      <ContactShadows
        position={[0, -0.68, 0]}
        opacity={0.65}
        scale={13}
        blur={2.4}
        far={5}
        color="#0A0A14"
      />

      {/* 2. Master Rotatable / Parallax Group */}
      <group ref={masterGroupRef} position={[0, 0, 0]}>
        {/* Base Circular Platform */}
        <BasePlatform />

        {/* Central Elevated AI Microchip */}
        <CentralAiChip />

        {/* Animated Multi-Lane Glowing Circuit Connections */}
        <CircuitConnections platformPositions={platformPositions} />

        {/* Six Floating Hexagonal Platforms with Dedicated Industry Modules */}
        <group ref={platformsGroupRef}>
          {PLATFORM_CONFIGS.map((cfg) => (
            <HexPlatform
              key={cfg.id}
              position={cfg.pos}
              rotationY={cfg.rotY}
              floatDelay={cfg.delay}
              floatSpeed={cfg.speed}
              floatAmplitude={cfg.amp}
            >
              {cfg.component}
            </HexPlatform>
          ))}
        </group>
      </group>
    </>
  );
};

export interface IndustryEcosystemSceneProps {
  className?: string;
}

export const IndustryEcosystemScene: React.FC<IndustryEcosystemSceneProps> = ({
  className = '',
}) => {
  return (
    <div className={`w-full h-full relative cursor-grab active:cursor-grabbing overflow-visible ${className}`}>
      <Canvas
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        camera={{
          fov: 29,
          position: [0, 5.8, 9.4],
        }}
        style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
      >
        <EcosystemContent />

        {/* Interactive Smooth 360° OrbitControls Calibrated to Diorama Isometric Angle */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          target={[0, 0.35, 0]}
          maxPolarAngle={Math.PI / 2.15}
          minPolarAngle={Math.PI / 3.4}
          dampingFactor={0.06}
          enableDamping
          rotateSpeed={0.7}
        />
      </Canvas>
    </div>
  );
};
