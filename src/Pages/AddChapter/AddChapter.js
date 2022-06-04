// Libraries
import React from 'react';

// Components
import ChapterButton from '../../Components/AddChapter/ChapterButton/ChapterButton';
import Button from '../../Components/UI/Button/Button';

// Stylesheets
import './AddChapter.css';
import { useNavigate } from 'react-router-dom';

export default function AddChapter({ book, onClose }) {
  const navigate = useNavigate();

  const chapterButtons = book
    ? book.chapters.map(chapter => (
        <ChapterButton
          number={chapter.number}
          price={chapter.price}
          key={chapter.number}
        />
      ))
    : [];

  const newChapterHandler = () => {
    navigate(`/app/editor/${book._id}/newChapter`);
    onClose();
  };

  return (
    <div className="add-chapter">
      <div className="g-scrollbar add-chapter__chapter-container">
        {chapterButtons}
        <ChapterButton isAdd onClick={newChapterHandler} />
      </div>
      <div className="add-chapter__controls">
        <Button className="add-chapter__confirm-button" onClick={onClose}>
          تایید
        </Button>
      </div>
    </div>
  );
}
