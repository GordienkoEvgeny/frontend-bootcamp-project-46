import path from 'path';
import parse from './parsers.js';
import buildTree from './buildTree.js';
import checkFormat from './formatters/index.js';
import readFile from './readFile.js';

const getFormat = (filename) => path.extname(filename);
const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const firstFileFormat = getFormat(filepath1);
  const secondFileFormat = getFormat(filepath2);
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const firstObj = parse(firstFileFormat, data1);
  const secondObj = parse(secondFileFormat, data2);
  const innerTree = buildTree(firstObj, secondObj);
  return checkFormat(innerTree, formatName);
};
export default genDiff;
