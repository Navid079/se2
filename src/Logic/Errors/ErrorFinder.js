import errorDB from './ErrorList';

const errorFinder = (page, code) => {
  const prefixedCode = `e0x${code}`;
  const pageDB = errorDB[page];
  if (!pageDB) {
    throw new Error('Page is not valid');
  }
  const err = pageDB[prefixedCode];
  if (!err) {
    throw new Error('Error not found');
  }
  return err;
};

export default errorFinder;
