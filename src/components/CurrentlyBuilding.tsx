import React from 'react';
import { Hammer, Clock, ArrowUpRight } from 'lucide-react';
import { CURRENTLY_BUILDING_PROJECT } from '../data/projects';

export const CurrentlyBuilding: React.FC = () => {
  return (
    <section className="section" style={{ paddingTop: '1.5rem', paddingBottom: '3.5rem' }} aria-label="Currently Building Project">
      <div className="container">
        <div className="currently-building-card">
          <div className="building-header">
            <div className="building-badge">
              <Hammer size={14} />
              <span>{CURRENTLY_BUILDING_PROJECT.badge}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: '#fbbf24' }}>
              <Clock size={14} />
              <span>Under Active Development</span>
            </div>
          </div>

          <h3 className="building-title">{CURRENTLY_BUILDING_PROJECT.title}</h3>
          <p className="building-desc">{CURRENTLY_BUILDING_PROJECT.description}</p>

          <ul className="building-bullets">
            {CURRENTLY_BUILDING_PROJECT.focusAreas.map((item, idx) => (
              <li key={idx} className="building-bullet-item">
                <ArrowUpRight size={15} className="building-bullet-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {CURRENTLY_BUILDING_PROJECT.techStack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: '0.8rem',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(245, 158, 11, 0.08)',
                  border: '1px solid rgba(245, 158, 11, 0.25)',
                  color: '#fef3c7',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
