import { useTranslation } from 'next-i18next';

export default function About() {
  const { t } = useTranslation('common');

  const features = [
    { icon: '🎯', key: 0 },
    { icon: '⚡', key: 1 },
    { icon: '🚀', key: 2 }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <span className="section-badge">{t('about.badge')}</span>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="about-paragraph" dangerouslySetInnerHTML={{ __html: t('about.paragraph1') }}></p>
            <p className="about-paragraph">{t('about.paragraph2')}</p>
            
            <div className="about-features">
              {features.map((feature, index) => {
                const featureData = t(`about.features.${index}`, { returnObjects: true });
                return (
                  <div key={index} className="about-feature">
                    <div className="feature-icon">{feature.icon}</div>
                    <div className="feature-content">
                      <h4>{featureData.title}</h4>
                      <p>{featureData.description || featureData.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="about-visual">
            <div className="visual-card">
              <div className="visual-glow"></div>
              <div className="visual-content">
                <h3>{t('about.mission.title')}</h3>
                <p>{t('about.mission.description') || t('about.mission.desc')}</p>
              </div>
            </div>
            <div className="visual-card">
              <div className="visual-glow"></div>
              <div className="visual-content">
                <h3>{t('about.vision.title')}</h3>
                <p>{t('about.vision.description') || t('about.vision.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
