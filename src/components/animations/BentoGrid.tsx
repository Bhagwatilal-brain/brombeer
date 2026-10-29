import React from 'react';
import { cn } from '../../lib/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  cta,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  cta?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-300 shadow-input p-6 bg-white/80 border border-white/90 justify-between flex flex-col space-y-4 hover:-translate-y-1',
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-1 transition duration-200 space-y-2">
        <div className="flex items-center gap-2">
          {icon}
          <div className="font-sans font-bold text-text-primary text-xl tracking-tight">
            {title}
          </div>
        </div>
        <div className="font-normal text-text-secondary text-xs sm:text-sm leading-relaxed">
          {description}
        </div>
        {cta && <div className="pt-2">{cta}</div>}
      </div>
    </div>
  );
};