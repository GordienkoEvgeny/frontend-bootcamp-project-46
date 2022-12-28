// import _ from 'lodash';
/* eslint-disable no-console */
import fs from 'fs';
import process from 'process';
import path from 'path';
// eslint-disable-next-line import/extensions
import parser from './parsers.js';

export const readFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), path.join('./__fixtures__', filename.trim())), 'utf-8');
const getFormat = (filename) => path.extname(filename);

export const genDiff = (filepath1, filepath2) => {
  const firstFileFormat = getFormat(filepath1);
  const secondFileFormat = getFormat(filepath2);
  const firstObject = readFile(filepath1);
  const secondObject = readFile(filepath2);
  const data1 = parser(firstFileFormat, firstObject);
  const data2 = parser(secondFileFormat, secondObject);
  const firstObjectKeys = Object.keys(data1);
  const secondObjectKeys = Object.keys(data2);
  const unionObjects = { ...data1, ...data2 };
  const unionObjectsEntries = Object.entries(unionObjects).sort();
  const result = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of unionObjectsEntries) {
    if (firstObjectKeys.includes(key) && secondObjectKeys.includes(key) && data1[key] === value) {
      result[`  ${key}`] = data1[key];
    } else if (!firstObjectKeys.includes(key)) {
      result[`+ ${key}`] = data2[key];
    } else if (firstObjectKeys.includes(key) && secondObjectKeys.includes(key)
     && data1[key] !== value) {
      result[`- ${key}`] = data1[key];
      result[`+ ${key}`] = data2[key];
    } else if (firstObjectKeys.includes(key) && !secondObjectKeys.includes(key)) {
      result[`- ${key}`] = data1[key];
    }
  }
  const toString = JSON.stringify(result, null, '   ');
  return toString.replace(/["']/g, '');
};
