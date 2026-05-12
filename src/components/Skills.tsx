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
      className="group flex items-center gap-4 px-5 py-3 border border-border-main bg-surface hover:border-accent hover:bg-accent-muted transition-all duration-300 cursor-default"
    >
      {icon ? (
        <img src={icon} alt="" className="w-6 h-6 object-contain shrink-0" loading="lazy" />
      ) : (
        <span className="w-6 h-6 flex items-center justify-center text-[9px] font-mono font-bold text-accent border border-accent/25 bg-accent/5 shrink-0">
          {initials}
        </span>
      )}
      <span className="text-sm font-medium text-muted group-hover:text-foreground transition-colors">
        {name}
      </span>
    </motion.div>
  );
}

export function Skills({ categories }: SkillsProps) {
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
            Technical Skills
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            What I work with.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-dim mb-3">
                {cat.label}
              </p>
              <div className="flex flex-col gap-2">
                {cat.items.map((skill, i) => (
                  <SkillTile key={skill.name} name={skill.name} icon={skill.icon} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
