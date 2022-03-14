import { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const INITIAL = {
  currentPage: '/',
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
