import { useState } from 'react';

const useStates = () => {
  const [usernameError, setUsernameError] = useState();
  const [passwordError, setPasswordError] = useState();

  return {
    usernameError,
    passwordError,
    setUsernameError,
    setPasswordError,
  };
};

export default useStates;
