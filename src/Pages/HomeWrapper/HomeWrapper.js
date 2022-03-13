import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Components/UI/Footer/Footer';
import Navbar from '../../Components/UI/Navbar/Navbar';
import './HomeWrapper.css';

export default function HomeWrapper() {
  return (
    <div>
      <Navbar />
      <div className="home-wrapper__container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
