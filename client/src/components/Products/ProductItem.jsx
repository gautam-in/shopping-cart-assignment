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
        <div className="product-card">
            <p>{name}</p>
            <img className="product-img" src={`${imageURL}`} alt="image of kiwi" />
            <div className="product-description">
                <p>
                    {description}
                </p>
            </div>
            <div className="price-section">
                <p>MRP Rs.{price}</p>
                <button className="btn-buynow" href="#" onClick={() => addItem(product)}>Buy Now</button>
            </div>
        </div>
    )
}

export default ProductItem;
