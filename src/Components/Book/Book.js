import React from 'react';

import './Book.css';
import img from '../../images/navbar-colorful-books.png';
import { FaStar } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';

export default function Book({ className }) {
  const bookTitle = 'عنوان کتاب';
  const bookImg = img;
  const bookPrice = '20000';
  const stars = 5;
  const starComponents = [];
  const editable = false;
  const finished = true;

  for (let i = 0; i < stars; i++) {
    starComponents.push(<FaStar className="book__star" />);
  }
  const starClass =
    stars <= 3 ? 'book__star-3' : stars === 4 ? 'book__star-4' : 'book__star-5';
  const bookState =
    editable && !finished ? (
      <FaPen className="book__state book__edit" />
    ) : editable && finished ? (
      <MdDone className="book__state book__done" />
    ) : (
      ''
    );

  return (
    <div className={`book ${className}`}>
      <img className="book__img" src={bookImg} alt="" />
      <div className="book__container">
        <h3 className="book__title">{bookTitle}</h3>
        <h4 className="book__price">{bookPrice}</h4>
        <div className={`book__star-container ${starClass}`}>
          {starComponents}
        </div>
        {bookState}
      </div>
    </div>
  );
}
