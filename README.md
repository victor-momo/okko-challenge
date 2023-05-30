# Okko Challenge

Readme file for the Okko tech. challenge. All business, tech. and implementation choices will be detailed here along the way.

## Challenge Recap

- Objectif:
  Il s'agit de créer une page web qui permet de réserver un call Zoom (https://zoom.us/).

- Détail:
  La page devra afficher une semaine de calendrier, et permettre à l'utilisateur de réserver un meeting par drag & drop (type interface de Google Agenda). Lorsque l'utilisateur a choisi un créneau de cette manière, une fenêtre apparaît affichant la date, l'heure de début et de fin sélectionnée, un champ "Objet" et deux boutons (valider et annuler).
  Si l'utilisateur valide, un call Zoom doit être créé sur le créneau choisi, et une confirmation doit être affichée à l'utilisateur.

- Contraintes:
  Stack JS pour réaliser cet exercice:

  - React.js (ou autre framework JS front)
  - Node.js pour le back (framework / archi de ton choix)
    Le temps à consacrer à cet exercice est de 3H environ.

- Instructions supplémentaires:
  Créer un compte Zoom dédié à cet exercice et me donner les accès.
  Créer une/des repository github pour héberger ton code, et effectuer des commit réguliers afin d'avoir une trace de l'avancement. (mon compte Github pour m'inviter dessus)

- Eléments à fournir dans ta solution:

  - Les identifiants Zoom pour accéder au compte
  - Les liens vers la/les repository github
  - Une explication de tes choix (techniques et/ou product, business)
  - Toute instruction supplémentaire nécessaire pour m'aider à tester ton code

- Evaluation:
  On fera la revue de ton test technique ensemble, sous forme de PR review. Je te questionnerai alors sur tes choix et difficultés, et on creusera potentiellement des éléments techniques.
  Étant donné que le temps imparti est court, la qualité visuelle de la page ne sera pas prise en compte

## Challenge Solution

See commit messages for detailed step-by-step explanations on how the challenge will be solved. Here will only be indicated the most holistic decisions.

### Running the solution

Use the following commands to run the problem solution (web interface + api).

#### Running the api

```sh
cd api && npm install && npm run dev
```

#### Running the web UI

```sh
cd web && npm install && npm run dev
```

### Tech. Choices

1. For now, I decided to go on the front-end with a web interface based on React + Tailwind for styling, Vite for tooling.
2. On the back-end, setup of a simple express server to host a REST api.
3. After a basic calendar setup, I will now try to display zoom events on this calendar. I will save the event
   creation through a drag & drop interaction for later, as it seems quite complex. The easier route for me seems currently to first try and get a grasp on how to interact with Zoom, and listing and displaying on this calendar all existing events seems like a good first step to me.
