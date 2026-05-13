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
export type SkillItem = {
  name: string;
  icon?: string;
};

export type SkillCategory = {
  label: string;
  items: SkillItem[];
};

// About
export type ImageHobby = {
  id: string;
  title: string;
  quote: string;
  accentColor: string;
  type: 'image';
  image: string;
};

export type TerminalHobby = {
  id: string;
  title: string;
  quote: string;
  accentColor: string;
  type: 'terminal';
  codeSnippet: string;
};

export type Hobby = ImageHobby | TerminalHobby;

// Contact
export type ContactDetails = {
  email: string;
  github: string;
  linkedin: string;
};
