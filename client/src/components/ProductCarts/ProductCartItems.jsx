import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Dialog from "../UI/Dialog/Dialog";
import ProductCartItem from "./ProductCartItem/ProductCartItem";
import { handleReset } from "../../store/action";
import "./ProductCartItems.scss";
import { LABEL } from "../../constants/constant";
export function ProductCartItems(props) {
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
    <section data-test="component-productCartItems">
      <Dialog
        dialog={dialog}
        setDialog={setDialog}
        onDialogConfirm={onDialogConfirm}
      />
      <section className="productItemsContainer">
        <section className="items">
          {cart.map((item) => (
            <ProductCartItem item={item} key={item.id} />
          ))}
        </section>
        <section className="checkoutBanner">
          <figure className="bannerImageUrl">
            <img src="./static/images/lowest-price.png" alt="" height="40px" />
          </figure>
          <figcaption>{LABEL.CHEAPER_MESSAGE}</figcaption>
        </section>
      </section>
      <section className="checkoutButtonContainer">
        <small>{LABEL.PROMO}</small>
        <button className="checkoutButton" onClick={() => setDialog(true)}>
          <span>{LABEL.CHECKOUT}</span>
          <span>
            &nbsp;{LABEL.RS}&nbsp; {total_price()}&nbsp;{">"}
          </span>
        </button>
      </section>
    </section>
  );
}
export default withRouter(connect(null, { handleReset })(ProductCartItems));
