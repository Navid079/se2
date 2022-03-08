// Libraries
import React from 'react';
import { Outlet } from 'react-router-dom';

// Stylesheets
import './LandingWrapper.css';

const LandingWrapper = () => {
  return (
    <div className="landing-wrapper">
      <div className="landing-wrapper__container">
        <Outlet />
      </div>
    </div>
  );
};

export default LandingWrapper;
