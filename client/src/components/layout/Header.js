import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AuthReq from '../utils/AuthReq';
import eventBus from '../utils/eventBus';
import logo from "./logo.png";
import './Header.scss';

export default function Header(props) {
  const [currentUser, setCurrentUser] = useState(undefined);

  let qty = Object.keys(props.cartProducts).reduce((acc,current)=> acc + props.cartProducts[current].qty, 0);

  useEffect(()=> {
    
    return{
      // eventBus.remove("logout")
    }
  }, [])

  function logOut() {
    AuthReq.logout();
    setCurrentUser(undefined);
  }

  return (
    <header>
      <section className="logo">
        <img src={logo} alt="Logo" />
      </section>
      <nav className="menu">
        <ul>
          <li><Link to={"/"} className='link'>Home</Link></li>
          <li><Link to={"/products"}  className='link'>Products</Link></li>
        </ul>
      </nav>
      <section className="right-heading">
        {currentUser ? (
          <a href="/login" className="signin" onClick={logOut}>
            LogOut
          </a>

        ) : (
          <>
            <Link to={"/login"} className="signin">Signin</Link>
            <Link to={"/register"} className="register">Register</Link>
          </>
        )}
        <button className='cart-button' onClick={props.toggle} tabIndex="5" aria-pressed="true">
          <i className="fas fa-shopping-cart"><span>{qty} Items</span></i>
        </button>          
      </section>
    </header>
  )
}
