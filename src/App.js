import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from '@remix-run/router';
import { useDispatch, useSelector } from 'react-redux';
import { changeCartItems, getBannerData, getCategories, getProductDetails, setShowCart } from './Containers/action';

const Header = React.lazy(() => import('./Components/Header'));
const Home = React.lazy(() => import('./Components/Home'));
const Products = React.lazy(() => import('./Components/ProductList'));
const Cart = React.lazy(() => import('./Components/Cart'));
const Login = React.lazy(() => import('./Components/Login'));
const Register = React.lazy(() => import('./Components/Register'));

function App() {
  const history = createBrowserHistory({ forceRefresh: true });
  const dispatch = useDispatch();
  const storeData = useSelector(state => state)

  useEffect(() => {
    dispatch(getBannerData());
    dispatch(getCategories());
    dispatch(getProductDetails());
  }, [dispatch]);

  const onHandleCart = (val) => {
    dispatch(setShowCart(val));
  }

  const onChangeItemCount = (val) => {
    dispatch(changeCartItems(val))
  }
  const { showCart, cartList } = storeData;
  return (
    <BrowserRouter history={history} forceRefresh={true}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Header onHandleCart={(val) => onHandleCart(val)} cartList={cartList} />
        <Routes>
          <Route path="/home" index element={<Home data={storeData} history={history} />} />
          <Route path="/products" element={<Products data={storeData} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {showCart && <Cart showCart={showCart} onHandleCart={(val) => onHandleCart(val)} cartList={cartList} onChangeItemCount={(val) => onChangeItemCount(val)} />}
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
