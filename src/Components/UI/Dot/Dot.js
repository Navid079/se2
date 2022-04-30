// Libraries

import React from 'react';

// Stylesheets
import './Dot.css';

export default function Dot({ count }) {
  let dots = [];
  for (let i = 0; i < count; i++) {
    dots.push(<span className="dots" />);
  }
  return <div className="dots-container">{dots}</div>;
}
