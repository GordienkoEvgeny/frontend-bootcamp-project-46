// import _ from 'lodash';
/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
// eslint-disable-next-line import/extensions
import stylish from './formatters/stylish.js';
// eslint-disable-next-line import/extensions
import parse from './parsers.js';
// eslint-disable-next-line import/extensions
import buildTree from './buildTree.js';

export const readFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), path.join('./__fixtures__', filename.trim())), 'utf-8');
const getFormat = (filename) => path.extname(filename);

const formatCheck = (innerTree, format) => {
  switch (format) {
    case 'stylish':
      return stylish(innerTree);
    case 'json':
      return JSON.stringify(innerTree);
    default:
      throw new Error(`Формат не поддерживается: ${format}`);
  }
};

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const firstFileFormat = getFormat(filepath1);
  const secondFileFormat = getFormat(filepath2);
  const firstObject = readFile(filepath1);
  const secondObject = readFile(filepath2);
  const data1 = parse(firstFileFormat, firstObject);
  const data2 = parse(secondFileFormat, secondObject);
  const innerTree = buildTree(data1, data2);
  return formatCheck(innerTree, formatName);
};
export default genDiff;
