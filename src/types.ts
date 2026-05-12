// Education
export type EducationEntry = {
  university: string;
  degree: string;
  startYear: number;
  startMonth?: MonthNameShort;
  endMonth?: MonthNameShort;
  endYear: number | 'Present';
  description?: string[];
};

// Experience
export type FlatExperienceEntry = {
  role: string;
  company: string;
  startMonth?: MonthNameShort;
  startYear: number;
  endMonth?: MonthNameShort;
  endYear: number | 'Present';
  description: string[];
};

export type NestedExperienceEntry = FlatExperienceEntry & {
  projects: FlatExperienceEntry[];
};

export type ExperienceEntry = FlatExperienceEntry | NestedExperienceEntry;

// Skills
export type SkillItem = {
  name: string;
  icon?: string;
};

export type SkillCategory = {
  label: string;
  items: SkillItem[];
};

// Contact
export type ContactDetails = {
  email: string;
  github: string;
  linkedin: string;
};

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
