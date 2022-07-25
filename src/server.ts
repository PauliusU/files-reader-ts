/** @module server */
import express from 'express';
import store from './redux/store';
import rootRouter from './routes/root.router';
import {saveFilesInStore} from './services/filesReader';

// Server setup
const PORT = 3000;
const app = express();

// Send all calls to / to rootRouter
app.use('/', rootRouter);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Express server started at http://localhost:${PORT}`);
  saveFilesInStore();

  console.log(`Initial files list: ${JSON.stringify(store.getState())}`);
});
