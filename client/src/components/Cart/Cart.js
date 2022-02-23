import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addToCart, removeFromCart } from '../../store/actions/cartAction';
import "./Cart.css"

export default function Cart(props) {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
    );
    const totalCount = cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0);
    const cartItemLength = cartItems.length;

    return (
        <div id="cartModal" className={`cartModal ${cartItemLength ? '' : 'emptyCart'}`} tabIndex="-1" role="dialog" aria-labelledby="modal-label">
            <div className="content">
                {cartItemLength ?
                    <div className='cart-modal-content'>
                        <div className='cart-header'>
                            <span className='close' onClick={props.toggleCartHandler}>&times;</span>
                            <h2 id="modal-label">My Cart ({totalCount} item)</h2>
                        </div>
                        <div className='cart-body'>
                            <div className='cart-items-list'>
                                {cartItems.map((item) => (
                                    <div key={item.id} className='cart-item-container'>
                                        <div className="cart-item-content">
                                            <img src={item.imageURL} alt={item.name} />
                                            <div className='item-desc'>
                                                <div className="itemName">{item.name}</div>
                                                <div className="btnContainer">
                                                    <button
                                                        onClick={() => dispatch(removeFromCart(item))}
                                                        className="btnIncDec"
                                                    >
                                                        -
                                                    </button>
                                                    <div className="item-counter">{item.quantity}</div>
                                                    <button
                                                        onClick={() => dispatch(addToCart(item))}
                                                        className='btnIncDec'
                                                    >
                                                        +
                                                    </button>
                                                    <div className="itemPrice">X&nbsp; Rs.{item.price}</div>
                                                </div>
                                            </div>
                                            <div className="totalPrice">
                                                Rs.{item.price * item.quantity}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="lowestPriceImg">
                                    <img src='/static/images/lowest-price.png' alt='lowest-price' />
                                    <p>You won't find it cheaper anywhere</p>
                                </div>
                            </div>
                        </div>
                        <div className="cart-footer">
                            <p>Promo code can be applied on payment page</p>
                            <button onClick={() => {
                                props.toggleCartHandler();
                                navigate("/");}} className='checkout-btn'>
                                <div className='checkout-title'>Proceed to Checkout</div>
                                <div className='cart-total-price'>Rs.{totalPrice} &gt;</div>
                            </button>
                        </div>
                    </div> :
                    <div className='cart-modal-content'>
                        <div className='cart-header'>
                            <span className="close" onClick={props.toggleCartHandler}>&times;</span>
                            <h2 id="modal-label">My Cart</h2>
                        </div>
                        <div className="cart-empty">
                            <div>
                                <h2>No Items in your cart</h2>
                                <p>Your favourite items are just a click away</p>
                            </div>
                        </div>
                        <div className="cart-footer">
                            <button onClick={() => {
                                 props.toggleCartHandler();
                                 navigate("/");
                                }}
                                 className='checkout-btn'>
                                Start shopping
                            </button>
                        </div>
                    </div>}
            </div>
        </div>
    );
}