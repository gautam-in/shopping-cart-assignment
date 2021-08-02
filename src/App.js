import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import NavBar from './components/NavBar';
import Products from './components/Products';
import SignUp from './components/SignUp';
import LogIn from './components/Login';
import Cart from './components/Cart';

import CartContext from './Context/CartContext';

const App = () => {

    const [ cart, setCart ] = useState([]);
    const value = { cart, setCart }
    
    return (
        <CartContext.Provider value={ value }>
            <BrowserRouter>
                <header>
                    <NavBar />
                </header>
                <main>
                     <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <LogIn />
                        </Route>
                        <Route path="/signup">
                            <SignUp />
                        </Route>
                        <Route path="/products/:categoryId">
                            <Products />
                        </Route>
                        <Route path="/products">
                            <Products />
                        </Route>
                        {/* <Route path="/home"> 
                            <Cart />
                        </Route> */}
                    </Switch>
                </main>
                <footer>
                    <p>
                        Copyrigth &copy; 2011-2018 Sabka Bazar Groceries Supplies Pvt Ltd
                    </p>
                </footer>
            </BrowserRouter>
        </CartContext.Provider>
        );
}

export default App;