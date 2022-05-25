import axios from 'axios';

const api = process.env.REACT_APP_API_URL;

const MyBooksCall = async (token, key, filters, priceRange) => {
  const { author, title, genre, text, finished, free } = filters;

  const filters = `${author ? 'author,' : ''}${title ? 'title,' : ''}${
    genre ? 'genre,' : ''
  }${text ? 'text,' : ''}${finished ? 'finished,' : ''}${free ? 'free,' : ''}`;

  try {
    const res = await axios.get(
      `${api}/search?type=book&key=${key}${
        filters ? `&filters=${filters}` : ''
      }${free ? '' : `&minPrice=${priceRange.min}&maxPrice=${priceRange.max}`}`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    const result = res.data;
    return result;
  } catch (err) {
    const errorCode = err.response.data.errorCode;
    return errorCode;
  }
};

export default MyBooksCall;
