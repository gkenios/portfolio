import { motion } from 'framer-motion';

import { ProjectCard } from './ProjectCard';
import { fadeUp } from '../../lib/animations';
import { formatPeriod } from '../../lib/format';
import type { ExperienceEntry } from '../../types';

const TITLE = 'Experience';
const SUBTITLE = "Where I've worked.";

type ExperienceProps = {
  experienceEntries: ExperienceEntry[];
};

export function Experience({ experienceEntries }: ExperienceProps) {
  return (
    <section id="experience" className="scroll-mt-20 py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">{TITLE}</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">{SUBTITLE}</h2>
        </motion.div>

        <div className="divide-y divide-divider-main">
          {experienceEntries.map((entry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="py-12 grid grid-cols-1 md:grid-cols-[176px_1fr] gap-8 md:gap-16"
            >
              {/* Metadata */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-dim mb-1">
                  Period
                </p>
                <p className="text-sm text-muted">{formatPeriod(entry)}</p>
              </div>

              {/* Content */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-1">
                  {entry.company}
                </p>
                <h3 className="text-2xl font-bold">{entry.role}</h3>
                {entry.location && (
                  <p className="flex items-center gap-1 text-xs text-dim mt-1 mb-5">
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
                {!entry.location && <div className="mb-5" />}

                {entry.description.length > 0 && (
                  <ul className="space-y-2 mb-8">
                    {entry.description.map((line, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted">
                        <span className="text-accent/50 mt-0.5 shrink-0">—</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {'projects' in entry && entry.projects.length > 0 && (
                  <div className="space-y-7">
                    {entry.projects.map((project, pi) => (
                      <ProjectCard key={pi} project={project} />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
