import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const localBackup = localStorage.getItem('app-context');
const INITIAL = localBackup
  ? JSON.parse(localBackup)
  : {
      currentPage: '/',
      lastShelfUpdate: '',
      myBooksSynced: false,
    };

const AppContext = createContext(INITIAL);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
