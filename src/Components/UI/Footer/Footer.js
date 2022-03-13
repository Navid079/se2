import React from 'react';
import './Footer.css';
import { MdPerson } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import { BsFillPlusCircleFill } from 'react-icons/bs'

export default function Footer({ className }) {
  return (

    <footer className={`footer ${className}`}>
      <div className="footer-item">
        <MdPerson className="footer-item__icon" />
        <p className="footer-item__title">پروفایل</p>
      </div>
      <div className="footer-item">
        <FaHome className="footer-item__icon" />
        <p className="footer-item__title">خانه</p>
      </div>
      <div className="footer-item">
        <MdSettings className="footer-item__icon" />
        <p className="footer-item__title">تنظیمات</p>
      </div>
    </footer>
  
  );

  
}
