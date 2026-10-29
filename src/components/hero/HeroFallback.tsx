import React from 'react';

export const HeroFallback: React.FC = () => {
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto flex items-center justify-center">
      <img
        src="/images/hero/hero-fallback.webp"
        alt="Brombeer AI 3D Amethyst Glass Sculpture"
        className="w-full h-full object-contain filter drop-shadow-[0_25px_35px_rgba(118,80,232,0.15)] transition-transform duration-700 hover:scale-105"
        loading="eager"
      />
    </div>
  );
};