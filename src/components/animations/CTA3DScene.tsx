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
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    // Master Group for Parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // -------------------------------------------------------------
    // 1. 3D Neural Wave Digital Surface (Bottom Horizon)
    // -------------------------------------------------------------
    const waveCols = 54;
    const waveRows = 28;
    const waveWidth = 22;
    const waveDepth = 12;
    const waveGeometry = new THREE.PlaneGeometry(waveWidth, waveDepth, waveCols, waveRows);
    
    // Store original planar coordinates for mathematical displacement
    const originalPositions = waveGeometry.attributes.position.clone();

    const waveMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#7650E8'),
      emissive: new THREE.Color('#4B2DA8'),
      emissiveIntensity: 0.15,
      wireframe: true,
      transparent: true,
      opacity: 0.28,
      roughness: 0.2,
      metalness: 0.3,
    });
    const waveMesh = new THREE.Mesh(waveGeometry, waveMaterial);
    waveMesh.rotation.x = -Math.PI / 2.25;
    waveMesh.position.set(0, -2.0, -0.8);
    masterGroup.add(waveMesh);

    // Particle nodes at wave vertices for glowing digital terrain effect
    const wavePointsMaterial = new THREE.PointsMaterial({
      color: new THREE.Color('#C8B8FA'),
      size: 0.045,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });
    const wavePoints = new THREE.Points(waveGeometry, wavePointsMaterial);
    wavePoints.rotation.x = waveMesh.rotation.x;
    wavePoints.position.copy(waveMesh.position);
    masterGroup.add(wavePoints);

    // -------------------------------------------------------------
    // 2. Left 3D Sculptural Glass Torus Knot
    // -------------------------------------------------------------
    const leftGroup = new THREE.Group();
    masterGroup.add(leftGroup);

    const knotGeometry = new THREE.TorusKnotGeometry(0.85, 0.2, 128, 28, 2, 3);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#F6F2FF'),
      emissive: new THREE.Color('#4E2EAC'),
      emissiveIntensity: 0.25,
      roughness: 0.08,
      metalness: 0.12,
      transmission: 0.88,
      thickness: 1.6,
      ior: 1.52,
      specularIntensity: 1.0,
      specularColor: new THREE.Color('#E3DAFB'),
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const knotMesh = new THREE.Mesh(knotGeometry, glassMaterial);
    leftGroup.add(knotMesh);

    // Inner Glowing Core inside Left Knot
    const leftCoreGeo = new THREE.SphereGeometry(0.38, 24, 24);
    const leftCoreMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#8F6BF6'),
      transparent: true,
      opacity: 0.65,
    });
    const leftCore = new THREE.Mesh(leftCoreGeo, leftCoreMat);
    leftGroup.add(leftCore);

    // -------------------------------------------------------------
    // 3. Right 3D Gyroscopic Orbital Rings & Amethyst Sphere
    // -------------------------------------------------------------
    const rightGroup = new THREE.Group();
    masterGroup.add(rightGroup);

    // Central Sphere
    const sphereGeo = new THREE.SphereGeometry(0.48, 48, 48);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#6842DC'),
      emissive: new THREE.Color('#3A1D8A'),
      emissiveIntensity: 0.4,
      roughness: 0.12,
      metalness: 0.25,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
    });
    const centerSphere = new THREE.Mesh(sphereGeo, sphereMat);
    rightGroup.add(centerSphere);

    // Ring 1 (Outer Lavender Metal Ring)
    const ring1Geo = new THREE.TorusGeometry(1.25, 0.038, 24, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#D8CEF8'),
      metalness: 0.55,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    rightGroup.add(ring1);

    // Ring 2 (Middle Glass Violet Ring)
    const ring2Geo = new THREE.TorusGeometry(1.02, 0.03, 24, 100);
    const ring2Mat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#9E7EFF'),
      transmission: 0.85,
      roughness: 0.1,
      thickness: 0.6,
      ior: 1.45,
      transparent: true,
      opacity: 0.8,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 3.2;
    ring2.rotation.z = Math.PI / 4;
    rightGroup.add(ring2);

    // Ring 3 (Inner Delicate Accent Ring)
    const ring3Geo = new THREE.TorusGeometry(0.78, 0.024, 20, 80);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#C8B8FA'),
      metalness: 0.4,
      roughness: 0.3,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 2.5;
    ring3.rotation.z = -Math.PI / 5;
    rightGroup.add(ring3);

    // -------------------------------------------------------------
    // 4. Ambient 3D Depth Particles
    // -------------------------------------------------------------
    const particleCount = 75;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 16;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particlesMat = new THREE.PointsMaterial({
      color: new THREE.Color('#9E7EFF'),
      size: 0.048,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const ambientParticles = new THREE.Points(particleGeo, particlesMat);
    masterGroup.add(ambientParticles);

    // -------------------------------------------------------------
    // 5. Studio Lighting
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(6, 6, 7);
    scene.add(keyLight);

    const violetRimLight = new THREE.PointLight(0x7650e8, 5.5, 18);
    violetRimLight.position.set(-6, 2, 4);
    scene.add(violetRimLight);

    const lilacFillLight = new THREE.PointLight(0xc8b8fa, 4.5, 18);
    lilacFillLight.position.set(6, -2, 4);
    scene.add(lilacFillLight);

    // Dynamic positioning of Left & Right 3D sculptures based on canvas aspect ratio
    const updateSculpturePositions = (w: number) => {
      // Responsive flank positioning: on narrow mobile screens, tuck them outward and slightly back
      const isMobile = w < 768;
      const flankX = isMobile ? Math.min(3.6, (w / 1200) * 4.6) : Math.max(4.2, Math.min(5.6, (w / 1200) * 5.0));
      const scale = isMobile ? 0.68 : Math.min(1.05, Math.max(0.85, (w / 1280) * 1.0));

      leftGroup.position.set(-flankX, 0.15, 0.2);
      leftGroup.scale.setScalar(scale);

      rightGroup.position.set(flankX, -0.1, 0.2);
      rightGroup.scale.setScalar(scale);
    };

    updateSculpturePositions(width);

    // -------------------------------------------------------------
    // 6. Smooth Mouse Parallax
    // -------------------------------------------------------------
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 0.45;
      mouse.targetY = y * 0.35;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Observer for pixel-perfect card adaptation
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w > 0 && h > 0) {
          width = w;
          height = h;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
          updateSculpturePositions(w);
        }
      }
    });

    resizeObserver.observe(mount);

    // -------------------------------------------------------------
    // 7. Animation Loop
    // -------------------------------------------------------------
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      const deltaSpeed = prefersReduced ? 0.2 : 1.0;
      const t = elapsedTime * deltaSpeed;

      // Smooth camera parallax
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      camera.position.x = mouse.x * 0.8;
      camera.position.y = mouse.y * 0.5;
      camera.lookAt(0, 0, 0);

      // Undulate 3D Wave Surface
      const posAttr = waveGeometry.attributes.position;
      const origPos = originalPositions;
      for (let i = 0; i < posAttr.count; i++) {
        const ox = origPos.getX(i);
        const oy = origPos.getY(i);
        const z =
          Math.sin(ox * 0.35 + t * 1.1) * Math.cos(oy * 0.35 + t * 0.85) * 0.42 +
          Math.sin((ox + oy) * 0.25 + t * 0.7) * 0.22;
        posAttr.setZ(i, z);
      }
      posAttr.needsUpdate = true;

      // Animate Left Knot
      leftGroup.rotation.x = t * 0.35 + mouse.y * 0.4;
      leftGroup.rotation.y = t * 0.45 + mouse.x * 0.4;
      leftGroup.position.y = 0.15 + Math.sin(t * 1.2) * 0.12;

      // Animate Right Gyroscope Rings
      rightGroup.position.y = -0.1 + Math.sin(t * 1.1 + 1.5) * 0.12;
      ring1.rotation.z += 0.008 * deltaSpeed;
      ring1.rotation.x += 0.005 * deltaSpeed;
      ring2.rotation.y -= 0.012 * deltaSpeed;
      ring2.rotation.z += 0.006 * deltaSpeed;
      ring3.rotation.x += 0.015 * deltaSpeed;
      centerSphere.rotation.y += 0.005 * deltaSpeed;

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
      knotGeometry.dispose();
      glassMaterial.dispose();
      leftCoreGeo.dispose();
      leftCoreMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
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
