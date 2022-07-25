/** @module routes.root */
import express from 'express';
import store from '../redux/store';
import {saveFilesInStore} from '../services/filesReader';

// eslint-disable-next-line new-cap
export const rootRouter = express.Router();

/**
 * Returns full list of scanned files
 */
rootRouter.get('/list', (_, res) => {
  try {
    const files = store.getState();
    const activeFiles = files.filter((file) => file.active);
    res.status(200).json(activeFiles);
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
    saveFilesInStore();
    res.status(200).json({success: true});
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});

/**
 * Download the current existing state object
 */
rootRouter.get('/download-state', (_, res) => {
  try {
    res.status(200).json(store.getState());
  } catch (err: any) {
    res.status(500).send(err.message);
  }
});
