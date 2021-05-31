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
  const total_price = () => {
    let initialPrice = 0;
    for (let item of cart) {
      initialPrice = item.price * item.quantity + initialPrice;
    }
    return initialPrice;
  };
  return (
    <section>
      <Dialog
        dialog={dialog}
        setDialog={setDialog}
        onDialogConfirm={onDialogConfirm}
      />
      <section
        style={{ height: "100%", overflow: "auto", position: "relative" }}
      >
        <section className="items">
          {cart.map((item) => (
            <ProductCartItem item={item} key={item.id} />
          ))}
        </section>
        <section className="checkoutBanner">
          <figure style={{ margin: "0px" }}>
            <img src="./static/images/lowest-price.png" alt="" height="40px" />
          </figure>
          <figcaption>You won't find it cheaper anywhere.</figcaption>
        </section>
        <section className="checkoutButtonContainer">
          <small>Promo code can be applied on payment page.</small>
          <button className="checkoutButton" onClick={() => setDialog(true)}>
            <span>Proceed to checkout</span>
            <span>
              &nbsp;Rs.&nbsp; {total_price()}&nbsp;{">"}
            </span>
          </button>
        </section>
      </section>
    </section>
  );
}
export default withRouter(connect(null, { handleReset })(ProductCartItems));
