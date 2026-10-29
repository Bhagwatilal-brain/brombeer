import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const Hero3DScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setIsSupported(false);
        return;
      }
    } catch (e) {
      setIsSupported(false);
      return;
    }

    const width = mount.clientWidth || 500;
    const height = mount.clientHeight || 500;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.2;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    mount.appendChild(renderer.domElement);

    // Group to hold all 3D objects
    const group = new THREE.Group();
    scene.add(group);

    // 1. Amethyst Core Sphere
    const sphereGeometry = new THREE.SphereGeometry(1.35, 64, 64);
    const sphereMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#4B2DA8'),
      emissive: new THREE.Color('#28164D'),
      emissiveIntensity: 0.35,
      roughness: 0.08,
      metalness: 0.15,
      transmission: 0.82,
      thickness: 1.8,
      ior: 1.54,
      specularIntensity: 1.0,
      specularColor: new THREE.Color('#C8B8FA'),
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    group.add(sphere);

    // Inner Glowing Core
    const innerGeometry = new THREE.SphereGeometry(0.85, 32, 32);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#7650E8'),
      transparent: true,
      opacity: 0.65,
    });
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
    sphere.add(innerSphere);

    // 2. Translucent Glass Ribbons (Toruses)
    const ribbonMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#EAE6FA'),
      roughness: 0.05,
      transmission: 0.95,
      thickness: 0.8,
      ior: 1.48,
      transparent: true,
      opacity: 0.85,
      clearcoat: 1.0,
    });

    const ring1Geometry = new THREE.TorusGeometry(2.1, 0.07, 32, 120);
    const ring1 = new THREE.Mesh(ring1Geometry, ribbonMaterial);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    group.add(ring1);

    const ring2Geometry = new THREE.TorusGeometry(2.35, 0.05, 32, 120);
    const ring2 = new THREE.Mesh(ring2Geometry, ribbonMaterial);
    ring2.rotation.x = -Math.PI / 3.5;
    ring2.rotation.z = Math.PI / 4;
    group.add(ring2);

    // 3. Floating Dust Particles
    const particleCount = 65;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 7;
      positions[i + 1] = (Math.random() - 0.5) * 7;
      positions[i + 2] = (Math.random() - 0.5) * 5;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color('#9E7EFF'),
      size: 0.055,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 4. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    const purpleLight = new THREE.PointLight(0x7650e8, 5.0, 15);
    purpleLight.position.set(-4, -3, 3);
    scene.add(purpleLight);

    const softFillLight = new THREE.DirectionalLight(0xc8b8fa, 1.5);
    softFillLight.position.set(0, -5, 2);
    scene.add(softFillLight);

    // Mouse Interaction
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouse.targetX = x * 0.45;
      mouse.targetY = y * 0.45;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      if (!prefersReduced) {
        // Sphere gentle floating and breathing
        sphere.position.y = Math.sin(elapsedTime * 1.2) * 0.1;
        innerSphere.scale.setScalar(1 + Math.sin(elapsedTime * 2.0) * 0.05);

        // Orbiting rings rotation
        ring1.rotation.z = elapsedTime * 0.25;
        ring2.rotation.y = -elapsedTime * 0.2;

        // Group tilt based on mouse
        group.rotation.y = elapsedTime * 0.08 + mouse.x;
        group.rotation.x = mouse.y * 0.6;

        // Particles gentle drift
        particles.rotation.y = elapsedTime * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      ring1Geometry.dispose();
      ring2Geometry.dispose();
      ribbonMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [prefersReduced]);

  if (!isSupported) {
    return (
      <img
        src="/images/hero/hero-sculpture.png"
        alt="Brombeer AI 3D Sculpture"
        className="w-[90%] h-[90%] object-contain"
      />
    );
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-w-[320px] min-h-[320px] max-w-[560px] max-h-[560px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
    />
  );
};