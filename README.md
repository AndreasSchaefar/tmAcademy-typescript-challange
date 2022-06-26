# TechMagic Academy - TypeScript Challange

## Table of contents

- [Overview](#overview)
  - [Requirements](#project-requirements)
  - [How to start the project](#how-to-start-the-project)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Resources Used](#resources-used)

## Overview

### Project Requirements

#### Task 1 - Get posts from remote API, iterate over them, and render them as new DOM nodes

##### Requirements:

- [x] the function should be asynchronous;
- [x] the function should return a response with a known shape (Promise generic);
- [x] use https://jsonplaceholder.typicode.com/posts to get the posts array;

#### Task #2 - Create a function updateObjectInArray.ts - which has to update an object of a given shape in an array of uni-shaped objects and return a cloned array.

##### Requirements:

- [x] the function has to be called as updateObjectInArray<ObjectShape>(initialArray, key, value, patch);
- [x] you should create a copy of initialArray before performing the update;
- [x] the key variable is the key of ObjectShape whose value is known to you (id, for example);
- [x] the value variable is the value of the key property;
- [x] the patch variable is the update that needs to be applied (has a Partial<ObjectShape> interface);
- [x] use async/await to handle asynchronous operations

### How to start the project

#### Build

```
npm run build
```

Then open an index.html

#### Open a live server

```
npm run start
```

## My process

### Built with

- [Webpack](https://webpack.js.org/) - Module bundler
- [Eslint](https://eslint.org/) - Linter (Airbnb Code Style)
- [Prettier](https://prettier.io/) - Code Formatter
- [NPM](https://www.npmjs.com/) - Package Manager

### Resources Used

- [Typescript Excersises](https://typescript-exercises.github.io/)
- [Typescript Generics Tutorial](https://www.youtube.com/watch?v=nViEqpgwxHE)
- [Typescript documentation](https://www.typescriptlang.org/docs/handbook/)
