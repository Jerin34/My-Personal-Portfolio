import type { SkillCategory } from '../types';

export const RESUME_SKILLS = [
  { label: 'Languages', value: 'JavaScript, TypeScript, Python, SQL' },
  { label: 'Frontend', value: 'React.js, HTML5, CSS3' },
  { label: 'Backend', value: 'Node.js, Express.js, REST APIs' },
  { label: 'Database', value: 'MongoDB' },
  { label: 'Tools', value: 'Git, GitHub, Postman' },
  { label: 'Concepts', value: 'JWT Authentication, MVC Architecture, CRUD, API Integration' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core programming and querying languages used for full-stack engineering and algorithmic problem solving.',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++', 'SQL'],
  },
  {
    title: 'Frontend Development',
    description: 'Building responsive, accessible, and high-performance user interfaces and component systems.',
    skills: [
      'HTML5',
      'CSS3',
      'React.js',
      'React Router',
      'Bootstrap',
      'Axios',
      'Responsive Web Design',
      'React Hooks',
      'Component-Based Architecture',
      'State Management',
    ],
  },
  {
    title: 'Backend Development',
    description: 'Developing scalable servers, secure endpoints, robust middleware, and modular backend architecture.',
    skills: [
      'Node.js',
      'Express.js',
      'FastAPI',
      'RESTful API Development',
      'MVC Architecture',
      'JWT Authentication',
      'Role-Based Access Control (RBAC)',
      'Middleware Development',
      'Error Handling',
      'Asynchronous Programming',
      'API Security Fundamentals',
    ],
  },
  {
    title: 'Database Management',
    description: 'Relational & NoSQL schema design, data persistence, aggregation pipelines, and modeling.',
    skills: [
      'MongoDB',
      'Mongoose',
      'MongoDB Atlas',
      'SQLite',
      'Database Schema Design',
      'CRUD Operations',
      'Data Modeling',
      'Database Aggregation',
    ],
  },
  {
    title: 'Artificial Intelligence & Generative AI',
    description: 'Applying generative AI, LLM integration, prompt engineering, and intelligent automation workflows.',
    skills: [
      'Artificial Intelligence Fundamentals',
      'Machine Learning Fundamentals',
      'Generative AI',
      'Large Language Models (LLMs)',
      'Prompt Engineering',
      'AI-Assisted Software Development',
      'AI-Powered Productivity',
      'AI for Research and Problem Solving',
      'Google Gemini API Integration',
    ],
  },
  {
    title: 'AI Engineering (Currently Learning)',
    badge: 'Currently Learning',
    isLearning: true,
    description: 'Active exploration of autonomous agent architectures, RAG systems, and next-generation AI workflows.',
    skills: [
      'LangChain',
      'LangGraph',
      'Retrieval-Augmented Generation (RAG)',
      'Vector Databases',
      'Model Context Protocol (MCP)',
      'Agentic AI Workflows',
      'AI Evaluation and Observability',
    ],
  },
  {
    title: 'Payment Gateway & Integrations',
    description: 'End-to-end payment workflows, recurring subscriptions, webhook security, and external services.',
    skills: [
      'Razorpay Integration',
      'Payment Gateway Integration',
      'Subscription Management',
      'Webhook Integration',
      'Webhook Signature Verification',
      'Third-Party API Integration',
    ],
  },
  {
    title: 'Developer Tools & DevOps',
    description: 'Version control, Linux environments, API debugging, local development tools, and workflows.',
    skills: [
      'Git',
      'GitHub',
      'Postman',
      'Linux',
      'Ubuntu',
      'Kali Linux',
      'WSL',
      'Visual Studio Code',
      'MongoDB Compass',
      'ngrok',
    ],
  },
  {
    title: 'Computer Science Fundamentals',
    description: 'Foundational computing principles, algorithmic problem solving, systems, and networking.',
    skills: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Problem Solving',
      'Database Management Systems',
      'Operating Systems Fundamentals',
      'Computer Networks Fundamentals',
    ],
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
