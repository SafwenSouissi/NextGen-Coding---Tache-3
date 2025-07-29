import React from 'react';
import Header from './components/layout/Header';
import HomePage from './pages/HomePage';
import { useTheme } from './hooks/useTheme';
import './App.css';

/**
 * Composant principal de l'application
 * @returns {JSX.Element} Composant App
 */
function App() {
  const { theme, themeConfig } = useTheme();

  // Appliquer le thème au body
  React.useEffect(() => {
    document.body.style.backgroundColor = themeConfig.background;
    document.body.style.color = themeConfig.text;
  }, [themeConfig]);

  return (
    <div className="app" data-theme={theme}>
      <Header />
      <main className="app__main">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
