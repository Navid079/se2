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
  for (let i = 0; i < stars; i++) {
    starComponents.push(<FaStar className="book__star" />);
  }
  const starClass = stars => {
    if (stars <= 3) {
      return 'book__star-3';
    } else if (stars === 4) {
      return 'book__star-4';
    } else if (stars === 5) {
      return 'book__star-5';
    }
  };
  const editable = true;
  const finished = false;
  let bookState;
  if (editable === true && finished === false) {
    bookState = <FaPen className="book__state book__edit" />;
  } else if (editable === false && finished === true) {
    bookState = <MdDone className="book__state book__done" />;
  } else if (editable === false && finished === false) {
    bookState = '';
  }

  return (
    <div className={`book ${className}`}>
      <img className="book__img" src={bookImg} alt="" />
      <div className="book__container">
        <h3 className="book__title">{bookTitle}</h3>
        <h4 className="book__price">{bookPrice}</h4>
        <div className={`book__star-container ${starClass(stars)}`}>
          {starComponents}
        </div>
        {bookState}
      </div>
    </div>
  );
}
