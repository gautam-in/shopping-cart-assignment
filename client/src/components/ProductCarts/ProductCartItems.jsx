import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Dialog from "../UI/Dialog/Dialog";
import ProductCartItem from "./ProductCartItem/ProductCartItem";
import { handleReset } from "../../store/action";
import "./ProductCartItems.scss";
function ProductCartItems(props) {
  const { cart, setCartDialog, handleReset } = props;
  const [dialog, setDialog] = React.useState(false);
  const onDialogConfirm = () => {
    setDialog(false);
    setCartDialog(false);
    handleReset();
    props.history.push("/");
  };
  return (
    <>
      <Dialog
        dialog={dialog}
        setDialog={setDialog}
        onDialogConfirm={onDialogConfirm}
      />
      <div style={{ height: "100%", overflow: "auto", position: "relative" }}>
        <div className="items">
          {cart.map((item) => (
            <ProductCartItem item={item} key={item.id} />
          ))}
        </div>
        <div className="checkoutBanner">
          <div>
            <img src="./static/images/lowest-price.png" alt="" height="40px" />
          </div>
          <div>You won't find it cheaper anywhere.</div>
        </div>
        <div className="checkoutButtonContainer">
          <small>Promo code can be applied on payment page.</small>
          <button className="checkoutButton" onClick={() => setDialog(true)}>
            <span>Proceed to checkout</span>
            {/* <span>
            Rs. {price()} &nbsp;&nbsp;&nbsp; <b>{"  >"}</b>
          </span> */}
          </button>
        </div>
      </div>
    </>
  );
}
export default withRouter(connect(null, { handleReset })(ProductCartItems));
