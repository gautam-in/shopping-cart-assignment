import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  addItemToCart,
  removeItemFromCart,
  resetCart,
} from "../../reducers/cartReducer";
import Header from "../Header";
import "./Cart.css";

function Cart({ hide, cart_open }) {
  const cartItems = useSelector((state) => state.cartReducer.cartItems);
  const cartCount = useSelector((state) => state.cartReducer.cartCount);
  const totalPrice = useSelector((state) => state.cartReducer.totalPrice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderCartHeader = () => {
    return (
      <div className="cartHeader">
        My Cart<span> ({cartCount} items)</span>
      </div>
    );
  };

  const renderPriceBlock = (product) => {
    return (
      <span>
        <div className="productName">{product?.name}</div>
        <div className="quantityBlock">
          <button
            className="button cartButton"
            onClick={() => dispatch(removeItemFromCart(product))}
          >
            -
          </button>
          <span className="price">{product?.quantity}</span>
          <button
            className="button cartButton"
            onClick={() => dispatch(addItemToCart(product))}
          >
            +
          </button>
          <span className="price">x {product.price}</span>
        </div>
      </span>
    );
  };

  const renderCartSubHeader = () => {
    return (
      <div className="cartSubHeader">
        <img
          src="static/images/lowest-price.png"
          alt="Lowest Price Guaranteed"
        />
        <span>You won't find it cheaper anywhere</span>
      </div>
    );
  };

  const renderCartFooter = () => {
    return (
      <div className="cartFooter">
        <div>Promo code can be applied on the payment page</div>
        <button
          className="proceedButton"
          onClick={() => {
            hide();
            dispatch(resetCart());
            navigate("/products");
          }}
        >
          Proceed to Checkout <span>{`Rs ${totalPrice} >`}</span>
        </button>
      </div>
    );
  };

  return (
    <div
      className="cartModal"
      style={cartCount === 0 ? { paddingBottom: 0 } : {}}
    >
      <div className="showHeader">
        <Header cart_open={cart_open}/>
      </div>
      {renderCartHeader()}
      {cartCount > 0 ? (
        <div style={{ marginTop: 60 }}>
          {cartItems.map((product, index) => (
            <div className="prodBlock" key={index?.toString()}>
              <div className="cartProduct">
                <img
                  src={product?.imageURL}
                  alt={product?.name}
                  className="cartProductImage"
                />
                {renderPriceBlock(product)}
              </div>
              <span className="totalPrice">
                Rs. {product.price * product.quantity}
              </span>
            </div>
          ))}
          {renderCartSubHeader()}
          {renderCartFooter()}
        </div>
      ) : (
        <div className="emptyContainer">
          <div>No items in your cart</div>
          Your favourite items are just a click away
          <div className="cartFooter">
            <button
              className="proceedButton"
              style={{ justifyContent: "center" }}
              onClick={() => {
                hide();
                navigate("/products");
              }}
            >
              Start Shopping
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
