import {
  getDirPathFromEnv,
  isUnixHiddenPath,
} from '../../src/services/filesReader';

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

describe('getDirPathFromEnv()', () => {
  it('Throws error if DIRECTORY_PATH is not set (if is falsy)', () => {
    process.env.DIRECTORY_PATH = '';
    expect(() => getDirPathFromEnv()).toThrowError();
    expect(() => getDirPathFromEnv()).toThrow(
        'Environment variable for directory path not found',
    );
  });
  it('Throws error if provided path does not exist', () => {
    process.env.DIRECTORY_PATH = '/someNonExisting/path/';
    expect(() => getDirPathFromEnv()).toThrow('Path does not exist');
  });
});
