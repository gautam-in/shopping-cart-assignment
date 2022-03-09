import React from 'react'

import classes from './EmptyCart.module.css'

const Emptycart = () => {
    return (
        <section className={classes.emptycart}>
            <div className={classes.emptycart__container}>
                <h2 className={classes.emptycart__container__title}>No items in your cart</h2>
                <p className={classes.emptycart__container__text}>Your favourite items are just a click away</p>
            </div>
            
        </section>
    )
}


export default Emptycart