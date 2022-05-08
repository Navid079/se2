import React from 'react';

import './FontVariants.css';

export function Bold({ children }) {
  return <b className="fv-bold">{children}</b>;
}

export function Italic({ children }) {
  return <i className="fv-italic">{children}</i>;
}
