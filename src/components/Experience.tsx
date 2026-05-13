import { motion } from 'framer-motion';
import type { ExperienceEntry, FlatExperienceEntry } from '../types';

type ExperienceProps = {
  experienceEntries: ExperienceEntry[];
};

function formatPeriod(
  entry: Pick<FlatExperienceEntry, 'startMonth' | 'startYear' | 'endMonth' | 'endYear'>
): string {
  const start = entry.startMonth ? `${entry.startMonth} ${entry.startYear}` : `${entry.startYear}`;
  const end =
    entry.endYear === 'Present'
      ? 'Present'
      : entry.endMonth
        ? `${entry.endMonth} ${entry.endYear}`
        : `${entry.endYear}`;
  return `${start} — ${end}`;
}

function ProjectCard({ project }: { project: FlatExperienceEntry }) {
  return (
    <div className="border border-border-main rounded-xl p-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-1">
            {project.company}
          </p>
          <h4 className="text-2xl font-bold">{project.role}</h4>
        </div>
        <p className="text-xs text-dim whitespace-nowrap">{formatPeriod(project)}</p>
      </div>
      {project.description.length > 0 && (
        <ul className="space-y-2">
          {project.description.map((line, i) => (
            <li key={i} className="flex gap-2.5 text-sm text-muted">
              {project.description.length > 1 && (
                <span className="text-accent/50 mt-0.5 shrink-0">—</span>
              )}
              <span>{line}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Experience({ experienceEntries }: ExperienceProps) {
  return (
    <section id="experience" className="scroll-mt-20 py-28 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            Where I've worked.
          </h2>
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
                  Duration
                </p>
                <p className="text-sm text-muted">{formatPeriod(entry)}</p>
              </div>

              {/* Content */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-1">
                  {entry.company}
                </p>
                <h3 className="text-2xl font-bold mb-5">{entry.role}</h3>

                {entry.description.length > 0 && (
                  <ul className="space-y-2 mb-8">
                    {entry.description.map((line, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted">
                        {entry.description.length > 1 && (
                          <span className="text-accent/50 mt-0.5 shrink-0">—</span>
                        )}
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
