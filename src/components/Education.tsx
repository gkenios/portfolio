import { motion } from 'framer-motion';
import type { EducationEntry } from '../types';

type EducationProps = {
  educationEntries: EducationEntry[];
};

export function Education({ educationEntries }: EducationProps) {
  return (
    <section className="py-28 px-6 md:px-12 lg:px-20 bg-bg-subtle">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            Education
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Academic background.
          </h2>
        </motion.div>

        <div className="divide-y divide-divider-main">
          {educationEntries.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="py-10 grid grid-cols-1 md:grid-cols-[176px_1fr] gap-8 md:gap-16"
            >
              {/* Period */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-dim mb-1">
                  Period
                </p>
                <p className="text-sm text-muted">
                  {entry.startMonth} {entry.startYear} — {entry.endMonth} {entry.endYear}
                </p>
              </div>

              {/* Degree */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-1">
                  {entry.university}
                </p>
                <h3 className="text-xl font-bold">{entry.degree}</h3>
                {entry.description && entry.description.length > 0 && (
                  <ul className="mt-3 space-y-1">
                    {entry.description.map((line, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted">
                        <span className="text-accent/50 mt-0.5 shrink-0">—</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
