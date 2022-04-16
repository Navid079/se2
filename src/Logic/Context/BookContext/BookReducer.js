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
    case 'SET-COVER':
      for (let i in state.myBooks) {
        if (state.myBooks[i]._id === action.id) {
          state.myBooks[i].cover = action.cover;
        }
      }
      for (let i in state.shelves) {
        for (let j in state.shelves[i].books) {
          if (state.shelves[i].books[j]._id === action.id) {
            state.shelves[i].books[j].cover = action.cover;
          }
        }
      }
      // console.log(state);
      return { ...state };
    case 'RESET':
      return {
        myBooks: [],
        shelves: [],
      };
    default:
      return state;
  }
};

export default BookReducer;
