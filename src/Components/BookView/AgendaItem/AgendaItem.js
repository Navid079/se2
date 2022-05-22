// Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import number2persian from '../../../util/numberToPersian';
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
  chapterNumber,
}) {
  const priceLabel = price === 0 ? 'رایگان' : price + ' تومان';
  return (
    <div className="agenda-item">
      <div className="agenda-item__chapter">
        فصل {number2persian(chapterNumber)}
      </div>
      <div className="agenda-item__middle">
        <div className="agenda-item__middle-details">
          {title} ({pages} صفحه)
        </div>
        <Dot className="agenda-item__middle-dots" count={7} />
        <Dot className="agenda-item__middle-dots-pc" count={13} />
        <Link
          className="g-reset"
          to={`/app/viewChapter/${bookId}/${chapterId}`}
        >
          <Button className="agenda-item__read">خواندن</Button>
        </Link>
      </div>
      <div className="agenda-item__price">{priceLabel}</div>
      <Stars className="agenda-item__stars" stars={stars} />
      <hr className="agenda-item__line" />
    </div>
  );
}
