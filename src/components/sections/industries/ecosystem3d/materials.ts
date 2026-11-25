import * as THREE from 'three';

// Procedural AI Emblem Texture for the central microchip
export function createAiChipTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Deep obsidian purple background
  ctx.fillStyle = '#100820';
  ctx.fillRect(0, 0, 1024, 1024);

  // High-tech circuit traces in the background
  ctx.strokeStyle = 'rgba(168, 85, 247, 0.28)';
  ctx.lineWidth = 4;
  for (let i = 80; i < 1024; i += 80) {
    ctx.beginPath();
    ctx.moveTo(i, 60);
    ctx.lineTo(i, 964);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(60, i);
    ctx.lineTo(964, i);
    ctx.stroke();
  }

  // Glowing neon purple inner border
  ctx.strokeStyle = '#D946EF';
  ctx.lineWidth = 18;
  ctx.strokeRect(70, 70, 884, 884);

  // Secondary fine hairline
  ctx.strokeStyle = '#E879F9';
  ctx.lineWidth = 6;
  ctx.strokeRect(95, 95, 834, 834);

  // Outer corner notches
  ctx.fillStyle = '#C084FC';
  ctx.fillRect(55, 55, 50, 50);
  ctx.fillRect(919, 55, 50, 50);
  ctx.fillRect(55, 919, 50, 50);
  ctx.fillRect(919, 919, 50, 50);

  // Center radial ambient glow
  const gradient = ctx.createRadialGradient(512, 512, 20, 512, 512, 380);
  gradient.addColorStop(0, 'rgba(217, 70, 239, 0.95)');
  gradient.addColorStop(0.35, 'rgba(168, 85, 247, 0.55)');
  gradient.addColorStop(0.7, 'rgba(118, 80, 232, 0.25)');
  gradient.addColorStop(1, 'rgba(16, 8, 32, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(110, 110, 804, 804);

  // Bold "AI" Typography matching reference
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '900 420px "Plus Jakarta Sans", "Inter", sans-serif, system-ui';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = '#F5D0FE';
  ctx.shadowBlur = 64;
  ctx.fillText('AI', 512, 512);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// Procedural Red Cross Emblem Texture for Healthcare
export function createRedCrossTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.clearRect(0, 0, 512, 512);

  // Red circle background with glossy white border
  ctx.fillStyle = '#DC2626';
  ctx.beginPath();
  ctx.arc(256, 256, 236, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 28;
  ctx.beginPath();
  ctx.arc(256, 256, 236, 0, Math.PI * 2);
  ctx.stroke();

  // White medical cross (+)
  ctx.fillStyle = '#FFFFFF';
  const armWidth = 84;
  const armLength = 310;
  ctx.fillRect(256 - armWidth / 2, 256 - armLength / 2, armWidth, armLength);
  ctx.fillRect(256 - armLength / 2, 256 - armWidth / 2, armLength, armWidth);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

// Procedural Container Corrugated Texture for Logistics
export function createContainerTexture(color: string): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 128, 64);

  // Vertical corrugation ridges
  for (let x = 4; x < 128; x += 8) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.22)';
    ctx.fillRect(x, 0, 2, 64);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.fillRect(x + 2, 0, 2, 64);
  }

  // Border frame
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
  ctx.lineWidth = 3;
  ctx.strokeRect(0, 0, 128, 64);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
