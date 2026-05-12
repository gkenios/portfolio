import { type BezierDefinition, motion } from 'framer-motion';
import { type ExperienceEntry, type NormalExperienceEntry } from '../types';

const ease: BezierDefinition = [0.25, 0.1, 0.25, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

type ExperienceProps = {
  experienceEntries: ExperienceEntry[];
};

function formatPeriod(entry: ExperienceEntry): string {
  const start = entry.startMonth ? `${entry.startMonth} ${entry.startYear}` : `${entry.startYear}`;
  const end =
    entry.endYear === 'Present'
      ? 'Present'
      : entry.endMonth
        ? `${entry.endMonth} ${entry.endYear}`
        : `${entry.endYear}`;
  return `${start} — ${end}`;
}

function SubEntry({ entry }: { entry: NormalExperienceEntry }) {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
        <h5 className="text-2xl md:text-3xl font-semibold">{entry.role}</h5>
        <span className="text-gray-500 font-medium mt-2 md:mt-0">{formatPeriod(entry)}</span>
      </div>
      <p className="text-xl text-blue-400 mb-4">{entry.company}</p>
      <ul className="list-disc list-inside space-y-1">
        {entry.description.map((line, i) => (
          <li key={i} className="text-gray-400 text-lg">
            {line}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience({ experienceEntries }: ExperienceProps) {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-16"
        >
          Experience.
        </motion.h3>

        <div className="space-y-12">
          {experienceEntries.map((entry, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="border-b border-[#333] pb-12"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h4 className="text-2xl md:text-3xl font-semibold">{entry.role}</h4>
                <span className="text-gray-500 font-medium mt-2 md:mt-0">
                  {formatPeriod(entry)}
                </span>
              </div>
              <h5 className="text-xl text-blue-500 mb-4">{entry.company}</h5>

              {'projects' in entry ? (
                <>
                  <ul className="list-disc list-inside space-y-1 mb-6">
                    {entry.description.map((line, i) => (
                      <li key={i} className="text-gray-400 text-base">
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="border-l-2 border-[#333] pl-6 space-y-8">
                    {entry.projects.map((project, pi) => (
                      <SubEntry key={pi} entry={project} />
                    ))}
                  </div>
                </>
              ) : (
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
      </div>
    </section>
  );
}
