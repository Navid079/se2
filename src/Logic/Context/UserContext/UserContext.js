import { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';

let localBackup = localStorage.getItem('user-context');
const INITIAL = localBackup
  ? JSON.parse(localBackup)
  : {
      fullName: '',
      username: '',
      phone: '',
      avatar: '',
      token: '',
      refresh: '',
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
