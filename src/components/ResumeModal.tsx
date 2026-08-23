import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { PERSONAL_INFO, FEATURED_PROJECT } from '../data/projects';
import { SKILL_CATEGORIES } from '../data/skills';

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
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <h3 id="resume-modal-title" className="modal-title">Resume Overview</h3>
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
              Full Stack / MERN
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
              <span>Download</span>
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

        {/* Modal Body / Interactive Resume Document Sheet */}
        <div className="modal-body">
          <div className="resume-preview-sheet">
            {/* Header */}
            <div className="resume-sheet-header">
              <h1 className="resume-sheet-name">{PERSONAL_INFO.name}</h1>
              <div className="resume-sheet-title">{PERSONAL_INFO.title}</div>
              <div className="resume-sheet-contact">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={14} />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Mail size={14} />
                  <a href={`mailto:${PERSONAL_INFO.email}`} style={{ color: '#38bdf8' }}>
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <FaLinkedin size={14} />
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8' }}>
                    LinkedIn Profile
                  </a>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <FaGithub size={14} />
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" style={{ color: '#38bdf8' }}>
                    github.com/Jerin34
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="resume-section-block">
              <h2 className="resume-section-heading">Professional Summary</h2>
              <p className="resume-section-content">{PERSONAL_INFO.bioIntro}</p>
            </div>

            {/* Technical Skills */}
            <div className="resume-section-block">
              <h2 className="resume-section-heading">Technical Skills</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.9rem' }}>
                {SKILL_CATEGORIES.map((cat) => (
                  <div key={cat.title}>
                    <strong style={{ color: '#f8fafc' }}>{cat.title}: </strong>
                    <span style={{ color: '#cbd5e1' }}>{cat.skills.join(', ')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Project */}
            <div className="resume-section-block">
              <h2 className="resume-section-heading">Featured Full Stack Project</h2>
              <div style={{ marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '1.05rem', color: '#f8fafc' }}>{FEATURED_PROJECT.title}</strong>
                  <span style={{ fontSize: '0.82rem', color: '#34d399' }}>Live & Open Source</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', margin: '0.2rem 0' }}>
                  Stack: {FEATURED_PROJECT.techStack.join(' | ')}
                </div>
                <div style={{ display: 'flex', gap: '1rem', margin: '0.4rem 0', fontSize: '0.82rem' }}>
                  <a
                    href={FEATURED_PROJECT.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={12} />
                  </a>
                  <a
                    href={FEATURED_PROJECT.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                  >
                    <span>Source Code</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
              <ul style={{ paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                {FEATURED_PROJECT.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Target Roles */}
            <div className="resume-section-block" style={{ marginBottom: 0 }}>
              <h2 className="resume-section-heading">Target Roles</h2>
              <p className="resume-section-content">
                {PERSONAL_INFO.targetRoles.join(' • ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
