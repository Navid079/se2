import React from 'react';
import Button from '../../Components/UI/Button/Button';
import Stars from '../../Components/UI/Stars/Stars';
import './BookView.css';
import { urlPrefixer } from './../../util/base64Utility';

export default function BookView({
  cover,
  name,
  price,
  author,
  status,
  chapters,
  stars,
}) {
  const coverUrl = urlPrefixer(cover);
  return (
    <div className="book-view">
      <div className="book-view__cover">
        <img
          src={require('../../images/cover.png')}
          className="book-view__cover-img"
          alt=""
        />
      </div>
      <div className="book-view__details">
        <p className="book-view__details-name">{name}</p>
        <p className="book-view__details-price">{price}</p>
        <p className="book-view__details-author">{author}</p>
        <p className="book-view__details-status">{status}</p>
        <p className="book-view__details-chapters">{chapters} فصل</p>
        <Stars className="book-view__details-stars" stars={stars} />
      </div>
      <Button className="book-view__actions-add">افزودن</Button>
      <Button className="book-view__actions-chapters">فصل ها</Button>
    </div>
  );
}
