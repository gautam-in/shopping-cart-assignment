import React from 'react'

export default function CartItem(props) {
    return (
        <div className="product">
            <div className="product-image">
                <img src={props.imageURL} alt={props.name} />
            </div>
            <div className="product-details">
                <div className="product-title">{props.name}</div>
                <p className="product-description">{props.description}</p>
            </div>
            <div className="product-price">{props.price}</div>
            <div className="product-quantity">{props.quantity}</div>

            <div className="product-removal">
                <button className="remove-product">
                    Remove
                </button>
            </div>
            <div className="product-line-price">  {props.totalValue}</div>
        </div>
    )
}
