import stylish from './stylish.js';
import plain from './plain.js';

const checkFormat = (diff, format) => {
  if (format === 'stylish') {
    return stylish(diff);
  }
  if (format === 'plain') {
    return plain(diff);
  }
  throw new Error(`Формат не поддерживается: ${format}`);
};
export default checkFormat;
