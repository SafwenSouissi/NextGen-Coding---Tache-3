// Constantes de l'application
// Centralisation de toutes les valeurs constantes

// Configuration de l'application
export const APP_CONFIG = {
  NAME: 'NextGen',
  VERSION: '1.0.0',
  DESCRIPTION: 'Application React avec Clean Architecture'
};

// Routes de l'application
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  DASHBOARD: '/dashboard'
};

// Messages d'erreur
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Erreur de connexion réseau',
  VALIDATION_ERROR: 'Erreur de validation',
  UNKNOWN_ERROR: 'Une erreur inconnue s\'est produite'
};

// Messages de succès
export const SUCCESS_MESSAGES = {
  SAVE_SUCCESS: 'Données sauvegardées avec succès',
  DELETE_SUCCESS: 'Élément supprimé avec succès',
  UPDATE_SUCCESS: 'Mise à jour réussie'
};

// Configuration des thèmes
export const THEME_CONFIG = {
  LIGHT: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#ffffff',
    text: '#212529'
  },
  DARK: {
    primary: '#0d6efd',
    secondary: '#6c757d',
    background: '#212529',
    text: '#ffffff'
  }
};

// Configuration des breakpoints
export const BREAKPOINTS = {
  MOBILE: '576px',
  TABLET: '768px',
  DESKTOP: '992px',
  LARGE_DESKTOP: '1200px'
}; 