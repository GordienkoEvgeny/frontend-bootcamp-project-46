import stylish from './stylish.js';
import plain from './plain.js';
// eslint-disable-next-line import/no-unresolved
import json from './json.js';

const checkFormat = (diff, format) => {
  if (format === 'stylish') {
    return stylish(diff);
  } if (format === 'plain') {
    return plain(diff);
  } if (format === 'json') {
    return json(diff);
  }
  throw new Error(`Формат не поддерживается: ${format}`);
};
export default checkFormat;
