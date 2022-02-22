import './App.css';
import './font.css';
import Landing from './Pages/Landing/Landing';
import Main from './Pages/Main/Main';

function App() {
  return (
    <div className="App">
      <Main>
        <Landing></Landing>
      </Main>
    </div>
  );
}

export default App;
