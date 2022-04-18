// Libraries
import React from 'react';

// Components
import Context from './Logic/App/Context';
import Router from './Logic/App/Router';

// Stylesheets
import './App.css';
import './Assets/Stylesheets/Fonts.css';
import './Assets/Stylesheets/Globals.css';

function App() {
  return (
    <div className="App">
      <Context>
        <Router />
      </Context>
    </div>
  );
}

export default App;
