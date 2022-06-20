import React from 'react'
import { getCartIcon } from '../../../services/ApiService';
import theme from '../../../theme';
import { StyledCartBox } from './Cartbox.styled';

const CartBox = ({ itemCount }) => {

    const cartIcon = getCartIcon();

    return (
        <StyledCartBox className="cartbox">
            <img src={cartIcon} alt="cart icon" />
            <a href="#FIXME" className="cartIcon">{itemCount} items</a>
        </StyledCartBox>
    )
}

export default CartBox;