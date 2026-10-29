import React from 'react';
import HalftoneWordmarkFooter from '../ui/halftone-wordmark-footer';

export const Footer: React.FC = () => {
  const footerColumns = [
    {
      title: 'Explore',
      links: [
        { label: 'Home', href: '/' },
        { label: 'AI Solutions', href: '/solutions' },
        { label: 'Industries', href: '/industries' },
        { label: 'Use Cases', href: '/use-cases' },
        { label: 'Our Approach', href: '/approach' },
        { label: 'About Us', href: '/about' },
        { label: 'Responsible AI', href: '/responsible-ai' },
        { label: 'Insights', href: '/insights' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'AI Solutions',
      links: [
        { label: 'Generative AI & LLMs', href: '/solutions#generative-ai' },
        { label: 'AI Agents & Automation', href: '/solutions#ai-agents' },
        { label: 'Enterprise Knowledge', href: '/solutions#enterprise-knowledge' },
        { label: 'Computer Vision', href: '/solutions#computer-vision' },
        { label: 'Predictive Analytics', href: '/solutions#predictive-analytics' },
        { label: 'Document Intelligence', href: '/solutions#document-intelligence' },
        { label: 'AI Application Dev', href: '/solutions#ai-app-development' },
        { label: 'AI Consulting & Strategy', href: '/solutions#ai-consulting' },
      ],
    },
    {
      title: 'Industries',
      links: [
        { label: 'Government & Public Sector', href: '/industries#government' },
        { label: 'Defence & Security', href: '/industries#defence-security' },
        { label: 'Healthcare Operations', href: '/industries#healthcare' },
        { label: 'Logistics & Supply Chain', href: '/industries#logistics' },
        { label: 'Manufacturing & Industrial', href: '/industries#manufacturing' },
        { label: 'Enterprise Services', href: '/industries#enterprise-services' },
      ],
    },
    {
      title: 'Contact & Legal',
      links: [
        { label: 'Location: Abu Dhabi, UAE', href: '/contact' },
        { label: 'contact@brombeersystems.com', href: 'mailto:contact@brombeersystems.com' },
        { label: 'brombeersystems.com ↗', href: 'https://brombeersystems.com' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms and Conditions', href: '/terms' },
      ],
    },
  ];

  return (
    <div className="w-full mt-24">
      <HalftoneWordmarkFooter
        wordmark="brombeer"
        label="Brombeer AI · Intelligence That Moves Business Forward."
        meta="© 2026 Brombeer IT Systems. All rights reserved. · Abu Dhabi, UAE"
        columns={footerColumns}
        backToTop={true}
        preset="night"
        palette={{
          background: '#0B0716',
          ink: '#EAE6FA',
          warm: '#9E7BFF',
        }}
        crop={0}
      />
    </div>
  );
};