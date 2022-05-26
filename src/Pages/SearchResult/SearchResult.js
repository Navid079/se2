// Libraries
import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';

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
      {/* <div>{resultComponents}</div> */}
      <div className="search-result__results">
        <SearchItem
          author="نویسنده"
          cover={require('../../images/cover.png')}
          name="اسم کتاب"
          stars="1"
        />
        <SearchItem
          author="نویسنده"
          cover={require('../../images/cover.png')}
          name="اسم کتاب 2"
          stars="2"
        />
        <SearchItem
          author="نویسنده"
          cover={require('../../images/cover.png')}
          name="اسم کتاب 3"
          stars="3"
        />
        <SearchItem
          author="نویسنده"
          cover={require('../../images/cover.png')}
          name="اسم کتاب 4"
          stars="4"
        />
        <SearchItem
          author="نویسنده"
          cover={require('../../images/cover.png')}
          name="اسم کتاب 5"
          stars="5"
        />
        <SearchItem
          author="نویسنده"
          cover={require('../../images/cover.png')}
          name="اسم کتاب 6"
          stars="2"
        />
        <SearchItem
          author="نویسنده"
          cover={require('../../images/cover.png')}
          name="اسم کتاب 7"
          stars="4"
        />
      </div>
    </div>
  );
}
