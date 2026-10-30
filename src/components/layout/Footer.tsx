import React from 'react';
import HalftoneWordmarkFooter from '../ui/halftone-wordmark-footer';
import { MapPin, Mail, ExternalLink, Shield, FileText } from 'lucide-react';

export const Footer: React.FC = () => {
  const customHeader = (
    <div className="w-full pt-10 md:pt-14 px-5 md:px-11 font-mono text-[10.5px] tracking-[0.18em] uppercase text-[#EAE6FA] leading-relaxed">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_0.9fr_1.15fr_1.15fr_1fr] gap-8 lg:gap-8">
        {/* Col 1: Brand & Contact / Legal */}
        <div className="sm:col-span-2 md:col-span-3 lg:col-span-1 space-y-6">
          <div>
            <strong className="block font-medium text-[#EAE6FA]/90 text-[11px] tracking-[0.16em] leading-normal">
              BROMBEER AI · INTELLIGENCE THAT MOVES BUSINESS FORWARD.
            </strong>
            <span className="block text-[#EAE6FA]/45 text-[10px] tracking-[0.16em] mt-1.5">
              © 2026 BROMBEER IT SYSTEMS. ALL RIGHTS RESERVED. · ABU DHABI, UAE
            </span>
          </div>

          <div className="pt-2">
            <h3 className="text-[#EAE6FA]/45 font-medium mb-3 tracking-[0.18em]">
              CONTACT & LEGAL
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#EAE6FA]/60 shrink-0" />
                <a href="/contact" className="hwf-link">
                  LOCATION: ABU DHABI, UAE
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#EAE6FA]/60 shrink-0" />
                <a href="mailto:contact@brombeersystems.com" className="hwf-link">
                  CONTACT@BROMBEERSYSTEMS.COM
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <ExternalLink className="w-3.5 h-3.5 text-[#EAE6FA]/60 shrink-0" />
                <a
                  href="https://brombeersystems.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hwf-link"
                >
                  BROMBEERSYSTEMS.COM ↗
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Shield className="w-3.5 h-3.5 text-[#EAE6FA]/60 shrink-0" />
                <a href="/privacy" className="hwf-link">
                  PRIVACY POLICY
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FileText className="w-3.5 h-3.5 text-[#EAE6FA]/60 shrink-0" />
                <a href="/terms" className="hwf-link">
                  TERMS AND CONDITIONS
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Col 2: EXPLORE */}
        <div>
          <h3 className="text-[#EAE6FA]/45 font-medium mb-3 tracking-[0.18em]">
            EXPLORE
          </h3>
          <ul className="space-y-2 list-none p-0 m-0">
            <li>
              <a href="/" className="hwf-link">
                HOME
              </a>
            </li>
            <li>
              <a href="/solutions" className="hwf-link">
                AI SOLUTIONS
              </a>
            </li>
            <li>
              <a href="/industries" className="hwf-link">
                INDUSTRIES
              </a>
            </li>
            <li>
              <a href="/use-cases" className="hwf-link">
                USE CASES
              </a>
            </li>
            <li>
              <a href="/approach" className="hwf-link">
                OUR APPROACH
              </a>
            </li>
            <li>
              <a href="/about" className="hwf-link">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="/responsible-ai" className="hwf-link">
                RESPONSIBLE AI
              </a>
            </li>
            <li>
              <a href="/insights" className="hwf-link">
                INSIGHTS
              </a>
            </li>
            <li>
              <a href="/contact" className="hwf-link">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: AI SOLUTIONS */}
        <div>
          <h3 className="text-[#EAE6FA]/45 font-medium mb-3 tracking-[0.18em]">
            AI SOLUTIONS
          </h3>
          <ul className="space-y-2 list-none p-0 m-0">
            <li>
              <a href="/solutions#generative-ai" className="hwf-link">
                GENERATIVE AI & LLMS
              </a>
            </li>
            <li>
              <a href="/solutions#ai-agents" className="hwf-link">
                AI AGENTS & AUTOMATION
              </a>
            </li>
            <li>
              <a href="/solutions#enterprise-knowledge" className="hwf-link">
                ENTERPRISE KNOWLEDGE
              </a>
            </li>
            <li>
              <a href="/solutions#computer-vision" className="hwf-link">
                COMPUTER VISION
              </a>
            </li>
            <li>
              <a href="/solutions#predictive-analytics" className="hwf-link">
                PREDICTIVE ANALYTICS
              </a>
            </li>
            <li>
              <a href="/solutions#document-intelligence" className="hwf-link">
                DOCUMENT INTELLIGENCE
              </a>
            </li>
            <li>
              <a href="/solutions#ai-app-development" className="hwf-link">
                AI APPLICATION DEV
              </a>
            </li>
            <li>
              <a href="/solutions#ai-consulting" className="hwf-link">
                AI CONSULTING & STRATEGY
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: INDUSTRIES */}
        <div>
          <h3 className="text-[#EAE6FA]/45 font-medium mb-3 tracking-[0.18em]">
            INDUSTRIES
          </h3>
          <ul className="space-y-2 list-none p-0 m-0">
            <li>
              <a href="/industries#government" className="hwf-link">
                GOVERNMENT & PUBLIC SECTOR
              </a>
            </li>
            <li>
              <a href="/industries#defence-security" className="hwf-link">
                DEFENCE & SECURITY
              </a>
            </li>
            <li>
              <a href="/industries#healthcare" className="hwf-link">
                HEALTHCARE OPERATIONS
              </a>
            </li>
            <li>
              <a href="/industries#logistics" className="hwf-link">
                LOGISTICS & SUPPLY CHAIN
              </a>
            </li>
            <li>
              <a href="/industries#manufacturing" className="hwf-link">
                MANUFACTURING & INDUSTRIAL
              </a>
            </li>
            <li>
              <a href="/industries#enterprise-services" className="hwf-link">
                ENTERPRISE SERVICES
              </a>
            </li>
          </ul>
        </div>

        {/* Col 5: Star Compass & Slogan */}
        <div className="flex flex-col justify-start">
          <div className="flex items-center gap-3 mb-4">
            <svg
              className="w-4 h-4 text-[#EAE6FA]/80 shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
            </svg>
            <div className="h-[0.5px] flex-grow bg-[#EAE6FA]/20" />
          </div>
          <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-[#EAE6FA]/80 leading-relaxed font-medium">
            BUILDING INTELLIGENCE
            <br />
            FOR A BRIGHTER
            <br />
            TOMORROW.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full mt-20">
      <HalftoneWordmarkFooter
        wordmark="brombeer"
        customHeader={customHeader}
        backgroundImage="/images/footer/Starry Desert Engraving Panorama.png"
        backToTop={true}
        preset="night"
        palette={{
          background: '#080410',
          ink: '#EAE6FA',
          warm: '#9E7BFF',
        }}
        fontFamily='"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        fontWeight={800}
        dotGap={5}
        radius={80}
        crop={0}
      />
    </div>
  );
};
