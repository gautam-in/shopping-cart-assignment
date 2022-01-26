import React from 'react';
import { number } from 'prop-types';

import { connect } from 'react-redux';
import Image from '../../atoms/image';
import CustomLink from '../../atoms/link';

import { HOME, PRODUCTS, SIGNIN, REGISTER, CART } from '../../../utils/RouteNames';
import { _TITLE, _HOME, _LOGIN, _PRODUCTS, _SIGNIN, _REGISTER } from '../../../utils/constants';

import './header.scss';

const Header = ({ cartCount }) => {

    return <header>
        <div className='container'>
            <div className='header-wrapper'>
                <div className='logo-menu-warapper'>
                    <a href={HOME}><Image src='/logo.png' alt={_TITLE} /></a>
                    <nav>
                        <CustomLink href={HOME} label={_HOME} />
                        <CustomLink href={PRODUCTS} label={_PRODUCTS} />
                    </nav>
                </div>
                <div className='right-side-wrapper'>
                    <div className='sign-in-wrapper'>
                        <CustomLink href={SIGNIN} label={_SIGNIN} />
                        <CustomLink href={REGISTER} label={_REGISTER} />
                    </div>
                    <CustomLink href={CART}>
                        <div className='cart-wrapper'>
                            <Image src='/static/images/cart.svg' alt='Cart' />
                            <span>{cartCount} items</span>
                        </div>
                    </CustomLink>
                </div>
            </div>
        </div>
        <div className='mobile-only mobile-secondary-menu'>
            <nav>
                <CustomLink href={HOME} label={_HOME} />
                <CustomLink href={PRODUCTS} label={_PRODUCTS} />
            </nav>
            <div>
                <CustomLink href={SIGNIN} label={_SIGNIN} />
                <CustomLink href={REGISTER} label={_REGISTER} />
            </div>
        </div>
    </header>
}

Header.propTypes = {
    cartCount: number
}

const mapStateToProps = (state) => ({
    cartCount: state.cartCount
})

export default connect(mapStateToProps, null)(Header);