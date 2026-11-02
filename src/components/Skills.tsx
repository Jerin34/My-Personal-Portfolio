import React from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Boxes,
  Sparkles,
  BrainCircuit,
  CreditCard,
  GraduationCap,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming Languages':
      case 'Languages':
        return <Code2 size={20} />;
      case 'Frontend Development':
      case 'Frontend':
        return <Layout size={20} />;
      case 'Backend Development':
      case 'Backend':
        return <Server size={20} />;
      case 'Database Management':
      case 'Database':
        return <Database size={20} />;
      case 'Artificial Intelligence & Generative AI':
      case 'AI & Generative AI':
      case 'AI Tools & Automation':
        return <Sparkles size={20} />;
      case 'AI Engineering (Currently Learning)':
      case 'AI Engineering':
        return <BrainCircuit size={20} />;
      case 'Payment Gateway & Integrations':
        return <CreditCard size={20} />;
      case 'Developer Tools & DevOps':
      case 'Tools':
        return <Wrench size={20} />;
      case 'Computer Science Fundamentals':
      case 'Concepts':
        return <GraduationCap size={20} />;
      default:
        return <Boxes size={20} />;
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
            Core technologies, libraries, architectural patterns, and specialized competencies I use to develop robust, scalable full-stack applications.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="skills-grid">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.title}
              className={`skill-category-card ${category.isLearning ? 'skill-card-learning' : ''}`}
            >
              <div className="skill-card-header">
                <div className="skill-category-icon">{getCategoryIcon(category.title)}</div>
                <h3 className="skill-card-title">
                  {category.title.replace(' (Currently Learning)', '')}
                </h3>
                {category.badge && (
                  <span className="skill-learning-badge">
                    {category.badge}
                  </span>
                )}
              </div>
              <p className="skill-card-desc">{category.description}</p>

              <div className="skill-pills-wrap">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-pill ${category.isLearning ? 'skill-pill-learning' : ''}`}
                  >
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
