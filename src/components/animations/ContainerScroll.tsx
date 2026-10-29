import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface ContainerScrollProps {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  tickerComponent?: React.ReactNode;
}

export const ContainerScroll: React.FC<ContainerScrollProps> = ({
  titleComponent,
  children,
  tickerComponent,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  const scaleDimensions = () => {
    return isMobile ? [0.95, 0.9] : [1.02, 0.94];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, 12]);
  const scale = useTransform(scrollYProgress, [0, 1], prefersReduced ? [1, 1] : scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -60]);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center p-2 sm:p-4 md:p-8"
      style={{ perspective: '1000px' }}
    >
      <div className="w-full relative z-10">
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
        {tickerComponent && (
          <div className="w-full relative z-20 mt-4">
            {tickerComponent}
          </div>
        )}
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-left w-full mb-4 sm:mb-6"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003',
      }}
      className="max-w-[1380px] -mt-2 mx-auto w-full rounded-[2rem] md:rounded-[2.5rem] bg-gradient-to-b from-[#F5F2FD] via-[#ECE7FA] to-[#F2EEFC] border border-white/95 overflow-hidden transition-all duration-300"
    >
      <div className="w-full h-full bg-transparent">
        {children}
      </div>
    </motion.div>
  );
};