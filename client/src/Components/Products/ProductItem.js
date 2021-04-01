import React from "react";
import { useDispatch } from "react-redux";
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
                <figcaption aria-label={"product description is" + product.description}>{product.description}</figcaption>
            </figure>
            <section>
                <span aria-label={"Product price for" + product.name + "is" + product.price}>MRP Rs.{product.price}</span>
                <CustomButton price={product.price} height="30px" onClick={() => dispatchCart(product)} >Buy Now</CustomButton>
            </section>
        </div>
    )
}

export default ProductItem;