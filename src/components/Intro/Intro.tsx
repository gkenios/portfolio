import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';

import { DynamicIcon } from '../ContactIcons';
import { PipelineGraphic } from './PipelineGraphic';
import { fadeChild } from '../../lib/animations';
import type { ContactDetails } from '../../types';

type IntroProps = {
  fullName: string;
  role: string;
  about: string;
  cvUrl: string;
  contactDetails: ContactDetails;
};

export function Intro({ fullName, role, about, cvUrl, contactDetails }: IntroProps) {
  const iconSvgClass = 'w-4 h-4';
  const iconBoarderClass =
    'w-10 h-10 rounded-full border border-border-main/40 bg-bg/20 backdrop-blur-sm flex items-center justify-center text-muted hover:bg-bg/70 hover:backdrop-blur-md hover:border-border-main/60 hover:text-foreground hover:shadow-md transition-all duration-300';

  return (
    <section
      id="intro"
      className="scroll-mt-20 min-h-screen flex items-center px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center py-24">
        {/* Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.2 },
            },
          }}
        >
          <motion.p
            variants={fadeChild}
            className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-5"
          >
            {role}
          </motion.p>
          <motion.h1
            variants={fadeChild}
            className="text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.97] mb-8"
          >
            {fullName.split(' ').map((name, index) => (
              <span key={index}>
                {name}
                <br />
              </span>
            ))}
          </motion.h1>
          <motion.p
            variants={fadeChild}
            className="text-base md:text-lg text-muted leading-relaxed max-w-sm mb-10"
          >
            {about}
          </motion.p>
          <motion.a
            variants={fadeChild}
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent text-black font-bold px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-accent-hover transition-colors duration-200"
          >
            <Download className="w-4 h-4" />
            Download CV
          </motion.a>
          <motion.div variants={fadeChild} className="flex items-center gap-3 mt-6">
            {/* Iterate over contact details and render icons */}
            {Object.entries(contactDetails).map(([key, value]) => (
              <DynamicIcon
                key={key}
                name={key as keyof ContactDetails}
                href={value}
                borderClassName={iconBoarderClass}
                svgClassName={iconSvgClass}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Pipeline graphic */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="hidden lg:flex justify-end"
        >
          <PipelineGraphic />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-5 h-5 text-dim animate-bounce" />
      </motion.div>
    </section>
  );
}
