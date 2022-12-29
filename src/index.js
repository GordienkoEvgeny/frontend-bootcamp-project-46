// import _ from 'lodash';
/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import checkFormat from './formatters/index2.js';

export const readFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), path.join('./__fixtures__', filename.trim())), 'utf-8');
const getFormat = (filename) => path.extname(filename);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const firstFileFormat = getFormat(filepath1);
  const secondFileFormat = getFormat(filepath2);
  const firstObject = readFile(filepath1);
  const secondObject = readFile(filepath2);
  const data1 = parse(firstFileFormat, firstObject);
  const data2 = parse(secondFileFormat, secondObject);
  const innerTree = buildTree(data1, data2);
  return checkFormat(innerTree, formatName);
};
export default genDiff;
