import React, { Component, useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import { Route, Switch, BrowserRouter as Router, Redirect } from  'react-router-dom'

import * as Endpoints from './Endpoints'
import Header from './shared/Header'
import Footer from "./shared/Footer"
import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Error404 from './pages/Error404'

function App(){
    const [menuOpen, setMenuOpen] = useState(false)
    const [cart, setCart] = useState(false);
    const [categories, setCategories] = useState([]);
    const this_cart = useSelector((store) => store.cart);
    localStorage.setItem("cart", JSON.stringify(this_cart));

    React.useEffect(()=>{
        var axios = require("axios");
        var configurations = {
          method: "get",
          url: Endpoints.get_categories,
          headers: {}
        };

        axios(configurations)
        .then((res)=>{
          
          //sort by order & filter out disabled categories
          let activeCategories = res.data.sort(function(a, b){
              return a.order - b.order;
          }).filter(a => a.enabled == true);

          setCategories(activeCategories);
        })
        .catch((err)=>{
          console.log(err);
        })
    }, []);

    return (
      <>
        <Router>
          <Header setCart={setCart} cart={cart}  menuOpen={menuOpen} setMenuOpen={() => setMenuOpen(!menuOpen)} />
          <main>
          <Switch>
                <Route exact path='/'>
                    <Redirect to="/home" />
                </Route>
                <Route exact path='/home'>
                    <Home categories={categories} />
                </Route>
                <Route exact path='/products'>
                    <ProductsPage categories={categories} setCart={setCart} />
                </Route>
                <Route exact path='/signin' component={LoginPage} />
                <Route exact path='/signup' component={RegisterPage} />
                <Route component={Error404} />
                
          </Switch>
          </main>
          
          <Footer />
        </Router>
      </>
    )
}

export default App;