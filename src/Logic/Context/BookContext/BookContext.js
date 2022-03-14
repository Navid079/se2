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
  shelves: [
    {
      title: 'shelf1',
      books: [
        {
          title: 'test1',
          price: '2000',
          stars: 4,
          author: 'John',
        },
        {
          title: 'test2',
          price: '1000',
          stars: 3,
          author: 'Max',
        },
        {
          title: 'test3',
          price: '50000',
          stars: 5,
          author: 'Ali',
        },
      ],
    },
  ],
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
