import React, { useContext } from 'react';
import './Footer.css';
import { MdPerson } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';
import AppContext from '../../../Logic/Context/AppContext';

export default function Footer({ className }) {
  const { currentPage } = useContext(AppContext);
  return (
    <footer className={`footer ${className || ''}`}>
      <div
        className={`footer-item ${
          currentPage === '/app/profile' ? 'footer-item--active' : ''
        }`}
      >
        <MdPerson className="footer-item__icon" />
        <p className="footer-item__title">پروفایل</p>
      </div>
      <div
        className={`footer-item ${
          currentPage === '/app' ? 'footer-item--active' : ''
        }`}
      >
        <FaHome className="footer-item__icon" />
        <p className="footer-item__title">خانه</p>
      </div>
      <div
        className={`footer-item ${
          currentPage === '/app/settings' ? 'footer-item--active' : ''
        }`}
      >
        <MdSettings className="footer-item__icon" />
        <p className="footer-item__title">تنظیمات</p>
      </div>
    </footer>
  );
}
