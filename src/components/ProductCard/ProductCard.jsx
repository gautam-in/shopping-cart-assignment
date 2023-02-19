import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCartList } from "../../redux/cartSlice";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { name, imageURL, description, price, id } = product;
  const windowSize = useSelector((state) => state.user.windowSize);
  const cartList=useSelector((state)=>state.cart.cartList);
  const dispatch = useDispatch();
  return (
    <div className="card p-2">
      <header className="font-bold name-height">{name}</header>
      {windowSize > 900 ? (
        <>
          <div className="my-2 flex justify-center">
            <img src={imageURL} alt={name} className="img-height" />
          </div>
          <div className="bg-gray-200 p-1 font-12 desc-height overflow-hidden">
            {description}
          </div>
          <div className=" flex justify-between p-2 items-center">
            <div className="font-semibold">MRP ₹{price}</div>
            {cartList[id]?<div className="primary font-semibold text-center py-2">Item added to cart!</div>:<button className="w-20 py-2 bg-primary text-white font-semibold text-center" onClick={()=>dispatch(addToCartList(product))}>
              Buy Now
            </button>}
          </div>
        </>
      ) : (
        <>
          <div className="my-2 flex h-35 justify-between">
            <img
              src={imageURL}
              alt={name}
              className="img-height align-self-center"
            />
            <div className="bg-gray-200 p-2 ml-1 font-12 overflow-hidden">
              {description}
            </div>
          </div>
          <button className="w-full py-2 bg-primary text-white font-semibold text-center">
            Buy Now @ ₹{price}
          </button>
        </>
      )}
    </div>
  );
}

export default ProductCard;
