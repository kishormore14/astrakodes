import { useTranslation } from 'next-i18next';
import Link from 'next/link';

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
                <li><Link href="/ai-development-services">AI Development Services</Link></li>
                <li><Link href="/saas-development">SaaS Development</Link></li>
                <li><Link href="/enterprise-software-development">Enterprise Software Development</Link></li>
                <li><Link href="/mobile-app-development">Mobile App Development</Link></li>
                <li><Link href="/iot-development">IoT Development</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{t('footer.company')}</h4>
              <ul>
                <li><Link href="/#about">{t('footer.aboutUs')}</Link></li>
                <li><Link href="/#contact">{t('footer.contact')}</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>{t('footer.connect')}</h4>
              <ul>
                <li><a href="https://www.linkedin.com/company/astrakodes" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://x.com/astrakodes" target="_blank" rel="noopener noreferrer">X</a></li>
                <li><a href="https://www.instagram.com/astrakodes" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.youtube.com/@astrakodes" target="_blank" rel="noopener noreferrer">YouTube</a></li>
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
