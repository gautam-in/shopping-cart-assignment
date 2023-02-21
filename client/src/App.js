import Home from './screens/home';
import Header from './ui/elements/header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Products from './screens/products/index.jsx';

function App() {
  return (
    <div className="App">
      <header className='App-header'><Header /></header>

      <div className='app-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </div>
      <footer className='App-footer'> Copyright &copy; 2022 Sabka Bazzar Groceries supplies pvt. ltd.</footer>
    </div>
  );
}

export default App;
