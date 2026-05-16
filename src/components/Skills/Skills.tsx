import { motion } from 'framer-motion';

import { SkillTile } from './SkillTile';
import { fadeUp } from '../../lib/animations';
import type { SkillCategory } from '../../types';

type SkillsProps = {
  categories: SkillCategory[];
};

export function Skills({ categories }: SkillsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
      {categories.map((cat, index) => (
        <motion.div
          key={cat.label}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          // ADDED: A dynamic transition delay based on the column index
          transition={{ delay: index * 0.1, duration: 0.4 }} 
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
  );
}