// Libraries
import React from 'react';
import { FaSearch } from 'react-icons/fa';

// Stylesheets
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <FaSearch className="navbar__search" />
      <p className="navbar__text">روزت رو با کتاب شروع کن.... یا تموم کن</p>
      <div className="navbar__img" />
    </nav>
  );
}
