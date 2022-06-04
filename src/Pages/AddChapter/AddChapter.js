// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import ChapterButton from '../../Components/AddChapter/ChapterButton/ChapterButton';
import Button from '../../Components/UI/Button/Button';

// Stylesheets
import './AddChapter.css';

export default function AddChapter({ book }) {
  const chapterButtons = book
    ? book.chapters.map(chapter => (
        <ChapterButton
          number={chapter.number}
          price={chapter.price}
          key={chapter.number}
        />
      ))
    : [];
  return (
    <div className="add-chapter">
      <div className="g-scrollbar add-chapter__chapter-container">
        {chapterButtons}
        <ChapterButton isAdd />
      </div>
      <div className="add-chapter__controls">
        <Link to="/app/editor">
          <Button className="add-chapter__confirm-button">تایید</Button>
        </Link>
      </div>
    </div>
  );
}
