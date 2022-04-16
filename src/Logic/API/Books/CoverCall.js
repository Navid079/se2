import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

const CoverCall = async (id, dispatch) => {
  try {
    const res = await axios.get(`${api}/book/cover/bookId=${id}`);
    const cover = res.data.image;
    dispatch({ type: 'SET-COVER', id, cover });
    return 0;
  } catch (err) {
    const errorCode = err.response.data.errorCode;
    return errorCode;
  }
};

export default CoverCall;
