
import { Link } from 'react-router-dom';

interface LanguageToggleProps {
  currentLang: 'en' | 'id';
}

const LanguageToggle = ({ currentLang }: LanguageToggleProps) => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="text-lg font-lato">
        {currentLang === 'en' ? (
          <span className="text-alabaster">
            <span className="font-bold">EN</span> | <Link to="/id" className="text-molten-gold hover:text-alabaster transition-colors">ID</Link>
          </span>
        ) : (
          <span className="text-alabaster">
            <Link to="/" className="text-molten-gold hover:text-alabaster transition-colors">EN</Link> | <span className="font-bold">ID</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default LanguageToggle;
