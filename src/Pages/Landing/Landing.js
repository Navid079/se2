import React from 'react';

import Button from '../../Components/UI/Button/Button';
import { FaBookOpen } from 'react-icons/fa';

import './Landing.css';

export default function Landing() {
  return (
    <div>
      <Button className="landing-page__login" type="" onClick="">
        ورود
      </Button>
      <Button className="landing-page__signup" type="" onClick="">
        ثبت نام
      </Button>
      <div className="landing-page__footer">
        <FaBookOpen className="landing-page__footer-icon" />
        <p className="landing-page__footer-text">برایم بنویس</p>
      </div>
    </div>
  );
}
