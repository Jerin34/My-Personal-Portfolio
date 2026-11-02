import React from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Cpu,
  Database,
  Lock,
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { CURRENTLY_BUILDING_PROJECT } from '../data/projects';

export const CurrentlyBuilding: React.FC = () => {
  return (
    <section
      className="section"
      style={{ paddingTop: '1.5rem', paddingBottom: '3.5rem' }}
      aria-label="AI Property Management Agent Project"
    >
      <div className="container">
        <div className="currently-building-card">
          {/* Top Meta Badges & Period */}
          <div className="building-header">
            <div className="project-badge-group">
              <span
                className="project-featured-badge"
                style={{
                  background: 'rgba(99, 102, 241, 0.15)',
                  borderColor: 'rgba(99, 102, 241, 0.35)',
                  color: '#a5b4fc',
                }}
              >
                <Sparkles size={14} />
                <span>Featured Project</span>
              </span>
              <span className="project-status-badge">
                <span className="status-dot" style={{ width: 6, height: 6 }} />
                <span>{CURRENTLY_BUILDING_PROJECT.status}</span>
              </span>
            </div>
            {CURRENTLY_BUILDING_PROJECT.period && (
              <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 500 }}>
                {CURRENTLY_BUILDING_PROJECT.period}
              </span>
            )}
          </div>

          {/* Title & Subtitle */}
          <h3
            className="project-heading"
            style={{ fontSize: '1.85rem', marginTop: '0.5rem', marginBottom: '0.4rem' }}
          >
            {CURRENTLY_BUILDING_PROJECT.title}
          </h3>
          {CURRENTLY_BUILDING_PROJECT.subtitle && (
            <p className="project-subtitle" style={{ marginBottom: '1.25rem' }}>
              {CURRENTLY_BUILDING_PROJECT.subtitle}
            </p>
          )}

          {/* Description */}
          <p className="project-description" style={{ marginBottom: '1.75rem' }}>
            {CURRENTLY_BUILDING_PROJECT.description}
          </p>

          {/* Architecture Highlights Mini Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
              padding: '1.25rem',
              background: 'rgba(15, 23, 42, 0.65)',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Layers size={18} style={{ color: '#38bdf8' }} />
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Frontend</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                  React 19 & TypeScript
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Cpu size={18} style={{ color: '#818cf8' }} />
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Backend Server</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                  Node.js & Express 5 API
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Database size={18} style={{ color: '#34d399' }} />
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Database</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                  MongoDB & Mongoose
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Lock size={18} style={{ color: '#f59e0b' }} />
              <div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>AI & Payments</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                  Gemini AI + Razorpay
                </div>
              </div>
            </div>
          </div>

          {/* Key Architectural Features */}
          <div className="project-features-title">Key Architectural Features</div>
          <div className="project-features-grid" style={{ marginBottom: '1.75rem' }}>
            {CURRENTLY_BUILDING_PROJECT.keyFeatures.map((feature, idx) => (
              <div key={idx} className="feature-bullet-item">
                <CheckCircle2 size={17} className="feature-bullet-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="project-tech-stack-wrap" style={{ marginBottom: '1.75rem' }}>
            <div className="tech-stack-label">Technologies Used</div>
            <div className="tech-tags-flex">
              {CURRENTLY_BUILDING_PROJECT.techStack.map((tech) => (
                <span key={tech} className="tech-tag-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="project-action-buttons">
            {CURRENTLY_BUILDING_PROJECT.liveUrl && (
              <a
                href={CURRENTLY_BUILDING_PROJECT.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Open Live Demo of AI Property Management Agent in a new tab"
              >
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </a>
            )}
            {CURRENTLY_BUILDING_PROJECT.githubUrl && (
              <a
                href={CURRENTLY_BUILDING_PROJECT.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="View Code repository for AI Property Management Agent on GitHub in a new tab"
              >
                <FaGithub size={17} />
                <span>View Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
