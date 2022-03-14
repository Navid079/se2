// Libraries
import React from 'react';

// Stylesheets
import './Card.css';

export default function Card({ className, children }) {
  return <div className={`card ${className || ''}`}>{children}</div>;
}
