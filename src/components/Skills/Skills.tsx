import { motion } from 'framer-motion';

import { SkillTile } from './SkillTile';
import { fadeUp } from '../../lib/animations';
import type { SkillCategory } from '../../types';

const TITLE = 'Technical Skills';
const SUBTITLE = 'What I work with.';

type SkillsProps = {
  categories: SkillCategory[];
};

export function Skills({ categories }: SkillsProps) {
  return (
    <section id="skills" className="scroll-mt-20 py-28 px-6 md:px-12 lg:px-20 bg-bg-subtle">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-dim mb-3">
                {cat.label}
              </p>
              <div className="flex flex-col gap-2">
                {cat.items.map((skill) => (
                  <SkillTile key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
