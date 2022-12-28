import yaml from 'js-yaml';

const parser = (format, data) => {
  if (format === '.json') {
    return JSON.parse(data);
  } if (format === '.yml' || format === '.yaml') {
    return yaml.load(data);
  }
  throw new Error(`Формат не поддерживается: ${format}`);
};
export default parser;
