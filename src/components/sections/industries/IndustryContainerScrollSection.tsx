"use client";

import React from "react";
import { ContainerScrollAnimation } from "../../ui/container-scroll-animation";
import { Sparkles, Activity, ShieldCheck, Cpu, AlertCircle, Wrench, CheckCircle2 } from "lucide-react";

export const IndustryContainerScrollSection: React.FC = () => {
  return (
    <section id="manufacturing-container-scroll" className="bg-[#09080F] text-white relative overflow-hidden py-10 sm:py-16">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-violet-600/15 rounded-full blur-[160px] pointer-events-none" />

      <ContainerScrollAnimation
        titleComponent={
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-violet-300">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span className="font-mono uppercase text-[11px] tracking-wider">
                5. SMART MANUFACTURING & INDUSTRIAL ROBOTICS
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-extrabold text-white tracking-tight leading-[1.08]">
              Robotic Assembly & Predictive Acoustic Diagnostics
            </h2>

            <p className="font-dm text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Sub-millimeter micro-fracture visual analysis coupled with harmonic acoustic vibration monitoring across
              synchronized robotic lines. Scroll to bring the plant telemetry console into full frontal view.
            </p>
          </div>
        }
      >
        {/* Inside 3D Container: Full Plant Telemetry Dashboard */}
        <div className="w-full h-full flex flex-col justify-between relative p-4 sm:p-6 lg:p-8">
          {/* Background Assembly Line Artwork */}
          <img
            src="/images/industry_solutions/Futuristic Lavender Robotic Assembly Line.png"
            alt="Robotic Assembly Line Telemetry"
            className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-luminosity filter contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E17] via-[#0F0E17]/60 to-[#0F0E17]/40 pointer-events-none" />

          {/* Top Plant Bar */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                FACILITY 08 · LINE B7: CELL 12-A
              </span>
              <span className="hidden sm:inline font-mono text-[11px] text-slate-400">
                SCADA PROTOCOL: OPC-UA INDUSTRIAL BUS
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-violet-500/20 border border-violet-400/30 text-violet-300 font-mono text-xs font-medium">
                PLC WRITEBACK ACTIVE
              </span>
              <span className="px-2.5 py-1 rounded bg-white/10 border border-white/15 text-slate-300 font-mono text-xs font-medium">
                INT8 INFERENCE: 9.4MS
              </span>
            </div>
          </div>

          {/* Middle Viewport: Micro-Fracture Target Viewfinder & Audio Waveform */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-4 my-auto py-4">
            {/* Viewfinder Target */}
            <div className="md:col-span-7 bg-black/60 backdrop-blur-md rounded-2xl border border-white/15 p-5 relative overflow-hidden">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3 border-b border-white/10 pb-2">
                <span className="flex items-center gap-2 text-white">
                  <Cpu className="w-4 h-4 text-violet-400" />
                  OPTICAL MICRO-FRACTURE DEFECT SCAN
                </span>
                <span className="text-emerald-400 font-semibold">CONFIDENCE: 99.4%</span>
              </div>

              {/* Reticle Viewport */}
              <div className="relative h-44 sm:h-52 rounded-xl bg-slate-900/80 border border-violet-500/30 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(118,80,232,0.25)_0%,transparent_70%)]" />
                {/* Crosshairs */}
                <div className="absolute inset-x-0 top-1/2 h-px bg-violet-400/40" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-violet-400/40" />
                {/* Target Bounding Box */}
                <div className="w-24 h-24 border-2 border-emerald-400 rounded-lg relative flex items-center justify-center animate-pulse">
                  <div className="absolute -top-3 -left-1 font-mono text-[9px] bg-emerald-500 text-black px-1.5 py-0.5 rounded font-bold">
                    DEFECT: 0.00mm
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
                <div className="absolute bottom-2 left-3 font-mono text-[10px] text-slate-400">
                  X: 412.88mm · Y: 108.41mm · Z: 89.20mm
                </div>
                <div className="absolute bottom-2 right-3 font-mono text-[10px] text-emerald-400">
                  VERDICT: PASS (ZERO STRESS CRACKS)
                </div>
              </div>
            </div>

            {/* Acoustic Harmonic Diagnostics */}
            <div className="md:col-span-5 bg-black/60 backdrop-blur-md rounded-2xl border border-white/15 p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3 border-b border-white/10 pb-2">
                  <span className="flex items-center gap-2 text-white">
                    <Activity className="w-4 h-4 text-violet-400" />
                    HARMONIC ACOUSTIC VIBRATION
                  </span>
                  <span className="text-violet-300 font-semibold">24.5 kHz</span>
                </div>

                <p className="font-dm text-xs text-slate-300 leading-relaxed mb-4">
                  Piezoelectric contact sensors analyze high-frequency mill acoustics, predicting spindle bearing fatigue 140
                  hours before thermal seizure.
                </p>

                {/* Waveform Bars */}
                <div className="flex items-end gap-1.5 h-16 w-full pt-2">
                  {[45, 62, 38, 70, 85, 40, 55, 92, 60, 48, 75, 52, 65, 88, 42, 68, 50, 78, 62, 45].map((val, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-gradient-to-t from-violet-600 to-indigo-400 rounded-t"
                      style={{ height: `${val}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-slate-400">
                <span>BEARING HEALTH INDEX</span>
                <span className="text-emerald-400 font-bold">NORMAL (0.02mm/s RMS)</span>
              </div>
            </div>
          </div>

          {/* Bottom Telemetry Metrics Strip */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/15">
            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="font-mono text-xl sm:text-2xl font-bold text-white">99.4%</div>
              <div className="font-dm text-[11px] text-slate-400">Defect Detection Yield</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="font-mono text-xl sm:text-2xl font-bold text-emerald-400">-85%</div>
              <div className="font-dm text-[11px] text-slate-400">Unplanned Downtime</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="font-mono text-xl sm:text-2xl font-bold text-violet-300">&lt;12ms</div>
              <div className="font-dm text-[11px] text-slate-400">Robotic Feedback Loop</div>
            </div>
            <div className="bg-white/5 rounded-xl p-3 border border-white/10">
              <div className="font-mono text-xl sm:text-2xl font-bold text-white">0 ppm</div>
              <div className="font-dm text-[11px] text-slate-400">Critical Escapes to QA</div>
            </div>
          </div>
        </div>
      </ContainerScrollAnimation>
    </section>
  );
};

export default IndustryContainerScrollSection;
