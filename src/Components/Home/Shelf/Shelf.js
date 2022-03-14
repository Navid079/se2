// Libraries
import React from 'react';

// Components
import Book from '../../Book/Book';

//Stylesheets
import './Shelf.css';

export default function Shelf({ className, title, books }) {
  const booksArray = [];
  for (let book of books) {
    const { title, cover, price, stars, author } = book;
    booksArray.push(
      <Book
        className="shelf__book"
        title={title}
        cover={cover}
        price={price}
        stars={stars}
        author={author}
      />
    );
  }
  return (
    <div className={`shelf ${className}`}>
      <h1 className="shelf__header">{title}</h1>
      <div className="shelf__container">
        <hr className="shelf__header-line" />
        <div className="shelf__books">
          {booksArray}
        </div>
      </div>
    </div>
  );
}
