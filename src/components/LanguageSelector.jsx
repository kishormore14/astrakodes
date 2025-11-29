import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';

export default function LanguageSelector() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
    { code: 'es', label: 'Español', flag: '🇪🇸' }
  ];

  const currentLang = languages.find(l => l.code === router.locale) || languages[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (langCode) => {
    router.push(router.pathname, router.asPath, { locale: langCode });
    setIsOpen(false);
  };

  return (
    <div className="language-selector" ref={dropdownRef}>
      <button 
        className="language-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select language"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span>{currentLang.code.toUpperCase()}</span>
      </button>
      <div className={`language-dropdown ${isOpen ? 'active' : ''}`}>
        {languages.map((lang) => (
          <button
            key={lang.code}
            className={`lang-option ${router.locale === lang.code ? 'active' : ''}`}
            onClick={() => changeLanguage(lang.code)}
          >
            <span className="lang-flag">{lang.flag}</span>
            <span>{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
