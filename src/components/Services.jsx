import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import CircuitPattern from './CircuitPattern';

export default function Services() {
  const { t } = useTranslation('common');

  const services = [
    {
      key: 'automation',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6M23 12h-6m-6 0H1"/>
          <circle cx="12" cy="5" r="1.5"/>
          <circle cx="12" cy="19" r="1.5"/>
          <circle cx="5" cy="12" r="1.5"/>
          <circle cx="19" cy="12" r="1.5"/>
          <path d="M16.24 7.76l-1.41 1.41m-5.66 5.66l-1.41 1.41m8.48 0l-1.41-1.41m-5.66-5.66l-1.41-1.41"/>
        </svg>
      )
    },
    {
      key: 'ai',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/>
          <path d="M12 6v12M6 12h12"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <circle cx="8" cy="8" r="1" fill="currentColor"/>
          <circle cx="16" cy="8" r="1" fill="currentColor"/>
          <circle cx="8" cy="16" r="1" fill="currentColor"/>
          <circle cx="16" cy="16" r="1" fill="currentColor"/>
          <path d="M8 8l8 8M16 8l-8 8" strokeWidth="0.5" opacity="0.5"/>
        </svg>
      )
    },
    {
      key: 'web',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8M12 17v4"/>
          <path d="M7 7h10M7 11h6"/>
          <circle cx="18" cy="8" r="1" fill="currentColor"/>
        </svg>
      )
    },
    {
      key: 'software',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
          <line x1="12" y1="2" x2="12" y2="22" strokeWidth="1" opacity="0.3"/>
        </svg>
      )
    }
  ];
  const serviceLinks = {
    automation: '/enterprise-software-development',
    ai: '/ai-development-services',
    web: '/saas-development',
    software: '/mobile-app-development',
  };

  return (
    <section id="services" className="services">
      <CircuitPattern />
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('services.badge')}</span>
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-description">
            {t('services.description')}
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.key} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{t(`services.${service.key}.title`)}</h3>
              <p className="service-description">
                {t(`services.${service.key}.description`)}
              </p>
              <ul className="service-features">
                {(t(`services.${service.key}.features`, { returnObjects: true }) || []).map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link href={serviceLinks[service.key]} className="service-link">Explore service page</Link>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
