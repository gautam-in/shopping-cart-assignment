import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCartList } from "../../redux/cartSlice";
import { GlobalReducerInterface, Product } from "../../redux/interface";
import "./ProductCard.css";

const ProductCard:React.FC<{product:Product, firstCardRef:React.Ref<any>|null}>=({ product, firstCardRef }) =>{
  const { name, imageURL, description, price, id } = product;
  const windowSize = useSelector((state:GlobalReducerInterface) => state.user.windowSize);
  const cartList=useSelector((state:GlobalReducerInterface)=>state.cart.cartList);
  const dispatch: React.Dispatch<any> = useDispatch();
  return (
    <div className="card p-2 h-full">
      <a className="font-bold" ref={firstCardRef}>{name}</a>
      {windowSize && windowSize > 900 ? (
        <>
          <div className="my-2 flex justify-center">
            <img src={imageURL} alt={name} className="img-height" />
          </div>
          <a className="bg-gray-200 p-1 font-12 overflow-hidden desc-height">
            {description}
          </a>
          <div className=" flex justify-between p-2 items-center">
            <a className="font-semibold">MRP ₹{price}</a>
            {cartList[id]?<button className="primary font-semibold text-center py-2">Item added to cart!</button>:<button className="w-20 py-2 bg-primary text-white font-semibold text-center" onClick={()=>dispatch(addToCartList(product))}>
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
          {cartList[id]?<button className="primary font-semibold text-center py-2">Item added to cart!</button>:<button className="w-full py-2 bg-primary text-white font-semibold text-center">
            Buy Now @ ₹{price}
          </button>}
        </>
      )}
    </div>
  );
}

export default ProductCard;
