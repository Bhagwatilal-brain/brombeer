import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export const BasePlatform: React.FC = () => {
  const neonRimRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (neonRimRef.current) {
      const mat = neonRimRef.current.material as THREE.MeshBasicMaterial;
      if (mat) {
        mat.opacity = 0.9 + Math.sin(t * 2) * 0.1;
      }
    }
  });

  return (
    <group position={[0, -0.32, 0]}>
      {/* 1. Main Circular Metallic Platform Base (Deep Dark Graphite/Midnight Charcoal, NOT washed-out purple) */}
      <mesh receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[4.8, 4.95, 0.4, 64]} />
        <meshStandardMaterial
          color="#0F0F1A"
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>

      {/* 2. Top Surface Bevel Ring (Stepped inner disc in dark slate) */}
      <mesh receiveShadow position={[0, 0.205, 0]}>
        <cylinderGeometry args={[4.65, 4.75, 0.03, 64]} />
        <meshStandardMaterial
          color="#161624"
          roughness={0.22}
          metalness={0.8}
        />
      </mesh>

      {/* 3. Outer Continuous Neon Purple Glowing Perimeter Ring (Crisp luminous accent strip) */}
      <mesh ref={neonRimRef} position={[0, 0.21, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4.72, 0.045, 16, 96]} />
        <meshBasicMaterial
          color="#D946EF"
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* 4. Underside Ambient Trim */}
      <mesh position={[0, -0.18, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[4.5, 0.025, 16, 64]} />
        <meshBasicMaterial
          color="#A855F7"
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* 5. Deep Underside Pod */}
      <mesh position={[0, -0.32, 0]}>
        <cylinderGeometry args={[4.4, 3.8, 0.26, 48]} />
        <meshStandardMaterial
          color="#0A0A12"
          roughness={0.6}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
};
