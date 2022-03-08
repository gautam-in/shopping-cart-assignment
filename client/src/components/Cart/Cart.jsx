import react, { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './cart.css'
import CartItem from './CartItem';

function Cart() {

    const { itemsInCart, totalCount, totalAmount } = useSelector(({ cart }) => cart)

    const history = useHistory();

    function startShopping() {
        history.push('/category/all')
    }

    return (
        <div className='cart-container'>

            {itemsInCart.length > 0 ?
                <div class="cart-section">

                    {/* <!-- HEADER --> */}
                    <div class="cart-header">
                        <p class="cart-header--text">My Cart ({totalCount} item)</p>
                    </div>

                    {/* <!-- ITEMS --> */}
                    <div className='cart-items'>
                        {itemsInCart.map((item) => <CartItem key={item.id} product={item} />)}
                    </div>

                    {/* <!-- GUARANTEE CARD --> */}
                    <div class="guarantee-card">
                        <div class="guarantee-card--img">
                            <img src="../static/images/lowest-price.png" alt="" />
                        </div>
                        <div>
                            <p class="info-card--tagline">You won't find it cheaper anywhere</p>
                        </div>
                    </div>

                    {/* <!-- CHECKOUT CARD --> */}
                    <div class="checkout-section">
                        <p style={{ "textAlign": "center", "fontSize": "1.2rem" }}>Promo code can be apply on payment page</p>
                        <div class="btn-checkout">
                            <p>Proceed to Checkout</p>
                            <p>Rs. {totalAmount}</p>
                        </div>
                    </div>
                </div> :
                <Fragment>
                    <div className='no-cart-item'>
                        <h1>No items in your cart</h1>
                        <p style={{ "fontSize": "1.4rem" }}>Your favourite item just click away</p>
                    </div>

                    <span className='start-shopping' onClick={() => startShopping()}>Start Shopping</span>

                </Fragment>
            }



        </div >
    )
}

export default Cart;