import LoginCall from '../../../Logic/API/LoginSignup/LoginCall';

export const submitHandler = async (refs, dispatch, navigate) => {
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
    console.log(result.toString(16));
  }
};
