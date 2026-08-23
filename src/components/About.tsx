import React from 'react';
import { Layers, Server, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/projects';
import { ABOUT_HIGHLIGHTS } from '../data/skills';

const TECHNICAL_FOCUS_AREAS = [
  'Full Stack Development',
  'React and TypeScript',
  'Node.js and Express.js',
  'MongoDB',
  'REST API Development',
  'Authentication and Authorization',
  'AI Integration',
  'Problem Solving and DSA',
];

export const About: React.FC = () => {
  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers size={22} />;
      case 'Server':
        return <Server size={22} />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} />;
      case 'Sparkles':
        return <Sparkles size={22} />;
      default:
        return <Layers size={22} />;
    }
  };

  return (
    <section id="about" className="section" aria-label="About Me">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Background & Approach</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A developer who loves building robust, full-cycle web applications with clean code, scalable architecture, and user-friendly interfaces.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative & Technical Focus */}
          <div className="about-text-content">
            <p className="about-paragraph">
              {PERSONAL_INFO.aboutIntro} I enjoy bridging the gap between intuitive user interfaces and resilient backend services, ensuring applications are not just visually refined, but also secure, performant, and maintainable.
            </p>
            <p className="about-paragraph">
              My hands-on experience comes from engineering real-world applications—integrating secure JWT authentication, structuring MongoDB databases, building modular RESTful endpoints, and connecting modern AI services to deliver practical user value.
            </p>

            {/* Target Roles */}
            <div className="target-roles-box">
              <h3 className="target-roles-title">Roles I Am Targeting</h3>
              <div className="target-roles-pills">
                {PERSONAL_INFO.targetRoles.map((role) => (
                  <span key={role} className="tag tag-accent">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Focus Checkmarks */}
            <div className="target-roles-box">
              <h3 className="target-roles-title">Technical Focus Areas</h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                  gap: '0.65rem',
                }}
              >
                {TECHNICAL_FOCUS_AREAS.map((area) => (
                  <div
                    key={area}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.9rem',
                      color: '#e2e8f0',
                    }}
                  >
                    <CheckCircle2 size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 4 Highlight Cards */}
          <div className="about-highlights-grid">
            {ABOUT_HIGHLIGHTS.map((item) => (
              <div key={item.title} className="highlight-card">
                <div className="highlight-icon-box">{getHighlightIcon(item.iconName)}</div>
                <h4 className="highlight-title">{item.title}</h4>
                <p className="highlight-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
