import React from 'react';

function ProductItem({ product: { name, imageURL, description, price } }) {
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
                <a class="btn-buynow" href="">Buy Now</a>
            </div>
        </div>
    )
}

export default ProductItem;
