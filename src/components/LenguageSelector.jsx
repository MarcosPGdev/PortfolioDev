import { useTranslation } from 'react-i18next';
import { Icon } from '@iconify/react';
import { useState, useRef, useEffect } from 'react';

const languages = [
  { code: 'es', name: 'ESP', icon: 'cif:es' },
  { code: 'en', name: 'ENG', icon: 'flagpack:gb-ukm' },
  { code: 'ca', name: 'CAT', icon: 'flag:es-ct-4x3' }
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const current = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.code);
    setOpen(false);
  };

  // Cierra si se hace click fuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative z-50">
      {/* Botón */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center cursor-pointer gap-2 bg-zinc-800 text-white px-3 py-2 rounded-md border border-white/10 hover:border-white/30 transition"
      >
        <Icon icon={current.icon} className="w-5 h-5" />
        {current.name}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-[0%] mt-2 w-32 bg-zinc-900 border border-white/10 rounded-md shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang)}
              className={`flex items-center gap-2 cursor-pointer px-4 py-2 w-full text-sm text-white hover:bg-primary/20 transition`}
            >
              <Icon icon={lang.icon} className="w-5 h-5" />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
