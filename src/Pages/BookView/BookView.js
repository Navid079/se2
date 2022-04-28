import React, { useContext } from 'react';
import Button from '../../Components/UI/Button/Button';
import Stars from '../../Components/UI/Stars/Stars';
import './BookView.css';
import { urlPrefixer } from './../../util/base64Utility';
import { useParams } from 'react-router-dom';
import BookContext from '../../Logic/Context/BookContext/BookContext';

export default function BookView() {
  const { bookId } = useParams();

  const { shelves } = useContext(BookContext);
  let foundBook = undefined;
  for (let shelf of shelves) {
    if (foundBook) break;
    for (let book of shelf.books) {
      if (book._id == bookId) {
        foundBook = book;
        break;
      }
    }
  }

  console.log(foundBook)

  const coverUrl = urlPrefixer(foundBook.cover);
  return (
    <div className="book-view">
      <div className="book-view__cover">
        <img src={coverUrl} className="book-view__cover-img" alt="" />
      </div>
      <div className="book-view__details">
        <p className="book-view__details-name">{foundBook.title}</p>
        <p className="book-view__details-price">{foundBook.price}</p>
        <p className="book-view__details-author">{foundBook.author.fullName}</p>
        <p className="book-view__details-status">اتمام یافته</p>
        <p className="book-view__details-chapters">{3} فصل</p>
        <Stars className="book-view__details-stars" stars={foundBook.stars} />
      </div>
      <Button className="book-view__actions-add">افزودن</Button>
      <Button className="book-view__actions-chapters">فصل ها</Button>
    </div>
  );
}
