
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Cart } from '../../images/cart.svg';
import CartDropDown from '../cartDropDown/CartDropDown';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';
import { setCartItems,resetCartState } from '../../redux/cart/cart.action';
import {message} from 'antd'



import { auth } from '../../firebase/firebase.utils';


const Header = ({ currentUser,dispatch,...props }) => {
  const [cart_popup, setCartPopUp] = useState(false)


  const onCartClick = (e) => {
    setCartPopUp(!cart_popup);
  }
  const onSignOut=()=>{
    auth.signOut();
    dispatch(setCurrentUser(null));
    dispatch(resetCartState());
    message.success('Signed Out Successfully');
  }
  return (
    <div className='header'>
      <div className='header_container flex'>
        <div className='mainLogo_nd_products flex'>
          <Link className='homelogo-navigation' to='/'>
            <img src={"/static/images/logo.png"} alt="Home" className='home_logo' />
          </Link>
          <Link className='products_navigation' to='/products'>
            Products
          </Link>
        </div>

        <div className='cartLogin flex'>
          {currentUser ? (
            <Link className='login_navigation' onClick={onSignOut} to='/login'>
              SIGN OUT
            </Link>
          ) : (
            <Link className='login_navigation' to='/login'>
              SIGN IN
            </Link>
          )}
          <div className='cart_navigation flex'>
            {/* <Dropdown overlay={menu} trigger={['click']}>
            <div onClick={onCartClick} className="dropbtn"><Cart className='cart' /> <span className='cart_text'>Cart</span></div>
            </Dropdown> */}
            <div onClick={onCartClick} className="dropbtn flex"><Cart className='cart' /> <span className='cart_text'>{props.cartItems.length} Items</span>
            </div>
            <CartDropDown cart_popup={cart_popup} onCartClick={onCartClick}/>

          </div>

        </div>
      </div>

    </div>
  )
};

const mapStateToPros = (state, prop) => {
  return {
    cartItems: state.cartReducer.cart_items,
    itemsInCart:state.cartReducer.itemsInCart,
    currentUser:state.user.currentUser

  }
}




export default connect (mapStateToPros, null)(Header);