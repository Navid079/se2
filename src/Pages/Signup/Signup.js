// Libraries
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaPhoneAlt } from 'react-icons/fa';
import { MdPerson, MdOutlinePersonPin } from 'react-icons/md';
import { IoMdArrowRoundBack } from 'react-icons/io';

// Hooks and Handlers
import useRefs from './Hooks/useRefs';
import useStates from './Hooks/useStates';
import { submitHandler } from './Handlers/EventHandlers';

// Components
import Button from '../../Components/UI/Button/Button';
import IconInput from '../../Components/UI/TextInput/IconInput';

// Stylesheets
import './Signup.css';

export default function Signup() {
  const refs = useRefs();
  const states = useStates();
  const navigate = useNavigate();

  return (
    <div className="login">
      <p className="login__success">اطلاعات با موفقیت ثبت شد</p>
      <IconInput
        className="login__input"
        placeholder="نام کامل"
        reference={refs.fullNameInput}
        icon={<MdPerson className="icon login__input__icon" />}
        error={states.fullNameError}
      />
      <IconInput
        className="login__input"
        placeholder="نام کاربری"
        reference={refs.usernameInput}
        icon={<MdOutlinePersonPin className="icon login__input__icon" />}
        error={states.usernameError}
      />
      <IconInput
        className="login__input"
        placeholder="رمز ورود"
        type="password"
        reference={refs.passwordInput}
        icon={<FaLock className="icon login__input__icon" />}
        error={states.passwordError}
      />
      <IconInput
        className="login__input"
        placeholder="شماره تلفن"
        reference={refs.phoneInput}
        icon={<FaPhoneAlt className="icon login__input__icon" />}
        error={states.phoneError}
      />
      <Button
        className="login__submit"
        type="submit"
        onClick={e => {
          submitHandler(refs, states, navigate);
        }}
      >
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
