const AppReducer = (state, action) => {
  let retr;
  switch (action.type) {
    case 'CHANGE-PAGE':
      retr = {
        ...state,
        currentPage: action.currentPage,
      };
    case 'UPDATE-SHELF':
      retr = {
        ...state,
        lastShelfUpdate: +new Date(),
      };
    case 'SYNC-MY-BOOKS':
      retr = {
        ...state,
        myBooksSynced: true,
      };
    case 'RESET':
      retr = {
        currentPage: '/',
        lastShelfUpdate: '',
        myBooksSynced: false,
      };
    default:
      retr = state;
  }
  localStorage.setItem('app-context', retr);
  return retr;
};

export default AppReducer;
