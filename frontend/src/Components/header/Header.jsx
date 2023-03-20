import React, { useState } from 'react'
import  './Header.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from '../Modal/Modal';


const Header = () => {
  const navigate= useNavigate();
  const[openCart,setOpenCart]=useState(false)
  const count=useSelector(state=>state.cart.totalItems)
  const clickHandler=()=>{
   navigate('/home')
  }
  const openCartHandler=()=>{
    setOpenCart(true)
  }
  return (
    <>
     <div className='header'> 
     
       <nav className='header__container'>
          <div className='logo' onClick={clickHandler}>
             <img className='logoimg' src='/static/images/logo.png' alt='logo'/>
           </div>

           <nav className="nav-link">
             <Link to='/home'>Home</Link>
             <Link to='/products'>Products</Link>
           </nav>
        
         <div className='right-nav'>
          <nav className='nav-auth'>
            <Link to='/signin'>Sign-in</Link>
            <Link to='/register'>Register</Link>
          </nav>

           <div className='cart' onClick={openCartHandler}>
                <img  className='cart-image' src="/static/images/cart.svg" alt='cart-icon'/>
                <span>{count} items</span>
           </div>
        </div>
        
        </nav>
        </div>

        {openCart? <Modal setOpenCart={setOpenCart}/>:null}
    </>
     )
}

export default Header