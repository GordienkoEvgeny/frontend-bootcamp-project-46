import { test, expect } from '@jest/globals';
import genDiff, { readFile } from '../src/index.js';

const result = readFile('resultStylish.txt');
const resultPlain = readFile('resultPlain.txt');
test('genDiff, files.json', () => {
  expect(genDiff('file1.json', ' file2.json')).toEqual(result);
});

test('genDiff, files.yml', () => {
  expect(genDiff('file1.yml', ' file2.yml')).toEqual(result);
});

test('plain', () => {
  expect(genDiff('file1.json', ' file2.json', 'plain')).toBe(resultPlain);
});
