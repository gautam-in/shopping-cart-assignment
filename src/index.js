import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {UserProvider} from './contexts/user-context';
import './index.scss';
import { CategoriesProvider } from './contexts/categories.context';
import { BannersProvider } from './contexts/banners.context';
import { CartProvider } from './contexts/cart.context';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <UserProvider>
                    <BannersProvider>
                        <CategoriesProvider>
                            <CartProvider>
                                <App />
                            </CartProvider>
                        </CategoriesProvider>
                    </BannersProvider>
                </UserProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
