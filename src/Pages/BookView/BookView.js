import React, { useContext } from 'react';
import Button from '../../Components/UI/Button/Button';
import Stars from '../../Components/UI/Stars/Stars';
import './BookView.css';
import { urlPrefixer } from './../../util/base64Utility';
import { useNavigate, useParams } from 'react-router-dom';
import BookContext from '../../Logic/Context/BookContext/BookContext';
import findBook from '../../util/findBook';

export default function BookView() {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const { shelves } = useContext(BookContext);

  const foundBook = findBook(bookId, shelves);
  if (!foundBook) {
    return <h1>404 - Not Found!</h1>;
  }

  const stars =
    foundBook.chapters.reduce((value, item) => value + item.stars, 0) /
    foundBook.chapters.length;

  const finished = foundBook.finished ? 'اتمام یافته' : 'ناتمام';

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
        <p className="book-view__details-status">{finished}</p>
        <p className="book-view__details-chapters">
          {foundBook.chapters.length} فصل
        </p>
        <Stars className="book-view__details-stars" stars={stars} />
      </div>
      <Button className="book-view__actions-add">افزودن</Button>
      <Button
        className="book-view__actions-chapters"
        onClick={(e) => navigate(`/app/agenda/${bookId}`)}
      >
        فصل ها
      </Button>
    </div>
  );
}
