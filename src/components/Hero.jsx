import { useTranslation } from 'next-i18next';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const { t } = useTranslation('common');
  const heroRef = useRef(null);

  useEffect(() => {
    // Parallax effect for weapons
    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

      const weapons = document.querySelectorAll('.weapon');
      weapons.forEach((weapon, index) => {
        const speed = (index + 1) * 10;
        weapon.style.transform = `translate(${mouseX * speed}px, ${mouseY * speed}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (!servicesSection) return;

    const offsetTop = servicesSection.offsetTop - 80;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">AI</span>
            <span>{t('hero.badge')}</span>
          </div>
          <h1 className="hero-title">
            AI-Driven Software Development Company
            <br />
            <span className="gradient-text">for Startups and Enterprises</span>
          </h1>
          <p className="hero-description">
            {t('hero.description')}
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">{t('hero.btnPrimary')}</a>
            <a href="#contact" className="btn btn-secondary">{t('hero.btnSecondary')}</a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">100+</div>
              <div className="stat-label">{t('hero.stats.projects')}</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">{t('hero.stats.clients')}</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">{t('hero.stats.support')}</div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" className="hero-scroll" onClick={handleScrollToServices} aria-label="Scroll to services section">
        <span>{t('hero.scrollText')}</span>
        <div className="scroll-indicator"></div>
      </button>
    </section>
  );
}
