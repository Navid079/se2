import React from 'react';

import './Book.css';
import img from '../../images/navbar-colorful-books.png';

export default function Book({ className }) {
  const bookTitle = 'عنوان کتاب';
  const bookImg = img;
  const bookPrice = '20000';
  return (
    <div className={`book ${className}`}>
      <img className="book__img" src={bookImg} />
      <h3 className="book__title">{bookTitle}</h3>
      <h4 className="book__price">{bookPrice}</h4>
    </div>
  );
}
