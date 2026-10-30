import React, { useState } from 'react';
import { ArrowRight, ArrowUp, ArrowUpRight, Sparkles, Shield, Cpu, Globe2, Mail, CheckCircle2, MapPin } from 'lucide-react';
import { FooterNeuralCanvas } from '../animations/FooterNeuralCanvas';
import brmLogo from '../../assets/images/brombeer-logo-brand.png';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const solutionLinks = [
    { label: 'Generative AI & LLMs', href: '/solutions#generative-ai' },
    { label: 'AI Agents & Automation', href: '/solutions#ai-agents' },
    { label: 'Enterprise Knowledge', href: '/solutions#enterprise-knowledge' },
    { label: 'Computer Vision & Inspection', href: '/solutions#computer-vision' },
    { label: 'Predictive Analytics & Forecasting', href: '/solutions#predictive-analytics' },
    { label: 'Document Intelligence & OCR', href: '/solutions#document-intelligence' },
    { label: 'AI Application Engineering', href: '/solutions#ai-app-development' },
    { label: 'Enterprise AI Strategy & Consulting', href: '/solutions#ai-consulting' },
  ];

  const industryLinks = [
    { label: 'Government & Public Sector', href: '/industries#government' },
    { label: 'Defence & National Security', href: '/industries#defence-security' },
    { label: 'Healthcare & Clinical Operations', href: '/industries#healthcare' },
    { label: 'Logistics & Global Supply Chain', href: '/industries#logistics' },
    { label: 'Industrial Operations & Manufacturing', href: '/industries#manufacturing' },
    { label: 'Enterprise & Financial Services', href: '/industries#financial-services' },
  ];

  const companyLinks = [
    { label: 'About Brombeer', href: '/about' },
    { label: 'Our 6-Phase Approach', href: '/approach' },
    { label: 'Client Use Cases', href: '/use-cases' },
    { label: 'Responsible AI & Sovereignty', href: '/responsible-ai' },
    { label: 'Enterprise Insights & Research', href: '/insights' },
    { label: 'Contact Our Engineers', href: '/contact' },
  ];

  return (
    <footer className="relative w-full bg-[#090514] text-white overflow-hidden border-t border-[#7650E8]/25 select-none">
      {/* Top Hairline Purple Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-transparent via-[#7650E8] to-transparent opacity-80" />

      {/* Interactive Neural Network Particles Canvas */}
      <FooterNeuralCanvas className="opacity-75" nodeCount={52} />

      {/* Background Soft Atmospheric Halos */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#7650E8]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 right-10 w-[550px] h-[550px] bg-[#9E7BFF]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Hexagonal Honeycomb Neural Circuit Watermark (Nod to Brombeer Logo Hexagons) */}
      <div className="absolute right-0 bottom-16 pointer-events-none opacity-20 hidden lg:block overflow-hidden">
        <svg width="420" height="320" viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#9E7BFF" strokeWidth="1" strokeDasharray="3 3">
            <polygon points="120,40 160,65 160,115 120,140 80,115 80,65" />
            <polygon points="200,90 240,115 240,165 200,190 160,165 160,115" />
            <polygon points="280,140 320,165 320,215 280,240 240,215 240,165" />
            <polygon points="120,140 160,165 160,215 120,240 80,215 80,165" />
            <polygon points="200,190 240,215 240,265 200,290 160,265 160,215" />
          </g>
          <g fill="#7650E8" opacity="0.6">
            <circle cx="160" cy="115" r="3.5" />
            <circle cx="200" cy="190" r="3.5" />
            <circle cx="240" cy="165" r="3.5" />
            <circle cx="120" cy="140" r="3.5" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Live Interactive Enterprise Telemetry Bar */}
        <div className="py-4 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#BDB5D5]">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
              <span className="text-white font-medium">Inference Mesh: 99.98% Active</span>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-[#A59CBF]">
              <Shield className="w-3.5 h-3.5 text-violet-primary" />
              <span>UAE Sovereign Infrastructure Ready</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-[#A59CBF]">
              <Globe2 className="w-3.5 h-3.5 text-[#7CB305]" />
              <span>Abu Dhabi • Dubai • Riyadh • London</span>
            </div>
          </div>

          {/* Interactive Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-violet-primary/50 text-[#C8B8FA] hover:text-white transition-all duration-300 cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 text-violet-primary" />
          </button>
        </div>

        {/* 2. Main 4-Column Directory Grid */}
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Brand & Dispatch Hub Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Brand Logo with brightness filter for crisp contrast */}
            <a href="/" className="inline-block group select-none">
              <img
                src={brmLogo}
                alt="Brombeer AI Logo"
                className="h-10 sm:h-11 w-auto object-contain brightness-0 invert opacity-95 transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </a>

            {/* Tagline */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-[0.22em] text-[#9E7BFF] uppercase font-semibold block">
                Enterprise Artificial Intelligence
              </span>
              <p className="font-sans font-bold text-lg sm:text-xl text-white tracking-tight leading-snug">
                Intelligence That Moves Businesses Forward.
              </p>
            </div>

            {/* Company Mission Statement */}
            <p className="text-xs sm:text-sm font-dm text-[#B3A9CE] leading-relaxed max-w-sm font-normal">
              Brombeer AI architects production-grade intelligence, sovereign foundation models, and autonomous workflow pipelines designed around complex enterprise data and operational ROI.
            </p>

            {/* Interactive Enterprise AI Dispatch Newsletter Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-[#7650E8]/40 transition-colors duration-300 space-y-3 max-w-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#9E7BFF]" />
                <span className="text-xs font-semibold text-white tracking-wide">
                  Enterprise AI Dispatch
                </span>
              </div>
              <p className="text-[11px] text-[#A79CBF] leading-relaxed">
                Quarterly technical briefs on sovereign LLM deployment, agent governance, and enterprise architectures.
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 py-2 px-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Subscribed to Executive Briefing</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#8E82A8]" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="corporate.email@domain.com"
                      required
                      className="w-full pl-8 pr-3 py-2 text-xs rounded-xl bg-white/[0.06] border border-white/[0.1] text-white placeholder-[#8E82A8] focus:outline-none focus:border-violet-primary transition-colors font-dm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="p-2 rounded-xl bg-violet-primary hover:bg-violet-deep text-white transition-colors flex-shrink-0 cursor-pointer shadow-sm hover:shadow"
                    aria-label="Subscribe to dispatch"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Headquarters Contact Line */}
            <div className="flex items-start gap-2.5 text-xs text-[#B3A9CE] pt-1">
              <MapPin className="w-4 h-4 text-[#9E7BFF] flex-shrink-0 mt-0.5" />
              <span className="font-dm">Al Khatem Tower, ADGM Square, Al Maryah Island, Abu Dhabi, UAE</span>
            </div>
          </div>

          {/* Column 2: AI Solutions Directory */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-semibold tracking-[0.2em] text-[#C8B8FA] uppercase flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#9E7BFF]" />
              <span>AI Solutions</span>
            </h4>
            <ul className="space-y-2.5">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-[#A59CBF] hover:text-white transition-all duration-200 font-dm hover:translate-x-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#7650E8] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industry Sectors Directory */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-semibold tracking-[0.2em] text-[#C8B8FA] uppercase flex items-center gap-2">
              <Globe2 className="w-3.5 h-3.5 text-[#9E7BFF]" />
              <span>Target Industries</span>
            </h4>
            <ul className="space-y-2.5">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-[#A59CBF] hover:text-white transition-all duration-200 font-dm hover:translate-x-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#7650E8] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Explore & Trust */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-semibold tracking-[0.2em] text-[#C8B8FA] uppercase flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-[#9E7BFF]" />
              <span>Company</span>
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-[#A59CBF] hover:text-white transition-all duration-200 font-dm hover:translate-x-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#7650E8] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Direct Connect */}
            <div className="pt-4 mt-4 border-t border-white/[0.08] space-y-2">
              <span className="text-[10px] font-mono tracking-wider text-[#8A7EA6] uppercase block font-semibold">
                Direct Inquiries
              </span>
              <a
                href="mailto:contact@brombeersystems.com"
                className="text-xs font-medium text-white hover:text-violet-primary transition-colors block break-all font-mono"
              >
                contact@brombeersystems.com
              </a>
              <a
                href="https://brombeersystems.com"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#9E7BFF] hover:text-white inline-flex items-center gap-1 transition-colors font-dm"
              >
                <span>brombeersystems.com</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

        {/* 3. Monumental Interactive Wordmark Statement */}
        <div className="pt-6 pb-4 border-t border-white/[0.08] relative overflow-hidden">
          <div className="relative text-center group cursor-default">
            {/* Atmospheric ambient glow behind wordmark */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-violet-primary/10 to-transparent blur-2xl pointer-events-none group-hover:from-violet-primary/20 transition-all duration-700" />
            
            <h2 className="text-[12vw] font-sans font-extrabold tracking-[-0.04em] leading-[0.88] select-none text-transparent bg-clip-text bg-gradient-to-b from-white/[0.14] via-white/[0.07] to-transparent group-hover:from-white/[0.22] group-hover:via-[#C8B8FA]/[0.15] transition-all duration-700">
              BROMBEER AI
            </h2>
          </div>
        </div>

        {/* 4. Bottom Legal & Sovereignty Bar */}
        <div className="py-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-dm text-[#8A7EA6]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
            <span>© 2026 Brombeer IT Systems. All rights reserved.</span>
            <span>Abu Dhabi Global Market (ADGM) • UAE</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/20">•</span>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
