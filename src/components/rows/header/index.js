import React, { useState } from 'react';
import { number } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Image from '../../atoms/image';
import CustomLink from '../../atoms/link';
import Modal from '../../atoms/modal';
import Cart from '../../pages/cart';

import { HOME, PRODUCTS, SIGNIN, REGISTER, CART } from '../../../utils/RouteNames';
import { _TITLE, _HOME, _LOGIN, _PRODUCTS, _SIGNIN, _REGISTER, _LOGOUT } from '../../../utils/constants';
import { LOGOUT } from '../../../redux/actionTypes';

import './header.scss';

const Header = () => {

    const dispatch = useDispatch();
    const { cartCount, loggedIn, userName } = useSelector((state) => state);

    const [showCart, setShowCart] = useState(false);

    const handleModal = () => {
        setShowCart(!showCart);
    }

    const onLogout = () => {
        dispatch({ type: LOGOUT });
    }

    const logInWrapper = () => (
        loggedIn ? <>
            <div className='user-name'>{userName}</div>
            <CustomLink href={HOME} label={_LOGOUT} onClick={onLogout} />
        </>
            : <>
                <CustomLink href={SIGNIN} label={_SIGNIN} />
                <CustomLink href={REGISTER} label={_REGISTER} />
            </>
    );

    return <header>
        <div className='container'>
            <div className='header-wrapper'>
                <div className='logo-menu-warapper'>
                    <CustomLink href={HOME}><Image src='/logo.png' alt={_TITLE} /></CustomLink>
                    <nav>
                        <CustomLink href={HOME} label={_HOME} />
                        <CustomLink href={PRODUCTS} label={_PRODUCTS} />
                    </nav>
                </div>
                <div className='right-side-wrapper'>
                    <div className='sign-in-wrapper'>{logInWrapper()}</div>
                    <div>
                        <CustomLink href={CART}>
                            <div className='cart-wrapper'>
                                <Image src='/static/images/cart.svg' alt='Cart' />
                                <span>{cartCount} items</span>
                            </div>
                        </CustomLink>
                    </div>
                    {/* <div className='desktop-only'>
                        <div className='cart-wrapper' onClick={handleModal}>
                            <Image src='/static/images/cart.svg' alt='Cart' />
                            <span>{cartCount} items</span>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
        <div className='mobile-only mobile-secondary-menu'>
            <nav>
                <CustomLink href={HOME} label={_HOME} />
                <CustomLink href={PRODUCTS} label={_PRODUCTS} />
            </nav>
            <div>{logInWrapper()}</div>
        </div>
        {
            showCart ?
                <Modal handleClose={handleModal} show={showCart}><div className='cart-modal'><Cart /></div></Modal>
                : <></>
        }
    </header>
}

Header.propTypes = {
    cartCount: number
}

export default Header;