// Shared
export type MonthNameShort =
  | 'Jan'
  | 'Feb'
  | 'Mar'
  | 'Apr'
  | 'May'
  | 'Jun'
  | 'Jul'
  | 'Aug'
  | 'Sep'
  | 'Oct'
  | 'Nov'
  | 'Dec';

export type TimePeriod = {
  startMonth?: MonthNameShort;
  startYear: number;
  endMonth?: MonthNameShort;
  endYear: number | 'Present';
};

// Education
export type EducationEntry = TimePeriod & {
  university: string;
  degree: string;
  location?: string;
  description?: string[];
};

// Experience
export type FlatExperienceEntry = TimePeriod & {
  role: string;
  company: string;
  location?: string;
  description: string[];
};

export type NestedExperienceEntry = FlatExperienceEntry & {
  projects: FlatExperienceEntry[];
};

export type ExperienceEntry = FlatExperienceEntry | NestedExperienceEntry;

// Skills
import type React from 'react';

export type SkillItem = {
  name: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

export type SkillCategory = {
  label: string;
  items: SkillItem[];
};

// About
export type Hobby = {
  type: 'image' | 'terminal';
  title: string;
  text: string;
  accentColor: string;
  source: string;
};

// Contact
export type ContactDetails = {
  email: string;
  github: string;
  linkedin: string;
};
