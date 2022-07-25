import scanAction from '../../src/redux/action';

describe('scanAction()', () => {
  it('Returns correct Redux action object structure', () => {
    const filesList = ['file1.jpg', 'file2.jpg'];
    const expectedObject = {
      type: 'SCAN',
      payload: {
        fileNames: ['file1.jpg', 'file2.jpg'],
      },
    };
    expect(scanAction(filesList)).toEqual(expectedObject);
  });
});
