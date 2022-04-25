import React, {useState} from 'react';
import '../CSS/Cart.css';
import { incrementqty, decrementqty } from '../actions/updatetocart.action';
import { useDispatch } from 'react-redux';

const CartWithProducts = ({totalItems, cartInfo, onClick }) => {
    const dispatch = useDispatch()
    const incrementQuantityHandler = (id) => {
        dispatch(incrementqty(id))
    }

    const decrementQuantityHandler = (id) => {
        dispatch(decrementqty(id))
    }

    const totalPrice = cartInfo.cart.reduce((acc, curr) => (
        acc + (curr.quantity * curr.price )
    ),0)
    return (
        <div className='cartModalWithProducts'>
            <header className='cartHeader'>
                <p>My Cart ( {totalItems} {totalItems === 1 ? `item` : `items`}  )</p>
                <button onClick={onClick}>X</button>
            </header>
            <div className='productsWrapperCart'>
                {
                    cartInfo.cart.map(obj => (
                        <div className='cartItem' key={obj.id}> 
                            <div className='cartItemImage'>
                                <img src={obj.imageURL} />
                            </div>
                            <div className='itemDesc'>
                                <h3>{obj.name}</h3>
                                <p>
                                    <span onClick={() => decrementQuantityHandler(obj.id)}>-</span> <span className='qty'>{`${obj.quantity}`}</span><span onClick={() => incrementQuantityHandler(obj.id)}>+</span> x Rs.{obj.price}
                                </p>
                            </div>
                            <div className='priceWrapper'>
                                Rs.{obj.price * obj.quantity}
                            </div>
                        </div>
                    ))
                }
                
            </div>
            
                    <div className='lowestPrice'>
                        <img src="/static/images/lowest-price.png" alt="lowest price logo" />
                        <p>You won't find it cheaper anywhere</p>
                    </div>
                    <div className='moveToShopping'>
                        <p>Promo code can be applied on payment page</p>
                        <button onClick={onClick}>
                            <span>Proceed to checkout </span>
                            <span>Rs. {`${totalPrice}`} &gt;</span>
                        </button>
                    </div>
        </div>
    )
}


export default CartWithProducts;