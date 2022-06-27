import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button, IconButton } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { incrementProductItemQuantity, decrementProductItemQuantity } from '../../redux/productCartsSlice'
import './index.css';

export const MiniCart = (props) => {
    const cartProducts = useSelector(state => state.productCarts)
    const dispatch = useDispatch()

    const handleCartCloseClick = () => {
        props.handleCartClose();
    }
    const handleIncrementCartClick = (product) => () => {
        dispatch(incrementProductItemQuantity(product))
    }
    const handleDecrementCartClick = (product) => () => {
        dispatch(decrementProductItemQuantity(product))
    }
    return (
        <div className="mini-cart-container">
            <div className="cart-title-close-icon-container">
                <div>{`My Cart ${cartProducts.length !== 0 ? cartProducts.length === 1 ? '(' + cartProducts.length + ' item)' : '(' + cartProducts.length + ' items)' : ''}`}</div><div><IconButton tabIndex={0} style={{ color: '#fff' }} onClick={handleCartCloseClick}><CloseIcon /></IconButton></div>
            </div>
            {cartProducts.length ? cartProducts.map(cartProduct => {
                return (
                    <div className="product-carts-items" key={cartProduct.id}>
                        <div className="carted-image-box"><img className="carted-image" src={cartProduct.imageURL} alt={cartProduct.name}/></div>
                        <div className="carted-item-content-box">
                            <div className="carted-product-name">{cartProduct.name}</div>
                            <div className="add-remove-item-content-info"><IconButton tabIndex={0} onClick={handleDecrementCartClick(cartProduct)}><RemoveCircleIcon className="remove-item-icon" /></IconButton><span className="carted-item-quantity spacing">{cartProduct.quantity}</span><IconButton tabIndex={0} onClick={handleIncrementCartClick(cartProduct)}><AddCircleIcon className="add-item-icon" /></IconButton><CloseOutlinedIcon className="multiply-icon spacing" /><span className="carted-product-price spacing">{cartProduct.price}</span></div>
                        </div>
                        <div className="carted-items-total-cost">{cartProduct.price * cartProduct.quantity}</div>
                    </div>
                )
            }) : (<div className="product-no-carts-items">
                <div className="product-no-cart-content">No items in your cart</div>
                <div>Your favourite items are just a click away</div>
            </div>)}
            {cartProducts.length !== 0 && (<div className="price-guarnteed-info-banner">
                <div><img className="price-guarnteed-info-image" src="/static/images/lowest-price.png" alt="price guarnteed"/></div>
                <div className="price-guarnteed-info-content">You won't find it cheaper anywhere</div>
            </div>)}
            <div className="mini-cart-footer">
                {cartProducts.length !== 0 && <div className="footer-promo-code-content">Promo code can be applied on payment page</div>}
                <div><Button tabIndex={0} onClick={handleCartCloseClick} className="mini-cart-footer-button" variant="contained">{cartProducts.length ? <React.Fragment><span>Proceed to Checkout</span><span>Rs.{'187'} {'>'}</span></React.Fragment> : <span>Start Shopping</span>} </Button></div>
            </div>
        </div>
    )
}