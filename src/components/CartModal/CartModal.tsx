import { useEffect, useMemo } from "react";
import { useCartContext } from "../../context/cartContext";
import { Product } from "../../pages/products";

interface ICartModal {
  onClose: () => void;
}
export default function CartModal({ onClose }: ICartModal) {
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  const { state, dispatch } = useCartContext();

  const total = useMemo(() => {
    return state.cart.reduce(
      (acc, prod) => (acc += prod.price * prod.quantity),
      0
    );
  }, [state.cart]);

  return (
    <div
      className="z-50 block fixed left-0 top-0 h-full w-full bg-black/40"
      role="dialog"
    >
      <div className="relative h-screen w-screen max-w-6xl mx-auto ">
        <div className="absolute top-0 pt-20 right-0 w-full lg:w-1/2 h-full">
          <div className="flex flex-col h-full">
            <div className="bg-black p-4 text-white flex justify-between">
              <div className="">
                My Cart
                {state.cart.length > 0 && (
                  <span className="text-xs">({state.cart.length} items)</span>
                )}
              </div>
              <button onClick={onClose} autoFocus>
                X
              </button>
            </div>
            <div className="bg-offWhite flex-1 flex flex-col">
              {state.cart.length > 0 ? (
                <>
                  <div className="flex-1">
                    <div className=" overflow-y-auto  max-h-[calc(100%-20rem)]">
                      {state.cart.map((prod) => (
                        <div
                          className="bg-white p-4 my-4 flex gap-4"
                          key={prod.id}
                        >
                          <img
                            src={prod.imageURL}
                            alt={prod.name}
                            className="h-20 w-20"
                          />
                          <div className="flex flex-col w-full justify-center gap-2">
                            <div className="font-bold">{prod.name}</div>
                            <div className="flex justify-between">
                              <div className="flex gap-4">
                                <button
                                  className="bg-primary text-white rounded-full h-6 aspect-square w-6 flex justify-center items-center"
                                  onClick={() =>
                                    dispatch({
                                      type: "REMOVE_FROM_CART",
                                      payload: prod,
                                    })
                                  }
                                >
                                  -
                                </button>
                                <span>{prod.quantity}</span>
                                <button
                                  className="bg-primary text-white rounded-full h-6 aspect-square w-6 flex justify-center items-center"
                                  onClick={() =>
                                    dispatch({
                                      type: "ADD_TO_CART",
                                      payload: prod,
                                    })
                                  }
                                  disabled={prod.quantity >= prod.stock}
                                >
                                  +
                                </button>
                                <span>x</span>
                                <span>{prod.price}</span>
                              </div>
                              <div className="mr-2">
                                Rs.{prod.price * prod.quantity}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-white m-4 p-4 rounded-sm flex items-center gap-4">
                      <img
                        src="/static/images/lowest-price.png"
                        alt="lowest price"
                      />
                      you won't find it cheaper anywhere
                    </div>
                  </div>
                  <div className="bg-white w-full p-4">
                    <p className="text-center my-3">
                      Promo code can be applied on payment page
                    </p>
                    <button
                      className="bg-primary text-white p-4 rounded w-full flex justify-between"
                      onClick={onClose}
                    >
                      Proceed to Checkout
                      <span className="">Rs.{total} &gt;</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex-1 grid place-content-center text-center">
                    <h2 className="text-2xl font-bold">
                      No items in your cart
                    </h2>
                    <p>your favourite items just a click away</p>
                  </div>
                  <button
                    className="bg-primary m-2 text-white block py-2 rounded"
                    onClick={onClose}
                  >
                    Start shopping
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
