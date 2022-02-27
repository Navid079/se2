import LoginCall from '../../../Logic/API/LoginSignup/LoginCall';
import { errorHandler } from './ErrorHandler';

export const submitHandler = async (refs, states, dispatch, navigate) => {
  const { usernameInput, passwordInput } = refs;
  const result = await LoginCall(
    {
      username: usernameInput.current.value,
      password: passwordInput.current.value,
    },
    dispatch
  );
  if (result === 0) {
    navigate('/home');
  } else {
    const errorCode = result.toString(16);
    errorHandler(states, errorCode);
  }
};
