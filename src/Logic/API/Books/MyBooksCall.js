import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

const MyBooksCall = async (jwt, dispatch) => {
  try {
    const res = await axios.get(`${api}/shelves/my`, {
      headers: {
        Authorization: jwt,
      },
    });
    const myBooks = res.data;
    dispatch({ type: 'SET-MY-BOOKS', myBooks });
    return 0;
  } catch (error) {
    const errorCode = err.response.data.errorCode;
    return errorCode;
  }
};

export default MyBooksCall;
