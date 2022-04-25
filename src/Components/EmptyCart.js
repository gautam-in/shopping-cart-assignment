import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Cart.css'


const EmptyCart = ({onClick}) => {
    return (
        <div className='cartModal'>
            <header className='cartHeader'>
                <p>My Cart</p>
                <button onClick={onClick}>X</button>
            </header>
            <div className='emptyCart'>
                <span>No items in your cart</span>Your favourite items are just a
                click away
            </div>
            <div className='moveToShopping' onClick={onClick}>
                <Link to='/products'><button>Start Shopping</button></Link>
            </div>
        </div>
    )
}

export default EmptyCart;