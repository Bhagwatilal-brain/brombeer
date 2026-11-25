import React from 'react';
import { RoundedBox } from '@react-three/drei';

export const LogisticsModule: React.FC = () => {
  return (
    <group position={[0, 0, 0]} rotation={[0, -Math.PI / 8, 0]}>
      {/* 1. Water Basin / Slipway under Ship (Matching Reference Image) */}
      <mesh receiveShadow position={[-0.35, 0.015, -0.16]}>
        <boxGeometry args={[1.32, 0.02, 0.62]} />
        <meshStandardMaterial color="#0284C7" roughness={0.1} metalness={0.7} />
      </mesh>

      {/* 2. CONTAINER CARGO SHIP */}
      <group position={[-0.32, 0.02, -0.16]} rotation={[0, -Math.PI / 12, 0]}>
        {/* Ship Hull (Deep Navy Blue) */}
        <RoundedBox args={[1.12, 0.22, 0.46]} radius={0.03} smoothness={4} position={[0, 0.11, 0]} castShadow>
          <meshStandardMaterial color="#0B2032" roughness={0.25} metalness={0.65} />
        </RoundedBox>
        {/* Bow Wedge (Front of ship) */}
        <mesh position={[-0.62, 0.11, 0]} rotation={[0, 0, Math.PI]} castShadow>
          <coneGeometry args={[0.23, 0.24, 4]} />
          <meshStandardMaterial color="#0B2032" roughness={0.25} metalness={0.65} />
        </mesh>
        {/* Crisp Bright Red Waterline Trim */}
        <mesh position={[0, 0.02, 0]}>
          <boxGeometry args={[1.14, 0.035, 0.47]} />
          <meshStandardMaterial color="#EF4444" roughness={0.3} />
        </mesh>

        {/* Stern Wheelhouse Superstructure / Bridge Tower */}
        <RoundedBox args={[0.24, 0.2, 0.38]} radius={0.015} smoothness={4} position={[0.42, 0.3, 0]} castShadow>
          <meshStandardMaterial color="#FFFFFF" roughness={0.15} metalness={0.25} />
        </RoundedBox>
        {/* Bridge Window Glass */}
        <mesh position={[0.29, 0.32, 0]}>
          <boxGeometry args={[0.02, 0.07, 0.34]} />
          <meshStandardMaterial color="#0284C7" roughness={0.1} metalness={0.95} />
        </mesh>
        {/* Navigation Radar Mast & Funnel */}
        <mesh position={[0.46, 0.45, 0]}>
          <cylinderGeometry args={[0.028, 0.038, 0.14, 10]} />
          <meshStandardMaterial color="#2563EB" roughness={0.25} metalness={0.6} />
        </mesh>

        {/* Stacked Colorful Shipping Containers on Deck with Rounded Corners */}
        {[
          // Bottom Row
          [-0.3, 0.28, -0.1, '#F97316'],
          [-0.3, 0.28, 0.1, '#2563EB'],
          [-0.05, 0.28, -0.1, '#DC2626'],
          [-0.05, 0.28, 0.1, '#0D9488'],
          [0.2, 0.28, -0.1, '#F59E0B'],
          [0.2, 0.28, 0.1, '#7C3AED'],
          // Top Row (Stacked)
          [-0.3, 0.39, -0.1, '#F59E0B'],
          [-0.3, 0.39, 0.1, '#DC2626'],
          [-0.05, 0.39, -0.1, '#2563EB'],
          [-0.05, 0.39, 0.1, '#F97316'],
          [0.2, 0.39, 0.1, '#0D9488'],
        ].map(([cx, cy, cz, color], idx) => (
          <RoundedBox
            key={idx}
            args={[0.24, 0.1, 0.17]}
            radius={0.01}
            smoothness={4}
            position={[cx as number, cy as number, cz as number]}
            castShadow
          >
            <meshStandardMaterial color={color as string} roughness={0.28} metalness={0.35} />
          </RoundedBox>
        ))}
      </group>

      {/* 3. VIBRANT CANARY YELLOW INDUSTRIAL GANTRY CRANE */}
      <group position={[0.46, 0, -0.16]}>
        {/* 4 Vertical Lattice Legs */}
        {[-0.13, 0.13].map((lx, idx1) =>
          [-0.13, 0.13].map((lz, idx2) => (
            <mesh key={`${idx1}-${idx2}`} position={[lx, 0.38, lz]} castShadow>
              <cylinderGeometry args={[0.022, 0.028, 0.76, 8]} />
              <meshStandardMaterial color="#FACC15" roughness={0.18} metalness={0.6} />
            </mesh>
          ))
        )}
        {/* Horizontal Gantry Crossbeams */}
        <RoundedBox args={[0.34, 0.045, 0.34]} radius={0.01} smoothness={4} position={[0, 0.76, 0]} castShadow>
          <meshStandardMaterial color="#FACC15" roughness={0.18} metalness={0.6} />
        </RoundedBox>
        {/* Horizontal Overhead Boom (Extending over the ship) */}
        <RoundedBox args={[0.88, 0.07, 0.13]} radius={0.012} smoothness={4} position={[-0.3, 0.82, 0]} castShadow>
          <meshStandardMaterial color="#FACC15" roughness={0.18} metalness={0.6} />
        </RoundedBox>
        {/* Operator Cab */}
        <mesh position={[-0.09, 0.69, 0.1]}>
          <boxGeometry args={[0.11, 0.11, 0.11]} />
          <meshStandardMaterial color="#1E293B" roughness={0.25} metalness={0.75} />
        </mesh>
        {/* Hoist Trolley Cable & Spreader */}
        <mesh position={[-0.48, 0.65, 0]}>
          <cylinderGeometry args={[0.006, 0.006, 0.28, 6]} />
          <meshStandardMaterial color="#475569" metalness={0.8} />
        </mesh>
        <RoundedBox args={[0.18, 0.04, 0.1]} radius={0.008} smoothness={4} position={[-0.48, 0.5, 0]}>
          <meshStandardMaterial color="#DC2626" roughness={0.3} />
        </RoundedBox>
      </group>

      {/* 4. WHITE CARGO DELIVERY TRUCK ON DOCK */}
      <group position={[0.38, 0, 0.44]} rotation={[0, Math.PI / 12, 0]}>
        {/* Cab */}
        <RoundedBox args={[0.2, 0.18, 0.16]} radius={0.015} smoothness={4} position={[-0.18, 0.12, 0]} castShadow>
          <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.2} />
        </RoundedBox>
        {/* Windshield */}
        <mesh position={[-0.24, 0.15, 0]}>
          <boxGeometry args={[0.08, 0.08, 0.14]} />
          <meshStandardMaterial color="#0284C7" roughness={0.1} metalness={0.9} />
        </mesh>
        {/* Cargo Box Trailer */}
        <RoundedBox args={[0.34, 0.24, 0.17]} radius={0.015} smoothness={4} position={[0.1, 0.15, 0]} castShadow>
          <meshStandardMaterial color="#F1F5F9" roughness={0.25} metalness={0.15} />
        </RoundedBox>
        {/* Wheels */}
        {[-0.2, 0.02, 0.18].map((wx, i) =>
          [-0.085, 0.085].map((wz, j) => (
            <mesh key={`${i}-${j}`} position={[wx, 0.035, wz]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.035, 0.035, 0.02, 12]} />
              <meshStandardMaterial color="#1E293B" roughness={0.8} />
            </mesh>
          ))
        )}
      </group>
    </group>
  );
};
