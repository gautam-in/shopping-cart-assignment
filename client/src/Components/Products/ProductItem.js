import React from "react";
import { useDispatch } from "react-redux";
import { productConstants } from "../../Constants";
import { cartActions } from "../../_actions";
import CustomButton from "../CustomButton/CustomButton";
import "./ProductItem.scss";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const dispatchCart = (product) => {
        dispatch(cartActions.addToCart(product));
    }
    return (
        <div className="product-item" aria-label={"Product card for" + product.name}>
            <h4 aria-label={"product name is" + product.name}>{product.name}</h4>
            <figure>
                <img className="product-img"
                    src={product.imageURL}
                    alt={product.name + "image"}
                />
                <span className="product-wrapper">
                    <figcaption aria-label={"product description is" + product.description}>{product.description}</figcaption>
                    <CustomButton price={product.price} height="30px" onClick={() => dispatchCart(product)} >{productConstants.BUY_NOW}</CustomButton>
                </span>
            </figure>
            <section>
                <span aria-label={"Product price for" + product.name + "is" + product.price}>{productConstants.MRP_RS + product.price}</span>
                <CustomButton price={product.price} height="30px" onClick={() => dispatchCart(product)} >{productConstants.BUY_NOW}</CustomButton>
            </section>
        </div>
    )
}

export default ProductItem;