import React from 'react';
import './ChapterView.css';
import number2persian from './../../util/numberToPersian';
import Dot from '../../Components/UI/Dot/Dot';
import { Link } from 'react-router-dom';

export default function ChapterView({ title, chapter, children }) {
  return (
    <div className="chapter-view">
      <div className="chapter-view__content">
        <div className="chapter-view__details">
          <img
            className="chapter-view__icon"
            src={require('../../images/book.png')}
          />
          <h3 className="chapter-view__title">کتاب {title}</h3>
          <h4 className="chapter-view__chapter">
            فصل {number2persian(chapter)}
          </h4>
        </div>
        <Dot count={10} />
        <div className="chapter-view__text">{children}</div>
      </div>
      <div className="chapter-view__navigate">
        <Link to="">&lt; فصل بعد</Link>
        <Link to="">فصل قبل &gt;</Link>
      </div>
    </div>
  );
}
