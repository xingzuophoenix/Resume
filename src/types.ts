export type ThemeMode = 'bauhaus' | 'carmine';
export type ScreenView = 'all' | 'screen1' | 'screen2';

export interface WorkExperience {
  id: string;
  stepNumber: string;
  title: string;
  company: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  bulletPoints: string[];
}

export interface AdditionalRole {
  id: string;
  title: string;
  company: string;
  period: string;
  note?: string;
  highlight?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
}

export interface SkillCategory {
  category: string;
  tools: {
    name: string;
    badge?: string;
    icon?: string;
    color?: string;
  }[];
}

export interface CreativeProject {
  id: string;
  tag: string;
  title: string;
  description: string;
  type: 'figma' | 'code';
  tools: string[];
  link?: string;
  previewUrl?: string;
  details: {
    summary: string;
    highlights: string[];
    role: string;
    deliverables: string[];
  };
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  grade?: string;
}

export interface LanguageSkill {
  name: string;
  dots: number; // 1 to 5
  level: string;
}
