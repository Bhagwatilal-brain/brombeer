import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import { createRedCrossTexture } from '../materials';

export const HealthcareModule: React.FC = () => {
  const redCrossTexture = useMemo(() => createRedCrossTexture(), []);
  const ambulanceLightRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (ambulanceLightRef.current) {
      const mat = ambulanceLightRef.current.material as THREE.MeshBasicMaterial;
      if (mat) {
        mat.color.setHex(Math.sin(t * 8) > 0 ? 0xef4444 : 0x38bdf8);
      }
    }
  });

  return (
    <group position={[0, 0, 0]} rotation={[0, -Math.PI / 8, 0]}>
      {/* 1. Green Lawn Patch on Platform */}
      <mesh receiveShadow position={[0, 0.015, 0.05]}>
        <cylinderGeometry args={[1.18, 1.22, 0.02, 6]} />
        <meshStandardMaterial color="#408E32" roughness={0.65} />
      </mesh>

      {/* 2. Main Hospital Building Architecture (Crisp White / Pale Lilac with Rounded Edges) */}
      {/* Left Medical Wing */}
      <RoundedBox
        args={[0.72, 0.96, 0.76]}
        radius={0.025}
        smoothness={4}
        position={[-0.44, 0.48, -0.12]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#FAF8FF" roughness={0.2} metalness={0.15} />
      </RoundedBox>

      {/* Center Main Tower & Lobby Entrance */}
      <RoundedBox
        args={[0.76, 1.16, 0.82]}
        radius={0.03}
        smoothness={4}
        position={[0.2, 0.58, -0.08]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#FFFFFF" roughness={0.18} metalness={0.2} />
      </RoundedBox>

      {/* Rooftop Medical Heli-deck Trim */}
      <RoundedBox
        args={[0.58, 0.05, 0.58]}
        radius={0.015}
        smoothness={4}
        position={[0.2, 1.18, -0.08]}
      >
        <meshStandardMaterial color="#E9D5FF" roughness={0.25} metalness={0.3} />
      </RoundedBox>

      {/* Prominent Red Medical Cross Badge on Tower Facade */}
      <mesh position={[0.2, 0.92, 0.335]} rotation={[0, 0, 0]}>
        <planeGeometry args={[0.28, 0.28]} />
        <meshStandardMaterial
          map={redCrossTexture}
          transparent
          roughness={0.15}
          emissive="#DC2626"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Recessed Glass Entrance Canopy */}
      <RoundedBox
        args={[0.42, 0.045, 0.26]}
        radius={0.01}
        smoothness={4}
        position={[0.2, 0.18, 0.42]}
      >
        <meshStandardMaterial color="#38BDF8" roughness={0.1} metalness={0.85} transparent opacity={0.88} />
      </RoundedBox>

      {/* Grid of Punchy Blue-Tinted Hospital Windows on Wing (Matching Reference) */}
      {[-0.66, -0.44, -0.22].map((wx, colIdx) =>
        [0.78, 0.58, 0.38, 0.18].map((wy, rowIdx) => (
          <mesh key={`${colIdx}-${rowIdx}`} position={[wx, wy, 0.27]}>
            <boxGeometry args={[0.13, 0.11, 0.02]} />
            <meshStandardMaterial
              color="#0284C7"
              roughness={0.12}
              metalness={0.9}
              emissive="#0369A1"
              emissiveIntensity={0.35}
            />
          </mesh>
        ))
      )}

      {/* Windows on Center Tower */}
      {[-0.04, 0.2, 0.44].map((wx, colIdx) =>
        [0.62, 0.42, 0.22].map((wy, rowIdx) => (
          <mesh key={`t-${colIdx}-${rowIdx}`} position={[wx, wy, 0.34]}>
            <boxGeometry args={[0.12, 0.1, 0.02]} />
            <meshStandardMaterial
              color="#0284C7"
              roughness={0.12}
              metalness={0.9}
              emissive="#0369A1"
              emissiveIntensity={0.3}
            />
          </mesh>
        ))
      )}

      {/* 3. MINIATURE AMBULANCE VEHICLE */}
      <group position={[-0.24, 0.07, 0.55]} rotation={[0, Math.PI / 12, 0]}>
        <RoundedBox args={[0.48, 0.18, 0.24]} radius={0.02} smoothness={4} position={[0, 0.09, 0]} castShadow>
          <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.15} />
        </RoundedBox>
        {/* Cab Windshield */}
        <mesh position={[-0.14, 0.12, 0]}>
          <boxGeometry args={[0.08, 0.09, 0.22]} />
          <meshStandardMaterial color="#0284C7" roughness={0.1} metalness={0.8} />
        </mesh>
        {/* Red Stripe along flank */}
        <mesh position={[0.04, 0.08, 0.122]}>
          <boxGeometry args={[0.36, 0.03, 0.01]} />
          <meshStandardMaterial color="#EF4444" roughness={0.3} />
        </mesh>
        <mesh position={[0.04, 0.08, -0.122]}>
          <boxGeometry args={[0.36, 0.03, 0.01]} />
          <meshStandardMaterial color="#EF4444" roughness={0.3} />
        </mesh>
        {/* Emergency Roof Lightbar */}
        <mesh ref={ambulanceLightRef} position={[0.02, 0.2, 0]}>
          <boxGeometry args={[0.08, 0.04, 0.12]} />
          <meshBasicMaterial color="#EF4444" />
        </mesh>
        {/* 4 Wheels */}
        {[-0.14, 0.14].map((wx, i) =>
          [-0.12, 0.12].map((wz, j) => (
            <mesh key={`${i}-${j}`} position={[wx, 0.02, wz]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.035, 0.035, 0.025, 12]} />
              <meshStandardMaterial color="#1E293B" roughness={0.8} metalness={0.2} />
            </mesh>
          ))
        )}
      </group>

      {/* 4. Lush Stylized Green Trees */}
      {[
        [-0.92, -0.28, 0.95],
        [-0.82, 0.25, 0.9],
        [0.78, 0.25, 0.85],
        [0.86, -0.22, 1.0],
      ].map(([tx, tz, scale], idx) => (
        <group key={idx} position={[tx, 0.02, tz]} scale={[scale, scale, scale]}>
          <mesh position={[0, 0.08, 0]}>
            <cylinderGeometry args={[0.025, 0.035, 0.16, 8]} />
            <meshStandardMaterial color="#5C3D2E" roughness={0.9} />
          </mesh>
          <mesh position={[0, 0.24, 0]} castShadow>
            <sphereGeometry args={[0.13, 14, 14]} />
            <meshStandardMaterial color="#36822B" roughness={0.7} />
          </mesh>
          <mesh position={[0, 0.36, 0]} castShadow>
            <sphereGeometry args={[0.095, 12, 12]} />
            <meshStandardMaterial color="#489F39" roughness={0.65} />
          </mesh>
        </group>
      ))}
    </group>
  );
};
