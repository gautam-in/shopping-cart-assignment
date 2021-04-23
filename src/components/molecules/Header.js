import React from 'react';
import { Link } from "react-router-dom";
import LogoImage from "../../images/logo.png";
import CartImage from "../../images/cart.svg";
const Header = () =>{

    return (<>
            <section>
            <div className="top_bar">
                <ul>
                    <li><Link to={'/signin'}> SignIn </Link></li>
                    <li><Link to={'/register'}> Resgister </Link></li>
                </ul>
            </div>
            </section>
            <header>
                <div className="nav_bar">
                    <div className="nav_logo">
                        <Link to={'/'}><img src={LogoImage} alt="Logo"/></Link>
                    </div>
                    <div className="nav_menu">
                        <ul>
                            <li><Link to={'/home'}>Home</Link></li>
                            <li><Link to={'/products'}>Products</Link></li>
                        </ul>

                    </div>
                    <div className="nav_cart">
                        
                            <p><img src={CartImage} alt="cart" /> 0 items</p>
                        
                    </div>

                </div>
                


            </header>
    </>)
}

export default Header;