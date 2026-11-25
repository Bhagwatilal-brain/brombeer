import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';

export const DefenceModule: React.FC = () => {
  const dishRef = useRef<THREE.Group>(null);
  const jetGroupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // 1. Radar dish oscillating scan
    if (dishRef.current) {
      dishRef.current.rotation.y = Math.sin(t * 0.75) * 0.55;
    }

    // 2. Aircraft flight path
    if (jetGroupRef.current) {
      const angle = t * 0.45;
      const radiusX = 1.25;
      const radiusZ = 1.0;
      const jx = Math.cos(angle) * radiusX;
      const jz = Math.sin(angle) * radiusZ;
      const jy = 1.75 + Math.sin(t * 1.2) * 0.08;

      jetGroupRef.current.position.set(jx, jy, jz);
      jetGroupRef.current.rotation.y = -angle + Math.PI / 2;
      jetGroupRef.current.rotation.z = Math.sin(t * 0.9) * 0.18;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 1. SATELLITE RADAR DISH (Vibrant Royal Cobalt Blue Matching Reference) */}
      <group position={[-0.45, 0, -0.35]}>
        {/* Base mount */}
        <RoundedBox args={[0.45, 0.12, 0.45]} radius={0.02} smoothness={4} position={[0, 0.06, 0]} castShadow receiveShadow>
          <meshStandardMaterial color="#1E293B" roughness={0.35} metalness={0.7} />
        </RoundedBox>
        {/* Support Column */}
        <mesh position={[0, 0.28, 0]} castShadow>
          <cylinderGeometry args={[0.07, 0.09, 0.36, 16]} />
          <meshStandardMaterial color="#334155" roughness={0.3} metalness={0.75} />
        </mesh>
        {/* Gimbal Joint & Articulated Dish */}
        <group ref={dishRef} position={[0, 0.48, 0]}>
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="#0F172A" roughness={0.2} metalness={0.85} />
          </mesh>
          {/* Angled Dish Bracket */}
          <group rotation={[Math.PI / 4, 0, 0]}>
            {/* Concave Parabolic Dish in Deep Metallic Blue */}
            <mesh castShadow position={[0, 0.2, 0]}>
              <sphereGeometry args={[0.38, 32, 24, 0, Math.PI * 2, 0, Math.PI / 2.3]} />
              <meshStandardMaterial
                color="#1D4ED8"
                roughness={0.15}
                metalness={0.85}
                side={THREE.DoubleSide}
              />
            </mesh>
            {/* Feed horn center antenna needle */}
            <mesh position={[0, 0.2, -0.18]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.018, 0.024, 0.2, 8]} />
              <meshStandardMaterial color="#F3E8FF" metalness={0.9} roughness={0.15} />
            </mesh>
            <mesh position={[0, 0.2, -0.28]}>
              <sphereGeometry args={[0.035, 12, 12]} />
              <meshBasicMaterial color="#38BDF8" />
            </mesh>
          </group>
        </group>
      </group>

      {/* 2. TWO MILITARY ARMORED TANKS (Khaki-Olive Green Drab Matching Reference) */}
      {/* Tank 1 (Inner Tank) */}
      <group position={[0.24, 0, -0.18]} rotation={[0, -Math.PI / 6, 0]}>
        {/* Treads */}
        <RoundedBox args={[0.52, 0.1, 0.095]} radius={0.015} smoothness={4} position={[0, 0.07, 0.13]} castShadow>
          <meshStandardMaterial color="#111827" roughness={0.8} metalness={0.5} />
        </RoundedBox>
        <RoundedBox args={[0.52, 0.1, 0.095]} radius={0.015} smoothness={4} position={[0, 0.07, -0.13]} castShadow>
          <meshStandardMaterial color="#111827" roughness={0.8} metalness={0.5} />
        </RoundedBox>
        {/* Lower Hull */}
        <RoundedBox args={[0.48, 0.09, 0.24]} radius={0.015} smoothness={4} position={[0, 0.12, 0]} castShadow>
          <meshStandardMaterial color="#5E6D4D" roughness={0.4} metalness={0.35} />
        </RoundedBox>
        {/* Slanted Upper Glacis Hull */}
        <RoundedBox args={[0.42, 0.08, 0.22]} radius={0.015} smoothness={4} position={[0, 0.18, 0]} castShadow>
          <meshStandardMaterial color="#6E7B5C" roughness={0.4} metalness={0.35} />
        </RoundedBox>
        {/* Rotated Turret */}
        <group position={[-0.04, 0.26, 0]} rotation={[0, 0.2, 0]}>
          <RoundedBox args={[0.26, 0.08, 0.18]} radius={0.015} smoothness={4} position={[0, 0, 0]} castShadow>
            <meshStandardMaterial color="#6E7B5C" roughness={0.4} metalness={0.35} />
          </RoundedBox>
          {/* Main Gun Mantlet & Long Barrel */}
          <mesh position={[-0.14, 0.01, 0]}>
            <sphereGeometry args={[0.038, 12, 12]} />
            <meshStandardMaterial color="#3F4935" roughness={0.5} />
          </mesh>
          <mesh position={[-0.34, 0.01, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.016, 0.02, 0.42, 12]} />
            <meshStandardMaterial color="#3F4935" roughness={0.4} metalness={0.6} />
          </mesh>
          <mesh position={[-0.56, 0.01, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.024, 0.024, 0.04, 12]} />
            <meshStandardMaterial color="#1E293B" metalness={0.7} />
          </mesh>
        </group>
      </group>

      {/* Tank 2 (Outer Tank) */}
      <group position={[0.46, 0, 0.32]} rotation={[0, -Math.PI / 8, 0]}>
        {/* Treads */}
        <RoundedBox args={[0.54, 0.1, 0.095]} radius={0.015} smoothness={4} position={[0, 0.07, 0.13]} castShadow>
          <meshStandardMaterial color="#111827" roughness={0.8} metalness={0.5} />
        </RoundedBox>
        <RoundedBox args={[0.54, 0.1, 0.095]} radius={0.015} smoothness={4} position={[0, 0.07, -0.13]} castShadow>
          <meshStandardMaterial color="#111827" roughness={0.8} metalness={0.5} />
        </RoundedBox>
        {/* Hull */}
        <RoundedBox args={[0.5, 0.1, 0.24]} radius={0.015} smoothness={4} position={[0, 0.13, 0]} castShadow>
          <meshStandardMaterial color="#5E6D4D" roughness={0.4} metalness={0.35} />
        </RoundedBox>
        <RoundedBox args={[0.44, 0.08, 0.22]} radius={0.015} smoothness={4} position={[0, 0.19, 0]} castShadow>
          <meshStandardMaterial color="#6E7B5C" roughness={0.4} metalness={0.35} />
        </RoundedBox>
        {/* Turret */}
        <group position={[-0.04, 0.27, 0]} rotation={[0, -0.1, 0]}>
          <RoundedBox args={[0.27, 0.08, 0.18]} radius={0.015} smoothness={4} position={[0, 0, 0]} castShadow>
            <meshStandardMaterial color="#6E7B5C" roughness={0.4} metalness={0.35} />
          </RoundedBox>
          <mesh position={[-0.34, 0.01, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.016, 0.02, 0.42, 12]} />
            <meshStandardMaterial color="#3F4935" roughness={0.4} metalness={0.6} />
          </mesh>
        </group>
      </group>

      {/* 3. SUPERSONIC FIGHTER JET FLYING OVERHEAD WITH CONTRAIL */}
      <group ref={jetGroupRef} position={[0, 1.8, 0]}>
        {/* Fuselage */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
          <coneGeometry args={[0.065, 0.52, 16]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.15} metalness={0.25} />
        </mesh>
        {/* Cockpit Canopy */}
        <mesh position={[0.08, 0.04, 0]}>
          <boxGeometry args={[0.16, 0.045, 0.06]} />
          <meshStandardMaterial color="#0284C7" roughness={0.1} metalness={0.9} />
        </mesh>
        {/* Delta Wings */}
        <mesh position={[-0.08, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <boxGeometry args={[0.22, 0.54, 0.015]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.15} metalness={0.25} />
        </mesh>
        {/* Twin Vertical Stabilizers */}
        <mesh position={[-0.2, 0.06, 0.05]} rotation={[0, 0, -0.2]}>
          <boxGeometry args={[0.09, 0.11, 0.012]} />
          <meshStandardMaterial color="#EDE9FE" roughness={0.2} metalness={0.2} />
        </mesh>
        <mesh position={[-0.2, 0.06, -0.05]} rotation={[0, 0, -0.2]}>
          <boxGeometry args={[0.09, 0.11, 0.012]} />
          <meshStandardMaterial color="#EDE9FE" roughness={0.2} metalness={0.2} />
        </mesh>
        {/* Glowing Contrail Ribbon Behind Jet */}
        <mesh position={[-0.55, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.015, 0.045, 0.6, 12]} />
          <meshBasicMaterial color="#E879F9" transparent opacity={0.65} />
        </mesh>
      </group>
    </group>
  );
};
