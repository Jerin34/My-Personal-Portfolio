import React from 'react';
import {
  X,
  Download,
  Printer,
  Mail,
  Phone,
  MapPin,
  Globe,
  ExternalLink,
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jerin_Benny_Resume.pdf';
    link.target = '_blank';
    link.click();
  };

  const skillsList = [
    'JavaScript',
    'TypeScript',
    'Python',
    'SQL',
    'C++',
    'React.js',
    'HTML5',
    'CSS3',
    'Node.js',
    'Express.js',
    'FastAPI',
    'REST APIs',
    'MongoDB',
    'Mongoose',
    'Google Gemini',
    'LLM APIs',
    'Prompt Engineering',
    'claude',
    'Huggingface',
    'Chatgpt',
    'Git',
    'GitHub',
    'Postman',
    'JWT Authentication',
    'MVC Architecture',
    'CRUD',
    'API Integration',
    'Webhooks',
  ];

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="modal-content modal-content-resume" onClick={(e) => e.stopPropagation()}>
        {/* Modal Action Header */}
        <div className="modal-header no-print">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <h3 id="resume-modal-title" className="modal-title">
              Resume Preview
            </h3>
            <span
              style={{
                fontSize: '0.75rem',
                padding: '0.2rem 0.6rem',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(59, 130, 246, 0.15)',
                color: '#93c5fd',
                border: '1px solid rgba(59, 130, 246, 0.3)',
              }}
            >
              Print & Download Ready
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button
              type="button"
              onClick={handlePrint}
              className="btn btn-outline btn-sm"
              aria-label="Print resume"
              title="Print Resume"
            >
              <Printer size={15} />
              <span>Print</span>
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="btn btn-primary btn-sm"
              aria-label="Download resume PDF"
              title="Download PDF"
            >
              <Download size={15} />
              <span>Download PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body / Resume Document */}
        <div className="modal-body modal-body-resume">
          <div id="resume-print-sheet" className="resume-document-sheet">
            {/* Header: Name & Summary on left, Contact info on right */}
            <div className="resume-header-grid">
              <div className="resume-header-left">
                <h1 className="resume-header-name">Jerin Benny</h1>
                <p className="resume-header-summary">
                  Full Stack Developer with hands-on experience building web applications using React,
                  JavaScript, Node.js, Express.js, and MongoDB. Familiar with TypeScript and experienced in
                  developing REST APIs, authentication systems, database-driven applications, payment
                  integrations, and AI-powered features. Seeking an entry-level Full Stack Developer / Software
                  Developer role.
                </p>
              </div>

              <div className="resume-header-contacts">
                <div className="resume-contact-row">
                  <Mail size={13} className="resume-contact-icon" />
                  <a href="mailto:jerinbenny875@gmail.com" className="resume-contact-link">
                    jerinbenny875@gmail.com
                  </a>
                </div>

                <div className="resume-contact-row">
                  <Phone size={13} className="resume-contact-icon" />
                  <a href="tel:8156872980" className="resume-contact-link">
                    8156872980
                  </a>
                </div>

                <div className="resume-contact-row">
                  <MapPin size={13} className="resume-contact-icon" />
                  <span className="resume-contact-text">Malappuram, Kerala, India</span>
                </div>

                <div className="resume-contact-row">
                  <FaGithub size={13} className="resume-contact-icon" />
                  <a
                    href="https://github.com/Jerin34"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-contact-link"
                  >
                    https://github.com/Jerin34
                  </a>
                </div>

                <div className="resume-contact-row">
                  <FaLinkedin size={13} className="resume-contact-icon" />
                  <a
                    href="https://linkedin.com/in/jerin-benny-299aab343"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-contact-link"
                  >
                    https://linkedin.com/in/jerin-benny-299aab343
                  </a>
                </div>

                <div className="resume-contact-row">
                  <Globe size={13} className="resume-contact-icon" />
                  <a
                    href="https://my-personal-portfolio-one-lovat.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume-contact-link"
                  >
                    https://my-personal-portfolio-one-lovat.vercel.app
                  </a>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="resume-section-block">
              <h2 className="resume-section-heading">Skills</h2>
              <div className="resume-skills-pills-wrap">
                {skillsList.map((skill) => (
                  <span key={skill} className="resume-skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Projects Section */}
            <div className="resume-section-block">
              <h2 className="resume-section-heading">Projects</h2>
              <div className="resume-projects-list">
                {/* Project 1: AI Property Management Agent */}
                <div className="resume-project-item">
                  <div className="resume-project-item-header">
                    <a
                      href="https://ai-property-management-agent.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-project-item-title"
                    >
                      AI Property Management Agent
                    </a>
                  </div>
                  <div className="resume-project-item-stack">
                    Tech Stack: React.js, TypeScript, Node.js, Express.js, MongoDB, Mongoose, JWT, Gemini AI, Razorpay, Cloudinary
                  </div>
                  <ul className="resume-project-item-bullets">
                    <li>Built a role-based property management platform supporting Admin, Manager, Tenant, and Technician workflows.</li>
                    <li>Developed REST APIs for property management, tenant stay requests, maintenance scheduling, technician assignment, and maintenance status tracking.</li>
                    <li>Integrated Google Gemini AI to provide AI-assisted property insights and management support.</li>
                    <li>Implemented Razorpay subscription payments and webhook handling for manager subscription workflows.</li>
                    <li>Integrated Cloudinary for property image uploads and MongoDB for persistent data storage.</li>
                    <li>Deployed the backend on Render and maintained the project using Git and GitHub.</li>
                  </ul>
                </div>

                {/* Project 2: AI-Powered E-Commerce Application */}
                <div className="resume-project-item">
                  <div className="resume-project-item-header">
                    <a
                      href="https://ecommerce-web-jerin4.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-project-item-title"
                    >
                      AI-Powered E-Commerce Application
                    </a>
                    <a
                      href="https://ecommerce-web-jerin4.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-project-demo-pill"
                    >
                      <span>Demo</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <div className="resume-project-item-stack">
                    Tech Stack: React.js, Node.js, JavaScript, Express.js, MongoDB, JWT, Gemini AI
                  </div>
                  <ul className="resume-project-item-bullets">
                    <li>Developed a full-stack e-commerce application with user authentication.</li>
                    <li>Implemented product filtering, sorting, pagination, cart, and order features.</li>
                    <li>Built an admin dashboard for product management.</li>
                    <li>Developed REST APIs and integrated MongoDB for persistent data storage.</li>
                    <li>Integrated AI functionality using the Google Gemini API.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="resume-section-block" style={{ marginBottom: 0 }}>
              <h2 className="resume-section-heading">Education</h2>
              <div className="resume-education-entry">
                <div className="resume-education-top-line">
                  <span className="resume-education-degree">Bachelor of Computer Applications (BCA)</span>
                  <span className="resume-education-date">08/2023 - 04/2026</span>
                </div>
                <div className="resume-education-school">MES College of Arts and Science</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
