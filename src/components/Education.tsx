import { type BezierDefinition, motion } from 'framer-motion';
import type { EducationEntry } from '../types';

const ease: BezierDefinition = [0.25, 0.1, 0.25, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
};

type EducationProps = {
  educationEntries: EducationEntry[];
};

export function Education({ educationEntries }: EducationProps) {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h3 
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-12"
        >
          Education.
        </motion.h3>
        {educationEntries.map((entry, index) => (
          <motion.div 
            key={index
            } initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="bg-[#1c1c1e] p-10 rounded-3xl inline-block text-left w-full max-w-2xl mb-12"
          >
            <h4 className="text-2xl font-semibold mb-2">{entry.degree}</h4>
            <h5 className="text-lg text-gray-400 mb-4">{entry.university} • {entry.startYear} — {entry.endYear}</h5>
            {entry.description && (
              <ul className="list-disc list-inside space-y-1">
                {entry.description.map((line, i) => (
                  <li key={i} className="text-gray-400 text-lg">
                    {line}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}