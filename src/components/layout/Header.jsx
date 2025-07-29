import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import Button from '../ui/Button';
import './Header.css';

/**
 * Composant Header pour la navigation
 * @returns {JSX.Element} Composant Header
 */
const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h1>NextGen Coding</h1>
        </div>
        
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li><a href="/" className="header__nav-link">Accueil</a></li>
            <li><a href="/about" className="header__nav-link">À propos</a></li>
            <li><a href="/contact" className="header__nav-link">Contact</a></li>
          </ul>
        </nav>
        
        <div className="header__actions">
          <Button 
            variant="secondary" 
            size="small" 
            onClick={toggleTheme}
            className="header__theme-toggle"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header; 