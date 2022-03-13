const { createContext } = require('react');

const INITIAL = {
  currentPage: 'landing',
};

const AppContext = createContext(INITIAL);

const AppContextProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

