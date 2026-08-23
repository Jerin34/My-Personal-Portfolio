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
import { FEATURED_PROJECT } from '../data/projects';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section" aria-label="Featured Projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Production Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            An in-depth look at my completed full-stack application demonstrating end-to-end architecture, API design, database modeling, and AI integration.
          </p>
        </div>

        {/* Featured Project Showcase Card */}
        <div className="featured-project-container">
          <div className="featured-project-inner">
            {/* Top Meta Badges */}
            <div className="project-top-meta">
              <div className="project-badge-group">
                <span className="project-featured-badge">
                  <Sparkles size={14} />
                  <span>Primary Project</span>
                </span>
                <span className="project-status-badge">
                  <span className="status-dot" style={{ width: 6, height: 6 }} />
                  <span>{FEATURED_PROJECT.status}</span>
                </span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <h3 className="project-heading">{FEATURED_PROJECT.title}</h3>
            <p className="project-subtitle">{FEATURED_PROJECT.subtitle}</p>

            {/* Description */}
            <p className="project-description">{FEATURED_PROJECT.description}</p>

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
                    React & TypeScript
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Cpu size={18} style={{ color: '#818cf8' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Backend Server</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                    Node.js & Express REST API
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Database size={18} style={{ color: '#34d399' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Database</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                    MongoDB Persistence
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Lock size={18} style={{ color: '#f59e0b' }} />
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Auth & AI</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                    JWT + Google Gemini API
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features Breakdown */}
            <div className="project-features-title">Key Architectural Features</div>
            <div className="project-features-grid">
              {FEATURED_PROJECT.highlights.map((feature, idx) => (
                <div key={idx} className="feature-bullet-item">
                  <CheckCircle2 size={17} className="feature-bullet-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="project-tech-stack-wrap">
              <div className="tech-stack-label">Technologies Used</div>
              <div className="tech-tags-flex">
                {FEATURED_PROJECT.techStack.map((tech) => (
                  <span key={tech} className="tech-tag-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="project-action-buttons">
              <a
                href={FEATURED_PROJECT.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Open Live Demo of AI-Powered E-Commerce Application in a new tab"
              >
                <span>Live Demo</span>
                <ExternalLink size={16} />
              </a>

              <a
                href={FEATURED_PROJECT.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="View Code repository for AI-Powered E-Commerce Application on GitHub in a new tab"
              >
                <FaGithub size={17} />
                <span>View Code</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
