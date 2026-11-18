"use client";

import React, { useState } from "react";
import { motion, type Transition } from "framer-motion";

export type TextRollProps = {
  children: string;
  duration?: number;
  staggerDelay?: number;
  className?: string;
  transition?: Transition;
  onAnimationComplete?: () => void;
  isHovered?: boolean;
};

export function TextRoll({
  children,
  duration = 0.28,
  staggerDelay = 0.016,
  className = "",
  transition = { ease: [0.22, 1, 0.36, 1] },
  onAnimationComplete,
  isHovered,
}: TextRollProps) {
  const [internalHover, setInternalHover] = useState(false);
  const activeHover = isHovered !== undefined ? isHovered : internalHover;

  if (typeof children !== "string") {
    return <span className={className}>{children}</span>;
  }

  // Split into words so spaces between words are natural and words never break awkwardly
  const words = children.split(" ");
  let globalCharIndex = 0;
  const totalLength = children.length;

  return (
    <span
      className={`inline-flex items-center select-none leading-none ${className}`}
      onMouseEnter={() => setInternalHover(true)}
      onMouseLeave={() => setInternalHover(false)}
    >
      {words.map((word, wordIdx) => {
        const letters = word.split("");
        const wordStartCharIndex = globalCharIndex;
        globalCharIndex += letters.length + 1; // +1 for the space

        return (
          <React.Fragment key={wordIdx}>
            {wordIdx > 0 && (
              <span className="inline-block select-none" aria-hidden="true">
                &nbsp;
              </span>
            )}
            <span className="inline-flex items-center whitespace-nowrap leading-none">
              {letters.map((letter, letterIdx) => {
                const charIndex = wordStartCharIndex + letterIdx;
                const delay = activeHover
                  ? charIndex * staggerDelay
                  : (totalLength - 1 - charIndex) * (staggerDelay * 0.6);

                return (
                  <span
                    key={letterIdx}
                    aria-hidden="true"
                    className="relative inline-flex items-center justify-center overflow-hidden leading-none"
                    style={{
                      perspective: "500px",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Character 1: visible at rest, rolls up and out on hover */}
                    <motion.span
                      className="inline-block origin-top leading-none"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                      animate={
                        activeHover
                          ? { y: "-100%", rotateX: 90, opacity: 0 }
                          : { y: "0%", rotateX: 0, opacity: 1 }
                      }
                      transition={{
                        ...transition,
                        duration,
                        delay,
                      }}
                    >
                      {letter}
                    </motion.span>

                    {/* Character 2: hidden below at rest, rolls in from bottom on hover */}
                    <motion.span
                      className="absolute inset-0 inline-flex items-center justify-center origin-bottom leading-none"
                      style={{
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                      }}
                      animate={
                        activeHover
                          ? { y: "0%", rotateX: 0, opacity: 1 }
                          : { y: "100%", rotateX: -90, opacity: 0 }
                      }
                      transition={{
                        ...transition,
                        duration,
                        delay,
                      }}
                      onAnimationComplete={
                        charIndex === totalLength - 1
                          ? onAnimationComplete
                          : undefined
                      }
                    >
                      {letter}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          </React.Fragment>
        );
      })}
      <span className="sr-only">{children}</span>
    </span>
  );
}

export default TextRoll;
