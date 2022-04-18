// Libraries
import React from 'react';
import { FaSearch } from 'react-icons/fa';

//Stylesheets
import './SearchModal.css';

//Components
import Checkmark from '../../Components/UI/Checkmark/Checkmark';
import DoubleSlider from './../../Components/UI/DoubleSlider/DoubleSlider';

export default function SearchModal() {
  return (
    <div className="search-modal">
      <div className="search-input">
        <FaSearch className="search__icon" />
        <input
          className="search__input"
          placeholder="جست و جو کنید."
          type="search"
        />
        <hr />
      </div>
      <div className="search__filters">
        <h3 className="filters__title">فیلترها</h3>

        <div className="filters-container">
          <Checkmark id="search-author" label="نام نویسنده" checked />
          <Checkmark id="search-book-title" label="عنوان کتاب" checked />
        </div>

        <hr />
        <div className="filters-container">
          <Checkmark id="search-genre" label="ژانر" checked />
          <Checkmark id="search-text" label="متن" checked />
          <Checkmark id="search-finished" label="فقط اتمام یافته ها" />
        </div>
        <hr />
        <div className="filters-price-container">
          <h3 className="filters__title">قیمت</h3>
          <DoubleSlider
            className="search-slider"
            min={0}
            max={100000}
            start={1000}
            end={50000}
            step={1000}
          />
          <Checkmark id="search-free" label="فقط رایگان ها" />
        </div>
      </div>
    </div>
  );
}
