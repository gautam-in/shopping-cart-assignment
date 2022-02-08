import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from "./logo.png";
import './Header.scss';

export default function Header() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(()=> {
    return{
      // EventBus.remove("logout");
    }
  }, [])

  function logOut() {
    // AuthService.logout();
    setCurrentUser(undefined);

  }

  return (
    <header>
      <section className="logo">
        <img src={logo} alt="Logo" />
      </section>
      <nav className="menu">
        <ul>
          <li><Link to={"/home"} className='link'>Home</Link></li>
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
        <a href="cart" className='cart-button'><i className="fas fa-shopping-cart"><span>{0} Items</span></i></a>          
      </section>
    </header>
  )
}
