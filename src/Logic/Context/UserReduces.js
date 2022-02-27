const UserReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        username: action.username,
        fullName: action.fullName,
        phone: action.phone,
        token: action.token,
        refresh: action.refresh,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        username: '',
        fullName: '',
        phone: '',
        token: '',
        refresh: '',
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default UserReducer;
