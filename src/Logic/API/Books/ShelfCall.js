import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

const ShelfCall = async (token, dispatch) => {
  try {
    const res = await axios.get(`${api}/shelves/home`, {
      headers: {
        Authorization: token,
      },
    });

    const shelves = res.data;
    dispatch({ type: 'SET-SHELVES', shelves });
    return 0;
  } catch (err) {
    const errorCode = err.response.data.errorCode;
    return errorCode;
  }
};

export default ShelfCall;
