// Libraries
import React from 'react';

// Components
import Book from '../../Book/Book';

//Stylesheets
import './Shelf.css';

export default function Shelf({ className, title }) {
  return (
    <div className={`shelf ${className}`}>
      <h1 className="shelf__header">{title}</h1>
      <div className="shelf__container">
        <hr className="shelf__header-line" />
        <div className="shelf__books">
          <Book className="shelf__book" />
          <Book className="shelf__book" />
          <Book className="shelf__book" />
          <Book className="shelf__book" />
          <Book className="shelf__book" />
          <Book className="shelf__book" />
          <Book className="shelf__book" />
        </div>
      </div>
    </div>
  );
}
