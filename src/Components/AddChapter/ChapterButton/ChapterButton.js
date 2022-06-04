// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import number2persian from '../../../util/numberToPersian';

// Stylesheets
import './ChapterButton.css';

export default function ChapterButton({ number, price, isAdd }) {
  number = number2persian(number);

  if (isAdd) {
    return (
      <Link to="" className="chapter-button">
        <span className="chapter-button__dash" />
        <p className="chapter-button__number">ایجاد فصل جدید</p>
      </Link>
    );
  } else if (price === undefined) {
    return (
      <Link to="" className="chapter-button">
        <span className="chapter-button__dash" />
        <p className="chapter-button__number">فصل {number}</p>
        <p className="chapter-button__price">ناتمام</p>
      </Link>
    );
  } else {
    price = price === 0 ? 'رایگان' : `${price + ' تومان'}`;
    return (
      <Link to="" className="chapter-button">
        <span className="chapter-button__dash" />
        <p className="chapter-button__number">فصل {number}</p>
        <p className="chapter-button__price">{price}</p>
      </Link>
    );
  }
}
