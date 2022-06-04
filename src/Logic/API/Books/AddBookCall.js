import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

const AddBookCall = async (bookData, token, dispatch) => {
  try {
    const res = await axios.post(`${api}/shelves/my/add`, bookData, {
      headers: {
        Authorization: token,
      },
    });
    const book = res.data;
    dispatch({ type: 'ADD-MY-BOOK', book });
    return book;
  } catch (err) {
    const errorCode = err.response.data.errorCode;
    return errorCode;
  }
};

export default AddBookCall;
