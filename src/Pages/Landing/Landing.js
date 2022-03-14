// Libraries
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';

// Components
import Button from '../../Components/UI/Button/Button';
import AppContext from '../../Logic/Context/AppContext/AppContext';

// Stylesheets
import './Landing.css';

export default function Landing() {
  const { currentPage, dispatch } = useContext(AppContext);

  if (currentPage !== '/') {
    dispatch({ type: 'CHANGE-PAGE', currentPage: '/' });
  }

  return (
    <div className="landing-page">
      <Link to="/login" className="g-reset">
        <Button className="landing-page__login">ورود</Button>
      </Link>
      <Link to="/signup" className="g-reset">
        <Button className="landing-page__signup">ثبت نام</Button>
      </Link>
      <div className="landing-page__footer">
        <FaBookOpen className="landing-page__footer-icon" />
        <p className="landing-page__footer-text">برایم بنویس</p>
      </div>
    </div>
  );
}
