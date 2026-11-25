import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';

export const ManufacturingModule: React.FC = () => {
  const smokeRef1 = useRef<THREE.Group>(null);
  const smokeRef2 = useRef<THREE.Group>(null);
  const boxesGroupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // 1. Billowing steam puffs rising from chimneys
    if (smokeRef1.current) {
      smokeRef1.current.position.y = 1.12 + ((t * 0.45) % 0.38);
      smokeRef1.current.scale.setScalar(0.85 + ((t * 0.45) % 0.38) * 1.3);
    }
    if (smokeRef2.current) {
      smokeRef2.current.position.y = 1.12 + (((t + 0.5) * 0.45) % 0.38);
      smokeRef2.current.scale.setScalar(0.85 + (((t + 0.5) * 0.45) % 0.38) * 1.3);
    }

    // 2. Animated conveyor belt packages inching forward
    if (boxesGroupRef.current) {
      boxesGroupRef.current.children.forEach((child, idx) => {
        const offset = ((t * 0.38 + idx * 0.28) % 0.9);
        child.position.x = 0.35 + offset;
      });
    }
  });

  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      {/* 1. MAIN INDUSTRIAL FACTORY HALL (Clean Industrial Periwinkle/Slate-Gray Concrete matching Reference) */}
      <RoundedBox
        args={[1.15, 0.68, 0.9]}
        radius={0.03}
        smoothness={4}
        position={[-0.24, 0.35, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#8E99A8" roughness={0.3} metalness={0.2} />
      </RoundedBox>

      {/* Industrial Roof Trim */}
      <RoundedBox
        args={[1.2, 0.055, 0.95]}
        radius={0.015}
        smoothness={4}
        position={[-0.24, 0.71, 0]}
      >
        <meshStandardMaterial color="#A0AAB8" roughness={0.26} metalness={0.2} />
      </RoundedBox>

      {/* Rows of Brilliant Glowing Violet Factory Windows (Facing front +Z) */}
      {[-0.66, -0.44, -0.22, 0, 0.22].map((wx, idx) => (
        <mesh key={idx} position={[wx, 0.24, 0.46]}>
          <boxGeometry args={[0.13, 0.18, 0.02]} />
          <meshBasicMaterial color="#E879F9" />
        </mesh>
      ))}

      {/* 2. TWIN TALL SMOKESTACKS / CHIMNEYS */}
      {/* Chimney 1 */}
      <mesh position={[-0.48, 0.88, -0.16]} castShadow>
        <cylinderGeometry args={[0.08, 0.12, 0.48, 16]} />
        <meshStandardMaterial color="#8E99A8" roughness={0.32} metalness={0.2} />
      </mesh>
      <mesh position={[-0.48, 0.86, -0.16]}>
        <torusGeometry args={[0.09, 0.015, 12, 24]} />
        <meshStandardMaterial color="#2B323D" roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh position={[-0.48, 1.12, -0.16]}>
        <torusGeometry args={[0.085, 0.02, 12, 24]} />
        <meshStandardMaterial color="#2B323D" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Chimney 2 */}
      <mesh position={[-0.16, 0.88, -0.16]} castShadow>
        <cylinderGeometry args={[0.08, 0.12, 0.48, 16]} />
        <meshStandardMaterial color="#8E99A8" roughness={0.32} metalness={0.2} />
      </mesh>
      <mesh position={[-0.16, 0.86, -0.16]}>
        <torusGeometry args={[0.09, 0.015, 12, 24]} />
        <meshStandardMaterial color="#2B323D" roughness={0.4} metalness={0.6} />
      </mesh>
      <mesh position={[-0.16, 1.12, -0.16]}>
        <torusGeometry args={[0.085, 0.02, 12, 24]} />
        <meshStandardMaterial color="#2B323D" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Fluffy Cartoon White Steam Puffs (Chimney 1) */}
      <group ref={smokeRef1} position={[-0.48, 1.16, -0.16]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.07, 14, 14]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.9} />
        </mesh>
        <mesh position={[0.02, 0.07, 0]}>
          <sphereGeometry args={[0.085, 14, 14]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.85} />
        </mesh>
        <mesh position={[-0.01, 0.14, 0]}>
          <sphereGeometry args={[0.065, 12, 12]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.7} />
        </mesh>
      </group>

      {/* Fluffy Cartoon White Steam Puffs (Chimney 2) */}
      <group ref={smokeRef2} position={[-0.16, 1.16, -0.16]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.07, 14, 14]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.9} />
        </mesh>
        <mesh position={[-0.02, 0.07, 0]}>
          <sphereGeometry args={[0.085, 14, 14]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.85} />
        </mesh>
        <mesh position={[0.01, 0.14, 0]}>
          <sphereGeometry args={[0.065, 12, 12]} />
          <meshBasicMaterial color="#FFFFFF" transparent opacity={0.7} />
        </mesh>
      </group>

      {/* 3. ROLLER CONVEYOR BELT WITH GOLDEN PACKAGES */}
      <group position={[0.35, 0, 0.12]}>
        {/* Conveyor Bed Track */}
        <RoundedBox args={[0.96, 0.06, 0.18]} radius={0.01} smoothness={4} position={[0.42, 0.18, 0]} castShadow>
          <meshStandardMaterial color="#222630" roughness={0.35} metalness={0.8} />
        </RoundedBox>
        {/* Conveyor Support Legs */}
        {[0.06, 0.42, 0.78].map((lx, idx) => (
          <mesh key={idx} position={[lx, 0.09, 0]}>
            <cylinderGeometry args={[0.018, 0.018, 0.18, 8]} />
            <meshStandardMaterial color="#3E4452" metalness={0.7} />
          </mesh>
        ))}

        {/* Animated Golden Boxes Moving along Conveyor */}
        <group ref={boxesGroupRef}>
          {[0, 1, 2].map((bIdx) => (
            <RoundedBox
              key={bIdx}
              args={[0.13, 0.11, 0.12]}
              radius={0.01}
              smoothness={4}
              position={[0.35 + bIdx * 0.28, 0.27, 0]}
              castShadow
            >
              <meshStandardMaterial color="#F59E0B" roughness={0.2} metalness={0.65} />
            </RoundedBox>
          ))}
        </group>
      </group>

      {/* 4. Miniature Green Tree near factory edge */}
      <group position={[-0.88, 0, 0.42]}>
        <mesh position={[0, 0.07, 0]}>
          <cylinderGeometry args={[0.02, 0.028, 0.14, 8]} />
          <meshStandardMaterial color="#5C3D2E" roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.2, 0]} castShadow>
          <sphereGeometry args={[0.11, 12, 12]} />
          <meshStandardMaterial color="#2E7D25" roughness={0.7} />
        </mesh>
        <mesh position={[0, 0.29, 0]} castShadow>
          <sphereGeometry args={[0.08, 10, 10]} />
          <meshStandardMaterial color="#3FA336" roughness={0.65} />
        </mesh>
      </group>
    </group>
  );
};
