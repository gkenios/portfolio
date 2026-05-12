export type NormalExperienceEntry = {
  role: string;
  company: string;
  startMonth?: MonthNameShort;
  startYear: number;
  endMonth?: MonthNameShort;
  endYear: number | "Present";
  description: string[];
};

export type ConsultantExperienceEntry = NormalExperienceEntry & {
  projects: NormalExperienceEntry[];
};

export type ExperienceEntry = NormalExperienceEntry | ConsultantExperienceEntry;

export type EducationEntry = {
  university: string;
  degree: string;
  startYear: number;
  endYear: number | "Present";
  description?: string[];
};

export type MonthNameShort =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";
