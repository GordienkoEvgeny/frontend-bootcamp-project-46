import { test, expect } from '@jest/globals';
import fs from 'fs';
import process from 'process';
import path from 'path';
import genDiff from '../src/index';

const readFile = (filename) => fs.readFileSync(path.resolve(process.cwd(), path.join('./__fixtures__', filename.trim())), 'utf-8');
const result = readFile('resultStep3.txt');
test('genDiff', () => {
  expect(genDiff('file1.json', ' file2.json')).toEqual(result);
});
