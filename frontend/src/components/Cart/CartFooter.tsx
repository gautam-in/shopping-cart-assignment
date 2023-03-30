import { useRouter } from "next/router";
import React from "react";
import Button from "../Button";
import styles from "./Cart.module.scss";

const CartFooter = ({
  isCartEmpty = false,
  total,
}: {
  isCartEmpty?: boolean;
  total: number;
}) => {
  const { push } = useRouter();
  const handleButtonClick = () => {
    if (isCartEmpty) {
      push("/product");
    } else {
      // Todo: Checkout page
      push("/checkout");
    }
  };
  return (
    <footer className={styles["cart-footer"]}>
      {!isCartEmpty && (
        <p className={styles["cart-footer--promocode"]}>
          Promocode can be applied on payment page
        </p>
      )}
      <Button onClick={handleButtonClick}>
        {!isCartEmpty ? (
          <>
            <p>Proceed to Checkout</p>
            <p>
              Rs. {total}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </p>
          </>
        ) : (
          <p className={styles["cart-footer--start-shopping"]}>
            Start Shopping
          </p>
        )}
      </Button>
    </footer>
  );
};

export default CartFooter;
