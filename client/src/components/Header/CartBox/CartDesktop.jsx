import React from 'react'
import CartAd from '../../../assets/static/images/lowest-price.png'

const CartDesktop = ({ UserCart }) => {

    const cartItems = UserCart;
    const cartItemsLength = `(${cartItems.length} item)`;

    return (
        <>
            <div className="cart-header">
                <p>My Cart {cartItemsLength}</p>
                <a href="#FIXME" className="close" title='close'>close</a>
            </div>
            {(cartItems && cartItemsLength > 0) ? (
                <div className="cart-details">
                    <ul className="cart-items">
                        {
                            cartItems.map((item) => (
                                <li className="cart-item">
                                    <img src={item.src} alt={item.title} />
                                    <div className="cart-details">
                                        <h4>{item.name}</h4>
                                        <div className="cart-quantity">
                                            <ul>
                                                <li><button className='decrease-quantity'>decrease-quantity</button></li>
                                                <li>{item.quantity}</li>
                                                <li><button className="increase-quantity">increase-quantity</button></li>
                                            </ul>
                                            <span>X {item.price}</span>
                                        </div>
                                    </div>
                                    <p className="cart-price">{item.price}</p>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="cart-ad">
                        <img src={CartAd} alt="you won't find cheaper anywhere" />
                        <p>you won't find cheaper anywhere</p>
                    </div>
                </div>
            ) : (
                <div className='no-items'>
                    <h5>No Items in your cart</h5>
                    <p>Your favourite items are just click away</p>
                </div>
            )}

        </>
    )
}

export default CartDesktop;