import yaml from 'js-yaml';

const parser = (format, data) => {
  if (format === '.json') {
    return JSON.parse(data);
  } if (format === '.yml' || format === '.yaml') {
    return yaml.load(data);
  }
  return (`Формат ${format} не поддерживается.`);
};
export default parser;
