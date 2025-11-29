import { useTranslation } from 'next-i18next';
import { useState } from 'react';

export default function Contact() {
  const { t } = useTranslation('common');
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => setFormStatus(null), 3000);
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('contact.badge')}</span>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-description">
            {t('contact.description')}
          </p>
        </div>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h4>{t('contact.location')}</h4>
              <p>{t('contact.locationText')}</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <h4>{t('contact.email')}</h4>
              <p>{t('contact.emailText')}</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h4>{t('contact.phone')}</h4>
              <p>{t('contact.phoneText')}</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')}</label>
                <input type="text" id="name" name="name" required placeholder={t('contact.form.name')} />
              </div>
              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')}</label>
                <input type="email" id="email" name="email" required placeholder={t('contact.form.email')} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">{t('contact.form.subject')}</label>
              <input type="text" id="subject" name="subject" required placeholder={t('contact.form.subject')} />
            </div>
            <div className="form-group">
              <label htmlFor="message">{t('contact.form.message')}</label>
              <textarea id="message" name="message" rows="5" required placeholder={t('contact.form.message')}></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-submit">
              <span>{t('contact.form.submit')}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13"/>
                <polygon points="22 2 15 22 11 13 2 9 22 2"/>
              </svg>
            </button>
            {formStatus === 'success' && (
              <div style={{ marginTop: '1rem', color: '#10b981', fontWeight: 'bold', textAlign: 'center' }}>
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
