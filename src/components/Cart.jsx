import React from "react";

const Cart = ({
  products,
  totalPrices,
  addToCartHandler,
  removeToCartHandler,
  closeCartHandler,
}) => {
  return (
    <div
      className="relative  md:hidden h-full w-full z-10"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed  right-0 flex max-w-full top-12 sm:top-20 inset-y-0">
        <div className="w-screen ">
          <div className="flex h-full flex-col bg-light shadow-xl">
            <div className="flex-1 overflow-y-auto  ">
              <div className=" flex flex-col h-full w-full bg-light ">
                <div className="h-2"></div>
                <div className="  h-12 mt-5 pl-6 flex items-center  bg-white">
                  <label className="text-2xl  font-bold">
                    My Cart
                    {products?.length > 0
                      ? "(items" + products?.length + ")"
                      : ""}
                  </label>
                </div>
                <div className="h-3"></div>
                <div className="flex flex-col flex-grow bg-white">
                  {products?.map((item, index) => {
                    return (
                      <React.Fragment key={item.id + "div2"}>
                        <div className="flex flex-row  p-3">
                          <img
                            height={70}
                            width={70}
                            src={item.imageURL}
                            alt="/"
                          ></img>
                          <div className="flex pl-2 flex-grow flex-col">
                            <p className="text-sm font-semibold">{item.name}</p>
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
                      </React.Fragment>
                    );
                  })}
                  <div className="flex-grow flex w-full items-center justify-center  bg-light">
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
                    className="mt-auto    flex flex-col items-center justify-center"
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
  );
};

export default Cart;
