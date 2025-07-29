// Utilitaires et fonctions communes
// Fonctions réutilisables dans toute l'application

/**
 * Formate une date en format français
 * @param {Date|string} date - Date à formater
 * @returns {string} Date formatée
 */
export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Formate un nombre avec des séparateurs de milliers
 * @param {number} number - Nombre à formater
 * @returns {string} Nombre formaté
 */
export const formatNumber = (number) => {
  return new Intl.NumberFormat('fr-FR').format(number);
};

/**
 * Valide une adresse email
 * @param {string} email - Email à valider
 * @returns {boolean} True si l'email est valide
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Génère un ID unique
 * @returns {string} ID unique
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

/**
 * Débounce une fonction
 * @param {Function} func - Fonction à débouncer
 * @param {number} wait - Délai en millisecondes
 * @returns {Function} Fonction débouncée
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Capitalise la première lettre d'une chaîne
 * @param {string} str - Chaîne à capitaliser
 * @returns {string} Chaîne capitalisée
 */
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Vérifie si un objet est vide
 * @param {Object} obj - Objet à vérifier
 * @returns {boolean} True si l'objet est vide
 */
export const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

/**
 * Clone un objet de manière profonde
 * @param {Object} obj - Objet à cloner
 * @returns {Object} Objet cloné
 */
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}; 