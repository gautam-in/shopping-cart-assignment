import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation-with-footer.component';
import Home from './routes/home/home.component';
import Products from './routes/products/products.components';
import Cart from './routes/cart/cart.component';
import Register from './routes/register/register.component';

import Login from './routes/login/login.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;

// references
// https://github.com/facebook/create-react-app/issues/834
