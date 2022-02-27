import validator from 'validator';

import errorFinder from '../../../Logic/Errors/ErrorFinder';

export const errorHandler = (states, errorCode) => {
  try {
    const error = errorFinder('signup', errorCode);
    console.error(`${error.code}: ${error.description}`);
    states[error.hookName](error.message);
  } catch {
    console.log('Not an error. Maybe something is wrong?');
  }
};

export const preCallValidator = ({ fullName, username, password, phone }) => {
  if (!fullName) return 0x1000;
  if (!username) return 0x1001;
  if (!password) return 0x1002;
  if (!phone) return 0x1003;

  if (
    !validator.isLength(username, { min: 4, max: 25 }) ||
    !validator.matches(username, /^[a-zA-Z]+[0-9a-zA-Z_]*$/)
  )
    return 0x1004;

  if (!validator.matches(phone, /^(0|0098|098|\+98|98)?9[0-9]{9}$/))
    return 0x1005;
  if (
    !validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    })
  )
    return 0x1006;
  return 0;
};
