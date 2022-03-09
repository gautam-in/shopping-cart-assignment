import React from 'react'
import {useDispatch} from 'react-redux'

import { addItem } from '../../redux/cart/cart.actions'

import classes from './ProductItems.module.css'

const ProductItems = ({products}) => {

    const dispatch = useDispatch()

    return (
        <div className={classes.product__container}>
            {
                products.map((product)=> (
                    <div key={product.id} className={classes.card__container}>
                        <h4>{product.name}</h4>
                        <div className={classes.image__description__container}>
                            <img src={product.imageURL} alt= {product.name} className={classes.image}/>
                            <div className={classes.card__description}>
                                <p className={classes.description}>{product.description}</p>
                                <button className={classes.submit__button}
                                        onClick={() => {
                                        dispatch(addItem(product));
                                        }}
                                >
                                Buy Now @ MRP Rs.{product.price}
                                </button>  
                            </div> 
                        </div>
                        

                    </div>
                ))
            }
            
        </div>
    )

}

export default ProductItems;