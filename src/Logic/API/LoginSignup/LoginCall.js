import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

const LoginCall = async (user, dispatch) => {
  try {
    const res = await axios.post(`${api}/login`, user);
    const contextUser = { ...user, ...res.data };
    dispatch({ type: 'LOGIN', user: contextUser });
    return 0;
  } catch (err) {
    const errorCode = err.response.data.errorCode;
    return errorCode;
  }
};

export default LoginCall;
