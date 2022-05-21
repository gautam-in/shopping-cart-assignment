import { useState } from 'react';
import Cart from '../Cart/Cart.component';
import {Link} from 'react-router-dom';
import './Header.styles.css';
import useGetCartDetails from '../../Hooks/useGetCartDetails';

const Header = () =>{
    const {totalQty} = useGetCartDetails();
    const [cartClicked,setCartClicked] = useState(false);
    const handleClick = () => setCartClicked(state => !state);
    return(
        <header className="App-header">
        <div className="header__logo-container">
          <img src="/static/images/logo.png" alt="App__logo" className="header__logo-img" />
        </div>

        <div className="header__links--container">
          <div className="header__link--container">
            <Link className="header__link" to='/'>Home</Link>
          </div>

          <div className="header__link--container">
            <Link className="header__link" to='/products'>Products</Link>
          </div>
        </div>


        <div className="header__auth--section">
          <div className="header__auth--container">
            <Link className="header__link" to='/sign-in'>Sign-In</Link>
            <Link className="header__link" to='/register'>Register</Link>
          </div>

          <div className="header__auth--cartcontainer" onClick={handleClick}>
            <div className="header__auth--cart">
            <img src="/static/images/cart.svg" alt="App__logo" className="header__auth--cart-img" />
            </div>
            <div className="header__auth--cart-qty">
                {totalQty} items
            </div>
          </div>
        </div>
          {cartClicked && <Cart clickHandler={handleClick}/>}
      </header>
    )
}

export default Header;