import React from 'react';
import Button from '../../UI/Button/Button';
import Avatar from '../Avatar/Avatar';

import './EditProfile.css';

export default function EditProfile() {
  return (
    <div className="edit-profile">
      <div className="edit-profile__avatar">
        <Avatar />
        <p className="edit-profile__avatar-text">آپلود عکس</p>
      </div>
      <div className="edit-profile__input-container">
        <input className="g-reset edit-profile__input" placeholder="نام کامل" />
        <input
          className="g-reset edit-profile__input"
          placeholder="نام کاربری"
        />
        <input
          className="g-reset edit-profile__input"
          placeholder="شماره تلفن"
        />
        <textarea
          className="g-reset edit-profile__input"
          wrap="hard"
          placeholder="بیوگرافی"
        />
      </div>
      <div className="edit-profile__controls">
        <Button className="edit-profile__control-button"> ثبت </Button>
        <Button className="edit-profile__control-button  edit-profile__control-button--transparent"> لغو </Button>
      </div>
    </div>
  );
}
