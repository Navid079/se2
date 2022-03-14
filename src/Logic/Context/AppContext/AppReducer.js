const AppReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE-PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

export default AppReducer;
