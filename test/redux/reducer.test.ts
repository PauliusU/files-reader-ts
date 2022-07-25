import reducer, {File} from '../../src/redux/reducer';

describe('reducer()', () => {
  it('Initializes state correctly', () => {
    const state = [] as File[];
    const action = {
      type: 'SCAN',
      payload: {
        fileNames: ['file1.jpg', 'file2.jpg'],
      },
    };

    expect(reducer(state, action)).toEqual([
      {name: 'file1.jpg', active: true},
      {name: 'file2.jpg', active: true},
    ]);
  });

  it('Updates existing state correctly', () => {
    const state = [
      {name: 'file1.jpg', active: true},
      {name: 'file2.jpg', active: false},
    ];
    const action = {
      type: 'SCAN',
      payload: {
        fileNames: ['file2.jpg', 'file3.jpg'],
      },
    };

    expect(reducer(state, action)).toEqual([
      {name: 'file1.jpg', active: false},
      {name: 'file2.jpg', active: true},
      {name: 'file3.jpg', active: true},
    ]);
  });
});
