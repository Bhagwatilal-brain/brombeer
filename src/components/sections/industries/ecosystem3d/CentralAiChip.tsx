import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { createAiChipTexture } from './materials';

export const CentralAiChip: React.FC = () => {
  const chipGroupRef = useRef<THREE.Group>(null);
  const glowEdgeRef = useRef<THREE.Mesh>(null);
  const corePointLightRef = useRef<THREE.PointLight>(null);
  const aiTexture = useMemo(() => createAiChipTexture(), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (chipGroupRef.current) {
      // Gentle breathing hover
      chipGroupRef.current.position.y = 0.26 + Math.sin(t * 1.6) * 0.025;
    }
    if (glowEdgeRef.current) {
      const mat = glowEdgeRef.current.material as THREE.MeshBasicMaterial;
      if (mat) {
        mat.opacity = 0.88 + Math.sin(t * 2.8) * 0.12;
      }
    }
    if (corePointLightRef.current) {
      corePointLightRef.current.intensity = 3.2 + Math.sin(t * 2.8) * 0.8;
    }
  });

  // 4 gold connector pins on each of the 4 sides
  const pinPositions = useMemo(() => {
    const pins: { pos: [number, number, number]; rot: [number, number, number] }[] = [];
    const offsets = [-0.44, -0.15, 0.15, 0.44];
    const halfWidth = 0.76;

    // Front (+Z)
    offsets.forEach((ox) => {
      pins.push({ pos: [ox, 0, halfWidth + 0.08], rot: [0, 0, 0] });
    });
    // Back (-Z)
    offsets.forEach((ox) => {
      pins.push({ pos: [ox, 0, -halfWidth - 0.08], rot: [0, 0, 0] });
    });
    // Right (+X)
    offsets.forEach((oz) => {
      pins.push({ pos: [halfWidth + 0.08, 0, oz], rot: [0, Math.PI / 2, 0] });
    });
    // Left (-X)
    offsets.forEach((oz) => {
      pins.push({ pos: [-halfWidth - 0.08, 0, oz], rot: [0, Math.PI / 2, 0] });
    });

    return pins;
  }, []);

  return (
    <group ref={chipGroupRef} position={[0, 0.26, 0]}>
      {/* 1. Elevated Chip Pedestal Foundation */}
      <mesh position={[0, -0.14, 0]}>
        <boxGeometry args={[1.62, 0.24, 1.62]} />
        <meshStandardMaterial
          color="#120A22"
          roughness={0.25}
          metalness={0.8}
        />
      </mesh>

      {/* 2. Main Chip Body with Chamfered Corners */}
      <mesh castShadow receiveShadow position={[0, 0.06, 0]}>
        <boxGeometry args={[1.46, 0.16, 1.46]} />
        <meshStandardMaterial
          color="#1A0F30"
          roughness={0.18}
          metalness={0.85}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* 3. Top Face: High-Res Illuminated "AI" Emblem Plate */}
      <mesh position={[0, 0.146, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.36, 1.36]} />
        <meshStandardMaterial
          map={aiTexture}
          roughness={0.15}
          metalness={0.4}
          emissive="#A855F7"
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* 4. Glowing Neon Magenta/Purple Perimeter Border Strip */}
      <mesh ref={glowEdgeRef} position={[0, 0.15, 0]}>
        <boxGeometry args={[1.42, 0.025, 1.42]} />
        <meshBasicMaterial
          color="#E879F9"
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* 5. Gold Microchip Connector Pins */}
      {pinPositions.map((pin, idx) => (
        <mesh key={idx} position={pin.pos} rotation={pin.rot} castShadow>
          <boxGeometry args={[0.085, 0.045, 0.18]} />
          <meshStandardMaterial
            color="#F59E0B"
            roughness={0.12}
            metalness={0.96}
            emissive="#D97706"
            emissiveIntensity={0.35}
          />
        </mesh>
      ))}

      {/* Upward Core Glow Point Light */}
      <pointLight ref={corePointLightRef} color="#D946EF" intensity={3.5} distance={4} decay={2} position={[0, 0.6, 0]} />
    </group>
  );
};
