// Libraries
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdPerson, MdSettings } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';

// Stylesheets
import './Footer.css';
import Expendable from '../Expendable/Expendable';
import AddChapter from '../../../Pages/AddChapter/AddChapter';
import ModalCard from '../ModalCard/ModalCard';
import AddBook from '../../../Pages/AddBook/AddBook';

export default function Footer({ currentPage }) {
  const [showAddBook, setShowAddBook] = useState(false);
  const [showAddChapter, setShowAddChapter] = useState(false);
  const [book, setBook] = useState(null);

  const addBookHandler = book => {
    setBook(book);
    setShowAddBook(false);
    setShowAddChapter(true);
  };
  return (
    <footer className="footer">
      <Link to="/app/profile" className="g-reset">
        <div
          className={`footer-item ${
            currentPage === '/app/profile' ? 'footer-item--active' : ''
          }`}
        >
          <MdPerson className="footer-item__icon" />
          <p className="footer-item__title">پروفایل</p>
        </div>
      </Link>
      <Link to="/app" className="g-reset">
        <div
          className={`footer-item ${
            currentPage === '/app' ? 'footer-item--active' : ''
          }`}
        >
          <FaHome className="footer-item__icon" />
          <p className="footer-item__title">خانه</p>
        </div>
      </Link>
      <Link to="/app/settings" className="g-reset">
        <div
          className={`footer-item ${
            currentPage === '/app/settings' ? 'footer-item--active' : ''
          }`}
        >
          <MdSettings className="footer-item__icon" />
          <p className="footer-item__title">تنظیمات</p>
        </div>
      </Link>
      <Expendable onClick={() => setShowAddBook(true)} />
      <ModalCard fill show={showAddBook} onClose={() => setShowAddBook(false)}>
        <AddBook onAddBook={addBookHandler} />
      </ModalCard>
      <ModalCard
        fill
        show={showAddChapter}
        onClose={() => setShowAddChapter(false)}
      >
        <AddChapter book={book} onClose={() => setShowAddChapter(false)} />
      </ModalCard>
    </footer>
  );
}
