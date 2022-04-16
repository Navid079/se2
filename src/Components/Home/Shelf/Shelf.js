// Libraries
import React from 'react';

// Components
import Book from '../../Book/Book';

// Stylesheets
import './Shelf.css';

export default function Shelf({ title, books }) {
  const booksArray = books.map(book => (
    <Book
      className="shelf__book"
      id={book._id}
      title={book.title}
      cover={book.cover}
      price={book.price}
      stars={book.stars}
      author={book.author}
      key={book._id}
    />
  ));

  return (
    <div className="shelf">
      <h1 className="shelf__header">{title}</h1>
      <div className="shelf__container">
        <hr className="shelf__header-line" />
        <div className="shelf__books">{booksArray}</div>
      </div>
    </div>
  );
}
