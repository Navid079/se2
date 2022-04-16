// Libraries
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import SlideBar from "../../Components/UI/SlideBar/SlideBar";

//Stylesheets
import './SearchModal.css';

export default function SearchModal() {
  return (
    <div className="search-modal">
      <div className="search-input">
        <FaSearch className="search__icon" />
        <input
          className="search__input g-reset"
          placeholder="جست و جو کنید."
          type="search"
        />
        <hr />
      </div>
      <div className="search__filters">
        <h3 className="filters__title">فیلترها</h3>

        <div className="filters-container">
          <input type="checkbox" id="search-author" />
          <label for="search-author">نام نویسنده</label>

          <input type="checkbox" id="search-genre" />
          <label for="search-genre">ژانر</label>
        </div>
        <hr />
        <div className="filters-container">
          <input type="checkbox" id="search-book-title" />
          <label for="search-book-title">عنوان کتاب</label>

          <input type="checkbox" id="search-text" />
          <label for="search-text">متن</label>

          <input type="checkbox" id="search-finished" />
          <label for="search-finished">فقط اتمام یافته ها</label>
        </div>
        <hr />

        <div className="filters-price-container">
          <label for="search-price">قیمت</label>
          <SlideBar />

          <input type="checkbox" id="search-free" />
          <label for="search-free">فقط رایگان ها</label>
        </div>
      </div>
    </div>
  );
}
