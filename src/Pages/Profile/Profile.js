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

import AvatarCall from '../../Logic/API/LoginSignup/AvatarCall';
// Stylesheets
import './Profile.css';

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
    bio,
    token,
    avatar,
    bookDispatch,
    userDispatch,
  } = useContexts();

  useEffect(() => {
    if (currentPage !== '/app/profile') {
      appDispatch({ type: 'CHANGE-PAGE', currentPage: '/app/profile' });
    }
    if (!myBooksSynced) {
      syncMyBooks(token, bookDispatch, appDispatch);
    }
    if (!avatar) {
      AvatarCall(token, userDispatch);
    }
  });

  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="profile">
      <Card className="profile-details">
        <div className="profile__wrapper">
          <Avatar className="profile__pic" avatar={avatar} />
          <div className="profile-edit" onClick={() => setShowEdit(true)}>
            <FaEdit className="profile-edit__icon" />
            <p className="profile-edit__text">ویرایش</p>
          </div>
        </div>

        <p className="profile-details__fullname">{fullName}</p>
        <hr className="profile-details__hr" />

        <p className="profile-details__username">{username}</p>
        <hr className="profile-details__hr" />

        {/* FIXME: wrap bio in container */}
        <p className="profile-details__bio">{bio}</p>
      </Card>
      <AuthorWorks className="profile__works" />
      <ModalCard show={showEdit} onClose={() => setShowEdit(false)}>
        <EditProfile />
      </ModalCard>
    </div>
  );
}
