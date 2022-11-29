import logo from '../static/images/logo.png';
import React from 'react';
import { HOMEURL, LOGINURL, PRODUCTSURL, REGISTERURL } from '../Url';
import { Link } from 'react-router-dom';
import '../Style/Header.scss';
import cartImage from '../static/images/cart.svg';

function Header(props) {

    const {onHandleCart, cartList} = props;
    return (
        <>
            <header>
                <div className='HeaderLeftCon'>
                 <img src={logo} alt="company logo" width="125px"/>
                 <div className="LeftNav">
                    <Link to={HOMEURL}>Home</Link>
                    <Link to={PRODUCTSURL}>Products</Link>
                 </div>
                </div>
                <div className='HeaderRightCon'>
                    <div className="RightNav">
                        <Link to={LOGINURL}>SignIn</Link>
                        <Link to={REGISTERURL}>Register</Link>
                    </div>
                    <button className='CartBtn' onClick={()=> onHandleCart(true)}>
                        <img src={cartImage} width="16px" alt='Cart Icon'/>
                        {cartList.length} Items
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;