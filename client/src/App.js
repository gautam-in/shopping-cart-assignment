import Home from './screens/Home';
import Header from './ui/header';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='App-header'><Header /></header>
      <div className='app-container'> <Home /></div>
      <footer className='App-footer'> Copyright &copy; 2022 Sabka Bazzar Groceries supplies pvt. ltd.</footer>
    </div>
  );
}

export default App;
