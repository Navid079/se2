import React from 'react';
import { FaStar } from 'react-icons/fa';

import './Stars.css';

export default function Stars({ className, stars }) {
  const starComponents = [];
  for (let i = 0; i < stars; i++) {
    starComponents.push(<FaStar className="book__star" key={i} />);
  }
  const starClass =
    stars <= 3 ? 'book__star-3' : stars === 4 ? 'book__star-4' : 'book__star-5';

  return (
    <div className={`book__star-container ${className} ${starClass}`}>{starComponents}</div>
  );
}
