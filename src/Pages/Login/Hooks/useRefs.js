const { useRef } = require('react');

const useRefs = () => {
  const usernameInput = useRef();
  const passwordInput = useRef();

  return { usernameInput, passwordInput };
};

export default useRefs;
