import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addToCart, removeFromCart } from '../../store/reducers/cart/action';
import styles from "./cart.module.css"

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
        <div id="cartModal" className={`${styles.cartModal} ${cartItemLength ? '' : styles.emptyCart}`} tabIndex="-1" role="dialog" aria-labelledby="modal-label">
            <div className={styles.content}>
                {cartItemLength ?
                    <div className={styles['cart-modal-content']}>
                        <div className={styles['cart-header']}>
                            <span className={styles["close"]} onClick={props.toggleCartHandler}>&times;</span>
                            <h2 id="modal-label">My Cart ({totalCount} item)</h2>
                        </div>
                        <div className={styles["cart-body"]}>
                            <div className={styles['cart-items-list']}>
                                {cartItems.map((item) => (
                                    <div key={item.id} className={styles['cart-item-container']}>
                                        <div className={styles["cart-item-content"]}>
                                            <img src={item.imageURL} alt={item.name} />
                                            <div className={styles['item-desc']}>
                                                <div className={styles.itemName}>{item.name}</div>
                                                <div className={styles.btnContainer}>
                                                    <button
                                                        onClick={() => dispatch(removeFromCart(item))}
                                                        className={styles["btnIncDec"]}
                                                    >
                                                        -
                                                    </button>
                                                    <div className={styles["item-counter"]}>{item.quantity}</div>
                                                    <button
                                                        onClick={() => dispatch(addToCart(item))}
                                                        className={styles['btnIncDec']}
                                                    >
                                                        +
                                                    </button>
                                                    <div className={styles.itemPrice}>X&nbsp; Rs.{item.price}</div>
                                                </div>
                                            </div>
                                            <div className={styles.totalPrice}>
                                                Rs.{item.price * item.quantity}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className={styles.lowestPriceImg}>
                                    <img src='/static/images/lowest-price.png' alt='lowest-price' />
                                    <p>You won't find it cheaper anywhere</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles["cart-footer"]}>
                            <p>Promo code can be applied on payment page</p>
                            <button onClick={() => {
                                props.toggleCartHandler();
                                navigate("/");}} className={styles['checkout-btn']}>
                                <div className='checkout-title'>Proceed to Checkout</div>
                                <div className='cart-total-price'>Rs.{totalPrice} &gt;</div>
                            </button>
                        </div>
                    </div> :
                    <div className={styles['cart-modal-content']}>
                        <div className={styles['cart-header']}>
                            <span className={styles["close"]} onClick={props.toggleCartHandler}>&times;</span>
                            <h2 id="modal-label">My Cart</h2>
                        </div>
                        <div className={`${styles["cart-body"]} ${styles['cart-empty']}`}>
                            <div>
                                <h2>No Items in your cart</h2>
                                <p>Your favourite items are just a click away</p>
                            </div>
                        </div>
                        <div className={styles["cart-footer"]}>
                            <button onClick={() => {
                                 props.toggleCartHandler();
                                 navigate("/");
                                }}
                                 className={styles['checkout-btn']}>
                                Start shopping
                            </button>
                        </div>
                    </div>}
            </div>
        </div>
    );
}
