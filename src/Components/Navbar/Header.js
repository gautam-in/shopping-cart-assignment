import React from "react";
import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
function Header({cartItems}) {
  const navigate=useNavigate();
  return (
    <header className="header-container">
    <div className="left-container">
    <div className="logo">
        <img src="static/images/logo.png" alt="hello" />
      </div>
      <div className="header-links">
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/products">Products</Link>
        </span>
      </div>
    </div>
      <div className="right-container">
      <div className="header-login">
        <div className="login-wrapper">
          <span>
            <Link to="/signin">Sign-In</Link>
          </span>
          <span>
            <Link to="/register">Register</Link>
          </span>
        </div>
        <div className="cart-container" onClick={()=>navigate('/cart')}>
          <img
            src="static/images/cart.svg"
            alt="cart-icon"
            height="30px"
            width="30px"
          />
          <div>{ cartItems?.length || 0} Items</div> 
        </div>
      </div>
      </div>
    </header>
  );
}


const mapStateToProps=(state)=>({
  cartItems:state?.cart
})


// const mapStateToProps=(state)=>({state})

// const mapDispatchToProps={
//   increaseProductQuantity:(id)=>(dispatch)=>dispatch(increaseQuantity(id))
// }

export default connect(mapStateToProps)(Header);
