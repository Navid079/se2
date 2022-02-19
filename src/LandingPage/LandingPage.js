import React from 'react';
import Button from '../Components/UI/Button/Button';
import './LandingPage.css';
import bookIcon from '../images/book-icon.svg';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__container">
        <Button className="landing-page__login" type="" onClick="">
          ورود
        </Button>
        <Button className="landing-page__signup" type="" onClick="">
          ثبت نام
        </Button>
        <div className="landing-page__footer">
          <img className="landing-page__footer-icon" src={bookIcon} />
          <p className="landing-page__footer-text">برایم بنویس</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
