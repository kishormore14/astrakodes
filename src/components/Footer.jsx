import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t } = useTranslation('common');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-astra">Astra</span><span className="logo-kodes">Kodes</span>
            </div>
            <p>{t('footer.tagline')}</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>{t('footer.services')}</h4>
              <ul>
                <li><a href="#services">{t('services.automation.title')}</a></li>
                <li><a href="#services">{t('services.ai.title')}</a></li>
                <li><a href="#services">{t('services.web.title')}</a></li>
                <li><a href="#services">{t('services.software.title')}</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{t('footer.company')}</h4>
              <ul>
                <li><a href="#about">{t('footer.aboutUs')}</a></li>
                <li><a href="#contact">{t('footer.contact')}</a></li>
                <li><a href="#services">{t('footer.ourWork')}</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{t('footer.connect')}</h4>
              <ul>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
