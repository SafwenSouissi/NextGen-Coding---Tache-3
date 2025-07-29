# NextGen React App - Clean Architecture

Une application React moderne avec une architecture propre et modulaire, construite avec Vite et organisée selon les principes de Clean Architecture.

## 🚀 Fonctionnalités

- ✅ **Architecture Modulaire** : Structure organisée et maintenable
- ✅ **Composants Réutilisables** : UI components avec variantes
- ✅ **Hooks Personnalisés** : Logique d'état réutilisable
- ✅ **Système de Thèmes** : Support clair/sombre avec transition fluide
- ✅ **Design Responsive** : Adaptation mobile/desktop
- ✅ **Services Centralisés** : Gestion des APIs
- ✅ **Utilitaires Partagés** : Fonctions communes
- ✅ **Full Page Layout** : Utilisation optimale de l'espace

## 🏗️ Architecture

```
src/
├── components/          # Composants réutilisables
│   ├── ui/             # Composants UI de base
│   └── layout/         # Composants de mise en page
├── pages/              # Pages de l'application
├── hooks/              # Hooks personnalisés
├── services/           # Services (API, etc.)
├── utils/              # Fonctions utilitaires
├── constants/          # Constantes de l'application
├── types/              # Types et interfaces
├── assets/             # Ressources statiques
└── styles/             # Styles globaux
```

## 🛠️ Technologies

- **React 19** : Framework principal
- **Vite** : Build tool rapide
- **ESLint** : Linting du code
- **PropTypes** : Validation des props
- **CSS Modules** : Styles modulaires

## 📦 Installation

```bash
# Cloner le projet
git clone [url-du-repo]

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

## 🎯 Utilisation

### Scripts Disponibles

```bash
npm run dev          # Démarrer le serveur de développement
npm run build        # Construire pour la production
npm run preview      # Prévisualiser la build
npm run lint         # Linter le code
```

### Structure des Composants

#### Composants UI
```jsx
import { Button, Card } from './components/ui';

<Button variant="primary" size="medium" onClick={handleClick}>
  Cliquer ici
</Button>

<Card title="Mon Titre" subtitle="Sous-titre" variant="elevated">
  Contenu de la carte
</Card>
```

#### Hooks Personnalisés
```jsx
import { useTheme, useLocalStorage } from './hooks';

const { theme, toggleTheme } = useTheme();
const [value, setValue] = useLocalStorage('key', defaultValue);
```

#### Services
```jsx
import { apiService } from './services/api';

const data = await apiService.get('/endpoint');
```

## 🎨 Système de Thèmes

L'application supporte les thèmes clair et sombre :

- **Toggle automatique** : Bouton dans le header
- **Persistance** : Sauvegarde dans localStorage
- **Transition fluide** : Animation CSS
- **Variables CSS** : Couleurs centralisées

## 📱 Responsive Design

- **Mobile-first** : Design adaptatif
- **Breakpoints** : Définis dans les constantes
- **Flexbox/Grid** : Layout moderne
- **Touch-friendly** : Interface tactile

## 🔧 Configuration

### Ajouter un Nouveau Composant

```jsx
// src/components/ui/NewComponent.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './NewComponent.css';

const NewComponent = ({ children, ...props }) => {
  return (
    <div className="new-component" {...props}>
      {children}
    </div>
  );
};

NewComponent.propTypes = {
  children: PropTypes.node.isRequired
};

export default NewComponent;
```

### Créer un Hook Personnalisé

```jsx
// src/hooks/useCustomHook.js
import { useState, useEffect } from 'react';

export const useCustomHook = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  
  // Logique du hook
  
  return [value, setValue];
};
```

### Ajouter un Service

```jsx
// src/services/newService.js
import { apiService } from './api';

export const newService = {
  async getData() {
    return apiService.get('/endpoint');
  }
};
```

## 📋 Bonnes Pratiques

1. **Nommage** : Noms descriptifs et cohérents
2. **Props** : Toujours définir PropTypes
3. **CSS** : Utiliser la méthodologie BEM
4. **Documentation** : Commenter les fonctions complexes
5. **Tests** : Structure prête pour les tests unitaires

## 🚀 Déploiement

```bash
# Build pour la production
npm run build

# Prévisualiser la build
npm run preview
```

## 📈 Évolutions Futures

- [ ] Tests unitaires avec Jest
- [ ] Intégration TypeScript
- [ ] Système de routing (React Router)
- [ ] Gestion d'état globale (Context/Redux)
- [ ] Internationalisation (i18n)
- [ ] PWA (Progressive Web App)

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**NextGen Coding** - Architecture React avec Clean Architecture

---

⭐ Si ce projet vous a aidé, n'hésitez pas à le star sur GitHub !
