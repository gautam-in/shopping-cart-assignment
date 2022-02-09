import React from 'react';
import {Link} from "react-router-dom";
import './header.styles.scss';
// import  {ReactComponent as Logo} from "F:\sapient-assigment\shopping-cart-assignment-1\frontend\public\static\images\logo.png"
const Header=()=> {
  return <div className='header'>
      {/* <Link className='logo-container' to="/">
    
      </Link> */}
      <div className='options'>
        <Link className='option'>
            <Link to ="/">Home</Link>
        </Link>

        <Link className='option'>
            <Link to ="/products">Products</Link>
        </Link>
        </div>
  </div>;

}

export default Header;
