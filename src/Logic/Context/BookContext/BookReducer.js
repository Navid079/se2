const BookReducer = (state, action) => {
  let retr;
  switch (action.type) {
    case 'SET-MY-BOOKS':
      retr = {
        ...state,
        myBooks: action.myBooks,
      };
    case 'SET-SHELVES':
      retr = {
        ...state,
        shelves: action.shelves,
      };
    case 'RESET':
      retr = {
        myBooks: [],
        shelves: [],
      };
    default:
      retr = state;
  }
  localStorage.setItem('book-context', retr);
  return retr;
};

export default BookReducer;
