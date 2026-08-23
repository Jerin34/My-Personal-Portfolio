import React from 'react';
import {
  FolderGit2,
  FileText,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../data/projects';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Hero Introduction">
      {/* Programmer & Code Matrix Background Backdrop */}
      <div className="hero-bg-backdrop" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Column: Headline & Action Points */}
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="status-dot" aria-hidden="true" />
              <span>Available for Full Stack & MERN Roles</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="hero-name-gradient">{PERSONAL_INFO.name}</span>
            </h1>

            <p className="hero-designation">{PERSONAL_INFO.title}</p>

            <p className="hero-intro">{PERSONAL_INFO.bioIntro}</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.9rem' }}>
              <MapPin size={16} style={{ color: '#38bdf8' }} />
              <span>{PERSONAL_INFO.location}</span>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="btn btn-primary btn-lg"
              >
                <FolderGit2 size={18} />
                <span>View Projects</span>
              </a>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="btn btn-secondary btn-lg"
              >
                <FileText size={18} />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="hero-socials" aria-label="Social and Contact Profiles">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Visit Jerin Benny LinkedIn Profile (opens in new tab)"
              >
                <FaLinkedin size={18} />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="Visit Jerin Benny GitHub Profile (opens in new tab)"
              >
                <FaGithub size={18} />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="social-icon-btn"
                aria-label="Send email to Jerin Benny"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Snapshot Card */}
          <div className="hero-code-card" aria-hidden="true">
            <div className="code-header">
              <div className="code-dots">
                <span className="code-dot code-dot-red" />
                <span className="code-dot code-dot-yellow" />
                <span className="code-dot code-dot-green" />
              </div>
              <span className="code-filename">developer-profile.ts</span>
              <Sparkles size={14} style={{ color: '#38bdf8' }} />
            </div>

            <pre className="code-body">
              <code>
                <span className="code-keyword">const</span> <span className="code-var">developer</span> = &#123;{'\n'}
                {'  '}<span className="code-prop">name</span>: <span className="code-string">'{PERSONAL_INFO.name}'</span>,{'\n'}
                {'  '}<span className="code-prop">roles</span>: [{'\n'}
                {'    '}<span className="code-string">'Full Stack Developer'</span>,{'\n'}
                {'    '}<span className="code-string">'MERN Stack Developer'</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}<span className="code-prop">primaryStack</span>: &#123;{'\n'}
                {'    '}<span className="code-prop">frontend</span>: [<span className="code-string">'React'</span>, <span className="code-string">'TypeScript'</span>],{'\n'}
                {'    '}<span className="code-prop">backend</span>: [<span className="code-string">'Node.js'</span>, <span className="code-string">'Express.js'</span>],{'\n'}
                {'    '}<span className="code-prop">database</span>: <span className="code-string">'MongoDB'</span>,{'\n'}
                {'    '}<span className="code-prop">aiIntegration</span>: <span className="code-string">'Google Gemini API'</span>{'\n'}
                {'  '}&#125;,{'\n'}
                {'  '}<span className="code-prop">openForWork</span>: <span className="code-bool">true</span>{'\n'}
                &#125;;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
