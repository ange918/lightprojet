# LUMIÈRE - Hubs Modulaires Santé & Éducation

## Vue d'ensemble
Site web multipage professionnel pour le projet LUMIÈRE, présentant un modèle innovant de hubs modulaires combinant santé, éducation et énergie dans les zones à fort besoin.

**Tagline:** "Un million pour un hub, 30 000 vies touchées par an"

## Structure du Projet

### Technologies
- **Frontend Framework:** React 19.1.1
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS v4 (avec @tailwindcss/postcss)
- **Build Tool:** Vite 7.1.10
- **Language:** JavaScript (ES6+)

### Architecture
```
src/
├── components/
│   ├── Navbar.jsx          # Navigation avec sous-menu Détails
│   └── Footer.jsx          # Footer réutilisable
├── pages/
│   ├── Home.jsx            # Page d'accueil avec hero, pitch, sections
│   ├── About.jsx           # Mission, vision, valeurs, équipe
│   ├── Presentation.jsx    # Détails/Présentation du projet
│   ├── Budget.jsx          # Détails/Budget et timeline
│   ├── Contact.jsx         # Formulaire de contact
│   └── Donate.jsx          # Page de don/mécénat
├── App.jsx                 # Router configuration
├── main.jsx               # Entry point
└── index.css              # Tailwind imports et animations
```

## Pages du Site

### 1. Accueil (/)
- Hero section avec tagline
- Elevator pitch (20 secondes)
- 3 piliers d'impact: Santé, Éducation, Énergie
- Chiffres clés animés (AnimatedNumber component)
- CTAs multiples vers page Don

### 2. À propos (/about)
- Mission, Vision, Valeurs
- Gouvernance & sécurité des fonds
- Équipe clé (5 rôles)
- Témoignages

### 3. Détails - Présentation (/details/presentation)
- Description complète des Hubs LUMIÈRE
- Pourquoi financer ce projet (4 points clés)
- Objectifs concrets par hub
- Impacts tangibles (santé, emploi, environnement)

### 4. Détails - Budget (/details/budget)
- Répartition détaillée du 1M$ (6 postes)
- Timeline de construction (0-12 mois)
- KPIs mesurables (8 indicateurs)
- Audit & transparence
- Risques & mitigations
- Effet de levier & scaling

### 5. Don / Devenir mécène (/donate)
- Formulaire de demande de contribution
- Progress bar de collecte
- 3 options: Hub complet, Partie de hub, Montant personnalisé
- Valeur pour le mécène (6 avantages)
- Méthodes de paiement acceptées

### 6. Contact (/contact)
- Formulaire de contact simple
- Informations de contact (email, téléphone, adresse)
- Horaires d'ouverture

## Fonctionnalités Techniques

### Navigation
- Navbar sticky avec logo LUMIÈRE
- Sous-menu dropdown pour "Détails" (Présentation, Budget)
- Menu mobile responsive avec hamburger
- Active link highlighting

### Animations
- AnimatedNumber component pour chiffres clés
- Keyframe animations pour effets visuels
- Hover effects sur cards et buttons
- Transform & scale sur CTAs

### Design System
- **Couleurs primaires:** Bleu (#1E40AF) & Or (#F59E0B)
- **Dégradés:** blue-600 to amber-500
- **Typographie:** Système de fonts modernes
- **Spacing:** Tailwind utility classes
- **Shadows:** xl, 2xl pour depth

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg
- Grid layouts adaptatifs
- Stack navigation mobile

## Configuration Vite

### Server Settings (vite.config.js)
```javascript
server: {
  host: '0.0.0.0',
  port: 5000,
  hmr: {
    protocol: 'wss',
    host: process.env.REPL_SLUG + '.' + process.env.REPL_OWNER + '.repl.co',
    clientPort: 443,
  },
}
```

### Tailwind v4 Configuration
- PostCSS plugin: @tailwindcss/postcss
- Import syntax: `@import "tailwindcss"`
- Custom animations dans index.css

## Scripts Disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Build production
- `npm run preview` - Preview du build
- `npm run lint` - Linting ESLint

## Déploiement

Le projet est prêt pour déploiement sur:
- Vercel (recommandé pour Vite)
- Netlify
- Replit Deployments

## État Actuel

✅ Toutes les pages créées et fonctionnelles
✅ Navigation avec sous-menu opérationnelle
✅ Design responsive (mobile, tablet, desktop)
✅ Animations des chiffres clés
✅ Formulaires de contact et don
✅ Footer avec liens et réseaux sociaux
✅ Color scheme bleu & or appliqué
✅ Tailwind CSS v4 configuré correctement

## Prochaines Étapes Suggérées

### URGENT - Contenu à Finaliser

1. **PDFs Professionnels (PRIORITAIRE)**
   ⚠️ Les fichiers dans `public/documents/` sont des placeholders texte renommés en .pdf
   - **Action requise:** Créer de vrais PDFs avec Adobe InDesign, Canva ou similaire
   - Fichiers à remplacer:
     - `public/documents/executive-summary.pdf` - Design professionnel 1 page
     - `public/documents/pitch-deck.pdf` - Présentation visuelle complète
   - Les liens de téléchargement dans le Footer sont déjà configurés
   - Le contenu texte est fourni dans les fichiers actuels comme référence

2. **Intégrations de paiement**
   - Configurer Stripe avec clés API réelles
   - Configurer PayPal avec compte marchand
   - Les boutons et workflows sont déjà implémentés

3. **Backend & Base de données**
   - API pour formulaires de contact/don
   - Stockage des contributions
   - Dashboard admin pour KPIs

4. **Médias et Images**
   - Photos réelles des hubs
   - Illustrations professionnelles
   - Vidéo de présentation

5. **SEO & Performance**
   - Meta tags et Open Graph
   - Lazy loading des images
   - Optimisation bundle size

## Notes Techniques

- Le projet utilise Tailwind CSS v4 avec la nouvelle syntaxe `@import "tailwindcss"`
- Le plugin PostCSS est `@tailwindcss/postcss` (séparé du package principal)
- HMR configuré pour fonctionner avec le proxy Replit
- Toutes les couleurs dynamiques dans Budget.jsx utilisent des classes Tailwind standards pour éviter les erreurs de purge

---

**Date de création:** 19 octobre 2025
**Version:** 1.0.0
**Auteur:** Agent Replit
