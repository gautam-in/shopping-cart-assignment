import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import "../Scss/cart.scss";
import { decreament, increament } from "../store/action.js";

function Cart({ cartVisible }) {

    const dispatch = useDispatch();

    const { item, cartItems } = useSelector((state) => state || {});


    const handleDecreament = useCallback((item) => () => {
        dispatch(decreament(item));
        console.log(item);
    }, [dispatch]);
    
    const handleIncreament = useCallback((item)=>()=>{
        dispatch(increament(item));
        console.log(item);
    },[dispatch]);

    const handlePrice = cartItems.reduce((sum,cur)=>{
            return sum + cur.price*cur.qty;
        },0);

    const cartDisplay = useCallback(() => { cartVisible(false); }, [cartVisible])
    return (
        <div>
            <div className='cart-page'>
                <div className='header-container'>
                    <h1 className='heading'>
                        My Cart {item > 0 ? `(${item} Item)` : null}
                    </h1>
                    <button className="btn-close" onClick={cartDisplay} />
                </div>
                <ul className="cart-list">
                    {cartItems.length > 0 ?
                        cartItems.map((cartItem) => (
                            <li className='cart-item' key={cartItem.id}>
                                {/* {cartItem.id} */}
                                <img src={cartItem.imageURL} className="cart-img" alt={cartItem.name}></img>
                                <div className='cart-details'>
                                    <h2 className='cart-name'>{cartItem.name}</h2>
                                    <button className='bt-decreament'
                                        onClick={handleDecreament(cartItem)}>-</button>
                                    <span className='quantity'>{cartItem.qty}</span>
                                    <button className="bt-increment"
                                        onClick={handleIncreament(cartItem)}>+</button>
                                    <span className="into-qty">X</span>
                                    <span className="cart-price">₹ {cartItem.price}</span>
                                    <span className="cart-total">
                                        ₹ {cartItem.qty * cartItem.price}
                                    </span>
                                </div>
                            </li>
                        ))
                        : (
                            <div className="text-style-f empty-cart">
                                <p style={{fontWeight:'bold'}}>No items in your cart</p>
                                <p>Your favourite items are just a click away</p></div>

                        )}
                </ul>
                <div className='checkout'>
                    <p className='text-style-f'>Promo code can be applied on the checkout page.</p>
                    {item > 0 ? (
                         <button className='checkout-button' onClick={cartDisplay}>
                            <span className="checkout-text">Proceed to checkout</span>
                            <span className='checkout-price'>
                                {`  Rs. `}{handlePrice}
                            </span>
                         </button>  
                    ):(
                    <Link to="/products"><button className="btn-shopping" onClick={cartDisplay}>Start Shopping</button></Link>)
                        }
                </div>
                
            </div>

        </div>);
}

export default Cart;