import React, { useEffect, useRef, useState } from 'react';
import { createNoise3D } from 'simplex-noise';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface LiquidEffectProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: 'slow' | 'fast';
  waveOpacity?: number;
}

export const LiquidEffect: React.FC<LiquidEffectProps> = ({
  children,
  className,
  containerClassName,
  colors = ['#7650E8', '#9E7EFF', '#C8B8FA', '#EAE6FA', '#5E38C4'],
  waveWidth = 40,
  backgroundFill = 'transparent',
  blur = 10,
  speed = 'slow',
  waveOpacity = 0.45,
  ...props
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = useReducedMotion();

  const getSpeed = () => {
    switch (speed) {
      case 'slow':
        return 0.001;
      case 'fast':
        return 0.002;
      default:
        return 0.001;
    }
  };

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = (ctx.canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let h = (ctx.canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);
    ctx.filter = `blur(${blur}px)`;
    let nt = 0;

    window.onresize = function () {
      if (!canvas.parentElement) return;
      w = ctx.canvas.width = canvas.parentElement.clientWidth;
      h = ctx.canvas.height = canvas.parentElement.clientHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    const drawWave = (n: number) => {
      nt += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = colors[i % colors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    let animationId: number;
    const render = () => {
      ctx.fillStyle = backgroundFill;
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      if (!prefersReduced) {
        animationId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
    };
  };

  useEffect(() => {
    const cleanup = init();
    return () => {
      if (cleanup) cleanup();
    };
  }, [blur, speed, waveOpacity, prefersReduced]);

  return (
    <div
      className={cn(
        'relative overflow-hidden flex flex-col items-center justify-center',
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0 pointer-events-none"
        ref={canvasRef}
        id="liquid-canvas"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <div className={cn('relative z-10 w-full', className)} {...props}>
        {children}
      </div>
    </div>
  );
};