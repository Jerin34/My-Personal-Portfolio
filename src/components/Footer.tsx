import React from 'react';
import { Terminal, Mail, ArrowUp } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../data/projects';

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.substring(1));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer-wrapper" aria-label="Page Footer">
      <div className="container">
        <div className="footer-content-grid">
          {/* Brand & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <Terminal size={20} style={{ color: '#38bdf8' }} />
              <h2 className="footer-brand-title" style={{ margin: 0 }}>{PERSONAL_INFO.name}</h2>
            </div>
            <p className="footer-brand-subtitle">
              {PERSONAL_INFO.title} • {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav aria-label="Footer Navigation">
            <ul className="footer-nav-list">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="footer-nav-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Profiles */}
          <div className="footer-social-icons">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Jerin Benny LinkedIn Profile (opens in new tab)"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Jerin Benny GitHub Profile (opens in new tab)"
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

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="footer-bottom-bar">
          <div>© 2026 {PERSONAL_INFO.name}. All rights reserved.</div>
          <button
            type="button"
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#94a3b8',
              fontSize: '0.85rem',
              fontWeight: 500,
              transition: 'color 150ms ease',
            }}
            aria-label="Scroll back to top of the page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};
