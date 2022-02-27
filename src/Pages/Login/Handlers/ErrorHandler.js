import errorFinder from '../../../Logic/Errors/ErrorFinder';

export const errorHandler = (states, errorCode) => {
  try {
    const error = errorFinder('login', errorCode);
    console.error(`${error.code}: ${error.description}`);
    states[error.hookName](error.message);
  } catch {
    console.log('Not an error. Maybe something is wrong?');
  }
};
