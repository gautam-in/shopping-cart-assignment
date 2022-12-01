import React from 'react';
import logo from '../static/images/logo.png';
import { HOMEURL, LOGINURL, PRODUCTSURL, REGISTERURL } from '../Url';
import { Link } from 'react-router-dom';
import '../Style/Header.scss';
import cartImage from '../static/images/cart.svg';
import { useDispatch } from 'react-redux';
import { filterCategory } from '../Containers/action';

function Header(props) {
    const dispatch = useDispatch;
    const onHandleProductClick = () => {
        dispatch(filterCategory(""));
    }

    const { onHandleCart, cartList } = props;
    return (
        <>
            <header>
                <div className='HeaderLeftCon'>
                    <img src={logo} alt="company logo" width="125px" />
                    <div className="LeftNav">
                        <Link to={HOMEURL}>Home</Link>
                        <Link to={PRODUCTSURL} onClick={() => onHandleProductClick()}>Products</Link>
                    </div>
                </div>
                <div className='HeaderRightCon'>
                    <div className="RightNav">
                        <Link to={LOGINURL}>SignIn</Link>
                        <Link to={REGISTERURL}>Register</Link>
                    </div>
                    <button className='CartBtn' onClick={() => onHandleCart(true)}>
                        <img src={cartImage} width="16px" alt='Cart Icon' />
                        {cartList.length} {cartList.length <= 1 ? 'item' : 'items'}
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;