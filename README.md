# Gorilla Logic Trivia Game

## Stack of technology 

- React
- TypeScript
- MaterialUI

## Getting Started

1. Install npm dependencies.

```sh
cd frontend
npm install
```

2. Start the local dev server.

```sh
npm run start
```

## General Overview

Imagine that we are a startup company focused on building the world’s greatest web-based trivia application. Our CEO is a madman, and has demanded that we build an MVP in one day. He does not care how basic this trivia app is or what features it has, so long as you can play a game of trivia. He does however want to minimize technical debt, so the solution should be abstracted well; adding new features in the days to come should be effortless. This is not a throw-away prototype. This is the beginning of our Trivia Empire.

Goal: Build a simple trivia application utilizing https://opentdb.com. Feel free to make this as simple or as complex as you like (there are no wrong answers!). This exercise is as much about your decision making/reasoning as it is about your coding and technical abilities

## Architecture 

This Trivia Game was all based in an encapsulated component-pattern, in which we have the opportunity to make the application modular and scalable 
based on the following file structure for each component created:

- **view.tsx:** the main file containing either a class component or a functional component depending on the case to render the component.
- **types.ts:** containg all typescript related for the component created.
- **utils.js:** this file consist in a library to create some methods we can use as helpers for the component.
- **styles.ts:** this files contains all based about styling the component.
- **container.tsx:** this file doesn’t exist in the current project, however it can be used to export the component with injected libraries as the main level as Higher Order Component.

## Testing

Coverage test based on Cypress.DOM elements testing, in this specific code challenge I’ve created a brief test coverage to verify all components are rendering as desired, however, it could lead us to a full test coverage in a friendly way, 
however for the purpose of this MVP we are looking to be sure at least all components involved have been rendered as desired.

**Running Cypress tests**

```sh
cd frontend
npm test
```

## State Management: 
- Hooks for the stying part based on material-ui.
- Single class component tree applied in order to create an MVP with the opportunity to implement redux or any other library in the future if required.