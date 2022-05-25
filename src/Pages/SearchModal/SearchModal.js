// Libraries
import React, { useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

//Stylesheets
import './SearchModal.css';

//Components
import Checkmark from '../../Components/UI/Checkmark/Checkmark';
import DoubleSlider from './../../Components/UI/DoubleSlider/DoubleSlider';

export default function SearchModal({ onSubmit }) {
  const authorFilter = useRef();
  const titleFilter = useRef();
  const genreFilter = useRef();
  const textFilter = useRef();
  const finishedFilter = useRef();
  const freeFilter = useRef();

  const inputRef = useRef();

  let minPrice = 1000;
  let maxPrice = 50000;

  const inputKeyPressHandler = event => {
    if ((event.which !== 13 && event.keyCode !== 13) || !onSubmit) return;
    const filters = {
      author: authorFilter.current.checked,
      title: titleFilter.current.checked,
      genre: genreFilter.current.checked,
      text: textFilter.current.checked,
      finished: finishedFilter.current.checked,
      free: freeFilter.current.checked,
    };

    const key = event.target.value;

    onSubmit(key, filters, { minPrice, maxPrice });
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="search-modal">
      <div className="search-input">
        <FaSearch className="search__icon" />
        <input
          className="search__input"
          placeholder="جست و جو کنید."
          type="search"
          onKeyPress={inputKeyPressHandler}
          ref={inputRef}
        />
        <hr />
      </div>
      <div className="search__filters">
        <h3 className="filters__title">فیلترها</h3>

        <div className="filters-container">
          <Checkmark
            id="search-author"
            label="نام نویسنده"
            reference={authorFilter}
          />
          <Checkmark
            id="search-book-title"
            label="عنوان کتاب"
            checked
            reference={titleFilter}
          />
        </div>

        <hr />
        <div className="filters-container">
          <Checkmark id="search-genre" label="ژانر" reference={genreFilter} />
          <Checkmark id="search-text" label="متن" reference={textFilter} />
          <Checkmark
            id="search-finished"
            label="فقط اتمام یافته ها"
            reference={finishedFilter}
          />
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
            onUpdate={(handle, values, positions) => {
              [minPrice, maxPrice] = values;
            }}
          />
          <Checkmark
            id="search-free"
            label="فقط رایگان ها"
            checked
            reference={freeFilter}
          />
        </div>
      </div>
    </div>
  );
}
