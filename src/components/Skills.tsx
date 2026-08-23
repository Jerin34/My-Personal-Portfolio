import React from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Boxes,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Languages':
        return <Code2 size={20} />;
      case 'Frontend':
        return <Layout size={20} />;
      case 'Backend':
        return <Server size={20} />;
      case 'Database':
        return <Database size={20} />;
      case 'AI Tools & Automation':
      case 'AI & Automation':
        return <Sparkles size={20} />;
      case 'Tools':
        return <Wrench size={20} />;
      case 'Concepts':
        return <Boxes size={20} />;
      default:
        return <Code2 size={20} />;
    }
  };

  return (
    <section id="skills" className="section" aria-label="Technical Skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Toolkit & Proficiencies</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Core technologies, libraries, and design patterns I use to develop robust, scalable full-stack applications.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.title} className="skill-category-card">
              <div className="skill-card-header">
                <div className="skill-category-icon">{getCategoryIcon(category.title)}</div>
                <h3 className="skill-card-title">{category.title}</h3>
              </div>
              <p className="skill-card-desc">{category.description}</p>

              <div className="skill-pills-wrap">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
