import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { formatDate, formatNumber } from '../utils';
import { APP_CONFIG } from '../constants';
import './HomePage.css';

/**
 * Page d'accueil
 * @returns {JSX.Element} Page d'accueil
 */
const HomePage = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="home-page">
      <div className="home-page__container">
        <section className="home-page__hero">
          <h1>Bienvenue dans {APP_CONFIG.NAME}</h1>
          <p className="home-page__subtitle">
            Une application React avec une architecture propre et modulaire
          </p>
        </section>

        <section className="home-page__content">
          <div className="home-page__grid">
            <Card 
              title="Compteur Interactif" 
              subtitle="Démonstration d'un composant avec état"
              variant="elevated"
              className="home-page__card"
            >
              <div className="counter">
                <p className="counter__value">Compteur: {formatNumber(count)}</p>
                <div className="counter__actions">
                  <Button onClick={handleIncrement} variant="primary">
                    Incrémenter
                  </Button>
                  <Button onClick={handleReset} variant="secondary">
                    Réinitialiser
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage; 