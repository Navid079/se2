import React, { useContext } from 'react';
import './ChapterView.css';
import number2persian from './../../util/numberToPersian';
import Dot from '../../Components/UI/Dot/Dot';
import { Link, useParams } from 'react-router-dom';
import { findBook, findChapter } from '../../util/findBook';
import BookContext from '../../Logic/Context/BookContext/BookContext';
import textParser from '../../util/textParser';

export default function ChapterView() {
  const { bookId, chapterId } = useParams();
  const { shelves } = useContext(BookContext);

  const book = findBook(bookId, shelves);
  const chapter = findChapter(chapterId, book);

  if (!(book && chapter)) {
    return <h1>404 - Not Found!</h1>;
  }

  console.log(chapter);

  return (
    <div className="chapter-view">
      <div className="chapter-view__content">
        <div className="chapter-view__details">
          <img
            className="chapter-view__icon"
            src={require('../../images/book.png')}
            alt=''
          />
          <h3 className="chapter-view__title">کتاب {book.title}</h3>
          {/* TODO: Add Chapter title */}
          <h4 className="chapter-view__chapter">
            فصل {number2persian(chapter.chapterNumber)}
          </h4>
        </div>
        <Dot count={15} className="dots-mobile" />
        <Dot count={48} className="dots-pc" />
        <div className="g-scrollbar chapter-view__text">{textParser(chapter.text)}</div>
      </div>
      <div className="chapter-view__navigate">
        <Link to="">&lt; فصل بعد</Link>
        <Link to="">فصل قبل &gt;</Link>
      </div>
    </div>
  );
}
