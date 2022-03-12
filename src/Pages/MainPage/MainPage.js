// Libraries
import React from 'react';
import { MdPerson } from 'react-icons/md';
import { IoMdSettings, IoHome } from 'react-icons/io';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { HiSearch } from 'react-icons/hi';

// Stylesheets
import './MainPage.css';

export default function MainPage() {
  return (
  
  <div className="main__page">
      <div className='top__menu'>
      <p className='title'>روزت رو با کتاب شروع کن یا تموم کن</p>
      <div className='search'><HiSearch/></div>
      </div>
      <nav className="bottom__navbar">
        <div className="navbar__items">
           <div className='item setting'> <IoMdSettings/> <p>Setting</p> </div> 
           <div className='item plus'> <BsFillPlusCircleFill/> <p>Home</p> </div>
           <div className='item profile'> <MdPerson/> <p>Profile</p> </div> 
        </div>
      </nav>


      
      
      
      </div>




  );
}
