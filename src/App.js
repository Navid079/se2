// Libraries
import React from 'react';

// Components
import Context from './Logic/App/Context';
import Router from "./Logic/App/Router";

// Stylesheets
import './App.css';
import './Assets/Stylesheets/Fonts.css';
import './Assets/Stylesheets/Globals.css';
import EditProfile from './Components/Profile/EditProfile/EditProfile';

function App() {
  return (
    <div className="App">
      <EditProfile/>
      {/* <Context>
        <Router />
      </Context> */}
    </div>
  );
}

export default App;
