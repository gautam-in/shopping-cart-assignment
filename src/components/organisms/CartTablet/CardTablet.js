import React, { useEffect, useState } from "react";
import "./CardTablet.scss";
import discountImage from "../../../../static/images/lowest-price.png";
import Button from "../../atoms/Button/Button";

import CartSection from "../../organisms/CartSection/CartSection";
import Image from "../../atoms/Image/Image";
import EmptyCart from "../../organisms/EmptyCart/EmptyCart";

export default function CardTablet({ className = "", count, products }) {
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
          <section className="cart-tablet__section-wrapper">
            {Object.values(products).map((product) => {
              return <CartSection key={product?.id} product={product} />;
            })}

            <div className="cart-tablet__discount">
              <Image
                source={discountImage}
                alt={"Discounted Image"}
                className={"cart-tablet__discount__img"}
              />
              <p className="cart-tablet__discount__text">
                You won't find it cheaper anywhere
              </p>
            </div>
          </section>

          <footer className="cart-tablet__footer">
            <p className="cart-tablet__footer__text">
              Promo code can be applied on payment page
            </p>
            <Button className={"cart-tablet__footer__buyout-button"}>
              <span>Proceed to Checkout</span>
              <span>Rs.{totalAmount} &#10095;</span>
            </Button>
          </footer>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
