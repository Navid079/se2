// Libraries
import React from 'react';
import { Outlet } from 'react-router-dom';

// Stylesheets
import './Main.css';

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
