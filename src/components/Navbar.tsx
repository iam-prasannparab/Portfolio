import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../translations';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav_skills'), href: '#skills' },
    { name: t('nav_projects'), href: '#projects' },
    { name: t('nav_experience'), href: '#experience' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/80 backdrop-blur-md border-b border-gray-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-5xl mx-auto px-6 w-full flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-bold text-xl tracking-tighter">
          <Terminal className="h-6 w-6 text-emerald-500" />
          <span>PrasannParab<span className="text-emerald-500">.</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-4">
            <div className="relative group flex items-center gap-1 text-gray-300 hover:text-white cursor-pointer">
              <Globe className="h-4 w-4" />
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value as Language)}
                className="bg-transparent text-sm font-medium outline-none cursor-pointer appearance-none"
              >
                <option value="en" className="bg-gray-900 text-white">EN</option>
                <option value="es" className="bg-gray-900 text-white">ES</option>
                <option value="hi" className="bg-gray-900 text-white">HI</option>
              </select>
            </div>
            <a href="/Prasann_Parab_Resume.pdf" download="Prasann_Parab_Resume.pdf" className="px-4 py-2 rounded-md bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors border border-gray-700">
              {t('nav_resume')}
            </a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-colors">
              {t('nav_hire_me')}
            </a>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <div className="relative flex items-center gap-1 text-gray-300">
            <Globe className="h-4 w-4" />
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-transparent text-sm font-medium outline-none cursor-pointer appearance-none"
            >
              <option value="en" className="bg-gray-900 text-white">EN</option>
              <option value="es" className="bg-gray-900 text-white">ES</option>
              <option value="hi" className="bg-gray-900 text-white">HI</option>
            </select>
          </div>
          <button 
            className="text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-b border-gray-800 py-4 px-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-base font-medium text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="/Prasann_Parab_Resume.pdf" download="Prasann_Parab_Resume.pdf" className="w-full text-center px-4 py-2 mt-2 rounded-md bg-gray-800 text-white text-sm font-medium hover:bg-gray-700 transition-colors border border-gray-700">
            {t('nav_download_resume')}
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center px-4 py-2 mt-2 rounded-md bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-colors">
            {t('nav_hire_me')}
          </a>
        </div>
      )}
    </header>
  );
}
