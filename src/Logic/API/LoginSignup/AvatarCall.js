import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

const AvatarCall = async (token, dispatch) => {
  try {
    const res = await axios.get(`${api}/avatar`, {
      headers: {
        Authorization: token,
      },
    });
    const avatar = Buffer.from(res.data, 'binary').toString('base64url');
    dispatch({ type: 'SET-AVATAR', avatar });
    return 0;
  } catch (err) {
    const errorCode = err.response.data.errorCode;
    return errorCode;
  }
};

export default AvatarCall;
