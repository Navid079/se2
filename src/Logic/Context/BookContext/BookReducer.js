const BookReducer = (state, action) => {
  switch (action.type) {
    case 'SET-MY-BOOKS':
      return {
        ...state,
        myBooks: action.myBooks,
      };
    case 'SET-SHELVES':
      return {
        ...state,
        shelves: action.shelves,
      };
    default:
      return state;
  }
};

export default BookReducer;
