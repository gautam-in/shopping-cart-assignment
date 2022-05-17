import { useSelector, useDispatch } from 'react-redux';
import {
    reduceQuantity
} from '../../store/cartReducer';
import { useNavigate } from "react-router-dom";
import { XLg, PlusCircleFill, DashCircleFill } from 'react-bootstrap-icons';
import { sendAddRequest } from "../../store/cartActions"
import "./cart.scss"

// Cart component.
const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer.cartItems);
    const totalPrice = useSelector((state) => state.cartReducer.totalPrice);
    const dispatch = useDispatch();
    let navigate = useNavigate();

    // Method to increase product quanity count from cart. 
    const increaseProductQuantity = (product) => {
        dispatch(sendAddRequest(product));
    };

    // Method to decrease product quanity count from cart. 
    const decreaseProductQuantity = (product) => {
        dispatch(reduceQuantity({ id: product.id }));
    };

    // render cart UI.
    return (<>
        <div className="cart">
            {cartItems.length <= 0 ? <>
                <div className=" heading">
                    My Cart ({cartItems.length} items)
                    <XLg className='icon' onClick={() => { navigate(`/products`) }} />
                </div>
                <div className="empty-cart">
                    <div>No items in your cart.</div>
                    <p className="text">Your favorite items are just a click away</p>
                </div>
                <button className="shopping-button" onClick={() => { navigate(`/products`); }}> Start Shopping</button>
            </> : <>
                <div className=" heading">
                    My Cart ({cartItems.length} items)
                    <XLg className='icon' onClick={() => { navigate(`/products`) }} />
                </div>
                {cartItems.map((product) => {
                    return <>
                        <div className='cart-item-container'>
                            <img className="product-img" src={product.imageURL} />
                            <div className='product-details'>
                                <p className="product-name">{product.name}</p>
                                <div className='product-quantity-div'>
                                    <div>
                                        <PlusCircleFill className="increment-icon" onClick={() => { increaseProductQuantity(product) }} />
                                        {product.quantity}
                                        <DashCircleFill className="increment-icon" onClick={() => { decreaseProductQuantity(product) }} />
                                        X {product.price}
                                    </div>
                                    <div>
                                        RS {product.totalItemPrice}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </>
                })}
                <div className="cart-item-row">
                    <img className="lowest-price-img"
                        src={`/static/images/lowest-price.png`}
                        alt="guaranteed banner"
                    />
                    <div className="text">
                        You won't find it cheaper anywhere
                    </div>
                </div>
                <div className='cart-footer'>
                    <p className="checkout-text">Promo code can be applied on payment page</p>
                    <button className="checkout-button"><div>Proceed to Checkout</div> <div>Rs{totalPrice} </div></button>
                </div>
            </>}
        </div>
    </>)
}
export default Cart