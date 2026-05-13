import { formatPeriod } from '../../lib/format';
import type { FlatExperienceEntry } from '../../types';

type ProjectCardProps = {
  project: FlatExperienceEntry;
};

export function ProjectCard({ project }: ProjectCardProps) {
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
              <span className="text-accent/50 mt-0.5 shrink-0">—</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}