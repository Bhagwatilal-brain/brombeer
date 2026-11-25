import React from 'react';
import { Container } from '../../layout/Container';
import { FluidExpandingGrid, GalleryItem } from '../../ui/fluid-expanding-grid';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

import originImage from '@/assets/images/about/about-origin-purpose.jpg';
import missionImage from '@/assets/images/about/about-mission.jpg';
import visionImage from '@/assets/images/about/about-vision.jpg';

const ABOUT_GRID_ITEMS: GalleryItem[] = [
  {
    id: 'origin-purpose',
    title: 'Turning AI Possibilities into Practical Applications.',
    subtitle: 'Bridging machine learning models with production enterprise environments.',
    description:
      'Artificial intelligence is changing how organizations interact with information, automate work, and develop digital services. Meaningful implementation takes more than adopting a model—it requires understanding the problem, data, users, and the governance controls needed to operate responsibly in enterprise production.',
    image: originImage,
    color: '#7650E8',
  },
  {
    id: 'our-mission',
    title: 'Solving Practical Problems',
    subtitle: 'To help organizations use AI to solve practical problems & build effective workflows.',
    description:
      'To help organizations use artificial intelligence to solve practical problems, improve access to information, and build more effective digital workflows tailored to real business users.',
    image: missionImage,
    color: '#8B5CF6',
  },
  {
    id: 'our-vision',
    title: 'Thoughtful, Measurable Value',
    subtitle: 'To contribute to a future where AI is implemented thoughtfully and integrated responsibly.',
    description:
      'To contribute to a future where AI is implemented thoughtfully, integrated responsibly, and measured by the concrete value it creates for people and organizations.',
    image: visionImage,
    color: '#A78BFA',
  },
];

export const AboutOriginPurposeSection: React.FC = () => {
  return (
    <section className="relative w-full py-6 sm:py-8 overflow-hidden">
      <Container size="wide">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-12 text-center flex flex-col items-center space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7650E8]/10 border border-[#7650E8]/20 text-xs font-semibold text-violet-primary"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-primary" />
            <span className="font-mono uppercase text-[11px] tracking-wider">
              FOUNDATIONAL PILLARS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-sans font-extrabold text-text-primary tracking-[-0.03em] leading-tight text-center"
          >
            Engineering with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7650E8] via-[#8E6DF5] to-[#7650E8]">
              Purpose and Discipline.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="text-sm sm:text-base text-text-secondary font-dm max-w-2xl leading-relaxed text-center mx-auto"
          >
            Explore our origins, mission, and long-term vision. Click any card to expand and dive into our core operational philosophy.
          </motion.p>
        </div>

        {/* Interactive Fluid Expanding Grid */}
        <FluidExpandingGrid items={ABOUT_GRID_ITEMS} id="about-pillars-grid" />
      </Container>
    </section>
  );
};

export default AboutOriginPurposeSection;
