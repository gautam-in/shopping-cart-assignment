import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProductsPage from './pages/ProductsPage/ProductsPage';
import Notification from './components/Notification/Notification';
import Cart from './components/Cart/Cart';

import { selectNotificationError } from './redux/Home/selectors';
import { selectLoggedInUser } from './redux/User/selectors';
import { selectShowCart } from './redux/Cart/selectors';
import { checkAuth } from './redux/User/actions';

const Views = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 3px;
  min-height: 90vh;
  max-height: 100%;



  // Tablets
  @media only screen 
  and (min-width : 768px) 
  and (max-width : 1024px) {
    width: 95%;
  }

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    min-height: 84vh;
    width: 95%;
  }
`;

const App = () => {
  const showCart = useSelector(selectShowCart);
  const loggedInUser = useSelector(selectLoggedInUser);
  const error = useSelector(selectNotificationError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);
  return (
    <div>
      <Header />
      <Views ariaDisabled={true}>
        { error && error.hasError && <Notification message={error.message} />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="products/:filterId" element={<ProductsPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="login" element={loggedInUser ? <Navigate to="/" />: <LoginPage />} />
          <Route path="register" element={loggedInUser ? <Navigate to="/" /> : <RegisterPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Views>
      {showCart && <Cart />}
      <Footer />
    </div>
  );
}

export default App;
