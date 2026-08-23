import React from 'react';
import { FileText, Download, Eye, CheckCircle2 } from 'lucide-react';

interface ResumeProps {
  onOpenResumeModal: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenResumeModal }) => {
  const handleDownload = () => {
    // Attempt download of static PDF or open structured viewer
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
            View or download my resume to learn more about my skills, education, and project experience.
          </p>
        </div>

        {/* Central Resume Banner */}
        <div className="resume-card-box">
          <div className="resume-icon-circle">
            <FileText size={36} />
          </div>

          <h3 className="resume-heading">Curriculum Vitae</h3>

          <p className="resume-text">
            A comprehensive overview of my technical stack, architecture capabilities, hands-on e-commerce platform implementation, and problem-solving background.
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
              <span>Full Stack Focus</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} style={{ color: '#34d399' }} />
              <span>MERN & TypeScript</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <CheckCircle2 size={16} style={{ color: '#34d399' }} />
              <span>Verified GitHub Projects</span>
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
              <span>View Resume</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="btn btn-secondary btn-lg"
              aria-label="Download Resume file"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </button>
          </div>

          <div className="resume-tip">
            <span>Tip: You can replace <code>public/resume.pdf</code> anytime with your updated PDF file.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
