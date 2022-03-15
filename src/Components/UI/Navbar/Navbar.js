// Libraries
import React from 'react';
import { FaSearch, FaSignOutAlt } from 'react-icons/fa';

// Stylesheets
import './Navbar.css';

export default function Navbar({ onLogout }) {
  return (
    <nav className="navbar">
      <FaSignOutAlt className="navbar__logout" onClick={onLogout} />
      <FaSearch className="navbar__search" />
      <p className="navbar__text">روزت رو با کتاب شروع کن.... یا تموم کن</p>
      <div className="navbar__img" />
    </nav>
  );
}
