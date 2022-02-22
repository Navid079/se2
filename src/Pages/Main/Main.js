import React from 'react';

import './Main.css';

const LandingPage = ({ children }) => {
  return (
    <div className="landing-page">
      <div className="landing-page__container">{children}</div>
    </div>
  );
};

export default LandingPage;
