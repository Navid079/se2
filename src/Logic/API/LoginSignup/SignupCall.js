import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

const SignupCall = async user => {
  try {
    await axios.post(`${api}/signup`, user);
    return 0;
  } catch (err) {
    const errorCode = err.response.data.errorCode;
    return errorCode;
  }
};

export default SignupCall;
