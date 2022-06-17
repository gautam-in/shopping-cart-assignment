import React from 'react'
import theme from '../../../theme';
import { StyledCartBox } from './Cartbox.styled';

const CartIcon = theme.icons.CART;

const CartBox = ({ itemCount }) => {
    return (
        <StyledCartBox className="cartbox">
            <CartIcon />
            {/* <img src={theme.icons.CART} alt="cart icon" /> */}
            <a href="#FIXME" className="cartIcon">{itemCount} items</a>
        </StyledCartBox>
    )
}

export default CartBox;