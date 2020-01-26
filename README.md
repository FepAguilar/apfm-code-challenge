# Troli

## Architecture

- React
- MaterialUI
- TypeScript

## Getting Started

1. Install npm dependencies.

```sh
cd frontend
npm install
```

2. Start the local dev server.

```sh
npm start
```

## Overview

This app is broken up into a few different components. The most important
components are `Question`, which is an individual trivia question, and `Questions`,
which is a collection of `Question`'s.

Upon load, the app presents the user with five (5) trivia questions pulled from
Open Trivia Database, along with multiple answer choices.

When all questions have been answered, the user is presented with their score and
the option to play the trivia game again. Upon clicking "Play again" the
api is called once more and the questions and answers are updated.
