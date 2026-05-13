import { motion } from 'framer-motion';

import { HobbyCarousel } from './HobbyCarousel';
import { fadeUp } from '../../lib/animations';

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Section header — identical structure to Skills, Education, Experience */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">About</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            A bit more personal.
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <HobbyCarousel />
        </motion.div>
      </div>
    </section>
  );
}
