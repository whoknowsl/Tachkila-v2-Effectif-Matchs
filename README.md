# Tachkila v2 : Effectif, Composition et Matchs

Application web de gestion du club amateur **Atlas FC**. L'entraîneur gère son effectif, place ses joueurs sur le terrain en 4-4-2 et suit ses matchs, avec des données partagées entre les trois pages.

## Liens

| Livrable                 | Lien                                                            |
| ------------------------ | --------------------------------------------------------------- |
| Site déployé (Vercel)    | https://tachkilav2effectifmatchs.vercel.app                     |
| Repository GitHub        | https://github.com/whoknowsl/Tachkila-v2-Effectif-Matchs        |
| Présentation             | https://canva.link/fqkf4yfqvq6n7sq |
| Planification des tâches | https://youssefodada11.atlassian.net/jira/software/projects/TVCD/boards/3?filter=&groupBy=none&atlOrigin=eyJpIjoiZjJjZTRjZDg5YjcxNDE2YmEyOWI4YmY5YzhmOWMxZGMiLCJwIjoiaiJ9           |

## Fonctionnalités

### Page Effectif

- Cartes joueurs : numéro, nom, poste, âge, statut (« En forme » / « Blessé »), bordure à la couleur du poste.
- Ajout, modification et suppression (avec confirmation) depuis une modale.
- Validation en temps réel avec des regex : nom de 3 à 30 lettres, numéro unique de 1 à 99, âge entre 18 et 39 ans, 2 gardiens au plus.
- Un seul capitaine à la fois (bordure violette) ; un joueur blessé ne peut pas être capitaine.
- Recherche par nom et filtre par poste, combinés.
- Pagination de 8 cartes par page.

### Page Matchs

- Ajout, modification et suppression d'un match (adversaire, date, heure, lieu, domicile ou extérieur) avec validation regex.
- Onglets (Tous, À venir, Joués) et recherche d'un adversaire.
- Bouton « Saisir le score » une fois l'heure du match passée (`Date.now()`) ; score affiché en vert (victoire), rouge (défaite) ou gris (nul).

### Page Composition

- Placement des joueurs sur le terrain (CSS Grid), une position n'accepte qu'un joueur de son poste.
- Un joueur blessé ne peut pas être placé.
- Un joueur dont le poste change, qui devient blessé ou qui est supprimé quitte le terrain.

### Commun

- Données conservées après actualisation (`localStorage`) et partagées entre les trois pages.
- Navigation depuis le header avec la page active indiquée.
- Responsive : mobile (jusqu'à 767px), tablette (768 à 1023px), petit desktop (1024 à 1279px), grand desktop (1280px et plus).

## Technologies

- HTML5 sémantique
- Tailwind CSS v4 (CLI)
- JavaScript ES6+ en modules (`import` / `export`, `type="module"`)
- `localStorage` pour la persistance
- Git / GitHub (branches `feature/*`, Pull Requests) et Vercel pour l'hébergement

## Architecture du code

```
/
├── index.html            Page Composition
├── pages/
│   ├── effectifPg.html   Page Effectif
│   └── matchsPg.html     Page Matchs
├── js/
│   ├── data.js           Données et accès au localStorage (sans DOM)
│   ├── validation.js     Fonctions de validation (regex)
│   ├── domelments.js     Références aux éléments du DOM
│   ├── joueurs.js        Logique et cartes de l'effectif
│   ├── matches.js        Logique et cartes des matchs
│   ├── index.js          Page Composition
│   └── toast.js          Notifications
├── main.js               Point d'entrée de la page Effectif
├── style.css             Entrée Tailwind
├── dist/output.css       CSS généré
└── imgs/
```

Principes : les fonctions de données et de validation sont séparées de l'interface, les éléments sont créés avec `createElement` et `textContent` (jamais `innerHTML` avec des données saisies), et les événements des listes utilisent la délégation.

## Lancer le projet en local

```bash
git clone https://github.com/whoknowsl/Tachkila-v2-Effectif-Matchs.git
cd Tachkila-v2-Effectif-Matchs
npm install
npm run dev        # génère dist/output.css (laisser ce terminal ouvert)
```

Ouvrir ensuite `index.html` avec l'extension **Live Server** de VS Code.

Pour générer le CSS de production :

```bash
npm run build
```

## Déploiement

Le site est hébergé sur **Vercel** :

- Build Command : `npm run build`
- Output Directory : `.`

## Organisation du travail

- Une branche `feature/*` et une Pull Request par fonctionnalité.
- Commits réguliers avec des messages clairs.
- Planification des tâches : voir le lien dans le tableau ci-dessus.

## Tests des cas d'erreur

- Formulaires vides, nom trop court ou trop long, numéro déjà pris, âge hors limites.
- Troisième gardien refusé.
- Match avec adversaire « Atlas FC » ou date invalide refusé.
- Joueur blessé : slots désactivés, retiré du terrain, ne peut pas être capitaine.
- Suppression de la dernière carte d'une page : retour à une page valide.
- Actualisation de la page : les données sont conservées.

## Accessibilité et qualité

- Labels sur les champs, navigation au clavier, page active indiquée.
- HTML validé sur https://validator.w3.org/.
- Balises sémantiques et nommage clair.

## Auteur

_à compléter : ton nom_ , projet pédagogique, formation CodaNova.
