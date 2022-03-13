// Libraries
import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

// Components
import LandingWrapper from './Pages/LandingWrapper/LandingWrapper';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import MainPage from './Pages/MainPage/MainPage';
import Profile from './Pages/Profile/Profile';

// Stylesheets
import './App.css';
import './Assets/Stylesheets/Fonts.css';
import './Assets/Stylesheets/Globals.css';
import { UserContextProvider } from './Logic/Context/UserContext';
import { AppContextProvider } from './Logic/Context/AppContext';
import HomeWrapper from './Pages/HomeWrapper/HomeWrapper';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <AppContextProvider>
          <Router>
            <Routes>
              <Route exact path="/" element={<LandingWrapper />}>
                <Route exact path="" element={<Landing />} />
                <Route exact path="login" element={<Login />} />
                <Route exact path="signup" element={<Signup />} />
              </Route>
              <Route exact path="/app" element={<HomeWrapper />}>
                <Route exact path="home" element={<MainPage />} />
                <Route exact path="profile" element={<Profile />} />
              </Route>
            </Routes>
          </Router>
        </AppContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
