import { ExperienceItem } from './ExperienceItem';
import type { ExperienceEntry } from '../../types';

type ExperienceProps = {
  experienceEntries: ExperienceEntry[];
};

export function Experience({ experienceEntries }: ExperienceProps) {
  return (
    <div className="divide-y divide-divider-main">
      {experienceEntries.map((entry, index) => (
        <ExperienceItem key={index} entry={entry} />
      ))}
    </div>
  );
}
