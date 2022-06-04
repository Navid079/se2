// Libraries
import React, { useContext, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

// Stylesheets
import './AddBook.css';

// Components
import TextInput from './../../Components/UI/TextInput/TextInput';
import AddBookCall from './../../Logic/API/Books/AddBookCall';
import UserContext from './../../Logic/Context/UserContext/UserContext';
import BookContext from './../../Logic/Context/BookContext/BookContext';
import {
  imageResizerBase64,
  urlPrefixer,
  urlRemover,
} from '../../util/base64Utility';

export default function AddBook({ onAddBook }) {
  const titleRef = useRef();
  const fileInputRef = useRef();
  const [bookCover, setBookCover] = useState('');
  const { token } = useContext(UserContext);
  const { dispatch } = useContext(BookContext);

  const coverChangeHandler = async e => {
    const coverFile = await imageResizerBase64(e.target.files[0]);
    setBookCover(urlRemover(coverFile));
  };

  const applyHandler = async () => {
    // get all data from inputs
    const title = titleRef.current.value;
    const bookData = {
      title,
      cover: bookCover,
    };
    // send them to backend
    const book = await AddBookCall(bookData, token, dispatch);
    // go to addChapter
    if (onAddBook) onAddBook(book);
  };

  return (
    <div className="add-book">
      <div className="add-book__cover">
        <img
          className="add-book__cover-image"
          src={urlPrefixer(bookCover)}
          alt=""
        />
        <h5
          className="add-book__cover-text"
          onClick={e => fileInputRef.current.click()}
        >
          آپلود کاور
        </h5>
        <input
          type="file"
          accept="image/jpg, image/jpeg, image/png, image/bmp"
          style={{ display: 'none' }}
          ref={fileInputRef}
          onChange={coverChangeHandler}
        />
      </div>
      <div className="add-book__title">
        <h4 className="add-book__title-text">اسم کتاب:</h4>
        <TextInput className="add-book__title-input" reference={titleRef} />
      </div>
      <div className="add-book__next" onClick={applyHandler}>
        <FaArrowRight />
        <p>مرحله بعد</p>
      </div>
    </div>
  );
}
