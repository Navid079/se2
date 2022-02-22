import React from 'react';

import './Main.css';

const Main = ({ children }) => {
  return (
    <div className="main">
      <div className="main__container">{children}</div>
    </div>
  );
};

export default Main;
