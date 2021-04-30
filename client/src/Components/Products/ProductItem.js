import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { productConstants } from "../../Constants";
import { cartActions } from "../../_actions";
import CustomButton from "../CustomButton/CustomButton";
import "./ProductItem.scss";

const ProductItem = ({ product, index }) => {
    const showModal = useSelector(state => state.cart.showModal);
    const dispatch = useDispatch();
    const dispatchCart = (product) => {
        dispatch(cartActions.addToCart(product));
    }
    return (
        <div className="product-item" aria-label={"Product card for" + product.name} tabIndex={showModal ? -1 : 13 + index}>
            <h4 aria-label={"product name is" + product.name} tabIndex={showModal ? -1 : 13 + index} >{product.name}</h4>
            <figure>
                <img className="product-img"
                    src={product.imageURL}
                    alt={product.name + "image"}
                    aria-label={"image of" + product.name}
                    tabIndex={showModal ? -1 : 13 + index}
                />
                <span className="product-wrapper">
                    <figcaption aria-label={"product description is" + product.description} tabIndex={showModal ? -1 : 13 + index}>{product.description}</figcaption>
                    <CustomButton aria-label={productConstants.BUY_NOW + "button, the product price is" + product.price} tabIndex={showModal ? -1 : 13 + index} price={product.price} height="30px" onClick={() => dispatchCart(product)} >{productConstants.BUY_NOW}</CustomButton>
                </span>
            </figure>
            <section>
                <span aria-label={"Product price for" + product.name + "is" + product.price} tabIndex={showModal ? -1 : 13 + index}>{productConstants.MRP_RS + product.price}</span>
                <CustomButton aria-label={productConstants.BUY_NOW + "button"} tabIndex={showModal ? -1 : 13 + index} price={product.price} height="30px" onClick={() => dispatchCart(product)} >{productConstants.BUY_NOW}</CustomButton>
            </section>
        </div>
    )
}

export default ProductItem;