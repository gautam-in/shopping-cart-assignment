import React from 'react'

import classes from './CartTableView.module.css'
import Emptycart from '../EmptyCart/EmptyCart'
import CartSection from '../CartSection/CartSection'

const CartTableView = ({className="", cartItems, count}) => {

    
    

    return (


        <div className={`${className} ${classes.cart__table}`}>
            {

                count > 0 ? (
                    <div className={classes.cart__section}>
                        {
                            cartItems.map(cartItem => {
                                return (
                                    <CartSection key={cartItem.id} cartItem={cartItem}/>
                                )
                            })
                        }

                        <div className={classes.cart__table__discount}>
                            <img src={require('./lowest-price.png')} alt="lowest_price" className={classes.cart__table__discount__image}/>
                            <p className={classes.cart__tablet__discount__text}>
                                You won't find it cheaper anywhere
                            </p>
                        </div>


                        
                    </div>
                ) : (<Emptycart />)

            }
        </div>
    )
}

export default CartTableView