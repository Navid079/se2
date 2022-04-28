// Libraries
import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// Components
import Footer from '../../Components/UI/Footer/Footer';
import Navbar from '../../Components/UI/Navbar/Navbar';
import AppContext from '../../Logic/Context/AppContext/AppContext';
import UserContext from '../../Logic/Context/UserContext/UserContext';
import BookContext from '../../Logic/Context/BookContext/BookContext';

// Stylesheets
import './HomeWrapper.css';

export default function HomeWrapper() {
  const { currentPage, dispatch: appDispatch } = useContext(AppContext);
  const { isLoggedIn, dispatch } = useContext(UserContext);
  const { dispatch: bookDispatch } = useContext(BookContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) navigate('/');
  });

  const logoutHandler = () => {
    dispatch({ type: 'LOGOUT' });
    bookDispatch({ type: 'RESET' });
    appDispatch({ type: 'RESET' });
  };

  return (
    <div className="home-wrapper">
      <Navbar onLogout={logoutHandler} />
      <div className="home-wrapper__container">
        <Outlet />
      </div>
      <Footer currentPage={currentPage} />
    </div>
  );
}
