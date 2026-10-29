import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { createGlobeRoute, RouteStop } from './globeRoute';
import { getLandMask } from './landMask';

export interface GlobeOptions {
  /** Base color for dots, atmosphere, arcs, sparks, and city markers */
  color?: string;
  /** Dot count on the Fibonacci sphere (defaults to 16000, 8000 on low-end/mobile) */
  dots?: number;
  /** Auto-rotation speed around Y axis (defaults to 0.0022) */
  rotationSpeed?: number;
  /** Callback to access API methods like burst() */
  onInit?: (api: { burst: () => void }) => void;
  /** Ordered list of cities for the running route (defaults to Abu Dhabi, India, Dubai, USA, London, Singapore) */
  route?: RouteStop[];
  /** Seconds per leg (default 1.8) */
  legSeconds?: number;
  /** Turn the globe to follow the head of the route (default true) */
  followRoute?: boolean;
}

export function initGlobe(
  stage: HTMLElement,
  canvas: HTMLCanvasElement,
  opts: GlobeOptions = {}
): () => void {
  const color = new THREE.Color(opts.color || '#ccb8ff');
  const dotCount = opts.dots || 16000;
  const rotationSpeed = opts.rotationSpeed ?? 0.0022;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  } catch (err) {
    console.warn('WebGL initialization failed for 3D Globe:', err);
    return () => {};
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(40, 1, 0.1, 10);
  cam.position.z = 3.6;
  const globe = new THREE.Group();
  scene.add(globe);

  // Dots on a Fibonacci sphere with real world map land mask and scatter offsets
  const pos: number[] = [];
  const sz: number[] = [];
  const sc: number[] = [];
  const isLand = getLandMask();
  const g = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < dotCount; i++) {
    const y = 1 - (i / (dotCount - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const t = g * i;
    const x = Math.cos(t) * r;
    const z = Math.sin(t) * r;
    const lat = (Math.asin(y) * 180) / Math.PI;
    const lon = (Math.atan2(x, z) * 180) / Math.PI; // same convention as the route markers
    const land = isLand(lat, lon);
    if (land || Math.random() < 0.035) { // a few faint ocean dots keep the sphere readable
      pos.push(x, y, z);
      sz.push(land ? 1 : 0.4);
      const rx = Math.random() * 2 - 1,
        ry = Math.random() * 2 - 1,
        rz = Math.random() * 2 - 1;
      const rl = Math.hypot(rx, ry, rz) || 1,
        ds = 0.25 + Math.random() * 0.5;
      sc.push((rx / rl) * ds + x * 0.5, (ry / rl) * ds + y * 0.5, (rz / rl) * ds + z * 0.5);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('s', new THREE.Float32BufferAttribute(sz, 1));
  geo.setAttribute('d', new THREE.Float32BufferAttribute(sc, 3));

  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: {
      c: { value: color },
      t: { value: 0 },
      px: { value: renderer.getPixelRatio() },
      e: { value: 0 },
    },
    vertexShader: `
      attribute float s;
      attribute vec3 d;
      uniform float t, px, e;
      varying float a;
      void main(){
        vec3 n = normalize(mat3(modelMatrix) * position);
        vec3 p = position + d*e + normalize(d)*sin(t*2. + position.y*9.)*.05*e;
        vec4 w = modelMatrix * vec4(p, 1.);
        float f = dot(n, normalize(cameraPosition - w.xyz));
        float b = mix(.08, 1., smoothstep(-.15, .45, f));
        a = mix(b, .85, e) * (.55 + .45*s) * (.85 + .15*sin(t*1.5 + position.x*20.));
        gl_PointSize = (2.6*s + .6) * px * (3.6/length(cameraPosition - w.xyz)) * 1.4 * (1. + e*.5);
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: `
      uniform vec3 c;
      varying float a;
      void main(){
        float d = length(gl_PointCoord - .5);
        if (d > .5) discard;
        gl_FragColor = vec4(c, a * smoothstep(.5, .25, d));
      }`,
  });
  globe.add(new THREE.Points(geo, mat));

  // Atmosphere glow - thin outer rim only
  const atmMat = new THREE.ShaderMaterial({
    transparent: true,
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: { c: { value: color } },
    vertexShader: `varying vec3 n; void main(){ n = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.); }`,
    fragmentShader: `uniform vec3 c; varying vec3 n; void main(){ gl_FragColor = vec4(c, pow(1. - abs(n.z), 3.) * .4); }`,
  });
  const atm = new THREE.Mesh(new THREE.SphereGeometry(1.12, 48, 48), atmMat);
  scene.add(atm);

  // Sequential city route animation with dotted trails and traveling head
  const route = createGlobeRoute({
    color,
    pixelRatio: renderer.getPixelRatio(),
    stops: opts.route,
    legSeconds: opts.legSeconds,
  });
  const ex = route.group; // keeps the explosion code working: it still scales `ex`
  globe.add(ex);

  // State machine for disperse & rebuild effect
  const clock = new THREE.Clock();

  // Place labels (HTML overlay, follows the globe)
  const labelLayer = document.createElement('div');
  labelLayer.style.cssText =
    'position:absolute;inset:0;pointer-events:none;overflow:visible;z-index:3';
  stage.appendChild(labelLayer);
  const labels = route.stops.map((s) => {
    const el = document.createElement('div');
    el.textContent = s.name;
    el.style.cssText =
      'position:absolute;left:0;top:0;white-space:nowrap;font-family:inherit;font-size:11px;font-weight:600;line-height:1;color:#fff;padding:5px 9px;border-radius:999px;background:rgba(20,12,54,.72);border:1px solid rgba(204,184,255,.45);backdrop-filter:blur(6px);will-change:transform,opacity;opacity:0';
    labelLayer.appendChild(el);
    return el;
  });
  const lv = new THREE.Vector3();
  const lp = new THREE.Vector3();
  const ln = new THREE.Vector3();
  const smooth = (a: number, b: number, x: number) => {
    const k = Math.min(Math.max((x - a) / (b - a), 0), 1);
    return k * k * (3 - 2 * k);
  };
  const updateLabels = (t: number, E: number) => {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    labels.forEach((el, j) => {
      ex.localToWorld(lv.copy(route.positions[j]));
      ln.copy(lv).normalize();
      lp.copy(cam.position).sub(lv).normalize();
      const facing = ln.dot(lp);
      lv.project(cam);
      const x = (lv.x * 0.5 + 0.5) * w;
      const y = (-lv.y * 0.5 + 0.5) * h;
      const hl = route.highlight(clock.getElapsedTime(), j);
      const flip = x > w * 0.62; // keep labels inside the stage on the right edge
      const dy = route.stops[j].dy ?? 0;
      el.style.transform = `translate(${x}px, ${y}px) translate(${
        flip ? 'calc(-100% - 12px)' : '12px'
      }, calc(-50% + ${dy}px))`;
      el.style.opacity = `${smooth(0.12, 0.4, facing) * (1 - Math.min(E * 3, 1)) * (0.5 + 0.5 * hl)}`;
      el.style.background = hl > 0.05 ? `rgba(124,77,236,${0.55 + 0.4 * hl})` : 'rgba(20,12,54,.72)';
    });
  };

  const followRoute = opts.followRoute ?? true;
  let followTilt = 0;

  // Target the dark orb behind the canvas
  const orb = stage.querySelector<HTMLElement>('#orb');

  const ph = { s: 'idle', t0: 0, wait: 4 };
  const go = (s: string) => {
    ph.s = s;
    ph.t0 = clock.getElapsedTime();
    ph.wait = 6;
  };
  const burst = () => {
    if (ph.s === 'idle') go('out');
  };

  if (opts.onInit) {
    opts.onInit({ burst });
  }

  // Interaction
  let drag = false;
  let lx = 0;
  let tx = 0;
  let ty = 0;
  let startX = 0;
  let startY = 0;
  const onDown = (e: PointerEvent) => {
    drag = true;
    lx = e.clientX;
    startX = e.clientX;
    startY = e.clientY;
    try {
      canvas.setPointerCapture(e.pointerId);
    } catch {}
    canvas.style.cursor = 'grabbing';
  };
  const onUp = (e: PointerEvent) => {
    drag = false;
    canvas.style.cursor = 'grab';
    const dist = Math.hypot(e.clientX - startX, e.clientY - startY);
    if (dist <= 5) {
      burst();
    }
  };
  const onMove = (e: PointerEvent) => {
    if (drag) {
      globe.rotation.y += (e.clientX - lx) * 0.005;
      lx = e.clientX;
    }
    const h = window.innerHeight || 800;
    const w = window.innerWidth || 1200;
    tx = (e.clientY / h - 0.5) * 0.35;
    ty = (e.clientX / w - 0.5) * 0.2;
  };
  canvas.style.cursor = 'grab';
  canvas.addEventListener('pointerdown', onDown);
  window.addEventListener('pointerup', onUp);
  window.addEventListener('pointermove', onMove);

  const resize = () => {
    if (!stage) return;
    const w = stage.clientWidth;
    if (w <= 0) return;
    renderer.setSize(w, w, false);
    cam.aspect = 1;
    cam.updateProjectionMatrix();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(stage);
  resize();

  const reduce =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Orient globe initially so the start point (Abu Dhabi) directly faces the user on page load
  const f0 = route.focus(0);
  const startTargetY = -Math.atan2(f0.x, f0.z);
  const startTilt = Math.max(-0.5, Math.min(0.5, Math.atan2(f0.y, Math.hypot(f0.x, f0.z)))) * 0.6;
  globe.rotation.y = startTargetY;
  globe.rotation.x = 0.3 + startTilt;
  followTilt = startTilt;

  // Prime initial frame and labels so Abu Dhabi is front and center immediately
  route.update(0);
  renderer.render(scene, cam);
  updateLabels(0, 0);

  let raf: number;
  const loop = () => {
    const t = clock.getElapsedTime();
    mat.uniforms.t.value = t;

    const el = t - ph.t0;
    let E = 0,
      k: number;
    if (ph.s === 'idle') {
      if (!reduce && el > ph.wait) go('out');
    } else if (ph.s === 'out') {
      k = Math.min(el / 1.3, 1);
      E = 1 - Math.pow(1 - k, 3);
      if (k >= 1) go('hold');
    } else if (ph.s === 'hold') {
      E = 1;
      if (el > 0.9) go('in');
    } else {
      k = Math.min(el / 2, 1);
      E = 1 - (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
      if (k >= 1) go('idle');
    }
    mat.uniforms.e.value = E;
    if (orb) {
      orb.style.opacity = `${1 - E * 0.9}`;
      orb.style.transform = `scale(${1 - E * 0.37})`;
    }
    cam.position.z = 3.6 + E * 2; // zoom out so scattered dots are not clipped
    atm.scale.setScalar(1 - E * 0.8); // glow fades with the sphere
    ex.scale.setScalar(Math.max(0.001, 1 - E * 4)); // arcs collapse at the start of the burst

    route.update(t);
    if (!drag && !reduce) {
      if (followRoute) {
        const f = route.focus(t);
        const targetY = -Math.atan2(f.x, f.z);
        let dy = targetY - globe.rotation.y;
        dy = Math.atan2(Math.sin(dy), Math.cos(dy)); // shortest way round
        globe.rotation.y += dy * 0.04;
        followTilt = Math.max(-0.5, Math.min(0.5, Math.atan2(f.y, Math.hypot(f.x, f.z)))) * 0.6;
      } else {
        globe.rotation.y += rotationSpeed;
      }
    }
    globe.rotation.x += (0.3 + followTilt + tx - globe.rotation.x) * 0.05;
    scene.rotation.y += (ty - scene.rotation.y) * 0.05;
    renderer.render(scene, cam);
    updateLabels(t, E);
    raf = requestAnimationFrame(loop);
  };
  loop();

  // Call on unmount
  return function destroy() {
    cancelAnimationFrame(raf);
    labelLayer.remove();
    ro.disconnect();
    canvas.removeEventListener('pointerdown', onDown);
    window.removeEventListener('pointerup', onUp);
    window.removeEventListener('pointermove', onMove);
    scene.traverse((o: any) => {
      o.geometry?.dispose();
      if (Array.isArray(o.material)) {
        o.material.forEach((m: any) => m?.dispose());
      } else {
        o.material?.dispose();
      }
    });
    renderer.dispose();
  };
}

export interface GlobeProps {
  /** Override globe color (defaults to #ccb8ff for high contrast against dark orb) */
  color?: string;
  /** Dot count (defaults to 16000, 8000 on mobile/low-end) */
  dots?: number;
  /** Auto-rotation speed (defaults to 0.0022) */
  rotationSpeed?: number;
  /** Extra container styling */
  className?: string;
  /** Whether to render dashed rings and floating cards */
  showDecorations?: boolean;
  /** Ordered list of cities for the running route */
  route?: RouteStop[];
  /** Seconds per leg (default 1.8) */
  legSeconds?: number;
  /** Turn the globe to follow the head of the route (default true) */
  followRoute?: boolean;
}

export const Globe: React.FC<GlobeProps> = ({
  color = '#ccb8ff',
  dots,
  rotationSpeed,
  className = '',
  showDecorations = true,
  route,
  legSeconds,
  followRoute,
}) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!stageRef.current || !canvasRef.current) return;

    // Use light lavender color for high-contrast visibility against the dark orb
    const activeColor = color || '#ccb8ff';

    // On screens narrower than 820px or low-end mobile devices, lower dot count to 8000
    const isMobileOrLowEnd =
      typeof window !== 'undefined' &&
      (window.innerWidth < 820 ||
        (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4));

    const activeDots = dots ?? (isMobileOrLowEnd ? 8000 : 16000);

    const destroy = initGlobe(stageRef.current, canvasRef.current, {
      color: activeColor,
      dots: activeDots,
      rotationSpeed: rotationSpeed ?? 0.0022,
      route,
      legSeconds,
      followRoute,
    });

    return () => {
      destroy();
    };
  }, [color, dots, rotationSpeed, route, legSeconds, followRoute]);

  return (
    <div
      className={`relative w-full max-w-[460px] mx-auto aspect-square flex items-center justify-center select-none ${className}`}
    >
      {/* Two dashed circular rings (1px dashed, primary color at 40% opacity) around the globe */}
      {showDecorations && (
        <>
          <div
            className="absolute w-[114%] h-[114%] rounded-full border border-dashed border-violet-primary/40 pointer-events-none"
            style={{
              animation: prefersReduced ? 'none' : 'spin 70s linear infinite',
            }}
          />
          <div
            className="absolute w-[128%] h-[128%] rounded-full border border-dashed border-violet-primary/25 pointer-events-none"
            style={{
              animation: prefersReduced ? 'none' : 'spin 95s linear infinite reverse',
            }}
          />
        </>
      )}

      {/* Globe Stage Container: square container with position: relative; aspect-ratio: 1; width: 100%; max-width: 460px; */}
      <div
        ref={stageRef}
        style={{
          position: 'relative',
          aspectRatio: '1',
          width: '100%',
          maxWidth: 460,
        }}
        className="z-10"
      >
        {/* Dark orb behind canvas */}
        <div
          id="orb"
          className="orb pointer-events-none"
          style={{
            position: 'absolute',
            inset: '10.3%',
            borderRadius: '50%',
            background: 'radial-gradient(circle at 34% 28%, #4b36a9 0%, #271a68 52%, #120b36 100%)',
            boxShadow:
              '0 36px 70px -10px rgba(52,30,140,.45), inset 0 0 50px rgba(169,139,255,.28), 0 0 0 1px rgba(169,139,255,.25)',
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>

    </div>
  );
};

export default Globe;
