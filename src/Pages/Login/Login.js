import React from 'react';
import './Login.css';

import Button from '../../Components/UI/Button/Button';
import IconInput from '../../Components/UI/TextInput/IconInput';
import { FaLock } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';

export default function Login() {
  return (
    <div className="login">
      <IconInput className="login__input" placeholder="نام کاربری">
        <MdPerson className="icon login__input__icon" />
      </IconInput>

      <IconInput
        className="login__input"
        placeholder="رمز عبور"
        type="password"
      >
        <FaLock className="icon login__input__icon" />
      </IconInput>

      <Button className="login__submit" type="submit" onClick="">
        ورود
      </Button>

      <p className="login__signup-link">
        اکانت ندارید؟ برای ثبت نام
        <a href=""> اینجا </a>
        کلیک کنید.
      </p>
    </div>
  );
}
