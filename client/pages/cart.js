import React from 'react';
import styles from '../styles/cart.module.scss'
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../store/cart-slice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector(state => state.cart.totalQuantity);
    const cartAmount = useSelector(state => state.cart.totalAmount);
    const cartProducts = useSelector(state => state.cart.products);
    console.log("cartProducts---->", cartProducts);
    const addToCartHandler = (product) => {
        dispatch(cartActions.addItemToCart({product: product, quantity: 1}));

    }
    const removeItemHandler = (id) => {
        dispatch(cartActions.removeItemFromCart(id));
    }

    return (
        <div style={{background: cartProducts.length === 0 ? '#fff' : ''}} className={styles.cartPage}>
            {!cartProducts.length && <div className={styles.noItemText}>
                <h3>No items in your cart</h3>
                <p>Your favourite items are just a click away</p>
            </div>}
            {cartProducts.length !== 0 && <div className={styles.cartCard}><h2>My Cart</h2> ({cartQuantity} item)</div>}
            {cartProducts.length !== 0 && cartProducts.map(product => (<div className={styles.cartCard}>
                <Image src={'http:localhost:5000/' + product.product.imageURL} alt={'place'} height={90} width={90}/>
                <div className={styles.descriptionCard}>
                    <strong><h3>{product.product.name}</h3></strong>
                    <div className={styles.cartActions}>
                        <span className={styles.quantitySelector}>
                        <span onClick={() => addToCartHandler(product.product)} className={styles.addIcon}>+</span>
                        <span>{product.quantity}</span>
                        <span onClick={() => removeItemHandler(product.product._id)} className={styles.addIcon}>-</span>
                        <span>  x  Rs. {product.product.price}</span>
                        </span>
                        <span>
                            <strong>Rs.{product.quantity * product.product.price}</strong>
                        </span>
                    </div>
                </div>
            </div>))}
            {cartProducts.length !== 0 && <div className={styles.cartCard}>
                <div className={styles.lowestPriceDiv}>
                    <Image src='/lowest-price.png' layout='fill' height={30} width={70} alt={'Lowest Price Badge'}/>
                </div>
                <p>You won't find it cheaper anywhere</p>


            </div>}
            <div className={styles.cardBottom}>
                {cartProducts.length !== 0 && (<div>
                    <small>Promo code can be applied on payment page</small>
                    <button className={`${styles.shop} ${styles.checkout}`}><span>Proceed to Checkout</span>
                        <span>Rs. {cartAmount} ></span></button>
                </div>)}
                {cartProducts.length === 0 && (
                    <button className={`${styles.shop}`}><span>Start Shopping</span></button>)}
            </div>


        </div>
    );
};

export default Cart;