import { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "../assets/styles/pages/Cart.scss";
import CartItems from "../components/CartItems";
import { CartContext } from "../context";

const Cart = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const cart = searchParams.get("cart");
  const { totalItems } = useContext(CartContext);

  const getGrandTotal = () => {
    let total = 0;
    if (totalItems.length) {
      totalItems.forEach((item) => {
        total = total + item.cart * item.price;
      });
    }
    return total;
  };

  if (!!cart) {
    document.body.parentElement.style.overflow = "hidden";
  }

  return (
    <div className="page-cart" aria-modal={!!cart}>
      <div className="container">
        <div className="wrapper-cart">
          <div>
            <div className="cart-header">
              <span>
                My Cart ({totalItems.length} item
                {totalItems.length > 1 ? "s" : ""})
              </span>
              <span
                tabIndex="0"
                role="button"
                aria-label="close cart"
                className="btn-close"
                onClick={() => {
                  document.body.parentElement.style.overflow = "unset";
                  searchParams.delete("cart");
                  setSearchParams(searchParams);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    document.body.parentElement.style.overflow = "unset";
                    searchParams.delete("cart");
                    setSearchParams(searchParams);
                  }
                }}
              >
                X
              </span>
            </div>

            <div className="cart-body">
              {!totalItems.length ? (
                <div className="cart-empty">
                  <h2>No items in your cart</h2>
                  <p>Your favourite items are just a click away</p>
                </div>
              ) : (
                ""
              )}

              {totalItems.length
                ? totalItems.map((item) => (
                    <CartItems key={item.id} item={item} />
                  ))
                : ""}
            </div>
          </div>

          <div className="cart-footer">
            {totalItems.length ? (
              <p className="info">Promo code can be applied on payment page</p>
            ) : (
              ""
            )}

            {totalItems.length ? (
              <button className="btn btn-proceed">
                <span>Proceed to Checkout</span>
                <span>Rs. {getGrandTotal()} </span>
              </button>
            ) : (
              ""
            )}

            {!totalItems.length ? (
              <Link to="/products" className="btn">
                Start Shopping
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
