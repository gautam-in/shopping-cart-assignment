import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import SignUp from './components/Register/Signup';
function App() {
  return (
    <div className="App">
      <h2>app file</h2>
      <Login/>
      <SignUp/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
