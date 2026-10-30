import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface CTA3DSceneProps {
  className?: string;
}

export const CTA3DScene: React.FC<CTA3DSceneProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setIsSupported(false);
        return;
      }
    } catch {
      setIsSupported(false);
      return;
    }

    let width = mount.clientWidth || 1200;
    let height = mount.clientHeight || 500;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 6.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    mount.appendChild(renderer.domElement);

    // Master Group for Parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // -------------------------------------------------------------
    // 1. 3D Neural Wave Digital Surface (Topological Terrain)
    // -------------------------------------------------------------
    const waveCols = 60;
    const waveRows = 32;
    const waveWidth = 26;
    const waveDepth = 15;
    const waveGeometry = new THREE.PlaneGeometry(waveWidth, waveDepth, waveCols, waveRows);
    
    // Store original planar coordinates for mathematical displacement
    const originalPositions = waveGeometry.attributes.position.clone();

    // Semi-translucent 3D glowing wireframe terrain
    const waveMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#7650E8'),
      emissive: new THREE.Color('#4B2DA8'),
      emissiveIntensity: 0.22,
      wireframe: true,
      transparent: true,
      opacity: 0.24,
      roughness: 0.25,
      metalness: 0.35,
    });
    const waveMesh = new THREE.Mesh(waveGeometry, waveMaterial);
    waveMesh.rotation.x = -Math.PI / 2.2;
    waveMesh.position.set(0, -1.8, -0.6);
    masterGroup.add(waveMesh);

    // Glowing particle nodes at wave grid vertices
    const wavePointsMaterial = new THREE.PointsMaterial({
      color: new THREE.Color('#C8B8FA'),
      size: 0.046,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const wavePoints = new THREE.Points(waveGeometry, wavePointsMaterial);
    wavePoints.rotation.x = waveMesh.rotation.x;
    wavePoints.position.copy(waveMesh.position);
    masterGroup.add(wavePoints);

    // -------------------------------------------------------------
    // 2. Ambient 3D Depth Particles (Floating Data Constellation)
    // -------------------------------------------------------------
    const particleCount = 85;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 18;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: new THREE.Color('#9E7EFF'),
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const ambientParticles = new THREE.Points(particleGeo, particlesMat);
    masterGroup.add(ambientParticles);

    // -------------------------------------------------------------
    // 3. Studio Lighting
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    const violetRimLight = new THREE.PointLight(0x7650e8, 4.5, 20);
    violetRimLight.position.set(-6, 2, 4);
    scene.add(violetRimLight);

    const lilacFillLight = new THREE.PointLight(0xc8b8fa, 4.0, 20);
    lilacFillLight.position.set(6, -2, 4);
    scene.add(lilacFillLight);

    // -------------------------------------------------------------
    // 4. Smooth Mouse Parallax
    // -------------------------------------------------------------
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 0.45;
      mouse.targetY = y * 0.3;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        }
      }
    });

    resizeObserver.observe(mount);

    // -------------------------------------------------------------
    // 5. Animation Loop
    // -------------------------------------------------------------
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const deltaSpeed = prefersReduced ? 0.2 : 1.0;
      const t = elapsedTime * deltaSpeed;

      // Smooth camera parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      camera.position.x = mouse.x * 0.8;
      camera.position.y = 0.8 + mouse.y * 0.4;
      camera.lookAt(0, 0, 0);

      // Undulate 3D Wave Surface
      const posAttr = waveGeometry.attributes.position;
      const origPos = originalPositions;
      for (let i = 0; i < posAttr.count; i++) {
        const ox = origPos.getX(i);
        const oy = origPos.getY(i);
        const z =
          Math.sin(ox * 0.35 + t * 1.0) * Math.cos(oy * 0.35 + t * 0.8) * 0.42 +
          Math.sin((ox + oy) * 0.22 + t * 0.65) * 0.2;
        posAttr.setZ(i, z);
      }
      posAttr.needsUpdate = true;

      // Gently rotate ambient particles
      ambientParticles.rotation.y = t * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // -------------------------------------------------------------
    // Cleanup on Unmount
    // -------------------------------------------------------------
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();

      if (mount && renderer.domElement && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }

      // Dispose Three.js resources
      waveGeometry.dispose();
      originalPositions.dispose();
      waveMaterial.dispose();
      wavePointsMaterial.dispose();
      particleGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, [prefersReduced]);

  if (!isSupported) {
    return null;
  }

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
};
