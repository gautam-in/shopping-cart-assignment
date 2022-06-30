import './App.scss';
import Home from './components/home/home.component'
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/header/navigation';
import Products from './components/products/products';
import Cart from './components/cart/cart.component';
import SignUp from './authComponent/signUp';
import Login from './authComponent/login';


function App() {
  return (
        <Routes>
          <Route path="/" element={<Navigation />} >
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
  );
}

export default App;
