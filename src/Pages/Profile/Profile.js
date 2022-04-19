// Libraries
import React, { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';

// Hooks and Handlers
import useContexts from './Hooks/useContexts';

// Components
import Avatar from '../../Components/Profile/Avatar/Avatar';
import Card from './../../Components/UI/Card/Card';
import AuthorWorks from './../../Components/Profile/AuthorWorks/AuthorWorks';
import MyBooksCall from '../../Logic/API/Books/MyBooksCall';
import ModalCard from '../../Components/UI/ModalCard/ModalCard';
import EditProfile from '../../Components/Profile/EditProfile/EditProfile';
import EditProfileCall from '../../Logic/API/Profile/EditProfileCall';
// Stylesheets
import './Profile.css';
import { urlPrefixer } from '../../util/base64Utility';

const syncMyBooks = async (token, bookDispatch, appDispatch) => {
  await MyBooksCall(token, bookDispatch);
  appDispatch({ type: 'SYNC-MY-BOOKS' });
};

export default function Profile() {
  const {
    currentPage,
    myBooksSynced,
    appDispatch,
    username,
    fullName,
    phone,
    bio,
    token,
    avatar,
    isLoggedIn,
    bookDispatch,
    userDispatch,
  } = useContexts();

  useEffect(() => {
    if (currentPage !== '/app/profile') {
      appDispatch({ type: 'CHANGE-PAGE', currentPage: '/app/profile' });
    }
    if (isLoggedIn && !myBooksSynced) {
      syncMyBooks(token, bookDispatch, appDispatch);
    }
  });

  const [showEdit, setShowEdit] = useState(false);
  const avatarUrl = urlPrefixer(avatar);

  const profileEditHandler = async (
    fullNameArg,
    usernameArg,
    phoneArg,
    bioArg,
    avatarArg
  ) => {
    const user = {
      fullName: fullNameArg || undefined,
      username: usernameArg || undefined,
      phone: phoneArg || undefined,
      bio: bioArg || undefined,
      avatar: avatarArg || undefined,
    };

    await EditProfileCall(user, token, userDispatch);
    setShowEdit(false);
  };

  return (
    <div className="profile">
      <Card className="profile-details">
        <div className="profile__wrapper">
          <Avatar className="profile__pic" avatar={avatarUrl} />
          <div className="profile-edit" onClick={() => setShowEdit(true)}>
            <FaEdit className="profile-edit__icon" />
            <p className="profile-edit__text">ویرایش</p>
          </div>
        </div>

        <p className="profile-details__fullname">{fullName}</p>
        <hr className="profile-details__hr" />

        <p className="profile-details__username">{username}</p>
        <hr className="profile-details__hr" />

        <p className="profile-details__bio">{bio}</p>
      </Card>
      <AuthorWorks className="profile__works" />
      <ModalCard show={showEdit} onClose={() => setShowEdit(false)}>
        <EditProfile
          onCancel={() => setShowEdit(false)}
          onSave={profileEditHandler}
          defaults={{ fullName, username, phone, bio, avatar }}
        />
      </ModalCard>
    </div>
  );
}
