// Libraries
import React from 'react';

// Components
import Navbar from './../../Components/UI/Navbar/Navbar';
import Shelf from './../../Components/UI/Shelf/Shelf';
import Footer from '../../Components/UI/Footer/Footer';

// Stylesheets
import './MainPage.css';

export default function MainPage() {
  return (
    <div className="main-page">
      
      <Navbar/>
      <Shelf className='main-shelf' />
      
      <Footer />
    </div>
  );
}
