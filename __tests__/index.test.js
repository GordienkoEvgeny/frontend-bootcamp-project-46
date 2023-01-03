import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import readFile from '../src/readFile.js';

const file1 = 'file1.json';
const file2 = 'file2.json';
const fileYML1 = 'file1.yml';
const fileYML2 = 'file2.yml';

test('json', () => {
  const resultJSON = readFile('resultJSON.json');
  const resultJSON2 = readFile('resultJSON2.json');
  expect(genDiff(file1, file2, 'json')).toEqual(resultJSON);
  expect(genDiff(file2, file1, 'json')).toEqual(resultJSON2);
  expect(genDiff(fileYML1, fileYML2, 'json')).toEqual(resultJSON);
  expect(genDiff(fileYML2, fileYML1, 'json')).toEqual(resultJSON2);
  expect(genDiff(fileYML1, file2, 'json')).toEqual(resultJSON);
  expect(genDiff(fileYML2, file1, 'json')).toEqual(resultJSON2);
  expect(genDiff(file1, fileYML2, 'json')).toEqual(resultJSON);
  expect(genDiff(file2, fileYML1, 'json')).toEqual(resultJSON2);
});

test('stylish', () => {
  const resultStylish = readFile('resultStylish.txt');
  const resultStylish2 = readFile('resultStylish2.txt');
  expect(genDiff(file1, file2)).toEqual(resultStylish);
  expect(genDiff(file2, file1)).toEqual(resultStylish2);
  expect(genDiff(fileYML1, fileYML2)).toEqual(resultStylish);
  expect(genDiff(fileYML2, fileYML1)).toEqual(resultStylish2);
  expect(genDiff(fileYML1, file2)).toEqual(resultStylish);
  expect(genDiff(fileYML2, file1)).toEqual(resultStylish2);
  expect(genDiff(file1, fileYML2)).toEqual(resultStylish);
  expect(genDiff(file2, fileYML1)).toEqual(resultStylish2);
});

test('plain', () => {
  const resultPlain = readFile('resultPlain.txt');
  const resultPlain2 = readFile('resultPlain2.txt');
  expect(genDiff(file1, file2, 'plain')).toBe(resultPlain);
  expect(genDiff(file2, file1, 'plain')).toEqual(resultPlain2);
  expect(genDiff(fileYML1, fileYML2, 'plain')).toEqual(resultPlain);
  expect(genDiff(fileYML2, fileYML1, 'plain')).toEqual(resultPlain2);
  expect(genDiff(fileYML1, file2, 'plain')).toEqual(resultPlain);
  expect(genDiff(fileYML2, file1, 'plain')).toEqual(resultPlain2);
  expect(genDiff(file1, fileYML2, 'plain')).toEqual(resultPlain);
  expect(genDiff(file2, fileYML1, 'plain')).toEqual(resultPlain2);
});
