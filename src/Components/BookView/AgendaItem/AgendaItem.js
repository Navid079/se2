// Libraries
import React from 'react';
import Button from '../../UI/Button/Button';
import Dot from '../../UI/Dot/Dot';

// Stylesheets
import './AgendaItem.css';

export default function AgendaItem({ title, pages, chapter, price, stars }) {
  return (
    <div className="agenda-item">
      <div className="agenda-item__chapter">فصل اول</div>
      <div className="agenda-item__middle">
        <div className="agenda-item__middle-details">
          {title} ({pages} صفحه)
        </div>
        <Dot className="agenda-item__middle-dots" count={7} />
        <Dot className="agenda-item__middle-dots-pc" count={13} />
        <Button className="agenda-item__read">خواندن</Button>
      </div>
      <div className="agenda-item__price">رایگان</div>
      <hr className="agenda-item__line" />
    </div>
  );
}
