import React from 'react';
import { FaStar } from 'react-icons/fa';

import './Stars.css';

export default function Stars({ className, stars }) {
  stars = Math.round(stars)

  const starComponents = [];
  for (let i = 0; i < stars; i++) {
    starComponents.push(<FaStar className="star" key={i} />);
  }
  const starClass =
    stars <= 3 ? 'star-3' : stars === 4 ? 'star-4' : 'star-5';

  return (
    <div className={`star-container ${className} ${starClass}`}>{starComponents}</div>
  );
}
