import React, { Component } from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Footer from '../shared/Footer'
import Header from '../shared/Header'
import Login from '../Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Register from '../Register'
import Products from '../products/Products'
import Cart from '../Cart'
import NotFound from '../NotFound'

export default class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <Banner />
                        <Categories />
                    </Route>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/products" component={Products} />
                    <Route path="/cart" component={Cart} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}
