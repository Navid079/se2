// Libraries
import React, { useContext } from 'react';
import {
  BrowserRouter as RouterComponent,
  Routes,
  Route,
} from 'react-router-dom';

// Components
import LandingWrapper from '../../Pages/LandingWrapper/LandingWrapper';
import Landing from '../../Pages/Landing/Landing';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
import Home from '../../Pages/Home/Home';
import Profile from '../../Pages/Profile/Profile';
import HomeWrapper from '../../Pages/HomeWrapper/HomeWrapper';
import UserContext from '../Context/UserContext/UserContext';
import BookView from '../../Pages/BookView/BookView';
import Agenda from '../../Pages/Agenda/Agenda';

export default function Router() {
  const userContext = useContext(UserContext);
  window.onbeforeunload = () => {
    localStorage.setItem('user-context', JSON.stringify(userContext));
  };

  return (
    <RouterComponent>
      <Routes>
        <Route exact path="/" element={<LandingWrapper />}>
          <Route exact path="" element={<Landing />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<Signup />} />
        </Route>
        <Route exact path="/app" element={<HomeWrapper />}>
          <Route exact path="" element={<Home />} />
          <Route exact path="profile" element={<Profile />} />
          <Route exact path="viewBook/:bookId" element={<BookView />} />
          <Route exact path="agenda/:bookId" element={<Agenda/>} />
        </Route>
      </Routes>
    </RouterComponent>
  );
}
