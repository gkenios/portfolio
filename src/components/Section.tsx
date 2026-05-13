import type { ReactNode } from 'react';

import { motion } from 'framer-motion';

import { fadeUp } from '../lib/animations';

type SectionProps = {
  id: string;
  label: string;
  title: string;
  subtle?: boolean;
  children: ReactNode;
};

export function Section({ id, label, title, subtle = false, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-28 px-6 md:px-12 lg:px-20${subtle ? ' bg-bg-subtle' : ''}`}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">{label}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
