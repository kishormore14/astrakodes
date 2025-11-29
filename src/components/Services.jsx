import { useTranslation } from 'next-i18next';

export default function Services() {
  const { t } = useTranslation('common');

  const services = [
    {
      key: 'automation',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      key: 'ai',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
          <path d="M16.24 7.76l-2.12 2.12"/>
        </svg>
      )
    },
    {
      key: 'web',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8"/>
          <path d="M12 17v4"/>
        </svg>
      )
    },
    {
      key: 'software',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="services">
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
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
