// Libraries
import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';

//Components
import SearchItem from '../SearchItem/SearchItem';

// Stylesheets
import './SearchResult.css';

export default function SearchResult() {
  return (
    <div className="search-result">
      <div className="search">
        <FaSearch className="search-icon" />
        <input className="search-input" placeholder="جست و جو کنید"></input>
        <IoCloseSharp className="search-close" />
      </div>
      <SearchItem
        cover={require('../../images/cover.png')}
        name="این داستان تمام شدنی نیست"
        author="اسما توانگررررررررررررررررررررررررررررررررررررررررررررررررررررررذذذذذذذذذذذذ"
        stars={2}
      />
      <SearchItem
        cover={require('../../images/cover.png')}
        name="این داستان تمام شدنی نیست"
        author="اسما توانگر"
        stars={3}
      />
      <SearchItem
        cover={require('../../images/cover.png')}
        name="این داستان تمام شدنی نیست"
        author="اسما توانگر"
        stars={5}
      />
    </div>
  );
}
