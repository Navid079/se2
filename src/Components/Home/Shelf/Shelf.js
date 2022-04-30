// Libraries
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import Book from '../../Book/Book';

// Stylesheets
import './Shelf.css';

export default function Shelf({ title, books }) {
  const navigate = useNavigate();

  const bookClickHandler = id => {
    navigate(`/app/viewBook/${id}`);
  };

  const booksArray = books.map(book => (
    <Book
      className="shelf__book"
      id={book._id}
      title={book.title}
      cover={book.cover}
      chapters={book.chapters}
      author={book.author}
      key={book._id}
      onClick={bookClickHandler}
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
