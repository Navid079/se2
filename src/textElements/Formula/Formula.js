import React from 'react';
import Latex from 'react-latex';

const Formula = ({ children }) => {
  return <Latex>{children}</Latex>;
};

export default Formula;
