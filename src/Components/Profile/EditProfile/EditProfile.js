import React, { useRef, useState } from 'react';
import Button from '../../UI/Button/Button';
import Avatar from '../Avatar/Avatar';
import {
  urlPrefixer,
  urlRemover,
  imageResizerBase64,
} from '../../../util/base64Utility';

import './EditProfile.css';

export default function EditProfile({ onCancel, onSave, defaults }) {
  const fullNameRef = useRef();
  const usernameRef = useRef();
  const phoneRef = useRef();
  const bioRef = useRef();
  const [avatar, setAvatar] = useState(defaults.avatar);
  const fileUploader = useRef();

  const saveHandler = () => {
    const fullName =
      fullNameRef.current.value === defaults.fullName
        ? ''
        : fullNameRef.current.value;

    const username =
      usernameRef.current.value === defaults.username
        ? ''
        : usernameRef.current.value;

    const phone =
      phoneRef.current.value === defaults.phone ? '' : phoneRef.current.value;

    const bio =
      bioRef.current.value === defaults.bio ? '' : bioRef.current.value;

    const avatarData = avatar === defaults.avatar ? '' : avatar;

    try {
      onSave(fullName, username, phone, bio, avatarData);
    } catch {}
  };

  const avatarUploadHandler = () => {
    fileUploader.current.click();
  };

  const fileSelectHandler = async event => {
    const file = await imageResizerBase64(event.target.files[0]);
    setAvatar(urlRemover(file));
  };

  return (
    <div className="edit-profile">
      <div
        className="g-pointer edit-profile__avatar"
        onClick={avatarUploadHandler}
      >
        <Avatar avatar={urlPrefixer(avatar)} />
        <p className="edit-profile__avatar-text">آپلود عکس</p>
        <input
          type="file"
          accept="image/jpg, image/jpeg, image/png, image/bmp"
          style={{ display: 'none' }}
          ref={fileUploader}
          onChange={fileSelectHandler}
        />
      </div>
      <div className="edit-profile__input-container">
        <input
          className="edit-profile__input"
          placeholder="نام کامل"
          defaultValue={defaults.fullName}
          ref={fullNameRef}
        />
        <input
          className="edit-profile__input"
          placeholder="نام کاربری"
          defaultValue={defaults.username}
          ref={usernameRef}
        />
        <input
          className="edit-profile__input"
          placeholder="شماره تلفن"
          defaultValue={defaults.phone}
          ref={phoneRef}
        />
        <textarea
          className="edit-profile__input"
          wrap="hard"
          placeholder="بیوگرافی"
          defaultValue={defaults.bio}
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
