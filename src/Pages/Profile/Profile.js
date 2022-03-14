import React, { useContext } from 'react';
import ProfPic from '../../Components/Profile/ProfPic/ProfPic';
import Card from './../../Components/UI/Card/Card';
import AuthorWorks from './../../Components/Profile/AuthorWorks/AuthorWorks';
import AppContext from '../../Logic/Context/AppContext/AppContext';
import UserContext from '../../Logic/Context/UserContext/UserContext';
import './Profile.css';

import { FaEdit } from 'react-icons/fa';

export default function Profile() {
  const { currentPage, dispatch } = useContext(AppContext);
  if (currentPage !== '/app/profile') {
    dispatch({ type: 'CHANGE-PAGE', currentPage: '/app/profile' });
  }

  const { username, fullName, bio } = useContext(UserContext);

  return (
    <div className="profile">
      <Card className="profile-details">
        <div className="profile__wrapper">
          <ProfPic className="profile__pic" />
          <div className="profile-edit">
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
    </div>
  );
}
