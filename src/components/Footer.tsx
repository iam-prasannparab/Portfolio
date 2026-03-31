import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-gray-800 bg-gray-950 text-center">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} {t('footer_text')}
      </p>
    </footer>
  );
}
