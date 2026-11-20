[![CI](https://github.com/FarCodeFR/Test-automatisation/actions/workflows/ci.yml/badge.svg)](https://github.com/FarCodeFR/Test-automatisation/actions/workflows/ci.yml)

# Todo-list

## 1. Présentation du projet

Todo-list est une application d'ajout de tâches : on remplit le champ, on clique sur le bouton « Ajouter » et la tâche s'ajoute. On peut ensuite la cocher pour valider sa réalisation et/ou la supprimer. Un compteur des tâches restant à faire est également affiché.

Le projet met en place une chaîne CI/CD.

- **Dépôt GitHub :** https://github.com/FarCodeFR/Test-automatisation
- **Lien du site :** https://devops-automatisation.vercel.app/
- **Réalisé par :** Timothé Renard

## 2. La chaîne CI/CD

Lors des « push » ou des « merge requests », la pipeline se lance automatiquement avec les différents scripts :

1. Installation de Node.js
2. Installation des dépendances
3. Lancement du linter
4. Lancement de Prettier
5. Lancement des tests

> ❌ Si une erreur est rencontrée, il faudra la corriger et relancer la commande.
>
> ✅ Si c'est un succès, vous pourrez poursuivre.

## 3. Prettier / EsLint / Vite

Vous pouvez changer la configuration de ces outils via

- **eslint.config.js**

    Pas besoin d'être modifié

- **vite.config.js**

    Pas besoin d'être modifié

- **.prettierrc.json**

    - TrailingComma :
    - tabWidth : On gère l'indentation (4 par défaut)
    - semi : Supprime les points-virgules en fin de ligne.
    - singleQuote : Utilise des guillements simples **'** (true)au lieu de doubles **"** (false)

## . Les outils choisis et pourquoi

| Outils             | Utilité                                                                                                                                     |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **React**          | Pour créer notre front avec différents composants en SPA                                                                                    |
| **Docker**         | Pour conteneuriser notre projet afin qu'il soit exploitable par tous                                                                        |
| **GitHub Actions** | Pour gérer notre pipeline avec nos différents scripts, afin de s'assurer que le code et les dépendances que l'on veut pousser sont corrects |
| **Vitest**         | Pour effectuer différents tests sur notre front                                                                                             |
| **Prettier**       | Pour configurer une indentation générale                                                                                                    |
| **ESLint**         | Pour nous signaler de potentiels bugs ou erreurs                                                                                            |
| **Vercel**         | Pour déployer notre site gratuitement                                                                                                       |

## . Comment lancer le projet en local

À la racine du projet, lancer dans le terminal :

```bash
npm install
npm run dev
```

Une fois lancé, vous pourrez accéder à l'application en local.
