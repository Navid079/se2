// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

//Components
import Stars from '../UI/Stars/Stars.js';

// Stylesheets
import './SearchItem.css';

import { urlPrefixer } from '../../util/base64Utility';

export default function SearchItems({ bookId, author, cover, name, stars, onSelect }) {
  const coverUrl = urlPrefixer(cover);

  return (
    <Link className="g-reset" to={`/app/viewbook/${bookId}`} onClick={onSelect}>
      <div className="search-items">
        <div className="search-item__details">
          <img className="search-items__image" src={coverUrl} />
          <div className="search-items__text">
            <h1 className="search-items__bookname">{name}</h1>
            <h3 className="search-items__authorname">{author.fullName}</h3>
          </div>
        </div>
        <Stars className="search-item__stars" stars={stars} />
      </div>
    </Link>
  );
}
