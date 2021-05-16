import React, { useState } from "react";
import Header from './components/organisms/Header/Header';
import Home from './components/pages/Home';
import SignInPage from './components/pages/SignInPage';
import RegisterPage from './components/pages/RegisterPage';
import ProductListingPage from './components/pages/ProductListingPage';
import Cart from './components/organisms/Cart/Cart';
import { Route, Switch, BrowserRouter as Router, Redirect, useHistory } from 'react-router-dom';

function App() {
    let history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
        if (window.innerWidth < 770) {
            setShowModal(true);
            history.push("/cart");
        }
    };

    return (
        <>
            <Header toggleCartModal={toggleModal} />
            {window.innerWidth > 770 ? <Cart showCart={showModal} toggleCartModal={toggleModal} /> : null}
            <Switch>
                <Route exact path='/'>
                    <Redirect to="/home" />
                </Route>
                <Route exact path='/home' component={Home} />
                <Route exact path='/products' component={ProductListingPage} />
                <Route exact path='/signin' component={SignInPage} />
                <Route exact path='/cart' render={() => <Cart showCart={showModal} toggleCartModal={toggleModal} />} />
                <Route exact path='/register' component={RegisterPage} />
            </Switch>
        </>
    )
}

export default App;