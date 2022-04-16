const UserReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        username: action.user.username,
        fullName: action.user.fullName,
        phone: action.user.phone,
        token: action.user.token,
        refresh: action.user.refresh,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      localStorage.clear()
      return {
        ...state,
        username: '',
        fullName: '',
        phone: '',
        token: '',
        refresh: '',
        avatar: '',
        isLoggedIn: false,
      };
    case 'SET-AVATAR':
      return {
        ...state,
        avatar: action.avatar,
      };
    default:
      return state;
  }
};

export default UserReducer;
