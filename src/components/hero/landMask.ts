import { feature } from 'topojson-client';
import { geoEquirectangular, geoPath } from 'd3-geo';
import landTopo from 'world-atlas/land-110m.json';

export type LandTest = (latDeg: number, lonDeg: number) => boolean;

let cached: LandTest | null = null;

/** Draws the world land shape once and returns a fast lat/lon land test. */
export function getLandMask(width = 1024, height = 512): LandTest {
  if (cached) return cached;

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!;

  const topo: any = landTopo;
  const land: any = feature(topo, topo.objects.land);
  const projection = geoEquirectangular().fitSize([width, height], { type: 'Sphere' } as any);

  ctx.fillStyle = '#fff';
  ctx.beginPath();
  geoPath(projection, ctx)(land);
  ctx.fill();

  const data = ctx.getImageData(0, 0, width, height).data;
  cached = (lat, lon) => {
    const x = Math.min(width - 1, Math.max(0, Math.floor(((lon + 180) / 360) * width)));
    const y = Math.min(height - 1, Math.max(0, Math.floor(((90 - lat) / 180) * height)));
    return data[(y * width + x) * 4 + 3] > 128; // alpha is 255 on land
  };
  return cached;
}
