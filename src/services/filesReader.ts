/** @module services.filesReader */
import 'dotenv/config';
import * as fs from 'node:fs';

/**
 * Reads directory and returns list of files in that directory
 * @param {string} directoryPath
 * @return {string[]}
 */
export const getFilesList = (directoryPath: string): string[] => {
  let files = fs.readdirSync(directoryPath);
  files = files.filter((file) => !isUnixHiddenPath(file));
  return files;
};

/**
  * Checks whether a path starts with or contains a hidden file or a folder
  * @param {string} path The path of the file or a folder to be checked
  * @return {boolean} `true` if is hidden and `false` otherwise
  */
export const isUnixHiddenPath = (path: string): boolean => {
  return (/(^|\/)\.[^/.]/g).test(path);
};

/**
 * Get directory path for files reader from environment variable
 * @param {string} envVariable Environment variable to read directory path from
 * @return {string}
 */
export const getDirPathFromEnv =
  (envVariable = 'FILES_READER_PATH'): string => {
    const path = process.env?.[envVariable];

    if (!path) {
      throw new Error('Environment variable for directory path not found');
    }
    if (!fs.existsSync(path)) throw new Error('Path does not exist');
    const isDirectory = fs.statSync(path).isDirectory();
    if (!isDirectory) throw new Error('Path is not a directory');

    return path;
  };
