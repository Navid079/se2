//Libraries
import React from 'react';
import { FaPen } from 'react-icons/fa';
import { MdDone } from 'react-icons/md';
import { urlPrefixer } from '../../util/base64Utility';
import Stars from '../UI/Stars/Stars';

//Stylesheets
import './Book.css';

export default function Book({
  id,
  title,
  cover,
  author,
  chapters,
  editable,
  finished,
  onClick,
}) {
  const coverUrl = urlPrefixer(cover);

  const price = chapters.reduce((value, item) => value + item.price, 0);
  const stars =
    chapters.reduce((value, item) => value + item.stars, 0) / chapters.length;

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
        {author ? <h4 className='book__price'>{author.username}@</h4> : ''}
        <Stars stars={stars} />
        {bookState}
      </div>
    </div>
  );
}
