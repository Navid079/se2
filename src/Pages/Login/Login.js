// Libraries
import React, { useContext } from 'react';
import { FaLock } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

// Hooks and Handlers
import useRefs from './Hooks/useRefs';
import useStates from './Hooks/useStates';
import { submitHandler } from './Handlers/EventHandlers';

// Components
import Button from '../../Components/UI/Button/Button';
import IconInput from '../../Components/UI/TextInput/IconInput';
import UserContext from '../../Logic/Context/UserContext';
import AppContext from '../../Logic/Context/AppContext';

// Stylesheets
import './Login.css';

export default function Login() {
  const refs = useRefs();
  const states = useStates();
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);
  const { currentPage, dispatch: appDispatch } = useContext(AppContext);

  if (currentPage !== '/login') {
    appDispatch({ type: 'CHANGE-PAGE', currentPage: '/login' });
  }

  return (
    <div className="login">
      <IconInput
        className="login__input"
        placeholder="نام کاربری"
        icon={<MdPerson className="icon login__input__icon" />}
        reference={refs.usernameInput}
        error={states.usernameError}
        onChange={e => {
          if (states.usernameError !== '') states.setUsernameError('');
        }}
      />
      <IconInput
        className="login__input"
        placeholder="رمز عبور"
        type="password"
        icon={<FaLock className="icon login__input__icon" />}
        reference={refs.passwordInput}
        error={states.passwordError}
        onChange={e => {
          if (states.passwordError !== '') states.setPasswordError('');
        }}
      />
      <Button
        className="login__submit"
        type="submit"
        onClick={event => submitHandler(refs, states, dispatch, navigate)}
      >
        ورود
      </Button>
      <p className="login__signup-link">
        حساب کاربری ندارید؟ برای ثبت نام
        <Link to="/signup"> اینجا </Link>
        کلیک کنید.
      </p>
    </div>
  );
}
