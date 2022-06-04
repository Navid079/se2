// Libraries
import React from 'react';
import { FaSearch } from 'react-icons/fa';
// import { IoCloseSharp } from 'react-icons/io5';

//Components
import SearchItem from '../../Components/SearchItem/SearchItem';

// Stylesheets
import './SearchResult.css';

export default function SearchResult({ result, onSearch, onSelect }) {
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
          onSelect={onSelect}
        />
      ))
    ) : (
      <h1>متاسفانه نتیجه ای برای جستجوی شما پیدا نشد</h1>
    );

  return (
    <div className="search-result">
      <div className="search-input">
        <FaSearch className="search__icon" />
        <input
          className="search__input"
          placeholder="جست و جو کنید"
          type="search"
          onClick={onSearch}
        />
        <hr />
      </div>
      <div className="search-result__results">{resultComponents}</div>
    </div>
  );
}
