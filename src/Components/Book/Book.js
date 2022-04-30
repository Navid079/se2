//Libraries
import React from 'react';
import { FaStar, FaPen } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import { urlPrefixer } from '../../util/base64Utility';

//Stylesheets
import './Book.css';

export default function Book({
  id,
  title,
  cover,
  chapters,
  editable,
  finished,
  onClick,
}) {
  const coverUrl = urlPrefixer(cover);

  const price = chapters.reduce((value, item) => value + item.price, 0);
  const stars =
    chapters.reduce((value, item) => value + item.stars, 0) / chapters.length;

  const starComponents = [];
  for (let i = 0; i < stars; i++) {
    starComponents.push(<FaStar className="book__star" key={i} />);
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
    <div className="book" onClick={e => onClick(id)}>
      <img className="book__img" src={coverUrl} alt="" />
      <div className="book__container">
        <h3 className="book__title">{title}</h3>
        <h4 className="book__price">{price}</h4>
        <div className={`book__star-container ${starClass}`}>
          {starComponents}
        </div>
        {bookState}
      </div>
    </div>
  );
}
