import { Link, useLocation } from "react-router";
import { Home, Image, Calendar, Info, Languages } from "lucide-react";
import { RwandaSunLogo } from "@/app/components/RwandaSunLogo";
import { useLanguage, Language } from "@/app/context/LanguageContext";
import { translations } from "@/app/translations";
import { useState } from "react";

export function Navigation() {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const t = translations[language];

  const navLinks = [
    { path: "/", label: t.nav.home, icon: Home },
    { path: "/timeline", label: t.nav.timeline, icon: Calendar },
    { path: "/gallery", label: t.nav.gallery, icon: Image },
    { path: "/about", label: t.nav.about, icon: Info },
  ];

  const languageOptions: { code: Language; flag: string }[] = [
    { code: 'en', flag: '🇬🇧' },
    { code: 'rw', flag: '🇷🇼' },
    { code: 'fr', flag: '🇫🇷' }
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <RwandaSunLogo className="w-10 h-10" />
            <div className="text-xl">
              <span className="text-[#00A1DE]">Rwan</span>
              <span className="text-[#FAD201]"></span>
              <span className="text-[yellow]">dan His</span>
              <span className="text-[#00A1DE]"></span>
              <span className="text-[green]">tory</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">
                    {link.label}
                  </span>
                </Link>
              );
            })}
            
            {/* Language Switcher */}
            <div className="relative ml-2">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all shadow-md hover:shadow-lg"
              >
                <Languages className="w-5 h-5" />
                <span className="hidden sm:inline text-sm">
                  {languageOptions.find(l => l.code === language)?.flag}
                </span>
              </button>
              
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden z-50">
                  {languageOptions.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setShowLanguageMenu(false);
                      }}
                      className={`w-full px-4 py-3 text-left hover:bg-slate-50 transition-colors flex items-center gap-3 ${
                        language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-slate-700'
                      }`}
                    >
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="text-sm">{translations[lang.code].languages[lang.code]}</span>
                      {language === lang.code && (
                        <span className="ml-auto text-blue-600">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}