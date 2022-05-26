import { useSelector } from 'react-redux';
import './cartDropdown.css'
import CartItems from '../cartItems'
import {useNavigate} from 'react-router-dom'

function CartDropdown(props) {
    const totalCartPrice = useSelector(state => state.productsReducer.totalCartPrice)
    let cartItems = useSelector(state => state.productsReducer.cartItems)
    let{totalCartItems} = props
    let isItemsAvail = cartItems.length > 0 ? true : false
    const navigate = useNavigate()
    let clickHandler = () =>{
       navigate(isItemsAvail ? '/signIn': '/products')
       props.closeModal()
    }

    return (
        <>
            <div className={isItemsAvail ? 'cart_container' : 'cart_container empty_cart_section'}>
                <div className='cart_inner_container'>
                    <div className="cart_header">
                        <p className="cart_title">My Cart {isItemsAvail && <span>{`(${totalCartItems} item)`}</span>}</p>
                        <button className='cart_close' onClick={() => props.closeModal()}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                    <div className='cart_price_container'>
                        {isItemsAvail ?
                            <>
                                <CartItems {...{ cartItems }} />
                                <div className='lowest_price_container'>
                                    <img src='/static/images/lowest-price.png' className='lowest_img' />
                                    <p className='lowest_price_desc'> You won't find it cheaper anywhere</p>
                                </div>
                            </> : 
                            <div className='empty_cart_container'>
                                <h3>No items in your cart</h3>
                                <p>Your favourite items are just a click away</p>
                            </div>
                        }
                    </div>
                    <div className='promo_checkout_container'>
                        {isItemsAvail && <p>Promo code can be applied on payment page</p>}
                        <button className="checkout_btn btn_primary" onClick={() => clickHandler()}>
                            <span className="">{isItemsAvail ? 'Proceed to Checkout': 'Start shopping'}</span>
                            {isItemsAvail &&<span className="checkout_price" > Rs.{totalCartPrice} <i className='fa fa-arrow'></i></span>}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartDropdown;
