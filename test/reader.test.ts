import {isUnixHiddenPath} from '../src/reader';

describe('isUnixHiddenPath()', () => {
  it('Returns true if unix path points to hidden item', () => {
    expect(isUnixHiddenPath('.hiddenFile.txt')).toBe(true);
    expect(isUnixHiddenPath('/home/user/.bashrc')).toBe(true);
  });
  it('Returns false if unix path does not point to hidden item', () => {
    expect(isUnixHiddenPath('normalFile.txt')).toBe(false);
    expect(isUnixHiddenPath('/home/user/normalFile.txt')).toBe(false);
  });
  it('Returns false for Windows paths', () => {
    expect(isUnixHiddenPath('c:\\Users\\user\\normalFile.txt')).toBe(false);
    expect(isUnixHiddenPath('c:\\Users\\user\\.startWithDot.txt')).toBe(false);
  });
});
