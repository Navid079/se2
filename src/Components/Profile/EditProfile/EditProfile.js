import React, { useRef } from 'react';
import Button from '../../UI/Button/Button';
import Avatar from '../Avatar/Avatar';

import './EditProfile.css';

export default function EditProfile({ onCancel, onSave }) {
  const fullNameRef = useRef();
  const usernameRef = useRef();
  const phoneRef = useRef();
  const bioRef = useRef();

  const saveHandler = () => {
    const fullName = fullNameRef.current.value;
    const username = usernameRef.current.value;
    const phone = phoneRef.current.value;
    const bio = bioRef.current.value;

    try {
      onSave(fullName, username, phone, bio);
    } catch {}
  };

  return (
    <div className="edit-profile">
      <div className="edit-profile__avatar">
        <Avatar />
        <p className="edit-profile__avatar-text">آپلود عکس</p>
      </div>
      <div className="edit-profile__input-container">
        <input
          className="edit-profile__input"
          placeholder="نام کامل"
          ref={fullNameRef}
        />
        <input
          className="edit-profile__input"
          placeholder="نام کاربری"
          ref={usernameRef}
        />
        <input
          className="edit-profile__input"
          placeholder="شماره تلفن"
          ref={phoneRef}
        />
        <textarea
          className="edit-profile__input"
          wrap="hard"
          placeholder="بیوگرافی"
          ref={bioRef}
        />
      </div>
      <div className="edit-profile__controls">
        <Button className="edit-profile__control-button" onClick={saveHandler}>
          ثبت
        </Button>
        <Button
          className="edit-profile__control-button  edit-profile__control-button--transparent"
          onClick={onCancel}
        >
          لغو
        </Button>
      </div>
    </div>
  );
}
