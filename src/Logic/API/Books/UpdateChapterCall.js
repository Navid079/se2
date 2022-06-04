import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

const UpdateChapterCall = async (chapterData, token, dispatch) => {
  try {
    const res = await axios.put(`${api}/shelves/my/update`, chapterData, {
      headers: {
        Authorization: token,
      },
    });
    const book = res.data;
    dispatch({ type: 'UPDATE-MY-BOOK', book });
    return 0;
  } catch (err) {
    const errorCode = err.response.data.errorCode;
    return errorCode;
  }
};

export default UpdateChapterCall;
