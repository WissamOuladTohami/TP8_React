# TP API React

Mini projet React pour apprendre a consommer une API REST de deux manieres:

- `fetch()` pour recuperer des articles
- `axios` pour recuperer des utilisateurs

L'interface a ete stylisee avec:

- des emojis dans les titres
- une palette coloree
- des cartes visuelles
- des animations douces au chargement et au survol

## Apercu

L'application affiche:

- un bloc `Articles avec fetch()` avec 5 titres
- un bloc `Utilisateurs avec axios` avec les noms et emails
- un message de chargement pendant les requetes
- un message d'erreur si la requete echoue

## Technologies

- React
- Axios
- CSS
- JSONPlaceholder

## Installation

```bash
npm install
```

## Lancer le projet

```bash
npm start
```

Puis ouvrir `http://localhost:3000`.

## Build de production

```bash
npm run build
```

## Structure principale

```text
src/
  App.js
  App.css
  FetchData.js
  AxiosData.js
  index.css
```

## Fonctionnement

### `FetchData`

Ce composant utilise `fetch()` avec `useEffect()` pour:

- envoyer une requete HTTP vers `https://jsonplaceholder.typicode.com/posts`
- stocker les donnees dans le state
- afficher seulement les 5 premiers articles

### `AxiosData`

Ce composant utilise `axios.get()` pour:

- envoyer une requete HTTP vers `https://jsonplaceholder.typicode.com/users`
- recuperer directement `response.data`
- afficher les utilisateurs et leurs emails

## Objectif pedagogique

Ce TP permet de pratiquer:

- `useState`
- `useEffect`
- la gestion du chargement
- la gestion des erreurs
- l'appel d'API en React

## Vidéo Démonstratif :



https://github.com/user-attachments/assets/04dfcb7e-a9f8-4fa9-8162-6a4d0ad8e2ec


