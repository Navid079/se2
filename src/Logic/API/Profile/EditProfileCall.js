import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

const EditProfileCall = async (user, dispatch) => {
  try {
    const res = await axios.put(`${api}/profile/edit`, user);
    dispatch({ type: 'LOGIN', user: res.data });
    return 0;
  } catch (err) {
    const errorCode = err.response.data.errorCode;
    return errorCode;
  }
};

export default EditProfileCall;
