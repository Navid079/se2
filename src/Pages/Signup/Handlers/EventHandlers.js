import SignupCall from '../../../Logic/API/LoginSignup/SignupCall';
import { errorHandler } from './ErrorHandler';

export const submitHandler = async (refs, states, navigate) => {
  const { fullNameInput, usernameInput, passwordInput, phoneInput } = refs;
  const result = await SignupCall({
    fullName: fullNameInput.current.value,
    username: usernameInput.current.value,
    password: passwordInput.current.value,
    phone: phoneInput.current.value,
  });
  if (result === 0) navigate('/');
  else {
    const errorCode = result.toString(16);
    errorHandler(states, errorCode);
  }
};
