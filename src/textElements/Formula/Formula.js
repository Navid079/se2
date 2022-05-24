import React from 'react';
import Latex from 'react-latex';

import './Formula.css';

const Formula = ({ children, display }) => {
  return (
    <span className={`formula font-deny ${display ? 'formula__display' : ''}`}>
      <Latex displayMode={display}>{children}</Latex>
    </span>
  );
};

export default Formula;
