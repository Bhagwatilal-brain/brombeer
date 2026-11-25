"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CardItem {
  imgUrl: string;
  alt?: string;
  linkUrl?: string;
  title?: string;
  category?: string;
  description?: string;
  badge?: string;
}

export interface SocialCardsProps {
  cards: CardItem[];
  className?: string;
}

const MAX_VISIBLE = 7;
const HALF = 3;

const FAN_POSITIONS = [
  { rot: -21, scale: 0.7756, x: -30, y: 7.3, zIndex: 1 },
  { rot: -14, scale: 0.8498, x: -22, y: 4.0, zIndex: 2 },
  { rot: -7,  scale: 0.9346, x: -11, y: 1.3, zIndex: 3 },
  { rot: 0,   scale: 1.0,    x: 0,   y: 0.0, zIndex: 10 },
  { rot: 7,   scale: 0.9346, x: 11,  y: 1.3, zIndex: 3 },
  { rot: 14,  scale: 0.8498, x: 22,  y: 4.0, zIndex: 2 },
  { rot: 21,  scale: 0.7756, x: 30,  y: 7.3, zIndex: 1 },
];

function getResponsiveMultiplier(width: number) {
  if (width < 480) return 0.28;
  if (width < 640) return 0.38;
  if (width < 768) return 0.5;
  if (width < 1024) return 0.75;
  return 1.0;
}

/**
 * Returns a multiplier (0..1] that scales y-offsets and entry animation
 * distances when the viewport is too short for the ideal layout height.
 */
function getHeightMultiplier(width: number) {
  // Ideal layout heights (in px at 16px root) matching the CSS breakpoints
  let idealPx: number;
  if (width < 480) idealPx = 22 * 16;       // 352px
  else if (width < 640) idealPx = 26 * 16;  // 416px
  else if (width < 768) idealPx = 28 * 16;  // 448px
  else if (width < 1024) idealPx = 34 * 16; // 544px
  else idealPx = 38 * 16;                   // 608px

  const available = window.innerHeight * 0.7; // 70vh budget
  if (available >= idealPx) return 1;
  return available / idealPx;
}

function getSlotConfig(totalCards: number, slot: number) {
  if (totalCards >= MAX_VISIBLE) return FAN_POSITIONS[slot];
  const center = totalCards >> 1;
  const distance = totalCards > 1 ? (slot - center) / center : 0;
  const absDistance = Math.abs(distance);
  return {
    rot: distance * 21,
    scale: 1.0 - 0.2244 * absDistance * absDistance,
    x: distance * 30,
    y: absDistance * absDistance * 7.3,
    zIndex: 10 - Math.abs(slot - center),
  };
}

const ARROW_CLASSES =
  "relative flex items-center justify-center rounded-full border-[1.5px] border-[#6853A5]/20 bg-white/80 dark:bg-black/60 backdrop-blur-[16px] text-violet-primary dark:text-violet-300 cursor-pointer shrink-0 z-30 outline-none shadow-md hover:border-violet-primary hover:bg-white hover:text-violet-deep active:scale-95 transition-all duration-300";

export default function SocialCards({ cards, className = "" }: SocialCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const hasEntered = useRef(false);
  const directionRef = useRef<"left" | "right" | null>(null);
  const prevVisible = useRef<Set<number>>(new Set());

  const totalCards = cards.length;
  const needsPagination = totalCards > MAX_VISIBLE;
  const [centerIndex, setCenterIndex] = useState(needsPagination ? HALF : totalCards >> 1);

  const getVisibleMap = useCallback((center: number) => {
    const map = new Map<number, number>();
    if (!needsPagination) {
      cards.forEach((_, i) => map.set(i, i));
      return map;
    }
    for (let slot = 0; slot < MAX_VISIBLE; slot++) {
      map.set(((center + slot - HALF) % totalCards + totalCards) % totalCards, slot);
    }
    return map;
  }, [totalCards, needsPagination, cards]);

  const cycle = useCallback((direction: "left" | "right") => {
    if (isAnimating.current || !needsPagination) return;
    isAnimating.current = true;
    directionRef.current = direction;
    setCenterIndex(prev =>
      direction === "right" ? (prev + 1) % totalCards : (prev - 1 + totalCards) % totalCards
    );
  }, [totalCards, needsPagination]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !totalCards) return;

    const cardElements = Array.from(container.querySelectorAll<HTMLElement>(".fan-card"));
    if (!cardElements.length) return;

    const visibleMap = getVisibleMap(centerIndex);
    const previouslyVisible = prevVisible.current;
    const direction = directionRef.current;
    const isFirstMount = !hasEntered.current;
    const multiplier = getResponsiveMultiplier(window.innerWidth);
    const hMult = getHeightMultiplier(window.innerWidth);
    const slotCount = needsPagination ? MAX_VISIBLE : totalCards;
    const config = (slot: number) => getSlotConfig(slotCount, slot);

    if (isFirstMount) isAnimating.current = true;

    let completedCount = 0;
    const visibleCount = visibleMap.size;
    const onCardDone = () => {
      if (++completedCount >= visibleCount) {
        isAnimating.current = false;
        if (isFirstMount) hasEntered.current = true;
      }
    };

    cardElements.forEach((card, cardIndex) => {
      const slot = visibleMap.get(cardIndex);
      const wasVisible = previouslyVisible.has(cardIndex);

      if (slot !== undefined) {
        const { x, y, rot, scale, zIndex } = config(slot);
        const target = {
          x: `${x * multiplier}rem`,
          y: `${y * hMult}rem`,
          rotation: rot,
          scale,
          opacity: 1,
          zIndex,
        };

        if (isFirstMount) {
          gsap.set(card, { x: 0, y: `${12 * hMult}rem`, rotation: 0, scale: 0.5, opacity: 0 });
          gsap.to(card, { ...target, duration: 1.2, ease: "elastic.out(1.05,.78)", delay: 0.2 + slot * 0.06, onComplete: onCardDone });
        } else if (!wasVisible) {
          const enterX = direction === "right" ? 40 : -40;
          gsap.set(card, { x: `${enterX}rem`, y: `${y * hMult}rem`, rotation: direction === "right" ? 30 : -30, scale: 0.5, opacity: 0 });
          gsap.to(card, { ...target, duration: 0.6, ease: "power2.out", onComplete: onCardDone });
        } else {
          gsap.to(card, { ...target, duration: 0.5, ease: "power2.out", onComplete: onCardDone });
        }
      } else if (wasVisible) {
        const exitX = direction === "right" ? -40 : 40;
        gsap.to(card, { x: `${exitX}rem`, opacity: 0, scale: 0.5, rotation: direction === "right" ? -30 : 30, duration: 0.4, ease: "power2.in", zIndex: 0 });
      } else if (isFirstMount) {
        gsap.set(card, { opacity: 0, scale: 0.3, x: 0, y: 0, zIndex: 0 });
      }
    });

    prevVisible.current = new Set(visibleMap.keys());

    // Hover interactions
    const visibleEntries: { el: HTMLElement; slot: number }[] = [];
    cardElements.forEach((el, i) => {
      const slot = visibleMap.get(i);
      if (slot !== undefined) visibleEntries.push({ el, slot });
    });
    visibleEntries.sort((a, b) => a.slot - b.slot);

    let activeSlot: number | null = null;
    let leaveTimer: NodeJS.Timeout | null = null;
    const centerSlot = visibleEntries.length >> 1;

    const updateHoverLayout = (hoveredSlot: number | null) => {
      const mult = getResponsiveMultiplier(window.innerWidth);
      const hM = getHeightMultiplier(window.innerWidth);

      visibleEntries.forEach(({ el, slot }) => {
        const base = config(slot);
        let targetX = base.x * mult;
        let targetY = base.y * hM;
        let targetRot = base.rot;
        let targetScale = base.scale;
        let delay = 0;

        if (hoveredSlot !== null) {
          const distance = Math.abs(slot - hoveredSlot);
          delay = distance * 0.02;

          if (slot === hoveredSlot) {
            targetY -= 2.5 * hM;
            targetScale *= 1.08;
          } else {
            const normalized = centerSlot > 0 ? (slot - centerSlot) / centerSlot : 0;
            const pushStrength = 8 * (1 - Math.abs(normalized)) * (1 + 0.2 * Math.max(0, 3 - distance));

            if (slot < hoveredSlot) {
              targetX -= pushStrength * mult;
              targetRot -= 3 / (distance + 1);
            } else {
              targetX += pushStrength * mult;
              targetRot += 3 / (distance + 1);
            }

            if (slot === visibleEntries.length - 1 && hoveredSlot < centerSlot) targetY -= 1 * hM;
            if (slot === 0 && hoveredSlot > centerSlot) targetY -= 1 * hM;
          }
        } else {
          delay = Math.abs(slot - centerSlot) * 0.02;
        }

        gsap.to(el, {
          x: `${targetX}rem`, y: `${targetY}rem`, rotation: targetRot, scale: targetScale,
          duration: 0.5, delay, ease: "elastic.out(1,.75)", overwrite: "auto",
        });
        gsap.set(el, { zIndex: base.zIndex });
      });
    };

    const enterHandlers = visibleEntries.map(({ el, slot }) => {
      const handler = () => {
        if (isAnimating.current) return;
        if (leaveTimer) { clearTimeout(leaveTimer); leaveTimer = null; }
        if (activeSlot !== slot) { activeSlot = slot; updateHoverLayout(slot); }
      };
      el.addEventListener("mouseenter", handler);
      return { el, handler };
    });

    const onMouseLeave = () => {
      if (isAnimating.current) return;
      if (leaveTimer) clearTimeout(leaveTimer);
      leaveTimer = setTimeout(() => { activeSlot = null; updateHoverLayout(null); }, 50);
    };
    container.addEventListener("mouseleave", onMouseLeave);

    const onResize = () => { if (!isAnimating.current) updateHoverLayout(activeSlot); };
    window.addEventListener("resize", onResize);

    return () => {
      enterHandlers.forEach(({ el, handler }) => el.removeEventListener("mouseenter", handler));
      container.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", onResize);
      if (leaveTimer) clearTimeout(leaveTimer);
    };
  }, [centerIndex, totalCards, getVisibleMap, needsPagination]);

  if (!totalCards) return null;

  return (
    <section className={`flex flex-col items-center w-full py-4 lg:py-8 px-4 md:px-8 relative z-20 ${className}`}>
      {/* Dynamic Scoped Fan Layout Styles */}
      <style>{`
        .fan-layout {
          height: 22rem;
        }
        @media (min-width: 480px) {
          .fan-layout { height: 26rem; }
        }
        @media (min-width: 640px) {
          .fan-layout { height: 28rem; }
        }
        @media (min-width: 768px) {
          .fan-layout { height: 34rem; }
        }
        @media (min-width: 1024px) {
          .fan-layout { height: 38rem; }
        }

        .fan-card {
          position: absolute;
          width: 12.5rem;
          height: 17.5rem;
          border-radius: 1.25rem;
          overflow: hidden;
          box-shadow: 0 16px 36px -8px rgba(30, 20, 60, 0.22), 0 0 0 1px rgba(104, 83, 165, 0.16);
          background: #ffffff;
          transform-origin: center center;
          user-select: none;
          cursor: pointer;
          will-change: transform, opacity;
        }
        @media (min-width: 480px) {
          .fan-card {
            width: 14rem;
            height: 19.5rem;
          }
        }
        @media (min-width: 640px) {
          .fan-card {
            width: 15.5rem;
            height: 22rem;
            border-radius: 1.5rem;
          }
        }
        @media (min-width: 768px) {
          .fan-card {
            width: 17.5rem;
            height: 25rem;
          }
        }
        @media (min-width: 1024px) {
          .fan-card {
            width: 19.5rem;
            height: 28rem;
            border-radius: 1.75rem;
          }
        }
      `}</style>

      <div className="flex items-center justify-center w-full max-w-[90rem]">
        <div ref={containerRef} className="fan-layout flex relative justify-center items-center w-full max-w-[80rem]">
          {cards.map((card, index) => {
            const image = (
              <div className="relative w-full h-full overflow-hidden group">
                <img
                  src={card.imgUrl}
                  loading="lazy"
                  alt={card.alt || card.title || `Card ${index}`}
                  className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Optional Editorial Principle Overlay */}
                {(card.title || card.description || card.category || card.badge) && (
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#111014]/95 via-[#111014]/40 to-transparent p-5 sm:p-6 flex flex-col justify-between text-white">
                    <div className="flex items-center justify-between w-full">
                      {card.badge && (
                        <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase text-white shadow-xs">
                          {card.badge}
                        </span>
                      )}
                      {card.category && (
                        <span className="ml-auto font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-violet-300">
                          {card.category}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      {card.title && (
                        <h3 className="font-sans font-extrabold text-base sm:text-lg lg:text-xl text-white leading-tight drop-shadow-sm">
                          {card.title}
                        </h3>
                      )}
                      {card.description && (
                        <p className="font-dm text-xs sm:text-[13px] text-slate-200 line-clamp-3 leading-relaxed">
                          {card.description}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );

            return card.linkUrl ? (
              <a
                key={index}
                href={card.linkUrl}
                target={card.linkUrl.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="fan-card block cursor-pointer"
              >
                {image}
              </a>
            ) : (
              <div key={index} className="fan-card">
                {image}
              </div>
            );
          })}
        </div>
      </div>

      {needsPagination && (
        <div className="flex items-center justify-center gap-4 mt-6 md:mt-8 z-30">
          <button className={`${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`} onClick={() => cycle("left")} aria-label="Previous">
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <div className="flex items-center gap-2">
            {cards.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === centerIndex ? "bg-violet-primary dark:bg-white scale-[1.3]" : "bg-[#6853A5]/25"
                }`}
              />
            ))}
          </div>
          <button className={`${ARROW_CLASSES} w-10 h-10 md:w-12 md:h-12`} onClick={() => cycle("right")} aria-label="Next">
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      )}
    </section>
  );
}
