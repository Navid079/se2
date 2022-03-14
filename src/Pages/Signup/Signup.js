// Libraries
import React, { useContext } from 'react';
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
import AppContext from '../../Logic/Context/AppContext/AppContext';

// Stylesheets
import './Signup.css';

export default function Signup() {
  const refs = useRefs();
  const states = useStates();
  const navigate = useNavigate();
  const { currentPage, dispatch } = useContext(AppContext);

  if (currentPage !== '/signup') {
    dispatch({ type: 'CHANGE-PAGE', currentPage: '/signup' });
  }

  return (
    <div className="signup">
      <p className="signup__success">اطلاعات با موفقیت ثبت شد</p>
      <IconInput
        className="signup__input"
        placeholder="نام کامل"
        reference={refs.fullNameInput}
        icon={<MdPerson className="icon signup__input__icon" />}
        error={states.fullNameError}
        onChange={e => {
          if (states.fullNameError !== '') states.setFullNameError('');
        }}
      />
      <IconInput
        className="signup__input"
        placeholder="نام کاربری"
        reference={refs.usernameInput}
        icon={<MdOutlinePersonPin className="icon signup__input__icon" />}
        error={states.usernameError}
        onChange={e => {
          if (states.usernameError !== '') states.setUsernameError('');
        }}
      />
      <IconInput
        className="signup__input"
        placeholder="گذرواژه"
        type="password"
        reference={refs.passwordInput}
        icon={<FaLock className="icon signup__input__icon" />}
        error={states.passwordError}
        onChange={e => {
          if (states.passwordError !== '') states.setPasswordError('');
        }}
      />
      <IconInput
        className="signup__input"
        placeholder="شماره تلفن"
        reference={refs.phoneInput}
        icon={<FaPhoneAlt className="icon signup__input__icon" />}
        error={states.phoneError}
        onChange={e => {
          if (states.phoneError !== '') states.setPhoneError('');
        }}
      />
      <div className="signup__cta">
        <Button
          className="signup__submit"
          type="submit"
          onClick={e => {
            submitHandler(refs, states, navigate);
          }}
        >
          ثبت
        </Button>
        <Link to="/" className="g-reset g-pointer">
          <div className="signup__back">
            <p className="signup__back__text">بازگشت</p>
            <IoMdArrowRoundBack className="signup__back__icon" />
          </div>
        </Link>
      </div>
    </div>
  );
}
