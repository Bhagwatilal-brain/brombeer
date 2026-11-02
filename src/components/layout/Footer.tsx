import React, { useState } from 'react';
import HalftoneWordmarkFooter from '../ui/halftone-wordmark-footer';
import { ArrowRight, PhoneCall, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  const customHeader = (
    <div className="w-full relative text-white select-none">
      {/* Subtle architectural vertical beam slats in top portion */}
      <div
        className="absolute top-0 left-0 right-0 h-[480px] pointer-events-none opacity-20 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 72px,
              rgba(255, 255, 255, 0.05) 72px,
              rgba(255, 255, 255, 0.05) 144px
            )`,
            maskImage: 'linear-gradient(to bottom, black 25%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 25%, transparent 100%)',
          }}
        />
      </div>

      {/* 1. Top Row: "Get started today" + "BOOK A DEMO" */}
      <div className="relative z-10 pt-12 md:pt-16 pb-6 px-6 md:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-extrabold text-white tracking-tight leading-none">
          Get started today
        </h2>

        <a
          href="/contact"
          className="inline-flex items-center self-start sm:self-auto bg-[#83b500] hover:bg-[#74a100] text-white font-mono font-bold text-xs tracking-[0.16em] uppercase transition-colors shrink-0 shadow-lg shadow-[#83b500]/25"
        >
          <span className="px-5 md:px-6 py-3.5 md:py-4">BOOK A DEMO</span>
          <span className="border-l border-white/25 px-4 py-3.5 md:py-4 flex items-center justify-center">
            <ArrowRight className="w-4 h-4" />
          </span>
        </a>
      </div>

      {/* 2. Giant Wordmark Anchor Slot (Halftone Dots Canvas Renders Here!) */}
      <div className="hwf-wordmark-slot relative w-full pointer-events-none select-none my-2 md:my-4" />

      {/* 3. Middle Section: Tagline, Contact, Newsletter */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1.1fr_1.4fr] gap-8 lg:gap-16 pt-4 pb-14 px-6 md:px-12">
        {/* Col 1: Tagline */}
        <div className="space-y-3 flex flex-col justify-start">
          <p className="text-white/75 font-dm text-[15px] leading-relaxed max-w-[320px]">
            AI agents to help you win and automate enterprise operations.
          </p>
        </div>

        {/* Col 2: Contact Us */}
        <div className="space-y-3 flex flex-col justify-start">
          <h3 className="text-white/45 font-mono text-[10.5px] tracking-[0.2em] uppercase font-medium">
            CONTACT US
          </h3>
          <div className="space-y-2.5 font-dm text-[13.5px] text-white/60">
            <p className="leading-snug">
              Abu Dhabi Global Market<br />
              Al Maryah Island, Abu Dhabi, UAE
            </p>
            <p className="pt-1">
              <a
                href="mailto:contact@brombeersystems.com"
                className="text-white/80 hover:text-white transition-colors underline-offset-4 hover:underline"
              >
                contact@brombeersystems.com
              </a>
            </p>
          </div>
        </div>

        {/* Col 3: Stay Up To Date (Newsletter) */}
        <div className="flex flex-col justify-start">
          <h3 className="text-white/45 font-mono text-[10.5px] tracking-[0.2em] uppercase font-medium mb-3">
            STAY UP TO DATE
          </h3>
          <form
            onSubmit={handleSubscribe}
            className="relative flex items-center border border-white/25 bg-black/60 focus-within:border-white/70 transition-colors"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              className="bg-transparent text-white font-mono text-xs px-3.5 py-3 outline-none flex-grow placeholder:text-white/30"
            />
            <button
              type="submit"
              className="bg-white hover:bg-white/90 text-black font-mono font-bold text-[11px] tracking-wider uppercase px-4 py-2.5 m-1 transition-colors flex items-center gap-1.5 shrink-0"
            >
              {subscribed ? (
                <>
                  <Check className="w-3.5 h-3.5 text-black" />
                  <span>DONE</span>
                </>
              ) : (
                'SUBMIT'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* 4. Horizontal Navigation Strip (Single Line with Top & Bottom Dividers) */}
      <div className="w-full border-t border-b border-white/15 py-3.5 px-6 md:px-12">
        <nav className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[10.5px] font-mono tracking-[0.18em] uppercase text-white/60">
          <a href="/solutions" className="hover:text-white transition-colors">
            SOLUTIONS
          </a>
          <a href="/industries" className="hover:text-white transition-colors">
            INDUSTRIES
          </a>
          <a href="/approach" className="hover:text-white transition-colors">
            APPROACH
          </a>
          <a href="/use-cases" className="hover:text-white transition-colors">
            USE CASES
          </a>
          <a href="/responsible-ai" className="hover:text-white transition-colors">
            RESPONSIBLE AI
          </a>
          <a href="/about" className="hover:text-white transition-colors">
            ABOUT
          </a>
          <a href="/insights" className="hover:text-white transition-colors">
            INSIGHTS
          </a>
          <a href="/privacy" className="hover:text-white transition-colors">
            SECURITY
          </a>
          <a href="/privacy" className="hover:text-white transition-colors">
            PRIVACY
          </a>
          <a href="/terms" className="hover:text-white transition-colors">
            TERMS
          </a>
          <a href="/contact" className="hover:text-white transition-colors">
            STATUS
          </a>
        </nav>
      </div>

      {/* 5. Bottom Copyright Bar + "SPEAK TO AN AI AGENT" Action Pill */}
      <div className="relative w-full py-6 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10.5px] font-mono tracking-[0.16em] text-white/40">
        <div>
          © Brombeer AI. All Rights Reserved 2026
        </div>
        
        <div className="flex items-center gap-6">
          <span>Site by Brombeer AI</span>
        </div>

        {/* Floating / Anchored Pill: SPEAK TO AN AI AGENT */}
        <a
          href="/contact"
          className="fixed sm:absolute bottom-5 right-5 sm:bottom-4 sm:right-12 z-40 inline-flex items-center gap-2 bg-white text-black font-mono font-bold text-[11px] tracking-wider uppercase px-4 py-2.5 shadow-2xl hover:bg-white/90 hover:scale-[1.02] transition-all cursor-pointer"
        >
          <PhoneCall className="w-3.5 h-3.5 text-black shrink-0" />
          <span>SPEAK TO AN AI AGENT</span>
        </a>
      </div>
    </div>
  );

  return (
    <div className="w-full mt-20 bg-black">
      <HalftoneWordmarkFooter
        wordmark="brombeer"
        customHeader={customHeader}
        showDefaultRule={false}
        backToTop={false}
        preset="night"
        palette={{
          background: '#000000',
          ink: '#FFFFFF',
          warm: '#9E7BFF',
        }}
        transparentCanvas={true}
        fontFamily='"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        fontWeight={800}
        dotGap={5}
        radius={80}
        crop={0}
      />
    </div>
  );
};
