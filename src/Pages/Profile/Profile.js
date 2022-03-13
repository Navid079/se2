import React, { useContext } from 'react';
import ProfPic from '../../Components/UI/ProfPic/ProfPic';
import Card from './../../Components/UI/Card/Card';
import AuthorWorks from './../../Components/UI/AuthorWorks/AuthorWorks';
import AppContext from '../../Logic/Context/AppContext';
import './Profile.css';

import { FaEdit } from 'react-icons/fa';

export default function Profile() {
  const { currentPage, dispatch } = useContext(AppContext);
  if (currentPage !== '/app/profile') {
    dispatch({ type: 'CHANGE-PAGE', currentPage: '/app/profile' });
  }

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

        <p className="profile-details__fullname">لورم ایپسوم متن ساختگی</p>
        <hr className="profile-details__hr" />

        <p className="profile-details__username">لورم ایپسوم متن ساختگی</p>
        <hr className="profile-details__hr" />

        <p className="profile-details__bio">
          لورم ایپسوم متن ساختگی
          <br />
          لورم ایپسوم متن ساختگی
        </p>
      </Card>
      <AuthorWorks className="profile__works" />

      {/* <MoreTools /> */}
    </div>
  );
}
