import React, { useEffect, useState } from "react";
import discountImage from "../../static/images/lowest-price.png";
import CartSection from "./CartSection";
import EmptyCart from "./EmptyCart";


export default function CartTablet({ className = "", count, products }) {
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      Object.values(products).reduce(
        (acc, current) => acc + current.quantity * current.price,
        0
      )
    );
  }, [products]);

  return (
    <div className={`${className} cart-tablet`}>
      {/* Cart Page when Items are Present */}
      {count > 0 ? (
        <>
          <section className="cart-tablet-section-wrapper">
            {Object.values(products).map((product) => {
              return <CartSection key={product?.id} product={product} />;
            })}

            <div className="cart-tablet-discount">
              <img
                src={discountImage}
                alt={"Discounted Image"}
                className={"cart-tablet-discount-img"}
              />
              <p className="cart-tablet-discount-text">
                You won't find it cheaper anywhere
              </p>
            </div>
          </section>

          <footer className="cart-tablet-footer">
            <p className="cart-tablet-footer-text">
              Promo code can be applied on payment page
            </p>
            <button className={"cart-tablet-footer-buyout-button"}>
              <span>Proceed to Checkout</span>
              <span>Rs.{totalAmount} &#10095;</span>
            </button>
          </footer>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
