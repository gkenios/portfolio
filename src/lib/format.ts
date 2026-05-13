import type { TimePeriod } from '../types';

/** Utility function to format time periods for education and experience entries. */
export function formatPeriod(entry: TimePeriod): string {
  const start = entry.startMonth ? `${entry.startMonth} ${entry.startYear}` : `${entry.startYear}`;
  const end =
    entry.endYear === 'Present'
      ? 'Present'
      : entry.endMonth
        ? `${entry.endMonth} ${entry.endYear}`
        : `${entry.endYear}`;
  return `${start} — ${end}`;
}
