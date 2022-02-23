// Libraries
import React from 'react';
import { FaLock } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';
import { Link } from 'react-router-dom';

// Components
import Button from '../../Components/UI/Button/Button';
import IconInput from '../../Components/UI/TextInput/IconInput';

// Stylesheets
import './Login.css';

export default function Login() {
  return (
    <div className="login">
      <IconInput
        className="login__input"
        placeholder="نام کاربری"
        icon={<MdPerson className="icon login__input__icon" />}
      />
      <IconInput
        className="login__input"
        placeholder="رمز عبور"
        type="password"
        icon={<FaLock className="icon login__input__icon" />}
      />
      <Button className="login__submit" type="submit" onClick="">
        ورود
      </Button>
      <p className="login__signup-link">
        اکانت ندارید؟ برای ثبت نام
        <Link to="/signup"> اینجا </Link>
        کلیک کنید.
      </p>
    </div>
  );
}
