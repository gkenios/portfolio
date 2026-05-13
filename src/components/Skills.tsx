import { type BezierDefinition, motion } from 'framer-motion';
import type { SkillCategory } from '../types';

const ease: BezierDefinition = [0.25, 0.1, 0.25, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

type SkillsProps = {
  categories: SkillCategory[];
};

function SkillTile({ name, icon }: { name: string; icon?: string }) {
  const initials = name
    .split(/[\s\-/]/)
    .map((w) => w[0] ?? '')
    .join('')
    .slice(0, 3)
    .toUpperCase();

  return (
    <div className="group flex items-center gap-4 px-5 py-3 border border-border-main bg-surface hover:border-accent hover:bg-accent-muted transition-all duration-300 cursor-default">
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
    </div>
  );
}

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
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            Technical Skills
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            What I work with.
          </h2>
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
