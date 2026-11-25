import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface HexPlatformProps {
  position: [number, number, number];
  rotationY?: number;
  floatDelay?: number;
  floatSpeed?: number;
  floatAmplitude?: number;
  children?: React.ReactNode;
}

export const HexPlatform: React.FC<HexPlatformProps> = ({
  position,
  rotationY = 0,
  floatDelay = 0,
  floatSpeed = 1.3,
  floatAmplitude = 0.045,
  children,
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const glowEdgeRef = useRef<THREE.Mesh>(null);
  const [baseX, baseY, baseZ] = position;

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      // Independent gentle sine-wave bobbing
      const floatY = Math.sin(t * floatSpeed + floatDelay) * floatAmplitude;
      groupRef.current.position.y = baseY + floatY;
    }
    if (glowEdgeRef.current) {
      const mat = glowEdgeRef.current.material as THREE.MeshBasicMaterial;
      if (mat) {
        mat.opacity = 0.9 + Math.sin(t * 2.2 + floatDelay) * 0.1;
      }
    }
  });

  return (
    <group
      ref={groupRef}
      position={[baseX, baseY, baseZ]}
      rotation={[0, rotationY, 0]}
    >
      {/* 1. Main Hexagonal Slab - Top Face (Clean Pale Light Gray / Off-White matching Reference, NOT purple!) */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[1.32, 1.38, 0.24, 6]} />
        <meshStandardMaterial
          color="#F4F5F7"
          roughness={0.18}
          metalness={0.12}
        />
      </mesh>

      {/* 2. Top Inner Decorative Recessed Bed (Clean Neutral Off-White) */}
      <mesh receiveShadow position={[0, 0.125, 0]}>
        <cylinderGeometry args={[1.25, 1.25, 0.015, 6]} />
        <meshStandardMaterial
          color="#ECEEF2"
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* 3. Underneath Dark Metallic Slate Chassis */}
      <mesh castShadow position={[0, -0.17, 0]}>
        <cylinderGeometry args={[1.38, 1.22, 0.14, 6]} />
        <meshStandardMaterial
          color="#181822"
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* 4. Bottom Neon Purple Glowing Border Strip (Wrap around all 6 sides) */}
      <mesh ref={glowEdgeRef} position={[0, -0.09, 0]}>
        <cylinderGeometry args={[1.39, 1.39, 0.035, 6]} />
        <meshBasicMaterial
          color="#D946EF"
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* 5. Deep Underside Core */}
      <mesh position={[0, -0.27, 0]}>
        <cylinderGeometry args={[1.08, 0.85, 0.1, 6]} />
        <meshStandardMaterial
          color="#0E0E16"
          roughness={0.5}
          metalness={0.85}
        />
      </mesh>

      {/* Module Placed on Top */}
      <group position={[0, 0.13, 0]}>
        {children}
      </group>
    </group>
  );
};
