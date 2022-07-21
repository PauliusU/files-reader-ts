/** @module redux.reducer */

const reducer = (state = {files: []}, action: any) => {
  if (action.type === 'rescan') {
    return {
      ...state,
      // action.payload.fileInfo
      files: [],
    };
  }

  return state;
};


export default reducer;
