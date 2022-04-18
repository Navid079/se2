const UserReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
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
    case 'LOGOUT':
      localStorage.clear();
      return {
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
    case 'UPDATE':
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
};

export default UserReducer;
