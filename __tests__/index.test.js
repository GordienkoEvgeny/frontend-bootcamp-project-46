import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import readFile from '../src/readFile.js';

const file1 = 'file1.json';
const file2 = 'file2.json';
const fileYML1 = 'file1.yml';
const fileYML2 = 'file2.yml';

const result = readFile('resultStylish.txt');
const resultPlain = readFile('resultPlain.txt');

test('json', () => {
  const resultJSON = readFile('resultJSON.json');
  const toEqual = genDiff(file1, file2, 'json');
  expect(resultJSON).toEqual(toEqual);
});

test('genDiff, files.yml', () => {
  expect(genDiff(fileYML1, fileYML2)).toEqual(result);
});

test('plain', () => {
  expect(genDiff(file1, file2, 'plain')).toBe(resultPlain);
});
