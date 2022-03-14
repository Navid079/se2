// Libraries
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Footer from '../../Components/UI/Footer/Footer';
import Navbar from '../../Components/UI/Navbar/Navbar';
import AppContext from '../../Logic/Context/AppContext/AppContext';

// Stylesheets
import './HomeWrapper.css';

export default function HomeWrapper() {
  const { currentPage } = useContext(AppContext);

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
