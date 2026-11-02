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
  subtitle:
    'Production MERN & Gemini AI Platform for Real-Time Property Operations, Maintenance & Subscriptions',
  period: '10/2026 – 11/2026',
  status: 'Completed & Deployed',
  badge: 'Production Project',
  description:
    'An AI-powered full-stack property management platform built with React, Node.js, Express, TypeScript, MongoDB, and Google Gemini AI. It streamlines property maintenance operations, tenant stay requests, technician assignments, automated diagnostic workflows, and subscription billing via Razorpay.',
  keyFeatures: [
    'Built automated maintenance request triage, issue severity classification, and property health analytics using the Google Gemini AI API.',
    'Architected role-based access control (RBAC) with dedicated portals for Administrators, Property Managers, Tenants, and Technicians.',
    'Engineered end-to-end maintenance operations including technician assignment, scheduling, SLA monitoring, and automated escalation workflows.',
    'Integrated Razorpay recurring subscriptions with secure webhook signature verification to synchronize manager plan status.',
    'Integrated Cloudinary for property photo uploads, location browsing with Google Maps, and tenant stay request tracking.',
    'Hardened security and performance with JWT authentication, bcrypt password hashing, Zod validation, Helmet, CORS, and node-cron background jobs.',
  ],
  focusAreas: [
    'Built automated maintenance request triage, issue severity classification, and property health analytics using the Google Gemini AI API.',
    'Architected role-based access control (RBAC) with dedicated portals for Administrators, Property Managers, Tenants, and Technicians.',
    'Engineered end-to-end maintenance operations including technician assignment, scheduling, SLA monitoring, and automated escalation workflows.',
    'Integrated Razorpay recurring subscriptions with secure webhook signature verification to synchronize manager plan status.',
    'Integrated Cloudinary for property photo uploads, location browsing with Google Maps, and tenant stay request tracking.',
    'Hardened security and performance with JWT authentication, bcrypt password hashing, Zod validation, Helmet, CORS, and node-cron background jobs.',
  ],
  techStack: [
    'React.js',
    'TypeScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'Google Gemini AI',
    'Razorpay',
    'Cloudinary',
    'JWT',
    'Zod',
    'Vite',
  ],
  liveUrl: 'https://ai-property-management-agent.vercel.app/',
  githubUrl: 'https://github.com/Jerin34/ai-property-management-Agent',
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
