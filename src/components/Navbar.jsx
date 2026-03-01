import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const getSectionHref = (id) => (isHomePage ? `#${id}` : `/#${id}`);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="logo">
            <Link href="/" aria-label="AstraKodes Home">
              <span className="logo-astra">Astra</span><span className="logo-kodes">Kodes</span>
            </Link>
          </div>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li>
              <a href={getSectionHref('home')} onClick={(e) => isHomePage && scrollToSection(e, 'home')} className="nav-link">
                {t('nav.home')}
              </a>
            </li>
            <li>
              <a href={getSectionHref('services')} onClick={(e) => isHomePage && scrollToSection(e, 'services')} className="nav-link">
                {t('nav.services')}
              </a>
            </li>
            <li>
              <a href={getSectionHref('about')} onClick={(e) => isHomePage && scrollToSection(e, 'about')} className="nav-link">
                {t('nav.about')}
              </a>
            </li>
            <li>
              <a href={getSectionHref('contact')} onClick={(e) => isHomePage && scrollToSection(e, 'contact')} className="nav-link">
                {t('nav.contact')}
              </a>
            </li>
            <li><Link href="/blog" className="nav-link">Blog</Link></li>
          </ul>

          <div className="nav-controls">
            <LanguageSelector />
            <ThemeToggle />
            <button
              className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
