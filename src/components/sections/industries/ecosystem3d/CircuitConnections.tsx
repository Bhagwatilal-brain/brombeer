import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface CircuitConnectionsProps {
  platformPositions: [number, number, number][];
}

export const CircuitConnections: React.FC<CircuitConnectionsProps> = ({
  platformPositions,
}) => {
  const pulseGroupRef = useRef<THREE.Group>(null);

  const { curves, pulseData } = useMemo(() => {
    const allCurves: THREE.CatmullRomCurve3[] = [];
    const pData: { curveIndex: number; speed: number; offset: number }[] = [];

    platformPositions.forEach(([px, , pz]) => {
      const angle = Math.atan2(pz, px);
      const perpAngle = angle + Math.PI / 2;

      // 4 parallel neon circuit lanes as seen in reference image!
      const laneOffsets = [-0.18, -0.06, 0.06, 0.18];

      laneOffsets.forEach((laneOffset, lIdx) => {
        const startR = 0.8;
        const endR = 2.05;

        const sx = Math.cos(angle) * startR + Math.cos(perpAngle) * laneOffset;
        const sz = Math.sin(angle) * startR + Math.sin(perpAngle) * laneOffset;

        // PCB-style waypoint at mid-distance
        const midR = (startR + endR) * 0.52;
        const bendOffset = laneOffset * 1.25;
        const mx = Math.cos(angle) * midR + Math.cos(perpAngle) * bendOffset;
        const mz = Math.sin(angle) * midR + Math.sin(perpAngle) * bendOffset;

        const ex = Math.cos(angle) * endR + Math.cos(perpAngle) * laneOffset;
        const ez = Math.sin(angle) * endR + Math.sin(perpAngle) * laneOffset;

        const points = [
          new THREE.Vector3(sx, 0.02, sz),
          new THREE.Vector3(mx, 0.035, mz),
          new THREE.Vector3(ex, 0.05, ez),
        ];

        const curve = new THREE.CatmullRomCurve3(points);
        allCurves.push(curve);

        pData.push({
          curveIndex: allCurves.length - 1,
          speed: 0.38 + (lIdx * 0.06),
          offset: (lIdx * 0.25) % 1,
        });
      });
    });

    return { curves: allCurves, pulseData: pData };
  }, [platformPositions]);

  const tubeGeometries = useMemo(() => {
    return curves.map((c) => new THREE.TubeGeometry(c, 24, 0.018, 8, false));
  }, [curves]);

  useFrame((_, delta) => {
    if (pulseGroupRef.current) {
      pulseData.forEach((p, idx) => {
        p.offset = (p.offset + p.speed * delta) % 1;
        const mesh = pulseGroupRef.current?.children[idx] as THREE.Mesh;
        if (mesh && curves[p.curveIndex]) {
          const pt = curves[p.curveIndex].getPoint(p.offset);
          mesh.position.copy(pt);
        }
      });
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 1. Neon Glowing Circuit Track Lines */}
      {tubeGeometries.map((geom, idx) => (
        <mesh key={idx} geometry={geom}>
          <meshBasicMaterial
            color="#D946EF"
            transparent
            opacity={0.92}
          />
        </mesh>
      ))}

      {/* 2. Moving Light Pulses Along Circuit Tracks */}
      <group ref={pulseGroupRef}>
        {pulseData.map((_, idx) => (
          <mesh key={idx}>
            <sphereGeometry args={[0.038, 12, 12]} />
            <meshBasicMaterial
              color="#FFFFFF"
              transparent
              opacity={0.98}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
};
