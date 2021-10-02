import React, { useContext } from "react";
import CartTablet from "./CartTablet";
import { GlobalAppContext} from "../../Context/GlobalAppContext";

export default function CartModal({ cartOpen }) {
  const {
    cartItems: { count, products },
    dispatch,
  } = useContext(GlobalAppContext);
  const countItems = count === 1 ? `${count} item` : `${count} items`;

  const hideModal = (e) =>{
    if(e.target.classList.contains('hide-cartmodal'))
    dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })
  }

  return (
    <section className="cartmodal hide-cartmodal" onClick={hideModal} >   
    <section className="cartmodal-section">
      <div className="cartmodal-section-heading">
        <h1 className="cartmodal-section-heading-title">
          My Cart ({countItems})
        </h1>
        <button
          className={"cartmodal-section-heading-button hide-cartmodal"}
          onClick={hideModal}
        >
          &#10005;
        </button>
      </div>
      <CartTablet
        className={"cartmodal-section-flex"}
        count={count}
        products={products}
      />
    </section>
    </section>
  );
}
