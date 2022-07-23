import express from 'express';
import {rootRouter} from './routes/root.router';
import {getDirPathFromEnv, getFilesList} from './services/filesReader';

// Server setup
const PORT = 3000;
const app = express();

// Send all calls to / to rootRouter
app.use('/', rootRouter);

// Start the Express server
app.listen(PORT, () => {
  const directoryPath = getDirPathFromEnv();
  let files = [];
  files = getFilesList(directoryPath);
  // TODO save directory files list to redux state object

  console.log(`Express server started at http://localhost:${PORT}`);
  console.log(`Initial files list: ${JSON.stringify(files)}`);
});
