import { EducationItem } from './EducationItem';
import type { EducationEntry } from '../../types';

type EducationProps = {
  educationEntries: EducationEntry[];
};

export function Education({ educationEntries }: EducationProps) {
  return (
    <div className="divide-y divide-divider-main">
      {educationEntries.map((entry, index) => (
        <EducationItem key={index} entry={entry} index={index} />
      ))}
    </div>
  );
}
