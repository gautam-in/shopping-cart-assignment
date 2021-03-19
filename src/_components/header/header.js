import React from 'react';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';
import './style.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render()
         {
        return(
            <div className="headermain">
            <div className="icon">
            <img src={logo} width="55%" height="80%" style={{paddingLeft:'5%',paddingTop:'2%'}}/>
            </div>
            <p className="home">Home</p>
            <p className="products">Products</p>
            <div className="login">
            <Link to="/login" className="Signin">SignIn</Link>
            <Link to="/register"  className="Register">Register</Link>
            </div>
            <div className="Cart">
            <img src={cart} width="50%" height="50%" style={{paddingLeft:'5%',paddingTop:'15%',}}/>
            <p>Items</p>
            </div>
            </div>
        )
    }
}


export default Header

