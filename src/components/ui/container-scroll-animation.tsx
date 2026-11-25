"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export interface ContainerScrollAnimationProps {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const ContainerScrollAnimation: React.FC<ContainerScrollAnimationProps> = ({
  titleComponent,
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.8, 0.95] : [1.02, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.45], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.45], [0, -40]);

  return (
    <div
      ref={containerRef}
      className={`h-[70rem] sm:h-[80rem] flex items-center justify-center relative p-2 sm:p-10 ${className}`}
    >
      <div
        className="py-10 sm:py-20 w-full relative"
        style={{
          perspective: "1200px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: string | React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center mb-8 sm:mb-14 px-4"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
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
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-6xl -mt-6 sm:-mt-10 mx-auto h-[32rem] sm:h-[38rem] lg:h-[42rem] w-full border-4 border-[#6C6C7D]/30 p-2 sm:p-5 bg-[#171622] rounded-[30px] shadow-2xl relative overflow-hidden"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-[#0F0E17] border border-white/10 relative">
        {children}
      </div>
    </motion.div>
  );
};

