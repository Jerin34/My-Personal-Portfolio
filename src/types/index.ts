export interface Skill {
  name: string;
  icon?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  badge?: string;
  isLearning?: boolean;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period?: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  isFeatured: boolean;
  status?: string;
}

export interface CurrentlyBuildingProject {
  id: string;
  title: string;
  subtitle?: string;
  period?: string;
  badge?: string;
  status: string;
  description: string;
  keyFeatures: string[];
  focusAreas: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface HighlightCard {
  title: string;
  description: string;
  iconName: string;
}

export interface NavItem {
  label: string;
  href: string;
}
