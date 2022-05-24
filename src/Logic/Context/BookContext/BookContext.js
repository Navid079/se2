import { createContext, useReducer } from 'react';
import BookReducer from './BookReducer';

const localBackup = localStorage.getItem('book-context');
const INITIAL = localBackup
  ? JSON.parse(localBackup)
  : {
      myBooks: [],
      shelves: [],
    };

const BookContext = createContext(INITIAL);

export const BookContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BookReducer, INITIAL);

  return (
    <BookContext.Provider value={{ ...state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContext;
