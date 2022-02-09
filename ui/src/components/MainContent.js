import React from 'react';
import Home from './Home';
import ProductListingPage from './ProductListingPage';
import { Route,Routes } from 'react-router-dom';
import Cart from './Cart';
import SignIn from './SignIn';
import Register from './Register';

export default function MainContent() {
  return (<div>
    <section>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/plp' element={<ProductListingPage />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/signin' element={<SignIn />}></Route>
            <Route path='/register' element={<Register />}></Route>
        </Routes>
    </section>
  </div>);
}
