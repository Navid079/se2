import SignupCall from '../../../Logic/API/LoginSignup/SignupCall';
import { errorHandler, preCallValidator } from './ErrorHandler';

export const submitHandler = async (refs, states, navigate) => {
  const { fullNameInput, usernameInput, passwordInput, phoneInput } = refs;
  const fullName = fullNameInput.current.value;
  const username = usernameInput.current.value;
  const password = passwordInput.current.value;
  const phone = phoneInput.current.value;

  let result = preCallValidator({ fullName, username, password, phone });
  if (result === 0) {
    console.log('API Call occured');
    result = await SignupCall({ fullName, username, password, phone });
  }
  if (result === 0) navigate('/');
  else {
    const errorCode = result.toString(16);
    errorHandler(states, errorCode);
  }
};
