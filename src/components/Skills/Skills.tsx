import { motion } from 'framer-motion';

import { SkillTile } from './SkillTile';
import { staggerContainer, staggerItem } from '../../lib/animations';
import type { SkillCategory } from '../../types';

type SkillsProps = {
  categories: SkillCategory[];
};

export function Skills({ categories }: SkillsProps) {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      {categories.map((cat) => (
        <motion.div key={cat.label} variants={staggerItem}>
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
    </motion.div>
  );
}
