const AppReducer = (state, action) => {
  let retr;
  switch (action.type) {
    case 'CHANGE-PAGE':
      retr = {
        ...state,
        currentPage: action.currentPage,
      };
      break;
    case 'UPDATE-SHELF':
      retr = {
        ...state,
        lastShelfUpdate: +new Date(),
      };
      break;
    case 'SYNC-MY-BOOKS':
      retr = {
        ...state,
        myBooksSynced: true,
      };
      break;
    case 'RESET':
      retr = {
        currentPage: '/',
        lastShelfUpdate: '',
        myBooksSynced: false,
      };
      break;
    default:
      retr = state;
      break;
  }
  localStorage.setItem('app-context', retr);
  return retr;
};

export default AppReducer;
