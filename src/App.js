// Libraries
import React, { useContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';

// Components
import Main from './Pages/Main/Main';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

// Stylesheets
import './App.css';
import './Assets/Stylesheets/Fonts.css';
import './Assets/Stylesheets/Globals.css';
import UserContext, { UserContextProvider } from './Logic/Context/UserContext';

function App() {
  const DummyHome = () => {
    const { fullName, username, phone, isLoggedIn, dispatch } =
      useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (!isLoggedIn) navigate('/');
    });

    const signoutHandler = event => {
      dispatch({ type: 'LOGOUT' });
    };

    return (
      <>
        <h1>Dummy Home Page!</h1>
        <p>Congrats! You are logged in</p>
        <hr />
        <p>
          For security reasons, we do not save your password in client side. But
          your other login credentials are:
        </p>
        <h6>Full name: </h6>
        <p>{fullName}</p>
        <h6>Username: </h6>
        <p>{username}</p>
        <h6>Phone Number: </h6>
        <p>{phone}</p>
        <hr />
        <button onClick={signoutHandler}>Sign out</button>
      </>
    );
  };

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
            <Route exact path="/home" element={<DummyHome />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
