import React from "react";
import { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setFilter } from "../store/action.js";
import Cart from "./Cart";
import "../Scss/navbar.scss";


function Navbars() {

    const [cartFun,setCartFun] = useState(false);
    const{item} = useSelector((state)=>state);
    const dispatch = useDispatch();
    const handleFilter =  useCallback(
        () => {
            dispatch(setFilter(null))
        },[dispatch]
    )
    const toggleCart = useCallback(()=>setCartFun(!cartFun),[cartFun]);
    return (

        <header>
            <section className="navigation" role="navigation">
                <aside>
                    <img className="logo-img" src="static/images/logo.png" alt="logo" />
                </aside>
                <nav>
                    <ul className="list-n">
                        <li>
                            <Link to="/" className="link-des" onClick={handleFilter}>Home</Link>
                        </li>
                        <li>
                            <Link to="/products" className="link-des"  onClick={handleFilter}>Products</Link>
                        </li>
                    </ul>
                </nav>
                <section className="cart-login-container">
                    <nav>
                        <ul className="list-h">
                            <li className="link">
                            <Link to="/login" className="link-des" onClick={handleFilter}>SignIn</Link>
                            </li>
                            <li className="link">
                            <Link to="/register" className="link-des"  onClick={handleFilter}>Register</Link>
                            </li>
                        </ul>
                    </nav>

                    <button
                        tabIndex="0"
                        className="ct-nav"
                        onClick={toggleCart}
                    >
                        <img
                            src="static/images/cart.svg"
                            alt="cart icon"
                            className="icon"
                            id="outside"
                        />
                        <span className="text" id="cart-items">
                            {item} Items
                        </span>
                    </button>
                    <div
                        id="desktop-cart"
                        className="cart-main-cont"
                        style={{ display: cartFun ? "block" : "none" }}
                    >
                        <Cart cartVisible={toggleCart} />
                    </div>
                </section>
            </section>
        </header>

    )
}

export default Navbars;