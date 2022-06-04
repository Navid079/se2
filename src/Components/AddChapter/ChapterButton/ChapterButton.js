// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import number2persian from '../../../util/numberToPersian';

// Stylesheets
import './ChapterButton.css';

export default function ChapterButton({ number, price, isAdd, onClick }) {
  number = number2persian(number);
  let priceLabel;
  let chapterLabel;
  if (isAdd) {
    chapterLabel = 'ایجاد فصل جدید';
  } else {
    chapterLabel = `فصل ${number}`;
    priceLabel =
      price === undefined
        ? 'ناتمام'
        : price === 0
        ? 'رایگان'
        : `${price + ' تومان'}`;
  }

  return (
    <div className="chapter-button" onClick={onClick}>
      <span className="chapter-button__dash" />
      <p className="chapter-button__number">{chapterLabel}</p>
      {isAdd ? '' : <p className="chapter-button__price">{priceLabel}</p>}
    </div>
  );
}
