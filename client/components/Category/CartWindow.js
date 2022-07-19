import React from 'react';
import Image from "next/image";
import styles from '../../styles/products.module.scss';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/cart-slice";

const CartWindow = () => {
    const dispatch = useDispatch();
    const [ischatWindowOpened, setIschatWindowOpened] = useState(false);
    const cartQuantity = useSelector(state => state.cart.totalQuantity);
    const cartAmount = useSelector(state => state.cart.totalAmount);
    const cartProducts = useSelector(state => state.cart.products);
    console.log("cartProducts---->", cartProducts);
    const addToCartHandler = (product) => {
        dispatch(cartActions.addItemToCart({product : product, quantity : 1}));

    }
    const removeItemHandler = (id) => {
        dispatch(cartActions.removeItemFromCart(id));
    }

    const toggleWidget = () => {
        setIschatWindowOpened(isChatOpened => !isChatOpened );
    }
    return (
        <div className={styles.cartWindow}>
            <div className={styles.cartIcon} onClick={toggleWidget}><h3>My Cart</h3><span>({cartQuantity} item)</span></div>
            {ischatWindowOpened &&  <div style={{background : cartProducts.length === 0 ? '#fff' :''}} className={styles.cartWidget}>
                {cartProducts.length !== 0 && cartProducts.map(product => (<div key={product.product._id} className={styles.productCard}>
                        <Image src={'http:localhost:5000/' + product.product.imageURL} alt={product.product.name} height={60} width={60}/>
                        <div className={styles.descriptionCard}>
                            <h5>{product.product.name}</h5>
                            <div className={styles.cartActions}>
                                <span onClick={() => addToCartHandler(product.product)} className={styles.addIcon}>+</span>
                                <span>{product.quantity}</span>
                                <span onClick={() => removeItemHandler(product.product._id)} className={styles.addIcon}>-</span>
                                <span>X {product.product.price}</span>
                                <span>Rs. {product.quantity * product.product.price}</span>
                            </div>

                        </div>



                    </div>)
                )}
                {cartProducts.length !==0  && <div className={styles.productCard}>
                    <div className={styles.lowestPriceDiv}>
                    <Image src='/lowest-price.png' layout='fill' height={30} width={70} alt={'Lowest Price Badge'}/>
                    </div>
                    <p>You won't find it cheaper anywhere</p>


                </div>}
                {cartProducts.length !==0  && <button className={`${styles.shop} ${styles.checkout}`}><span>Checkout</span> <span>Rs.{cartAmount} ></span></button>}

                {!cartProducts.length && <div className={styles.noItemText}>
                    <h3>No items in your cart</h3>
                    <p>Your favourite items are just a click away</p>
                    <button className={styles.shop}>Start Shopping</button>
                </div>}

            </div>}


        </div>

    );
};

export default CartWindow;