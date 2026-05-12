import { motion } from 'framer-motion';
import type { SkillCategory } from '../types';

type SkillsProps = {
  categories: SkillCategory[];
};

function SkillTile({ name, icon, index }: { name: string; icon?: string; index: number }) {
  const initials = name
    .split(/[\s\-/]/)
    .map((w) => w[0] ?? '')
    .join('')
    .slice(0, 3)
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
      className="group flex items-center gap-4 px-5 py-3 border border-[#1e1e1e] bg-[#080808] hover:border-[#F59E0B] hover:bg-[#0f0d04] transition-all duration-300 cursor-default"
    >
      {icon ? (
        <img src={icon} alt="" className="w-6 h-6 object-contain shrink-0" loading="lazy" />
      ) : (
        <span className="w-6 h-6 flex items-center justify-center text-[9px] font-mono font-bold text-[#F59E0B] border border-[#F59E0B]/25 bg-[#F59E0B]/5 shrink-0">
          {initials}
        </span>
      )}
      <span className="text-sm font-medium text-gray-400 group-hover:text-gray-100 transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

export function Skills({ categories }: SkillsProps) {
  return (
    <section className="py-28 px-6 md:px-12 lg:px-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#F59E0B] mb-3">
            Technical Skills
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            What I work with.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
          {categories.map((cat) => (
            <div key={cat.label}>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-700 mb-3">
                {cat.label}
              </p>
              <div className="flex flex-col gap-2">
                {cat.items.map((skill, i) => (
                  <SkillTile key={skill.name} name={skill.name} icon={skill.icon} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
