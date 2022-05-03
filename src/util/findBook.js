export const findBook = (bookId, shelves) => {
  for (let shelf of shelves) {
    for (let book of shelf.books) {
      if (book._id == bookId) {
        return book;
      }
    }
  }
  return null;
};

export const findChapter = (chapterId, book) => {
  if (!book) return null;

  for (let chapter of book.chapters) {
    if (chapter._id === chapterId) return chapter;
  }
  return null;
};
