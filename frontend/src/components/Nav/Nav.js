import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setShowCart } from "../../redux/cartSlice";
import cartImage from '../../Images/cart.svg';
import Cart from "../Cart/Cart";
import LoginMessage from "../LoginMessage/LoginMessage";

export default function Nav() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const user = useSelector((state) => state.user);
    const [clicked, setClicked]= useState(false)
    
    const showCartHandler = () => {
        if (user.payload)
            dispatch(setShowCart())
        else
            setClicked(true)
    };

    return (
        <div className="page-links">
            <Link className="link" to="/">
                <h3>Home</h3>
            </Link>
            <Link className="link" to="/products">
                <h3>Products</h3>
            </Link>
            <div className="cart" onClick={showCartHandler}>
                <div className="cart-info">
                    <img src={cartImage} alt="cart" />
                    <p>{user.payload?cart.cartTotalQuantity: 0} Items</p>
                </div>
            </div>
            {user.payload ? cart.showCart && <Cart /> : clicked && <LoginMessage clicked={clicked} setClicked={setClicked}/>}
        </div >
    )
}