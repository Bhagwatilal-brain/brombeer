import * as THREE from 'three';

export interface RouteStop {
  name: string;
  lat: number;
  lon: number;
  /** Optional label nudge in px (positive = down) */
  dy?: number;
}

/** Order matters: the route runs top to bottom, then returns to the first stop. */
export const DEFAULT_ROUTE: RouteStop[] = [
  { name: 'Abu Dhabi', lat: 24.45, lon: 54.38, dy: 12 },
  { name: 'India', lat: 19.08, lon: 72.88 },
  { name: 'Dubai', lat: 25.2, lon: 55.27, dy: -12 },
  { name: 'USA', lat: 40.71, lon: -74.0 },
  { name: 'London', lat: 51.5, lon: -0.12 },
  { name: 'Singapore', lat: 1.35, lon: 103.82 },
];

export interface RouteOptions {
  color: THREE.Color;
  pixelRatio: number;
  stops?: RouteStop[];
  /** Seconds each leg takes (default 1.8) */
  legSeconds?: number;
}

const toVec = (lat: number, lon: number, R: number) => {
  const la = (lat * Math.PI) / 180;
  const lo = (lon * Math.PI) / 180;
  return new THREE.Vector3(
    R * Math.cos(la) * Math.sin(lo),
    R * Math.sin(la),
    R * Math.cos(la) * Math.cos(lo)
  );
};

const ease = (x: number) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2);

// Shared GLSL: fade anything on the far side of the globe
const FACING = `
  vec4 w = modelMatrix * vec4(position, 1.);
  vec3 nrm = normalize(mat3(modelMatrix) * position);
  float facing = dot(nrm, normalize(cameraPosition - w.xyz));
`;

export function createGlobeRoute(opts: RouteOptions) {
  const stops = opts.stops && opts.stops.length > 1 ? opts.stops : DEFAULT_ROUTE;
  const L = opts.legSeconds ?? 1.8;
  const n = stops.length;
  const total = n * L;
  const px = opts.pixelRatio;
  const SEG = 72;
  const group = new THREE.Group();

  // One leg per consecutive pair of stops (last leg returns to the first stop)
  const legs = stops.map((s, i) => {
    const next = stops[(i + 1) % n];
    const a = toVec(s.lat, s.lon, 1.004);
    const b = toVec(next.lat, next.lon, 1.004);
    const lift = 1 + Math.max(a.distanceTo(b) * 0.45, 0.1);
    const mid = a.clone().add(b).multiplyScalar(0.5).normalize().multiplyScalar(lift);
    const curve = new THREE.QuadraticBezierCurve3(a, mid, b);

    // Dotted trail: points sampled along the curve, each tagged with u (0 to 1)
    const pts = new Float32Array((SEG + 1) * 3);
    const us = new Float32Array(SEG + 1);
    for (let k = 0; k <= SEG; k++) {
      const u = k / SEG;
      curve.getPoint(u).toArray(pts, k * 3);
      us[k] = u;
    }
    const trailGeo = new THREE.BufferGeometry();
    trailGeo.setAttribute('position', new THREE.BufferAttribute(pts, 3));
    trailGeo.setAttribute('u', new THREE.BufferAttribute(us, 1));
    const trailMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        c: { value: opts.color },
        head: { value: 0 },
        tail: { value: 0 },
        px: { value: px },
      },
      vertexShader: `
        attribute float u;
        uniform float head, tail, px;
        varying float v;
        varying float hot;
        void main(){
          ${FACING}
          float vis = smoothstep(-.1, .35, facing);
          float inRange = step(tail, u) * step(u, head);
          float k = clamp((u - tail) / max(head - tail, .0001), 0., 1.);
          v = inRange * pow(k, 1.5) * vis;
          hot = pow(k, 6.);
          gl_PointSize = (1.8 + 2.8 * k) * px * (3.6 / length(cameraPosition - w.xyz)) * 1.4;
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,
      fragmentShader: `
        uniform vec3 c;
        varying float v;
        varying float hot;
        void main(){
          float d = length(gl_PointCoord - .5);
          if (d > .5) discard;
          float soft = 1. - smoothstep(.2, .5, d);
          gl_FragColor = vec4(mix(c, vec3(1.), hot * .8), v * soft);
        }`,
    });
    const trail = new THREE.Points(trailGeo, trailMat);
    trail.frustumCulled = false;
    group.add(trail);

    // Glowing head that travels along the trail
    const headGeo = new THREE.BufferGeometry();
    headGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(3), 3));
    const headMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: { c: { value: opts.color }, a: { value: 0 }, px: { value: px } },
      vertexShader: `
        uniform float px;
        varying float vis;
        void main(){
          ${FACING}
          vis = smoothstep(-.1, .35, facing);
          gl_PointSize = 20. * px * (3.6 / length(cameraPosition - w.xyz));
          gl_Position = projectionMatrix * viewMatrix * w;
        }`,
      fragmentShader: `
        uniform vec3 c;
        uniform float a;
        varying float vis;
        void main(){
          float d = length(gl_PointCoord - .5);
          if (d > .5) discard;
          float core = 1. - smoothstep(.06, .14, d);
          float glow = pow(1. - d * 2., 2.) * .6;
          gl_FragColor = vec4(mix(c, vec3(1.), core), clamp(core + glow, 0., 1.) * a * vis);
        }`,
    });
    const headPt = new THREE.Points(headGeo, headMat);
    headPt.frustumCulled = false;
    group.add(headPt);

    return { curve, trailMat, headGeo, headMat };
  });

  // City markers: solid dot plus an expanding ping ring on arrival
  const mPos = new Float32Array(n * 3);
  stops.forEach((s, j) => toVec(s.lat, s.lon, 1.004).toArray(mPos, j * 3));
  const pulseAttr = new THREE.BufferAttribute(new Float32Array(n).fill(1), 1);
  pulseAttr.setUsage(THREE.DynamicDrawUsage);
  const mGeo = new THREE.BufferGeometry();
  mGeo.setAttribute('position', new THREE.BufferAttribute(mPos, 3));
  mGeo.setAttribute('pulse', pulseAttr);
  const mMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    uniforms: { c: { value: opts.color }, px: { value: px } },
    vertexShader: `
      attribute float pulse;
      uniform float px;
      varying float p;
      varying float vis;
      void main(){
        ${FACING}
        p = pulse;
        vis = smoothstep(-.05, .3, facing);
        gl_PointSize = 46. * px * (3.6 / length(cameraPosition - w.xyz));
        gl_Position = projectionMatrix * viewMatrix * w;
      }`,
    fragmentShader: `
      uniform vec3 c;
      varying float p;
      varying float vis;
      void main(){
        float d = length(gl_PointCoord - .5);
        if (d > .5) discard;
        float core = 1. - smoothstep(.04, .07, d);
        float ring = (1. - smoothstep(0., .03, abs(d - p * .5))) * (1. - p);
        float halo = (1. - smoothstep(0., .2, d)) * (1. - p) * .35;
        float a = (core * (.7 + .3 * (1. - p)) + ring + halo) * vis;
        gl_FragColor = vec4(mix(c, vec3(1.), core * .6), a);
      }`,
  });
  const markers = new THREE.Points(mGeo, mMat);
  markers.frustumCulled = false;
  group.add(markers);

  const tmp = new THREE.Vector3();

  /** Call every frame with elapsed seconds */
  function update(t: number) {
    legs.forEach((leg, i) => {
      let lt = (t - i * L) % total;
      if (lt < 0) lt += total;
      // On initial cycle (t < total), don't activate future legs before their departure time
      if (t < total && t < i * L) {
        leg.trailMat.uniforms.head.value = 0;
        leg.trailMat.uniforms.tail.value = 0;
        leg.headMat.uniforms.a.value = 0;
        return;
      }
      const active = lt < 1.5 * L;
      const head = lt < L ? ease(lt / L) : 1;
      const tail = lt <= 0.5 * L ? 0 : Math.min((lt - 0.5 * L) / L, 1);
      leg.trailMat.uniforms.head.value = active ? head : 0;
      leg.trailMat.uniforms.tail.value = active ? tail : 0;

      leg.curve.getPoint(head, tmp);
      (leg.headGeo.getAttribute('position') as THREE.BufferAttribute).setXYZ(0, tmp.x, tmp.y, tmp.z);
      (leg.headGeo.getAttribute('position') as THREE.BufferAttribute).needsUpdate = true;
      const headAlpha = lt < L ? 1 : Math.max(0, 1 - (lt - L) / (0.25 * L));
      leg.headMat.uniforms.a.value = active ? headAlpha : 0;
    });

    // Ping when the head reaches stop j (stop j is reached at time j * L)
    for (let j = 0; j < n; j++) {
      if (t < total && t < j * L) {
        pulseAttr.setX(j, 1);
        continue;
      }
      let since = (t - j * L) % total;
      if (since < 0) since += total;
      pulseAttr.setX(j, Math.min(since / 1.6, 1));
    }
    pulseAttr.needsUpdate = true;
  }

  /** Unit direction (globe-local) of the travelling head, used to turn the globe toward it */
  function focus(t: number): THREE.Vector3 {
    const tt = ((t % total) + total) % total;
    const i = Math.min(Math.floor(tt / L), n - 1);
    return legs[i].curve.getPoint(ease((tt - i * L) / L), tmp).normalize();
  }

  const positions = stops.map((s) => toVec(s.lat, s.lon, 1.004));

  /** 1 when the running dot has just arrived at stop j, fading to 0 over 2.4 seconds */
  function highlight(t: number, j: number): number {
    if (t < total && t < j * L) return 0;
    let since = (t - j * L) % total;
    if (since < 0) since += total;
    return 1 - Math.min(since / 2.4, 1);
  }

  return { group, update, focus, stops, positions, highlight };
}
