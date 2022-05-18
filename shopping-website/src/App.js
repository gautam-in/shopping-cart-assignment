import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import Register from './pages/Register';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className='contain'>
    <Routes>
      <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path='/products/:category' element={<ProductListing />} />
      <Route path='/register' element={<Register />} />
      <Route path='/signin' element={<SignIn />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
