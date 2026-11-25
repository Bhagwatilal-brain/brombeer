import React from 'react';
import { RoundedBox } from '@react-three/drei';

export const FinanceModule: React.FC = () => {
  return (
    <group position={[0, 0, 0]} rotation={[0, Math.PI / 12, 0]}>
      {/* 1. BANK BUILDING FOUNDATION & ENTRANCE STAIRS */}
      <RoundedBox
        args={[1.2, 0.1, 0.98]}
        radius={0.02}
        smoothness={4}
        position={[-0.15, 0.05, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#FAF5FF" roughness={0.2} metalness={0.15} />
      </RoundedBox>

      {/* Stepped Front Entrance Stairs */}
      <RoundedBox
        args={[0.62, 0.06, 0.2]}
        radius={0.015}
        smoothness={4}
        position={[0.08, 0.03, 0.54]}
        receiveShadow
      >
        <meshStandardMaterial color="#EDE7F9" roughness={0.25} metalness={0.1} />
      </RoundedBox>

      {/* 2. MAIN BANK PORTICO & COLUMNS */}
      {/* Portico Entrance Block */}
      <RoundedBox
        args={[0.66, 0.62, 0.66]}
        radius={0.025}
        smoothness={4}
        position={[0.08, 0.4, 0.12]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#FAF5FF" roughness={0.2} metalness={0.15} />
      </RoundedBox>

      {/* 4 Classical White Pillars in Front */}
      {[-0.2, -0.07, 0.07, 0.2].map((cx, idx) => (
        <mesh key={idx} castShadow position={[0.08 + cx, 0.38, 0.47]}>
          <cylinderGeometry args={[0.034, 0.038, 0.58, 16]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.15} metalness={0.2} />
        </mesh>
      ))}

      {/* Triangular Entablature & Pediment */}
      <mesh position={[0.08, 0.72, 0.45]} castShadow>
        <coneGeometry args={[0.36, 0.15, 4]} />
        <meshStandardMaterial color="#FAF5FF" roughness={0.2} metalness={0.2} />
      </mesh>

      {/* Pediment Relief Pillar Emblem (Deep Indigo/Violet Bank Icon) */}
      <mesh position={[0.08, 0.72, 0.52]}>
        <cylinderGeometry args={[0.048, 0.048, 0.018, 16]} />
        <meshStandardMaterial color="#311B68" roughness={0.25} metalness={0.6} />
      </mesh>

      {/* 3. SIDE OFFICE WING WITH TWILIGHT SLATE-INDIGO BODY & ILLUMINATED WINDOWS */}
      <RoundedBox
        args={[0.52, 0.72, 0.68]}
        radius={0.025}
        smoothness={4}
        position={[-0.48, 0.44, -0.06]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#2E254E" roughness={0.28} metalness={0.5} />
      </RoundedBox>

      {/* Windows on Side Office Wing (Lit in Warm Golden-Amber and Violet matching reference) */}
      {[-0.66, -0.5, -0.34].map((wx, colIdx) =>
        [0.66, 0.46, 0.26].map((wy, rowIdx) => (
          <mesh key={`${colIdx}-${rowIdx}`} position={[wx, wy, 0.29]}>
            <boxGeometry args={[0.09, 0.11, 0.015]} />
            <meshStandardMaterial
              color={rowIdx % 2 === 0 ? '#FDE047' : '#C084FC'}
              emissive={rowIdx % 2 === 0 ? '#EAB308' : '#9333EA'}
              emissiveIntensity={0.6}
              roughness={0.15}
              metalness={0.8}
            />
          </mesh>
        ))
      )}

      {/* 4. TALL STACKS OF SHINY GOLDEN COINS (Vibrant Yellow-Gold Matching Reference) */}
      {/* Coin Stack 1: 5 Coins Tall */}
      <group position={[0.58, 0, 0.3]}>
        {[0, 1, 2, 3, 4].map((cIdx) => (
          <mesh key={cIdx} position={[0, 0.045 + cIdx * 0.062, 0]} castShadow>
            <cylinderGeometry args={[0.14, 0.14, 0.055, 24]} />
            <meshStandardMaterial
              color="#FBBF24"
              roughness={0.08}
              metalness={0.98}
              emissive="#D97706"
              emissiveIntensity={0.35}
            />
          </mesh>
        ))}
      </group>

      {/* Coin Stack 2: 3 Coins Tall */}
      <group position={[0.66, 0, 0.02]}>
        {[0, 1, 2].map((cIdx) => (
          <mesh key={cIdx} position={[0, 0.045 + cIdx * 0.062, 0]} castShadow>
            <cylinderGeometry args={[0.13, 0.13, 0.055, 24]} />
            <meshStandardMaterial
              color="#F59E0B"
              roughness={0.1}
              metalness={0.96}
              emissive="#D97706"
              emissiveIntensity={0.3}
            />
          </mesh>
        ))}
      </group>

      {/* Coin Stack 3: 2 Coins Beside */}
      <group position={[0.44, 0, 0.52]}>
        {[0, 1].map((cIdx) => (
          <mesh key={cIdx} position={[0, 0.045 + cIdx * 0.062, 0]} castShadow>
            <cylinderGeometry args={[0.12, 0.12, 0.055, 24]} />
            <meshStandardMaterial
              color="#FBBF24"
              roughness={0.08}
              metalness={0.98}
              emissive="#D97706"
              emissiveIntensity={0.3}
            />
          </mesh>
        ))}
      </group>

      {/* 5. Miniature Green Tree near bank corner */}
      <group position={[-0.86, 0, 0.35]}>
        <mesh position={[0, 0.08, 0]}>
          <cylinderGeometry args={[0.02, 0.03, 0.16, 8]} />
          <meshStandardMaterial color="#5C3D2E" roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.22, 0]} castShadow>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial color="#36822B" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.32, 0]} castShadow>
          <sphereGeometry args={[0.085, 10, 10]} />
          <meshStandardMaterial color="#489F39" roughness={0.65} />
        </mesh>
      </group>
    </group>
  );
};
