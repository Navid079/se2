const BookReducer = (state, action) => {
  switch (action.type) {
    case 'SET-MY-BOOKS':
      return {
        ...state,
        myBooks: action.myBooks,
      };
    case 'ADD-SHELF':
      let shelves = state.shelves;
      shelves.push(action.shelf);
      return {
        ...state,
        shelves,
      };
    default:
      return state;
  }
};

export default BookReducer;
