import React, { useContext } from "react";
import styles from "./Cart.module.css";
import classNames from "classnames";
import Modal from "react-modal";
import { CartContext } from "../../Context/CartContext";

const customStyles = {
  content: {
    top: "5rem",
    right: 0,
    padding: 0,
    paddingBottom: "20px",
    outline: 0,
    margin: 0,
    left: "auto",
    backgroundColor: "lightGrey",
    width: "38%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

const customFullPageStyles = {
  content: {
    top: "5rem",
    right: 0,
    padding: 0,
    paddingBottom: "20px",
    outline: 0,
    margin: 0,
    left: "auto",
    backgroundColor: "lightGrey",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
};

export const Cart = ({ closeCart }) => {
  const context = useContext(CartContext);
  const cartItemRemoveHandler = (id) => {
    context.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    context.addItem({ ...item, amount: 1 });
  };

  return (
    <Modal
      isOpen={true}
      className={classNames("content")}
      overlayClassName={classNames("overlay")}
      ariaHideApp={false}
    >
      <div className=" flex justify-between items-center p-4 bg-black md:bg-white">
        <h1 className="text-xl text-white sm:text-sm md:text-black md:font-bold">
          My Cart{" "}
          <span className="text-base sm:text-xs md:text-black md:font-bold">
            ({context?.totalItemsCount} item)
          </span>
        </h1>
        <button
          onClick={closeCart}
          className="text-white text-2xl sm:text-sm md:text-black md:font-bold"
        >
          X
        </button>
      </div>
      {context?.items?.length ? (
        context?.items?.map((item) => (
          <>
            <li className="flex justify-between items-center bg-white shadow-md p-2">
              <div className="flex">
                <img
                  src={item?.imageURL}
                  className="w-16 mr-2"
                  alt={item?.name}
                />
                <div className="">
                  <h4 className="text-sm sm:text-xs font-bold">{item?.name}</h4>
                  <section className="flex mt-1 justify-start items-start">
                    <button
                      className={classNames(
                        styles.buttonBackground,
                        "text-white p-1 h-4 flex justify-center items-center"
                      )}
                      onClick={() => cartItemRemoveHandler(item?.id)}
                    >
                      -
                    </button>
                    <span className="text-sm mx-2 font-bold">
                      {item?.amount}
                    </span>
                    <button
                      className={classNames(
                        styles.buttonBackground,
                        "text-white p-1 h-4 flex justify-center items-center"
                      )}
                      onClick={() => cartItemAddHandler(item)}
                    >
                      +
                    </button>
                  </section>
                </div>
              </div>

              <p className="justify-self-end text-sm font-semibold">
                Rs.{item?.price * item?.amount}
              </p>
            </li>
          </>
        ))
      ) : (
        <>
          <div className="p-6">
            <h2 className="text-xl font-medium sm:text-sm">
              No items in your cart
            </h2>
            <p className="sm:text-xs">
              your favorite items are just a click away
            </p>
          </div>
          <button
            className={classNames(styles.buttonBackground, "font-medium p-3")}
          >
            <p className="text-white sm:text-sm"> Start Shopping</p>
          </button>
        </>
      )}
      {context?.items?.length ? (
        <div className="flex flex-col justify-center items-center bg-white sm:text-sm">
          <p>Promo code can be applied on payment page</p>
          <button
            className={classNames(
              styles.buttonBackground,
              "font-medium p-3 w-full flex justify-between items-center"
            )}
            onClick={closeCart}
          >
            <p className="text-white">Proceed to checkout</p>
            <p className="text-white">
              Rs.{context?.totalAmount} {">"}
            </p>
          </button>
        </div>
      ) : (
        ""
      )}
    </Modal>
  );
};
