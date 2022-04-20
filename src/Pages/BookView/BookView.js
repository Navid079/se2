import React from 'react';

export default function BookView() {
  return (
    <div className="book-view">
      <div className="book-view__cover">
        <img />
      </div>
      <div className="book-view__details">
      <p className="book-view__details-name"></p>
      <p className="book-view__details-price"></p>
      <p className="book-view__details-author"></p>
      <p className="book-view__details-status"></p>
      <p className="book-view__details-chapters"></p>
      <p className="book-view__details-star"></p>
      </div>
    </div>
  );
}
