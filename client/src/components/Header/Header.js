import React from "react"
import "../../styles/components/header.scss"
import logo from '../../assets/images/logo.png';
import cartLogo from "../../assets/images/cart.svg"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { openCart } from "../../features/cart/CartSlice"
import Cart from "../../components/Cart/Cart"
import { useLocation } from "react-router-dom";



const Header = () => {

    const { cartList, cartOpen } = useSelector(state => state.CartReducer)

    const dispatch = useDispatch()

    const handleCart = () => {
     dispatch(openCart())


    }

    const activeLink = useLocation().pathname


    return <main className="header_container">
        <section className="logo">
            <img src={logo} aria-label="sabka bazar logo"/>
        </section>
        <nav className="nav_links">
            <Link to="/home" className={activeLink === "/home" ? "activelink" : "homelink"}>Home</Link>
            <Link to="/productlist" className={activeLink === "/productlist" ? "activelink" : "productlink"}>Products</Link>
        </nav>
        <section className="register_cart_container">
            <section className="register_container">
                <Link to="/login" className="signin_link">SignIn</Link>
                <Link to="/register" className="register_link">Register</Link>

            </section>

            <Link className="cart_container" onClick={handleCart}>
                <img src={cartLogo} alt="cart logo" aria-label="image of cart" className="filter_pink" />
                <span>{`${cartList.totalItems} items`}</span>
            </Link>


        </section>
        <section >

            {cartOpen && <Cart />}
        </section>
    </main>

}

export default Header