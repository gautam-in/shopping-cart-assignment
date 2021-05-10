import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import LogoImage from "../../images/logo.png";
import CartImage from "../../images/cart.svg";
import {showModal} from '../../actions/actionCreators';

import Cart from '../molecules/Cart';
    




    
const Header = () =>{
    const dispatch = useDispatch();
    const itemCount = useSelector(state => state.cart.cartItem);
    const showModalFlag = useSelector(state => state.cart.showModal);
   const showCart = ()=>{
       console.log("called");
       dispatch({ type: "SHOW_MODAL"});
   }
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
                    {showModalFlag?
            <div className="cartContainer">
              <Cart />
            </div>:""}
                    <div className="nav_cart" >
                    <Link to={'/cart'}>
                            <img src={CartImage} alt="cart" /> 
                            <p>{itemCount} items</p>
                        </Link>
                    </div>

                </div>
                


            </header>
    </>)
}

export default Header;