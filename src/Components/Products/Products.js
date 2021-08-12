import React from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../../redux/Cart/cartactions";
import Product from "../Product/Product";
import "./Products.scss";
export default function Products(props) {
  const dispatch = useDispatch();
  const addtoCart = (ele) => dispatch(addtocart(ele))
  return (
    <>
      {props.products.length ? (
        <div className="allproducts">
          {props.products.map((ele) => (
            <Product
              product={ele}
              key={ele.id}
              addtocart={() => addtoCart(ele)}
            />
          ))}
        </div>
      ) : (
        <h1>No items available</h1>
      )}
    </>
  );
}
