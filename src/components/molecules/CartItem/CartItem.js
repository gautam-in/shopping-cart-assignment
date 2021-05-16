import React from "react";
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/actions/actionCreators';
import './CartItem.scss'
const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const handleIncrementItemQty = (product) => {
        console.log(product);
        dispatch(addToCart(product));
    };

    const handleDecrementItemQty = (product) => {
        dispatch(removeFromCart(product));
    };

    return (
        <div className="cart-item" aria-label={"cart list detail of product is" + item.name}>
            <div className="cart-item-image">
                <img
                    className="img-fluid"
                    src={item.imageURL}
                    alt={item.name}
                    aria-label={"Image of product" + item.name}
                />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-title" aria-label={"Product name is" + item.name}>{item.name}</div>
                <div className="cart-item-calculation">
                    <button
                        variant="primary"
                        className="button btn-rounded"
                        onClick={
                            () => handleDecrementItemQty(item)
                        }
                        id={item.id}
                        aria-label={"Minus button to decrease the product count"}
                    >
                        {item.count <= 1 ? "x" : "-"}
                    </button>

                    <span className="cart-qty" aria-label={"count of" + item.name + "is" + item.count}>{item.count}</span>
                    <button
                        variant="primary"
                        className="button btn-rounded"
                        onClick={() => handleIncrementItemQty(item)}
                        id={item.id}
                        aria-label={"Plus button to increase the product count"}
                    >
                        +
          </button>
                    <span>X</span>
                    <span aria-label={"price for " + item.name + "is" + item.price}>
                        ₹
            {item.price}
                    </span>
                    <div className="total" aria-label={"total price for" + item.name + "is" + item.count * item.price}>
                        ₹
            {item.count * item.price}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
