import { useState, useEffect } from 'react';

/**
 * Hook personnalisé pour gérer le localStorage
 * @param {string} key - Clé du localStorage
 * @param {any} initialValue - Valeur initiale
 * @returns {Array} [value, setValue]
 */
export const useLocalStorage = (key, initialValue) => {
  // État pour stocker la valeur
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Erreur lors de la lecture du localStorage pour la clé "${key}":`, error);
      return initialValue;
    }
  });

  // Fonction pour définir la valeur
  const setValue = (value) => {
    try {
      // Permettre à la valeur d'être une fonction pour avoir la même API que useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Erreur lors de l'écriture dans le localStorage pour la clé "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}; 