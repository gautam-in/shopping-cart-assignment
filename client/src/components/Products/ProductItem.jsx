import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart.action';

function ProductItem({ product }) {

    const { id, name, imageURL, description, price } = product

    const dispatch = useDispatch();

    function addItem(product) {
        dispatch(addItemToCart(product))
    }

    return (
        <div class="product-card">
            <p>{name}</p>
            <img class="product-img" src={`${imageURL}`} alt="image of kiwi" />
            <div class="product-description">
                <p>
                    {description}
                </p>
            </div>
            <div class="price-section">
                <p>MRP Rs.{price}</p>
                <button class="btn-buynow" href="#" onClick={() => addItem(product)}>Buy Now</button>
            </div>
        </div>
    )
}

export default ProductItem;
