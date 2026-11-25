// Built using Hyperiux Vault: https://vault.hyperiux.com
"use client";

import {
  type CSSProperties,
  useLayoutEffect,
  useRef,
  useSyncExternalStore,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* Inline stand-in for @gsap/react's useGSAP. Mirrors its default
   `revertOnUpdate: false`: one gsap.context lives for the component's
   lifetime, the callback is re-added when dependencies change, and the
   context is reverted only on unmount. A callback may return its own
   cleanup, which runs before the next re-add and on unmount. */
function useGSAP(
  callback: () => void | (() => void),
  options?: {
    dependencies?: unknown[];
    scope?: { current: Element | null } | Element | null;
  }
) {
  const deps = options?.dependencies ?? [];
  const scope = options?.scope;
  const ctxRef = useRef<gsap.Context | null>(null);
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  useLayoutEffect(() => {
    const el =
      scope && typeof scope === "object" && "current" in scope
        ? scope.current
        : (scope as Element | null);
    ctxRef.current = gsap.context(() => {}, el ?? undefined);
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = undefined;
      ctxRef.current?.revert();
      ctxRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (!ctxRef.current) return;
    cleanupRef.current?.();
    const ret = ctxRef.current.add(callback);
    cleanupRef.current = typeof ret === "function" ? ret : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

const monthOrder = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
} as const;

type Month = keyof typeof monthOrder | string;

export type JourneyItem = {
  id: string;
  year: string;
  month?: Month;
  content: string;
};

export type TimelineProps = {
  title?: string;
  periodLabel?: string;
  textColor?: string;
  mutedTextColor?: string;
  activeColor?: string;
  backgroundColor?: string;
  imageUrl?: string;
  imageAlt?: string;
  duration?: number;
  scrollDuration?: number;
  topJourneyData?: JourneyItem[];
  bottomJourneyData?: JourneyItem[];
};

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const mediaQueryList = window.matchMedia(REDUCED_MOTION_QUERY);
  mediaQueryList.addEventListener("change", callback);

  return () => mediaQueryList.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === "undefined") return false;

  return window.matchMedia?.(REDUCED_MOTION_QUERY)?.matches ?? false;
}

function getServerReducedMotionSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot,
  );
}

export const defaultTopJourneyData: JourneyItem[] = [
  {
    id: "2020-march",
    year: "2020",
    month: "March",
    content: "Signal research turns scattered notes into a clear product thesis",
  },
  {
    id: "2021-july",
    year: "2021",
    month: "July",
    content: "Founding release ships with the first live customer journeys",
  },
  {
    id: "2023-april",
    year: "2023",
    month: "April",
    content: "Automation layer connects insight, publishing, and sales motion",
  },
  {
    id: "2026-may",
    year: "2026",
    month: "May",
    content: "New markets open with localized launches and faster onboarding",
  },
];

export const defaultBottomJourneyData: JourneyItem[] = [
  {
    id: "2020-november",
    year: "2020",
    month: "November",
    content: "Prototype sprint validates the experience with real operators",
  },
  {
    id: "2022-october",
    year: "2022",
    month: "October",
    content: "Community feedback reshapes the roadmap into sharper releases",
  },
  {
    id: "2025-september",
    year: "2025",
    month: "September",
    content: "Companion mobile workflows make the timeline travel-ready",
  },
];

export default function Timeline({
  title = "Product Storyline",
  periodLabel = "2020-2026",
  textColor = "var(--color-foreground, #000000)",
  mutedTextColor = "var(--color-muted-foreground, #3f3f46)",
  activeColor = "#ff5f00",
  backgroundColor = "var(--color-background, #ffffff)",
  imageUrl = "https://cdn.21st.dev/assets/mirror/b0/b0c41784074f76ac5fb6b447da87780c901135841317a096241371f24bc13ddd.jpg",
  imageAlt = "Modern office workspace",
  duration,
  scrollDuration = 1.2,
  topJourneyData = defaultTopJourneyData,
  bottomJourneyData = defaultBottomJourneyData,
}: TimelineProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const wholeSliderRef = useRef<HTMLDivElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  const animationDuration = duration ?? scrollDuration;
  const normalizedDuration = Math.max(0.2, animationDuration);

  const sectionStyle: CSSProperties = {
    color: textColor,
    backgroundColor,
  };
  const activeStyle: CSSProperties = {
    backgroundColor: activeColor,
  };
  const mutedTextStyle: CSSProperties = {
    color: mutedTextColor,
  };

  const allJourneyItems = [
    ...topJourneyData,
    ...bottomJourneyData,
  ].sort((a, b) => {
    const numA = parseInt(a.year, 10);
    const numB = parseInt(b.year, 10);
    if (!isNaN(numA) && !isNaN(numB) && numA !== numB) {
      return numA - numB;
    }
    const orderA = a.month ? ((monthOrder as Record<string, number>)[a.month] ?? 0) : 0;
    const orderB = b.month ? ((monthOrder as Record<string, number>)[b.month] ?? 0) : 0;
    if (orderA !== orderB) {
      return orderA - orderB;
    }
    return a.id.localeCompare(b.id);
  });

  useGSAP(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const wholeSlider = wholeSliderRef.current;

    if (!section || !stage || !wholeSlider) return;

    const isMobile = window.innerWidth < 640;
    const slidePercent = isMobile ? -68 : -62;
    const lineWidth = isMobile ? "75%" : "98%";

    // Set initial states for items
    allJourneyItems.forEach((item) => {
      const isTop = topJourneyData.some((t) => t.id === item.id);
      gsap.set(`.jl-${item.id}`, {
        scaleY: reducedMotion ? 1 : 0,
        transformOrigin: isTop ? "bottom bottom" : "top top",
      });
      gsap.set(`.jd-${item.id}`, {
        scale: reducedMotion ? 1 : 0,
      });
      gsap.set(`.title-${item.id}`, {
        opacity: reducedMotion ? 1 : 0,
        y: reducedMotion ? 0 : (isTop ? -16 : 16),
      });
      gsap.set(`.description-${item.id}`, {
        opacity: reducedMotion ? 1 : 0,
        y: reducedMotion ? 0 : (isTop ? -12 : 12),
      });
    });

    if (reducedMotion) {
      gsap.set(".journey-line", { width: lineWidth });
      return;
    }

    gsap.set(".journey-line", { width: "0%" });

    const totalScroll = window.innerWidth * (isMobile ? 2.8 : 1.8);

    // Native GSAP ScrollTrigger with robust JavaScript pinning
    const masterTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: stage,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // 1. Horizontal slider gliding
    masterTl.to(
      wholeSlider,
      {
        xPercent: slidePercent,
        ease: "none",
        duration: 1,
      },
      0
    );

    // 2. Journey line drawing across
    masterTl.to(
      ".journey-line",
      {
        width: lineWidth,
        ease: "none",
        duration: 0.95,
      },
      0.02
    );

    // 3. Sequential Milestone reveals as each item crosses into view
    const n = allJourneyItems.length;
    allJourneyItems.forEach((item, index) => {
      const startTime = 0.08 + (index / n) * 0.72;
      const isTop = topJourneyData.some((t) => t.id === item.id);

      masterTl.to(
        `.jl-${item.id}`,
        {
          scaleY: 1,
          duration: 0.12,
          ease: "power2.out",
        },
        startTime
      );

      masterTl.to(
        `.jd-${item.id}`,
        {
          scale: 1,
          duration: 0.1,
          ease: "back.out(2)",
        },
        startTime
      );

      masterTl.to(
        `.title-${item.id}`,
        {
          opacity: 1,
          y: 0,
          duration: 0.14,
          ease: "power2.out",
        },
        startTime + 0.02
      );

      masterTl.to(
        `.description-${item.id}`,
        {
          opacity: 1,
          y: 0,
          duration: 0.14,
          ease: "power2.out",
        },
        startTime + 0.04
      );
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, { dependencies: [reducedMotion, normalizedDuration, topJourneyData, bottomJourneyData], scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="w-full relative"
      style={sectionStyle}
    >
      <div
        ref={stageRef}
        className="h-screen w-full relative overflow-hidden flex flex-col justify-center pt-[84px] sm:pt-[96px] pb-6"
      >
        <div
          ref={wholeSliderRef}
          className="mr-[2vw] flex h-[34vw] min-h-[380px] max-h-[560px] w-[240vw] items-center gap-[5vw] px-[5vw] max-[600px]:h-[78vh] max-[600px]:w-[800vw] max-[600px]:px-[7vw]"
        >
          {/* Left Visual Illustration Tile */}
          <div className="h-full w-[28vw] min-w-[260px] max-w-[420px] overflow-hidden rounded-2xl sm:rounded-3xl border border-[#6853A5]/18 shadow-lg max-[600px]:h-[65vw] max-[600px]:w-[85vw] max-[600px]:rounded-[5vw] bg-white flex-shrink-0">
            <img
              src={imageUrl}
              alt={imageAlt}
              draggable={false}
              className="h-full w-full object-cover select-none"
            />
          </div>

          {/* Center & Right Flow Canvas with Horizontal Journey Stem */}
          <div className="relative h-full w-full flex-1">
            {/* Center Timeline Horizontal Bar */}
            <div className="w-full absolute left-0 top-[49%] -translate-y-1/2 flex items-center h-fit z-10 pointer-events-none">
              <div
                className="h-[.8vw] min-h-[10px] min-w-[10px] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.8vw] rounded-full shadow-sm"
                style={activeStyle}
              ></div>
              <div
                className="h-[2px] w-[0%] rounded-full journey-line shadow-xs"
                style={activeStyle}
              ></div>
              <div
                className="h-[.8vw] min-h-[10px] min-w-[10px] max-[600px]:h-[2vw] max-[600px]:w-[2vw] w-[.8vw] rounded-full shadow-sm"
                style={activeStyle}
              ></div>
            </div>

            {/* TOP HALF: Title on Left + Top Journey Items */}
            <div className="flex h-1/2 w-full items-center justify-start gap-[1vw]">
              <div className="h-full w-[22%] min-w-[200px] pt-[2vw] max-[600px]:h-fit max-[600px]:pt-[5vw] flex-shrink-0">
                <h2 className="w-[90%] font-sans font-extrabold text-[2.4vw] leading-[1.04] text-[#111014] tracking-tight max-[600px]:text-[7.5vw]">
                  {title}
                </h2>
              </div>

              <div className="w-full flex h-full gap-x-[15vw] max-[600px]:gap-x-[40vw]">
                {topJourneyData.map((item) => (
                  <div
                    key={`top-${item.id}`}
                    className="relative h-full w-[28vw] min-w-[240px] px-[2.5vw] max-[600px]:flex max-[600px]:w-[70vw] max-[600px]:flex-col max-[600px]:px-[7vw]"
                  >
                    {/* Vertical connecting line & dot */}
                    <div className="w-full absolute left-0 bottom-0 top-0 h-full pointer-events-none">
                      <div
                        className={`size-[1vw] min-w-[12px] min-h-[12px] max-[600px]:size-[2.5vw] -translate-x-1/2 relative aspect-square rounded-full shadow-sm jd-${item.id}`}
                        style={activeStyle}
                      ></div>
                      <div
                        className={`h-[92%] w-[2px] origin-bottom rounded-full jl-${item.id}`}
                        style={activeStyle}
                      ></div>
                    </div>

                    {/* Content copy */}
                    <div className="mt-[-0.8vw] space-y-[0.6vw] max-[600px]:mt-[-2vw]">
                      <h4
                        className={`title-${item.id} font-sans font-bold text-[1.9vw] text-[#111014] leading-[1.1] max-[600px]:text-[5.5vw] tracking-tight`}
                      >
                        {item.month ? item.month : ""}
                      </h4>
                      <p
                        className={`description-${item.id} w-[94%] font-dm text-[1.15vw] text-slate-600 leading-[1.3] max-[600px]:w-[90%] max-[600px]:text-[4.2vw]`}
                        style={mutedTextStyle}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BOTTOM HALF: Subtitle on Left + Bottom Journey Items */}
            <div className="h-1/2 flex items-center justify-start w-full">
              <div className="w-[32%] min-w-[200px] pt-[2vw] max-[600px]:pt-[5vw] max-[600px]:w-[30%] h-full flex-shrink-0">
                <p
                  className="font-mono text-[1.2vw] tracking-wider uppercase font-semibold leading-relaxed max-[600px]:text-[3.8vw] text-violet-primary"
                  style={mutedTextStyle}
                >
                  {periodLabel}
                </p>
              </div>

              <div className="w-full flex h-full gap-x-[18vw] ml-[5vw] max-[600px]:gap-x-[40vw] max-[600px]:ml-[7vw]">
                {bottomJourneyData.map((item) => (
                  <div
                    key={`bottom-${item.id}`}
                    className="relative h-full w-[26vw] min-w-[240px] px-[2.5vw] max-[600px]:w-[70vw] max-[600px]:px-[7vw]"
                  >
                    {/* Vertical connecting line & dot */}
                    <div className="w-full absolute left-0 bottom-[-1%] h-full pointer-events-none">
                      <div
                        className={`h-[92%] origin-top w-[2px] rounded-full max-[600px]:h-full jl-${item.id}`}
                        style={activeStyle}
                      ></div>
                      <div
                        className={`size-[1vw] min-w-[12px] min-h-[12px] max-[600px]:size-[2.5vw] -translate-x-1/2 relative w-auto aspect-square rounded-full shadow-sm jd-${item.id}`}
                        style={activeStyle}
                      ></div>
                    </div>

                    {/* Content copy */}
                    <div className="flex h-full w-full flex-col justify-end space-y-[0.6vw] pb-[1vw]">
                      <h4
                        className={`title-${item.id} font-sans font-bold text-[1.9vw] text-[#111014] leading-[1.1] max-[600px]:text-[5.5vw] tracking-tight`}
                      >
                        {item.month ? item.month : ""}
                      </h4>
                      <p
                        className={`description-${item.id} w-[94%] font-dm text-[1.15vw] text-slate-600 leading-[1.3] max-[600px]:w-[90%] max-[600px]:text-[4.2vw]`}
                        style={mutedTextStyle}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
