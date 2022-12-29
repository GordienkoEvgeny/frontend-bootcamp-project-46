import { test, expect } from '@jest/globals';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const file1 = getFixturePath('file1.json');
const file2 = getFixturePath('file2.json');
const fileYML1 = getFixturePath('file1.yml');
const fileYML2 = getFixturePath('file2.yml');

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
