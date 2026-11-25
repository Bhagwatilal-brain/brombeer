import React from 'react';
import { RoundedBox } from '@react-three/drei';

export const GovernmentModule: React.FC = () => {
  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      {/* 1. Green Lawn Grounds on Platform (Vibrant Natural Green matching Reference) */}
      <mesh receiveShadow position={[0, 0.015, 0.05]}>
        <cylinderGeometry args={[1.18, 1.22, 0.02, 6]} />
        <meshStandardMaterial color="#3FA336" roughness={0.65} />
      </mesh>

      {/* 2. Stepped Monumental Foundation with Rounded Bevels (Crisp White Marble) */}
      <RoundedBox
        args={[1.56, 0.08, 1.18]}
        radius={0.02}
        smoothness={4}
        position={[0, 0.05, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.12} />
      </RoundedBox>

      {/* Front Entrance Grand Staircase (Clean Off-White) */}
      <RoundedBox
        args={[0.76, 0.06, 0.22]}
        radius={0.015}
        smoothness={4}
        position={[0, 0.04, 0.68]}
        receiveShadow
      >
        <meshStandardMaterial color="#F8F9FA" roughness={0.22} metalness={0.08} />
      </RoundedBox>
      <RoundedBox
        args={[0.86, 0.03, 0.16]}
        radius={0.01}
        smoothness={4}
        position={[0, 0.02, 0.78]}
        receiveShadow
      >
        <meshStandardMaterial color="#F1F3F5" roughness={0.24} metalness={0.08} />
      </RoundedBox>

      {/* 3. Main Central Colonnaded Hall (Pure White) */}
      <RoundedBox
        args={[0.96, 0.54, 0.78]}
        radius={0.025}
        smoothness={4}
        position={[0, 0.36, 0.08]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#FFFFFF" roughness={0.18} metalness={0.1} />
      </RoundedBox>

      {/* 6 Classical Columns on Front Portico (Crisp White Marble) */}
      {[-0.32, -0.19, -0.06, 0.06, 0.19, 0.32].map((cx, idx) => (
        <mesh key={idx} castShadow position={[cx, 0.36, 0.49]}>
          <cylinderGeometry args={[0.034, 0.038, 0.54, 16]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.15} metalness={0.15} />
        </mesh>
      ))}

      {/* Triangular Entrance Pediment */}
      <mesh castShadow position={[0, 0.68, 0.48]}>
        <coneGeometry args={[0.42, 0.16, 4]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.18} metalness={0.1} />
      </mesh>

      {/* 4. Symmetric Left & Right Wings (Crisp White) */}
      <RoundedBox
        args={[0.46, 0.42, 0.68]}
        radius={0.02}
        smoothness={4}
        position={[-0.62, 0.3, 0.06]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#FAF9FA" roughness={0.2} metalness={0.1} />
      </RoundedBox>
      <RoundedBox
        args={[0.46, 0.42, 0.68]}
        radius={0.02}
        smoothness={4}
        position={[0.62, 0.3, 0.06]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#FAF9FA" roughness={0.2} metalness={0.1} />
      </RoundedBox>

      {/* Wing Cornice Caps */}
      <mesh position={[-0.62, 0.52, 0.06]}>
        <boxGeometry args={[0.5, 0.03, 0.72]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.18} metalness={0.15} />
      </mesh>
      <mesh position={[0.62, 0.52, 0.06]}>
        <boxGeometry args={[0.5, 0.03, 0.72]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.18} metalness={0.15} />
      </mesh>

      {/* 5. Central Monumental Capitol Dome Architecture */}
      {/* Lower Rotunda Drum */}
      <mesh position={[0, 0.72, 0.06]} castShadow>
        <cylinderGeometry args={[0.34, 0.36, 0.18, 24]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.18} metalness={0.1} />
      </mesh>

      {/* Slender Columns around Rotunda Drum */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const rad = 0.35;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * rad, 0.72, 0.06 + Math.sin(angle) * rad]}
          >
            <cylinderGeometry args={[0.016, 0.016, 0.18, 8]} />
            <meshStandardMaterial color="#FFFFFF" roughness={0.15} />
          </mesh>
        );
      })}

      {/* Main Ribbed Hemispherical Dome (Crisp Pure White) */}
      <mesh position={[0, 0.96, 0.06]} castShadow>
        <sphereGeometry args={[0.33, 28, 20, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.15} metalness={0.12} />
      </mesh>

      {/* Dome Top Lantern Cupola */}
      <mesh position={[0, 1.32, 0.06]} castShadow>
        <cylinderGeometry args={[0.06, 0.075, 0.09, 12]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.18} />
      </mesh>

      {/* Gold Finial & Royal Blue Flag */}
      <mesh position={[0, 1.4, 0.06]}>
        <sphereGeometry args={[0.026, 12, 12]} />
        <meshStandardMaterial color="#F59E0B" metalness={0.95} roughness={0.1} />
      </mesh>
      <mesh position={[0, 1.47, 0.06]}>
        <cylinderGeometry args={[0.005, 0.005, 0.14, 6]} />
        <meshStandardMaterial color="#E2E8F0" metalness={0.8} />
      </mesh>
      <mesh position={[0.06, 1.51, 0.06]} castShadow>
        <boxGeometry args={[0.11, 0.06, 0.006]} />
        <meshStandardMaterial color="#2563EB" roughness={0.3} />
      </mesh>

      {/* 6. Lush Stylized Green Trees (Clean Vivid Foliage matching Reference) */}
      {[
        [-0.92, -0.25, 0.9],
        [-0.78, 0.28, 0.85],
        [0.82, 0.28, 0.85],
        [0.92, -0.25, 0.9],
        [-0.42, 0.58, 0.75],
      ].map(([tx, tz, scale], idx) => (
        <group key={idx} position={[tx, 0.02, tz]} scale={[scale, scale, scale]}>
          <mesh position={[0, 0.09, 0]}>
            <cylinderGeometry args={[0.025, 0.035, 0.18, 8]} />
            <meshStandardMaterial color="#5C3D2E" roughness={0.9} />
          </mesh>
          <mesh position={[0, 0.26, 0]} castShadow>
            <sphereGeometry args={[0.13, 14, 14]} />
            <meshStandardMaterial color="#2E7D25" roughness={0.65} />
          </mesh>
          <mesh position={[0, 0.38, 0]} castShadow>
            <sphereGeometry args={[0.095, 12, 12]} />
            <meshStandardMaterial color="#3FA336" roughness={0.6} />
          </mesh>
        </group>
      ))}
    </group>
  );
};
