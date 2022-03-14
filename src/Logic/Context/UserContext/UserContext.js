import { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';

const INITIAL = {
  fullName: '',
  username: '',
  phone: '',
  avatar: '',
  isLoggedIn: false,
};

const UserContext = createContext(INITIAL);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL);

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
