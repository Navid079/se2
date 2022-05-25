// Libraries
import React from 'react';
import { FaSearch, FaSignOutAlt } from 'react-icons/fa';

// Stylesheets
import './Navbar.css';

// Components
import ModalCard from './../ModalCard/ModalCard';
import SearchModal from './../../../Pages/SearchModal/SearchModal';
import { useState } from 'react';
import SearchResult from '../../SearchResult/SearchResult';

export default function Navbar({ onLogout }) {
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar">
      <FaSignOutAlt className="navbar__logout" onClick={onLogout} />
      <FaSearch className="navbar__search" onClick={() => setShow(true)} />
      <p className="navbar__text">روزت رو با کتاب شروع کن.... یا تموم کن</p>
      <div className="navbar__img" />

      <ModalCard show={show} onClose={() => setShow(false)}>
        <SearchModal />
      </ModalCard>
      <ModalCard show>
        <SearchResult />
      </ModalCard>
    </nav>
  );
}
