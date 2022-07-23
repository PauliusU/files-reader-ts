/** @module routes.root */
import express from 'express';
import store from '../redux/store';

// eslint-disable-next-line new-cap
export const rootRouter = express.Router();

/**
 * Returns full list of scanned files
 */
rootRouter.get('/list', (_, res) => {
  try {
    // TODO return full list of files from state
    // res.setHeader('Content-Type', 'application/json');
    // res.end(JSON.stringify({name: 'File_name.jpg', active: true}));
    // res.end({name: 'File_name.jpg', active: true});
    const result = {name: 'File_name.jpg', active: true};
    res.send(result);
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

/**
 * Scans files and saves result to the Redux state object, marking old files
 * {active: false} if they are not available anymore.
 */
rootRouter.patch('/scan', (_, res) => {
  try {
    // eslint-disable-next-line max-len
    // TODO scan defined PATH and update redux state object, marking old files {active: false} if they are not available anymore
    res.json({name: 'File_name.jpg', active: true});
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

/**
 * Download the current existing state object
 */
rootRouter.get('/download-state', (_, res) => {
  try {
    // res.json({name: 'File_name.jpg', active: true});
    res.json(store.getState());
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});
