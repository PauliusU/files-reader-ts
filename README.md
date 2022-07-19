# files-reader-ts

![build](https://github.com/pauliusu/files-reader-ts/actions/workflows/build.yml/badge.svg)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)

- [files-reader-ts](#files-reader-ts)
  - [Requirements](#requirements)

## Requirements

- [ ] 1. When the program starts, it should read defined directory files and save it to redux state object.
- [ ] 2. Program should be able to return full list of files from state  on http://127.0.0.1:3000/list

```json
{
    name: 'File_name.jpg',
    active: true
}
```

- [ ] 3. Program should have functionality to scan defined PATH again. After rescan, redux state object should be updated, marking old files {active: false} if they are not available anymore. http://127.0.0.1:3000/scan
- [ ] 4. Program should be able to download the current existing state object. http://127.0.0.1:3000/download-state

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
