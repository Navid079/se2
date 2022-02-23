// Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen } from 'react-icons/fa';

// Components
import Button from '../../Components/UI/Button/Button';

// Stylesheets
import './Landing.css';

export default function Landing() {
  return (
    <div className="landing-page">
      <Link to="/login" className="g-reset">
        <Button className="landing-page__login" type="" onClick="">
          ورود
        </Button>
      </Link>
      <Link to="/signup" className="g-reset">
        <Button className="landing-page__signup" type="" onClick="">
          ثبت نام
        </Button>
      </Link>
      <div className="landing-page__footer">
        <FaBookOpen className="landing-page__footer-icon" />
        <p className="landing-page__footer-text">برایم بنویس</p>
      </div>
    </div>
  );
}
