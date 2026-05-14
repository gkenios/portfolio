import { motion } from 'framer-motion';

import { formatPeriod } from '../lib/format';
import type { EducationEntry } from '../types';

type EducationProps = {
  educationEntries: EducationEntry[];
};

export function Education({ educationEntries }: EducationProps) {
  return (
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
          {/* Period – desktop only */}
          <div className="hidden md:block">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-dim mb-1">Period</p>
            <p className="text-sm text-muted">{formatPeriod(entry)}</p>
          </div>

          {/* Degree */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-1">
              {entry.university}
            </p>
            <h3 className="text-xl font-bold">{entry.degree}</h3>
            <p className="block md:hidden text-sm text-muted mt-1">{formatPeriod(entry)}</p>
            {entry.location && (
              <p className="flex items-center gap-1 text-xs text-dim mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0 opacity-60"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                {entry.location}
              </p>
            )}
            {entry.description && entry.description.length > 0 && (
              <ul className="mt-3 space-y-1">
                {entry.description.map((line, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted">
                    {entry.description!.length > 1 && (
                      <span className="text-accent/50 mt-0.5 shrink-0">—</span>
                    )}
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
