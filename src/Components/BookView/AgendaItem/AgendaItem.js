// Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import Dot from '../../UI/Dot/Dot';
import Stars from '../../UI/Stars/Stars';

// Stylesheets
import './AgendaItem.css';

export default function AgendaItem({
  title,
  pages,
  price,
  stars,
  bookId,
  chapterId,
}) {
  const priceLabel = price === 0 ? 'رایگان' : price + ' تومان';
  return (
    <div className="agenda-item">
      <div className="agenda-item__chapter">فصل اول</div>
      <div className="agenda-item__middle">
        <div className="agenda-item__middle-details">
          {title} ({pages} صفحه)
        </div>
        <Dot className="agenda-item__middle-dots" count={7} />
        <Dot className="agenda-item__middle-dots-pc" count={13} />
        <Link to={`/app/viewChapter/${bookId}/${chapterId}`}>
          <Button className="agenda-item__read">خواندن</Button>
        </Link>
      </div>
      <div className="agenda-item__price">{priceLabel}</div>
      <Stars stars={stars} />
      <hr className="agenda-item__line" />
    </div>
  );
}
