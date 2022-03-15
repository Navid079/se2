import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

const MyBooksCall = async (token, dispatch) => {
  try {
    const res = await axios.get(`${api}/shelves/my`, {
      headers: {
        Authorization: token,
      },
    });
    const myBooks = res.data;
    dispatch({ type: 'SET-MY-BOOKS', myBooks });
    return 0;
  } catch (err) {
    const errorCode = err.response.data.errorCode;
    return errorCode;
  }
};

export default MyBooksCall;
