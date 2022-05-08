import React from 'react';

import './FontVariants.css';

export function Bold({ children }) {
  return <b className="fv-bold">{children}</b>;
}

export function Italic({ children }) {
  return <i className="fv-italic">{children}</i>;
}

export function Underline({ children }) {
  return <u className="fv-underline">{children}</u>;
}

export function Colored({ children, color }) {
  return (
    <p className="fv-colored" style={{ color }}>
      {children}
    </p>
  );
}
