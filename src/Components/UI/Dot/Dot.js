// Libraries

import React from 'react';

// Stylesheets
import './Dot.css';

export default function Dot({ className, count }) {
  let dots = [];
  for (let i = 0; i < count; i++) {
    dots.push(<span className="dot" />);
  }
  return <div className={`dot__container ${className || ''}`}>{dots}</div>;
}
