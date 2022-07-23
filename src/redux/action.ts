/** @module redux.action */

export type Action = {
  type: string,
  payload: {
    fileNames: string[]
  }
};

const scanAction = (fileNames: string[]): Action => ({
  type: 'SCAN',
  payload: {
    fileNames: fileNames,
  },
});

export default scanAction;
