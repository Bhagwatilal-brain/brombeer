"use client";

import React, { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  color: string;
  eyebrow?: string;
  description?: string;
  badge?: string;
}

const ITEMS: GalleryItem[] = [
  {
    id: "grassy",
    title: "Highlands",
    subtitle: "Golden fields under the giant",
    image:
      "https://cdn.21st.dev/assets/mirror/13/13c86699ebebb1beb3781e8866bc535babedcc89744b016b34f8f6944297b31c.jpg",
    color: "#84cc16",
  },
  {
    id: "misty",
    title: "Crimson",
    subtitle: "A scarlet flame in the mountains",
    image:
      "https://cdn.21st.dev/assets/mirror/16/16a7e1c70ad0b9074dd81605ae4f32bf49c7b0e9909bb04d9a99c7a4247ea8eb.jpg",
    color: "#10b981",
  },
  {
    id: "desert",
    title: "Deep Sea",
    subtitle: "Floating gracefully in the abyss",
    image:
      "https://cdn.21st.dev/assets/mirror/74/74aa829156f84dc1715500f43a53f2ee3b53d57ccf411dd4fd01a548fe88dd4c.jpg",
    color: "#0369a1",
  },
];

export interface FluidExpandingGridProps {
  items?: GalleryItem[];
  className?: string;
  wrapperClassName?: string;
  gridClassName?: string;
  id?: string;
}

export function FluidExpandingGrid({
  items = ITEMS,
  className,
  wrapperClassName,
  gridClassName,
  id = "fluid-gallery",
}: FluidExpandingGridProps) {
  const [layout, setLayout] = useState(() => {
    const ids = items.map((item) => item.id);
    return {
      row1: ids.slice(0, 2),
      row2: ids.slice(2, Math.min(items.length, 4)),
    };
  });

  const handleExpand = (itemId: string) => {
    const inRow1 = layout.row1.includes(itemId);
    const inRow2 = layout.row2.includes(itemId);

    if (
      (inRow1 && layout.row1.length === 1) ||
      (inRow2 && layout.row2.length === 1)
    )
      return;

    if (inRow1) {
      const neighbor = layout.row1.find((i) => i !== itemId)!;
      setLayout({
        row1: [itemId],
        row2: [neighbor, ...layout.row2.filter((i) => i !== neighbor)].slice(
          0,
          2
        ),
      });
    } else {
      const neighbor = layout.row2.find((i) => i !== itemId)!;
      setLayout({
        row1: [neighbor, ...layout.row1.filter((i) => i !== neighbor)].slice(
          0,
          2
        ),
        row2: [itemId],
      });
    }
  };

  return (
    <div
      className={cn(
        "w-full h-full flex items-center justify-center overflow-hidden py-6 sm:py-8 not-prose",
        className
      )}
    >
      <div className={cn("w-full max-w-5xl px-4 sm:px-6", wrapperClassName)}>
        <LayoutGroup id={id}>
          <motion.div
            layout
            className={cn(
              "grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 w-full h-[400px] sm:h-[520px] lg:h-[580px]",
              gridClassName
            )}
          >
            {items.map((item) => {
              const isRow1 = layout.row1.includes(item.id);
              const rowArr = isRow1 ? layout.row1 : layout.row2;
              const isSelected = rowArr.length === 1 && rowArr[0] === item.id;

              const gridRow = isRow1 ? 1 : 2;
              let gridColumn = "";
              if (isSelected) {
                gridColumn = "1 / span 2";
              } else {
                if (isRow1) {
                  gridColumn = layout.row1.indexOf(item.id) === 0 ? "1" : "2";
                } else {
                  gridColumn = layout.row2.indexOf(item.id) === 0 ? "1" : "2";
                }
              }

              return (
                <motion.div
                  key={item.id}
                  layoutId={`${id}-${item.id}`}
                  onClick={() => handleExpand(item.id)}
                  style={{ gridRow, gridColumn } as any}
                  className={cn(
                    "relative cursor-pointer group w-full h-full select-none",
                    isSelected ? "z-30" : "z-10"
                  )}
                  transition={{
                    layout: {
                      type: "spring",
                      stiffness: 120,
                      damping: 24,
                    },
                  }}
                >
                  <motion.div
                    layoutId={`${id}-${item.id}-mask-wrapper`}
                    className="absolute inset-0 overflow-hidden bg-zinc-900 shadow-lg"
                    style={{ borderRadius: 28 }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105",
                        isSelected
                          ? "object-[center_35%]"
                          : "object-[center_50%]"
                      )}
                    />
                    <motion.div
                      layoutId={`${id}-${item.id}-mask`}
                      className={cn(
                        "absolute inset-0 transition-colors duration-500",
                        isSelected ? "bg-black/10" : "bg-black/25 group-hover:bg-black/15"
                      )}
                    />
                  </motion.div>

                  <motion.div
                    layout="position"
                    className="absolute inset-0 p-5 sm:p-7 md:p-8 flex flex-col justify-end text-white z-10 select-none"
                  >
                    <motion.div layout="position" className="overflow-hidden">
                      {item.eyebrow && (
                        <motion.div
                          layout="position"
                          className="inline-flex items-center gap-1.5 px-3 py-1 mb-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-[#E2D9FC] text-[10px] sm:text-[11px] font-mono uppercase tracking-wider font-semibold shadow-xs"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7650E8] animate-pulse" />
                          <span>{item.eyebrow}</span>
                        </motion.div>
                      )}

                      <motion.h3
                        layout="position"
                        className={cn(
                          "font-sans font-extrabold tracking-tight text-white drop-shadow-md",
                          isSelected
                            ? "text-xl sm:text-2xl md:text-3xl mb-1.5"
                            : "text-lg sm:text-xl md:text-2xl mb-1 line-clamp-1"
                        )}
                      >
                        {item.title}
                      </motion.h3>

                      <motion.p
                        layout="position"
                        className={cn(
                          "text-[#E5DFFA] font-dm leading-relaxed drop-shadow-sm",
                          isSelected
                            ? "text-xs sm:text-sm md:text-[15px] font-medium"
                            : "text-xs sm:text-sm font-normal line-clamp-1"
                        )}
                      >
                        {item.subtitle}
                      </motion.p>

                      {isSelected && item.description && (
                        <motion.p
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.12, duration: 0.35 }}
                          className="mt-2.5 text-xs sm:text-sm text-white/90 max-w-3xl font-dm leading-relaxed hidden sm:block border-t border-white/15 pt-2.5"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    layoutId={`${id}-${item.id}-overlay`}
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      borderRadius: 28,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 45%, transparent 75%)",
                    }}
                  />
                  <motion.div
                    layoutId={`${id}-${item.id}-border`}
                    className="absolute inset-0 border border-white/15 group-hover:border-[#7650E8]/60 transition-colors duration-300 pointer-events-none shadow-inner"
                    style={{ borderRadius: 28 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </LayoutGroup>
      </div>
    </div>
  );
}

export default FluidExpandingGrid;
