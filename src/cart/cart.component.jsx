import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./cart.styles.scss";
import Button from "../component/button/button.component";
import { addToCart, removeFromCart } from "../redux/action/actions";
import CartRow from "../component/cart-row/cart-row.component";

const Cart = ({ cartItems, addItemToCart, removeItemFromCart }) => {
  const [totalItem, setTotalItem] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTotalItem(
      cartItems.reduce((previous, current) => previous + current.quantity, 0)
    );
    setTotalAmount(
      cartItems.reduce(
        (previous, current) => previous + current.quantity * current.price,
        0
      )
    );
  }, [cartItems]);
  return (
    <>
      <div className="cart-header-element">
        My Cart {totalItem ? `(${totalItem} item)` : ""}
      </div>
      <div
        className={`height_60 ${
          totalItem
            ? "cart-element cart "
            : "d-flex align-items-center justify-content-center"
        }`}
      >
        {totalItem ? (
          <div className="cart-container">
            {cartItems.map((item) => (
              <CartRow
                item={item}
                key={`key=${item.id}`}
                addItemToCart={addItemToCart}
                removeItemFromCart={removeItemFromCart}
              />
            ))}
            <div className="cart-banner">
              <img
                src={`/static/images/lowest-price.png`}
                alt="guaranteed banner"
              />
              <div className="ml-5">You won't find it cheaper anywhere</div>
            </div>
          </div>
        ) : (
          <div>
            No items in your cart
            <p>Your favourite items are just a click away</p>
          </div>
        )}
      </div>
      {totalItem ? (
        <div className="text-center w-100 my-3">
          Promo code can be applied on payment page
        </div>
      ) : (
        ""
      )}
      <Button
        onClick={() => {
          if (totalItem) {
            navigate("/checkout");
          } else navigate("/products");
          // setShow(false);
        }}
      >
        {totalItem ? (
          <div className="d-flex justify-content-between mx-3">
            <div>Proceed to Checkout </div>
            <div>
              Rs.{totalAmount} <span className="m-l-2">❯</span>
            </div>
          </div>
        ) : (
          "Start Shopping"
        )}
      </Button>
    </>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state?.cart,
});

const mapDispatchToProps = {
  addItemToCart: (data) => (dispatch) => dispatch(addToCart(data)),
  removeItemFromCart: (data) => (dispatch) => dispatch(removeFromCart(data)),
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
