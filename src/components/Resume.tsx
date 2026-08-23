import React from 'react';
import { FileText, Download, Eye, CheckCircle2 } from 'lucide-react';

interface ResumeProps {
  onOpenResumeModal: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenResumeModal }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jerin_Benny_Resume.pdf';
    link.target = '_blank';
    link.click();
  };

  return (
    <section id="resume" className="section" aria-label="Resume">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'center' }}>
          <span className="section-badge">Credentials & Summary</span>
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            View, print, or download my verified resume detailing my technical skills, education, and full-stack project experience.
          </p>
        </div>

        {/* Central Resume Banner */}
        <div className="resume-card-box">
          <div className="resume-icon-circle">
            <FileText size={36} />
          </div>

          <h3 className="resume-heading">Curriculum Vitae</h3>

          <p className="resume-text">
            A comprehensive overview of my technical stack (React, Node.js, Express, MongoDB, JavaScript, TypeScript), BCA degree at MES College, and AI-Powered E-Commerce Application project.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              justifyContent: 'center',
              color: '#94a3b8',
              fontSize: '0.9rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} style={{ color: '#34d399' }} />
              <span>Full Stack & MERN</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} style={{ color: '#34d399' }} />
              <span>BCA (08/2023 – 04/2026)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} style={{ color: '#34d399' }} />
              <span>AI E-Commerce Project</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="resume-actions-group">
            <button
              type="button"
              onClick={onOpenResumeModal}
              className="btn btn-primary btn-lg"
              aria-label="View Resume in modal viewer"
            >
              <Eye size={18} />
              <span>View / Print Resume</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="btn btn-secondary btn-lg"
              aria-label="Download Resume file"
            >
              <Download size={18} />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
