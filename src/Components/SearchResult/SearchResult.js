// Libraries
import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';

//Components
import SearchItem from '../SearchItem/SearchItem';

// Stylesheets
import './SearchResult.css';

export default function SearchResult({ result }) {
  const resultComponents =
    result && result.length ? (
      result.map(item => (
        <SearchItem
          bookId={item._id}
          author={item.author}
          cover={item.cover}
          name={item.title}
          stars={item.stars}
          key={item._id}
        />
      ))
    ) : (
      <h1>متاسفانه نتیجه ای برای جستجوی شما پیدا نشد</h1>
    );

  return (
    <div className="search-result">
      <div className="search">
        <FaSearch className="search-icon" />
        <input className="search-input" placeholder="جست و جو کنید"></input>
        <IoCloseSharp className="search-close" />
      </div>
      {resultComponents}
    </div>
  );
}
