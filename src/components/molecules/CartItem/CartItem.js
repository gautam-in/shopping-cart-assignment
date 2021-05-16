import React from "react";
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/actions/actionCreators';
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
        <div className="cart-item" key={item.id}>
            <div className="cart-item-image">
                <img
                    className="img-fluid"
                    src={item.imageURL}
                    alt={item.name}
                />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-title">{item.name}</div>
                <div className="cart-item-calculation">
                    <button
                        variant="primary"
                        className="button btn-rounded cart-decrement"
                        onClick={
                            () => handleDecrementItemQty(item)
                        }
                        id={item.id}
                    >
                        {item.count <= 1 ? "x" : "-"}
                    </button>

                    <span className="cart-qty">{item.count}</span>
                    <button
                        variant="primary"
                        className="button btn-rounded cart-increment"
                        onClick={() => handleIncrementItemQty(item)}
                        id={item.id}
                    >
                        +
          </button>
                    <span>X</span>
                    <span>
                        ₹
            {item.price}
                    </span>
                    <div className="total ml-auto">
                        ₹
            {item.count * item.price}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
