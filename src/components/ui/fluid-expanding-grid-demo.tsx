"use client";

import React from "react";
import FluidExpandingGrid from "./fluid-expanding-grid";

export default function FluidExpandingGridDemo() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-background p-4 sm:p-8">
      <FluidExpandingGrid />
    </div>
  );
}
