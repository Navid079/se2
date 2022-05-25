// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Stars from '../UI/Stars/Stars.js';

// Stylesheets
import './SearchItem.css';

export default function SearchItems({ bookId, author, cover, name, stars }) {
  return (
    <Link className="g-reset" to={`/app/viewbook/${bookId}`}>
      <div className="search-items">
        <div className="search-item__details">
          <img className="search-items__image" src={cover} />
          <div className="search-items__text">
            <h1 className="search-items__book-name">{name}</h1>
            <h3 className="search-items__author-name">{author}</h3>
          </div>
        </div>
        <div className="search-item__stars-container">
          <Stars className="search-item__stars" stars={stars} />
        </div>
      </div>
    </Link>
  );
}
