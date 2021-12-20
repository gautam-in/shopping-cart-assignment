import React from 'react';
import "./Header.css"
import logo from "../../static/images/logo.png"
import cart from"../../static/images/cart.svg"
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <div className="container navbar ">
        <div className="row center">
        <div style={{width:"80%"}}>
        <div className="row center">
            <div className="col-4 g-sm-0">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="col-4 g-sm-0">
                <nav className="page">
                 <Link to="/" >Home</Link>
                </nav>
                <nav className="page">
                 <Link to="/productInfo" >Products</Link>
                </nav>
            </div>
            <div className="col-4 g-sm-0">
                <div className="row user-action flex-row-reverse">
                    <nav>Signin</nav>  <nav>Register</nav>
                    </div>
                <div className="row flex-row-reverse ">
                    <div className="cart row flex-row-reverse ">
                    <nav>
                        0 Items
                    </nav>
                    <nav>
                        <img src={cart} style={{height:"100%"}} alt="cart"/>
                    </nav>
                </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Header;