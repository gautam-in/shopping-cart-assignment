import React from 'react';
import logo from '../../../public/images/logo.png';
import cart from '../../../public/images/cart.png';
import './style.scss';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render()
         {
        return(
            <div className="headermain">
            <div className="icon">
            <img src={logo} width="40%" height="90%" style={{paddingLeft:'5%',paddingTop:'2%'}}/>
            </div>
            {/* <p className="home">Home</p>
            <p className="products">Products</p> */}
            <Link to="/home" className="home">Home</Link>
            <Link to="/product"  className="products">Products</Link>
            <div className="login">
            <Link to="/login" className="Signin">SignIn</Link>
            <Link to="/register"  className="Register">Register</Link>
            </div>
            <div className="Cart">
            <img src={cart} width="50%" height="50%" style={{paddingLeft:'5%',paddingTop:'15%',}}/>
            <p className='itemText'>Items</p>
            </div>
            </div>
        )
    }
}


export default Header

