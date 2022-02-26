// Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLock, FaPhoneAlt } from 'react-icons/fa';
import { MdPerson, MdOutlinePersonPin } from 'react-icons/md';
import { IoMdArrowRoundBack } from 'react-icons/io';

// Components
import Button from '../../Components/UI/Button/Button';
import IconInput from '../../Components/UI/TextInput/IconInput';

// Stylesheets
import './Signup.css';

export default function Signup() {
  return (
    <div className="login">
    <p className="login__success">اطلاعات با موفقیت ثبت شد</p>
      <IconInput
        className="login__input"
        placeholder="نام کامل"
        icon={<MdPerson className="icon login__input__icon" />}
      />
      <IconInput
        className="login__input"
        placeholder="نام کاربری"
        icon={<MdOutlinePersonPin className="icon login__input__icon" />}
      />
      <IconInput
        className="login__input"
        placeholder="رمز ورود"
        type="password"
        icon={<FaLock className="icon login__input__icon" />}
      />
      <IconInput
        className="login__input"
        placeholder="شماره تلفن"
        icon={<FaPhoneAlt className="icon login__input__icon" />}
      />
      <Button className="login__submit" type="submit" onClick="">
        ثبت
      </Button>
      <Link to="/" className="g-reset g-pointer">
        <div className="login__back">
          <p className="login__back__text">بازگشت</p>
          <IoMdArrowRoundBack className="login__back__icon" />
        </div>
      </Link>
    </div>
  );
}
