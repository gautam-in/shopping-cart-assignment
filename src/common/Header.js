import React from 'react'
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header() {
    let navigate = useNavigate(); 

    return (
        <header className='header pg-lr-sp'>
            <div className='section1 fx_aE'>
                <img src="static/images/logo.png" className='logo' alt="sabka-bazar-logo"  onClick={()=>{navigate('Home');}}/>
                <nav className="nav-section">
                    <NavLink
                        to="/Home"
                        className="nav-link">
                        Home
                    </NavLink>
                    &emsp;
                    &emsp;
                    <NavLink
                        to="/Products"
                        className="nav-link">
                        Products
                    </NavLink>
                </nav>
            </div>
            <section className='section2'>
                <div className='auth'>
                    <nav className="nav-section">
                        <NavLink
                            to="/"
                            className="nav-link">
                            SignIn
                        </NavLink>
                        &emsp;
                        <NavLink
                            to="/Register"
                            className="nav-link">
                            Register
                        </NavLink>
                    </nav>
                    {/* <span>SignIn</span>
                    &emsp;
                    <span>Register</span> */}
                </div>
                <div className='header-cart'>
                    <img src="static/images/cart.svg" className='cartIcon' alt="cart-logo" />
                    &nbsp;
                    <span>0</span>
                    &nbsp;
                    <span>items</span>
                </div>
            </section>
        </header >
    )
}

export default Header