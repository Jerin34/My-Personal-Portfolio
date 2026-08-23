import type { Project, CurrentlyBuildingProject } from '../types';

export const FEATURED_PROJECT: Project = {
  id: 'ai-ecommerce-app',
  title: 'AI-Powered E-Commerce Application',
  subtitle: 'Production-Ready MERN E-Commerce Platform with Google Gemini AI Integration',
  period: '06/2026 – 07/2026',
  description:
    'A full-stack e-commerce application that provides product browsing, authentication, shopping functionality, administration features, and AI-powered functionality.',
  highlights: [
    'Developed a full-stack e-commerce application with user authentication.',
    'Implemented product filtering, sorting, pagination, cart, and order features.',
    'Built an admin dashboard for product management.',
    'Developed REST APIs and integrated MongoDB for persistent data storage.',
    'Integrated AI functionality using the Google Gemini API.',
  ],
  techStack: [
    'React.js',
    'Node.js',
    'JavaScript',
    'Express.js',
    'MongoDB',
    'JWT',
    'Gemini AI',
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
  phone: '8156872980',
  location: 'Malappuram, Kerala, India.',
  email: 'jerinbenny875@gmail.com',
  github: 'https://github.com/Jerin34',
  linkedin: 'https://linkedin.com/in/jerin-benny-299aab343',
  portfolioUrl: 'https://my-personal-portfolio-one-lovat.vercel.app',
  portfolioDisplay: 'my-personal-portfolio-one-lovat.vercel.app',
  bioIntro:
    'Full Stack Developer with hands-on experience building web applications using React, JavaScript, Node.js, Express.js, and MongoDB. Familiar with TypeScript and experienced in developing REST APIs, authentication systems, database-driven applications, and AI-integrated features. Seeking an entry-level Full Stack Developer / Software Developer role.',
  aboutIntro:
    'I am a Full Stack Developer focused on building complete web applications from responsive frontend interfaces to backend APIs and database systems.',
  languages: ['English', 'Hindi', 'Malayalam'],
  education: {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'MES College of Arts and Science',
    period: '08/2023 – 04/2026 | Calicut',
    description:
      'Focused on software development, web technologies, programming, data structures and algorithms, and database systems.',
  },
  targetRoles: [
    'Full Stack Developer',
    'MERN Stack Developer',
    'Frontend Developer',
    'React Developer',
    'Backend Developer',
    'Junior Software Developer',
  ],
};
