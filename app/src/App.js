import './App.scss';
import Home from './components/home/home.component'
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/header/header.component';
import Products from './components/products/product.component';
import Cart from './components/cart/cart.component';
import SignUp from './authComponent/signup.form.component';
import Login from './authComponent/login.form.component';


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
