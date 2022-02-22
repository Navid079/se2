import './App.css';
import './font.css';
import Landing from './Pages/Landing/Landing';
import Login from "./Pages/Login/Login";
import Main from './Pages/Main/Main';

function App() {
  return (
    <div className="App">
      {/* <Main>
        <Landing />
      </Main> */}
      <Main>
      <Login></Login>
      </Main>
    </div>
  );
}

export default App;
