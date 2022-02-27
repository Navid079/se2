import errorFinder from '../../../Logic/Errors/ErrorFinder';
import validator from 'validator';

export const errorHandler = (states, errorCode) => {
  try {
    const error = errorFinder('login', errorCode);
    console.error(`${error.code}: ${error.description}`);
    states[error.hookName](error.message);
  } catch {
    console.log('Not an error. Maybe something is wrong?');
  }
};

export const preCallValidator = ({ username, password }) => {
  if (!username) return 0x1009;
  if (!password) return 0x100a;
  if (
    !validator.isLength(username, { min: 4, max: 25 }) ||
    !validator.matches(username, /^[a-zA-Z]+[0-9a-zA-Z_]*$/)
  )
    return 0x100b;
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    })
  )
    return 0x100c;
  return 0;
};
