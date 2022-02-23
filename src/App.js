import './App.css';
import './font.css';
import Main from './Pages/Main/Main';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div className="App">
      {/* <Main>
        <Landing />
      </Main> */}
      {/* <Main>
      <Login />
      </Main> */}
      <Main>
        <Signup />
      </Main>
    </div>
  );
}

export default App;
