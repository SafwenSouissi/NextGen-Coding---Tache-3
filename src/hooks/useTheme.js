import { useLocalStorage } from './useLocalStorage';
import { THEME_CONFIG } from '../constants';

/**
 * Hook personnalisé pour gérer le thème de l'application
 * @returns {Object} { theme, toggleTheme, themeConfig }
 */
export const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const themeConfig = THEME_CONFIG[theme.toUpperCase()] || THEME_CONFIG.LIGHT;

  return {
    theme,
    toggleTheme,
    themeConfig
  };
}; 