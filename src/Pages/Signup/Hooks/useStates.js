import { useState } from 'react';

const useStates = () => {
  const [fullNameError, setFullNameError] = useState();
  const [usernameError, setUsernameError] = useState();
  const [passwordError, setPasswordError] = useState();
  const [phoneError, setPhoneError] = useState();

  return {
    fullNameError,
    usernameError,
    passwordError,
    phoneError,
    setFullNameError,
    setUsernameError,
    setPasswordError,
    setPhoneError,
  };
};

export default useStates;
