// Libraries
import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// Components
import Footer from '../../Components/UI/Footer/Footer';
import Navbar from '../../Components/UI/Navbar/Navbar';
import AppContext from '../../Logic/Context/AppContext/AppContext';
import UserContext from '../../Logic/Context/UserContext/UserContext';

// Stylesheets
import './HomeWrapper.css';

export default function HomeWrapper() {
  const { currentPage } = useContext(AppContext);
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isLoggedIn) navigate('/');
  });

  return (
    <>
      <Navbar />
      <div className="home-wrapper__container">
        <Outlet />
      </div>
      <Footer currentPage={currentPage} />
    </>
  );
}
