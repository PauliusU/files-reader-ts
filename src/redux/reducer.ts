/** @module redux.reducer */
import {Action} from './action';

export type File = {
  name: string,
  active: boolean
};

const reducer = (state: File[] = [], action: Action) => {
  if (action.type === 'SCAN') {
    // Set all files to {active: false}
    for (const storedFile of state) {
      storedFile.active = false;
    }

    // Mark only existing files {active: true} and add new files
    for (const fileName of action.payload.fileNames) {
      const index = state.findIndex(
          (storedFile) => storedFile.name === fileName,
      );

      if (index == -1) {
        state.push({name: fileName, active: true});
      } else {
        state[index].active = true;
      }
    }
  }

  return state;
};

export default reducer;
