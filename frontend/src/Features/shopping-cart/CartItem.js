import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "./cartSlice";
function CartItem({ product }) {
  const dispatch = useDispatch();

  return (
    <article className="cart-item mb-3 flex-column flex-sm-row d-flex justify-content-sm-between align-items-sm-center">
      <div className="prod-name d-sm-none mb-3 item text-center">
        <h1 className="text-start">{product.name}</h1>
      </div>
      <div className="d-flex flex-grow-1 justify-content-between align-items-center">
        <div className="prod-image item">
          <img src={product.imageURL} alt={product.name} />
        </div>
        <div className="prod-name d-none  d-sm-inline-block item text-center">
          <h1 className="text-start">{product.name}</h1>
        </div>
        <div className="quantity-btn text-center item">
          <div className="quantity-btn-container d-flex justify-content-center align-items-center">
            <button
              aria-label="Decrement quantity"
              onClick={() => dispatch(decrementQuantity(product.id))}
            >
              <FaMinus />
            </button>
            <div>{product.quantity}</div>
            <button
              aria-label="Increment quantity"
              onClick={() => dispatch(incrementQuantity(product.id))}
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="price item text-center">
          Rs {product.price * product.quantity}
        </div>
      </div>
    </article>
  );
}

export default CartItem;
