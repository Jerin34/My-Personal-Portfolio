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
  GraduationCap,
  Wrench,
  FolderGit2,
  FileText,
  Languages,
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { PERSONAL_INFO, FEATURED_PROJECT } from '../data/projects';
import { RESUME_SKILLS } from '../data/skills';

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
            {/* Left Column (Dark Side) */}
            <aside className="resume-col-left">
              {/* Header / Name & Role */}
              <div className="resume-left-header">
                <h1 className="resume-person-name">{PERSONAL_INFO.name}</h1>
                <div className="resume-person-role">
                  <span>Full Stack Developer |</span>
                  <span>MERN Stack Developer</span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="resume-contact-list">
                <div className="resume-contact-item">
                  <Mail size={13} className="resume-contact-icon" />
                  <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>
                </div>

                <div className="resume-contact-item">
                  <Phone size={13} className="resume-contact-icon" />
                  <a href={`tel:${PERSONAL_INFO.phone}`}>{PERSONAL_INFO.phone}</a>
                </div>

                <div className="resume-contact-item">
                  <MapPin size={13} className="resume-contact-icon" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>

                <div className="resume-contact-item">
                  <FaLinkedin size={13} className="resume-contact-icon" />
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/jerin-benny-299aab343
                  </a>
                </div>

                <div className="resume-contact-item">
                  <FaGithub size={13} className="resume-contact-icon" />
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/Jerin34
                  </a>
                </div>

                <div className="resume-contact-item">
                  <Globe size={13} className="resume-contact-icon" />
                  <a
                    href={PERSONAL_INFO.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {PERSONAL_INFO.portfolioDisplay}
                  </a>
                </div>
              </div>

              {/* Summary Section */}
              <div className="resume-sidebar-section">
                <div className="resume-badge-header">
                  <FileText size={13} />
                  <span>SUMMARY</span>
                </div>
                <p className="resume-sidebar-text">{PERSONAL_INFO.bioIntro}</p>
              </div>

              {/* Languages Section */}
              <div className="resume-sidebar-section">
                <div className="resume-badge-header">
                  <Languages size={13} />
                  <span>LANGUAGES</span>
                </div>
                <ul className="resume-language-list">
                  {PERSONAL_INFO.languages.map((lang) => (
                    <li key={lang}>{lang}</li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Right Column (Light Side) */}
            <main className="resume-col-right">
              {/* Education Section */}
              <section className="resume-main-section">
                <div className="resume-badge-header-light">
                  <GraduationCap size={14} />
                  <span>EDUCATION</span>
                </div>

                <div className="resume-edu-entry">
                  <h2 className="resume-edu-degree">{PERSONAL_INFO.education.degree}</h2>
                  <div className="resume-edu-inst">{PERSONAL_INFO.education.institution}</div>
                  <div className="resume-edu-date">{PERSONAL_INFO.education.period}</div>
                  <p className="resume-edu-desc">{PERSONAL_INFO.education.description}</p>
                </div>
              </section>

              {/* Skills Section */}
              <section className="resume-main-section">
                <div className="resume-badge-header-light">
                  <Wrench size={14} />
                  <span>SKILLS</span>
                </div>

                <div className="resume-skills-list">
                  {RESUME_SKILLS.map((sk) => (
                    <div key={sk.label} className="resume-skill-row">
                      <span className="resume-skill-label">{sk.label}: </span>
                      <span className="resume-skill-value">{sk.value}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects Section */}
              <section className="resume-main-section" style={{ marginBottom: 0 }}>
                <div className="resume-badge-header-light">
                  <FolderGit2 size={14} />
                  <span>PROJECTS</span>
                </div>

                <div className="resume-project-entry">
                  <h2 className="resume-proj-title">{FEATURED_PROJECT.title}</h2>
                  <div className="resume-proj-date">{FEATURED_PROJECT.period}</div>
                  <div className="resume-proj-stack">
                    <strong>Tech Stack: </strong>
                    <span>{FEATURED_PROJECT.techStack.join(', ')}</span>
                  </div>

                  <ul className="resume-proj-bullets">
                    {FEATURED_PROJECT.highlights.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="resume-proj-demo">
                    <strong>• Live Demo: </strong>
                    <a
                      href={FEATURED_PROJECT.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-demo-link"
                    >
                      <span>ecommerce-web-jerin4.vercel.app</span>
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

