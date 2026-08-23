import type { Project, CurrentlyBuildingProject } from '../types';

export const FEATURED_PROJECT: Project = {
  id: 'ai-ecommerce-app',
  title: 'AI-Powered E-Commerce Application',
  subtitle: 'Production-Ready MERN E-Commerce Platform with Google Gemini AI Integration',
  description:
    'A full-stack e-commerce application that provides product browsing, authentication, shopping functionality, administration features, and AI-powered functionality.',
  highlights: [
    'User authentication and authorization with secure JWT & bcrypt encryption',
    'Dynamic product browsing with multi-criteria filtering, sorting, and pagination',
    'Complete shopping cart workflow with real-time state management and order checkout flow',
    'Comprehensive Admin Dashboard for full CRUD product management and inventory control',
    'Scalable REST API backend built on Node.js/Express with schema-enforced MongoDB persistence',
    'Intelligent product recommendations and assistant powered by Google Gemini API integration',
  ],
  techStack: [
    'React.js',
    'TypeScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JWT',
    'Google Gemini AI',
  ],
  githubUrl: 'https://github.com/Jerin34',
  liveUrl: 'https://ecommerce-web-jerin4.vercel.app',
  isFeatured: true,
  status: 'Completed & Deployed',
};

export const CURRENTLY_BUILDING_PROJECT: CurrentlyBuildingProject = {
  id: 'ai-property-agent',
  title: 'AI Property Management Agent',
  badge: 'Currently Building',
  description:
    'Currently building an AI-powered full-stack platform for managing property maintenance requests and improving maintenance issue processing.',
  focusAreas: [
    'Automated maintenance request triaging and issue severity classification',
    'Tenant-to-manager communication channels with structured request workflows',
    'AI-assisted troubleshooting assistance for common property maintenance issues',
  ],
  techStack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AI Workflows'],
};

export const PERSONAL_INFO = {
  name: 'Jerin Benny',
  title: 'Full Stack Developer | MERN Stack Developer',
  location: 'Kerala, India',
  email: 'jerinbenny875@gmail.com',
  github: 'https://github.com/Jerin34',
  linkedin: 'https://linkedin.com/in/jerin-benny-299aab343',
  bioIntro:
    'I build modern full-stack web applications using React, TypeScript, Node.js, Express.js, and MongoDB. I have hands-on experience developing REST APIs, authentication systems, database-driven applications, and AI-powered features.',
  aboutIntro:
    'I am a Full Stack Developer focused on building complete web applications from responsive frontend interfaces to backend APIs and database systems.',
  targetRoles: [
    'Full Stack Developer',
    'MERN Stack Developer',
    'Frontend Developer',
    'React Developer',
    'Backend Developer',
    'Junior Software Developer',
  ],
};
