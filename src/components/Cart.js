import React, { useContext } from 'react';
import classes from '../css/cart.css';

import CartContext from '../Context/CartContext';

const Cart = ({showCart}) => {

    const { cart, setCart } = useContext(CartContext)

    const calculateCartItems = () => {
        let cartItems = 0;
        cart.forEach(item => {
            cartItems += item.quantity
        });
        return cartItems;
    }

    const caclulateTotalPrice = () => {
        let cartCopy = [...cart]
        let totalPrice = cartCopy.reduce( (acc, curVal) => {
            return acc + curVal.price*curVal.quantity;
          }, 0);
        return totalPrice;
    }

    const changeQuantity = (value, id) => {
        let cartCopy = [...cart];
        let index = cartCopy.findIndex(product => product.id === id);

        if(value === 1) {
            cartCopy[index].quantity++;
            setCart(cartCopy);
        }
        else {
            cartCopy[index].quantity--;
            if(cartCopy[index].quantity === 0) {
                let newCartCopy = cartCopy.filter(product => product.id !== id)
                setCart(newCartCopy);
            }
            else 
                setCart(cartCopy);
        }
    }

    return (
        <section className={classes['cart-container']}>
            <article className={classes['cart-header']}>
                <div className={classes['header-text']}>
                    <h4>My Cart &nbsp;</h4>
                    <p>{calculateCartItems() > 0 ? `(${calculateCartItems()} items)` : null}</p>
                </div>
                <button onClick={showCart}>X</button>
            </article>
            { cart.length > 0 ? <article className={classes['items-container']}>
                {cart.map((product) => {
                    return (
                        <div className={classes['product-details']} key={product.id}>
                            <img src={product.imageURL} alt={product.name} />
                            <div className={classes['product-info']}>
                                <h4>{product.name}</h4>
                                <div className={classes['cart-operations']}>
                                    <div className={classes.operations}>
                                        <button className={classes['op-buttom']} onClick={() => changeQuantity(-1, product.id)}>-</button>
                                        <span>{product.quantity}</span>
                                        <button className={classes['op-buttom']} onClick={() => changeQuantity(1, product.id)}>+</button>
                                        <span>X</span>
                                        <span>Rs.{product.price}</span>
                                    </div>
                                    <span className={classes['total-price']}>Rs.{product.price * product.quantity}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <div className={classes['lowest-price']}>
                    <img src="/static/images/lowest-price.png" alt="lowest price picture" />
                    <p>You can't find it cheaper anywhere</p>
                </div>
            </article> :
                <div className={classes['no-items']}>
                    <h4>No items in your cart</h4>
                    <p>Your favourite items are just a click away</p>
                </div>
            }
            {cart.length > 0 ? <article className={classes['proceed-container']}>
                <p>Promo code can be applied on payment page</p>
                    <div type="submit" className={classes.buttons} onClick={showCart}>
                        <span>Proceed to Checkout</span>
                        <span>Rs.{caclulateTotalPrice()} &nbsp; &gt;</span>
                    </div>
            </article> :
            <article className={classes['proceed-container']}>
                <button type="submit" className={`${classes.buttons} ${classes['empty-cart-button']}`}  onClick={showCart}>
                    <span>Start Shopping</span>
                </button>
        </article>}
        </section>
    );

}

export default Cart;