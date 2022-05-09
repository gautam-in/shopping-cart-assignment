import React from 'react';
import {
  BrowserRouter
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthState from "./store/Auth/State";
import CarouselState from "./store/Carousel/State";
import CategoriesState from "./store/Categories/State";
import ProductsState from "./store/Products/State";
import CartState from "./store/Cart/State";
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthState>
  <CarouselState>
    <CategoriesState>
      <ProductsState>
        <CartState>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartState>
      </ProductsState>
    </CategoriesState>
  </CarouselState>
</AuthState>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
