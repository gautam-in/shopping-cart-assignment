import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseCount, decreaseCount } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const windowSize = useSelector((state) => state.user.windowSize);
  const cartList = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalSum = Object.keys(cartList).reduce(
    (sum, key) => sum + cartList[key].price * cartList[key].count,
    0
  );

 
  return (
    <div className={`${windowSize < 900 ? "p-2" : "relative"} `}>
      <div
        className={`p-2 ${
          windowSize < 900 ? " bg-white" : "bg-black text-white"
        }`}
      >
        <span className="mr-1 text-bold font-16">My Cart</span>
        <span
          className={`${windowSize < 900 ? "text-gray-700" : "text-white"}`}
        >
          ({Object.keys(cartList).length} item)
        </span>
      </div>
      <div className={`my-2 bg-white cart-list-container`}>
        {Object.keys(cartList).map((cartId) => {
          const { imageURL, name, count, price, id, stock } = cartList[cartId];
          return (
            <>
              <hr />
              <div className="p-2 flex " key={id}>
                <img src={imageURL} alt={name} className="h-20 w-20" />
                <div className="flex justify-between w-full px-2">
                  <div>
                    <div className="font-bold p-2">{name}</div>
                    <div>
                      <button
                        className="bg-primary p-2 text-white font-bold mx-2 pointer"
                        onClick={() => dispatch(decreaseCount({ id }))}
                      >
                        -
                      </button>
                      <span className="p-2">{count}</span>
                      <button
                        className={`bg-primary p-2 text-white font-bold mx-2 ${count===stock?'opacity-10':' ponter'}`}
                        disabled={count===stock}
                        onClick={() => dispatch(increaseCount({id}))}
                      >
                        +
                      </button>
                      <span> x ₹{price}</span>
                    </div>
                  </div>
                  <div className="align-self-center"> ₹{price * count}</div>
                </div>
              </div>
              <hr />
            </>
          );
        })}
        {Object.keys(cartList).length ? (
          <div className="bg-white p-4 flex items-center">
            <img src="/static/images/lowest-price.png" className="h-12" />
            <div className="text-gray-700 ml-4">
              You won't find it cheaper anywhere
            </div>
          </div>
        ) : (
          <div className="h-50 flex column items-center justify-center">
            <div className="font-16 font-bold">No items in your cart</div>
            <div>Your favourite items are just a click away</div>
          </div>
        )}
      </div>
      {Object.keys(cartList).length ? (
        <div
          className={` bg-white p-2 ${
            windowSize < 900 ? "bottom-4 w-98 absolute" : "w-full mb-4"
          }`}
        >
          <div className="font-12 text-center">
            Promocode can be applied on payment page
          </div>
          <button className="w-full bg-primary text-white font-semibold p-2 ">
            <div className="flex justify-between">
              <div>Proceed to checkout</div>
              <div>₹{totalSum}</div>
            </div>
          </button>
        </div>
      ) : (
        <button
          className="bg-primary bottom-4 absolute block mx-2 w-98 text-white font-semibold text-center p-2"
          onClick={() => navigate("/product")}
        >
          Start Shopping
        </button>
      )}
    </div>
  );
}

export default Cart;
