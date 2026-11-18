import React from 'react';
import { motion } from 'framer-motion';

export interface SlidingNumberProps {
  value: string;
  trigger?: boolean;
  delay?: number;
  className?: string;
  digitClass?: string;
  suffixClass?: string;
  prefixClass?: string;
  replayKey?: number | string;
}

// 0..9 repeated twice (20 items) so every digit (including 0) performs a full dynamic slide
const REEL_DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

interface DigitReelProps {
  digit: number;
  index: number;
  trigger: boolean;
  baseDelay: number;
  digitClass: string;
  replayKey?: number | string;
}

const DigitReel: React.FC<DigitReelProps> = ({
  digit,
  index,
  trigger,
  baseDelay,
  digitClass,
  replayKey,
}) => {
  // Target index in the second half of the reel
  const targetIndex = 10 + digit;
  const targetPercent = (targetIndex / REEL_DIGITS.length) * 100;

  return (
    <span
      className="relative inline-flex flex-col overflow-hidden h-[1.14em] tabular-nums select-none align-baseline px-[0.01em]"
      style={{ verticalAlign: 'baseline' }}
      aria-hidden="true"
    >
      <motion.span
        key={replayKey}
        className="flex flex-col select-none"
        initial={{ y: '0%' }}
        animate={trigger ? { y: `-${targetPercent}%` } : { y: '0%' }}
        transition={{
          duration: 1.35 + index * 0.15,
          delay: baseDelay + index * 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {REEL_DIGITS.map((num, i) => (
          <span
            key={i}
            className={`h-[1.14em] flex items-center justify-center select-none ${digitClass}`}
          >
            {num}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

export const SlidingNumber: React.FC<SlidingNumberProps> = ({
  value,
  trigger = true,
  delay = 0,
  className = '',
  digitClass = 'text-[#111014]',
  suffixClass = 'text-violet-primary',
  prefixClass = 'text-violet-primary',
  replayKey = 0,
}) => {
  // Parse value into prefix, digits, and suffix (e.g., "95%" -> digits: [9, 5], suffix: "%")
  const match = value.match(/^([^0-9]*)([0-9]+)(.*)$/);

  if (!match) {
    // Non-numeric text
    return (
      <span
        className={`inline-flex items-center overflow-hidden select-none ${className}`}
        style={{ height: '1.14em', verticalAlign: 'baseline' }}
      >
        <motion.span
          key={replayKey}
          className={`inline-block ${digitClass}`}
          initial={{ y: '100%', opacity: 0, filter: 'blur(6px)' }}
          animate={
            trigger
              ? { y: '0%', opacity: 1, filter: 'blur(0px)' }
              : { y: '100%', opacity: 0, filter: 'blur(6px)' }
          }
          transition={{
            duration: 1.1,
            delay: delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {value}
        </motion.span>
        <span className="sr-only">{value}</span>
      </span>
    );
  }

  const prefix = match[1];
  const digits = match[2].split('').map((d) => parseInt(d, 10));
  const suffix = match[3];

  return (
    <span
      className={`inline-flex items-baseline select-none tracking-tight ${className}`}
      style={{ verticalAlign: 'baseline' }}
    >
      {prefix && (
        <motion.span
          key={`prefix-${replayKey}`}
          initial={{ opacity: 0, y: '30%' }}
          animate={trigger ? { opacity: 1, y: '0%' } : { opacity: 0, y: '30%' }}
          transition={{ duration: 0.6, delay }}
          className={`select-none ${prefixClass}`}
        >
          {prefix}
        </motion.span>
      )}

      {/* Sliding Digit Reels */}
      {digits.map((digit, idx) => (
        <DigitReel
          key={`digit-${idx}`}
          digit={digit}
          index={idx}
          trigger={trigger}
          baseDelay={delay}
          digitClass={digitClass}
          replayKey={replayKey}
        />
      ))}

      {/* Suffix (%, ms, +, X, etc.) */}
      {suffix && (
        <span
          className="relative inline-flex items-center overflow-hidden h-[1.14em] select-none"
          style={{ verticalAlign: 'baseline' }}
          aria-hidden="true"
        >
          <motion.span
            key={`suffix-${replayKey}`}
            initial={{ y: '100%', opacity: 0 }}
            animate={trigger ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + digits.length * 0.08 + 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`select-none pl-0.5 font-bold ${suffixClass}`}
          >
            {suffix}
          </motion.span>
        </span>
      )}

      <span className="sr-only">{value}</span>
    </span>
  );
};

export default SlidingNumber;
