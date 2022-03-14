import { createContext, useReducer } from 'react';
import BookReducer from './BookReducer';

const INITIAL = {
  myBooks: [
    {
      title: 'test',
      price: '2000',
      stars: 4,
      finished: false,
    },
  ],
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
