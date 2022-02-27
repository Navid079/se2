import SignupCall from '../../../Logic/API/LoginSignup/SignupCall';

export const submitHandler = async (refs, navigate) => {
  const { fullNameInput, usernameInput, passwordInput, phoneInput } = refs;
  const result = await SignupCall({
    fullName: fullNameInput.current.value,
    username: usernameInput.current.value,
    password: passwordInput.current.value,
    phone: phoneInput.current.value,
  });
  if (result === 0) navigate('/');
  else {
    console.log(result.toString(16));
  }
};
