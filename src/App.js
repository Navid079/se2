// Libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Main from './Pages/Main/Main';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

// Stylesheets
import './App.css';
import './Assets/Stylesheets/Fonts.css';
import './Assets/Stylesheets/Globals.css';
import { UserContextProvider } from './Logic/Context/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Main />}>
              <Route exact path="" element={<Landing />} />
              <Route exact path="login" element={<Login />} />
              <Route exact path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
