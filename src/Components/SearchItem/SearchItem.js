// Libraries
import React from 'react';

//Components
import Stars from '../UI/Stars/Stars.js';

// Stylesheets
import './SearchItem.css';

export default function SearchItems({ bookId, author, cover, name, stars}) {
  return (
    <div className="search-items">
      <div className="search-item__details">
        <img
          className="search-items__image"
          src={cover}
        />
        <div className="search-items__text">
          <h1 className="search-items__bookname">{name}</h1>
          <h3 className="search-items__authorname">{author}</h3>
        </div>
      </div>

      <Stars className="search-item__stars" stars={stars} />
    </div>
  );
}
