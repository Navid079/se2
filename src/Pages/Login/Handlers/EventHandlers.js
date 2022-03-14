import LoginCall from '../../../Logic/API/LoginSignup/LoginCall';
import { errorHandler, preCallValidator } from './ErrorHandler';

export const submitHandler = async (refs, states, dispatch, navigate) => {
  const { usernameInput, passwordInput } = refs;
  const username = usernameInput.current.value;
  const password = passwordInput.current.value;

  let result = preCallValidator({ username, password });
  if (result === 0) {
    console.log('API Call occurred');
    result = await LoginCall({ username, password }, dispatch);
  }
  if (result === 0) {
    navigate('/app');
  } else {
    const errorCode = result.toString(16);
    errorHandler(states, errorCode);
  }
};
