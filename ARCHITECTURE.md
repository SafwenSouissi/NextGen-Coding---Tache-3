# Architecture du Projet React - Clean Architecture

## 📁 Structure Complète des Dossiers

```
src/
├── components/          # Composants réutilisables
│   ├── ui/             # Composants UI de base (Button, Card, etc.)
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   ├── Card.jsx
│   │   ├── Card.css
│   │   └── index.js    # Export centralisé
│   └── layout/         # Composants de mise en page (Header, Footer, etc.)
│       ├── Header.jsx
│       ├── Header.css
│       └── index.js    # Export centralisé
├── pages/              # Pages de l'application
│   ├── HomePage.jsx
│   └── HomePage.css
├── hooks/              # Hooks personnalisés
│   ├── useLocalStorage.js
│   └── useTheme.js
├── services/           # Services (API, etc.)
│   └── api.js
├── utils/              # Fonctions utilitaires
│   └── index.js
├── constants/          # Constantes de l'application
│   └── index.js
├── types/              # Types et interfaces
│   └── index.js
├── assets/             # Ressources statiques
│   ├── images/         # Images
│   └── icons/          # Icônes
├── styles/             # Styles globaux
├── App.jsx             # Composant principal
├── App.css             # Styles principaux
├── main.jsx            # Point d'entrée
└── index.css           # Styles globaux
```

## 🏗️ Principes de Clean Architecture

### 1. **Séparation des Responsabilités**

#### **Couche Présentation (UI)**
- **`components/ui/`** : Composants de base réutilisables
  - `Button` : Bouton avec variantes (primary, secondary, success, etc.)
  - `Card` : Conteneur avec header et body configurables
- **`components/layout/`** : Structure de mise en page
  - `Header` : Navigation avec toggle de thème
- **`pages/`** : Pages de l'application
  - `HomePage` : Page d'accueil avec démonstrations

#### **Couche Application**
- **`hooks/`** : Logique d'état et effets
  - `useLocalStorage` : Gestion du localStorage
  - `useTheme` : Gestion du thème (clair/sombre)
- **`services/`** : Communication avec les APIs
  - `ApiService` : Classe pour les appels HTTP
- **`utils/`** : Fonctions utilitaires
  - Formatage de dates et nombres
  - Validation d'email
  - Fonctions de débounce

#### **Couche Domaine**
- **`constants/`** : Valeurs constantes
  - Configuration de l'application
  - Routes et messages
  - Configuration des thèmes
- **`types/`** : Types et interfaces
  - Types pour les utilisateurs
  - Interfaces communes

### 2. **Dépendances Unidirectionnelles**

```
Pages → Components → UI Components
Pages → Hooks → Services
Components → Utils
```

**Règles de dépendance :**
- Les composants ne dépendent que des hooks et utils
- Les hooks peuvent dépendre des services
- Les services ne dépendent que des utils
- Aucune dépendance circulaire

### 3. **Flux de Données**

```
User Action → Component → Hook → Service → API
                ↓
            State Update → Re-render
```

## 🎯 Composants Détaillés

### **Composants UI**

#### **Button Component**
```jsx
<Button 
  variant="primary" 
  size="medium" 
  disabled={false}
  onClick={handleClick}
>
  Cliquer ici
</Button>
```

**Variantes disponibles :**
- `primary`, `secondary`, `success`, `danger`, `warning`, `info`
- `small`, `medium`, `large`

#### **Card Component**
```jsx
<Card 
  title="Mon Titre" 
  subtitle="Sous-titre" 
  variant="elevated"
>
  Contenu de la carte
</Card>
```

**Variantes disponibles :**
- `default`, `elevated`, `outlined`

### **Hooks Personnalisés**

#### **useLocalStorage**
```jsx
const [value, setValue] = useLocalStorage('key', defaultValue);
```

#### **useTheme**
```jsx
const { theme, toggleTheme, themeConfig } = useTheme();
```

### **Services**

#### **ApiService**
```jsx
// GET request
const data = await apiService.get('/endpoint');

// POST request
const result = await apiService.post('/endpoint', data);

// PUT request
const updated = await apiService.put('/endpoint', data);

// DELETE request
await apiService.delete('/endpoint');
```

## 🎨 Système de Thèmes

### **Configuration**
```javascript
// src/constants/index.js
export const THEME_CONFIG = {
  LIGHT: {
    primary: '#007bff',
    background: '#ffffff',
    text: '#212529'
  },
  DARK: {
    primary: '#0d6efd',
    background: '#212529',
    text: '#ffffff'
  }
};
```

### **Utilisation**
```jsx
// Dans un composant
const { theme, toggleTheme } = useTheme();

// Dans le CSS
[data-theme="dark"] {
  --background-color: var(--background-dark);
  --text-color: var(--text-dark);
}
```

## 📱 Responsive Design

### **Breakpoints**
```javascript
// src/constants/index.js
export const BREAKPOINTS = {
  MOBILE: '576px',
  TABLET: '768px',
  DESKTOP: '992px',
  LARGE_DESKTOP: '1200px'
};
```

### **Media Queries**
```css
@media (max-width: 768px) {
  .component {
    /* Styles mobile */
  }
}
```

## 🚀 Utilisation Avancée

### **Ajouter un nouveau composant UI**
```jsx
// src/components/ui/NewComponent.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './NewComponent.css';

const NewComponent = ({ children, variant = 'default', ...props }) => {
  const componentClasses = [
    'new-component',
    `new-component--${variant}`,
    props.className
  ].filter(Boolean).join(' ');

  return (
    <div className={componentClasses} {...props}>
      {children}
    </div>
  );
};

NewComponent.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'special']),
  className: PropTypes.string
};

export default NewComponent;
```

### **Créer un hook personnalisé**
```jsx
// src/hooks/useCustomHook.js
import { useState, useEffect } from 'react';

export const useCustomHook = (initialValue, dependencies = []) => {
  const [value, setValue] = useState(initialValue);
  
  useEffect(() => {
    // Logique du hook
  }, dependencies);
  
  return [value, setValue];
};
```

### **Ajouter un service**
```jsx
// src/services/userService.js
import { apiService } from './api';

export const userService = {
  async getUsers() {
    return apiService.get('/users');
  },
  
  async createUser(userData) {
    return apiService.post('/users', userData);
  },
  
  async updateUser(id, userData) {
    return apiService.put(`/users/${id}`, userData);
  },
  
  async deleteUser(id) {
    return apiService.delete(`/users/${id}`);
  }
};
```

## 📋 Bonnes Pratiques

### **1. Nommage**
- **Composants** : PascalCase (`UserProfile`)
- **Hooks** : camelCase avec préfixe `use` (`useUserData`)
- **Services** : camelCase avec suffixe `Service` (`userService`)
- **Utils** : camelCase (`formatDate`)
- **Constants** : UPPER_SNAKE_CASE (`API_BASE_URL`)

### **2. Structure des Fichiers**
```
ComponentName/
├── ComponentName.jsx
├── ComponentName.css
├── ComponentName.test.jsx
└── index.js
```

### **3. PropTypes**
```jsx
ComponentName.propTypes = {
  required: PropTypes.string.isRequired,
  optional: PropTypes.number,
  children: PropTypes.node,
  onClick: PropTypes.func
};
```

### **4. CSS BEM**
```css
.block {}
.block__element {}
.block--modifier {}
.block__element--modifier {}
```

### **5. Documentation**
```jsx
/**
 * Composant pour afficher un utilisateur
 * @param {Object} props - Propriétés du composant
 * @param {string} props.name - Nom de l'utilisateur
 * @param {string} props.email - Email de l'utilisateur
 * @returns {JSX.Element} Composant User
 */
```

## 🔧 Configuration

### **ESLint**
```javascript
// eslint.config.js
export default [
  js.configs.recommended,
  {
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn'
    }
  }
];
```

### **Vite**
```javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
```

## 📈 Évolutions Futures

### **Phase 1 - Tests**
- [ ] Jest pour les tests unitaires
- [ ] React Testing Library
- [ ] Tests d'intégration

### **Phase 2 - TypeScript**
- [ ] Migration progressive
- [ ] Types stricts
- [ ] IntelliSense amélioré

### **Phase 3 - Routing**
- [ ] React Router v6
- [ ] Routes protégées
- [ ] Lazy loading

### **Phase 4 - State Management**
- [ ] Context API
- [ ] Redux Toolkit
- [ ] Persistance d'état

### **Phase 5 - Performance**
- [ ] React.memo
- [ ] useMemo/useCallback
- [ ] Code splitting
- [ ] Lazy loading

## 🎯 Avantages de cette Architecture

1. **Maintenabilité** : Code organisé et facile à maintenir
2. **Réutilisabilité** : Composants et hooks réutilisables
3. **Testabilité** : Structure facilitant les tests
4. **Évolutivité** : Facile d'ajouter de nouvelles fonctionnalités
5. **Performance** : Optimisations intégrées
6. **Accessibilité** : Bonnes pratiques d'accessibilité
7. **Responsive** : Design adaptatif
8. **Thèmes** : Support multi-thèmes

---

Cette architecture suit les principes SOLID et les bonnes pratiques React pour créer une application robuste, maintenable et évolutive. 