export interface Skill {
  name: string;
  icon?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
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
  badge: string;
  description: string;
  focusAreas: string[];
  techStack: string[];
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
