import React, { Suspense, useEffect } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Homepage, ProductListPage, Signin, Signup } from './pages';
import { Header } from './features/header/Header';
import { getCart } from './features/cart/CartSlice'
import { fetchProductList } from './features/productList/ProductListSlice';
import { fetchCategoryList } from './features/categories/CategorySlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCart())
    dispatch(fetchProductList());
    dispatch(fetchCategoryList())
  }, [])

  const cart = useSelector(state => state.cart)

  return (
    <div className="App">
      <div className='container app-container'>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Header cartList={cart} />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/products" element={<ProductListPage />} exact />
              <Route path="/products/:id" element={<ProductListPage />} exact />
              <Route path="/signin" element={<Signin />} exact />
              <Route path="/signup" element={<Signup />} exact />
            </Routes>
          </Router>
        </Suspense>
      </div>
    </div>
  );
}
export default App;
