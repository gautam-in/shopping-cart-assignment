import React from "react";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { changecartstatus, addtocart, removefromcart } from "../../redux/Cart/cartactions";
import Cartitem from "../Cartitem/Cartitem";

export default function Cart() {
  const dispatch = useDispatch();
  const changeCartStatus = () => dispatch(changecartstatus());
  const addtoCart = (items) => dispatch(addtocart(items));
  const removefromCart = (items) => dispatch(removefromcart(items));
  const cartproducts = useSelector((state) => state.cartproducts);
  const items = cartproducts.cartproducts.reduce(
    (total, item) => total + item.count,
    0
  );
  const totalPrice = cartproducts.cartproducts.reduce(
    (total, item) => total + item.price * item.count,
    0
  );
  return (
    <div>
      <Modal open={cartproducts.cartopen} onClose={() => changeCartStatus()}>
        <div className="modalcontainer">
          <div>
            <h3>My Cart ({items} item)</h3>
          </div>
          {cartproducts.cartproducts.filter((item) => item.count).length ? (
            <>
              <div className="allcartproducts">
                {cartproducts.cartproducts
                  .filter((item) => item.count)
                  .map((item) => (
                    <Cartitem
                      item={item}
                      key={item.id}
                      addtocart={() => addtoCart(item)}
                      removefromcart={() => removefromCart(item)}
                    />
                  ))}
                <div className="lowestpricebanner">
                  <img src="/static/images/lowest-price.png" />
                  <small>You won't find cheaper anywhere</small>
                </div>
              </div>
              <div>
                <div style={{ textAlign: "center", padding: "0.5rem" }}>
                  <small>Promo code can be applied on payment page</small>
                </div>
                <div className="checkout">
                  <small>Proceed to Checkout</small>
                  <small>Rs.{totalPrice}</small>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="emptycarttext">
                <h4>No items in your cart</h4>
                <small>Your favourite items are just a click away</small>
              </div>
              <div className="startshopping" onClick={() => changeCartStatus()}>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Start Shopping
                </Link>
              </div>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
}
