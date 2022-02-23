import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
// import {
//     Switch,
//     Route
// } from "react-router";
import Home from '../components/Home';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Footer from '../common/Footer';
import Header from '../common/Header';
import Products from '../components/Products';

function RouterNavigation() {
    return (
        <Router>
            <div>
                <div>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/Home" element={<Home />} />
                        <Route path="/Products" element={<Products />} />
                    </Routes>
                    <Footer />
                </div>
               
            </div>
        </Router>
    )
}

export default RouterNavigation