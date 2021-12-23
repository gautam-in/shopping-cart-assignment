import React from 'react';
import "./Header.css"
import logo from "../../static/images/logo.png"
import cart from"../../static/images/cart.svg"
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <div className="navbar">
        <div className="container">
        <div className="row center">
        <div className="nav-container">
        <div className="row center mobile">
            <div className="col-4 g-sm-0 logo">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="col-4 g-sm-0 page-links">
                <nav className="page">
                 <Link to="/" >Home</Link>
                </nav>
                <nav className="page">
                 <Link to="/productInfo" >Products</Link>
                </nav>
            </div>
            <div className="col-4 g-sm-0">
                <div className="row user-action flex-row-reverse">
                    <nav>Register</nav> <nav>Signin</nav>
                    </div>
                <div className="row flex-row-reverse " onClick={props.toggle} style={{cursor:"pointer"}}>
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
        </div>
    );
}

export default Header;