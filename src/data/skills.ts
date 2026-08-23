import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    description: 'Core programming and querying languages used for full-stack engineering.',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    description: 'Building responsive, accessible, and high-performance user interfaces.',
    skills: ['React.js', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    title: 'Backend',
    description: 'Developing scalable servers, routing architecture, and secure endpoints.',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database',
    description: 'Schema modeling, indexing, and data persistence layers.',
    skills: ['MongoDB'],
  },
  {
    title: 'AI Tools & Automation',
    description: 'Generative AI integration, intelligent prompt workflows, and automated process systems.',
    skills: ['Google Gemini API', 'Prompt Engineering', 'AI API Integration', 'Automation Anywhere'],
  },
  {
    title: 'Tools',
    description: 'Version control, collaboration, API debugging, and development workflows.',
    skills: ['Git', 'GitHub', 'Postman', 'Make.com'],
  },
  {
    title: 'Concepts',
    description: 'Software architecture patterns, security standards, and full-cycle data flows.',
    skills: ['OOPs', 'JWT Authentication', 'MVC Architecture', 'CRUD Operations', 'API Integration'],
  },
];

export const ABOUT_HIGHLIGHTS = [
  {
    title: 'Full Stack Development',
    description: 'Architecting end-to-end web applications with clean separation between UI, server, and database.',
    iconName: 'Layers',
  },
  {
    title: 'REST APIs',
    description: 'Designing structured, predictable, and secure RESTful endpoints with robust error handling.',
    iconName: 'Server',
  },
  {
    title: 'Authentication & Security',
    description: 'Implementing token-based authentication (JWT), password hashing, and role-based access control.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'AI Integration',
    description: 'Enhancing full-stack applications with AI models and intelligent capabilities via modern APIs.',
    iconName: 'Sparkles',
  },
];
