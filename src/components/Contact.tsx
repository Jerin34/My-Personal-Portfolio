import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  Send,
  Sparkles,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../data/projects';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copied, setCopied] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'info' | 'error';
    text: string;
  } | null>(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatusMessage({
        type: 'error',
        text: 'Please correct the errors in the form before submitting.',
      });
      return;
    }

    const emailSubject = encodeURIComponent(
      formData.subject.trim()
        ? `[Portfolio Inquiry] ${formData.subject}`
        : `Portfolio Inquiry from ${formData.name}`
    );
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoUrl;

    setStatusMessage({
      type: 'success',
      text: 'Opening your email client to send your message directly to Jerin Benny.',
    });

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1500);
  };

  return (
    <section id="contact" className="section" aria-label="Contact Section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            I am currently open to entry-level and junior software development opportunities. Feel free to reach out for opportunities or collaborations.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Links & Channels */}
          <div className="contact-info-col">
            <div className="contact-direct-card">
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc' }}>
                Direct Contact
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6 }}>
                Have an open position or want to discuss a project? You can reach me directly via email or connect with me on LinkedIn and GitHub.
              </p>

              {/* Email Row with Copy Button */}
              <div className="direct-email-row">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', overflow: 'hidden' }}>
                  <Mail size={18} style={{ color: '#38bdf8', flexShrink: 0 }} />
                  <span className="direct-email-text">{PERSONAL_INFO.email}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="copy-btn"
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Social Channels */}
              <div className="contact-social-links">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-row"
                  aria-label="LinkedIn Profile (opens in new tab)"
                >
                  <FaLinkedin size={18} style={{ color: '#0ea5e9' }} />
                  <span>Connect on LinkedIn</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-row"
                  aria-label="GitHub Profile (opens in new tab)"
                >
                  <FaGithub size={18} style={{ color: '#e2e8f0' }} />
                  <span>Explore GitHub Repositories</span>
                </a>
              </div>
            </div>

            {/* Quick Status Pill Box */}
            <div
              style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}
            >
              <Sparkles size={20} style={{ color: '#38bdf8', flexShrink: 0 }} />
              <div style={{ fontSize: '0.88rem', color: '#cbd5e1' }}>
                Quick response guaranteed within <strong>24 hours</strong> for recruitment inquiries.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', marginBottom: '1.25rem' }}>
              Send a Message
            </h3>

            {statusMessage && (
              <div
                className={`form-alert ${
                  statusMessage.type === 'success'
                    ? 'form-alert-success'
                    : 'form-alert-error'
                }`}
                role="alert"
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 size={18} />
                ) : (
                  <AlertCircle size={18} />
                )}
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <span id="name-error" className="form-error-msg">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="form-input"
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span id="email-error" className="form-error-msg">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  Subject (Optional)
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Full Stack Developer Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Write your message or inquiry here..."
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: undefined });
                  }}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <span id="message-error" className="form-error-msg">
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
