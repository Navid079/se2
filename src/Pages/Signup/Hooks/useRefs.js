import { useRef } from 'react';

const useRefs = () => {
  const fullNameInput = useRef();
  const usernameInput = useRef();
  const passwordInput = useRef();
  const phoneInput = useRef();

  return {
    fullNameInput,
    usernameInput,
    passwordInput,
    phoneInput,
  };
};

export default useRefs;
