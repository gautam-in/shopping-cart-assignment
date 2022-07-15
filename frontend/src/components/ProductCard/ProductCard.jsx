import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../redux/cart/cart.actions";
import Button from "../Button/Button";
import './ProductCard.scss'

const ProductCard = ({ product, ...props }) => {
    const dispatch = useDispatch();

    const addToCart = (item) => {
        dispatch(addCartItem(item))
    }

    return (
        <div className="card">
            <div className="card-head">
                <h2>{product.name} </h2>
            </div>
            <div className="card-content">
                <div className="imgBx">
                    <img src={"assets/" + product.imageUrl} alt={product.name} aria-label={product.name} />
                </div>
                <div className="details">
                    <div className="description">
                        <span>
                            {product.description}
                        </span>
                    </div>
                    <div className="action-details-md">
                        <span>MRP Rs. {product.price}</span>
                        <span ><Button size="medium" text="Buy Now" title="Buy Now" onClick={() => addToCart(product)} /></span>
                    </div>
                    <div className="action-details-lg">
                        <Button size="large" text={`Buy Now @ MRP Rs.${product.price}`} title={`Buy Now @ MRP Rs.${product.price}`} onClick={() => addToCart(product)} />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProductCard;