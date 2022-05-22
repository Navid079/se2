import React from 'react';
import Latex from 'react-latex';

import './Formula.css'

const Formula = ({ children }) => {
  return (
    <div className='formula font-deny'>
      <Latex displayMode>{children}</Latex>
    </div>
  );
};

export default Formula;
