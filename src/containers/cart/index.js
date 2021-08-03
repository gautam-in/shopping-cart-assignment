import React, { useContext } from 'react';
import MyContext from '../../context/myContext';
import CartItem from './cartItem';

export default function Cart() {
    const { addProductToCart, context: { cart } } = useContext(MyContext);


    return (
        <div className="ShoppingCart_Container">
            <h1>Shopping Cart</h1>
            {
                cart.length > 0 ?
                    <div className="shopping-cart">

                        <div className="column-labels">
                            <label className="product-image">Image</label>
                            <label className="product-details">Product</label>
                            <label className="product-price">Price</label>
                            <label className="product-quantity">Quantity</label>
                            <label className="product-removal">Remove</label>
                            <label className="product-line-price">Total</label>
                        </div>

                        {cart.map(item => (
                            <CartItem {...item} />
                        ))}

                        <div className="totals">
                            <div className="totals-item">
                                <label>Subtotal</label>
                                <div className="totals-value" id="cart-subtotal">71.97</div>
                            </div>
                            <div className="totals-item">
                                <label>Tax (5%)</label>
                                <div className="totals-value" id="cart-tax">3.60</div>
                            </div>
                            <div className="totals-item">
                                <label>Shipping</label>
                                <div className="totals-value" id="cart-shipping">15.00</div>
                            </div>
                            <div className="totals-item totals-item-total">
                                <label>Grand Total</label>
                                <div className="totals-value" id="cart-total">90.57</div>
                            </div>
                        </div>

                        <button className="checkout">Checkout</button>

                    </div> :
                    <div>No Product in cart</div>
            }
        </div>
    )
}
