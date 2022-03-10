import React from 'react';

import { FaSearch } from 'react-icons/fa';

import './ProfNav.css';

export default function ProfNav() {
  // TODO: Add search component
  return (
    <nav className="profnav">
      <FaSearch className="profnav__search" />
      <p className="profnav__text">روزت رو با کتاب شروع کن.... یا تموم کن</p>
      <div className="profnav__img" />
    </nav>
  );
}
