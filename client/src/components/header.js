import React from "react";
import {useSelector} from "react-redux";
import {  Link } from "react-router-dom";
import Cart from "./cart/cart";
import { IoMdCart } from "react-icons/io";
function noOfItems(cart) {
   
    let count=0;

    for (const item of cart) {
      count=count+item.qty;
    }
    return count;
}

function Header({setCart,cart}) {

    const cart1 = useSelector((store) => store.cart);
  return (
    <header className="header">
      {cart && <Cart setCart={setCart} />}
      <div>
        <div className="logo">
          <img src="./logo_2x.png" alt="" />
        </div>
        <nav className="navOptions">
          <span>
            <Link to="/home">Home</Link>
          </span>
          <span>
            <Link to="/products">Products</Link>
          </span>
        </nav>
      </div>
      <div>
        <div className={"cartLogoContainer"}>
          <nav className={"text"}>
            <span>
              <Link to="/login">SignIn</Link>
            </span>

            <span>
              <Link to="/register">Register</Link>
            </span>
          </nav>
          <div onClick={() => setCart(true)} className={"cartIcon"}>
            <button>
              <IoMdCart style={{ color: "#fd032f", fontSize: "2.5rem" }} />
            </button>
            <div>{noOfItems(cart1)} items</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
