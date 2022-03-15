const AppReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE-PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case 'UPDATE-SHELF':
      return {
        ...state,
        lastShelfUpdate: +new Date(),
      };
    case 'SYNC-MY-BOOKS':
      return {
        ...state,
        myBooksSynced: true,
      };
    case 'RESET':
      return {
        currentPage: '/',
        lastShelfUpdate: '',
        myBooksSynced: false,
      };
    default:
      return state;
  }
};

export default AppReducer;
