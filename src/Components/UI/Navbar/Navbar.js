// Libraries
import React, { useContext } from 'react';
import { FaSearch, FaSignOutAlt } from 'react-icons/fa';

// Stylesheets
import './Navbar.css';

// Components
import ModalCard from './../ModalCard/ModalCard';
import SearchModal from './../../../Pages/SearchModal/SearchModal';
import { useState } from 'react';
import SearchResult from '../../SearchResult/SearchResult';
import UserContext from '../../../Logic/Context/UserContext/UserContext';
import SearchCall from '../../../Logic/API/Books/SearchCall';

export default function Navbar({ onLogout }) {
  const [searchShow, setSearchShow] = useState(false);
  const [searchResultShow, setSearchResultShow] = useState(false);

  const { token } = useContext(UserContext);
  const [searchResult, setSearchResult] = useState([]);

  const searchSubmitHandler = async (key, filters, priceRange) => {
    const result = await SearchCall(token, key, filters, priceRange);
    setSearchResult(result);
    setSearchShow(false);
    setSearchResultShow(true);
  };

  const resultSearchHandler = () => {
    setSearchResultShow(false);
    setSearchShow(true);
    setSearchResult([]);
  };

  return (
    <nav className="navbar">
      <FaSignOutAlt className="navbar__logout" onClick={onLogout} />
      <FaSearch
        className="navbar__search"
        onClick={() => setSearchShow(true)}
      />
      <p className="navbar__text">روزت رو با کتاب شروع کن.... یا تموم کن</p>
      <div className="navbar__img" />

      <ModalCard show={searchShow} onClose={() => setSearchShow(false)}>
        <SearchModal onSubmit={searchSubmitHandler} />
      </ModalCard>
      <ModalCard
        show={searchResultShow}
        onClose={() => {
          setSearchResultShow(false);
          setSearchResult([]);
        }}
      >
        <SearchResult result={searchResult} onSearch={resultSearchHandler} />
      </ModalCard>
    </nav>
  );
}
