// Libraries
import React, { useContext } from 'react';

// Components
import Book from '../../Book/Book';
import Card from '../../UI/Card/Card';
import BookContext from '../../../Logic/Context/BookContext/BookContext';

// Stylesheets
import './AuthorWorks.css';

export default function AuthorWorks() {
  const { myBooks } = useContext(BookContext);
  const booksArray = myBooks.map(book => (
    <Book
      className="works__book"
      title={book.title}
      cover={book.cover}
      price={book.price}
      stars={book.stars}
      finished={book.finished}
      editable
    />
  ));

  return (
    <Card className="works">
      <h2 className="works__text">آثار</h2>
      <div className="works__books">{booksArray}</div>
    </Card>
  );
}
