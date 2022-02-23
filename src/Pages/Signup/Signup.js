import React from 'react';
import './Signup.css';

import Button from '../../Components/UI/Button/Button';
import IconInput from '../../Components/UI/TextInput/IconInput';
import { FaLock, FaPhoneAlt } from 'react-icons/fa';
import { MdPerson, MdOutlinePersonPin } from 'react-icons/md';

export default function Signup() {
  return (
    <div className="login">
      <IconInput className="login__input" placeholder="نام کاربری">
        <MdPerson className="icon login__input__icon" />
      </IconInput>

      <IconInput
        className="login__input"
        placeholder="رمز ورود"
        type="password"
      >
        <FaLock className="icon login__input__icon" />
      </IconInput>

      <IconInput className="login__input" placeholder="نام کامل">
        <MdOutlinePersonPin className="icon login__input__icon" />
      </IconInput>

      <IconInput className="login__input" placeholder="شماره تلفن">
        <FaPhoneAlt className="icon login__input__icon" />
      </IconInput>

      <Button className="login__submit" type="submit" onClick="">
        ثبت
      </Button>

      {/* <p className="login__signup-link">
        اکانت دارید؟ برای ورود
        <a href=""> اینجا </a>
        کلیک کنید.
      </p> */}
    </div>
  );
}
