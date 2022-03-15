// Libraries
import React, { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import UserContext from '../../Logic/Context/UserContext/UserContext';

// Stylesheets
import './LandingWrapper.css';

const LandingWrapper = () => {
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) navigate('/app');
  });

  return (
    <div className="landing-wrapper">
      <div className="landing-wrapper__container">
        <Outlet />
      </div>
    </div>
  );
};

export default LandingWrapper;
