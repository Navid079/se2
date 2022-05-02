const findBook = (bookId, shelves) => {
  for (let shelf of shelves) {
    for (let book of shelf.books) {
      if (book._id == bookId) {
        return book;
      }
    }
  }
  return null;
};

export default findBook;
