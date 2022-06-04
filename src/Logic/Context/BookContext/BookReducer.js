const BookReducer = (state, action) => {
  let retr;
  switch (action.type) {
    case 'SET-MY-BOOKS':
      retr = {
        ...state,
        myBooks: action.myBooks,
      };
      break;
    case 'ADD-MY-BOOK':
      retr = {
        ...state,
      };
      retr.myBooks.push(action.book);
      break;
    case 'UPDATE-MY-BOOK':
      retr = {
        ...state,
      };
      retr.myBooks.filter(book => book._id !== action.book._id);
      retr.myBooks.push(action.book);
      break;
    case 'SET-SHELVES':
      retr = {
        ...state,
        shelves: action.shelves,
      };
      break;
    case 'RESET':
      retr = {
        myBooks: [],
        shelves: [],
      };
      break;
    default:
      retr = state;
      break;
  }
  localStorage.setItem('book-context', retr);
  return retr;
};

export default BookReducer;
