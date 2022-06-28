import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CART_ACTION_TYPES } from "../../../shared/redux/actionTypes/cart";
import { requestDispatch } from "../../../shared/Utils/utility";

import './index.css';

const ProductItem = memo((props) => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cartData.cart);

    const { id, name, imageURL, description, price } = props;
   
    const addToCart = (data) => {
        dispatch({
          type: requestDispatch(CART_ACTION_TYPES.ADD_TO_CART),
          payload: {
            cart,
            newItem: data,
          },
        });
      };

    return <article className="product-item" key={id}>
        <div className="product-item-title">{name}</div>
        <div className="product-info">
            <div className="product-img">
                <img src={require(`../../../shared/${imageURL}`)} alt="imagename" />
            </div>
            <div className="product-desc">{description}</div>
        </div>
        <div className="product-purchase">
            <div className="product-mrp">MRP Rs.{price}</div>
            <button
                className="product-btn-buynow"
                aria-label="Buy Now"
                onClick={() => addToCart(props)}
            >
                Buy Now
            </button>
            <button
                className="product-btn-small-screen"
                aria-label="Buy Now"
                onClick={() => addToCart(props)}
            >
                Buy Now @ Rs.{price}
            </button>
        </div>
    </article>
});

export default ProductItem;