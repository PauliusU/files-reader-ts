import express from 'express';
import store from './redux/store';
import {getDirPathFromEnv, getFilesList} from './reader';

// Server setup
const PORT = 3000;
const app = express();
let files = [];

/**
 * Returns full list of scanned files
 */
app.get('/list', (_, res) => {
  // TODO return full list of files from state
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({name: 'File_name.jpg', active: true}));
});

/**
 * Scans files and saves result to the Redux state object, marking old files
 * {active: false} if they are not available anymore.
 */
app.patch('/scan', (_, res) => {
  // eslint-disable-next-line max-len
  // TODO scan defined PATH and update redux state object, marking old files {active: false} if they are not available anymore
  res.json({name: 'File_name.jpg', active: true});
});

/**
 * Download the current existing state object
 */
app.get('/download-state', (_, res) => {
  res.json(store.getState());
});

// Start the Express server
app.listen(PORT, () => {
  // TODO read defined directory files and save it to redux state object
  const directoryPath = getDirPathFromEnv();
  files = getFilesList(directoryPath);

  console.log(`Express server is running on port ${PORT}`);
  console.log(`Initial files list: ${JSON.stringify(files)}`);
});
