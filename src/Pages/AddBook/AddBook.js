import React, { useRef } from 'react';
import './AddBook.css';
import TextInput from './../../Components/UI/TextInput/TextInput';

export default function AddBook({ cover }) {
  const fileInputRef = useRef();
  return (
    <div className="add-book">
      <div className="add-book__cover">
        <img
          className="add-book__cover-image"
          src={require('../../images/cover.png')}
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
        ></input>
        <div className="add-book__title">
          <h4 className="add-book__title-text">اسم کتاب:</h4>
          <TextInput className="add-book__title-input"></TextInput>
        </div>
      </div>
    </div>
  );
}
