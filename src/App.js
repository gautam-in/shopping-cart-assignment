import React, { useEffect } from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { createBrowserHistory } from '@remix-run/router';
import { useDispatch, useSelector } from 'react-redux';
import { getBannerData, getCategories, getProductDetails } from './Containers/action';

const Header = React.lazy(() => import('./Components/Header'));
const Home = React.lazy(() => import('./Components/Home'));
const Products = React.lazy(() => import('./Components/ProductList'));
const Cart = React.lazy(() => import('./Components/Cart'));
const Login = React.lazy(() => import('./Components/Login'));
const Register = React.lazy(() => import('./Components/Register'));

function App() {
  const history = createBrowserHistory({forceRefresh:true});
  const dispatch = useDispatch();
  const storeData = useSelector(state=> state)

  useEffect(()=>{
    console.log('mount');
    dispatch(getBannerData());
    dispatch(getCategories());
    dispatch(getProductDetails());
  }, [dispatch]);
  // console.log(storeData, 'app.js')

  return (
    <BrowserRouter history={history} forceRefresh={true}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Routes>
          <Route path="/home" index element={<Home data={storeData} history={history}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products data={storeData}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
