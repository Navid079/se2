// Libraries
import React, { useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Stylesheets
import './AddBook.css';

// Components
import TextInput from './../../Components/UI/TextInput/TextInput';
import ModalCard from './../../Components/UI/ModalCard/ModalCard';
import {
  imageResizerBase64,
  urlPrefixer,
  urlRemover,
} from '../../util/base64Utility';

export default function AddBook() {
  const fileInputRef = useRef();
  const [bookCover, setBookCover] = useState('');

  const coverChangeHandler = async e => {
    const coverFile = await imageResizerBase64(e.target.files[0]);
    setBookCover(urlRemover(coverFile));
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
        <TextInput className="add-book__title-input" />
      </div>
      <Link to="/app/addChapter" className="add-book__next">
        <FaArrowRight />
        <p>مرحله بعد</p>
      </Link>
    </div>
  );
}
