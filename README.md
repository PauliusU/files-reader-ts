# files-reader-ts

![build](https://github.com/pauliusu/files-reader-ts/actions/workflows/build.yml/badge.svg)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/PauliusU/files-reader-ts/blob/master/LICENSE)

Exercise for creating endpoints related to reading of directory files and saving their status (active / deleted) into a Redux state object.

**TABLE OF CONTENTS:**

- [files-reader-ts](#files-reader-ts)
  - [Technologies used](#technologies-used)
  - [How to launch](#how-to-launch)
  - [Requirements](#requirements)

## Technologies used

- [Node.js](https://nodejs.org) a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [TypeScript](https://www.typescriptlang.org/) a strongly typed programming language and a strict syntactical superset of JavaScript.
- [Express](https://expressjs.com/) a fast, unopinionated, minimalist web framework.
- [Redux](https://redux.js.org/) a state container for JavaScript applications.

## How to launch

**TLDR:** set `DIRECTORY_PATH` environment variable in .env file and launch start script `yarn start`.

Step by step quide:

1. Clone the repo

```bash
git clone https://github.com/PauliusU/files-reader-ts.git
```

2. Navigate into the project

```bash
cd files-reader-ts
```

3. Install dependencies

```bash
yarn
```

4. Rename `.env.example` to `.env`

```bash
mv .env.example .env
```

5. Set desired path as `DIRECTORY_PATH` environment variable in `.env`

6. Run startup script

```bash
yarn start
```

## Requirements

1. When the program starts, it should read defined directory files and save it to redux state object.
2. Program should be able to return full list of files from state on http://127.0.0.1:3000/list

```json
{
    name: 'File_name.jpg',
    active: true
}
```

3. Program should have functionality to scan defined PATH again. After rescan, redux state object should be updated, marking old files {active: false} if they are not available anymore. http://127.0.0.1:3000/scan
4. Program should be able to download the current existing state object. http://127.0.0.1:3000/download-state

```json
[{
    name: 'File_name.jpg',
    active: true
},
{
    name: 'File_name2.jpg',
    active: false
}]
```
