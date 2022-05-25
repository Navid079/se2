const UserReducer = (state, action) => {
  let retr;
  switch (action.type) {
    case 'LOGIN':
      retr = {
        ...state,
        username: action.user.username,
        fullName: action.user.fullName,
        phone: action.user.phone,
        avatar: action.user.avatar,
        bio: action.user.bio,
        token: action.user.token,
        refresh: action.user.refresh,
        isLoggedIn: true,
      };
      break;
    case 'LOGOUT':
      retr = {
        ...state,
        username: '',
        fullName: '',
        phone: '',
        token: '',
        refresh: '',
        avatar: '',
        bio: '',
        isLoggedIn: false,
      };
      localStorage.clear();
      return retr;
    case 'UPDATE':
      retr = {
        ...state,
        ...action.user,
      };
      break;
    default:
      retr = state;
      break;
  }
  localStorage.setItem('user-context', retr);
  return retr;
};

export default UserReducer;
