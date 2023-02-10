import React from "react";
import { useEffect } from "react";
import { ImMenu } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { calculateTotal } from "../Features/shopping-cart/cartSlice";
function ShoppingCart() {
  const { products } = useSelector((state) => state.cart);
  const { totalItems, totalAmount } = useSelector((state) => state.cart);

  const delivery = 100;

  const dispatch = useDispatch();

  const calculateDiscount = () => {
    return (totalAmount * 5) / 100;
  };

  const discount = calculateDiscount();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [totalItems]);

  return (
    <section
      className="shopping-cart offcanvas offcanvas-end"
      id="cart-container"
    >
      <div className="offcanvas-header">
        <h1 className="offcanvas-title">
          Shopping Cart{" "}
          <span style={{ fontWeight: "normal" }}>
            ({totalItems > 0 ? `${totalItems} items` : "0 item"})
          </span>
        </h1>
        <button
          id="close-btn"
          type="button"
          aria-label="Close"
          className="btn-close btn-close-white text-reset"
          data-bs-dismiss="offcanvas"
        ></button>
      </div>
      <div className="offcanvas-body">
        {products.length !== 0 ? (
          products.map((prod) => {
            return <CartItem key={prod.id} product={prod} />;
          })
        ) : (
          <p className="text-center py-5">Your cart is empty.</p>
        )}
        {products.length > 0 && (
          <>
            <div className="cart-summary mb-3 d-flex flex-column justify-content-between">
              <div className="total-section d-flex flex-wrap flex-sm-nowrap">
                <div className="item text-center text-sm-start">
                  <span className="label">
                    Discount:<strong>Rs {discount}</strong>
                  </span>
                </div>
                <div className="item text-center text-sm-start">
                  <span className="label">
                    Delivery:<strong>Rs 100</strong>
                  </span>
                </div>
                <div className="item text-center">
                  <span className="label ">
                    SubTotal:
                    <strong>Rs {totalAmount}</strong>
                  </span>
                </div>
                <div className="item text-center">
                  <span className="label">
                    Total:
                    <strong>Rs {totalAmount + discount + delivery}</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="checkout-section d-flex flex-column flex-md-row">
              <div className="discount mb-3 mb-md-0 ">
                <form action="" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    name="discount"
                    id="discount"
                    aria-label="discount"
                    className="flex-grow-2"
                  />
                  <button className="flex-grow-1 me-md-5" type="submit">
                    Apply Discount
                  </button>
                </form>
              </div>
              <div className="checkout d-flex flex-grow-1">
                <button data-bs-dismiss="offcanvas" className="flex-grow-1">
                  Checkout
                </button>
                <button
                  data-bs-dismiss="offcanvas"
                  className="ms-2 flex-grow-1 flex-md-grow-0"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default ShoppingCart;
