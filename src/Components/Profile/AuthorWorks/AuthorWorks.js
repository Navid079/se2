import React, { useContext } from 'react';
import Book from '../../Book/Book';
import Card from '../../UI/Card/Card';
import BookContext from '../../../Logic/Context/BookContext/BookContext';

import './AuthorWorks.css';

export default function AuthorWorks({ className }) {
  const { myBooks } = useContext(BookContext);
  const books = [];
  for (let book of myBooks) {
    const { title, cover, price, stars, finished } = book;
    books.push(
      <Book
        className="works__book"
        title={title}
        cover={cover}
        price={price}
        stars={stars}
        finished={finished}
        editable
      />
    );
  }
  return (
    <Card className={`works ${className}`}>
      <h2 className="works__text">آثار</h2>
      <div className="works__books">{books}</div>
    </Card>
  );
}
