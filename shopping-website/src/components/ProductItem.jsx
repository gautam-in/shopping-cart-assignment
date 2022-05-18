import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../store/cart/cart.action';
import { selectCartItems } from '../store/cart/cart.selector';
import { addToCartServer } from '../utils/server/server.util';
import Button from './Button';

import './ProductItem.scss';


const ProductItem = ({product}) => {

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const addToCart = async (product) => {
        const result = await addToCartServer(product);
        if(result.response == "Success"){
            dispatch(addItemToCart(cartItems,product));
        }
    }

    return (
        <>
        <div className='productCard'>
            <div className='productHeading'>{product.name}</div>
            <div className='productBody'>
            <div className='productImageContainer'>
                <img src={product.imageURL} className= 'productImage' />
                </div>
                <div className='productDescBody'>
                    <div className='productDescription'>
                        <p>{product.description.length > 100 ? product.description.substring(0,100) + '...' : product.description}</p>
                    </div>
                    <div className='productButton'>
                        <Button onClick = {() => addToCart(product)}>
                            BUY NOW @ MRP Rs.{product.price}
                        </Button>
                    </div>
            </div>
            </div>
        </div>
        <hr />
        </>
    )

}

export default ProductItem;