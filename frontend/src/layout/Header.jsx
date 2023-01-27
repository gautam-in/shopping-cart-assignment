import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/images/logo.png"
import { HiShoppingCart } from 'react-icons/hi';
import { getItemFromLocalstorage, removeItemFromLocalstorage } from '../utilities/localstorageUser';
import { useDispatch, useSelector } from 'react-redux';
import { toggleLogin } from '../Features/user/userSlice';
import ShoppingCart from '../Features/shopping-cart/ShoppingCart';

function Header() {
const {isLoggedIn}=useSelector((state)=>state.user)
const {totalItems}=useSelector((state)=>state.cart)

const dispatch=useDispatch();

const logOut=()=>{
    removeItemFromLocalstorage("user");
    dispatch(toggleLogin());
    alert("User Logged out successfully")

}

  // accessibility offcanvas code

document.addEventListener('DOMContentLoaded', function(event) 
{
  let hamburger = document.getElementById('cart-btn');
  let closeButton= document.getElementById("close-btn");


  hamburger.onclick = function()
  {   
      if(this.getAttribute('aria-expanded') == 'false')
      {
          this.setAttribute('aria-expanded', 'true');
          closeButton.focus();
      }else{
          this.setAttribute('aria-expanded', 'false');
      }
  }
  closeButton.onclick=function(){
    hamburger.setAttribute('aria-expanded',"false");
  }
});


  return (
    <>
    <header>
        <div className="container-lg p-0 position-relative"><div className="logo">
       <Link role="link" tabIndex="0" to="/"> <img className="logo" alt="Sabka Bazzar-Homepage" src={logo}/></Link>

        </div>
        <nav  aria-label='main navigation'>
            <ul>
                <li><NavLink  to="/">Home</NavLink></li>
                <li><NavLink to="/products">Products</NavLink></li>

            </ul>
        </nav>
        <div className="cart-container">
        <nav aria-label='sub navigation'>
            <ul>
                <li>
                    {
                        isLoggedIn  ? <button onClick={logOut}>Log out</button> : <NavLink  to="/login">Login</NavLink>

                    }
                    </li>
                <li><NavLink  to="/register">Ragister</NavLink></li>

            </ul>
        </nav>
        <div className="cartbox text-center">
        <button id="cart-btn" data-bs-toggle="offcanvas" data-bs-target="#cart-container" aria-expanded="false"  aria-controls="cart-container" aria-label='Shopping cart'><HiShoppingCart /></button>
        <span>{totalItems>0 ? `${totalItems} items`: "0 items" }</span>
        </div>
        </div>

        </div>

    </header>
    <ShoppingCart/>

    </>
    
  )
}

export default Header

