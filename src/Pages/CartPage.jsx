import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "../components/Cart";
import {
  addToCartData,
  removeCartData,
  selectItems,
  totalPrice,
} from "../Redux/Reducers/cartSlice";
import {} from "../Redux/Reducers/categorySlice";

const CartPage = ({ cartHandler }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectItems);
  const totalPrices = useSelector(totalPrice);
  const addToCartHandler = (id) => {
    dispatch(addToCartData({ id: id, qty: 1 }));
  };
  const removeToCartHandler = (id, qty) => {
    dispatch(removeCartData({ id: id, qty: qty }));
  };
  const closeCartHandler = () => {
    cartHandler();
  };
  return (
    <>
      <div
        className="relative z-10 hidden md:block"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed  right-0 flex max-w-full top-20 inset-y-0">
              <div className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-scroll bg-light shadow-xl">
                  <div className="flex-1 overflow-y-auto  ">
                    <div className=" flex flex-col bg-light h-full">
                      <div className="h-12  flex flex-row items-center justify-center  text-white bg-black">
                        <label className="text-2xl flex-grow  font-normal">
                          My Cart
                          {products?.length > 0
                            ? "(items" + products?.length + ")"
                            : ""}
                        </label>

                        <button
                          onClick={() => {
                            cartHandler();
                          }}
                          className="text-2xl pr-2"
                        >
                          x
                        </button>
                      </div>
                      <div className="h-3"></div>
                      <div className="flex flex-col flex-grow bg-white">
                        {products?.map((item) => {
                          return (
                            <div key={item.id}>
                              <div className="flex flex-row  p-3">
                                <img
                                  height={70}
                                  width={70}
                                  src={item.imageURL}
                                  alt="/"
                                ></img>
                                <div className="flex pl-2 flex-grow flex-col">
                                  <p className="text-sm font-semibold">
                                    {item.name}
                                  </p>
                                  <div className="flex items-center flex-grow">
                                    <button
                                      onClick={() => {
                                        addToCartHandler(item.id);
                                      }}
                                      className="h-7 w-7 bg-rose-500 text-white"
                                    >
                                      +
                                    </button>
                                    <label className="ml-2">{item.qty}</label>
                                    <button
                                      onClick={() => {
                                        removeToCartHandler(item.id, item.qty);
                                      }}
                                      className="h-7 w-7 bg-rose-500 ml-2 mr-2 text-white"
                                    >
                                      -
                                    </button>
                                    <label className="text-xl mr-2">x</label>
                                    <label className="text-lg">
                                      <span className="text-sm"> Rs.</span>
                                      {item.price}
                                    </label>
                                    <label className="ml-auto font-medium text-lg">
                                      <span className="text-sm"> Rs.</span>
                                      {item.price * item.qty}
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="h-3 bg-light"></div>
                            </div>
                          );
                        })}

                        <div className="flex-grow flex w-full items-center justify-center bg-light">
                          {products?.length === 0 && (
                            <div className=" ">
                              <p className="text-center font-bold">
                                No items in your cart.
                              </p>
                              <p className="text-center">
                                Your favourite items are just a click away
                              </p>
                            </div>
                          )}
                        </div>
                        <div
                          className="mt-auto   flex flex-col items-center justify-center"
                          style={{
                            boxShadow: "0px -1px 2px rgba(0, 0, 0, 0.3)",
                          }}
                        >
                          {products?.length > 0 && (
                            <label className="text-sm p-2">
                              promo code can be applied on payment page
                            </label>
                          )}
                          {products?.length > 0 && (
                            <button
                              className="bg-rose-600 h-9  text-white w-full "
                              onClick={closeCartHandler}
                            >
                              <div className="flex flex-row cursor-pointer">
                                <label className="pl-5 cursor-pointer">
                                  Proceed to Checkout
                                </label>
                                <label className="ml-auto pr-5 cursor-pointer">
                                  {totalPrices ? totalPrices : 0}
                                </label>
                              </div>
                            </button>
                          )}
                          {products?.length === 0 && (
                            <button
                              className="bg-rose-600 h-9  text-white w-full "
                              onClick={closeCartHandler}
                            >
                              Start Shopping
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cart
        products={products}
        totalPrices={totalPrices}
        addToCartHandler={addToCartHandler}
        removeToCartHandler={removeToCartHandler}
        closeCartHandler={closeCartHandler}
      ></Cart>
    </>
  );
};

export default CartPage;
