import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import PrivateRoute from './component/PrivateRoute';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './views/Home';
import Products from './views/Products';
import Cart from './views/Cart';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import CategoryContextProvider from './context/ProductCategoryContext';
import CartContextProvider from './context/CartContext';

import './_slick.css';
import './_slick-theme.css';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Arial';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: #d10157;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #868686;
    --lightGray: var(--lightGrey);
    --lightblue: #3ddddd;
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 12px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Arial', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    line-height:2;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
  h1 {
    font-size: 0.5rem;
    margin-left: 12rem;
    position: relative;
    z-index: 2;
    a {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      padding: 0.5rem 1rem;
    }
  }
  
  button:hover{
    cursor: pointer;
  }
  button {
    width: 100%;
    background: var(--red);
    color: white;
    border: 0;
    font-size: 1rem;
    padding: 1rem;
    font-family: Arial','radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function App() {
  const routerRef = React.createRef();

  const users = JSON.parse(localStorage.getItem('users'));
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));

  /* Initialize an empty array if the users array does not exist. */
  users ?? localStorage.setItem('users', JSON.stringify([]));

  /* Initialize an flag to check logged in state */
  isLoggedIn ?? localStorage.setItem('isLoggedIn', JSON.stringify(false));

  return (
    <div className='App'>
      <GlobalStyles />
      <CategoryContextProvider>
        <CartContextProvider>
          <Router ref={routerRef}>
            <Header />
            <Switch>
              <Route exact path='/signin' component={SignIn} />
              <Route exact path='/register' component={SignUp} />
              <PrivateRoute exact path='/' component={Home} />
              <PrivateRoute exact path='/products' component={Products} />
              <PrivateRoute exact path='/cart' component={Cart} />
            </Switch>
          </Router>
          <Footer />
        </CartContextProvider>
      </CategoryContextProvider>
      <InnerStyles />
    </div>
  );
}
